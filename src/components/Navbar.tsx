import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

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

    const handleScroll = () => {
      setUseLightStyle(window.scrollY > window.innerHeight * 0.55)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHero])

  const links = useMemo(
    () =>
      isHero
        ? [
            { to: '/', label: 'Home', icon: 'web' },
            { to: '/services', label: 'Services', icon: 'architecture' },
            { to: '/agence', label: 'About', icon: 'groups_3' },
          ]
        : [
            { to: '/projets', label: 'Projets', icon: 'palette' },
            { to: '/services', label: 'Services', icon: 'architecture' },
            { to: '/agence', label: 'Pourquoi nous', icon: 'groups_3' },
          ],
    [isHero],
  )

  return (
    <>
      <nav className="fixed bottom-4 left-0 right-0 z-50 px-[clamp(0.875rem,3vw,1.5rem)]">
        <div
          className={`max-w-7xl mx-auto rounded-full px-[clamp(0.8rem,3vw,2rem)] py-[clamp(0.65rem,1.8vw,0.85rem)] transition-all ${
            useLightStyle
              ? 'bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg'
              : 'bg-white/10 backdrop-blur-md border border-white/20'
          }`}
        >
          <div className="hidden md:flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center space-x-3">
              <span
                className={`overflow-hidden rounded-full flex items-center justify-center transition-all ${
                  useLightStyle
                    ? 'h-[clamp(2.5rem,6vw,3rem)] w-[clamp(2.5rem,6vw,3rem)] bg-white'
                    : 'h-[clamp(2.5rem,6vw,3.5rem)] w-[clamp(2.5rem,6vw,3.5rem)] bg-white/10'
                }`}
              >
                <img src="/logo.jpg" alt="We Digital" className="h-full w-full object-cover" />
              </span>
              <span className="sr-only">We Digital</span>
            </Link>

            <div
              className={`hidden md:flex items-center space-x-[clamp(1.25rem,2.6vw,2.5rem)] font-medium text-[clamp(0.9rem,1.2vw,1rem)] ${
                useLightStyle ? 'text-slate-700' : 'text-white'
              }`}
            >
              {links.map((link) => (
                <Link key={link.to} className="hover:text-[#FC9700] transition-colors" to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-[clamp(0.5rem,1.8vw,1rem)]">
              <Link
                className={`px-[clamp(0.9rem,2.6vw,1.5rem)] py-[clamp(0.55rem,1.6vw,0.85rem)] rounded-full font-semibold hover:brightness-110 transition-all text-[clamp(0.7rem,1.8vw,0.875rem)] uppercase tracking-[0.18em] ${
                  useLightStyle ? 'bg-[#FC9700] text-[#0F172A]' : 'bg-[#FC9700] text-white hover:bg-orange-600'
                }`}
                to="/contact"
              >
                {isHero ? "Let's Talk" : 'Devis'}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1 md:hidden">
            {links.map((link) => (
              <Link
                key={link.to}
                className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2.5 transition-colors ${
                  useLightStyle ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                to={link.to}
              >
                <Icon name={link.icon} className="w-5 h-5" />
                <span className="text-[0.68rem] leading-none font-semibold text-center">
                  {link.label}
                </span>
              </Link>
            ))}
            <Link
              className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-2xl bg-[#FC9700] px-2 py-2.5 text-[#0F172A] shadow-sm"
              to="/contact"
            >
              <Icon name="mail" className="w-5 h-5" />
              <span className="text-[0.68rem] leading-none font-bold text-center">Devis</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
