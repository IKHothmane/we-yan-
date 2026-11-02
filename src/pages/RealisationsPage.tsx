import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import SiteLayout from '../components/layout/SiteLayout'
import { PROJECTS_PATH } from '../constants/navigation'
import '../styles/realisations-page.css'

const projects = [
  {
    id: 'omnidoc',
    number: '01',
    name: 'Omnidoc Santé',
    category: 'Santé · Application mobile',
    image: '/images/projects/omnidoc-sante.webp',
    logo: '/images/clients/omnidoc-officiel.webp',
  },
  {
    id: 'mealbox',
    number: '02',
    name: 'Meal Box',
    category: 'Food · Social Media',
    image: '/images/projects/meal-box.webp',
    logo: '/images/clients/meal-box.webp',
  },
  {
    id: 'eveil',
    number: '03',
    name: 'Éveil Montessori',
    category: 'Éducation · Branding',
    image: '/images/projects/eveil-montessori.webp',
    logo: '/images/clients/eveil-montessori-officiel.webp',
  },
  {
    id: 'himmat',
    number: '04',
    name: 'Himmat Alim',
    category: 'Formation · Influence',
    image: '/images/projects/himmat-alim.webp',
    logo: '/images/clients/himmat-alim.webp',
  },
]

const socialRows = [
  {
    label: 'Exemples de contenus Instagram',
    image: '/images/realisations/omnidoc/omnidoc-social-posts.webp',
    className: 'case-gallery-instagram',
  },
  {
    label: 'Exemples de Reels & vidéos',
    image: '/images/realisations/omnidoc/omnidoc-reels.webp',
    className: 'case-gallery-reels',
  },
  {
    label: 'Campagnes publicitaires',
    image: '/images/realisations/omnidoc/omnidoc-ads.webp',
    className: 'case-gallery-ads',
  },
]

const revealViewport = { once: true, amount: 0.25, margin: '0px 0px -40px 0px' } as const

function projectFromHash(hash: string) {
  const id = hash.replace('#', '')
  return projects.some((project) => project.id === id) ? id : 'omnidoc'
}

