/**
 * Poll production until SEO deploy fingerprint is live.
 */
const ORIGIN = 'https://weyandigital.ma'
const CREATION = `${ORIGIN}/creation-site-web-casablanca/`
const MAX_MS = 8 * 60 * 1000
const INTERVAL_MS = 20_000

async function probe() {
  const res = await fetch(CREATION, { redirect: 'manual' })
  const loc = res.headers.get('location') || ''
  let title = ''
  let bodyHint = ''
  if (res.status === 200) {
    const html = await res.text()
    title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || ''
    bodyHint = /création de site web|creation site web|vitrine/i.test(html)
      ? 'creation-content'
      : 'other-content'
  }
  return {
    status: res.status,
    location: loc,
    title,
    bodyHint,
    ok:
      res.status === 200 &&
      !/contact\/?$/i.test(loc) &&
      /création site web|creation site web/i.test(title),
  }
}

const started = Date.now()
console.log('Waiting for Cloudflare Pages deploy fingerprint…')
console.log('Expect: 200 on', CREATION, 'with creation-site title (not redirect to /contact/)')

while (Date.now() - started < MAX_MS) {
  try {
    const p = await probe()
    const elapsed = Math.round((Date.now() - started) / 1000)
    console.log(
      `[${elapsed}s] status=${p.status} loc=${p.location || '-'} title="${p.title}" hint=${p.bodyHint || '-'}`,
    )
    if (p.ok) {
      console.log('DEPLOY_LIVE')
      process.exit(0)
    }
  } catch (e) {
    console.log('probe error', e.message)
  }
  await new Promise((r) => setTimeout(r, INTERVAL_MS))
}

console.log('TIMEOUT: deploy fingerprint not detected')
process.exit(2)
