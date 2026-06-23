import { useState } from 'react'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

export default function ContactPage() {
  useScrollReveal()
  const [service, setService] = useState('Design UI/UX')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message envoyÃ© !')
  }

  return (
    <div className="bg-[#f1f1f1] min-h-screen font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-hidden w-full">
      <PageSeo {...pageSeo.contact} />
      <Navbar />

      <main className="w-full px-[clamp(1rem,4vw,2rem)] md:px-10 lg:px-16 py-[clamp(6rem,11vw,8rem)]">
        <header className="mb-20" data-reveal>
          <h1 className="text-[clamp(2.8rem,7vw,4.5rem)] leading-[1.02] tracking-[-0.03em] font-extrabold max-w-4xl mb-6">
            Parlons de votre prochain grand projet.
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-on-surface-variant max-w-2xl">
            PrÃªt Ã  transformer vos idÃ©es en rÃ©alitÃ© numÃ©rique ? Notre Ã©quipe d'experts est Ã  votre Ã©coute pour concevoir des solutions sur mesure.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <aside className="space-y-12 lg:col-span-4" data-reveal data-reveal-delay="100">
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-4 mb-2">
                  <Icon name="mail" className="w-6 h-6 text-primary" />
                  <span className="uppercase tracking-widest text-outline text-sm font-semibold">Email</span>
                </div>
                <a
                  className="text-2xl md:text-3xl font-semibold hover:text-primary transition-colors duration-300"
                  href="mailto:hello@wedigital.ma"
                >
                  hello@wedigital.ma
                </a>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2">
                  <Icon name="phone_iphone" className="w-6 h-6 text-primary" />
                  <span className="uppercase tracking-widest text-outline text-sm font-semibold">TÃ©lÃ©phone</span>
                </div>
                <div className="flex flex-col">
                  <a
                    className="text-2xl md:text-3xl font-semibold hover:text-primary transition-colors duration-300"
                    href="tel:+212500000000"
                  >
                    +212 (0) 5 22 00 00 00
                  </a>
                  <a
                    className="flex items-center gap-2 mt-2 text-primary text-sm font-semibold hover:underline"
                    href="https://wa.me/212600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="chat" className="w-5 h-5" />
                    Contactez-nous sur WhatsApp
                  </a>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-2">
                  <Icon name="location_on" className="w-6 h-6 text-primary" />
                  <span className="uppercase tracking-widest text-outline text-sm font-semibold">Bureau</span>
                </div>
                <address className="text-lg md:text-xl not-italic text-on-surface-variant leading-relaxed">
                  Angle Boulevard Anfa & Rue Moulay Ali Chrif,<br />
                  Casablanca 20000, Maroc
                </address>
              </div>
            </div>

            <div className="pt-8 border-t border-outline-variant/30">
              <span className="uppercase tracking-widest text-outline text-sm font-semibold mb-6 block">Suivez-nous</span>
              <div className="flex gap-4">
                <a
                  className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visitez notre LinkedIn"
                >
                  <Icon name="share" className="w-6 h-6" />
                </a>
                <a
                  className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visitez notre Instagram"
                >
                  <Icon name="camera" className="w-6 h-6" />
                </a>
                <a
                  className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visitez notre Twitter"
                >
                  <Icon name="link" className="w-6 h-6" />
                </a>
              </div>
            </div>
            </aside>

            <div className="lg:col-span-8" data-reveal data-reveal-delay="200">
            <div className="bg-white/90 backdrop-blur-xl border border-black/5 p-[clamp(1.5rem,4vw,3rem)] rounded-xl shadow-sm">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant" htmlFor="name">
                      Nom complet
                    </label>
                    <input
                      className="w-full bg-white border border-outline-variant rounded-lg p-4 focus:ring-0 focus:border-primary transition-all"
                      id="name"
                      placeholder="Jean Dupont"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant" htmlFor="email">
                      Adresse email
                    </label>
                    <input
                      className="w-full bg-white border border-outline-variant rounded-lg p-4 focus:ring-0 focus:border-primary transition-all"
                      id="email"
                      placeholder="jean@exemple.com"
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant">Service souhaitÃ©</label>
                  <div className="flex flex-wrap gap-3">
                    {['Design UI/UX', 'DÃ©veloppement', 'Marketing Digital', 'Autre'].map((s) => {
                      const id = `service-${s.toLowerCase().replace(/\s+/g, '-')}`
                      return (
                        <label key={s} htmlFor={id} className="cursor-pointer">
                          <input
                            id={id}
                            checked={service === s}
                            className="hidden peer"
                            name="service"
                            type="radio"
                            onChange={() => setService(s)}
                          />
                          <span className="px-6 py-3 rounded-lg border border-outline-variant peer-checked:bg-primary-container peer-checked:border-primary-container peer-checked:text-on-primary-container text-sm font-semibold transition-all inline-block">
                            {s}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant" htmlFor="message">
                    Votre message
                  </label>
                  <textarea
                    className="w-full bg-white border border-outline-variant rounded-lg p-4 focus:ring-0 focus:border-primary transition-all"
                    id="message"
                    placeholder="Parlez-nous de vos objectifs..."
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button
                  className="w-full bg-secondary text-white text-xl md:text-2xl font-semibold py-6 rounded-xl hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 flex items-center justify-center gap-3 group"
                  type="submit"
                >
                  Envoyer le message
                  <Icon
                    name="arrow_forward"
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>

        <section className="mt-32 rounded-3xl overflow-hidden relative shadow-xl min-h-[500px] flex items-center justify-center" data-reveal data-reveal-delay="300">
          <div className="absolute inset-0 z-0 grayscale contrast-125 opacity-40">
            <img
              alt="Casablanca Map Location"
              className="w-full h-full object-cover"
              src="/images/contact/hero.jpg"
              loading="lazy"
              width={1200}
              height={500}
            />
          </div>
          <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-black/5 p-10 max-w-md mx-8 text-center rounded-2xl">
            <div className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="location_on" className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Visitez nos bureaux</h3>
            <p className="text-base md:text-lg text-on-surface-variant mb-6">
              Venez discuter de votre projet autour d'un cafÃ© dans le cÅ“ur battant de Casablanca.
            </p>
            <a
              className="text-primary text-sm font-semibold underline underline-offset-4 hover:text-secondary transition-colors"
              href="https://maps.google.com?q=Casablanca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvrir dans Google Maps
            </a>
          </div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
        </section>
      </main>

      <SiteFooter revealDelay="400" />
    </div>
  )
}

