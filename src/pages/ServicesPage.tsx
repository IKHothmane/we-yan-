import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import SiteLayout from '../components/layout/SiteLayout'
import { CONTACT_PATH } from '../constants/navigation'
import '../styles/services-page.css'

type ServiceItem = {
  number: string
  id: string
  title: ReactNode
  description: string
  bullets: string[]
  image: string
  imageAlt: string
  imageSide: 'left' | 'right'
  note?: string
}

const serviceItems: ServiceItem[] = [
  {
    number: '01',
    id: 'strategie',
    title: (
      <>
        Stratégie marketing
        <br />
        <span>& rebranding</span>
      </>
    ),
    description:
      'Nous construisons des stratégies sur mesure pour positionner votre marque, renforcer son identité et accélérer sa croissance.',
    bullets: ['Positionnement de marque', 'Audit & étude de marché', 'Stratégie de contenu', 'Rebranding'],
    image: '/images/services/service-strategy-board.webp',
    imageAlt: 'Planche de stratégie de marque WeYan Digital',
    imageSide: 'right',
    note: 'Stratégie · Identité · Croissance',
  },
  {
    number: '02',
    id: 'community',
    title: (
      <>
        Création de contenu
        <br />
        <span>& Community Management</span>
      </>
    ),
    description:
      'Des contenus créatifs et engageants pour développer votre communauté et renforcer votre présence en ligne.',
    bullets: ['Plan de contenu mensuel', 'Création photo & vidéo', 'Gestion des réseaux sociaux', 'Interaction & modération'],
    image: '/images/services/service-content-reels.webp',
    imageAlt: 'Création de contenu et montage vidéo WeYan Digital',
    imageSide: 'left',
  },
  {
    number: '03',
    id: 'publicite',
    title: (
      <>
        Publicité digitale
        <br />
        <span>(Meta Ads & Google Ads)</span>
      </>
    ),
    description:
      'Des campagnes publicitaires performantes pour attirer les bonnes audiences et générer des résultats concrets.',
    bullets: [
      'Stratégie média',
      'Création des visuels et vidéos Ads',
      'Gestion et optimisation des campagnes',
      'Reporting et analyse des résultats',
    ],
    image: '/images/services/service-ads-campaign.webp',
    imageAlt: 'Campagne publicitaire digitale Meta Ads et Google Ads',
    imageSide: 'right',
    note: 'Plus de visibilité · Plus de résultats',
  },
  {
    number: '04',
    id: 'seo',
    title: (
      <>
        Référencement naturel
        <br />
        <span>(SEO)</span>
      </>
    ),
    description: 'Nous optimisons votre présence sur Google pour générer un trafic qualifié et durable.',
    bullets: ['Audit SEO complet', 'Optimisation technique', 'Rédaction de contenu optimisé', 'Suivi des positions et performances'],
    image: '/images/services/service-seo-google.webp',
    imageAlt: 'Référencement SEO et visibilité Google',
    imageSide: 'left',
    note: 'Visibilité durable',
  },
  {
    number: '05',
    id: 'influence',
    title: (
      <>
        Marketing d’<span>influence</span>
      </>
    ),
    description:
      'Nous collaborons avec les bons créateurs de contenu pour amplifier votre message et toucher de nouvelles audiences.',
    bullets: ['Sélection des influenceurs', 'Gestion des collaborations', 'Briefs créatifs & coordination', 'Suivi des performances'],
    image: '/images/services/service-workspace.webp',
    imageAlt: 'Espace de travail créatif et marketing d’influence',
    imageSide: 'right',
    note: 'Des histoires qui engagent',
  },
  {
    number: '06',
    id: 'offline',
    title: (
      <>
        Média & publicité <span>offline</span>
      </>
    ),
    description:
      'Des solutions d’affichage et de communication hors ligne pour maximiser votre visibilité sur le terrain.',
    bullets: [
      'Affichage urbain (panneaux, abribus…)',
      'Impression (flyers, brochures, kakemonos…)',
      'Événementiel et shootings',
      'Stratégie média globale (online + offline)',
    ],
    image: '/images/services/service-branding-city.webp',
    imageAlt: 'Identité visuelle WeYan Digital en ville',
    imageSide: 'left',
  },
]

export default function ServicesPage() {
  return (
    <SiteLayout>
      <div className="services-page">
        <section className="services-page-hero">
          <div className="services-page-hero-copy">
            <div className="services-page-eyebrow">
              <span>NOS SERVICES</span>
              <i />
            </div>
            <h1>
              Des solutions
              <br />
              360° pour <span className="service-blue">votre</span>
              <br />
              <span className="service-orange">croissance.</span>
            </h1>
            <p>
              Nous accompagnons les marques à chaque étape de leur développement avec des solutions
              sur mesure, créatives et performantes.
            </p>
            <a href="#strategie" className="services-discover-link">
              Découvrir nos expertises <span>↓</span>
            </a>
          </div>

          <div className="services-page-hero-visual">
            <span className="hero-orb hero-orb-orange" />
            <img
              src="/images/services/services-hero-casablanca.webp"
              alt="Bureau WeYan Digital avec vue sur la mosquée Hassan II à Casablanca"
              width={1672}
              height={941}
            />
            <svg className="services-page-hero-scribble" viewBox="0 0 250 150" aria-hidden="true">
              <path d="M8 122 C38 42 83 6 112 14 C145 24 72 92 60 116 C47 142 115 90 145 50 C174 10 190 1 203 15 C219 33 182 86 209 92 C225 96 237 70 246 48" />
            </svg>
            <div className="services-page-stamp">
              WE MAKE
              <br />
              <b>IT DIFFERENT</b>
              <span>→</span>
            </div>
            <div className="services-side-words">
              STRATÉGIE
              <br />
              CRÉATIVITÉ
              <br />
              CONTENU
              <br />
              PUBLICITÉ
              <br />
              RÉSULTATS
            </div>
          </div>
        </section>

        <section className="services-list" aria-label="Nos expertises">
          {serviceItems.map((service) => (
            <article
              className={`service-detail-row service-detail-${service.imageSide}`}
              id={service.id}
              key={service.number}
            >
              <div className="service-detail-copy">
                <div className="service-detail-number">
                  <span>{service.number}</span>
                  <i />
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span>✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`${CONTACT_PATH}?service=${service.id}`}
                  className="service-detail-arrow"
                  aria-label={`Parler de : ${service.imageAlt}`}
                >
                  →
                </Link>
              </div>

              <div className="service-detail-visual">
                {service.note ? (
                  <span className="service-detail-note">
                    {service.note}
                    <b>↙</b>
                  </span>
                ) : null}
                <span className="service-detail-orb" />
                <img src={service.image} alt={service.imageAlt} loading="lazy" />
              </div>
            </article>
          ))}
        </section>

        <section className="services-final-cta">
          <div className="services-final-copy">
            <span>UN PROJET EN TÊTE ?</span>
            <h2>
              Parlons de vos idées
              <br />
              et construisons ensemble
              <br />
              <em>votre prochaine histoire.</em>
            </h2>
          </div>
          <div className="services-final-action">
            <p>
              Que vous souhaitiez lancer un nouveau projet, développer votre visibilité ou simplement
              échanger des idées, notre équipe est là pour vous accompagner.
            </p>
            <Link to={CONTACT_PATH}>
              Nous contacter <span>→</span>
            </Link>
          </div>
          <div className="services-final-shapes" aria-hidden="true">
            <i />
            <b />
            <span />
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
