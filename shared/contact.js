/**
 * Logique partagée du formulaire de contact (Cloudflare Functions + serveur de dev).
 * Aucune dépendance runtime : fonctionne dans Workers et Node.
 */

export const LIMITS = Object.freeze({
  name: 80,
  company: 100,
  email: 120,
  phone: 20,
  message: 1000,
})

const PHONE_PATTERN = /^[+\d\s().-]{8,20}$/

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Liste d'adresses séparées par des virgules → tableau d'e-mails valides. */
export function parseRecipients(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(isEmail)
}

/**
 * Valide et normalise le corps JSON du formulaire.
 * @returns {{ ok: true, data: object } | { ok: false, error: string }}
 */
export function validateContact(input) {
  if (!input || typeof input !== 'object') return { ok: false, error: 'Requête invalide.' }

  const name = String(input.name || '').trim()
  const email = String(input.email || '').trim()
  const message = String(input.message || '').trim()
  const phone = String(input.phone || '').trim()
  const company = String(input.company || '').trim()
  const services = Array.isArray(input.services)
    ? input.services.map((item) => String(item).trim()).filter(Boolean)
    : []

  if (!name || name.length > LIMITS.name) {
    return { ok: false, error: `Nom invalide (${LIMITS.name} caractères max).` }
  }
  if (!isEmail(email) || email.length > LIMITS.email) {
    return { ok: false, error: 'Adresse email invalide.' }
  }
  if (phone && !PHONE_PATTERN.test(phone)) {
    return { ok: false, error: `Téléphone invalide (8 à ${LIMITS.phone} caractères).` }
  }
  if (!message || message.length > LIMITS.message) {
    return { ok: false, error: `Message invalide (${LIMITS.message} caractères max).` }
  }
  if (company.length > LIMITS.company) {
    return { ok: false, error: `Entreprise invalide (${LIMITS.company} caractères max).` }
  }

  return { ok: true, data: { name, email, message, phone, company, services } }
}

export function serviceLabel(services) {
  return services.length ? services.join(', ') : 'Non précisé'
}

export function buildEmailHtml({ name, email, message, phone, company, services }) {
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone || 'Non précisé'),
    company: escapeHtml(company || 'Non précisée'),
    services: escapeHtml(serviceLabel(services)),
    message: escapeHtml(message).replace(/\n/g, '<br>'),
  }
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
      <h1 style="font-size:20px;margin:0 0 16px">Nouveau message — We Yan Digital</h1>
      <p><strong>Nom :</strong> ${safe.name}</p>
      <p><strong>Entreprise :</strong> ${safe.company}</p>
      <p><strong>Email :</strong> ${safe.email}</p>
      <p><strong>Téléphone :</strong> ${safe.phone}</p>
      <p><strong>Services :</strong> ${safe.services}</p>
      <p><strong>Message :</strong></p>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px">${safe.message}</div>
    </div>
  `
}

export function buildSheetPayload({ name, email, message, phone, company, services }) {
  return {
    nom: name,
    email,
    telephone: phone,
    entreprise: company,
    service: serviceLabel(services),
    message: company ? `Entreprise : ${company}\n\n${message}` : message,
    statut: 'Nouvelle',
  }
}

export const FROM_EMAIL = 'We Yan Digital <contact@weyandigital.ma>'

/** Extrait un message d'erreur lisible d'une réponse Resend. */
export function resendErrorMessage(body) {
  return (
    (typeof body?.message === 'string' && body.message) ||
    (typeof body?.error?.message === 'string' && body.error.message) ||
    'Resend a refusé l’envoi.'
  )
}
