import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { withTrailingSlash } from '../lib/paths'

type PageSeoProps = {
  title: string
  description: string
  ogImage: string
  twitterImage: string
  ogImageAlt: string
  twitterImageAlt: string
}

const SITE_URL = 'https://weyandigital.ma'
const SITE_NAME = 'We Yan Digital'

function setMeta(selector: string, attribute: 'name' | 'property', value: string, content: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) return

  element.setAttribute(attribute, value)
  element.content = content
}

function setCanonical(url: string) {
  const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (canonical) {
    canonical.href = url
    return
  }

  const link = document.createElement('link')
  link.setAttribute('rel', 'canonical')
  link.href = url
  document.head.appendChild(link)
}

function buildFallbackCanonical(pathname: string) {
  const normalized = withTrailingSlash(pathname)
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`
}

function upsertJsonLd(id: string, data: unknown | null) {
  const existing = document.getElementById(id)
  if (!data) {
    existing?.remove()
    return
  }

  let script = existing as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data)
}

function applyBasicSeo({
  title,
  description,
  ogImage,
  twitterImage,
  ogImageAlt,
  twitterImageAlt,
  canonicalUrl,
}: PageSeoProps & { canonicalUrl: string }) {
  document.title = title

  setMeta('meta[name="description"]', 'name', 'description', description)
  setMeta('meta[property="og:title"]', 'property', 'og:title', title)
  setMeta('meta[property="og:description"]', 'property', 'og:description', description)
  setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
  setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME)
  setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
  setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', ogImageAlt)
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', twitterImage)
  setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', twitterImageAlt)
  setCanonical(canonicalUrl)
}

export default function PageSeo({
  title,
  description,
  ogImage,
  twitterImage,
  ogImageAlt,
  twitterImageAlt,
}: PageSeoProps) {
  const location = useLocation()

  // Chemin critique : props uniquement (pas de graphe internalLinking dans le bundle initial).
  useEffect(() => {
    applyBasicSeo({
      title,
      description,
      ogImage,
      twitterImage,
      ogImageAlt,
      twitterImageAlt,
      canonicalUrl: buildFallbackCanonical(location.pathname),
    })
  }, [description, location.pathname, ogImage, ogImageAlt, title, twitterImage, twitterImageAlt])

  // Affinage SERP + JSON-LD après idle / en chunk async.
  useEffect(() => {
    let cancelled = false
    let idleId: number | null = null
    let timeoutId = 0

    const run = () => {
      void Promise.all([import('../lib/internalLinking'), import('../lib/jsonLd')]).then(
        ([{ getPageLinking, buildBreadcrumbJsonLd, buildFaqJsonLd, buildPageCanonical, buildPageDocumentTitle }, { buildServiceJsonLd }]) => {
          if (cancelled) return

          const page = getPageLinking(location.pathname)
          const documentTitle = page?.title_serp || title || (page ? buildPageDocumentTitle(page) : SITE_NAME)
          const canonicalUrl = page ? buildPageCanonical(page) : buildFallbackCanonical(location.pathname)

          applyBasicSeo({
            title: documentTitle,
            description,
            ogImage,
            twitterImage,
            ogImageAlt,
            twitterImageAlt,
            canonicalUrl,
          })

          if (!page || page.breadcrumb.length < 2) {
            upsertJsonLd('breadcrumb-jsonld', null)
          } else {
            upsertJsonLd('breadcrumb-jsonld', buildBreadcrumbJsonLd(page))
          }

          upsertJsonLd('faq-jsonld', page ? buildFaqJsonLd(page) : null)
          upsertJsonLd('service-jsonld', page ? buildServiceJsonLd(page) : null)
        },
      )
    }

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(run, { timeout: 1800 })
    } else {
      timeoutId = window.setTimeout(run, 1)
    }

    return () => {
      cancelled = true
      if (idleId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      window.clearTimeout(timeoutId)
    }
  }, [description, location.pathname, ogImage, ogImageAlt, title, twitterImage, twitterImageAlt])

  return null
}
