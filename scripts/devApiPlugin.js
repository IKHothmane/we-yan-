import { loadEnv } from 'vite'
import {
  FROM_EMAIL,
  buildEmailHtml,
  buildSheetPayload,
  parseRecipients,
  validateContact,
} from '../shared/contact.js'
import {
  ALLOWED_STATUSES,
  SCRIPT_OUTDATED,
  isScriptReady,
  isUpdateSuccess,
  toSheetStatut,
  updateSheetStatus,
  postToSheet,
} from '../shared/sheet.js'

/** Serveur d'API local (vite dev / preview) qui reproduit functions/api/*. */

function sendJson(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(body))
}

async function readJsonBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

function isAuthorized(req, adminKey) {
  const fromHeader = String(req.headers['x-admin-key'] || '').trim()
  return fromHeader.length > 0 && fromHeader === adminKey
}

function resolveDevAdminKey(env) {
  const configured = String(env.ADMIN_DEMANDES_KEY || '').trim()
  if (configured) return configured
  // Clé « dev » uniquement si explicitement autorisée en local
  if (String(env.ALLOW_DEV_ADMIN_KEY || '').toLowerCase() === 'true') return 'dev'
  return ''
}

async function handleDemandes(req, res, { sheetUrl, adminKey }) {
  if (!adminKey) {
    return sendJson(res, 503, {
      ok: false,
      error:
        'ADMIN_DEMANDES_KEY manquante. Définissez-la dans .env.local, ou ALLOW_DEV_ADMIN_KEY=true pour utiliser « dev » en local uniquement.',
    })
  }
  if (!isAuthorized(req, adminKey)) {
    return sendJson(res, 401, {
      ok: false,
      error: 'Accès refusé. Envoyez le header X-Admin-Key (pas de ?key= dans l’URL).',
    })
  }
  if (!sheetUrl) {
    return sendJson(res, 500, { ok: false, error: 'GOOGLE_SHEET_URL manquante dans .env.local.' })
  }

  if (req.method === 'GET') {
    const sheetRes = await fetch(sheetUrl, { method: 'GET', redirect: 'follow' })
    const sheetBody = await sheetRes.json().catch(() => ({}))
    const rows = Array.isArray(sheetBody.rows) ? sheetBody.rows : []
    return sendJson(res, 200, { ok: true, rows, scriptReady: isScriptReady(sheetBody) })
  }

  if (req.method === 'POST') {
    const input = await readJsonBody(req)
    const statut = String(input.statut || '').trim()
    if (!ALLOWED_STATUSES.includes(statut)) {
      return sendJson(res, 422, { ok: false, error: 'Statut invalide.' })
    }
    const sheetBody = await updateSheetStatus(sheetUrl, {
      row: Number(input.row) || 0,
      email: String(input.email || ''),
      message: String(input.message || ''),
      statut: toSheetStatut(statut) || statut,
    })
    if (!isUpdateSuccess(sheetBody)) {
      return sendJson(res, 200, {
        ok: true,
        sheetUpdated: false,
        scriptReady: false,
        warning: sheetBody.error || SCRIPT_OUTDATED,
      })
    }
    return sendJson(res, 200, { ok: true, sheetUpdated: true, scriptReady: true })
  }

  return sendJson(res, 405, { ok: false, error: 'Méthode non autorisée' })
}

async function handleContact(req, res, { sheetUrl, resendKey, recipients }) {
  if (req.method !== 'POST') {
    return sendJson(res, 405, { ok: false, error: 'Méthode non autorisée' })
  }

  const input = await readJsonBody(req)
  if (String(input.website || '').trim()) return sendJson(res, 200, { ok: true })

  const result = validateContact(input)
  if (!result.ok) return sendJson(res, 422, { ok: false, error: result.error })
  const contact = result.data

  if (!resendKey || resendKey.startsWith('re_xxxx')) {
    return sendJson(res, 500, { ok: false, error: 'RESEND_API_KEY manquante dans .env.local' })
  }
  if (recipients.length === 0) {
    return sendJson(res, 500, { ok: false, error: 'CONTACT_TO_EMAILS manquante dans .env.local' })
  }

  const sheetResult = await postToSheet(sheetUrl, buildSheetPayload(contact))

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: recipients,
      reply_to: contact.email,
      subject: `Nouveau contact We Yan Digital — ${contact.name}`,
      html: buildEmailHtml(contact),
    }),
  })
  if (!resendRes.ok) {
    return sendJson(res, 502, {
      ok: false,
      error: 'E-mail non envoyé (Resend). Vérifiez RESEND_API_KEY et le domaine vérifié.',
      sheetSaved: sheetResult.ok,
    })
  }

  if (!sheetResult.ok) {
    return sendJson(res, 200, {
      ok: true,
      emailSent: true,
      sheetSaved: false,
      warning: 'E-mail envoyé, mais Google Sheets a échoué. Vérifiez GOOGLE_SHEET_URL.',
    })
  }
  return sendJson(res, 200, { ok: true, emailSent: true, sheetSaved: true })
}

function attachApi(server, env) {
  const context = {
    sheetUrl: String(env.GOOGLE_SHEET_URL || '').trim(),
    adminKey: resolveDevAdminKey(env),
    resendKey: String(env.RESEND_API_KEY || '').trim(),
    recipients: parseRecipients(env.CONTACT_TO_EMAILS),
  }

  server.middlewares.use(async (req, res, next) => {
    const path = (req.url || '').split('?')[0]
    if (path !== '/api/demandes' && path !== '/api/contact') return next()

    try {
      if (path === '/api/demandes') return await handleDemandes(req, res, context)
      return await handleContact(req, res, context)
    } catch (error) {
      return sendJson(res, 502, {
        ok: false,
        error: error instanceof Error ? error.message : 'Erreur API locale.',
      })
    }
  })
}

export function devApiPlugin() {
  return {
    name: 'dev-api',
    configureServer(server) {
      attachApi(server, loadEnv(server.config.mode, process.cwd(), ''))
    },
    configurePreviewServer(server) {
      attachApi(server, loadEnv(server.config.mode, process.cwd(), ''))
    },
  }
}
