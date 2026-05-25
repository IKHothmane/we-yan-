import { useEffect } from 'react'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import useScrollReveal from '../hooks/useScrollReveal'

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
      <Navbar />

      <main>
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-32 px-8 md:px-20 overflow-hidden" data-reveal style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(100, 131, 240, 0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}>
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-[120px] float-animation"></div>
            <div className="absolute bottom-20 right-40 w-64 h-64 bg-secondary rounded-full blur-[100px] float-animation" style={{ animationDelay: '-2s' }}></div>
          </div>
          <div className="max-w-7xl mx-auto w-full">
            <div className="lg:w-2/3">
              <span className="inline-block text-secondary font-semibold text-sm tracking-widest uppercase mb-6 bg-secondary/10 px-4 py-1 rounded-full">
                L'Agence
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold text-on-surface mb-8 leading-tight">
                Nous créons le futur des <span className="text-primary italic">marques marocaines.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant">
                Un collectif créatif né au cœur de Casablanca, fusionnant l'âme locale avec l'excellence digitale internationale pour transformer chaque vision en impact concret.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 md:px-20 bg-surface-container-lowest" data-reveal data-reveal-delay="100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 transition-transform duration-700" style={{ transform: 'rotate(3deg)' }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotate(3deg)')}>
                <img
                  alt="Our Creative Space"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXanOiulfk8KwYBo42gYSatoWmknKg7L5Vu_Wm8CIqGXka1ScAIWQDwGerHTb8E6YtZlRcfDTghyIoDE8M5Px5r9dDcwbDRv7i42pCxGPxZda8xChiGC1D1DWaT2JV5fmkCYLXUlVR1bBuRWX5qVPBuLB04IcXmx-3OezowJC5w57u692diuILAAfzMNDEMl23HXeg6_tVCVUBUYwb3x7rQvvv9Zpf06QiqdBaRYq3AL3k2xoF_uK-Xw1PSdGo14AUCZmqOCmKF5s"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary rounded-3xl flex flex-col items-center justify-center text-white shadow-xl" style={{ transform: 'rotate(-6deg)' }}>
                <span className="text-4xl font-extrabold">10+</span>
                <span className="text-sm font-semibold tracking-wide">Années d'Excellence</span>
              </div>
            </div>
            <div data-reveal data-reveal-delay="200">
              <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-8">Our Story: <span className="text-secondary">Make it Different.</span></h2>
              <div className="space-y-6">
                <p className="text-on-surface-variant">
                  We Digital est né d'une conviction simple : le marché marocain mérite une créativité sans compromis. Nous avons commencé comme un petit atelier d'innovation, avec pour seule boussole l'obsession de la différence.
                </p>
                <p className="text-on-surface-variant">
                  Aujourd'hui, nous accompagnons les leaders de demain dans leur transformation numérique. Chaque pixel, chaque ligne de code et chaque stratégie sociale est imprégnée de notre mission fondamentale : ne jamais se contenter du statu quo. Nous ne suivons pas les tendances, nous les créons pour nos partenaires.
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
        </section>

        <section className="py-32 px-8 md:px-20 bg-surface" data-reveal data-reveal-delay="300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-4">Notre ADN</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">La rencontre entre l'héritage marocain et les standards digitaux globaux.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-12 rounded-3xl bg-white/70 backdrop-blur-lg border border-white/30 relative overflow-hidden group" data-reveal>
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon name="public" className="w-24 h-24 text-on-surface" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">Standards Internationaux</h3>
                <p className="text-lg text-on-surface-variant">
                  Nous appliquons les méthodologies agiles et les cadres technologiques les plus avancés au monde pour garantir des produits robustes, scalables et sécurisés.
                </p>
              </div>
              <div className="p-12 rounded-3xl bg-primary text-white flex flex-col justify-end" data-reveal data-reveal-delay="100">
                <Icon name="auto_awesome" className="w-16 h-16 mb-8" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Culture Locale</h3>
                <p className="text-white/80">
                  Nous comprenons les nuances, l'humour et les codes visuels du consommateur marocain pour créer des connexions authentiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-12 px-8 md:px-20" data-reveal data-reveal-delay="400">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-2xl font-bold text-on-surface mb-2">we yan digital</div>
              <p className="text-on-surface-variant">Creativity meets digital excellence.</p>
            </div>
            <div className="text-on-surface-variant">
              © {new Date().getFullYear()} we yan digital. All Rights Reserved.
            </div>
          </div>
        </footer>
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
