import { Link } from 'react-router-dom'
import SiteLayout from '../components/layout/SiteLayout'
import { CONTACT_PATH } from '../constants/navigation'
import '../styles/about-page.css'

const stats = [
  { value: '+ 20', label: 'marques accompagnées' },
  { value: '+ 200', label: 'projets réalisés' },
  { value: '+ 3 ans', label: 'd’expertise' },
  { value: '100%', label: 'passion & engagement' },
]

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="about-page">
        <section className="about-hero">
          <div className="about-hero-copy">
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
          </div>

          <div className="about-hero-visual">
            <span className="about-hero-orb" />
            <img
              src="/images/about/about-office.webp"
              alt="Espace de travail créatif de WeYan Digital"
            />
            <div className="about-hero-message">
              We
              <br />
              Make
              <br />
              It
              <br />
              Different
              <span>.</span>
            </div>
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
          </div>
        </section>

        <section className="about-stats" aria-label="WeYan Digital en chiffres">
          {stats.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="about-team">
          <div className="about-team-copy">
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
          </div>

          <div className="about-team-gallery">
            <span className="about-team-script">Team</span>
            <img
              className="about-team-main"
              src="/images/about/about-team.webp"
              alt="Équipe WeYan Digital en collaboration"
              loading="lazy"
            />
            <div className="about-team-side">
              <img
                src="/images/about/about-editing.webp"
                alt="Création et montage de contenus vidéo"
                loading="lazy"
              />
              <img
                src="/images/about/about-behind-scenes.webp"
                alt="Production de contenu en coulisses"
                loading="lazy"
              />
              <span className="about-behind-note">
                Behind
                <br />
                the scenes <b>↙</b>
              </span>
            </div>
            <div className="about-team-tags">
              <span>Créativité</span>
              <b>+</b>
              <span>Collaboration</span>
              <b>+</b>
              <span>Performance</span>
            </div>
          </div>
        </section>

        <section className="about-engagement">
          <div className="about-engagement-copy">
            <div className="about-eyebrow">
              <span>NOTRE ENGAGEMENT</span>
              <i />
            </div>
            <h2>
              Des marques plus fortes,
              <br />
              un digital <span className="about-blue">plus</span> <span className="about-orange">humain.</span>
            </h2>
            <p>
              Nous plaçons l’humain, la créativité et la performance au cœur de tout ce que nous
              faisons, pour construire des collaborations durables et impactantes.
            </p>
          </div>

          <div className="about-engagement-art">
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
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}
