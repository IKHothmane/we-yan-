import { Suspense, lazy, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeDeferredSections = lazy(() => import('../components/home/HomeDeferredSections'))

const homeImages = {
  heroAvif: '/images/home/hero.avif?v=20260619',
  hero: '/images/home/hero.webp?v=20260619',
}

function HeroNavbarLite() {
  const [useLightStyle, setUseLightStyle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setUseLightStyle(window.scrollY > window.innerHeight * 0.55)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-[clamp(0.875rem,3vw,1.5rem)]">
      <div
        className={`max-w-7xl mx-auto rounded-full px-[clamp(0.8rem,3vw,2rem)] py-[clamp(0.65rem,1.8vw,0.85rem)] backdrop-blur-md transition-all ${
          useLightStyle
            ? 'border border-slate-200 bg-white/95 shadow-lg'
            : 'border border-white/20 bg-white/10'
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
            className={`hidden md:flex items-center space-x-[clamp(1.25rem,2.6vw,2.5rem)] text-[clamp(0.9rem,1.2vw,1rem)] font-medium ${
              useLightStyle ? 'text-slate-700' : 'text-white'
            }`}
          >
            <Link className="transition-colors hover:text-[#FC9700]" to="/">
              Home
            </Link>
            <Link className="transition-colors hover:text-[#FC9700]" to="/services">
              Services
            </Link>
            <Link className="transition-colors hover:text-[#FC9700]" to="/agence">
              About
            </Link>
            <Link className="transition-colors hover:text-[#FC9700]" to="/contact">
              Contacte
            </Link>
          </div>

        </div>

        <div className="grid grid-cols-4 gap-1 md:hidden">
          <Link
            className={`flex min-h-[48px] items-center justify-center rounded-2xl px-2 py-3 text-center text-[0.68rem] font-semibold transition-colors ${
              useLightStyle ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`flex min-h-[48px] items-center justify-center rounded-2xl px-2 py-3 text-center text-[0.68rem] font-semibold transition-colors ${
              useLightStyle ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            to="/services"
          >
            Services
          </Link>
          <Link
            className={`flex min-h-[48px] items-center justify-center rounded-2xl px-2 py-3 text-center text-[0.68rem] font-semibold transition-colors ${
              useLightStyle ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            to="/agence"
          >
            About
          </Link>
          <Link
            className={`flex min-h-[48px] items-center justify-center rounded-2xl px-2 py-3 text-center text-[0.68rem] font-semibold transition-colors ${
              useLightStyle ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            to="/contact"
          >
            Contacte
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default function HomePage() {
  const [shouldLoadDeferredSections, setShouldLoadDeferredSections] = useState(false)

  useEffect(() => {
    const loadDeferredSections = () => setShouldLoadDeferredSections(true)
    const timeoutId = window.setTimeout(loadDeferredSections, 3000)

    window.addEventListener('scroll', loadDeferredSections, { passive: true, once: true })
    window.addEventListener('pointerdown', loadDeferredSections, { passive: true, once: true })
    window.addEventListener('keydown', loadDeferredSections, { once: true })

    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('scroll', loadDeferredSections)
      window.removeEventListener('pointerdown', loadDeferredSections)
      window.removeEventListener('keydown', loadDeferredSections)
    }
  }, [])

  return (
    <div className="bg-white font-sans text-slate-900 overflow-hidden w-full pb-28 md:pb-32">
      <style>{`
        .font-rigot {
          font-family: 'Syne', 'Poppins', sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .floating-tag {
          backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.9);
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <HeroNavbarLite />

      <main>
        <section
          className="relative h-[100svh] min-h-[clamp(36rem,85svh,50rem)] flex items-center overflow-hidden pt-[clamp(4.5rem,10vw,6rem)]"
        >
          <picture className="absolute inset-0">
            <source srcSet={homeImages.heroAvif} type="image/avif" />
            <img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              src={homeImages.hero}
              width={512}
              height={286}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))' }}
          />
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div
              className="absolute top-[25%] right-[5%] lg:right-[20%] floating-tag flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 rounded-2xl shadow-xl z-10"
              style={{ animationDelay: '0s' }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-4-4L4 16v4Z" />
                  <path d="m13.5 6.5 4 4" />
                </svg>
              </span>
              <span className="font-bold text-slate-800 text-sm lg:text-base">Branding</span>
            </div>
            <div
              className="absolute bottom-[25%] right-[8%] lg:right-[30%] floating-tag flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 rounded-2xl shadow-xl z-10"
              style={{ animationDelay: '1s' }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FC9700] text-white shadow-sm">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 19h16" />
                  <path d="M7 15V9" />
                  <path d="M12 15V5" />
                  <path d="M17 15v-3" />
                </svg>
              </span>
              <span className="font-bold text-slate-800 text-sm lg:text-base">Ads</span>
            </div>
          </div>
          <div className="container mx-auto px-[clamp(1rem,4vw,1.5rem)] relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-white text-[clamp(3rem,10vw,5.5rem)] font-rigot font-bold leading-[1.05] mb-[clamp(0.75rem,2vw,1rem)]">
                Make it <br /> Different
              </h1>
              <h2 className="text-white text-[clamp(1.65rem,5.4vw,3.125rem)] font-bold mb-[clamp(1.25rem,3vw,2rem)]">
                Votre marque mérite de se <br className="hidden sm:block" />
                <span className="text-[#FC9700]">démarquer.</span>
              </h2>
              <p className="text-gray-300 text-[clamp(1rem,2.2vw,1.25rem)] max-w-xl leading-relaxed mb-[clamp(1.5rem,3vw,2.5rem)]">
                We Yan Digital est une agence de communication à Casablanca spécialisée en branding,
                création de contenu, influence marketing et publicité digitale au Maroc.
              </p>
              <div className="flex flex-col sm:flex-row gap-[clamp(0.75rem,2vw,1rem)]">
                <Link
                  to="/contact"
                  className="bg-[#FC9700] text-[#0F172A] px-[clamp(1.5rem,4vw,2.5rem)] py-[clamp(0.85rem,2vw,1rem)] rounded-full font-bold text-[clamp(0.95rem,2vw,1.125rem)] hover:scale-105 transition-transform shadow-lg shadow-orange-500/20 text-center"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/projets"
                  className="border-2 border-white/40 text-white px-[clamp(1.5rem,4vw,2.5rem)] py-[clamp(0.85rem,2vw,1rem)] rounded-full font-bold text-[clamp(0.95rem,2vw,1.125rem)] hover:bg-white/10 transition-all text-center"
                >
                  Voir nos projets
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
          {shouldLoadDeferredSections ? <HomeDeferredSections /> : null}
        </Suspense>
      </main>
    </div>
  )
}
