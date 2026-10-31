import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CONTACT_PATH } from '../../constants/navigation'
import '../../styles/portfolio-cta.css'

const projects = [
  {
    id: 'omnidoc',
    name: 'Omnidoc Santé',
    category: 'Stratégie digitale & campagnes',
    image: '/images/projects/omnidoc-sante.webp',
  },
  {
    id: 'mealbox',
    name: 'Meal Box',
    category: 'Création de contenu & Social Media',
    image: '/images/projects/meal-box.webp',
  },
  {
    id: 'eveil',
    name: 'Éveil Montessori',
    category: 'Branding & social media',
    image: '/images/projects/eveil-montessori.webp',
  },
  {
    id: 'himmat',
    name: 'Himmat Alim',
    category: 'Campagne d’influence',
    image: '/images/projects/himmat-alim.webp',
  },
]

const revealViewport = { once: true, amount: 0.28, margin: '0px 0px -40px 0px' } as const

export default function PortfolioCTA() {
  const reduceMotion = useReducedMotion()
  const rise = reduceMotion ? 0 : 36

  return (
    <section className="portfolio-section" id="realisations">
      <div className="portfolio-container">
        <motion.div
          className="portfolio-heading"
          initial={{ opacity: 0, y: rise }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: reduceMotion ? 0 : 0.75, ease: 'easeOut' }}
        >
          <div>
            <span className="portfolio-eyebrow">NOS RÉALISATIONS</span>
            <h2>
              Des projets qui parlent
              <br />
              <span>d’eux-mêmes.</span>
            </h2>
          </div>

          <Link className="portfolio-all-link" to="/projets">
            Voir tous les projets <span aria-hidden="true">→</span>
          </Link>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.article
              className="portfolio-card"
              key={project.name}
              initial={{ opacity: 0, y: rise }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -5 }}
              viewport={revealViewport}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: 'easeOut',
              }}
            >
              <Link to={`/projets#${project.id}`} className="portfolio-card-link" aria-label={project.name}>
                <div className="portfolio-image-wrap">
                  <img src={project.image} alt="" width={1400} height={933} loading="lazy" />
                </div>
                <div className="portfolio-card-info">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.category}</p>
                  </div>
                  <span className="portfolio-card-arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="portfolio-cta-banner"
          initial={{ opacity: 0, y: rise }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: 'easeOut' }}
        >
          <div className="portfolio-cta-copy">
            <span>WE MAKE IT DIFFERENT</span>
            <h2>
              Prêt à faire passer votre marque
              <br className="desktop-only" /> au niveau supérieur ?
            </h2>
          </div>

          <Link to={CONTACT_PATH} className="portfolio-cta-button">
            Discutons de votre projet <span aria-hidden="true">→</span>
          </Link>

          <svg className="portfolio-cta-scribble" viewBox="0 0 300 150" aria-hidden="true">
            <path d="M8 120 C40 28 103 4 130 18 C155 31 94 92 76 112 C52 138 112 115 151 65 C187 18 207 5 219 16 C238 34 183 103 209 108 C233 113 259 62 291 20" />
            <path d="M278 34 L291 20 L288 42" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
