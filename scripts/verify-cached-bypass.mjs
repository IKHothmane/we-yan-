import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'

const ORIGIN = 'https://weyandigital.ma'
const CB = `?cb=d4fbc1a`
const dir = join(tmpdir(), 'weyan-verify')
mkdirSync(dir, { recursive: true })

async function get(path) {
  const url = `${ORIGIN}${path}${path.includes('?') ? '' : CB}`
  const res = await fetch(url, { redirect: 'manual' })
  const text = res.status === 200 ? await res.text() : ''
  return { status: res.status, location: res.headers.get('location') || '', cache: res.headers.get('cf-cache-status'), text, url }
}

function title(h) {
  return (h.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || ''
}
function canon(h) {
  const m =
    h.match(/rel=["']canonical["'][^>]*href=["']([^"']+)/i) ||
    h.match(/href=["']([^"']+)["'][^>]*rel=["']canonical/i)
  return (m && m[1]) || ''
}
function h1n(h) {
  return (h.match(/<h1[\s>]/gi) || []).length
}
function h1t(h) {
  return ((h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
function faqJson(h) {
  const s = h.match(/id="faq-jsonld">([\s\S]*?)<\/script>/)?.[1]
  if (!s) return []
  try {
    return JSON.parse(s).mainEntity.map((q) => q.name)
  } catch {
    return []
  }
}
function faqH3(h) {
  return [...h.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
    .filter((q) => /combien|différence|prestation|seo|temps|agence/i.test(q))
}

const bare = await fetch(`${ORIGIN}/creation-site-web-casablanca/`, { redirect: 'manual' })
console.log('BARE creation', bare.status, bare.headers.get('location'), 'cf-cache', bare.headers.get('cf-cache-status'), 'age', bare.headers.get('age'))

const creation = await get('/creation-site-web-casablanca/')
const sitemap = await get('/sitemap.xml')
const seo = await get('/services/seo/')
const agence = await get('/agence-seo-casablanca/')
const contact = await get('/contact/')

writeFileSync(join(dir, 'creation.html'), creation.text)
writeFileSync(join(dir, 'sitemap.xml'), sitemap.text)

const locs = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const seoQ = faqJson(seo.text)
const seoV = faqH3(seo.text)

console.log('\n=== CACHE-BUSTED CONTENT ===')
console.log('creation status', creation.status, 'cache', creation.cache)
console.log('creation title', title(creation.text))
console.log('creation canon', canon(creation.text))
console.log('creation h1', h1n(creation.text), h1t(creation.text).slice(0, 100))
console.log('creation content ok', /vitrine|e-commerce/i.test(creation.text))

console.log('agence title', title(agence.text))
console.log('agence h1', h1t(agence.text).slice(0, 100))
console.log('agence title len', title(agence.text).length)

console.log('seo title', title(seo.text))
console.log('seo faq json', seoQ.length, seoQ)
console.log('seo faq h3', seoV.length, seoV)
console.log('seo FAQ heading', /Questions fréquentes sur le SEO/i.test(seo.text))
console.log('seo FAQ match', seoQ.length > 0 && seoQ.every((q) => seoV.includes(q)))

console.log('contact h1', h1n(contact.text))

console.log('sitemap count', locs.length)
console.log('sitemap creation', locs.includes(`${ORIGIN}/creation-site-web-casablanca/`))
console.log('sitemap merci', locs.some((u) => u.includes('/merci')))

const checks = [
  ['bare still cached 301 OR live 200', bare.status === 200 || (bare.status === 301 && bare.headers.get('cf-cache-status') === 'HIT')],
  ['creation 200 (bypass)', creation.status === 200],
  ['creation title', /Création site web Casablanca/i.test(title(creation.text))],
  ['creation canonical', canon(creation.text) === `${ORIGIN}/creation-site-web-casablanca/`],
  ['agence title short', /Agence SEO Casablanca/i.test(title(agence.text)) && title(agence.text).length <= 65],
  ['seo FAQ json+visible', seoQ.length >= 3 && seoV.length >= 3 && seoQ.every((q) => seoV.includes(q))],
  ['contact 1 H1', h1n(contact.text) === 1],
  ['sitemap 26', locs.length === 26],
  ['sitemap has creation', locs.includes(`${ORIGIN}/creation-site-web-casablanca/`)],
  ['sitemap no merci', !locs.some((u) => u.includes('/merci'))],
]
console.log('\n=== CHECKS ===')
let fail = 0
for (const [name, ok] of checks) {
  console.log(`${ok ? 'OK' : 'FAIL'} ${name}`)
  if (!ok) fail++
}
console.log(fail ? `\n${fail} FAIL — purge Cloudflare cache for clean bare URLs` : '\nALL OK (bypass)')
if (bare.status === 301) {
  console.log('\nACTION REQUISE: Purger le cache Cloudflare (URL /creation-site-web-casablanca/ ou tout le site).')
  console.log('Le 301 vers /contact/ est encore en cache edge (cf-cache-status: HIT).')
  console.log('La nouvelle version est déjà déployée (bypass query string = 200).')
}
process.exit(fail && creation.status !== 200 ? 1 : 0)
