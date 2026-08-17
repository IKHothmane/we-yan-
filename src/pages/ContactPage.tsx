import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'
import ContactSendPopup from '../components/ContactSendPopup'
import { sendContactMessage } from '../lib/sendContact'
import { markLeadReadyToTrack } from '../lib/trackLead'

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: '/icons/instagram.svg' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: '/icons/linkedin-in.svg' },
  { href: 'https://facebook.com', label: 'Facebook', icon: '/icons/facebook-f.svg' },
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

const services = [
  'Stratégie Marketing & Rebranding',
  'Création de Contenu & Community Management',
  'Publicité Digitale (Meta Ads & Google Ads)',
  'Référencement Naturel (SEO)',
  'Marketing d’Influence',
  'Média Publicité Offline',
] as const

type Service = (typeof services)[number]

export default function ContactPage() {
  useScrollReveal()
  const navigate = useNavigate()
  const [selectedServices, setSelectedServices] = useState<Service[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [popupOpen, setPopupOpen] = useState(false)

  const toggleService = (service: Service) => {
    setSelectedServices((current) =>
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      await sendContactMessage({
        name,
        email,
        phone,
        message,
        services: selectedServices,
        website,
      })
      markLeadReadyToTrack()
      navigate('/merci')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Envoi impossible.')
      setPopupOpen(true)
    }
  }

  return (
    <div className="bg-background min-h-screen font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-hidden w-full">
      <style>{`
        @keyframes contactBtnPulse {
          0%, 100% { box-shadow: 0 10px 15px -3px rgba(252,151,0,0.25), 0 0 0 0 rgba(252,151,0,0.45); transform: scale(1); }
          50% { box-shadow: 0 10px 15px -3px rgba(252,151,0,0.25), 0 0 0 12px rgba(252,151,0,0); transform: scale(1.01); }
        }
        .contact-submit-pulse { animation: contactBtnPulse 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .contact-submit-pulse { animation: none; }
        }
      `}</style>
      <PageSeo {...pageSeo.contact} />
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-8 md:px-margin-desktop py-section-padding">
        <header className="mb-20 animate-fade-in text-center max-w-4xl mx-auto" data-reveal>
          <h1 className="font-rigot text-6xl md:text-7xl font-extrabold mb-6 hidden md:block">
            Parlons de votre prochain grand projet.
          </h1>
          <h1 className="font-rigot text-4xl font-bold mb-4 md:hidden">
            Parlons de votre prochain grand projet.
          </h1>
          <p className="text-body-lg text-on-surface-variant">
            Prêt à transformer vos idées en réalité numérique ? Notre équipe d&apos;experts est à votre écoute pour
            concevoir des solutions sur mesure.
          </p>
        </header>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-14 rounded-2xl shadow-sm border border-outline-variant/20 relative overflow-hidden">
            <div aria-hidden="true" className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-32 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                <aside className="space-y-10 lg:col-span-4">
                  <div>
                    <h3 className="font-rigot text-2xl font-bold leading-tight md:text-3xl mb-8">
                      Informations de contact
                    </h3>
                    <div className="space-y-6">
                      <div className="group">
                        <div className="flex items-center gap-4 mb-1">
                          <Icon name="mail" className="text-primary text-xl" />
                          <span className="uppercase tracking-widest text-outline text-sm font-semibold">Email</span>
                        </div>
                        <a
                          className="text-body-lg font-semibold hover:text-primary transition-colors duration-300 ml-9 block"
                          href="mailto:contact@weyan.digital"
                        >
                          contact@weyan.digital
                        </a>
                      </div>

                      <div className="group">
                        <div className="flex items-center gap-4 mb-1">
                          <Icon name="phone_iphone" className="text-primary text-xl" />
                          <span className="uppercase tracking-widest text-outline text-sm font-semibold">Téléphone</span>
                        </div>
                        <a
                          className="text-body-lg font-semibold hover:text-primary transition-colors duration-300 ml-9 block"
                          href="tel:+212691567246"
                        >
                          06 91 56 72 46
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-outline-variant/30">
                    <span className="uppercase tracking-widest text-outline text-sm font-semibold mb-6 block">
                      Suivez-nous
                    </span>
                    <div className="flex gap-4">
                      {socialLinks.map((socialLink) => (
                        <a
                          key={socialLink.label}
                          className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-on-surface-variant"
                          href={socialLink.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visitez notre ${socialLink.label}`}
                        >
                          <span aria-hidden="true" className="h-5 w-5" style={iconMaskStyle(socialLink.icon)} />
                        </a>
                      ))}
                    </div>
                  </div>
                </aside>

                <div className="lg:col-span-8">
                  <form className="relative space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2 group">
                      <label
                        className="text-sm font-semibold text-on-surface-variant transition-colors group-focus-within:text-primary"
                        htmlFor="name"
                      >
                        Nom complet
                      </label>
                      <input
                        className="w-full bg-surface/50 border border-outline-variant rounded-lg p-4 focus:ring-0 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                        id="name"
                        placeholder="Jean Dupont"
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2 group">
                      <label
                        className="text-sm font-semibold text-on-surface-variant transition-colors group-focus-within:text-primary"
                        htmlFor="email"
                      >
                        Adresse email
                      </label>
                      <input
                        className="w-full bg-surface/50 border border-outline-variant rounded-lg p-4 focus:ring-0 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                        id="email"
                        placeholder="jean@exemple.com"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2 group">
                      <label
                        className="text-sm font-semibold text-on-surface-variant transition-colors group-focus-within:text-primary"
                        htmlFor="phone"
                      >
                        Téléphone
                      </label>
                      <input
                        className="w-full bg-surface/50 border border-outline-variant rounded-lg p-4 focus:ring-0 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                        id="phone"
                        placeholder="06 00 00 00 00"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-on-surface-variant">Service souhaité</label>
                      <p className="text-xs text-on-surface-variant/80">
                        Sélectionnez les services qui vous intéressent.
                      </p>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {services.map((s) => {
                          const id = `service-${s.toLowerCase().replace(/[^\p{L}0-9]+/gu, '-')}`
                          const isSelected = selectedServices.includes(s)
                          return (
                            <label key={s} htmlFor={id} className="block cursor-pointer">
                              <input
                                id={id}
                                checked={isSelected}
                                className="hidden"
                                name="services"
                                type="checkbox"
                                onChange={() => toggleService(s)}
                              />
                              <span
                                className={`flex min-h-[3.5rem] w-full items-center rounded-lg border px-4 py-3 text-sm font-semibold leading-snug transition-all whitespace-normal break-words ${
                                  isSelected
                                    ? 'border-primary-container bg-primary-container text-on-primary-container service-carousel-selected'
                                    : 'border-outline-variant bg-surface/50 text-on-surface'
                                }`}
                              >
                                {s}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    <div className="space-y-2 group">
                      <label
                        className="text-sm font-semibold text-on-surface-variant transition-colors group-focus-within:text-primary"
                        htmlFor="message"
                      >
                        Votre message
                      </label>
                      <textarea
                        className="w-full bg-surface/50 border border-outline-variant rounded-lg p-4 focus:ring-0 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                        id="message"
                        placeholder="Parlez-nous de vos objectifs..."
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      className="absolute left-[-9999px] h-0 w-0 opacity-0"
                      aria-hidden="true"
                    />

                    <button
                      className="w-full bg-secondary text-on-secondary font-semibold text-xl py-4 rounded-xl hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 flex items-center justify-center gap-3 group contact-submit-pulse disabled:cursor-not-allowed disabled:opacity-70"
                      type="submit"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                      <Icon name="arrow_forward" className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    {status === 'success' && (
                      <p className="sr-only" role="status">
                        Message envoyé. Nous vous répondons sous 24h.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="sr-only" role="alert">
                        {errorMessage}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ContactSendPopup
        open={popupOpen}
        status="error"
        errorMessage={errorMessage}
        onClose={() => setPopupOpen(false)}
      />

      <SiteFooter revealDelay="200" />
    </div>
  )
}
