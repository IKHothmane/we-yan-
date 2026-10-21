const ORIGIN = 'https://weyandigital.ma'
const URL = `${ORIGIN}/agence-google-ads-casablanca/`
const MAX_MS = 8 * 60 * 1000
const INTERVAL = 20_000

function title(html) {
  return (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || ''
}
function canon(html) {
  const m =
    html.match(/rel=["']canonical["'][^>]*href=["']([^"']+)/i) ||
    html.match(/href=["']([^"']+)["'][^>]*rel=["']canonical/i)
  return m?.[1] || ''
}
function h1(html) {
  return ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
function faqJson(html) {
  const s = html.match(/id="faq-jsonld">([\s\S]*?)<\/script>/)?.[1]
  if (!s) return []
  try {
    return JSON.parse(s).mainEntity.map((q) => q.name)
  } catch {
    return []
  }
}
function faqH3(html) {
  return [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, '').trim())
    .filter((q) => /budget|frais|résultats|Google Ads|compte/i.test(q))
}

async function probe() {
  const res = await fetch(URL + `?v=${Date.now()}`, {
    redirect: 'manual',
    headers: { 'Cache-Control': 'no-cache' },
  })
  if (res.status !== 200) return { status: res.status }
  const html = await res.text()
  const jq = faqJson(html)
  const jv = faqH3(html)
  return {
    status: res.status,
    title: title(html),
    canonical: canon(html),
    h1: h1(html),
    faqJson: jq.length,
    faqVisible: jv.length,
    faqMatch: jq.length >= 5 && jq.every((q) => jv.includes(q)),
    ok:
      res.status === 200 &&
      canon(html) === URL &&
      /Google Ads/i.test(h1(html)) &&
      jq.length >= 5 &&
      jv.length >= 5,
  }
}

const started = Date.now()
console.log('Waiting for deploy of', URL)
while (Date.now() - started < MAX_MS) {
  const p = await probe()
  const s = Math.round((Date.now() - started) / 1000)
  console.log(`[${s}s]`, JSON.stringify(p))
  if (p.ok) {
    const sm = await (await fetch(`${ORIGIN}/sitemap.xml?v=${Date.now()}`)).text()
    const pub = await (await fetch(`${ORIGIN}/services/publicite-digitale/?v=${Date.now()}`)).text()
    console.log('sitemap has page', sm.includes('agence-google-ads-casablanca'))
    console.log(
      'hub links to money page',
      pub.includes('/agence-google-ads-casablanca/'),
    )
    console.log('DEPLOY_VERIFIED')
    process.exit(0)
  }
  await new Promise((r) => setTimeout(r, INTERVAL))
}
console.log('TIMEOUT')
process.exit(2)
