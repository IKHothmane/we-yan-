import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { useSearchParams } from 'react-router-dom'
import SiteLayout from '../components/layout/SiteLayout'
import { legalIdentity } from '../lib/legalIdentity'
import { sendContactMessage } from '../lib/sendContact'
import '../styles/contact-page.css'

const services = [
  {
    id: 'strategie',
    label: 'Stratégie marketing & rebranding',
    short: 'Stratégie & rebranding',
    hint: 'Positionnement, audit et identité de marque',
  },
  {
    id: 'community',
    label: 'Création de contenu & Community Management',
    short: 'Contenu & community',
    hint: 'Posts, reels, animation des réseaux',
  },
  {
    id: 'publicite',
    label: 'Publicité digitale (Meta Ads & Google Ads)',
    short: 'Publicité digitale',
    hint: 'Meta Ads, Google Ads et optimisation',
  },
  {
    id: 'seo',
    label: 'Référencement naturel (SEO)',
    short: 'Référencement SEO',
    hint: 'Visibilité Google et trafic qualifié',
  },
  {
    id: 'influence',
    label: 'Marketing d’influence',
    short: 'Marketing d’influence',
    hint: 'Créateurs, collabs et amplification',
  },
  {
    id: 'offline',
    label: 'Média & publicité offline',
    short: 'Média offline',
    hint: 'Affichage, print et événementiel',
  },
  {
    id: 'site-web',
    label: 'Création de site web',
    short: 'Site web',
    hint: 'Vitrine, e-commerce ou sur-mesure',
  },
  {
    id: 'autre',
    label: 'Autre demande',
    short: 'Autre demande',
    hint: 'Parlez-nous librement de votre besoin',
  },
] as const

const LIMITS = {
  name: 80,
  company: 100,
  email: 120,
  phone: 10,
  message: 1000,
} as const

function limitText(value: string, max: number) {
  return value.slice(0, max)
}

/** Chiffres, espaces, +, ( ) et tirets uniquement. */
function limitPhone(value: string) {
  return value.replace(/[^\d+\s().-]/g, '').slice(0, LIMITS.phone)
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.8 9.7 3l2 4.2-2 1.7a15 15 0 0 0 5.4 5.4l1.7-2 4.2 2-.8 2.7a2 2 0 0 1-2.2 1.4A16.5 16.5 0 0 1 5.6 6a2 2 0 0 1 1.4-2.2Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.8" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  )
}

function serviceFromParam(value: string | null) {
  if (!value) return ''
  const byId = services.find((item) => item.id === value)
  if (byId) return byId.label
  const byLabel = services.find((item) => item.label === value)
  return byLabel?.label ?? ''
}

type SlideSubmitProps = {
  complete: boolean
  sending: boolean
  onComplete: () => boolean | Promise<boolean>
}

