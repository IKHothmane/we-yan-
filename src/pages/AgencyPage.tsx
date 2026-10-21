import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageBreadcrumb from '../components/PageBreadcrumb'
import PageSeo from '../components/PageSeo'
import SemanticLink from '../components/SemanticLink'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const agenceLinking = getPageLinking('/agence')
const faq = agenceLinking?.faq ?? []
const liens = agenceLinking?.liens_sortants ?? []

export default function AgencyPage() {
  useScrollReveal()

  useEffect(() => {
    const shapes = Array.from(document.querySelectorAll('.float-animation')) as HTMLElement[]
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="bg-background text-on-background overflow-hidden w-full">
      <PageSeo {...pageSeo.agency} />
      <Navbar />

      <main>
        <section
          className="relative min-h-[80vh] flex items-center pt-[clamp(6rem,11vw,7.5rem)] pb-[clamp(4rem,10vw,8rem)] px-[clamp(1rem,4vw,2rem)] md:px-20 overflow-hidden"
          data-reveal
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(100, 131, 240, 0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        >
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-[120px] float-animation"></div>
            <div className="absolute bottom-20 right-40 w-64 h-64 bg-secondary rounded-full blur-[100px] float-animation" style={{ animationDelay: '-2s' }}></div>
          </div>
          <div className="w-full">
            <div className="lg:w-2/3">
              <PageBreadcrumb className="mb-6" />
              <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-6 bg-secondary/10 px-4 py-1 rounded-full">
                Agence digitale · Casablanca Maarif
              </span>
              <h1 className="text-[clamp(2.2rem,6vw,3.75rem)] font-extrabold text-on-surface mb-6 leading-[1.08]">
                Agence digitale à Casablanca : SEO, ads et marques qui{' '}
                <span className="text-primary italic">performent.</span>
              </h1>
              <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-on-surface-variant mb-8 max-w-2xl">
                We Yan Digital, collectif créatif à Maarif : stratégie locale, exécution mesurable et accompagnement
                pour startups, PME et marques marocaines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-white font-bold hover:brightness-110 transition"
                >
                  Demander un devis
                  <Icon name="arrow_forward" className="w-5 h-5" />
                </Link>
                <Link
                  to="/services/"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white px-8 py-3.5 font-bold text-on-surface hover:border-primary transition"
                >
                  Voir nos services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-[clamp(4rem,9vw,8rem)] px-[clamp(1rem,4vw,2rem)] md:px-20 bg-surface-container-lowest"
          data-reveal
          data-reveal-delay="100"
        >
          <div className="w-full">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 transition-transform duration-700" style={{ transform: 'rotate(3deg)' }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(3deg)')}>
                  <img
                    alt="Studio We Yan Digital Casablanca Maarif"
                    className="w-full h-full object-cover"
                    src="/images/agency/story.webp"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                </div>
                <div className="absolute -bottom-6 right-2 h-32 w-32 sm:-bottom-10 sm:-right-10 sm:h-48 sm:w-48 bg-secondary rounded-3xl flex flex-col items-center justify-center text-white shadow-xl" style={{ transform: 'rotate(-6deg)' }}>
                  <span className="text-3xl sm:text-4xl font-extrabold">Maarif</span>
                  <span className="px-3 text-center text-xs sm:text-sm font-semibold tracking-wide">Casablanca</span>
                </div>
              </div>

              <div data-reveal data-reveal-delay="200">
                <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-on-surface mb-8">Notre histoire : <span className="text-secondary">Make it Different.</span></h2>
                <div className="space-y-6">
                  <p className="text-on-surface-variant">
                    We Yan Digital est née d&apos;une conviction simple : le marché marocain mérite une créativité sans compromis. Nous avons commencé comme un atelier d&apos;innovation guidé par une seule exigence, faire les choses autrement et avec justesse.
                  </p>
                  <p className="text-on-surface-variant">
                    Aujourd&apos;hui, nous accompagnons les marques de demain dans leur transformation numérique. Chaque concept, chaque visuel et chaque stratégie digitale s&apos;inscrivent dans une même mission : créer une différence durable, utile et mémorable pour nos partenaires.
                  </p>
                  {liens.map((lien) => (
                    <SemanticLink key={lien.cible} lien={lien} clusterSource="hub" className="text-on-surface-variant" />
                  ))}
                  <div className="pt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-1 bg-secondary rounded-full"></div>
                      <span className="text-sm font-semibold tracking-wide text-on-surface italic">Innovation, Passion, Excellence.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-[clamp(4rem,9vw,8rem)] px-[clamp(1rem,4vw,2rem)] md:px-20 bg-surface"
          data-reveal
          data-reveal-delay="300"
        >
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-on-surface mb-4">Notre ADN</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">La rencontre entre l&apos;héritage marocain, la vision stratégique et les standards digitaux internationaux.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="p-[clamp(1.5rem,4vw,3rem)] rounded-3xl bg-white/70 backdrop-blur-lg border border-white/30 relative overflow-hidden group lg:col-span-2" data-reveal>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon name="public" className="w-24 h-24 text-on-surface" />
                </div>
                <h3 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-primary mb-6">Standards Internationaux</h3>
                <p className="text-lg text-on-surface-variant">
                  Nous appliquons des méthodologies agiles et des standards technologiques exigeants pour concevoir des expériences robustes, évolutives et performantes.
                </p>
              </div>
              <div className="p-[clamp(1.5rem,4vw,3rem)] rounded-3xl bg-primary text-white flex flex-col justify-end" data-reveal data-reveal-delay="100">
                <Icon name="auto_awesome" className="w-16 h-16 mb-8" />
                <h3 className="text-[clamp(1.6rem,3vw,2rem)] font-bold mb-4">Culture Locale</h3>
                <p className="text-white/80">
                  Nous comprenons les nuances, les références et les codes visuels du public marocain pour créer des connexions authentiques et durables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {faq.length > 0 ? (
          <section className="bg-[#EFF6FF] border-y border-[#BFDBFE] px-[clamp(1rem,4vw,2rem)] py-20 md:px-20 lg:py-28">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-12" data-reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#1D4ED8] border border-[#BFDBFE] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-5">
                  FAQ agence
                </span>
                <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
                  Questions fréquentes · We Yan Digital Casablanca
                </h2>
              </div>
              <div className="space-y-4">
                {faq.map((f, i) => (
                  <details
                    key={f.q}
                    open={i === 0}
                    className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)] open:border-[#6483F0]"
                    data-reveal
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                      <h3 className="font-bold text-[1rem] text-slate-900 leading-snug">{f.q}</h3>
                      <span className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 group-open:rotate-45 group-open:bg-[#6483F0] group-open:text-white group-open:border-[#6483F0]" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-5 text-slate-600 leading-8 text-[0.98rem]">{f.r}</p>
                  </details>
                ))}
              </div>
              <div className="mt-12 text-center" data-reveal>
                <Link to="/contact/" className="inline-flex items-center gap-2 rounded-full bg-[#6483F0] px-8 py-3.5 font-bold text-white hover:brightness-110">
                  Contacter l&apos;agence
                  <Icon name="arrow_forward" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
        ) : null}

        <SiteFooter revealDelay="400" />
      </main>

      <style>{`
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  )
}
