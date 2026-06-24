import type {
  Service,
  PortfolioItem,
  Testimonial,
  AgencyStat,
  TeamMember,
  PricingPlan,
} from '../types'

export const SERVICES: Service[] = [
  {
    icon: 'palette',
    title: 'Branding & Identité',
    description:
      'Création de logos, chartes graphiques et univers visuels cohérents qui font la différence.',
    tone: 'brand',
  },
  {
    icon: 'smartphone',
    title: 'Social Media Marketing',
    description:
      'Gestion de contenu, campagnes publicitaires et community management pour Instagram, TikTok, LinkedIn.',
    tone: 'social',
  },
  {
    icon: 'web',
    title: 'Développement Web',
    description:
      'Sites vitrines, landing pages et e-commerce performants avec un design moderne et responsive.',
    tone: 'web',
  },
  {
    icon: 'edit_note',
    title: 'Création de Contenu',
    description:
      'Photos, vidéos, reels et copywriting optimisés pour maximiser l’engagement sur tous les réseaux.',
    tone: 'content',
  },
  {
    icon: 'psychology',
    title: 'Influence Marketing',
    description:
      'Connexion avec la bonne audience via des partenariats stratégiques avec des créateurs de contenu.',
  },
  {
    icon: 'analytics',
    title: 'Stratégie Digitale',
    description:
      'Audit complet, définition des KPIs et plan d’action personnalisé pour atteindre vos objectifs.',
  },
]

export const HOME_HERO_SERVICES = [
  {
    icon: 'travel_explore',
    label: 'Strategie & Rebranding',
    tone: 'primary',
  },
  {
    icon: 'edit_document',
    label: 'Contenu & Community',
    tone: 'secondary',
  },
  {
    icon: 'ads_click',
    label: 'Meta Ads & Google Ads',
    tone: 'primary',
  },
  {
    icon: 'search',
    label: 'SEO',
    tone: 'secondary',
  },
  {
    icon: 'campaign',
    label: 'Marketing d’Influence',
    tone: 'primary',
  },
  {
    icon: 'palette',
    label: 'Media Offline',
    tone: 'secondary',
  },
] as const

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Nourriture Saine',
    category: 'Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Mode Éthique',
    category: 'Social Media',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Café Local',
    category: 'Web Design',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Start-up Tech',
    category: 'Identité Visuelle',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'Fitness App',
    category: 'UI/UX',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    title: 'Agence Immo',
    category: 'Marketing',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Collaborer avec We Digital a transformé notre présence en ligne. Nos ventes ont augmenté de 200% en 6 mois grâce à leur stratégie social media impeccable.',
    author: 'Amelie Martin',
    role: 'Fondatrice, Maison Bohème',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    quote:
      'Leur branding est incroyable. On nous reconnaît désormais immédiatement dans la rue. Le retour client est phénoménal.',
    author: 'Lucas Dubois',
    role: 'CEO, Urban Coffee',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
]

export const AGENCY_STATS: AgencyStat[] = [
  { value: '3 ans', label: "D'expérience" },
  { value: '100+', label: 'Projets réalisés' },
  { value: '40+', label: 'Clients satisfaits' },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Yanis', role: 'Directeur Artistique' },
  { name: 'Sarah', role: 'Community Manager' },
  { name: 'Tom', role: 'Développeur Web' },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: 'Starter',
    description: 'Pour les nouveaux entrepreneurs',
    price: '500€',
    features: ['Audit digital', 'Conseil stratégique', '3 posts par semaine'],
  },
  {
    title: 'Growth',
    description: 'Pour les entreprises en expansion',
    price: '1,500€',
    features: [
      'Tout le Starter',
      'Gestion de 2 réseaux sociaux',
      'Création de contenu mensuel',
      'Rapport de performance mensuel',
    ],
    highlighted: true,
  },
  {
    title: 'Premium',
    description: 'Solution complète',
    price: 'Sur devis',
    features: [
      'Tout le Growth',
      'Développement Web',
      'Branding complet',
      'Gestion de campagne publicitaire',
    ],
  },
]
