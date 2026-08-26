import { useState, type CSSProperties, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../Icon'
import SiteFooter from '../SiteFooter'
import useScrollReveal from '../../hooks/useScrollReveal'
import ContactSendPopup from '../ContactSendPopup'
import { sendContactMessage } from '../../lib/sendContact'
import { markLeadReadyToTrack } from '../../lib/trackLead'

const blogResources = [
  {
    eyebrow: 'Prix · 2026',
    title: 'Prix création site web au Maroc 2026',
    excerpt: 'Vitrine, e-commerce, sur-mesure : tarifs MAD détaillés, fourchettes réelles freelance vs agence, coûts récurrents et 5 pièges à éviter avant de signer un devis.',
    readingTime: '9 min',
    to: '/blog/prix-site-web-maroc-2026/',
    accent: '#6483F0',
  },
  {
    eyebrow: 'SEO vs SEA · Comparatif',
    title: 'SEO vs SEA au Maroc : lequel prioriser ?',
    excerpt: 'Tableau comparatif 7 critères, cas d\'usage seul, coût CPA Casablanca, et la stratégie We Yan gagnante combo SEO+SEA qui fait +162% de CA en 9 mois.',
    readingTime: '8 min',
    to: '/blog/seo-vs-sea-maroc/',
    accent: '#FC9700',
  },
  {
    eyebrow: 'Branding · Marque',
    title: 'Branding Maroc : créer une marque qui dure',
    excerpt: '6 étapes (de la stratégie avant design au playbook lancement), budget branding 2026, recherche OMPIC, 10 marques marocaines inspirantes.',
    readingTime: '11 min',
    to: '/blog/branding-creation-marque-maroc/',
    accent: '#4F46E5',
  },
  {
    eyebrow: 'Tendances · 2026',
    title: 'Marketing digital au Maroc : 6 tendances 2026',
    excerpt: 'TikTok Shop, SEO local Google Business, IA générative contenu, micro-influenceurs 10k-100k, budgets PME tableau, et ce qu\'il faut arrêter.',
    readingTime: '10 min',
    to: '/blog/marketing-digital-tendances-maroc-2026/',
    accent: '#10B981',
  },
] as const

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

const solutionsCardsBackground = '/images/agency/story.webp'

const deferredSectionStyle: CSSProperties = {
  contentVisibility: 'auto',
  containIntrinsicSize: '900px',
}

const faqItems = [
  {
    q: 'Quelle est la meilleure agence digitale à Casablanca ?',
    a: 'We Yan Digital est une agence digitale à Casablanca qui se différencie par son approche stratégique et créative : nous ne livrons pas de « packs standard », mais une stratégie sur-mesure alignée sur vos objectifs business (acquisition clients, notoriété, chiffre d\'affaires). Notre équipe maîtrise le marché marocain : du consommateur darijaophone aux cadres francophones, en passant par les segments premium et e-commerce. Nous accompagnons startups, PME et grands comptes à Casablanca, Rabat, Marrakech et partout au Maroc, avec une réactivité unique et un reporting transparent chaque semaine.',
  },
  {
    q: 'Combien coûte un site web vitrine au Maroc en 2026 ?',
    a: 'En 2026, le prix d\'un site web vitrine au Maroc varie généralement entre 5 000 MAD et 35 000 MAD HT selon la complexité. Chez We Yan Digital à Casablanca, nos formules démarrent à partir de 6 500 MAD pour un site vitrine 3-5 pages (responsive, optimisé SEO mobile, hébergement 1 an inclus). Un site intermédiaire avec back-office, formulaires avancés et optimisation SEO complète se situe entre 12 000 et 22 000 MAD. Un site premium, sur-mesure, multi-langue (FR / AR / EN) et optimisé pour la conversion, dépasse généralement 25 000 MAD. Chaque devis est gratuit et détaillé sans engagement.',
  },
  {
    q: 'Comment améliorer son référencement naturel SEO à Casablanca ?',
    a: 'Pour booster votre référencement SEO à Casablanca, nous appliquons une méthodologie en 4 piliers : (1) Audit technique complet — vitesse mobile, Core Web Vitals, structure des URLs, balises Schema.org, maillage interne. (2) SEO local Google Business Profile — optimisation de la fiche, photos de qualité Casablanca, avis clients, NAP cohérent (Name/Address/Phone) sur tout le web. (3) Contenu ciblé sur l\'intention de recherche marocaine — mots-clés en français, darija et anglais pour toucher « agence digitale près de chez moi », « prix site web Casablanca », etc. (4) Netlinking local — backlinks depuis des annuaires marocains, partenariats média et presse. Les premiers résultats se voient sous 3 à 6 mois.',
  },
  {
    q: 'Proposez-vous du community management à Casablanca ?',
    a: 'Oui, absolument. Nous proposons du community management complet à Casablanca et partout au Maroc : création de contenu premium (photographie, reels, carrousels, visuels branding), planification éditoriale mensuelle, animation des communautés Instagram, Facebook, LinkedIn, TikTok, réponse aux commentaires et DM, gestion des bad buzz le cas échéant, reporting mensuel avec KPIs (portée, engagement, clics, leads générés). Nous faisons aussi de la publicité Meta Ads + TikTok Ads couplée au community management pour transformer vos abonnés en clients payants.',
  },
] as const

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

const services = [
  {
    icon: 'travel_explore',
    title: 'Stratégie Marketing & Rebranding',
    description: 'Positionnement, relance de marque et plan d’action pour accélérer votre croissance.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/strategie-marketing-rebranding/',
    image: '/images/strategy/approach.webp',
  },
  {
    icon: 'edit_document',
    title: 'Création de Contenu & Community Management',
    description: 'Photos, vidéos, reels et gestion quotidienne de vos réseaux sociaux.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/creation-contenu-community-management/',
    image: '/images/content/studio-content-v2.webp',
  },
  {
    icon: 'ads_click',
    title: 'Publicité Digitale (Meta Ads & Google Ads)',
    description: 'Campagnes sponsorisées pour générer trafic, leads et ventes qualifiées.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/publicite-digitale/',
    image: '/images/home/dashboard.webp',
  },
  {
    icon: 'search',
    title: 'Référencement Naturel (SEO)',
    description: 'Optimisation SEO pour améliorer votre visibilité Google sur le long terme.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/seo/',
    image: '/images/seo/authority.webp',
  },
  {
    icon: 'campaign',
    title: 'Marketing d’Influence',
    description: 'Collaborez avec les bons créateurs pour amplifier votre marque.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/marketing-influence/',
    image: '/images/content/gallery-lifestyle.webp',
  },
  {
    icon: 'palette',
    title: 'Média Publicité Offline',
    description: 'Affichage, print et supports publicitaires pour renforcer votre présence terrain.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/media-publicite-offline/',
    image: '/images/offline/ooh.webp',
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
    image: '/images/projects/project-2.webp',
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
    image: '/images/projects/project-1.webp',
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
    image: '/images/strategy/positioning.webp',
    bg: 'bg-[#E8DCC8]',
    height: 'h-[320px] md:h-[360px]',
    offset: 'md:-mt-4',
  },
] as const

export default function HomeDeferredSections() {
  useScrollReveal()
  const navigate = useNavigate()
  const [selectedHomeServices, setSelectedHomeServices] = useState<string[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [homeName, setHomeName] = useState('')
  const [homeEmail, setHomeEmail] = useState('')
  const [homePhone, setHomePhone] = useState('')
  const [homeMessage, setHomeMessage] = useState('')
  const [homeWebsite, setHomeWebsite] = useState('')
  const [homeStatus, setHomeStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [homeError, setHomeError] = useState('')
  const [popupOpen, setPopupOpen] = useState(false)

  const toggleHomeService = (serviceTitle: string) => {
    setSelectedHomeServices((current) =>
      current.includes(serviceTitle)
        ? current.filter((item) => item !== serviceTitle)
        : [...current, serviceTitle]
    )
  }

  const toggleFaq = (idx: number) => {
    setOpenFaq((current) => (current === idx ? null : idx))
  }

  const handleHomeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setHomeStatus('sending')
    setHomeError('')

    try {
      await sendContactMessage({
        name: homeName,
        email: homeEmail,
        phone: homePhone,
        message: homeMessage,
        services: selectedHomeServices,
        website: homeWebsite,
      })
      markLeadReadyToTrack()
      navigate('/merci/')
    } catch (error) {
      setHomeStatus('error')
      setHomeError(error instanceof Error ? error.message : 'Envoi impossible.')
      setPopupOpen(true)
    }
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

        @keyframes homeBtnPulse {
          0%, 100% { box-shadow: 0 20px 25px -5px rgba(252,151,0,0.35), 0 0 0 0 rgba(252,151,0,0.5); transform: scale(1); }
          50% { box-shadow: 0 20px 25px -5px rgba(252,151,0,0.35), 0 0 0 14px rgba(252,151,0,0); transform: scale(1.015); }
        }

        .home-submit-pulse { animation: homeBtnPulse 1.6s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .home-service-float {
            animation: none;
          }
          .home-submit-pulse {
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
            <p className="text-slate-600 text-[clamp(1rem,2.3vw,1.125rem)] max-w-2xl mx-auto mb-5">
              Nous avons ce qu'il vous faut, de la création de logo à la campagne publicitaire.
            </p>
            <Link
              to="/services/"
              className="inline-flex items-center gap-2 text-slate-700 font-bold text-[0.78rem] uppercase tracking-[0.2em] border-b-2 border-slate-900/70 pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              Voir toutes nos expertises (SEO, Site Web, Branding, Ads…)
              <span aria-hidden="true">↗</span>
            </Link>
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
                    width={512}
                    height={512}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={`absolute inset-0 rounded-[inherit] ${toneGradient}`} />
                  <img
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full rounded-[inherit] scale-105 transform-gpu object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
                    src={service.image}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
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
              to="/projets/"
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
                    width={800}
                    height={600}
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
                    <img alt={t.author} className="w-full h-full object-cover" src={t.avatar}
                    width={800}
                    height={600}
                    loading="lazy" />
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
                      <p className="mt-1 text-lg font-semibold text-brand-charcoal">06 91 56 72 46</p>
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

                <form className="relative mt-10 space-y-6" onSubmit={handleHomeSubmit}>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55" htmlFor="home-contact-name">
                        Nom
                      </label>
                      <input
                        id="home-contact-name"
                        name="name"
                        type="text"
                        value={homeName}
                        onChange={(e) => setHomeName(e.target.value)}
                        className="w-full rounded-2xl border border-brand-blue/10 bg-white px-5 py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-secondary focus:outline-none"
                        placeholder="Votre nom"
                        required
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
                        value={homeEmail}
                        onChange={(e) => setHomeEmail(e.target.value)}
                        className="w-full rounded-2xl border border-brand-blue/10 bg-white px-5 py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-secondary focus:outline-none"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55" htmlFor="home-contact-phone">
                      Téléphone
                    </label>
                    <input
                      id="home-contact-phone"
                      name="phone"
                      type="tel"
                      value={homePhone}
                      onChange={(e) => setHomePhone(e.target.value)}
                      className="w-full rounded-2xl border border-brand-blue/10 bg-white px-5 py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-secondary focus:outline-none"
                      placeholder="06 00 00 00 00"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-charcoal/55">
                      Service souhaité
                    </label>
                    <p className="text-sm text-brand-charcoal/60">
                      Sélectionnez les services qui vous intéressent.
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {services.map((service) => {
                        const id = `home-contact-service-${service.title.toLowerCase().replace(/[^\p{L}0-9]+/gu, '-')}`
                        const isSelected = selectedHomeServices.includes(service.title)
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
                                  : 'border-brand-blue/10 bg-white text-brand-charcoal'
                              }`}
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
                      value={homeMessage}
                      onChange={(e) => setHomeMessage(e.target.value)}
                      className="w-full resize-none rounded-2xl border border-brand-blue/10 bg-white px-5 py-4 text-brand-charcoal placeholder:text-brand-charcoal/40 focus:border-secondary focus:outline-none"
                      rows={4}
                      placeholder="Dites-nous en plus..."
                      required
                    />
                  </div>

                  <input
                    type="text"
                    name="website"
                    value={homeWebsite}
                    onChange={(e) => setHomeWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                    aria-hidden="true"
                  />

                  <button
                    type="submit"
                    disabled={homeStatus === 'sending'}
                    className="w-full rounded-2xl bg-secondary px-6 py-4 text-sm font-extrabold uppercase tracking-[0.2em] text-on-secondary shadow-xl shadow-secondary/30 transition-all hover:bg-secondary/90 home-submit-pulse disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {homeStatus === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
                  </button>
                  {homeStatus === 'success' && (
                    <p className="sr-only" role="status">
                      Message envoyé. Nous vous répondons sous 24h.
                    </p>
                  )}
                  {homeStatus === 'error' && (
                    <p className="sr-only" role="alert">
                      {homeError}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSendPopup
        open={popupOpen}
        status="error"
        errorMessage={homeError}
        onClose={() => setPopupOpen(false)}
      />

      {/* RESSOURCES BLOG · Maillage interne SEO vers 4 articles orphelins */}
      <section className="relative overflow-hidden py-[clamp(4rem,8vw,6rem)] text-slate-900" style={{ backgroundColor: '#F8FAFC' }}>
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, #EEF2FF 0%, transparent 65%)' }} />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full blur-3xl opacity-50" style={{ background: 'radial-gradient(circle, #FFF7ED 0%, transparent 65%)' }} />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-[clamp(1rem,4vw,2rem)]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[clamp(2.2rem,5.5vw,3rem)]">
            <div data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ backgroundColor: '#FFF7ED', color: '#C2410C', borderColor: '#FED7AA' }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#FC9700' }} />
                Guides & Blog We Yan
              </span>
              <h2 className="font-black text-[clamp(1.8rem,5vw,3.1rem)] tracking-tight text-slate-900 mb-3 leading-[1.05]">
                Nos <span style={{ color: '#FC9700' }}>ressources</span> pour booster votre marque au Maroc
              </h2>
              <p className="text-slate-500 text-[clamp(0.95rem,2vw,1.1rem)] max-w-2xl leading-relaxed">
                Tarifs, comparatifs, stratégie, branding : tous nos guides 100% dédiés au marché marocain. Données réelles 2026, contenu unique, aucun contenu IA brut.
              </p>
            </div>
            <Link
              to="/blog/prix-site-web-maroc-2026/"
              className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[0.9rem] font-bold uppercase tracking-wider shadow-xl shadow-[#6483F0]/20 hover:shadow-2xl hover:shadow-[#6483F0]/30 hover:scale-[1.01] transition-all whitespace-nowrap"
              style={{ backgroundColor: '#6483F0', color: '#FFF' }}
              data-reveal
              data-reveal-delay="60"
            >
              Explorer tous les articles
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4.5 w-4.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {blogResources.map((card, i) => (
              <article
                key={card.to}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.18)] hover:shadow-[0_28px_60px_-22px_rgba(100,131,240,0.35)] hover:-translate-y-1 transition-all duration-300"
                data-reveal
                data-reveal-delay={`${100 + i * 80}`}
              >
                <div aria-hidden="true" className="h-2.5 w-full" style={{ backgroundColor: card.accent }} />
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${card.accent}14`,
                        color: card.accent,
                      }}
                    >
                      {card.eyebrow}
                    </span>
                    <span className="text-[0.75rem] text-slate-400 font-medium flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {card.readingTime}
                    </span>
                  </div>
                  <h3 className="text-[1.12rem] sm:text-[1.2rem] font-extrabold leading-[1.25] text-slate-900 mb-3 line-clamp-2 group-hover:text-[#6483F0] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[0.93rem] leading-[1.65] text-slate-500 line-clamp-4 mb-6 flex-1">
                    {card.excerpt}
                  </p>
                  <Link
                    to={card.to}
                    aria-label={`Lire l'article : ${card.title}`}
                    className="mt-auto inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[0.85rem] font-bold transition-all group-hover:text-white"
                    style={{ backgroundColor: `${card.accent}14`, color: card.accent }}
                  >
                    Lire l'article
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - juste au-dessus du footer */}
      <section className="relative overflow-hidden bg-white py-[clamp(4.5rem,9vw,7.5rem)] text-slate-900" id="faq">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #6483F0 0%, transparent 60%)' }} />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, #FC9700 0%, transparent 60%)' }} />

        <div className="relative w-full max-w-[1120px] mx-auto px-[clamp(1rem,4vw,2rem)]">
          <div className="text-center mb-[clamp(2.5rem,6vw,3.5rem)]" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ backgroundColor: '#EEF2FF', color: '#4338CA', borderColor: '#C7D2FE' }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
              FAQ · SEO
            </span>
            <h2 className="font-black text-[clamp(2rem,5.5vw,3.5rem)] tracking-tight text-slate-900 mb-4">
              Questions <span style={{ color: '#6483F0' }}>fréquentes</span>
            </h2>
            <p className="text-slate-500 text-[clamp(0.95rem,2vw,1.125rem)] max-w-2xl mx-auto leading-relaxed">
              Les réponses aux questions que nous posent le plus souvent nos clients marocains et internationaux.
            </p>
          </div>

          <div className="space-y-4" data-reveal data-reveal-delay="80">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={item.q}
                  className={`group rounded-3xl border-2 transition-all duration-300 ${
                    isOpen
                      ? 'shadow-[0_22px_50px_-18px_rgba(100,131,240,0.45)]'
                      : 'shadow-sm hover:shadow-md hover:-translate-y-0.5'
                  }`}
                  style={{
                    borderColor: isOpen ? '#6483F0' : '#E5E7EB',
                    backgroundColor: isOpen ? '#FFFFFF' : '#FFFFFF',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full items-center justify-between gap-5 text-left px-[clamp(1.1rem,3vw,1.6rem)] py-[clamp(1rem,2.2vw,1.35rem)]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl text-sm font-black transition-all ${
                          isOpen ? 'text-white shadow-md' : 'text-[#6483F0]'
                        }`}
                        style={{ backgroundColor: isOpen ? '#6483F0' : '#EEF2FF' }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`font-bold text-[clamp(0.95rem,2vw,1.15rem)] leading-snug ${
                        isOpen ? 'text-slate-900' : 'text-slate-800'
                      }`}>
                        {item.q}
                      </h3>
                    </div>
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'rotate-180 text-white' : 'text-slate-400 bg-slate-100'
                      }`}
                      style={{ backgroundColor: isOpen ? '#FC9700' : undefined }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="px-[clamp(1.1rem,3vw,1.6rem)] pb-[clamp(1.1rem,2.2vw,1.45rem)] pl-[calc(clamp(1.1rem,3vw,1.6rem)+2rem+1rem)] pr-[clamp(1.1rem,3vw,1.6rem)]"
                      >
                        <p className="text-slate-600 leading-relaxed text-[clamp(0.92rem,1.8vw,1rem)]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-14 text-center" data-reveal data-reveal-delay="160">
            <p className="text-slate-500 text-[0.92rem] mb-5">
              Vous n'avez pas trouvé votre réponse ?
            </p>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-[0.8rem] font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: '#6483F0', boxShadow: '0 22px 45px -16px rgba(100,131,240,0.55)' }}
            >
              Parlez à un expert · Casablanca
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-sm">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
