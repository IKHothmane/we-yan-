/** Échanges avec le Google Apps Script (feuille des demandes). */

export const ALLOWED_STATUSES = [
  'Nouvelle',
  'Validée',
  'Valider',
  'En cours',
  'Terminée',
  'Terminer',
  'Annulée',
  'Annuler',
]

export const SCRIPT_OUTDATED =
  'Le script Google n’est pas à jour. Enregistrer ne suffit pas : dans Apps Script, Déployer → Gérer les déploiements → crayon → Version « Nouvelle version » → Déployer.'

export function toSheetStatut(statut) {
  if (statut === 'Validée' || statut === 'Validé' || statut === 'Valider') return 'Valider'
  if (statut === 'En cours') return 'En cours'
  if (statut === 'Terminée' || statut === 'Terminé' || statut === 'Terminer') return 'Terminer'
  if (statut === 'Annulée' || statut === 'Annulé' || statut === 'Annuler') return 'Annuler'
  return ''
}

export function isUpdateSuccess(body) {
  if (!body || typeof body !== 'object') return false
  if (Array.isArray(body.rows)) return false
  return body.updated === true || body.success === true
}

export function isScriptReady(body) {
  if (Number(body?.version) >= 3) return true
  const rows = body?.rows
  if (!Array.isArray(rows) || rows.length === 0) return false
  return rows.some((row) => row && typeof row === 'object' && ('statut' in row || 'row' in row))
}

export function normalizeRows(rows) {
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

export async function updateSheetStatus(sheetUrl, payload) {
  const url = new URL(sheetUrl)
  url.searchParams.set('action', 'update')
  url.searchParams.set('row', String(payload.row || ''))
  url.searchParams.set('statut', String(payload.statut || ''))
  url.searchParams.set('email', String(payload.email || ''))
  url.searchParams.set('message', String(payload.message || ''))
  const res = await fetch(url.toString(), { method: 'GET', redirect: 'follow' })
  return res.json().catch(() => ({}))
}

/** Enregistre une demande ; renvoie toujours { ok } sans jamais lever. */
export async function postToSheet(sheetUrl, payload) {
  if (!sheetUrl) return { ok: true, skipped: true }
  try {
    const res = await fetch(sheetUrl, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) return { ok: false }
    const body = await res.json().catch(() => ({}))
    return { ok: !(body && typeof body === 'object' && body.ok === false) }
  } catch {
    return { ok: false }
  }
}
