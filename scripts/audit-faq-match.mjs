const url = 'https://weyandigital.ma/agence-seo-casablanca/'
const html = await (await fetch(url)).text()

const faqScript = html.match(/id="faq-jsonld">([\s\S]*?)<\/script>/)?.[1]
const json = JSON.parse(faqScript)
const jsonQa = json.mainEntity.map((q) => ({
  q: q.name,
  r: q.acceptedAnswer.text,
}))

// Visible: h3 after FAQ heading, then following p
const section = html.match(/<h2[^>]*>\s*FAQ\s*<\/h2>[\s\S]{0,8000}/i)?.[0] || html
const visible = []
const re = /<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi
let m
while ((m = re.exec(section))) {
  const q = m[1].replace(/<[^>]+>/g, '').trim()
  const r = m[2].replace(/<[^>]+>/g, '').trim()
  if (/combien|temps|hors|casablanca|co[uû]t/i.test(q)) visible.push({ q, r })
}

console.log('json', jsonQa.length, 'visible', visible.length)
for (let i = 0; i < Math.max(jsonQa.length, visible.length); i++) {
  const jq = jsonQa[i]?.q || ''
  const vq = visible[i]?.q || ''
  const jr = (jsonQa[i]?.r || '').replace(/\s+/g, ' ').trim()
  const vr = (visible[i]?.r || '').replace(/\s+/g, ' ').trim()
  console.log(`#${i + 1}`)
  console.log(' Q match', jq === vq, '|', jq.slice(0, 60))
  console.log(' A match', jr === vr || (jr && vr && (jr.includes(vr.slice(0, 40)) || vr.includes(jr.slice(0, 40)))))
  if (jr !== vr) {
    console.log('   json A:', jr.slice(0, 100))
    console.log('   vis  A:', vr.slice(0, 100))
  }
}
