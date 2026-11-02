import {
  FROM_EMAIL,
  buildEmailHtml,
  buildSheetPayload,
  parseRecipients,
  resendErrorMessage,
  validateContact,
} from '../../shared/contact.js'
import { json } from '../../shared/http.js'
import { postToSheet } from '../../shared/sheet.js'

export async function onRequest(context) {
  const { request, env } = context

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 })
  }

  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Méthode non autorisée' }, 405)
  }

  const apiKey = String(env.RESEND_API_KEY || '').trim()
  if (!apiKey || apiKey.startsWith('re_xxxx')) {
    return json(
      {
        ok: false,
        error:
          'Clé API Resend manquante. Ajoutez RESEND_API_KEY dans Cloudflare Pages → Settings → Environment variables.',
      },
      500
    )
  }

  const recipients = parseRecipients(env.CONTACT_TO_EMAILS)
  if (recipients.length === 0) {
    return json(
      {
        ok: false,
        error:
          'Destinataires manquants. Ajoutez CONTACT_TO_EMAILS (adresses séparées par des virgules) dans Cloudflare Pages → Settings → Environment variables.',
      },
      500
    )
  }

  let input
  try {
    input = await request.json()
  } catch {
    return json({ ok: false, error: 'Requête invalide.' }, 400)
  }

  // Honeypot : on répond « ok » pour ne rien révéler aux robots.
  if (input && typeof input === 'object' && String(input.website || '').trim() !== '') {
    return json({ ok: true })
  }

  const result = validateContact(input)
  if (!result.ok) {
    return json(
      { ok: false, error: result.error },
      result.error === 'Requête invalide.' ? 400 : 422
    )
  }
  const contact = result.data

  const sheetUrl = String(env.GOOGLE_SHEET_URL || '').trim()
  const sheetPromise = postToSheet(sheetUrl, buildSheetPayload(contact))

  let resendRes
  try {
    resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: recipients,
        reply_to: contact.email,
        subject: `Nouveau contact We Yan Digital — ${contact.name}`,
        html: buildEmailHtml(contact),
      }),
    })
  } catch {
    return json({ ok: false, error: 'Erreur réseau vers Resend.' }, 502)
  }

  if (!resendRes.ok) {
    const resendBody = await resendRes.json().catch(() => ({}))
    return json({ ok: false, error: resendErrorMessage(resendBody) }, 502)
  }

  const sheetResult = await sheetPromise
  if (!sheetResult.ok) {
    return json({
      ok: true,
      emailSent: true,
      sheetSaved: false,
      warning:
        'E-mail envoyé, mais l’enregistrement Google Sheets a échoué. Vérifiez GOOGLE_SHEET_URL.',
    })
  }

  return json({ ok: true, emailSent: true, sheetSaved: true })
}

export const onRequestPost = onRequest
export const onRequestOptions = onRequest
