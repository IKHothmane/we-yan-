/**
 * Audit production SEO: sitemap HTTP status, canonical, robots, titles, H1, FAQ vs JSON-LD.
 */
const ORIGIN = 'https://weyandigital.ma'
const MONEY = [
  `${ORIGIN}/agence-seo-casablanca/`,
  `${ORIGIN}/services/seo/`,
  `${ORIGIN}/creation-site-web-casablanca/`,
]

function extractLocs(xml) {
  const locs = []
  const re = /<loc>([^<]+)<\/loc>/g
  let m
  while ((m = re.exec(xml))) locs.push(m[1].trim())
  return locs
}

function metaContent(html, attr, name) {
  const re = new RegExp(
    `<meta[^>]+${attr}=["']${name}["'][^>]+content=["']([^"']*)["']|<meta[^>]+content=["']([^"']*)["'][^>]+${attr}=["']${name}["']`,
    'i',
  )
  const m = html.match(re)
  return (m && (m[1] || m[2])) || ''
}

function linkHref(html, rel) {
  const re = new RegExp(`<link[^>]+rel=["']${rel}["'][^>]+href=["']([^"']+)["']|<link[^>]+href=["']([^"']+)["'][^>]+rel=["']${rel}["']`, 'i')
  const m = html.match(re)
  return (m && (m[1] || m[2])) || ''
}

function titleTag(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  return m ? m[1].trim() : ''
}

function countH1(html) {
  return (html.match(/<h1[\s>]/gi) || []).length
}

function extractFaqJsonLd(html) {
  const scripts = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
  const faqs = []
  for (const s of scripts) {
    try {
      const data = JSON.parse(s[1])
      const nodes = Array.isArray(data) ? data : data['@graph'] ? data['@graph'] : [data]
      for (const node of nodes) {
        if (node?.['@type'] === 'FAQPage' && Array.isArray(node.mainEntity)) {
          for (const q of node.mainEntity) {
            faqs.push({
              q: q.name || q.question || '',
              r: q.acceptedAnswer?.text || '',
            })
          }
        }
      }
    } catch {
      /* ignore invalid json-ld blocks */
    }
  }
  return faqs
}

/** Visible FAQ: details/summary or h3 questions near FAQ heading */
function extractVisibleFaq(html) {
  const items = []
  // details > summary > h3
  const detailsRe =
    /<details[^>]*>[\s\S]*?<summary[^>]*>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<\/summary>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi
  let m
  while ((m = detailsRe.exec(html))) {
    items.push({
      q: m[1].replace(/<[^>]+>/g, '').trim(),
      r: m[2].replace(/<[^>]+>/g, '').trim(),
    })
  }
  return items
}

async function fetchUrl(url, opts = {}) {
  const res = await fetch(url, {
    redirect: opts.redirect || 'manual',
    headers: {
      'user-agent':
        'Mozilla/5.0 (compatible; WeYanSEOAudit/1.0; +https://weyandigital.ma/)',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    },
  })
  const location = res.headers.get('location') || ''
  const robots = res.headers.get('x-robots-tag') || ''
  let body = ''
  if (opts.body !== false && (res.status === 200 || opts.forceBody)) {
    body = await res.text()
  }
  return { status: res.status, location, robots, body, url }
}

function normalizeUrl(u) {
  try {
    const x = new URL(u)
    let path = x.pathname
    if (path.length > 1 && !path.endsWith('/')) path += '/'
    return `${x.origin}${path}`
  } catch {
    return u
  }
}

async function auditSitemapUrl(url) {
  const head = await fetchUrl(url, { body: false })
  let finalUrl = url
  let status = head.status
  let redirects = []

  if ([301, 302, 307, 308].includes(status) && head.location) {
    redirects.push({ from: url, status, to: head.location })
    const abs = head.location.startsWith('http')
      ? head.location
      : new URL(head.location, ORIGIN).href
    const next = await fetchUrl(abs)
    finalUrl = abs
    status = next.status
    const html = next.body
    return summarize(url, status, next, html, redirects)
  }

  const full = await fetchUrl(url)
  return summarize(url, full.status, full, full.body, redirects)
}

