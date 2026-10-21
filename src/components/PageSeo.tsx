import { useEffect, useRef } from 'react'
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

async function applyEnrichedSeo(pathname: string, props: PageSeoProps) {
  const [{ getPageLinking, buildBreadcrumbJsonLd, buildFaqJsonLd, buildPageCanonical, buildPageDocumentTitle }, { buildServiceJsonLd }] =
    await Promise.all([import('../lib/internalLinking'), import('../lib/jsonLd')])

  const page = getPageLinking(pathname)
  const documentTitle = page?.title_serp || props.title || (page ? buildPageDocumentTitle(page) : SITE_NAME)
  const canonicalUrl = page ? buildPageCanonical(page) : buildFallbackCanonical(pathname)

  applyBasicSeo({
    ...props,
    title: documentTitle,
    canonicalUrl,
  })

  if (!page || page.breadcrumb.length < 2) {
    upsertJsonLd('breadcrumb-jsonld', null)
  } else {
    upsertJsonLd('breadcrumb-jsonld', buildBreadcrumbJsonLd(page))
  }

  upsertJsonLd('faq-jsonld', page ? buildFaqJsonLd(page) : null)
  upsertJsonLd('service-jsonld', page ? buildServiceJsonLd(page) : null)
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
  // Premier document : le HTML buildé porte déjà title / meta / JSON-LD → pas de chunk SEO critique.
  const isFirstDocumentLoad = useRef(true)

  useEffect(() => {
    const props = { title, description, ogImage, twitterImage, ogImageAlt, twitterImageAlt }

    if (isFirstDocumentLoad.current) {
      isFirstDocumentLoad.current = false
      // Alignement léger sans télécharger internalLinking (évite la chaîne LCP).
      applyBasicSeo({
        ...props,
        canonicalUrl: buildFallbackCanonical(location.pathname),
      })
      return
    }

    let cancelled = false
    void applyEnrichedSeo(location.pathname, props).then(() => {
      if (cancelled) return
    })

    return () => {
      cancelled = true
    }
  }, [description, location.pathname, ogImage, ogImageAlt, title, twitterImage, twitterImageAlt])

  return null
}
