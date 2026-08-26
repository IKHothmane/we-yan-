/**
 * Ping IndexNow (Bing, Yandex, Seznam, …) avec les URL du sitemap.
 * Usage: node scripts/pingIndexNow.mjs
 * Skip: INDEXNOW_SUBMIT=false
 */
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { INDEXNOW_HOST, INDEXNOW_KEY, INDEXNOW_KEY_LOCATION } from './indexNowConfig.mjs'

function extractUrls(sitemapXml) {
  const urls = []
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi
  let match
  while ((match = re.exec(sitemapXml))) {
    urls.push(match[1].trim())
  }
  return [...new Set(urls)]
}

export async function pingIndexNow(urls) {
  if (process.env.INDEXNOW_SUBMIT === 'false') {
    console.log('[indexnow] skip (INDEXNOW_SUBMIT=false)')
    return { skipped: true }
  }

  if (!urls.length) {
    console.log('[indexnow] aucune URL à soumettre')
    return { skipped: true }
  }

  const body = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  }

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ]

  const results = []
  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(body),
      })
      const text = await res.text().catch(() => '')
      results.push({ endpoint, status: res.status, ok: res.ok || res.status === 202, body: text.slice(0, 120) })
      console.log(`[indexnow] ${endpoint} → ${res.status} (${urls.length} URL)`)
    } catch (err) {
      results.push({ endpoint, status: 0, ok: false, body: String(err?.message || err) })
      console.warn(`[indexnow] ${endpoint} échec:`, err?.message || err)
    }
  }
  return { urls: urls.length, results }
}

async function main() {
  const sitemapPath = existsSync(join(process.cwd(), 'dist/sitemap.xml'))
    ? join(process.cwd(), 'dist/sitemap.xml')
    : join(process.cwd(), 'public/sitemap.xml')
  const xml = readFileSync(sitemapPath, 'utf8')
  await pingIndexNow(extractUrls(xml))
}

const isDirect = process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('pingIndexNow.mjs')
if (isDirect) {
  main().catch((err) => {
    console.warn('[indexnow] erreur non bloquante:', err?.message || err)
    process.exit(0)
  })
}