function summarize(requested, status, res, html, redirects) {
  const title = titleTag(html)
  const description = metaContent(html, 'name', 'description')
  const robotsMeta = metaContent(html, 'name', 'robots')
  const canonical = linkHref(html, 'canonical')
  const h1 = countH1(html)
  const noindex =
    /noindex/i.test(robotsMeta) || /noindex/i.test(res.robots || '')
  const canonNorm = canonical ? normalizeUrl(canonical) : ''
  const reqNorm = normalizeUrl(requested)
  const canonicalMatch = !canonical || canonNorm === reqNorm
  const indexable = status === 200 && !noindex && canonicalMatch

  return {
    url: requested,
    status,
    redirects,
    title: title.slice(0, 90),
    titleLen: title.length,
    descriptionLen: description.length,
    h1,
    canonical,
    canonicalMatch,
    robotsMeta: robotsMeta || res.robots || '(none)',
    noindex,
    indexable,
  }
}

async function deepMoney(url) {
  const res = await fetchUrl(url)
  const html = res.body
  const jsonFaq = extractFaqJsonLd(html)
  const visibleFaq = extractVisibleFaq(html)
  const mismatches = []
  if (jsonFaq.length && visibleFaq.length) {
    if (jsonFaq.length !== visibleFaq.length) {
      mismatches.push(`count json=${jsonFaq.length} visible=${visibleFaq.length}`)
    }
    const n = Math.min(jsonFaq.length, visibleFaq.length)
    for (let i = 0; i < n; i++) {
      if (jsonFaq[i].q !== visibleFaq[i].q) {
        mismatches.push(`Q${i + 1} differ`)
      }
      // allow minor whitespace diffs on answers
      const jr = jsonFaq[i].r.replace(/\s+/g, ' ').trim()
      const vr = visibleFaq[i].r.replace(/\s+/g, ' ').trim()
      if (jr && vr && jr !== vr) mismatches.push(`A${i + 1} differ`)
    }
  } else if (jsonFaq.length && !visibleFaq.length) {
    mismatches.push('JSON-LD FAQ without detectable visible FAQ')
  } else if (!jsonFaq.length && visibleFaq.length) {
    mismatches.push('Visible FAQ without FAQPage JSON-LD')
  }

  return {
    url,
    status: res.status,
    title: titleTag(html),
    description: metaContent(html, 'name', 'description'),
    canonical: linkHref(html, 'canonical'),
    h1: countH1(html),
    h1Text: (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 120),
    faqJsonCount: jsonFaq.length,
    faqVisibleCount: visibleFaq.length,
    faqMatch: mismatches.length === 0 && (jsonFaq.length > 0 || visibleFaq.length === 0),
    faqMismatches: mismatches,
    jsonQuestions: jsonFaq.map((x) => x.q),
    visibleQuestions: visibleFaq.map((x) => x.q),
  }
}

async function main() {
  const sm = await fetchUrl(`${ORIGIN}/sitemap.xml`)
  if (sm.status !== 200) {
    console.log(JSON.stringify({ error: 'sitemap_fetch_failed', status: sm.status }, null, 2))
    process.exit(1)
  }
  const locs = extractLocs(sm.body)
  console.log('=== SITEMAP ===')
  console.log('count', locs.length)

  const results = []
  for (const loc of locs) {
    results.push(await auditSitemapUrl(loc))
  }

  const bad = results.filter((r) => r.status !== 200 || !r.indexable || !r.canonicalMatch)
  console.log('\n=== HTTP / INDEXABLE ===')
  console.log(
    'ok',
    results.filter((r) => r.status === 200 && r.indexable).length + '/' + results.length,
  )
  if (bad.length) {
    console.log('issues:')
    for (const r of bad) {
      console.log(
        '-',
        r.url,
        'status=' + r.status,
        'indexable=' + r.indexable,
        'canonMatch=' + r.canonicalMatch,
        'h1=' + r.h1,
        'title=' + r.title,
      )
    }
  } else {
    console.log('All sitemap URLs: HTTP 200, canonical match, indexable')
  }

  console.log('\n=== ALL URLS (summary) ===')
  for (const r of results) {
    console.log(
      [r.status, r.indexable ? 'IDX' : 'NO', 'H1=' + r.h1, 'T=' + r.titleLen, 'D=' + r.descriptionLen, r.url].join(
        ' | ',
      ),
    )
  }

  console.log('\n=== MONEY PAGES DEEP ===')
  for (const u of MONEY) {
    const d = await deepMoney(u)
    console.log(JSON.stringify(d, null, 2))
  }

  // redirect smoke: non-trailing slash
  console.log('\n=== REDIRECT SMOKE ===')
  for (const path of ['/agence-seo-casablanca', '/services/seo', '/contact']) {
    const r = await fetchUrl(`${ORIGIN}${path}`, { body: false })
    console.log(path, '->', r.status, r.location || '(no location)')
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
