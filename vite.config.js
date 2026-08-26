import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { devApiPlugin } from './scripts/devApiPlugin.js'

function validateInternalLinksPlugin() {
  return {
    name: 'validate-internal-links',
    async buildStart() {
      const { buildSync } = await import('esbuild')
      const srcPath = join(process.cwd(), 'src/lib/internalLinking.ts')
      const cacheDir = join(process.cwd(), 'node_modules', '.cache')
      if (!existsSync(cacheDir)) mkdirSync(cacheDir, { recursive: true })
      const tmp = join(cacheDir, 'validate-internal-links.mjs')
      // Bundle so relative imports (e.g. ./paths) resolve; transformSync alone leaves them broken in .cache
      const result = buildSync({
        entryPoints: [srcPath],
        bundle: true,
        write: false,
        format: 'esm',
        platform: 'node',
      })
      writeFileSync(tmp, result.outputFiles[0].text)
      const mod = await import(`${pathToFileURL(tmp).href}?t=${Date.now()}`)
      mod.validateInternalLinks()
    },
  }
}

const SITEMAP_SKIP = new Set(['demandes', 'merci'])
const SITEMAP_META = {
  '': { changefreq: 'weekly', priority: '1.0' },
  'agence-seo-casablanca': { changefreq: 'weekly', priority: '0.98' },
  'community-management-casablanca': { changefreq: 'weekly', priority: '0.95' },
  services: { changefreq: 'weekly', priority: '0.94' },
  'services/seo': { changefreq: 'monthly', priority: '0.92' },
  'services/strategie-marketing-rebranding': { changefreq: 'weekly', priority: '0.95' },
  'services/creation-contenu-community-management': { changefreq: 'monthly', priority: '0.9' },
  'services/publicite-digitale': { changefreq: 'weekly', priority: '0.9' },
  'services/marketing-influence': { changefreq: 'weekly', priority: '0.85' },
  'services/media-publicite-offline': { changefreq: 'monthly', priority: '0.88' },
  projets: { changefreq: 'weekly', priority: '0.86' },
  agence: { changefreq: 'monthly', priority: '0.84' },
  contact: { changefreq: 'monthly', priority: '0.83' },
  'blog/rebranding-exemple-casablanca-2026': { changefreq: 'monthly', priority: '0.82' },
  'blog/prix-seo-casablanca-2026': { changefreq: 'monthly', priority: '0.8' },
  'blog/prix-google-ads-maroc-2026': { changefreq: 'monthly', priority: '0.8' },
  'blog/prix-meta-ads-casablanca-2026': { changefreq: 'monthly', priority: '0.78' },
  'blog/prix-site-web-maroc-2026': { changefreq: 'monthly', priority: '0.8' },
  'blog/prix-influenceur-maroc-2026': { changefreq: 'monthly', priority: '0.76' },
  'blog/branding-creation-marque-maroc': { changefreq: 'monthly', priority: '0.75' },
  'blog/seo-vs-sea-maroc': { changefreq: 'monthly', priority: '0.74' },
  'blog/marketing-digital-tendances-maroc-2026': { changefreq: 'monthly', priority: '0.72' },
  'mentions-legales': { changefreq: 'yearly', priority: '0.3' },
  'politique-de-confidentialite': { changefreq: 'yearly', priority: '0.3' },
  'conditions-generales': { changefreq: 'yearly', priority: '0.3' },
}

