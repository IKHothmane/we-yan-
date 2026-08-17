import { loadEnv } from 'vite'

const DEFAULT_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzQbb_vC_kVM4qa-pL_d1mcNfztYFfmUCzTTJ9N_LE3thVCXrYYHzu2JRUDKsDvNJ8UWA/exec'

const ALLOWED_STATUSES = ['Nouvelle', 'Validée', 'En cours', 'Terminée', 'Annulée']
const TO_EMAILS = ['meriemflyer@gmail.com', 'ikhlef.othmane@gmail.com']
const FROM_EMAIL = 'We Yan Digital <contact@weyandigital.ma>'

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
  if (!raw) return {}
  return JSON.parse(raw)
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
  const response = await fetch(url.toString(), { method: 'GET', redirect: 'follow' })
  return response.json().catch(() => ({}))
}

async function postToSheet(sheetUrl, payload) {
  const response = await fetch(sheetUrl, {
    method: 'POST',
    redirect: 'follow',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  })
  return response.json().catch(() => ({}))
}

function isAuthorized(url, req, adminKey) {
  const fromQuery = url.searchParams.get('key') || ''
  const fromHeader = req.headers['x-admin-key'] || ''
  return fromQuery === adminKey || fromHeader === adminKey
}

function attachApi(server, env) {
  const sheetUrl = String(env.GOOGLE_SHEET_URL || DEFAULT_SHEET_URL).trim()
  const adminKey = String(env.ADMIN_DEMANDES_KEY || 'dev').trim()
  const resendKey = String(env.RESEND_API_KEY || '').trim()

  server.middlewares.use(async (req, res, next) => {
    const path = (req.url || '').split('?')[0]
    if (path !== '/api/demandes' && path !== '/api/contact') return next()

    const url = new URL(req.url || '/', 'http://localhost')

    try {
      if (path === '/api/demandes') {
        if (!isAuthorized(url, req, adminKey)) {
          return sendJson(res, 401, { ok: false, error: 'Accès refusé. En local, utilisez le mot de passe : dev' })
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
            statut,
          })
          if (!isUpdateSuccess(sheetBody)) {
            return sendJson(res, 502, {
              ok: false,
              error: sheetBody.error || SCRIPT_OUTDATED,
              scriptReady: false,
            })
          }
          return sendJson(res, 200, { ok: true })
        }

        return sendJson(res, 405, { ok: false, error: 'Méthode non autorisée' })
      }

      if (req.method !== 'POST') {
        return sendJson(res, 405, { ok: false, error: 'Méthode non autorisée' })
      }

      const input = await readJsonBody(req)
      if (String(input.website || '').trim()) return sendJson(res, 200, { ok: true })

      const name = String(input.name || '').trim()
      const email = String(input.email || '').trim()
      const phone = String(input.phone || input.telephone || '').trim()
      const message = String(input.message || '').trim()
      const services = Array.isArray(input.services) ? input.services.map(String) : []
      const serviceLabel = services.filter(Boolean).join(', ') || 'Non précisé'

      if (!name || !email || !message) {
        return sendJson(res, 422, { ok: false, error: 'Champs incomplets.' })
      }

      await postToSheet(sheetUrl, {
        nom: name,
        email,
        telephone: phone,
        service: serviceLabel,
        message,
        statut: 'Nouvelle',
      })

      if (resendKey && !resendKey.startsWith('re_xxxx')) {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: TO_EMAILS,
            reply_to: email,
            subject: `Nouveau contact We Yan Digital — ${name}`,
            html: `<p><b>${name}</b> — ${email} — ${phone}<br/>${serviceLabel}<br/>${message}</p>`,
          }),
        })
      }

      return sendJson(res, 200, { ok: true })
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
      const env = loadEnv(server.config.mode, process.cwd(), '')
      attachApi(server, env)
    },
    configurePreviewServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), '')
      attachApi(server, env)
    },
  }
}
