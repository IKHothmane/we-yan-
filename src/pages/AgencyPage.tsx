﻿﻿﻿﻿﻿import { useEffect } from 'react'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

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
              <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-6 bg-secondary/10 px-4 py-1 rounded-full">
                L'Agence
              </span>
              <h1 className="text-[clamp(2.7rem,7vw,4.75rem)] font-extrabold text-on-surface mb-8 leading-[1.02]">
                Nous crÃ©ons le futur des <span className="text-primary italic">marques marocaines.</span>
              </h1>
              <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-on-surface-variant">
                Un collectif crÃ©atif nÃ© au cÅ“ur de Casablanca, fusionnant l'Ã¢me locale avec l'excellence digitale internationale pour transformer chaque vision en impact concret.
              </p>
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
                    alt="Our Creative Space"
                    className="w-full h-full object-cover"
                    src="/images/agency/story.jpg"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                </div>
                <div className="absolute -bottom-6 right-2 h-32 w-32 sm:-bottom-10 sm:-right-10 sm:h-48 sm:w-48 bg-secondary rounded-3xl flex flex-col items-center justify-center text-white shadow-xl" style={{ transform: 'rotate(-6deg)' }}>
                  <span className="text-3xl sm:text-4xl font-extrabold">10+</span>
                  <span className="px-3 text-center text-xs sm:text-sm font-semibold tracking-wide">AnnÃ©es d'Excellence</span>
                </div>
              </div>

              <div data-reveal data-reveal-delay="200">
                <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-on-surface mb-8">Our Story: <span className="text-secondary">Make it Different.</span></h2>
                <div className="space-y-6">
                  <p className="text-on-surface-variant">
                    We Digital est nÃ© d'une conviction simple : le marchÃ© marocain mÃ©rite une crÃ©ativitÃ© sans compromis. Nous avons commencÃ© comme un petit atelier d'innovation, avec pour seule boussole l'obsession de la diffÃ©rence.
                  </p>
                  <p className="text-on-surface-variant">
                    Aujourd'hui, nous accompagnons les leaders de demain dans leur transformation numÃ©rique. Chaque pixel, chaque ligne de code et chaque stratÃ©gie sociale est imprÃ©gnÃ©e de notre mission fondamentale : ne jamais se contenter du statu quo. Nous ne suivons pas les tendances, nous les crÃ©ons pour nos partenaires.
                  </p>
                  <div className="pt-8">
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
              <p className="text-on-surface-variant max-w-2xl mx-auto">La rencontre entre l'hÃ©ritage marocain et les standards digitaux globaux.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="p-[clamp(1.5rem,4vw,3rem)] rounded-3xl bg-white/70 backdrop-blur-lg border border-white/30 relative overflow-hidden group lg:col-span-2" data-reveal>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon name="public" className="w-24 h-24 text-on-surface" />
                </div>
                <h3 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-primary mb-6">Standards Internationaux</h3>
                <p className="text-lg text-on-surface-variant">
                  Nous appliquons les mÃ©thodologies agiles et les cadres technologiques les plus avancÃ©s au monde pour garantir des produits robustes, scalables et sÃ©curisÃ©s.
                </p>
              </div>
              <div className="p-[clamp(1.5rem,4vw,3rem)] rounded-3xl bg-primary text-white flex flex-col justify-end" data-reveal data-reveal-delay="100">
                <Icon name="auto_awesome" className="w-16 h-16 mb-8" />
                <h3 className="text-[clamp(1.6rem,3vw,2rem)] font-bold mb-4">Culture Locale</h3>
                <p className="text-white/80">
                  Nous comprenons les nuances, l'humour et les codes visuels du consommateur marocain pour crÃ©er des connexions authentiques.
                </p>
              </div>
            </div>
          </div>
        </section>

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