function SlideSubmit({ complete, sending, onComplete }: SlideSubmitProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const startXRef = useRef(0)
  const startOffsetRef = useRef(0)
  const [offset, setOffset] = useState(0)
  const [maxOffset, setMaxOffset] = useState(0)
  const [dragging, setDragging] = useState(false)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const knob = track.querySelector<HTMLElement>('.contact-slide-knob')
    if (!knob) return
    const styles = getComputedStyle(track)
    const padLeft = Number.parseFloat(styles.paddingLeft) || 0
    const padRight = Number.parseFloat(styles.paddingRight) || 0
    setMaxOffset(Math.max(0, track.clientWidth - padLeft - padRight - knob.offsetWidth))
  }, [])

  useEffect(() => {
    measure()
    const track = trackRef.current
    if (!track || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [measure])

  useEffect(() => {
    if (complete) setOffset(maxOffset)
  }, [complete, maxOffset])

  async function finishIfNeeded(nextOffset: number) {
    if (maxOffset <= 0 || sending) return
    if (nextOffset >= maxOffset * 0.88) {
      const accepted = await onComplete()
      setOffset(accepted ? maxOffset : 0)
      return
    }
    setOffset(0)
  }

  function onPointerDown(event: ReactPointerEvent<HTMLButtonElement>) {
    if (complete || sending) return
    draggingRef.current = true
    setDragging(true)
    startXRef.current = event.clientX
    startOffsetRef.current = offset
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onPointerMove(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!draggingRef.current || complete || sending) return
    const next = Math.min(
      maxOffset,
      Math.max(0, startOffsetRef.current + (event.clientX - startXRef.current)),
    )
    setOffset(next)
  }

  function onPointerUp(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!draggingRef.current) return
    draggingRef.current = false
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    const next = Math.min(
      maxOffset,
      Math.max(0, startOffsetRef.current + (event.clientX - startXRef.current)),
    )
    void finishIfNeeded(next)
  }

  async function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (complete || sending) return
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
      event.preventDefault()
      const accepted = await onComplete()
      setOffset(accepted ? maxOffset : 0)
    }
  }

  const progress = maxOffset > 0 ? offset / maxOffset : 0

  return (
    <div
      className={`contact-slide ${complete ? 'is-complete' : ''} ${dragging ? 'is-dragging' : ''} ${sending ? 'is-sending' : ''}`}
      ref={trackRef}
      role="group"
      aria-label="Glisser pour envoyer le message"
      aria-busy={sending}
    >
      <span className="contact-slide-label" style={{ opacity: 1 - progress * 0.85 }}>
        {complete ? 'Message envoyé' : sending ? 'Envoi en cours…' : 'Discutons de votre projet'}
      </span>
      <button
        type="button"
        className="contact-slide-knob"
        style={{ transform: `translateX(${offset}px)` }}
        aria-label="Glisser vers la droite pour envoyer"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        disabled={sending || complete}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        →
      </button>
    </div>
  )
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const formRef = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(() => serviceFromParam(searchParams.get('service')))
  const [serviceOpen, setServiceOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [feedback, setFeedback] = useState('')
  const [feedbackError, setFeedbackError] = useState(false)
  const [slideComplete, setSlideComplete] = useState(false)
  const [sending, setSending] = useState(false)
  const serviceListRef = useRef<HTMLDivElement>(null)
  const selectedService = services.find((item) => item.label === service)

  useEffect(() => {
    setService(serviceFromParam(searchParams.get('service')))
  }, [searchParams])

  useEffect(() => {
    if (!serviceOpen) return
    function onPointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null
      if (serviceListRef.current && target && !serviceListRef.current.contains(target)) {
        setServiceOpen(false)
      }
    }
    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') setServiceOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [serviceOpen])

  async function submitContact() {
    const form = formRef.current
    if (!form) return false
    if (!form.reportValidity()) {
      setSlideComplete(false)
      return false
    }
    if (sending || slideComplete) return slideComplete

    setSending(true)
    setFeedback('')
    setFeedbackError(false)

    try {
      const result = await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        company: company.trim(),
        message: message.trim(),
        services: service ? [service] : [],
        website,
      })
      setSlideComplete(true)
      if (result.warning) {
        setFeedbackError(true)
        setFeedback(result.warning)
      } else {
        setFeedback(
          'Merci ! Votre message a bien été envoyé et enregistré. Notre équipe vous répondra rapidement.',
        )
      }
      return true
    } catch (error) {
      setSlideComplete(false)
      setFeedbackError(true)
      setFeedback(
        error instanceof Error
          ? error.message
          : 'Impossible d’envoyer le message. Réessayez dans un instant.',
      )
      return false
    } finally {
      setSending(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (slideComplete || sending) return
    void submitContact()
  }

  function handleSlideComplete() {
    return submitContact()
  }

  return (
    <SiteLayout>
      <div className="contact-page">
        <section className="contact-layout">
          <div className="contact-photo-panel">
            <img
              src="/images/contact/contact-workspace.webp"
              alt="Espace de travail chaleureux et créatif de WeYan Digital"
            />
            <div className="contact-photo-caption">
              <span>WE MAKE IT DIFFERENT</span>
              <i />
            </div>
          </div>

          <div className="contact-content">
            <div className="contact-form-card" id="contact-form">
              <div className="contact-form-heading">
                <span>PARLONS DE VOTRE PROJET</span>
                <h1>
                  Faisons quelque chose <em>de différent.</em>
                </h1>
                <p>Présentez-nous votre idée. Notre équipe vous répondra pour en discuter.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="contact-fields-grid">
                  <label>
                    <span className="sr-only">Votre nom</span>
                    <input
                      required
                      value={name}
                      onChange={(event) => setName(limitText(event.target.value, LIMITS.name))}
                      placeholder="Votre nom"
                      autoComplete="name"
                      maxLength={LIMITS.name}
                      disabled={sending || slideComplete}
                    />
                  </label>
                  <label>
                    <span className="sr-only">Votre entreprise</span>
                    <input
                      value={company}
                      onChange={(event) => setCompany(limitText(event.target.value, LIMITS.company))}
                      placeholder="Votre entreprise"
                      autoComplete="organization"
                      maxLength={LIMITS.company}
                      disabled={sending || slideComplete}
                    />
                  </label>
                  <label>
                    <span className="sr-only">Votre e-mail</span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(limitText(event.target.value, LIMITS.email))}
                      placeholder="Votre email"
                      autoComplete="email"
                      maxLength={LIMITS.email}
                      disabled={sending || slideComplete}
                    />
                  </label>
                  <label>
                    <span className="sr-only">Votre numéro</span>
                    <input
                      type="tel"
                      inputMode="tel"
                      value={phone}
                      onChange={(event) => setPhone(limitPhone(event.target.value))}
                      placeholder="06 XX XX XX XX"
                      autoComplete="tel"
                      maxLength={LIMITS.phone}
                      pattern="^[+\d\s().-]{8,10}$"
                      title="Numéro de téléphone (8 à 10 caractères)"
                      disabled={sending || slideComplete}
                    />
                  </label>
                </div>

                <div
                  className={`contact-service-picker ${serviceOpen ? 'is-open' : ''} ${selectedService ? 'has-value' : ''}`}
                  ref={serviceListRef}
                >
                  <span className="contact-service-label" id="contact-service-label">
                    Quel service vous intéresse ?
                  </span>
                  <button
                    type="button"
                    className="contact-service-trigger"
                    aria-haspopup="listbox"
                    aria-expanded={serviceOpen}
                    aria-labelledby="contact-service-label contact-service-value"
                    disabled={sending || slideComplete}
                    onClick={() => setServiceOpen((open) => !open)}
                  >
                    <span id="contact-service-value" className="contact-service-value">
                      {selectedService ? (
                        <>
                          <strong>{selectedService.short}</strong>
                          <small>{selectedService.hint}</small>
                        </>
                      ) : (
                        <strong className="is-placeholder">Choisir un service</strong>
                      )}
                    </span>
                    <span className="contact-service-chevron" aria-hidden="true">
                      ▾
                    </span>
                  </button>

                  {serviceOpen ? (
                    <ul className="contact-service-list" role="listbox" aria-labelledby="contact-service-label">
                      {services.map((item) => {
                        const active = service === item.label
                        return (
                          <li key={item.id} role="presentation">
                            <button
                              type="button"
                              role="option"
                              aria-selected={active}
                              className={`contact-service-option ${active ? 'is-active' : ''}`}
                              onClick={() => {
                                setService(item.label)
                                setServiceOpen(false)
                              }}
                            >
                              <span className="contact-service-option-text">
                                <strong>{item.short}</strong>
                                <small>{item.hint}</small>
                              </span>
                              {active ? <span className="contact-service-check" aria-hidden="true">✓</span> : null}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}

                  {/* Champ caché pour la validation / accessibilité formulaire */}
                  <select
                    className="contact-service-native"
                    value={service}
                    required
                    tabIndex={-1}
                    aria-hidden="true"
                    onChange={(event) => setService(event.target.value)}
                  >
                    <option value="">Quel service vous intéresse ?</option>
                    {services.map((item) => (
                      <option key={item.id} value={item.label}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="contact-message-label">
                  <span className="sr-only">Votre message</span>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(limitText(event.target.value, LIMITS.message))}
                    placeholder="Votre message ..."
                    maxLength={LIMITS.message}
                    disabled={sending || slideComplete}
                  />
                  <span className="contact-char-count" aria-live="polite">
                    {message.length}/{LIMITS.message}
                  </span>
                </label>

                <label className="contact-honeypot" aria-hidden="true">
                  <span>Site web</span>
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </label>

                <SlideSubmit
                  complete={slideComplete}
                  sending={sending}
                  onComplete={handleSlideComplete}
                />
                {feedback ? (
                  <p
                    className={`contact-feedback ${feedbackError ? 'is-error' : ''}`}
                    role="status"
                  >
                    {feedback}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </section>

        <aside className="contact-details" aria-label="Coordonnées">
          <a className="contact-detail" href={legalIdentity.telephoneHref}>
            <span className="contact-detail-icon">
              <PhoneIcon />
            </span>
            <span>{legalIdentity.telephone}</span>
          </a>
          <a className="contact-detail" href={`mailto:${legalIdentity.email}`}>
            <span className="contact-detail-icon">
              <MailIcon />
            </span>
            <span>{legalIdentity.email}</span>
          </a>
          <div className="contact-detail">
            <span className="contact-detail-icon">
              <PinIcon />
            </span>
            <span>
              {legalIdentity.siege.ville}, Maroc
            </span>
          </div>
        </aside>

        <div className="contact-decoration contact-decoration-orange" aria-hidden="true" />
        <div className="contact-decoration contact-decoration-blue" aria-hidden="true" />
        <svg className="contact-bottom-scribble" viewBox="0 0 260 180" aria-hidden="true">
          <path d="M4 158 C45 115 78 20 115 24 C150 27 80 130 114 145 C150 163 184 30 256 4" />
          <path d="M70 178 C105 125 158 90 255 50" />
        </svg>
      </div>
    </SiteLayout>
  )
}
