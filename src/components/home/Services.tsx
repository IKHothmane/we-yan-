import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../styles/services.css'
import ServiceStrategyLamp from './ServiceStrategyLamp'

type Service = {
  number: string
  title: string
  description: string
  image: string
  id: string
  theme: 'blue' | 'cream'
  width: number
  height: number
}

const services: Service[] = [
  {
    number: '02',
    title: 'Création de contenu & Community Management',
    description:
      'Des contenus créatifs et engageants pour renforcer votre présence et créer une vraie communauté.',
    image: '/images/services/service-community-phone.webp',
    id: 'community',
    theme: 'cream',
    width: 1104,
    height: 1424,
  },
  {
    number: '03',
    title: 'Publicité digitale (Meta Ads & Google Ads)',
    description:
      'Des campagnes performantes pour atteindre les bonnes audiences et générer des résultats concrets.',
    image: '/images/services/service-ads-analytics.webp',
    id: 'publicite',
    theme: 'blue',
    width: 1205,
    height: 1306,
  },
  {
    number: '04',
    title: 'Référencement naturel (SEO)',
    description:
      'Optimisez votre visibilité durablement et positionnez votre marque sur les premiers résultats de recherche.',
    image: '/images/services/service-seo-search.webp',
    id: 'seo',
    theme: 'cream',
    width: 1312,
    height: 1199,
  },
  {
    number: '05',
    title: 'Marketing d’influence',
    description:
      'Nous collaborons avec les bons créateurs de contenu pour amplifier votre message et toucher de nouvelles audiences.',
    image: '/images/services/service-influence-collage.webp',
    id: 'influence',
    theme: 'blue',
    width: 1376,
    height: 1143,
  },
  {
    number: '06',
    title: 'Média publicité offline',
    description:
      'Des solutions d’affichage et de communication hors ligne pour maximiser votre visibilité sur le terrain.',
    image: '/images/services/service-offline-billboard.webp',
    id: 'offline',
    theme: 'cream',
    width: 1185,
    height: 1327,
  },
]

const revealViewport = { once: true, amount: 0.28, margin: '0px 0px -40px 0px' } as const

export default function Services() {
  const reduceMotion = useReducedMotion()
  const rise = reduceMotion ? 0 : 36

  return (
    <section className="services-section" id="services">
      <motion.div
        className="services-top-decoration"
        aria-hidden="true"
        initial={{ opacity: 0, y: reduceMotion ? 0 : -18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: 'easeOut' }}
      >
        <svg className="services-signature" viewBox="0 0 430 150" role="presentation">
          <path d="M8 112 C34 42 83 8 113 12 C145 16 90 88 66 104 C38 123 72 126 113 83 C148 46 176 2 191 10 C210 20 169 105 193 107 C215 109 248 48 280 18" />
          <path d="M267 31 L280 18 L277 39" />
        </svg>
        <svg className="services-stamp" viewBox="0 0 120 120" role="presentation">
          <defs>
            <path
              id="services-stamp-circle"
              d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
            />
          </defs>
          <text>
            <textPath href="#services-stamp-circle" startOffset="0%">
              WE MAKE IT DIFFERENT • WE MAKE IT DIFFERENT •
            </textPath>
          </text>
          <path className="stamp-arrow" d="M48 60 H72 M64 52 L72 60 L64 68" />
        </svg>
      </motion.div>

      <div className="services-grid">
        <motion.header
          className="services-intro"
          initial={{ opacity: 0, y: rise }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={revealViewport}
          transition={{ duration: reduceMotion ? 0 : 0.75, ease: 'easeOut' }}
        >
          <div className="section-kicker">
            <span>NOS SERVICES</span>
            <i />
          </div>
          <h2>
            Des solutions
            <br />
            360° pour
            <br />
            <span className="word-blue">votre</span>
            <br />
            <span className="word-gradient">croissance.</span>
          </h2>
          <p>
            Nous combinons stratégie, créativité et performance pour accompagner les marques à
            chaque étape de leur développement.
          </p>
        </motion.header>

        <ServiceStrategyLamp />

        {services.map((service) => {
          const isPublicite = service.id === 'publicite'
          // Safari/macOS : whileInView + overflow parent peut laisser la carte 03 à opacity 0
          const cardInitial = isPublicite
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: rise }
          const imageInitial = isPublicite
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: reduceMotion ? 0 : 22 }
          const cardViewport = isPublicite
            ? ({ once: true, amount: 0.01 } as const)
            : revealViewport

          return (
            <motion.article
              className={`service-card service-card-${service.theme} service-card-${service.id}`}
              id={service.id}
              key={service.number}
              initial={cardInitial}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={cardViewport}
              transition={{ duration: reduceMotion || isPublicite ? 0 : 0.7, ease: 'easeOut' }}
            >
              <motion.img
                className="service-card-image"
                src={service.image}
                alt=""
                width={service.width}
                height={service.height}
                loading={isPublicite ? 'eager' : 'lazy'}
                decoding="async"
                initial={imageInitial}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={cardViewport}
                transition={{
                  duration: reduceMotion || isPublicite ? 0 : 0.85,
                  delay: reduceMotion || isPublicite ? 0 : 0.12,
                  ease: 'easeOut',
                }}
              />
              <div className="service-card-content">
                <div className="service-number">
                  <span>{service.number}</span>
                  <i />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link
                  className="service-arrow"
                  to={`/services#${service.id}`}
                  aria-label={`Découvrir : ${service.title}`}
                >
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
