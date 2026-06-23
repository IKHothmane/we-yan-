import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type NavbarProps = {
  variant?: 'light' | 'hero'
}

export default function Navbar({ variant = 'light' }: NavbarProps) {
  const isHero = variant === 'hero'
  const [useLightStyle, setUseLightStyle] = useState(!isHero)

  useEffect(() => {
    if (!isHero) {
      setUseLightStyle(true)
      return
    }

    let frameId = 0

    const updateNavbarStyle = () => {
      frameId = 0
      const nextValue = window.scrollY > window.innerHeight * 0.55
      setUseLightStyle((currentValue) => (currentValue === nextValue ? currentValue : nextValue))
    }

    const handleScroll = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(updateNavbarStyle)
    }

    updateNavbarStyle()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isHero])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/agence', label: 'About' },
    { to: '/contact', label: 'Contacte' },
  ] as const

  const socialLinks = [
    { href: 'https://instagram.com', label: 'Instagram', icon: '/icons/instagram.svg', hoverClassName: 'hover:text-secondary' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: '/icons/linkedin-in.svg', hoverClassName: 'hover:text-primary' },
    { href: 'https://facebook.com', label: 'Facebook', icon: '/icons/facebook-f.svg', hoverClassName: 'hover:text-secondary' },
  ] as const

  const iconMaskStyle = (url: string) =>
    ({
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      backgroundColor: 'currentColor',
    }) as const

  return (
    <>
      <nav className="fixed left-0 right-0 top-4 z-50 px-[clamp(0.875rem,3vw,1.5rem)]">
        <div
          className={`max-w-7xl mx-auto rounded-full px-[clamp(0.8rem,3vw,2rem)] py-[clamp(0.65rem,1.8vw,0.85rem)] transition-all ${
            useLightStyle
              ? 'bg-white/95 border border-slate-200 shadow-lg'
              : 'bg-white/10 border border-white/20'
          }`}
        >
          <div className="hidden md:flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center space-x-3">
              <span
                className={`h-[clamp(2.5rem,6vw,3.5rem)] w-[clamp(2.5rem,6vw,3.5rem)] overflow-hidden rounded-full transition-all ${
                  useLightStyle ? 'bg-white shadow-sm' : 'bg-white/10'
                }`}
              >
                <img src="/Logo%20weyan.png?v=20260619" alt="We Yan Digital" className="h-full w-full object-cover" />
              </span>
              <span className="sr-only">We Yan Digital</span>
            </Link>

            <div
              className={`hidden md:flex items-center space-x-[clamp(1.25rem,2.6vw,2.5rem)] font-medium text-[clamp(0.9rem,1.2vw,1rem)] ${
                useLightStyle ? 'text-slate-700' : 'text-white'
              }`}
            >
              {links.slice(0, 3).map((link) => (
                <Link key={link.to} className="hover:text-[#FC9700] transition-colors" to={link.to}>
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4">
                <Link className="hover:text-[#FC9700] transition-colors" to={links[3].to}>
                  {links[3].label}
                </Link>
                <div className="flex items-center gap-2">
                  {socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.label}
                      aria-label={socialLink.label}
                      className={`flex items-center justify-center transition-all ${socialLink.hoverClassName} ${
                        useLightStyle ? 'text-slate-700' : 'text-white'
                      }`}
                      href={socialLink.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span aria-hidden="true" className="h-5 w-5" style={iconMaskStyle(socialLink.icon)} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-4 gap-1 md:hidden">
            {links.map((link) => (
              <Link
                key={link.to}
                className={`flex min-h-[48px] items-center justify-center rounded-2xl px-2 py-3 text-center text-[0.68rem] font-semibold transition-colors ${
                  useLightStyle ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
