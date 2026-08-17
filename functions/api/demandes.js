const DEFAULT_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzQbb_vC_kVM4qa-pL_d1mcNfztYFfmUCzTTJ9N_LE3thVCXrYYHzu2JRUDKsDvNJ8UWA/exec'

const ALLOWED_STATUSES = ['Nouvelle', 'Validée', 'En cours', 'Terminée', 'Annulée']

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  })
}

function isAuthorized(request, env) {
  const expected = String(env.ADMIN_DEMANDES_KEY || '').trim()
  if (!expected) return false

  const url = new URL(request.url)
  const fromQuery = url.searchParams.get('key') || ''
  const fromHeader = request.headers.get('x-admin-key') || ''
  return fromQuery === expected || fromHeader === expected
}

function normalizeRows(rows) {
  if (!Array.isArray(rows)) return []
  return rows.map((item, index, all) => {
    const parsed = Number(item?.row)
    return {
      ...item,
      row: Number.isInteger(parsed) && parsed >= 2 ? parsed : all.length + 1 - index,
      statut: item?.statut || 'Nouvelle',
    }
  })
}

const SCRIPT_OUTDATED =
  'Le script Google n’est pas à jour. Enregistrer ne suffit pas : dans Apps Script, Déployer → Gérer les déploiements → crayon → Version « Nouvelle version » → Déployer.'

function isUpdateSuccess(body) {
  if (!body || typeof body !== 'object') return false
  if (Array.isArray(body.rows)) return false
  return body.updated === true || body.success === true
}

function isScriptReady(body) {
  if (Number(body?.version) >= 3) return true
  const rows = body?.rows
  if (!Array.isArray(rows) || rows.length === 0) return false
  return rows.some((row) => row && typeof row === 'object' && ('statut' in row || 'row' in row))
}

async function updateSheetStatus(sheetUrl, payload) {
  const url = new URL(sheetUrl)
  url.searchParams.set('action', 'update')
  url.searchParams.set('row', String(payload.row || ''))
  url.searchParams.set('statut', String(payload.statut || ''))
  url.searchParams.set('email', String(payload.email || ''))
  url.searchParams.set('message', String(payload.message || ''))

  const sheetRes = await fetch(url.toString(), {
    method: 'GET',
    redirect: 'follow',
  })
  return sheetRes.json().catch(() => ({}))
}

export async function onRequest(context) {
  const { request, env } = context

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 })
  }

  if (!isAuthorized(request, env)) {
    return json({ ok: false, error: 'Accès refusé.' }, 401)
  }

  const sheetUrl = String(env.GOOGLE_SHEET_URL || DEFAULT_SHEET_URL).trim()
  if (!sheetUrl) {
    return json(
      { ok: false, error: 'GOOGLE_SHEET_URL manquante dans Cloudflare Pages → Environment variables.' },
      500,
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
        statut,
      })
      if (!isUpdateSuccess(sheetBody)) {
        return json({ ok: false, error: sheetBody.error || SCRIPT_OUTDATED, scriptReady: false }, 502)
      }
      return json({ ok: true })
    } catch {
      return json({ ok: false, error: 'Impossible de mettre à jour Google Sheets.' }, 502)
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
