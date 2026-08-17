import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

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

function normalizePath(pathname: string) {
  if (pathname === '/') return '/'
  return pathname.replace(/\/+$/, '')
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
    const canonicalUrl = `${SITE_URL}${normalizePath(location.pathname)}`

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
    // Sécurité : si le link canonical n'existe pas (ex: template), on le crée.
    if (document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')) {
      setCanonical(canonicalUrl)
    } else {
      const link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      link.href = canonicalUrl
      document.head.appendChild(link)
    }
  }, [description, location.pathname, ogImage, ogImageAlt, title, twitterImage, twitterImageAlt])

  return null
}
