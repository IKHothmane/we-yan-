import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { devApiPlugin } from './scripts/devApiPlugin.js'

const SITEMAP_META = {
  '': { changefreq: 'weekly', priority: '1.0' },
  services: { changefreq: 'weekly', priority: '0.94' },
  projets: { changefreq: 'weekly', priority: '0.86' },
  'a-propos': { changefreq: 'monthly', priority: '0.84' },
  agence: { changefreq: 'monthly', priority: '0.84' },
  contact: { changefreq: 'monthly', priority: '0.83' },
}

const SITEMAP_LASTMOD = {
  '': '2026-10-31',
  services: '2026-10-31',
  projets: '2026-10-31',
  'a-propos': '2026-10-31',
  agence: '2026-10-31',
  contact: '2026-10-31',
}

/** Routes React (hors accueil) : un index.html physique par URL (Cloudflare / hébergeur sans rewrite). */
const SPA_ROUTES = ['services', 'projets', 'a-propos', 'agence', 'contact']

function writeCanonicalSitemap() {
  const routes = ['', ...SPA_ROUTES]
  const urls = routes.map((route) => {
    const loc = route === '' ? 'https://weyandigital.ma/' : `https://weyandigital.ma/${route}/`
    const meta = SITEMAP_META[route] || { changefreq: 'monthly', priority: '0.7' }
    const lastmod = SITEMAP_LASTMOD[route] || '2026-10-31'
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`
}

export default defineConfig({
  build: {
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('react-router')) return 'router'
          if (
            id.includes('react-dom') ||
            id.includes('/react/') ||
            id.includes('\\react\\') ||
            id.includes('scheduler')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
  plugins: [
    react(),
    devApiPlugin(),
    {
      name: 'defer-build-css',
      apply: 'build',
      transformIndexHtml(html) {
        return html.replace(
          /<link\s+rel="stylesheet"([^>]*?)href="(\/assets\/[^"]+\.css)"([^>]*)>/g,
          (fullMatch, beforeHref, href, afterHref) => {
            if (/media=/.test(fullMatch)) return fullMatch

            const preload = `<link rel="preload" as="style" crossorigin="anonymous" href="${href}" />`
            const deferred = `<link rel="stylesheet" crossorigin="anonymous"${beforeHref}href="${href}"${afterHref} media="print" onload="this.media='all'">`
            const noscript = `<noscript><link rel="stylesheet" crossorigin="anonymous" href="${href}"></noscript>`
            return `${preload}\n    ${deferred}\n    ${noscript}`
          }
        )
      },
    },
    {
      name: 'add-preload-crossorigin-module',
      apply: 'build',
      enforce: 'post',
      transformIndexHtml(html) {
        return html
          .replace(
            /<link\s+rel="modulepreload"(?![^>]*\bcrossorigin=)([^>]*?)href="(\/assets\/[^"]+\.js)"([^>]*)>/g,
            (full, before, href, after) =>
              `<link rel="modulepreload"${before}href="${href}" crossorigin="anonymous"${after}>`
          )
          .replace(
            /<script\s+type="module"(?![^>]*\bcrossorigin=)([^>]*?)src="(\/assets\/[^"]+\.js)"([^>]*)>/g,
            (full, before, src, after) =>
              `<script type="module"${before}src="${src}" crossorigin="anonymous"${after}>`
          )
      },
    },
    {
      name: 'emit-spa-html-pages',
      apply: 'build',
      closeBundle() {
        const dist = join(process.cwd(), 'dist')
        const indexFile = join(dist, 'index.html')
        if (!existsSync(indexFile)) return

        const html = readFileSync(indexFile, 'utf8')

        for (const route of SPA_ROUTES) {
          const target = join(dist, route, 'index.html')
          mkdirSync(dirname(target), { recursive: true })
          writeFileSync(target, html, 'utf8')
        }

        const sitemap = writeCanonicalSitemap()
        writeFileSync(join(dist, 'sitemap.xml'), sitemap, 'utf8')
        writeFileSync(join(process.cwd(), 'public/sitemap.xml'), sitemap, 'utf8')
      },
    },
  ],
  server: {
    port: 3001,
    strictPort: false,
    open: false,
  },
})
