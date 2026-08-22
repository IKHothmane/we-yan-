import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildPageCanonical,
  buildPageDocumentTitle,
  buildPageMetaDescription,
  getPageLinking,
} from '../lib/internalLinking'
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
  if (!canonical) return

  canonical.href = url
}

function setBreadcrumbJsonLd(pathname: string) {
  const id = 'breadcrumb-jsonld'
  const page = getPageLinking(pathname)
  const existing = document.getElementById(id)
  if (!page || page.breadcrumb.length < 2) {
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
  script.textContent = JSON.stringify(buildBreadcrumbJsonLd(page))
}

function setFaqJsonLd(pathname: string) {
  const id = 'faq-jsonld'
  const page = getPageLinking(pathname)
  const existing = document.getElementById(id)
  const json = page ? buildFaqJsonLd(page) : null
  if (!json) {
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
  script.textContent = JSON.stringify(json)
}

function normalizePath(pathname: string) {
  return withTrailingSlash(pathname)
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

  useLayoutEffect(() => {
    const page = getPageLinking(location.pathname)
    const documentTitle = page ? buildPageDocumentTitle(page) : title
    const metaDescription = page ? buildPageMetaDescription(page) : description
    const canonicalUrl = page ? buildPageCanonical(page) : `${SITE_URL}${normalizePath(location.pathname)}`

    document.title = documentTitle

    setMeta('meta[name="description"]', 'name', 'description', metaDescription)
    setMeta('meta[property="og:title"]', 'property', 'og:title', documentTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', metaDescription)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME)
    setMeta('meta[property="og:image"]', 'property', 'og:image', ogImage)
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', ogImageAlt)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', documentTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metaDescription)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', twitterImage)
    setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', twitterImageAlt)
    // Sécurité : si le link canonical n'existe pas (ex: template), on le crée.
    if (document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')) {
      setCanonical(canonicalUrl)
    } else {
      const link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      link.href = canonicalUrl
      document.head.appendChild(link)
    }
    setBreadcrumbJsonLd(location.pathname)
    setFaqJsonLd(location.pathname)
  }, [description, location.pathname, ogImage, ogImageAlt, title, twitterImage, twitterImageAlt])

  return null
}
