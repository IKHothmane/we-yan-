const ORIGIN = 'https://weyandigital.ma'

async function fetchManual(url) {
  const res = await fetch(url, { redirect: 'manual' })
  return {
    status: res.status,
    location: res.headers.get('location') || '',
    body: res.status === 200 ? await res.text() : '',
  }
}

async function follow(url, max = 5) {
  let current = url
  const chain = []
  for (let i = 0; i < max; i++) {
    const r = await fetchManual(current)
    chain.push({ url: current, status: r.status, location: r.location })
    if (![301, 302, 307, 308].includes(r.status) || !r.location) {
      return { ...r, finalUrl: current, chain }
    }
    current = r.location.startsWith('http') ? r.location : new URL(r.location, ORIGIN).href
  }
  return { status: 0, body: '', finalUrl: current, chain }
}

function snippetAround(html, needle, pad = 200) {
  const idx = html.toLowerCase().indexOf(needle.toLowerCase())
  if (idx < 0) return null
  return html.slice(Math.max(0, idx - pad), idx + pad).replace(/\s+/g, ' ')
}

async function inspectMoney(path) {
  const url = `${ORIGIN}${path}`
  const r = await follow(url)
  console.log('\n====', path, '====')
  console.log('chain:', JSON.stringify(r.chain))
  if (r.status !== 200) {
    console.log('NOT 200 at final')
    return
  }
  const html = r.body
  console.log('finalUrl', r.finalUrl)
  console.log('title', (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1])
  console.log(
    'canonical',
    (html.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["']canonical["']/i) || []).filter(Boolean)[1] ||
      '',
  )
  console.log('details', (html.match(/<details/gi) || []).length)
  console.log('FAQPage', html.includes('FAQPage'))
  console.log('Questions fréquentes', /questions fr[eé]quentes/i.test(html))
  // try button/accordion patterns
  const qCoste = html.includes('Combien coûte')
  console.log('contains Combien coûte', qCoste)
  console.log('snippet FAQ:', snippetAround(html, 'Combien') || snippetAround(html, 'FAQ') || '(none)')
  // list all h2/h3 near end
  const headings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  )
  console.log(
    'h2/h3 sample:',
    headings.filter((h) => /faq|question|co[uû]t|combien|résultat/i.test(h)).slice(0, 10),
  )
}

const sm = await (await fetch(`${ORIGIN}/sitemap.xml`)).text()
const locs = []
let m
const re = /<loc>([^<]+)<\/loc>/g
while ((m = re.exec(sm))) locs.push(m[1])
console.log('live sitemap count', locs.length)
console.log('has creation-site', locs.some((u) => u.includes('creation-site')))
console.log('has community', locs.some((u) => u.includes('community-management')))

await inspectMoney('/agence-seo-casablanca/')
await inspectMoney('/services/seo/')
await inspectMoney('/creation-site-web-casablanca/')
await inspectMoney('/community-management-casablanca/')

// Compare a few titles to detect undeployed local SEO
console.log('\n==== DEPLOY FINGERPRINT ====')
const home = await (await fetch(`${ORIGIN}/`)).text()
console.log('home title', (home.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1])
console.log(
  'home desc len',
  ((home.match(/name=["']description["'][^>]*content=["']([^"']*)["']/i) || [])[1] || '').length,
)