export default function RealisationsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const rise = reduceMotion ? 0 : 40
  const duration = reduceMotion ? 0 : 0.75
  const [activeProject, setActiveProject] = useState(() => projectFromHash(location.hash))
  const selected = projects.find((project) => project.id === activeProject) ?? projects[0]

  // Synchronise le projet affiché avec le hash de l'URL (ajustement d'état pendant le rendu).
  const [lastHash, setLastHash] = useState(location.hash)
  if (location.hash !== lastHash) {
    setLastHash(location.hash)
    setActiveProject(projectFromHash(location.hash))
  }

  function selectProject(projectId: string) {
    setActiveProject(projectId)
    navigate(`${PROJECTS_PATH}#${projectId}`, { replace: false })
    requestAnimationFrame(() => {
      const target =
        document.getElementById(projectId === 'omnidoc' ? 'etude-de-cas' : 'apercu-projet') ||
        document.getElementById('tous-les-projets')
      target?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    })
  }

  return (
    <SiteLayout>
      <div className="realisations-page">
        <section className="realisations-intro">
          <motion.div
            className="realisations-kicker"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration, ease: 'easeOut' }}
          >
            <span>NOS RÉALISATIONS</span>
            <i />
          </motion.div>
          <div className="realisations-intro-grid">
            <motion.h1
              initial={{ opacity: 0, y: rise }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration, ease: 'easeOut' }}
            >
              Des marques qui
              <br />
              <span className="realisations-blue">grandissent</span>{' '}
              <span className="realisations-orange">avec nous.</span>
            </motion.h1>
            <motion.div
              className="realisations-intro-aside"
              initial={{ opacity: 0, y: rise }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration, delay: reduceMotion ? 0 : 0.1, ease: 'easeOut' }}
            >
              <p>
                Stratégie, création de contenu, publicité, influence et plus encore. Découvrez
                quelques projets qui illustrent notre savoir-faire.
              </p>
              <a href="#tous-les-projets" className="realisations-all-link">
                <span className="all-link-arrow">→</span>
                <span>VOIR TOUS LES PROJETS</span>
              </a>
            </motion.div>
          </div>
          <div className="project-tabs" id="tous-les-projets" role="tablist" aria-label="Projets">
            {projects.map((project, index) => {
              const isActive = activeProject === project.id
              return (
                <motion.button
                  type="button"
                  key={project.id}
                  role="tab"
                  className={`project-tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => selectProject(project.id)}
                  aria-pressed={isActive}
                  aria-selected={isActive}
                  aria-label={`Voir le projet ${project.name}`}
                  initial={{ opacity: 0, y: rise }}
                  whileInView={{ opacity: 1, y: isActive && !reduceMotion ? -12 : 0 }}
                  animate={{
                    y: reduceMotion ? 0 : isActive ? -12 : 0,
                    scale: 1,
                  }}
                  whileHover={reduceMotion ? undefined : { y: isActive ? -16 : -8, scale: 1.015 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                  viewport={revealViewport}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: 'easeOut',
                  }}
                >
                  <span className="project-tab-number">{project.number}</span>
                  <span className="project-tab-copy">
                    <span className="project-tab-brand">
                      <img src={project.logo} alt="" />
                    </span>
                    <span className="project-tab-name">{project.name}</span>
                    <span className="project-tab-category">{project.category}</span>
                  </span>
                  <span className="project-tab-photo" aria-hidden="true">
                    <img src={project.image} alt="" />
                  </span>
                  <span className="project-tab-arrow" aria-hidden="true">
                    →
                  </span>
                </motion.button>
              )
            })}
          </div>
        </section>

        {activeProject === 'omnidoc' ? (
          <section className="case-study case-study-omnidoc" id="etude-de-cas">
            <motion.div
              className="case-brand-column"
              initial={{ opacity: 0, y: rise }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration, ease: 'easeOut' }}
            >
              <span className="case-index">01</span>
              <img
                className="case-main-logo"
                src="/images/clients/omnidoc-officiel.webp"
                alt="Omnidoc Santé"
              />
              <div className="case-tags">
                <span>Santé</span>
                <span>Application mobile</span>
                <span>B2C</span>
              </div>
              <p className="case-description">
                Stratégie digitale, création de contenu, campagnes Meta Ads et gestion de communauté
                pour renforcer la visibilité de la marque et promouvoir ses services à l’échelle
                nationale.
              </p>
              <a className="case-project-link" href="#etude-de-cas">
                Voir le projet complet <span>→</span>
              </a>
              <img
                className="case-map"
                src="/images/realisations/omnidoc/omnidoc-map.webp"
                alt=""
              />
              <div className="case-map-caption">
                <span>📍</span>
                <strong>+34</strong>
                <small>villes au Maroc</small>
              </div>
            </motion.div>

            <motion.div
              className="case-phone-column"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{
                duration: reduceMotion ? 0 : 0.85,
                delay: reduceMotion ? 0 : 0.08,
                ease: 'easeOut',
              }}
            >
              <img
                src="/images/realisations/omnidoc/omnidoc-phone.webp"
                alt="Aperçu du compte Omnidoc Santé sur smartphone"
              />
            </motion.div>

            <div className="case-content-column">
              {socialRows.map((row, index) => (
                <motion.div
                  className={`case-gallery-row ${row.className}`}
                  key={row.label}
                  initial={{ opacity: 0, y: rise }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{
                    duration,
                    delay: reduceMotion ? 0 : index * 0.08,
                    ease: 'easeOut',
                  }}
                >
                  <div className="case-gallery-heading">
                    <span>{row.label}</span>
                    <i>→</i>
                  </div>
                  <img src={row.image} alt={row.label} loading="lazy" />
                </motion.div>
              ))}
            </div>

            <motion.aside
              className="case-results"
              initial={{ opacity: 0, y: rise }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{ duration, delay: reduceMotion ? 0 : 0.1, ease: 'easeOut' }}
            >
              <div className="results-icon">▥</div>
              <h2>
                Résultats
                <br />
                en 6 mois
              </h2>
              <div className="result-item">
                <strong>+35%</strong>
                <span>de visibilité</span>
              </div>
              <div className="result-item">
                <strong>+120K</strong>
                <span>vues sur nos vidéos</span>
              </div>
              <div className="result-item">
                <strong>+2.5K</strong>
                <span>nouveaux abonnés</span>
              </div>
              <div className="result-item">
                <strong>+40%</strong>
                <span>des téléchargements de l’application</span>
              </div>
            </motion.aside>
          </section>
        ) : (
          <motion.section
            className="selected-project-preview"
            id="apercu-projet"
            key={selected.id}
            initial={{ opacity: 0, y: rise }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease: 'easeOut' }}
          >
            <div className="selected-project-preview__brand">
              <span className="case-index">{selected.number} / 04</span>
              <img src={selected.logo} alt={selected.name} />
              <h2>{selected.name}</h2>
              <p>{selected.category}</p>
              <a className="case-project-link" href="#apercu-projet">
                Voir le projet complet <span>→</span>
              </a>
            </div>
            <img
              className="selected-project-preview__image"
              src={selected.image}
              alt={`Projet ${selected.name}`}
            />
          </motion.section>
        )}
      </div>
    </SiteLayout>
  )
}
