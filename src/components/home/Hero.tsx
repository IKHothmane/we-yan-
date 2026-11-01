import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const clients = [
  { name: 'Omnidoc Santé', logo: '/images/clients/omnidoc-officiel.webp' },
  { name: 'Meal Box', logo: '/images/clients/meal-box.webp' },
  { name: 'éveil Montessori', logo: '/images/clients/eveil-montessori-officiel.webp' },
  { name: 'Himmat Alim', logo: '/images/clients/himmat-alim.webp', large: true },
  { name: 'Tawada lkihr', logo: '/images/clients/tawada.webp', large: true },
  { name: 'Livrinou', logo: '/images/clients/livrinou.webp', large: true },
  { name: 'GITEX GLOBAL', logo: '/images/clients/gitex-transparent.webp' },
  { name: 'Planet Sport', logo: '/images/clients/planet.webp' },
]

const PORTRAIT_WIDTH = 1146
const PORTRAIT_HEIGHT = 1372

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const circlePathId = `circle-${useId().replace(/:/g, '')}`

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.8, ease: 'easeOut' as const },
    },
  }

  return (
    <>
    <section className="hero-section" aria-label="Introduction">
      <div className="hero-content">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={reveal}>
          <p className="hero-eyebrow">Agence de communication au Maroc</p>

          <h1>
            Des idées
            <br />
            qui font
            <br />
            la <span className="gradient-text">différence</span>
            <span className="orange-dot">.</span>
          </h1>

          <p className="hero-description">
            WeYan Digital, l’agence qui transforme vos idées en stratégies créatives et
            performantes.
          </p>

          <Link to="/services" className="hero-button">
            Découvrir nos services
            <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="hero-visual">
          <div className="hero-blue-shape" aria-hidden="true" />
          <div className="hero-orange-shape" aria-hidden="true" />
          <div className="hero-peach-shape" aria-hidden="true" />

          <motion.img
            src="/images/hero-woman.webp"
            alt="Portrait artistique en noir et blanc"
            className="hero-portrait"
            width={PORTRAIT_WIDTH}
            height={PORTRAIT_HEIGHT}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 1.1 }}
          />

          <div className="hero-circle-text" aria-hidden="true">
            <svg viewBox="0 0 150 150">
              <defs>
                <path
                  id={circlePathId}
                  d="M75,75 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
                />
              </defs>
              <text fontSize="11" fontWeight="800">
                <textPath href={`#${circlePathId}`} textLength="318" lengthAdjust="spacing">
                  WE MAKE IT DIFFERENT ✳ WE MAKE IT DIFFERENT ✳
                </textPath>
              </text>
            </svg>
          </div>

          <p className="hero-signature">
            We
            <br />
            Yan
            <br />
            Digital
          </p>

          <div className="hero-scribble" aria-hidden="true" />
        </div>
      </div>
    </section>

    <div className="hero-clients" aria-label="Ils nous font confiance">
      <div className="clients-indicator" aria-hidden="true" />
      <div className="clients-marquee">
        <ul className="clients-track">
          {[...clients, ...clients].map((client, index) => (
            <li
              className={`client-logo${client.large ? ' client-logo--large' : ''}`}
              key={`${client.name}-${index}`}
            >
              <img
                src={client.logo}
                alt={index < clients.length ? client.name : ''}
                aria-hidden={index >= clients.length ? true : undefined}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}
