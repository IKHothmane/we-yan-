const url = 'https://weyandigital.ma/agence-seo-casablanca/?v=deploy-d4fbc1a-3'
const res = await fetch(url, {
  headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
})
const html = await res.text()
console.log('status', res.status, 'cf-cache', res.headers.get('cf-cache-status'), 'age', res.headers.get('age'))
console.log('title', (html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1])
console.log(
  'expected new?',
  html.includes('Référencement – We Yan') || html.includes('Référencement - We Yan'),
)
console.log('old pattern?', html.includes('We Yan Digital - Agence SEO'))
// Also check the page chunk for title string
const scripts = [...html.matchAll(/src="(\/assets\/[^"]+\.js)"/g)].map((m) => m[1])
console.log('scripts', scripts.slice(0, 6))
for (const s of scripts.slice(0, 8)) {
  const js = await (await fetch(`https://weyandigital.ma${s}`)).text()
  if (js.includes('agence-seo') || js.includes('Agence SEO Casablanca')) {
    const hasNew = js.includes('Référencement') && js.includes('We Yan')
    const hasOld = js.includes('We Yan Digital - Agence SEO')
    console.log(s, 'len', js.length, 'hasNewMeta', hasNew, 'hasOldTitlePattern', hasOld)
    if (js.includes('Agence SEO Casablanca |')) {
      const i = js.indexOf('Agence SEO Casablanca |')
      console.log('  snippet:', js.slice(i, i + 80))
    }
  }
}
