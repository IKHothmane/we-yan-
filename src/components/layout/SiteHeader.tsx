import { useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CONTACT_PATH, NAV_ITEMS } from '../../constants/navigation'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 701px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }

    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header className="hero-header">
      <NavLink to="/" className="hero-logo" end>
        <span>
          <span className="hero-logo-we">We</span>
          <span className="hero-logo-yan">Yan</span>
        </span>
        <span className="hero-logo-digital">Digital</span>
      </NavLink>

      <nav className="hero-nav" aria-label="Navigation principale">
        {NAV_ITEMS.map((item) => (
          <HeaderLink key={item.path} path={item.path} hash={location.hash} pathname={location.pathname}>
            {item.label}
          </HeaderLink>
        ))}
      </nav>

      <div className="hero-header-actions">
        <NavLink to={CONTACT_PATH} className="hero-contact">
          Nous contacter
          <ArrowRight size={17} aria-hidden="true" />
        </NavLink>
        <button
          type="button"
          className="hero-menu-button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? 'Fermer' : 'Menu'}
        </button>
      </div>

      <nav id={menuId} className="hero-mobile-nav" aria-label="Navigation mobile" hidden={!open}>
        {NAV_ITEMS.map((item) => (
          <HeaderLink key={item.path} path={item.path} hash={location.hash} pathname={location.pathname}>
            {item.label}
          </HeaderLink>
        ))}
        <NavLink to={CONTACT_PATH}>Nous contacter</NavLink>
      </nav>
    </header>
  )
}

function HeaderLink({
  path,
  pathname,
  hash,
  children,
}: {
  path: string
  pathname: string
  hash: string
  children: string
}) {
  const section = path.includes('#') ? path.slice(path.indexOf('#')) : ''

  if (section) {
    const current = pathname === '/' && hash === section
    return (
      <Link to={path} aria-current={current ? 'page' : undefined}>
        {children}
      </Link>
    )
  }

  return (
    <NavLink to={path} end={path === '/'}>
      {children}
    </NavLink>
  )
}
