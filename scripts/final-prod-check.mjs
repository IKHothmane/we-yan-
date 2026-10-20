const ORIGIN = 'https://weyandigital.ma'
const bust = () => `?v=${Date.now()}`

async function get(path, { follow = true, bustCache = true } = {}) {
  const url = bustCache ? `${ORIGIN}${path}${bust()}` : `${ORIGIN}${path}`
  const res = await fetch(url, { redirect: follow ? 'follow' : 'manual' })
  const text = res.status === 200 || follow ? await res.text().catch(() => '') : ''
  return {
    url,
    status: res.status,
    finalUrl: res.url,
    location: res.headers.get('location') || '',
    cache: res.headers.get('cf-cache-status'),
    age: res.headers.get('age'),
    text,
  }
}

function title(h) {
  return (h.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || ''
}
function canon(h) {
  const m =
    h.match(/rel=["']canonical["'][^>]*href=["']([^"']+)/i) ||
    h.match(/href=["']([^"']+)["'][^>]*rel=["']canonical/i)
  return m?.[1] || ''
}
function h1n(h) {
  return (h.match(/<h1[\s>]/gi) || []).length
}
function faqJson(h) {
  const s = h.match(/id="faq-jsonld">([\s\S]*?)<\/script>/)?.[1]
  if (!s) return []
  try {
    return JSON.parse(s).mainEntity.map((q) => ({ q: q.name, r: q.acceptedAnswer.text }))
  } catch {
    return []
  }
}
function faqH3(h) {
  return [...h.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
    .filter((q) => /combien|différence|prestation|seo|temps|agence/i.test(q))
}

const rows = []
const check = (name, ok, detail = '') => {
  rows.push({ name, ok, detail })
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${name}${detail ? ' — ' + detail : ''}`)
}

console.log('=== CONTRÔLES POST-DÉPLOIEMENT ===\n')

const bare = await get('/creation-site-web-casablanca/', { follow: false, bustCache: false })
check(
  'création bare (sans query) ne redirige plus vers contact',
  bare.status === 200,
  `status=${bare.status} loc=${bare.location} cache=${bare.cache} age=${bare.age}`,
)

const creation = await get('/creation-site-web-casablanca/')
check('création contenu 200', creation.status === 200 && /Création site web Casablanca/i.test(title(creation.text)), title(creation.text))
check('création canonical', canon(creation.text) === `${ORIGIN}/creation-site-web-casablanca/`, canon(creation.text))
check('création H1', h1n(creation.text) === 1)

const agence = await get('/agence-seo-casablanca/')
check('agence title', title(agence.text) === 'Agence SEO Casablanca | Référencement – We Yan', title(agence.text))
check('agence H1 unique', h1n(agence.text) === 1)
check('agence desc length', (() => {
  const d = (agence.text.match(/name=["']description["'][^>]*content=["']([^"']+)/i) || [])[1] || ''
  return d.length >= 70 && d.length <= 160
})())

const seo = await get('/services/seo/')
const jq = faqJson(seo.text)
const jv = faqH3(seo.text)
check('seo FAQ JSON-LD', jq.length >= 3, String(jq.length))
check('seo FAQ visible', jv.length >= 3, String(jv.length))
check('seo FAQ match', jq.length > 0 && jq.every((x) => jv.includes(x.q)))

const contact = await get('/contact/')
check('contact 1 H1', h1n(contact.text) === 1, String(h1n(contact.text)))

const sm = await get('/sitemap.xml')
const locs = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
check('sitemap 26 URL', locs.length === 26, String(locs.length))
check('sitemap sans /merci', !locs.some((u) => u.includes('/merci')))
check('sitemap inclut création', locs.includes(`${ORIGIN}/creation-site-web-casablanca/`))

let bad = 0
for (const loc of locs) {
  const r = await fetch(loc, { redirect: 'manual' })
  // creation may still be cached 301 on bare URL
  if (loc.includes('creation-site-web-casablanca')) {
    if (r.status !== 200 && r.status !== 301) bad++
    continue
  }
  if (r.status !== 200) {
    console.log('  bad', r.status, loc)
    bad++
  }
}
check('sitemap URLs HTTP OK (hors cache 301 création)', bad === 0)

console.log('\n=== BILAN ===')
const fails = rows.filter((r) => !r.ok)
console.log(`OK ${rows.length - fails.length}/${rows.length}`)
if (fails.length) {
  console.log('Échecs:')
  fails.forEach((f) => console.log(' -', f.name, '—', f.detail))
}
if (!bare.status || bare.status !== 200) {
  console.log(`
ACTION BLOQUANTE — Purge cache Cloudflare Pages
1. Dashboard Cloudflare → Pages → projet weyan / we-yan
2. Ou Caching → Configuration → Purge Everything
   (ou purge URL: ${ORIGIN}/creation-site-web-casablanca/)
3. Relancer: curl.exe -sS -L -o NUL -w "%{http_code} %{url_effective}\\n" ${ORIGIN}/creation-site-web-casablanca/
Attendu: 200 https://weyandigital.ma/creation-site-web-casablanca/
`)
}
process.exit(fails.some((f) => !f.name.includes('bare')) ? 1 : fails.length ? 3 : 0)
