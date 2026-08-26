import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import { HOME_HERO_SERVICES } from '../constants'
import { pageSeo } from '../lib/pageSeo'

const HomeDeferredSections = lazy(() => import('../components/home/HomeDeferredSections'))

const homeImages = {
  hero: '/hero.webp',
  heroMobile: '/modern_office_scene.webp',
}

const heroServicePositions = [
  {
    containerClassName: 'top-[18%] right-[5%] lg:right-[16%]',
    animationDelay: '0s',
  },
  {
    containerClassName: 'top-[39%] right-[10%] lg:right-[28%]',
    animationDelay: '0.8s',
  },
  {
    containerClassName: 'bottom-[20%] right-[6%] lg:right-[18%]',
    animationDelay: '1.6s',
  },
] as const

export default function HomePage() {
  const [shouldLoadDeferredSections, setShouldLoadDeferredSections] = useState(false)
  const [activeServiceGroup, setActiveServiceGroup] = useState(0)
  const deferredSectionsTriggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const loadDeferredSections = () => setShouldLoadDeferredSections((currentValue) => currentValue || true)
    const deferredSectionsTrigger = deferredSectionsTriggerRef.current

    let observer: IntersectionObserver | null = null
    let fallbackTimeoutId = 0
    let idleCallbackId: number | null = null

    if (deferredSectionsTrigger) {
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return
          loadDeferredSections()
          observer?.disconnect()
          observer = null
        },
        {
          rootMargin: '320px 0px',
        },
      )

      observer.observe(deferredSectionsTrigger)
    }

    fallbackTimeoutId = window.setTimeout(() => {
      if ('requestIdleCallback' in window) {
        idleCallbackId = window.requestIdleCallback(loadDeferredSections, { timeout: 1200 })
        return
      }

      loadDeferredSections()
    }, 4500)

    window.addEventListener('pointerdown', loadDeferredSections, { passive: true, once: true })
    window.addEventListener('keydown', loadDeferredSections, { once: true })

    return () => {
      if (observer) observer.disconnect()
      window.clearTimeout(fallbackTimeoutId)
      if (idleCallbackId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId)
      }
      window.removeEventListener('pointerdown', loadDeferredSections)
      window.removeEventListener('keydown', loadDeferredSections)
    }
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveServiceGroup((currentValue) => (currentValue + 1) % 2)
    }, 3200)

    return () => window.clearInterval(intervalId)
  }, [])

  const visibleHeroServices = HOME_HERO_SERVICES.slice(activeServiceGroup * 3, activeServiceGroup * 3 + 3)

  return (
    <div className="bg-white font-sans text-slate-900 overflow-hidden w-full">
      <PageSeo {...pageSeo.home} />
      <style>{`
        .font-rigot {
          font-family: 'Syne', 'Poppins', sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .floating-tag {
          background-color: rgba(255, 255, 255, 0.9);
          animation: float 4s ease-in-out infinite;
        }
        .hero-image-motion {
          animation: heroPan 18s ease-in-out infinite alternate;
          transform-origin: center center;
          will-change: transform;
        }
        .service-tag-enter {
          animation: tagSwap 420ms ease both;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes tagSwap {
          0% { opacity: 0; transform: translate3d(0, 18px, 0) scale(0.96); }
          100% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes heroPan {
          0% { transform: scale(1.02) translate3d(0, 0, 0); }
          100% { transform: scale(1.1) translate3d(-1.5%, 1.5%, 0); }
        }
      `}</style>

      <Navbar variant="hero" />

      <main>
        <section
          className="relative flex min-h-[100svh] items-center overflow-hidden pt-[clamp(5.5rem,12vw,7rem)] pb-[clamp(2.5rem,6vw,4rem)]"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={homeImages.hero} type="image/webp" />
            <img
              alt=""
              aria-hidden="true"
              className="hero-image-motion absolute inset-0 h-full w-full object-cover object-center"
              src={homeImages.heroMobile}
              width={900}
              height={1600}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {visibleHeroServices.map((service, index) => {
              const position = heroServicePositions[index]
              const toneClassName = service.tone === 'secondary' ? 'bg-[#FC9700]' : 'bg-primary'

              return (
                <div
                  key={`${activeServiceGroup}-${service.label}`}
                  className={`absolute ${position.containerClassName} floating-tag service-tag-enter flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 rounded-2xl shadow-xl z-10 border border-slate-100`}
                  style={{ animationDelay: position.animationDelay }}
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full ${toneClassName} text-white shadow-sm`}>
                    <Icon name={service.icon} className="text-[1.15rem] leading-none" />
                  </span>
                  <span className="font-bold text-slate-800 text-sm lg:text-base">{service.label}</span>
                </div>
              )
            })}
          </div>
          <div className="relative z-10 w-full px-[clamp(1rem,4vw,1.5rem)]">
            <div className="max-w-3xl py-[clamp(1rem,3vw,2rem)]">
              <h1 className="text-slate-900 text-[clamp(2.4rem,9vw,5.5rem)] font-rigot font-bold leading-[1.02] mb-[clamp(0.75rem,2vw,1rem)]">
                Make it <br /> Different
              </h1>
              <h2 className="text-slate-900 text-[clamp(1.35rem,5vw,3.125rem)] font-bold leading-[1.08] mb-[clamp(1.25rem,3vw,2rem)]">
                Votre marque mérite de se <br className="hidden sm:block" />
                <span className="text-[#FC9700]">démarquer.</span>
              </h2>
              <p className="text-slate-600 text-[clamp(0.95rem,2vw,1.25rem)] max-w-2xl leading-relaxed mb-[clamp(1.5rem,3vw,2.5rem)]">
                <strong className="font-semibold text-slate-900">Agence digitale à Casablanca</strong>, We Yan Digital accompagne marques, startups et PME au Maroc dans leur croissance digitale : branding, création de contenu, influence marketing, SEO, SEA, création de site web et publicité digitale performante.
              </p>
              <div className="flex flex-col sm:flex-row gap-[clamp(0.75rem,2vw,1rem)]">
                <Link
                  to="/contact/"
                  className="bg-[#FC9700] text-[#0F172A] px-[clamp(1.5rem,4vw,2.5rem)] py-[clamp(0.85rem,2vw,1rem)] rounded-full font-bold text-[clamp(0.95rem,2vw,1.125rem)] hover:scale-105 transition-transform shadow-lg shadow-orange-500/20 text-center"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/projets/"
                  className="border-2 border-slate-900/80 text-slate-900 px-[clamp(1.5rem,4vw,2.5rem)] py-[clamp(0.85rem,2vw,1rem)] rounded-full font-bold text-[clamp(0.95rem,2vw,1.125rem)] hover:bg-slate-900 hover:text-white transition-all text-center"
                >
                  Voir nos projets
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div ref={deferredSectionsTriggerRef} aria-hidden="true" className="h-px w-full" />

        <Suspense fallback={null}>
          {shouldLoadDeferredSections ? <HomeDeferredSections /> : null}
        </Suspense>
      </main>
    </div>
  )
}
