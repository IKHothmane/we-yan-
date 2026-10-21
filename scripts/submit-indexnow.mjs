/**
 * Soumet les URLs canoniques à IndexNow (Bing / Yandex / partenaires).
 * Usage: node scripts/submit-indexnow.mjs
 * Clé: public/<key>.txt (déjà déployée sur weyandigital.ma)
 */
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const host = 'weyandigital.ma'
const key = 'd2c0f6283c819f112fa5e785db583cbe'
const keyLocation = `https://${host}/${key}.txt`

const FALLBACK_URLS = [
  `https://${host}/`,
  `https://${host}/agence/`,
  `https://${host}/services/`,
  `https://${host}/projets/`,
  `https://${host}/contact/`,
  `https://${host}/agence-seo-casablanca/`,
  `https://${host}/agence-google-ads-casablanca/`,
  `https://${host}/creation-site-web-casablanca/`,
  `https://${host}/community-management-casablanca/`,
  `https://${host}/services/strategie-marketing-rebranding/`,
  `https://${host}/services/publicite-digitale/`,
  `https://${host}/services/marketing-influence/`,
  `https://${host}/services/seo/`,
  `https://${host}/blog/`,
  `https://${host}/blog/prix-site-web-maroc-2026/`,
  `https://${host}/blog/prix-seo-casablanca-2026/`,
  `https://${host}/blog/prix-google-ads-maroc-2026/`,
  `https://${host}/blog/prix-meta-ads-casablanca-2026/`,
  `https://${host}/blog/prix-influenceur-maroc-2026/`,
  `https://${host}/blog/seo-vs-sea-maroc/`,
  `https://${host}/blog/prix-community-management-maroc-2026/`,
  `https://${host}/blog/prix-identite-visuelle-maroc-2026/`,
  `https://${host}/blog/comment-choisir-agence-digitale-casablanca/`,
  `https://${host}/blog/ameliorer-visibilite-google-casablanca/`,
  `https://${host}/blog/branding-creation-marque-maroc/`,
  `https://${host}/blog/rebranding-exemple-casablanca-2026/`,
  `https://${host}/blog/marketing-digital-tendances-maroc-2026/`,
]

function urlsFromSitemap() {
  const candidates = [join(root, 'public/sitemap.xml'), join(root, 'dist/sitemap.xml')]
  for (const file of candidates) {
    if (!existsSync(file)) continue
    const xml = readFileSync(file, 'utf8')
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
    if (locs.length) return locs.filter((u) => !u.includes('/demandes') && !u.includes('/merci'))
  }
  return FALLBACK_URLS
}

async function submitBatch(urlList) {
  const body = JSON.stringify({ host, key, keyLocation, urlList })
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ]
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body,
      })
      const text = await res.text().catch(() => '')
      console.log(`${endpoint} → HTTP ${res.status}${text ? ` ${text.slice(0, 120)}` : ''}`)
    } catch (err) {
      console.error(`${endpoint} → erreur:`, err instanceof Error ? err.message : err)
    }
  }
}

const urls = urlsFromSitemap()
console.log(`IndexNow: ${urls.length} URL(s) → ${host}`)
// IndexNow accepte max ~10 000 URLs; on envoie par lots de 100
const chunkSize = 100
for (let i = 0; i < urls.length; i += chunkSize) {
  await submitBatch(urls.slice(i, i + chunkSize))
}
console.log('Terminé. Google lit surtout le sitemap (GSC → Sitemaps → soumettre/resoumettre).')
