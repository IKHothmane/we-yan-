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
      const { transformSync } = await import('esbuild')
      const srcPath = join(process.cwd(), 'src/lib/internalLinking.ts')
      const src = readFileSync(srcPath, 'utf8')
      const { code } = transformSync(src, { loader: 'ts', format: 'esm' })
      const cacheDir = join(process.cwd(), 'node_modules', '.cache')
      if (!existsSync(cacheDir)) mkdirSync(cacheDir, { recursive: true })
      const tmp = join(cacheDir, 'validate-internal-links.mjs')
      writeFileSync(tmp, code)
      const mod = await import(`${pathToFileURL(tmp).href}?t=${Date.now()}`)
      mod.validateInternalLinks()
    },
  }
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
        const { getPageLinking, buildBreadcrumbJsonLd, buildFaqJsonLd, buildPageDocumentTitle, buildPageMetaDescription, buildPageCanonical } = await import(
          `${pathToFileURL(linkingModule).href}?emit=${Date.now()}`
        )

        const escapeHtml = (value) =>
          String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')

        const applyPageHead = (sourceHtml, slug) => {
          let next = sourceHtml
          if (slug === '/demandes') {
            next = next.replace(
              /<meta name="robots" content="[^"]*" \/>/,
              '<meta name="robots" content="noindex, nofollow" />',
            )
          }

          const page = getPageLinking(slug)
          if (!page) return next

          const title = buildPageDocumentTitle(page)
          const description = buildPageMetaDescription(page)
          const canonical = buildPageCanonical(page)
          const safeTitle = escapeHtml(title)
          const safeDescription = escapeHtml(description)

          next = next.replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
          next = next.replace(
            /<meta name="description" content="[^"]*" \/>/,
            `<meta name="description" content="${safeDescription}" />`,
          )
          next = next.replace(
            /<meta property="og:title" content="[^"]*" \/>/,
            `<meta property="og:title" content="${safeTitle}" />`,
          )
          next = next.replace(
            /<meta property="og:description" content="[^"]*" \/>/,
            `<meta property="og:description" content="${safeDescription}" />`,
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
            `<meta name="twitter:title" content="${safeTitle}" />`,
          )
          next = next.replace(
            /<meta name="twitter:description" content="[^"]*" \/>/,
            `<meta name="twitter:description" content="${safeDescription}" />`,
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

          return next
        }

        writeFileSync(indexFile, applyPageHead(html, '/'))

        for (const route of SPA_ROUTES) {
          const target = join(dist, route, 'index.html')
          mkdirSync(dirname(target), { recursive: true })
          writeFileSync(target, applyPageHead(html, `/${route}`))
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
