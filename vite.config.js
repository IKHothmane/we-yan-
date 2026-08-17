import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  'blog/seo-vs-sea-maroc',
  'blog/branding-creation-marque-maroc',
  'blog/marketing-digital-tendances-maroc-2026',
  'conditions-generales',
  'politique-de-confidentialite',
  'mentions-legales',
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
      closeBundle() {
        const dist = join(process.cwd(), 'dist')
        const indexFile = join(dist, 'index.html')
        if (!existsSync(indexFile)) return

        for (const route of SPA_ROUTES) {
          const target = join(dist, route, 'index.html')
          mkdirSync(dirname(target), { recursive: true })
          copyFileSync(indexFile, target)
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
