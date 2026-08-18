const SITE_URL = 'https://weyandigital.ma'

function asset(path: string) {
  return `${SITE_URL}${path}`
}

export const seoImages = {
  home: {
    og: asset('/hero.webp'),
    twitter: asset('/hero.webp'),
    alt: 'Apercu premium de We Yan Digital, agence digitale marocaine specialisee en branding et communication.',
  },
  services: {
    og: asset('/images/strategy/approach.webp'),
    twitter: asset('/images/strategy/approach.webp'),
    alt: 'Apercu des services We Yan Digital avec branding, strategie digitale, publicite et developpement web.',
  },
  strategyMarketing: {
    og: asset('/images/strategy/hero.webp'),
    twitter: asset('/images/strategy/hero.webp'),
    alt: 'Apercu du service Strategie Marketing et Rebranding de We Yan Digital.',
  },
  contentCreation: {
    og: asset('/images/content/hero-user.webp'),
    twitter: asset('/images/content/hero-user.webp'),
    alt: 'Apercu du service Creation de Contenu et Community Management de We Yan Digital.',
  },
  advertising: {
    og: asset('/images/advertising/data-preview.webp'),
    twitter: asset('/images/advertising/data-preview.webp'),
    alt: 'Apercu du service Publicite Digitale Meta Ads et Google Ads de We Yan Digital.',
  },
  influenceMarketing: {
    og: asset('/images/content/gallery-lifestyle.webp'),
    twitter: asset('/images/content/gallery-lifestyle.webp'),
    alt: 'Apercu du service Marketing d Influence de We Yan Digital.',
  },
  seo: {
    og: asset('/images/seo/hero.webp'),
    twitter: asset('/images/seo/hero.webp'),
    alt: 'Apercu du service Referencement Naturel SEO de We Yan Digital.',
  },
  offlineMedia: {
    og: asset('/images/offline/hero-custom.webp'),
    twitter: asset('/images/offline/hero-custom.webp'),
    alt: 'Apercu du service Media Publicite Offline de We Yan Digital.',
  },
  projects: {
    og: asset('/images/projects/project-1.webp'),
    twitter: asset('/images/projects/project-1.webp'),
    alt: 'Apercu portfolio de We Yan Digital presentant des projets creatifs, branding et campagnes digitales.',
  },
  agency: {
    og: asset('/images/agency/story.webp'),
    twitter: asset('/images/agency/story.webp'),
    alt: 'Apercu de l agence We Yan Digital avec son equipe, sa vision et son studio creatif.',
  },
  contact: {
    og: asset('/images/contact/hero.webp'),
    twitter: asset('/images/contact/hero.webp'),
    alt: 'Apercu de la page contact We Yan Digital pour echanger sur votre projet digital a Casablanca.',
  },
} as const
