import { json } from '../../shared/http.js'
import {
  ALLOWED_STATUSES,
  SCRIPT_OUTDATED,
  isScriptReady,
  isUpdateSuccess,
  normalizeRows,
  toSheetStatut,
  updateSheetStatus,
} from '../../shared/sheet.js'

function isAuthorized(request, env) {
  const expected = String(env.ADMIN_DEMANDES_KEY || '').trim()
  if (!expected) return false
  // Jamais via ?key= (logs, historique, Referer) — header uniquement
  const fromHeader = String(request.headers.get('x-admin-key') || '').trim()
  return fromHeader.length > 0 && fromHeader === expected
}

export async function onRequest(context) {
  const { request, env } = context

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 })
  }

  if (!isAuthorized(request, env)) {
    return json({ ok: false, error: 'Accès refusé.' }, 401)
  }

  const sheetUrl = String(env.GOOGLE_SHEET_URL || '').trim()
  if (!sheetUrl) {
    return json(
      {
        ok: false,
        error: 'GOOGLE_SHEET_URL manquante dans Cloudflare Pages → Environment variables.',
      },
      500
    )
  }

  if (request.method === 'POST') {
    let input
    try {
      input = await request.json()
    } catch {
      return json({ ok: false, error: 'Requête invalide.' }, 400)
    }

    const statut = String(input.statut || '').trim()
    if (!ALLOWED_STATUSES.includes(statut)) {
      return json({ ok: false, error: 'Statut invalide.' }, 422)
    }

    try {
      const sheetBody = await updateSheetStatus(sheetUrl, {
        row: Number(input.row) || 0,
        email: String(input.email || ''),
        message: String(input.message || ''),
        statut: toSheetStatut(statut) || statut,
      })
      if (!isUpdateSuccess(sheetBody)) {
        return json({
          ok: true,
          sheetUpdated: false,
          scriptReady: false,
          warning: sheetBody.error || SCRIPT_OUTDATED,
        })
      }
      return json({ ok: true, sheetUpdated: true, scriptReady: true })
    } catch {
      return json({
        ok: true,
        sheetUpdated: false,
        scriptReady: false,
        warning: 'Impossible de mettre à jour Google Sheets.',
      })
    }
  }

  if (request.method !== 'GET') {
    return json({ ok: false, error: 'Méthode non autorisée' }, 405)
  }

  try {
    const sheetRes = await fetch(sheetUrl, {
      method: 'GET',
      redirect: 'follow',
    })
    const sheetBody = await sheetRes.json().catch(() => ({}))
    const rows = normalizeRows(sheetBody.rows)
    return json({ ok: true, rows, scriptReady: isScriptReady(sheetBody) })
  } catch {
    return json({ ok: false, error: 'Impossible de lire Google Sheets.' }, 502)
  }
}

export const onRequestGet = onRequest
export const onRequestPost = onRequest
export const onRequestOptions = onRequest
