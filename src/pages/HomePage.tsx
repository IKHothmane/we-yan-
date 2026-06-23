﻿﻿﻿import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeDeferredSections = lazy(() => import('../components/home/HomeDeferredSections'))

const homeImages = {
  hero: '/images/home/hero-custom.jpg?v=20260623',
}

export default function HomePage() {
  const [shouldLoadDeferredSections, setShouldLoadDeferredSections] = useState(false)
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

  return (
    <div className="bg-white font-sans text-slate-900 overflow-hidden w-full">
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
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
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
          <img
            alt=""
            aria-hidden="true"
            className="hero-image-motion absolute inset-0 h-full w-full object-cover object-center"
            src={homeImages.hero}
            width={1600}
            height={900}
            loading="eager"
            decoding="async"
          />
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
          <div className="relative z-10 w-full px-[clamp(1rem,4vw,1.5rem)]">
            <div className="max-w-3xl py-[clamp(1rem,3vw,2rem)]">
              <h1 className="text-white text-[clamp(2.4rem,9vw,5.5rem)] font-rigot font-bold leading-[1.02] mb-[clamp(0.75rem,2vw,1rem)]">
                Make it <br /> Different
              </h1>
              <h2 className="text-white text-[clamp(1.35rem,5vw,3.125rem)] font-bold leading-[1.08] mb-[clamp(1.25rem,3vw,2rem)]">
                Votre marque mÃ©rite de se <br className="hidden sm:block" />
                <span className="text-[#FC9700]">dÃ©marquer.</span>
              </h2>
              <p className="text-gray-300 text-[clamp(0.95rem,2vw,1.25rem)] max-w-2xl leading-relaxed mb-[clamp(1.5rem,3vw,2.5rem)]">
                We Yan Digital est une agence de communication Ã  Casablanca spÃ©cialisÃ©e en branding,
                crÃ©ation de contenu, influence marketing et publicitÃ© digitale au Maroc.
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

        <div ref={deferredSectionsTriggerRef} aria-hidden="true" className="h-px w-full" />

        <Suspense fallback={null}>
          {shouldLoadDeferredSections ? <HomeDeferredSections /> : null}
        </Suspense>
      </main>
    </div>
  )
}

