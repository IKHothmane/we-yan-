import { useEffect } from 'react'

type PageSeoProps = {
  title: string
  description: string
}

const SITE_NAME = 'we yan digital'

function setMeta(selector: string, attribute: 'name' | 'property', value: string, content: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) return

  element.setAttribute(attribute, value)
  element.content = content
}

export default function PageSeo({ title, description }: PageSeoProps) {
  useEffect(() => {
    document.title = title

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
  }, [description, title])

  return <span className="sr-only">{SITE_NAME}</span>
}
