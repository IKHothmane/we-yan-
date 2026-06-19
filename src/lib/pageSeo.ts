import { seoImages } from './seoImages'

export type PageSeoConfig = {
  title: string
  description: string
  ogImage: string
  twitterImage: string
  ogImageAlt: string
  twitterImageAlt: string
}

function createPageSeoConfig(
  title: string,
  description: string,
  image: { og: string; twitter: string; alt: string },
): PageSeoConfig {
  return {
    title,
    description,
    ogImage: image.og,
    twitterImage: image.twitter,
    ogImageAlt: image.alt,
    twitterImageAlt: image.alt,
  }
}

export const pageSeo = {
  home: createPageSeoConfig(
    'we yan digital | Votre marque mérite de se démarquer',
    'Agence digitale marocaine spécialisée en branding, création de contenu, influence marketing et publicité digitale pour faire grandir votre marque.',
    seoImages.home,
  ),
  services: createPageSeoConfig(
    'Services | we yan digital',
    'Découvrez les services de we yan digital : branding, stratégie digitale, création de contenu, publicité et développement web pour votre croissance.',
    seoImages.services,
  ),
  projects: createPageSeoConfig(
    'Projets | we yan digital',
    'Explorez les projets de we yan digital en branding, campagnes sociales, design digital et identités visuelles réalisées pour des marques ambitieuses.',
    seoImages.projects,
  ),
  agency: createPageSeoConfig(
    'Agence | we yan digital',
    "Découvrez l'agence we yan digital, notre vision, notre méthode et notre équipe dédiée à la performance, à la créativité et à l'impact digital.",
    seoImages.agency,
  ),
  contact: createPageSeoConfig(
    'Contact | we yan digital',
    'Contactez we yan digital pour discuter de votre branding, site web, campagnes publicitaires ou stratégie digitale à Casablanca et partout au Maroc.',
    seoImages.contact,
  ),
} as const
