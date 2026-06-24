import { useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import SiteFooter from '../SiteFooter'
import useScrollReveal from '../../hooks/useScrollReveal'

const svgToDataUri = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

const avatarImage = (initials: string, bg: string, fg: string) =>
  svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="60" fill="${bg}"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="${fg}">${initials}</text>
</svg>
`)

const homeImages = {
  branding: '/images/home/branding.webp?v=20260619',
  studio: '/images/home/studio.webp?v=20260619',
  dashboard: '/images/home/dashboard.webp?v=20260619',
}

const solutionsCardsBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA26cTrzHWhr1lAl33fd3Ki70zwSUi4OF6NjvcmIZ76Ga7-B-FjhQoLQtGZcbTdkiBFBnDeDM5_JRbgc_X94ePyxv64rKgjS7XfUkwJuIMzIENhqM1PpaK7RoethVHVm8di6c_IbAx7F-BB6NczMfoLzkMUeRiJ_K_cjdVe0s3vP6gWa8PXNUBIy5mhVNAtHC7--WgbqpaXlN1mq7vEhIVL9FZQN8rWrTrYlU634k6EKU8XO-Rm8y-Hu66NwWKW2iAryuhp5f9Z7lM'

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: '/icons/instagram.svg' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: '/icons/linkedin-in.svg' },
  { href: 'https://facebook.com', label: 'Facebook', icon: '/icons/facebook-f.svg' },
] as const

const iconMaskStyle = (url: string) =>
  ({
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    backgroundColor: 'currentColor',
  }) as const

const deferredSectionStyle: CSSProperties = {
  contentVisibility: 'auto',
  containIntrinsicSize: '900px',
}

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

const projects = [
  {
    title: 'E-COMMERCE - LUXE',
    client: 'Riget',
    image: homeImages.studio,
    bg: 'bg-gradient-to-b from-white to-slate-200',
    height: 'h-[320px] md:h-[360px]',
    offset: '',
  },
  {
    title: 'E-COMMERCE - LUXE',
    client: 'C Opticiens',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20ecommerce%20mobile%20mockup%20for%20luxury%20eyewear%20brand%2C%20orange%20background%2C%20realistic%20smartphone%20product%20ui%2C%20clean%20editorial%20lighting&image_size=portrait_4_3',
    bg: 'bg-primary',
    height: 'h-[380px] md:h-[420px]',
    offset: 'md:mt-8',
  },
  {
    title: 'BRANDING - LIFESTYLE',
    client: 'Rigor',
    image: homeImages.branding,
    bg: 'bg-[#C8956E]',
    height: 'h-[320px] md:h-[360px]',
    offset: '',
  },
  {
    title: 'BRANDING - LIFESTYLE',
    client: 'Biget',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=dark%20premium%20branding%20mobile%20mockup%2C%20luxury%20product%20presentation%2C%20black%20studio%20background%2C%20realistic%20editorial%20lighting&image_size=portrait_4_3',
    bg: 'bg-[#0F172A]',
    height: 'h-[280px] md:h-[300px]',
    offset: 'md:-mt-6',
  },
  {
    title: 'BRANDING - LIFESTYLE',
    client: 'Digue',
    image: homeImages.dashboard,
    bg: 'bg-gradient-to-b from-[#4A8B9F] to-[#2C5F6F]',
    height: 'h-[280px] md:h-[300px]',
    offset: 'md:mt-2',
  },
  {
    title: 'BRANDING - LIFESTYLE',
    client: 'Bigor',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=luxury%20branding%20print%20mockup%2C%20editorial%20stationery%2C%20brochure%20and%20business%20cards%2C%20warm%20beige%20background%2C%20realistic%20top%20view&image_size=portrait_4_3',
    bg: 'bg-[#E8DCC8]',
    height: 'h-[320px] md:h-[360px]',
    offset: 'md:-mt-4',
  },
] as const

export default function HomeDeferredSections() {
  useScrollReveal()
  const [selectedHomeServices, setSelectedHomeServices] = useState<string[]>([])
  const [homeCarouselIndex, setHomeCarouselIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHomeCarouselIndex((current) => (current + 1) % services.length)
    }, 1400)
    return () => window.clearInterval(intervalId)
  }, [])

  const toggleHomeService = (serviceTitle: string) => {
    setSelectedHomeServices((current) =>
      current.includes(serviceTitle)
        ? current.filter((item) => item !== serviceTitle)
        : [...current, serviceTitle]
    )
  }

  return (
    <>
      <style>{`
        .home-service-float {
          animation-name: homeServiceFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .home-service-float:hover {
          animation-play-state: paused;
        }

        @keyframes homeServiceFloat {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-service-float {
            animation: none;
          }
        }
      `}</style>
      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-white" id="services">
        <div className="w-full px-[clamp(1rem,4vw,2rem)]">
          <div className="text-center mb-[clamp(2.5rem,6vw,4rem)]" data-reveal>
            <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] text-slate-900 mb-4">
              Nos Solutions <span className="text-primary">Digitales</span>
            </h2>
            <p className="text-slate-600 text-[clamp(1rem,2.3vw,1.125rem)] max-w-2xl mx-auto">
              Nous avons ce qu'il vous faut, de la création de logo à la campagne publicitaire.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-reveal data-reveal-delay="100">
            {services.map((service, index) => {
              const cardClasses = `group relative isolate flex overflow-hidden rounded-3xl border border-white/15 p-[clamp(1.25rem,3vw,2rem)] text-white shadow-[0_14px_40px_-16px_rgba(15,23,42,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 ${service.layoutClassName}`
              const toneGradient =
                service.tone === 'secondary'
                  ? 'bg-[linear-gradient(135deg,rgba(252,151,0,0.32),rgba(15,23,42,0.82))]'
                  : 'bg-[linear-gradient(135deg,rgba(100,131,240,0.34),rgba(15,23,42,0.82))]'

              const cardContent = (
                <>
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
                    src={service.image}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="absolute inset-0 rounded-[inherit] bg-slate-950/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-0 rounded-[inherit] bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />
                  <div className="relative z-10 flex min-h-full flex-col justify-end">
                    <h3 className="mb-2 text-[clamp(1.3rem,3vw,1.5rem)] font-bold text-white transition-all duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                      {service.title}
                    </h3>
                    <p className="text-white/85 text-[clamp(0.92rem,1.8vw,1rem)] leading-relaxed transition-all duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-white/90">
                      Explorer
                      <Icon name="arrow_forward" className="h-4 w-4" />
                    </span>
                  </div>
                </>
              )

              return (
                <div
                  key={service.title}
                  className="home-service-float"
                  data-reveal
                  data-reveal-delay={String(100 + index * 80)}
                  style={{
                    animationDuration: `${5.2 + (index % 3) * 0.6}s`,
                    animationDelay: `${index * 0.35}s`,
                  }}
                >
                  <Link to={service.to} className={cardClasses} aria-label={`Découvrir ${service.title}`}>
                    {cardContent}
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-slate-50" id="work" style={deferredSectionStyle}>
        <div className="w-full px-[clamp(1rem,4vw,2rem)]">
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[clamp(2.5rem,6vw,4rem)] gap-4"
            data-reveal
          >
            <div>
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 tracking-tight">
                Impact <span className="text-primary">Visuel</span>
              </h2>
              <p className="text-slate-600 mt-2 text-[clamp(0.95rem,2.2vw,1.125rem)]">
                Dernières campagnes et créations pour nos partenaires
              </p>
            </div>
            <Link
              to="/projets"
              className="text-primary font-bold text-sm border-b-2 border-primary pb-1 hover:text-primary/80 hover:border-primary/80 transition-colors uppercase tracking-[0.2em]"
            >
              Tout voir
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6" data-reveal data-reveal-delay="100">
            {projects.map((project, index) => (
              <div
                key={`${project.title}-${project.client}-${index}`}
                className={`group relative overflow-hidden rounded-[2rem] ${project.height} ${project.offset ?? ''} ${project.bg} p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}
              >
                <img
                  alt={`${project.title} ${project.client}`}
                  className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  src={project.image}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <p className="text-white font-bold text-sm uppercase tracking-wider mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {project.title}
                  </p>
                  <p className="text-white/90 text-xs font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {project.client}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-primary text-white" id="about" style={deferredSectionStyle}>
        <div className="w-full px-[clamp(1rem,4vw,2rem)] grid md:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center">
          <div data-reveal>
            <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] mb-[clamp(1.5rem,4vw,2rem)] leading-tight">
              Pourquoi nous faire <span className="text-primary">confiance</span> ?
            </h2>
            <p className="text-white/85 text-[clamp(1rem,2.3vw,1.125rem)] mb-[clamp(1.5rem,4vw,2.5rem)] leading-relaxed">
              Nous ne sommes pas juste une agence, nous sommes votre partenaire de croissance. Notre approche combine créativité sans limite et rigueur analytique pour assurer que chaque dirham investi génère de la valeur.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Icon name="circle" className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[clamp(1.2rem,3vw,1.5rem)] font-bold mb-1">Stratégie Personnalisée</h3>
                  <p className="text-white/75 text-sm">
                    Pas de solutions "taille unique". Chaque marque est unique et mérite une voix propre.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Icon name="circle" className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[clamp(1.2rem,3vw,1.5rem)] font-bold mb-1">Focus Résultats</h3>
                  <p className="text-white/75 text-sm">
                    Nous mesurons tout. Si ça ne convertit pas, on optimise jusqu'à l'excellence.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6" data-reveal data-reveal-delay="100">
            <div className="p-6 md:p-8 bg-white rounded-3xl text-center shadow-xl">
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-2">+50</p>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Projets</p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-3xl text-center shadow-xl mt-4 md:mt-8">
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-2">+20</p>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Marques</p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-3xl text-center shadow-xl">
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-2">+1M</p>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Impressions</p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-3xl text-center shadow-xl mt-4 md:mt-8">
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-2">100%</p>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Passion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-white" style={deferredSectionStyle}>
        <div className="w-full px-[clamp(1rem,4vw,2rem)]">
          <h2 className="text-center text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-[clamp(2.5rem,6vw,4rem)]" data-reveal>
            Ce que disent nos <span className="text-primary">partenaires</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal data-reveal-delay="100">
            {[
              {
                quote: "Leur équipe a su capturer l'essence de notre marque dès le premier jour. Résultats incroyables !",
                author: 'Sara Benani',
                role: 'Lux Moroccan Decor',
                avatar: avatarImage('SB', '#6483F0', '#FFFFFF'),
              },
              {
                quote: 'Collaboration parfaite. Nos ventes ont augmenté de 180% en 6 mois grâce à leur stratégie social media.',
                author: 'Mehdi Alaoui',
                role: 'CEO, TechNova Morocco',
                avatar: avatarImage('MA', '#6483F0', '#FFFFFF'),
              },
              {
                quote: 'Leur branding est exceptionnel. On nous reconnaît immédiatement dans la rue. Retour client phénoménal.',
                author: 'Ines Tazi',
                role: 'Marketing, GreenFlow',
                avatar: avatarImage('IT', '#0F172A', '#FFFFFF'),
              },
            ].map((t) => (
              <div
                key={t.author}
                className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-slate-200 transition-all"
              >
                <p className="text-slate-600 mb-8 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img alt={t.author} className="w-full h-full object-cover" src={t.avatar} loading="lazy" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-[clamp(4.5rem,9vw,8rem)] text-brand-charcoal" style={deferredSectionStyle}>
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-[460px] w-[460px] rounded-full bg-brand-blue/10 blur-3xl opacity-70" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-secondary/10 blur-3xl opacity-70" />

        <div className="relative z-10 w-full px-[clamp(1rem,4vw,2rem)]">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-14">
              <div className="max-w-xl" data-reveal>
                <h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">COORDONNÉES</h3>
                <p className="mt-6 text-sm leading-relaxed text-brand-charcoal/70 md:text-base">
                  Prêt à transformer votre vision en réalité ? Contactez-nous pour discuter de votre prochain projet.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-5 rounded-3xl border border-brand-blue/10 bg-surface-container px-6 py-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-lg shadow-secondary/20">
                      <Icon name="mail" className="text-[22px]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55">Email</p>
                      <p className="mt-1 text-lg font-semibold text-brand-charcoal">contact@weyan.digital</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 rounded-3xl border border-brand-blue/10 bg-surface-container px-6 py-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/20">
                      <Icon name="phone" className="text-[22px]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55">Téléphone</p>
                      <p className="mt-1 text-lg font-semibold text-brand-charcoal">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  {socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.label}
                      href={socialLink.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={socialLink.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/10 bg-surface-container text-brand-charcoal/70 shadow-sm transition-all hover:bg-white hover:text-brand-charcoal"
                    >
                      <span aria-hidden="true" className="h-4 w-4" style={iconMaskStyle(socialLink.icon)} />
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="rounded-[2.25rem] border border-brand-blue/10 bg-surface-container p-8 shadow-2xl shadow-brand-blue/10 md:p-10"
                data-reveal
                data-reveal-delay="100"
              >
                <h2 className="text-3xl font-extrabold tracking-tight text-brand-charcoal md:text-4xl">PARLONS DE VOTRE PROJET</h2>

                <form className="mt-10 space-y-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55" htmlFor="home-contact-name">
                        Nom
                      </label>
                      <input
                        id="home-contact-name"
                        name="name"
                        type="text"
                        className="w-full rounded-2xl border border-brand-blue/10 bg-white px-5 py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-secondary focus:outline-none"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55" htmlFor="home-contact-email">
                        Email
                      </label>
                      <input
                        id="home-contact-email"
                        name="email"
                        type="email"
                        className="w-full rounded-2xl border border-brand-blue/10 bg-white px-5 py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-secondary focus:outline-none"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55">
                      Service souhaité
                    </label>
                    <p className="text-sm text-brand-charcoal/60">
                      Les services défilent comme un carrousel. Cliquez pour sélectionner.
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {services.map((service, index) => {
                        const id = `home-contact-service-${service.title.toLowerCase().replace(/[^\p{L}0-9]+/gu, '-')}`
                        const isSelected = selectedHomeServices.includes(service.title)
                        const isSpotlight = index === homeCarouselIndex
                        return (
                          <label key={service.title} htmlFor={id} className="block cursor-pointer">
                            <input
                              id={id}
                              checked={isSelected}
                              className="hidden"
                              name="services"
                              type="checkbox"
                              onChange={() => toggleHomeService(service.title)}
                            />
                            <span
                              className={`flex min-h-[3.75rem] w-full items-center rounded-2xl border px-5 py-4 text-sm font-semibold leading-snug transition-all whitespace-normal break-words ${
                                isSelected
                                  ? 'border-secondary bg-secondary text-on-secondary service-carousel-selected'
                                  : isSpotlight
                                    ? 'border-secondary bg-secondary text-on-secondary shadow-lg shadow-secondary/20'
                                    : 'border-brand-blue/10 bg-white text-brand-charcoal'
                              } ${isSpotlight ? 'service-carousel-spotlight' : ''}`}
                            >
                              {service.title}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55" htmlFor="home-contact-message">
                      Message
                    </label>
                    <textarea
                      id="home-contact-message"
                      name="message"
                      className="w-full resize-none rounded-2xl border border-brand-blue/10 bg-white px-5 py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-secondary focus:outline-none"
                      rows={4}
                      placeholder="Dites-nous en plus..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-secondary px-6 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-on-secondary shadow-xl shadow-secondary/30 transition-all hover:bg-secondary/90"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
