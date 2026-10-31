import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader'

type SiteLayoutProps = {
  children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (!id) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ block: 'start' })
    })
  }, [location.pathname, location.hash])

  return (
    <main className="hero-page">
      <SiteHeader />
      {children}
    </main>
  )
}
