import SiteLayout from '../components/layout/SiteLayout'
import { MailIcon, PhoneIcon, PinIcon } from '../components/contact/ContactIcons'
import ServicePicker from '../components/contact/ServicePicker'
import SlideSubmit from '../components/contact/SlideSubmit'
import { LIMITS, PHONE_PATTERN, limitPhone, limitText } from '../constants/contactLimits'
import { useContactForm } from '../hooks/useContactForm'
import { legalIdentity } from '../lib/legalIdentity'
import '../styles/contact-page.css'

export default function ContactPage() {
  const {
    formRef,
    values,
    setters,
    feedback,
    feedbackError,
    complete,
    sending,
    submit,
    handleSubmit,
  } = useContactForm()
  const locked = sending || complete

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
                      value={values.name}
                      onChange={(event) =>
                        setters.setName(limitText(event.target.value, LIMITS.name))
                      }
                      placeholder="Votre nom"
                      autoComplete="name"
                      maxLength={LIMITS.name}
                      disabled={locked}
                    />
                  </label>
                  <label>
                    <span className="sr-only">Votre entreprise</span>
                    <input
                      value={values.company}
                      onChange={(event) =>
                        setters.setCompany(limitText(event.target.value, LIMITS.company))
                      }
                      placeholder="Votre entreprise"
                      autoComplete="organization"
                      maxLength={LIMITS.company}
                      disabled={locked}
                    />
                  </label>
                  <label>
                    <span className="sr-only">Votre e-mail</span>
                    <input
                      required
                      type="email"
                      value={values.email}
                      onChange={(event) =>
                        setters.setEmail(limitText(event.target.value, LIMITS.email))
                      }
                      placeholder="Votre email"
                      autoComplete="email"
                      maxLength={LIMITS.email}
                      disabled={locked}
                    />
                  </label>
                  <label>
                    <span className="sr-only">Votre numéro</span>
                    <input
                      type="tel"
                      inputMode="tel"
                      value={values.phone}
                      onChange={(event) => setters.setPhone(limitPhone(event.target.value))}
                      placeholder="06 XX XX XX XX"
                      autoComplete="tel"
                      maxLength={LIMITS.phone}
                      pattern={PHONE_PATTERN}
                      title={`Numéro de téléphone (8 à ${LIMITS.phone} caractères)`}
                      disabled={locked}
                    />
                  </label>
                </div>

                <ServicePicker
                  value={values.service}
                  disabled={locked}
                  onChange={setters.setService}
                />

                <label className="contact-message-label">
                  <span className="sr-only">Votre message</span>
                  <textarea
                    required
                    rows={4}
                    value={values.message}
                    onChange={(event) =>
                      setters.setMessage(limitText(event.target.value, LIMITS.message))
                    }
                    placeholder="Votre message ..."
                    maxLength={LIMITS.message}
                    disabled={locked}
                  />
                  <span className="contact-char-count" aria-live="polite">
                    {values.message.length}/{LIMITS.message}
                  </span>
                </label>

                <label className="contact-honeypot" aria-hidden="true">
                  <span>Site web</span>
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website}
                    onChange={(event) => setters.setWebsite(event.target.value)}
                  />
                </label>

                <SlideSubmit complete={complete} sending={sending} onComplete={submit} />
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
            <span>{legalIdentity.siege.ville}, Maroc</span>
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
