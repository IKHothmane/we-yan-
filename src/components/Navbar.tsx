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

    const handleScroll = () => {
      setUseLightStyle(window.scrollY > window.innerHeight * 0.55)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHero])

  return (
    <nav className="fixed -bottom-4 left-0 right-0 z-50 px-6 py-4">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full px-8 py-3 ${
          useLightStyle
            ? 'bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg'
            : 'bg-white/10 backdrop-blur-md border border-white/20'
        }`}
      >
        <Link to="/" className="flex items-center space-x-3">
          <span
            className={`overflow-hidden rounded-full flex items-center justify-center ${
              useLightStyle ? 'h-12 w-12 bg-white' : 'h-12 w-12 md:h-14 md:w-14 bg-white/10'
            }`}
          >
            <img
              src="/logo.jpg"
              alt="We Digital"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="sr-only">We Digital</span>
        </Link>
        <div className={`hidden md:flex items-center space-x-10 font-medium ${useLightStyle ? 'text-slate-700' : 'text-white'}`}>
          {isHero ? (
            <>
              <Link className="hover:text-[#FC9700] transition-colors" to="/">
                HOME
              </Link>
              <Link className="hover:text-[#FC9700] transition-colors" to="/services">
                SERVICES
              </Link>
              <Link className="hover:text-[#FC9700] transition-colors" to="/agence">
                ABOUT
              </Link>
            </>
          ) : (
            <>
              <Link className="hover:text-[#FC9700] transition-colors" to="/projets">
                Projets
              </Link>
              <Link className="hover:text-[#FC9700] transition-colors" to="/services">
                Services
              </Link>
              <Link className="hover:text-[#FC9700] transition-colors" to="/agence">
                Pourquoi nous
              </Link>
            </>
          )}
        </div>
        <div>
          <Link
            className={`px-6 py-2 rounded-full font-semibold hover:brightness-110 transition-all text-sm uppercase tracking-wider ${
              useLightStyle ? 'bg-[#FC9700] text-[#0F172A]' : 'bg-[#FC9700] text-white hover:bg-orange-600'
            }`}
            to="/contact"
          >
            {isHero ? "Let's Talk" : 'Demander un devis'}
          </Link>
        </div>
      </div>
    </nav>
  )
}
