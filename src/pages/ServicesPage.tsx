import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const services = [
  {
    title: 'Stratégie Marketing & Rebranding',
    description: 'Positionnement, relance de marque et plan d’action pour accélérer votre croissance.',
    icon: 'trending_up',
    accent: 'primary',
    to: '/services/strategie-marketing-rebranding',
  },
  {
    title: 'Création de Contenu & Community Management',
    description: 'Photos, vidéos, reels et gestion quotidienne de vos réseaux sociaux.',
    icon: 'movie_filter',
    accent: 'secondary',
    to: '/services/creation-contenu-community-management',
  },
  {
    title: 'Publicité Digitale (Meta & Google Ads)',
    description: 'Campagnes sponsorisées pour générer trafic, leads et ventes qualifiées.',
    icon: 'ads_click',
    accent: 'primary',
    to: '/services/publicite-digitale',
  },
  {
    title: 'Référencement Naturel (SEO)',
    description: 'Optimisation SEO pour améliorer votre visibilité Google sur le long terme.',
    icon: 'search',
    accent: 'secondary',
    to: '/services/seo',
  },
  {
    title: 'Marketing d’Influence',
    description: 'Collaborez avec les bons créateurs pour amplifier votre marque.',
    icon: 'groups_3',
    accent: 'primary',
    to: '/services/marketing-influence',
  },
  {
    title: 'Média Publicité Offline',
    description: 'Affichage, print et supports publicitaires pour renforcer votre présence terrain.',
    icon: 'palette',
    accent: 'secondary',
    to: '/services/media-publicite-offline',
  },
] as const

function ServiceCard({
  title,
  description,
  icon,
  accent,
  to,
  delay,
}: (typeof services)[number] & { delay: number }) {
  const accentGlow = accent === 'secondary' ? 'bg-secondary/8' : 'bg-primary/8'
  const accentColor = accent === 'secondary' ? 'text-secondary' : 'text-primary'

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_-26px_rgba(66,97,125,0.28)]"
      data-reveal
      data-reveal-delay={String(delay)}
    >
      <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-bl-[999px] ${accentGlow} transition-transform duration-700 group-hover:scale-150`} />
      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 ${accentColor}`}>
        <Icon name={icon} className="h-7 w-7" />
      </div>
      <h3 className="mb-4 text-[1.55rem] font-black uppercase leading-tight tracking-[-0.04em] text-slate-900">
        {title}
      </h3>
      <p className="mb-8 min-h-[72px] text-[1rem] leading-7 text-slate-600">{description}</p>
      <Link
        className="inline-flex items-center gap-2 text-[0.78rem] font-extrabold uppercase tracking-[0.22em] text-secondary transition-all duration-300 group-hover:gap-4"
        to={to}
      >
        Explorer
        <Icon name="arrow_forward" className="h-4 w-4" />
      </Link>
    </article>
  )
}

export default function ServicesPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen overflow-hidden bg-[#f9f9f9] text-slate-900">
      <PageSeo {...pageSeo.services} />
      <Navbar />

      <main className="relative overflow-hidden pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-[6%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(167,199,231,0.42)_0%,rgba(167,199,231,0.1)_36%,transparent_70%)]" />
          <div className="absolute bottom-[8%] right-[6%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(254,94,30,0.16)_0%,rgba(254,94,30,0.08)_28%,transparent_68%)]" />
        </div>

        <section className="w-full flex flex-col items-center px-6 py-20 text-center sm:px-8 lg:py-32">
          <h1
            className="max-w-4xl break-words text-[clamp(2.4rem,8vw,6.4rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-slate-900 sm:tracking-[-0.05em]"
            data-reveal
          >
            Nos Expertises <span className="text-primary italic">Digitales</span>
          </h1>
          <p
            className="mt-8 max-w-2xl text-[clamp(1rem,2vw,1.18rem)] leading-8 text-slate-600"
            data-reveal
            data-reveal-delay="100"
          >
            Des solutions sur mesure pour propulser votre marque au niveau supérieur grâce à une
            approche centrée sur l&apos;innovation et la performance.
          </p>
        </section>

        <section className="w-full px-6 pb-24 sm:px-8 lg:pb-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 90} />
            ))}
          </div>
        </section>

        <section className="w-full mb-24 px-6 sm:px-8 lg:mb-32" data-reveal data-reveal-delay="450">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#1a1c1c] px-8 py-14 text-center text-white sm:px-12 md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,rgba(167,199,231,0.55),transparent_34%),radial-gradient(circle_at_80%_75%,rgba(254,94,30,0.45),transparent_28%)]"
            />
            <div className="relative z-10">
              <h2 className="mx-auto mb-8 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.05em]">
                Prêt à transformer votre présence en ligne ?
              </h2>
              <Link
                className="inline-flex rounded-full bg-[#fe5e1e] px-8 py-4 text-[0.95rem] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_20px_40px_-20px_rgba(254,94,30,0.8)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#ab3600]"
                to="/contact"
              >
                Discutons de votre projet
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter revealDelay="500" />
    </div>
  )
}
