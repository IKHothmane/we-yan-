import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const solutionsCardsBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA26cTrzHWhr1lAl33fd3Ki70zwSUi4OF6NjvcmIZ76Ga7-B-FjhQoLQtGZcbTdkiBFBnDeDM5_JRbgc_X94ePyxv64rKgjS7XfUkwJuIMzIENhqM1PpaK7RoethVHVm8di6c_IbAx7F-BB6NczMfoLzkMUeRiJ_K_cjdVe0s3vP6gWa8PXNUBIy5mhVNAtHC7--WgbqpaXlN1mq7vEhIVL9FZQN8rWrTrYlU634k6EKU8XO-Rm8y-Hu66NwWKW2iAryuhp5f9Z7lM'

const services = [
  {
    icon: 'travel_explore',
    title: 'Stratégie Marketing & Rebranding',
    description: 'Positionnement, relance de marque et plan d’action pour accélérer votre croissance.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/strategie-marketing-rebranding',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20marketing%20strategy%20and%20rebranding%20workshop%2C%20brand%20board%2C%20positioning%20notes%2C%20creative%20agency%20desk%2C%20orange%20and%20periwinkle%20palette%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'edit_document',
    title: 'Création de Contenu & Community Management',
    description: 'Photos, vidéos, reels et gestion quotidienne de vos réseaux sociaux.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/creation-contenu-community-management',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20content%20creation%20studio%2C%20camera%2C%20reels%20storyboard%2C%20softbox%20lights%2C%20stylish%20set%20design%2C%20orange%20and%20periwinkle%20accents%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'ads_click',
    title: 'Publicité Digitale (Meta Ads & Google Ads)',
    description: 'Campagnes sponsorisées pour générer trafic, leads et ventes qualifiées.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/publicite-digitale',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=meta%20ads%20and%20google%20ads%20dashboard%2C%20performance%20campaign%20charts%2C%20premium%20digital%20marketing%20workspace%2C%20orange%20and%20periwinkle%20palette%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'search',
    title: 'Référencement Naturel (SEO)',
    description: 'Optimisation SEO pour améliorer votre visibilité Google sur le long terme.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/seo',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=seo%20search%20ranking%20dashboard%2C%20organic%20traffic%20analytics%2C%20premium%20laptop%20workspace%2C%20orange%20and%20periwinkle%20brand%20palette%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'campaign',
    title: 'Marketing d’Influence',
    description: 'Collaborez avec les bons créateurs pour amplifier votre marque.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/marketing-influence',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=influencer%20marketing%20campaign%20planning%2C%20creator%20collaboration%20meeting%2C%20premium%20brand%20partnership%20scene%2C%20stylish%20studio%2C%20orange%20and%20periwinkle%20accents%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'palette',
    title: 'Média Publicité Offline',
    description: 'Affichage, print et supports publicitaires pour renforcer votre présence terrain.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/media-publicite-offline',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=offline%20advertising%20media%20mockups%2C%20billboard%2C%20flyer%2C%20poster%20and%20print%20campaign%2C%20premium%20branding%20presentation%2C%20orange%20and%20periwinkle%20palette%2C%20realistic&image_size=portrait_4_3',
  },
] as const

function ServiceCard({
  title,
  description,
  icon,
  tone,
  layoutClassName,
  to,
  image,
  delay,
}: (typeof services)[number] & { delay: number }) {
  const cardClasses = `group relative isolate flex overflow-hidden rounded-3xl border border-white/15 p-[clamp(1.25rem,3vw,2rem)] text-white shadow-[0_14px_40px_-16px_rgba(15,23,42,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 ${layoutClassName}`
  const toneGradient =
    tone === 'secondary'
      ? 'bg-[linear-gradient(135deg,rgba(252,151,0,0.32),rgba(15,23,42,0.82))]'
      : 'bg-[linear-gradient(135deg,rgba(100,131,240,0.34),rgba(15,23,42,0.82))]'

  return (
    <Link
      to={to}
      aria-label={`Découvrir ${title}`}
      className={cardClasses}
      data-reveal
      data-reveal-delay={String(delay)}
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full rounded-[inherit] object-cover opacity-95"
        src={solutionsCardsBackground}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className={`absolute inset-0 rounded-[inherit] ${toneGradient}`} />
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full rounded-[inherit] scale-105 transform-gpu object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
        src={image}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
      <div className="absolute inset-0 rounded-[inherit] bg-slate-950/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
      <div className="absolute inset-0 rounded-[inherit] bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />
      <div className="relative z-10 flex min-h-full flex-col justify-end">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-white backdrop-blur-sm">
          <Icon name={icon} className="text-[1.7rem] leading-none" />
        </div>
        <h3 className="mb-2 text-[clamp(1.3rem,3vw,1.5rem)] font-bold text-white transition-all duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          {title}
        </h3>
        <p className="text-white/85 text-[clamp(0.92rem,1.8vw,1rem)] leading-relaxed transition-all duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-white/90">
          Explorer
          <Icon name="arrow_forward" className="h-4 w-4" />
        </span>
      </div>
    </Link>
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
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
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
