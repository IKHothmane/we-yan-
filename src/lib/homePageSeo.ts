export type HomePageSeoConfig = {
  title: string
  description: string
  ogImage: string
  twitterImage: string
  ogImageAlt: string
  twitterImageAlt: string
}

const HOME_IMAGE = 'https://weyandigital.ma/hero.webp'
const HOME_ALT =
  'Apercu premium de We Yan Digital, agence digitale marocaine specialisee en branding et communication.'

export const homePageSeo: HomePageSeoConfig = {
  title: 'We Yan Digital | Agence digitale Casablanca',
  description:
    'Agence digitale à Casablanca : branding, SEO, site web, ads et community management pour startups et PME au Maroc. Devis sous 24h.',
  ogImage: HOME_IMAGE,
  twitterImage: HOME_IMAGE,
  ogImageAlt: HOME_ALT,
  twitterImageAlt: HOME_ALT,
}
