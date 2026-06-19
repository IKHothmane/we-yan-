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
    'We Yan Digital | Votre marque mérite de se démarquer',
    'Agence digitale marocaine spécialisée en branding, création de contenu, influence marketing et publicité digitale pour faire grandir votre marque.',
    seoImages.home,
  ),
  services: createPageSeoConfig(
    'Services | We Yan Digital',
    'Découvrez les services de We Yan Digital : branding, stratégie digitale, création de contenu, publicité et développement web pour votre croissance.',
    seoImages.services,
  ),
  projects: createPageSeoConfig(
    'Projets | We Yan Digital',
    'Explorez les projets de We Yan Digital en branding, campagnes sociales, design digital et identités visuelles réalisées pour des marques ambitieuses.',
    seoImages.projects,
  ),
  agency: createPageSeoConfig(
    'Agence | We Yan Digital',
    "Découvrez l'agence We Yan Digital, notre vision, notre méthode et notre équipe dédiée à la performance, à la créativité et à l'impact digital.",
    seoImages.agency,
  ),
  contact: createPageSeoConfig(
    'Contact | We Yan Digital',
    'Contactez We Yan Digital pour discuter de votre branding, site web, campagnes publicitaires ou stratégie digitale à Casablanca et partout au Maroc.',
    seoImages.contact,
  ),
} as const
