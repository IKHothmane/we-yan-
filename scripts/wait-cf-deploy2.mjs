const ORIGIN = 'https://weyandigital.ma'
const MAX_MS = 10 * 60 * 1000
const INTERVAL = 20_000
const started = Date.now()

async function probe() {
  const agence = await fetch(`${ORIGIN}/agence-seo-casablanca/?v=${Date.now()}`, {
    headers: { 'Cache-Control': 'no-cache' },
  })
  const html = await agence.text()
  const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || ''
  const titleOk = title.includes('Référencement') && !title.includes('We Yan Digital - Agence SEO')

  const bare = await fetch(`${ORIGIN}/creation-site-web-casablanca/`, { redirect: 'manual' })
  const bareOk = bare.status === 200

  const sm = await fetch(`${ORIGIN}/sitemap.xml?v=${Date.now()}`)
  const smText = await sm.text()
  const smOk = smText.includes('creation-site-web-casablanca') && (smText.match(/<loc>/g) || []).length === 26

  return { title, titleOk, bareStatus: bare.status, bareCache: bare.headers.get('cf-cache-status'), bareOk, smOk }
}

console.log('Waiting for commit 97f82ad fingerprint + optional cache clear…')
while (Date.now() - started < MAX_MS) {
  const p = await probe()
  const s = Math.round((Date.now() - started) / 1000)
  console.log(
    `[${s}s] titleOk=${p.titleOk} title="${p.title}" bare=${p.bareStatus}/${p.bareCache} sitemapOk=${p.smOk}`,
  )
  if (p.titleOk && p.smOk) {
    console.log(p.bareOk ? 'DEPLOY_AND_CACHE_OK' : 'DEPLOY_OK_CACHE_PENDING')
    process.exit(p.bareOk ? 0 : 3)
  }
  await new Promise((r) => setTimeout(r, INTERVAL))
}
console.log('TIMEOUT')
process.exit(2)
