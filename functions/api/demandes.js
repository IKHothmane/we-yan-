const DEFAULT_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzQbb_vC_kVM4qa-pL_d1mcNfztYFfmUCzTTJ9N_LE3thVCXrYYHzu2JRUDKsDvNJ8UWA/exec'

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

export async function onRequest(context) {
  const { request, env } = context

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204 })
  }

  if (request.method !== 'GET') {
    return json({ ok: false, error: 'Méthode non autorisée' }, 405)
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

  try {
    const sheetRes = await fetch(sheetUrl, {
      method: 'GET',
      redirect: 'follow',
    })
    const sheetBody = await sheetRes.json().catch(() => ({}))
    const rows = Array.isArray(sheetBody.rows) ? sheetBody.rows : []
    return json({ ok: true, rows })
  } catch {
    return json({ ok: false, error: 'Impossible de lire Google Sheets.' }, 502)
  }
}
