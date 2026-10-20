const ORIGIN = 'https://weyandigital.ma'

async function fetchManual(url) {
  const res = await fetch(url, { redirect: 'manual' })
  const body = res.status === 200 ? await res.text() : ''
  return {
    status: res.status,
    location: res.headers.get('location') || '',
    body,
  }
}

async function follow(url) {
  let current = url
  const chain = []
  for (let i = 0; i < 6; i++) {
    const r = await fetchManual(current)
    chain.push({ url: current, status: r.status, location: r.location })
    if (![301, 302, 307, 308].includes(r.status) || !r.location) {
      return { ...r, finalUrl: current, chain }
    }
    current = r.location.startsWith('http') ? r.location : new URL(r.location, ORIGIN).href
  }
  return { status: 0, body: '', finalUrl: current, chain }
}

function titleOf(html) {
  return (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || ''
}
function descOf(html) {
  const m = html.match(
    /name=["']description["'][^>]*content=["']([^"']*)["']|content=["']([^"']*)["'][^>]*name=["']description["']/i,
  )
  return (m && (m[1] || m[2])) || ''
}
function canonicalOf(html) {
  const m = html.match(
    /rel=["']canonical["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["']canonical["']/i,
  )
  return (m && (m[1] || m[2])) || ''
}
function h1Count(html) {
  return (html.match(/<h1[\s>]/gi) || []).length
}
function h1Text(html) {
  return ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
function faqJson(html) {
  const s = html.match(/id="faq-jsonld">([\s\S]*?)<\/script>/)?.[1]
  if (!s) return []
  try {
    const j = JSON.parse(s)
    return (j.mainEntity || []).map((q) => q.name)
  } catch {
    return []
  }
}
function faqVisible(html) {
  const qs = []
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>/gi
  let m
  while ((m = re.exec(html))) {
    const q = m[1].replace(/<[^>]+>/g, '').trim()
    if (/combien|différence|temps|seo|prestation|agence/i.test(q)) qs.push(q)
  }
  return qs
}

const checks = []

function pass(name, ok, detail) {
  checks.push({ name, ok, detail })
  console.log(`${ok ? 'OK' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`)
}

console.log('=== POST-DEPLOY VERIFY ===\n')

// PowerShell-equivalent URL smoke
const smoke = [
  `${ORIGIN}/creation-site-web-casablanca/`,
  `${ORIGIN}/agence-seo-casablanca/`,
  `${ORIGIN}/services/seo/`,
  `${ORIGIN}/sitemap.xml`,
]
for (const url of smoke) {
  const r = await follow(url)
  const redirectedToContact =
    url.includes('creation-site-web-casablanca') && /\/contact\/?$/.test(r.finalUrl)
  console.log(`${r.status} ${url} → ${r.finalUrl}`)
  if (redirectedToContact) console.log('ERREUR : la nouvelle page redirige encore vers contact.')
  pass(
    `smoke ${url.replace(ORIGIN, '')}`,
    r.status === 200 && !redirectedToContact,
    redirectedToContact ? 'still → contact' : `final=${r.finalUrl}`,
  )
}

const creation = await follow(`${ORIGIN}/creation-site-web-casablanca/`)
pass(
  'creation 200 no contact redirect',
  creation.status === 200 && creation.finalUrl.includes('creation-site-web-casablanca'),
  `status=${creation.status} final=${creation.finalUrl}`,
)
pass(
  'creation content',
  /création|vitrine|e-commerce/i.test(creation.body) &&
    /Création site web/i.test(titleOf(creation.body)),
  `title=${titleOf(creation.body)}`,
)
pass(
  'creation canonical',
  canonicalOf(creation.body) === `${ORIGIN}/creation-site-web-casablanca/`,
  canonicalOf(creation.body),
)

const agence = await follow(`${ORIGIN}/agence-seo-casablanca/`)
pass(
  'agence title',
  /Agence SEO Casablanca/i.test(titleOf(agence.body)) && titleOf(agence.body).length <= 65,
  titleOf(agence.body),
)
pass('agence desc', descOf(agence.body).length >= 70 && descOf(agence.body).length <= 160, `len=${descOf(agence.body).length}`)
pass('agence H1', h1Count(agence.body) === 1 && /Agence SEO/i.test(h1Text(agence.body)), h1Text(agence.body))

const seo = await follow(`${ORIGIN}/services/seo/`)
const seoJson = faqJson(seo.body)
const seoVis = faqVisible(seo.body)
pass('seo FAQ JSON-LD', seoJson.length >= 3, `count=${seoJson.length}`)
pass('seo FAQ visible', seoVis.length >= 3, `count=${seoVis.length}`)
pass(
  'seo FAQ match',
  seoJson.length > 0 && seoJson.every((q) => seoVis.includes(q)),
  `json=${seoJson.length} vis=${seoVis.length}`,
)

const contact = await follow(`${ORIGIN}/contact/`)
pass('contact single H1', h1Count(contact.body) === 1, `h1=${h1Count(contact.body)}`)

const sm = await follow(`${ORIGIN}/sitemap.xml`)
const locs = []
let m
const re = /<loc>([^<]+)<\/loc>/g
while ((m = re.exec(sm.body))) locs.push(m[1])
pass('sitemap 26 urls', locs.length === 26, `count=${locs.length}`)
pass('sitemap no merci', !locs.some((u) => u.includes('/merci')), '')
pass(
  'sitemap has creation',
  locs.includes(`${ORIGIN}/creation-site-web-casablanca/`),
  '',
)

// All sitemap URLs 200
let bad = 0
for (const loc of locs) {
  const r = await fetchManual(loc)
  if (r.status !== 200) {
    bad++
    console.log(`FAIL sitemap URL ${r.status} ${loc}`)
  }
}
pass('all sitemap URLs HTTP 200', bad === 0, bad ? `${bad} bad` : 'all ok')

console.log('\n=== SUMMARY ===')
const failed = checks.filter((c) => !c.ok)
console.log(`passed ${checks.length - failed.length}/${checks.length}`)
if (failed.length) {
  console.log('failures:')
  failed.forEach((f) => console.log(' -', f.name, f.detail || ''))
  process.exit(1)
}
console.log('ALL CHECKS PASSED')