function writeCanonicalSitemap() {
  const lastmod = '2026-08-26'
  const routes = ['', ...SPA_ROUTES.filter((route) => !SITEMAP_SKIP.has(route))]
  const urls = routes.map((route) => {
    const loc = route === '' ? 'https://weyandigital.ma/' : `https://weyandigital.ma/${route}/`
    const meta = SITEMAP_META[route] || { changefreq: 'monthly', priority: '0.7' }
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

/** Routes React (hors accueil) : un index.html physique par URL pour OVH sans rewrite. */
const SPA_ROUTES = [
  'services',
  'services/strategie-marketing-rebranding',
  'services/creation-contenu-community-management',
  'services/publicite-digitale',
  'services/marketing-influence',
  'services/seo',
  'services/media-publicite-offline',
  'projets',
  'agence',
  'contact',
  'agence-seo-casablanca',
  'community-management-casablanca',
  'blog/prix-site-web-maroc-2026',
  'blog/prix-seo-casablanca-2026',
  'blog/prix-google-ads-maroc-2026',
  'blog/prix-meta-ads-casablanca-2026',
  'blog/prix-influenceur-maroc-2026',
  'blog/seo-vs-sea-maroc',
  'blog/branding-creation-marque-maroc',
  'blog/rebranding-exemple-casablanca-2026',
  'blog/marketing-digital-tendances-maroc-2026',
  'conditions-generales',
  'politique-de-confidentialite',
  'mentions-legales',
  'demandes',
  'merci',
]

export default defineConfig({
  build: {
    cssCodeSplit: true,
    modulePreload: {
      polyfill: true,
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  plugins: [
    react(),
    devApiPlugin(),
    validateInternalLinksPlugin(),
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
          },
        )
      },
    },
    {
      name: 'add-preload-crossorigin-module',
      apply: 'build',
      enforce: 'post',
      transformIndexHtml(html) {
        return html
          .replace(/<link\s+rel="modulepreload"(?![^>]*\bcrossorigin=)([^>]*?)href="(\/assets\/[^"]+\.js)"([^>]*)>/g,
            (full, before, href, after) => `<link rel="modulepreload"${before}href="${href}" crossorigin="anonymous"${after}>`,
          )
          .replace(/<script\s+type="module"(?![^>]*\bcrossorigin=)([^>]*?)src="(\/assets\/[^"]+\.js)"([^>]*)>/g,
            (full, before, src, after) => `<script type="module"${before}src="${src}" crossorigin="anonymous"${after}>`,
          )
      },
    },
    {
      name: 'emit-spa-html-pages',
      apply: 'build',
      async closeBundle() {
        const dist = join(process.cwd(), 'dist')
        const indexFile = join(dist, 'index.html')
        if (!existsSync(indexFile)) return

        const html = readFileSync(indexFile, 'utf8')
        const linkingModule = join(process.cwd(), 'node_modules', '.cache', 'validate-internal-links.mjs')
        const { getPageLinking, buildBreadcrumbJsonLd, buildFaqJsonLd, buildPageDocumentTitle, buildPageCanonical, withTrailingSlash } = await import(
          `${pathToFileURL(linkingModule).href}?emit=${Date.now()}`
        )

        const { buildSync } = await import('esbuild')
        const cacheDir = join(process.cwd(), 'node_modules', '.cache')
        if (!existsSync(cacheDir)) mkdirSync(cacheDir, { recursive: true })
        const seoOut = join(cacheDir, 'page-seo.mjs')
        buildSync({
          entryPoints: [join(process.cwd(), 'src/lib/pageSeo.ts')],
          bundle: true,
          format: 'esm',
          platform: 'node',
          outfile: seoOut,
        })
        const { PAGE_SEO_BY_SLUG } = await import(`${pathToFileURL(seoOut).href}?emit=${Date.now()}`)

        const jsonLdOut = join(cacheDir, 'json-ld.mjs')
        buildSync({
          entryPoints: [join(process.cwd(), 'src/lib/jsonLd.ts')],
          bundle: true,
          format: 'esm',
          platform: 'node',
          outfile: jsonLdOut,
        })
        const { buildServiceJsonLd, buildSiteGraphJsonLd } = await import(
          `${pathToFileURL(jsonLdOut).href}?emit=${Date.now()}`
        )

        const escapeHtml = (value) =>
          String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')

        // Bing lit parfois les metas sans charset HTTP → Ã. Entités numériques = ASCII sûr.
        const escapeMetaAttr = (value) =>
          escapeHtml(value).replace(/[^\x20-\x7E]/g, (ch) => `&#${ch.codePointAt(0)};`)

        const buildStaticBody = (page, description) => {
          const h1 = escapeHtml(page.titre)
          const intro = escapeHtml(description || page.intention)
          const links = (page.liens_sortants || [])
            .map((lien) => {
              const href = escapeHtml(withTrailingSlash(lien.cible))
              const ancre = escapeHtml(lien.ancre)
              const avant = escapeHtml(lien.contexte_avant)
              const apres = escapeHtml(lien.contexte_apres)
              return `<p>${avant} <a href="${href}">${ancre}</a> ${apres}</p>`
            })
            .join('\n')
          const faq =
            page.faq?.length > 0
              ? `<section aria-label="FAQ"><h2>FAQ</h2>${page.faq
                  .map(
                    (item) =>
                      `<article><h3>${escapeHtml(item.q)}</h3><p>${escapeHtml(item.r)}</p></article>`,
                  )
                  .join('\n')}</section>`
              : ''
          return `<main data-seo-static="1">
  <h1>${h1}</h1>
  <p>${intro}</p>
  <nav aria-label="Liens utiles">${links}</nav>
  ${faq}
</main>`
        }

        const applyPageHead = (sourceHtml, slug) => {
          let next = sourceHtml
          if (slug === '/demandes' || slug === '/merci') {
            next = next.replace(
              /<meta name="robots" content="[^"]*" \/>/,
              '<meta name="robots" content="noindex, nofollow" />',
            )
          }

          const page = getPageLinking(slug)
          if (!page) return next

          const seo = PAGE_SEO_BY_SLUG[page.slug]
          const title = buildPageDocumentTitle(page)
          const description = seo?.description || page.intention
          const canonical = buildPageCanonical(page)
          const safeTitle = escapeHtml(title)
          const safeDescription = escapeHtml(description)
          const safeOgDescription = escapeMetaAttr(description)
          const safeOgTitle = escapeMetaAttr(title)

          next = next.replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
          next = next.replace(
            /<meta name="description" content="[^"]*" \/>/,
            `<meta name="description" content="${safeDescription}" />`,
          )
          next = next.replace(
            /<meta property="og:title" content="[^"]*" \/>/,
            `<meta property="og:title" content="${safeOgTitle}" />`,
          )
          next = next.replace(
            /<meta property="og:description" content="[^"]*" \/>/,
            `<meta property="og:description" content="${safeOgDescription}" />`,
          )
          next = next.replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${canonical}" />`,
          )
          next = next.replace(
            /<meta property="og:url" content="[^"]*" \/>/,
            `<meta property="og:url" content="${canonical}" />`,
          )
          next = next.replace(
            /<meta name="twitter:title" content="[^"]*" \/>/,
            `<meta name="twitter:title" content="${safeOgTitle}" />`,
          )
          next = next.replace(
            /<meta name="twitter:description" content="[^"]*" \/>/,
            `<meta name="twitter:description" content="${safeOgDescription}" />`,
          )

          if (page.breadcrumb.length >= 2) {
            const json = JSON.stringify(buildBreadcrumbJsonLd(page))
            const tag = `    <script type="application/ld+json" id="breadcrumb-jsonld">${json}</script>\n`
            next = next.replace('</head>', `${tag}  </head>`)
          }

          const faqJson = buildFaqJsonLd(page)
          if (faqJson) {
            const tag = `    <script type="application/ld+json" id="faq-jsonld">${JSON.stringify(faqJson)}</script>\n`
            next = next.replace('</head>', `${tag}  </head>`)
          }

          const serviceJson = buildServiceJsonLd(page)
          if (serviceJson) {
            const tag = `    <script type="application/ld+json" id="service-jsonld">${JSON.stringify(serviceJson)}</script>\n`
            next = next.replace('</head>', `${tag}  </head>`)
          }

          // Contenu HTML visible pour Bing / crawlers sans JS (remplacé par React au hydrate)
          const staticBody = buildStaticBody(page, description)
          next = next.replace(
            /<div id="root"><\/div>/,
            `<div id="root">${staticBody}</div>`,
          )

          return next
        }

        // Aligne le graph Organization + LocalBusiness du template HTML
        const siteGraphTag = `<script type="application/ld+json" id="site-graph-jsonld">${JSON.stringify(buildSiteGraphJsonLd())}</script>`
        const htmlWithGraph = html.replace(
          /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
          siteGraphTag,
        )

        writeFileSync(indexFile, applyPageHead(htmlWithGraph, '/'), 'utf8')

        for (const route of SPA_ROUTES) {
          const target = join(dist, route, 'index.html')
          mkdirSync(dirname(target), { recursive: true })
          writeFileSync(target, applyPageHead(htmlWithGraph, `/${route}`), 'utf8')
        }

        const sitemap = writeCanonicalSitemap()
        writeFileSync(join(dist, 'sitemap.xml'), sitemap, 'utf8')
        writeFileSync(join(process.cwd(), 'public/sitemap.xml'), sitemap, 'utf8')

        // IndexNow : notifie Bing/Yandex après chaque build (sauf INDEXNOW_SUBMIT=false)
        try {
          const { pingIndexNow } = await import('./scripts/pingIndexNow.mjs')
          const urls = sitemap
            .match(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)
            ?.map((tag) => tag.replace(/<\/?loc>/gi, '').trim())
            .filter(Boolean)
          await pingIndexNow(urls || [])
        } catch (err) {
          console.warn('[indexnow] ping non bloquant:', err?.message || err)
        }
      },
    },
  ],
  server: {
    port: 3001,
    strictPort: false,
    open: false,
  },
})
