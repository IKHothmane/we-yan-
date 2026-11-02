import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import SiteLayout from '../components/layout/SiteLayout'
import { CONTACT_PATH } from '../constants/navigation'
import '../styles/about-page.css'

const stats = [
  { value: '+ 20', label: 'marques accompagnées' },
  { value: '+ 200', label: 'projets réalisés' },
  { value: '+ 3 ans', label: 'd’expertise' },
  { value: '100%', label: 'passion & engagement' },
]

const revealViewport = { once: true, amount: 0.25, margin: '0px 0px -40px 0px' } as const

export default function AboutPage() {
  const reduceMotion = useReducedMotion()
  const rise = reduceMotion ? 0 : 40
  const duration = reduceMotion ? 0 : 0.75

  return (
    <SiteLayout>
      <div className="about-page">
        <section className="about-hero">
          <motion.div
            className="about-hero-copy"
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration, ease: 'easeOut' }}
          >
            <div className="about-eyebrow">
              <span>À PROPOS DE NOUS</span>
              <i />
            </div>
            <h1>
              Une agence
              <br />
              <span className="about-blue">créative</span> et engagée
              <br />
              pour des marques
              <br />
              qui <span className="about-orange">osent</span>
              <span className="about-blue">.</span>
            </h1>
            <p>
              Chez WeYan Digital, nous croyons au pouvoir des idées bien pensées, au contenu qui a
              du sens et aux stratégies qui transforment. Nous accompagnons les marques dans leur
              croissance digitale en combinant créativité, expertise et résultats.
            </p>
          </motion.div>

          <motion.div
            className="about-hero-visual"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.1,
              ease: 'easeOut',
            }}
          >
            <img
              src="/images/about/about-office.webp"
              alt="Espace de travail moderne WeYan Digital — We Make It Different"
            />
            <div className="about-side-words">
              STRATÉGIE
              <br />
              CRÉATIVITÉ
              <br />
              CONTENU
              <br />
              PUBLICITÉ
              <br />
              RÉSULTATS
              <i />
            </div>
          </motion.div>
        </section>

        <section className="about-stats" aria-label="WeYan Digital en chiffres">
          {stats.map((stat, index) => (
            <motion.div
              className="about-stat"
              key={stat.label}
              initial={{ opacity: 0, y: rise }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealViewport}
              transition={{
                duration,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: 'easeOut',
              }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </section>

        <section className="about-team">
          <motion.div
            className="about-team-copy"
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration, ease: 'easeOut' }}
          >
            <div className="about-eyebrow">
              <span>NOTRE ÉQUIPE</span>
              <i />
            </div>
            <h2>
              Une équipe
              <br />
              <span className="about-blue">passionnée et</span>
              <br />
              <span className="about-orange">complémentaire.</span>
            </h2>
            <p>
              Derrière chaque projet, il y a une équipe de profils différents, unis par la même
              vision : créer de la valeur pour nos clients à travers des idées créatives et des
              solutions digitales efficaces.
            </p>
            <Link className="about-outline-link" to={CONTACT_PATH}>
              Découvrir notre équipe <span>→</span>
            </Link>
          </motion.div>

          <motion.div
            className="about-team-gallery"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.1,
              ease: 'easeOut',
            }}
          >
            <img
              className="about-team-collage"
              src="/images/about/about-team-collage.webp"
              alt="Collage d’équipe WeYan Digital en coulisses créatives"
              loading="lazy"
            />
          </motion.div>
        </section>

        <section className="about-engagement">
          <motion.div
            className="about-engagement-copy"
            initial={{ opacity: 0, y: rise }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration, ease: 'easeOut' }}
          >
            <div className="about-eyebrow">
              <span>NOTRE ENGAGEMENT</span>
              <i />
            </div>
            <h2>
              Des marques plus fortes,
              <br />
              un digital <span className="about-blue">plus</span>{' '}
              <span className="about-orange">humain.</span>
            </h2>
            <p>
              Nous plaçons l’humain, la créativité et la performance au cœur de tout ce que nous
              faisons, pour construire des collaborations durables et impactantes.
            </p>
          </motion.div>

          <motion.div
            className="about-engagement-art"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{
              duration: reduceMotion ? 0 : 0.85,
              delay: reduceMotion ? 0 : 0.1,
              ease: 'easeOut',
            }}
          >
            <span className="engagement-orange" />
            <span className="engagement-blue" />
            <div className="engagement-message">
              <p>
                Et si on écrivait
                <br />
                la prochaine histoire ensemble ?
              </p>
              <Link to={CONTACT_PATH}>
                Nous contacter <span>→</span>
              </Link>
            </div>
            <div className="engagement-stamp">
              WE
              <br />
              MAKE
              <br />
              IT
              <br />
              DIFFERENT
            </div>
            <svg viewBox="0 0 140 180" aria-hidden="true">
              <path d="M8 10 C50 35 70 70 40 98 C15 120 75 140 120 175" />
            </svg>
          </motion.div>
        </section>
      </div>
    </SiteLayout>
  )
}
