const TO_EMAILS = ['meriemflyer@gmail.com', 'ikhlef.othmane@gmail.com']
const FROM_EMAIL = 'We Yan Digital <contact@weyandigital.ma>'

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

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
      { ok: false, error: 'Clé API Resend manquante. Ajoutez RESEND_API_KEY dans Cloudflare Pages → Settings → Environment variables.' },
      500,
    )
  }

  let input
  try {
    input = await request.json()
  } catch {
    return json({ ok: false, error: 'Requête invalide.' }, 400)
  }

  if (!input || typeof input !== 'object') {
    return json({ ok: false, error: 'Requête invalide.' }, 400)
  }

  if (String(input.website || '').trim() !== '') {
    return json({ ok: true })
  }

  const name = String(input.name || '').trim()
  const email = String(input.email || '').trim()
  const message = String(input.message || '').trim()
  const services = Array.isArray(input.services)
    ? input.services.map((item) => String(item).trim()).filter(Boolean)
    : []

  if (!name || name.length > 120) {
    return json({ ok: false, error: 'Nom invalide.' }, 422)
  }
  if (!isEmail(email) || email.length > 180) {
    return json({ ok: false, error: 'Adresse email invalide.' }, 422)
  }
  if (!message || message.length > 5000) {
    return json({ ok: false, error: 'Message invalide.' }, 422)
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')
  const safeServices = services.length ? escapeHtml(services.join(', ')) : 'Non précisé'

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
      <h1 style="font-size:20px;margin:0 0 16px">Nouveau message — We Yan Digital</h1>
      <p><strong>Nom :</strong> ${safeName}</p>
      <p><strong>Email :</strong> ${safeEmail}</p>
      <p><strong>Services :</strong> ${safeServices}</p>
      <p><strong>Message :</strong></p>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px">${safeMessage}</div>
    </div>
  `

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
        to: TO_EMAILS,
        reply_to: email,
        subject: `Nouveau contact We Yan Digital — ${name}`,
        html,
      }),
    })
  } catch {
    return json({ ok: false, error: 'Erreur réseau vers Resend.' }, 502)
  }

  const resendBody = await resendRes.json().catch(() => ({}))
  if (!resendRes.ok) {
    const resendError =
      (typeof resendBody.message === 'string' && resendBody.message) ||
      (resendBody.error && typeof resendBody.error.message === 'string' && resendBody.error.message) ||
      'Resend a refusé l’envoi.'
    return json({ ok: false, error: resendError }, 502)
  }

  return json({ ok: true })
}
