import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
  ],
  server: {
    port: 3001,
    strictPort: false,
    open: false,
  },
})
