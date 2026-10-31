import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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

function projectFromHash(hash: string) {
  const id = hash.replace('#', '')
  return projects.some((project) => project.id === id) ? id : 'omnidoc'
}

export default function RealisationsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeProject, setActiveProject] = useState(() => projectFromHash(location.hash))
  const selected = projects.find((project) => project.id === activeProject) ?? projects[0]

  useEffect(() => {
    setActiveProject(projectFromHash(location.hash))
  }, [location.hash])

  return (
    <SiteLayout>
      <div className="realisations-page">
        <section className="realisations-intro">
          <div className="realisations-kicker">
            <span>NOS RÉALISATIONS</span>
            <i />
          </div>
          <div className="realisations-intro-grid">
            <h1>
              Des marques qui
              <br />
              <span className="realisations-blue">grandissent</span>{' '}
              <span className="realisations-orange">avec nous.</span>
            </h1>
            <div className="realisations-intro-aside">
              <p>
                Stratégie, création de contenu, publicité, influence et plus encore. Découvrez
                quelques projets qui illustrent notre savoir-faire.
              </p>
              <a href="#tous-les-projets" className="realisations-all-link">
                <span className="all-link-arrow">→</span>
                <span>VOIR TOUS LES PROJETS</span>
              </a>
            </div>
          </div>
          <div className="project-tabs" id="tous-les-projets">
            {projects.map((project) => (
              <button
                type="button"
                key={project.id}
                className={`project-tab ${activeProject === project.id ? 'is-active' : ''}`}
                onClick={() => navigate(`${PROJECTS_PATH}#${project.id}`)}
                aria-pressed={activeProject === project.id}
              >
                <span className="project-tab-number">{project.number}</span>
                <span className="project-tab-brand">
                  <img src={project.logo} alt={project.name} />
                </span>
                <span className="project-tab-photo">
                  <img src={project.image} alt="" />
                </span>
                <span className="project-tab-arrow">→</span>
              </button>
            ))}
          </div>
        </section>

        {activeProject === 'omnidoc' ? (
          <section className="case-study case-study-omnidoc" id="etude-de-cas">
            <div className="case-brand-column">
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
                Stratégie digitale, création de contenu, campagnes Meta Ads et gestion de
                communauté pour renforcer la visibilité de la marque et promouvoir ses services à
                l’échelle nationale.
              </p>
              <a className="case-project-link" href="#etude-de-cas">
                Voir le projet complet <span>→</span>
              </a>
              <img className="case-map" src="/images/realisations/omnidoc/omnidoc-map.webp" alt="" />
              <div className="case-map-caption">
                <span>📍</span>
                <strong>+34</strong>
                <small>villes au Maroc</small>
              </div>
            </div>

            <div className="case-phone-column">
              <img
                src="/images/realisations/omnidoc/omnidoc-phone.webp"
                alt="Aperçu du compte Omnidoc Santé sur smartphone"
              />
            </div>

            <div className="case-content-column">
              {socialRows.map((row) => (
                <div className={`case-gallery-row ${row.className}`} key={row.label}>
                  <div className="case-gallery-heading">
                    <span>{row.label}</span>
                    <i>→</i>
                  </div>
                  <img src={row.image} alt={row.label} loading="lazy" />
                </div>
              ))}
            </div>

            <aside className="case-results">
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
            </aside>
          </section>
        ) : (
          <section className="selected-project-preview" id="apercu-projet">
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
          </section>
        )}
      </div>
    </SiteLayout>
  )
}
