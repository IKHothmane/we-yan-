import type { PageLinking } from './internalLinking'
import { withTrailingSlash } from './paths'

const SITE_URL = 'https://weyandigital.ma'
export const ORG_ID = `${SITE_URL}/#organization`
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`

export const orgJsonLd = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'We Yan Digital',
  alternateName: ['We Yan', 'WeYanDigital'],
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/Logo%20weyan.png`,
  description:
    'Agence digitale à Casablanca (Maarif) : SEO, community management, branding, Google Ads, Meta Ads, marketing d’influence et média offline au Maroc.',
  sameAs: [
    'https://www.linkedin.com/company/weyandigital',
    'https://www.instagram.com/weyandigital.ma',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Quartier Maarif',
    addressLocality: 'Casablanca',
    postalCode: '20100',
    addressRegion: 'Casablanca-Settat',
    addressCountry: 'MA',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Casablanca' },
    { '@type': 'AdministrativeArea', name: 'Rabat' },
    { '@type': 'AdministrativeArea', name: 'Marrakech' },
    { '@type': 'AdministrativeArea', name: 'Tanger' },
    { '@type': 'Country', name: 'Maroc' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+212-6-91-56-72-46',
    contactType: 'customer support',
    email: 'contact@weyandigital.ma',
    availableLanguage: ['French', 'English', 'Arabic'],
  },
}

export const localBusinessJsonLd = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': LOCAL_BUSINESS_ID,
  name: 'We Yan Digital - Agence digitale Casablanca',
  image: `${SITE_URL}/hero.webp`,
  url: `${SITE_URL}/`,
  telephone: '+212-6-91-56-72-46',
  email: 'contact@weyandigital.ma',
  priceRange: 'MAD',
  parentOrganization: { '@id': ORG_ID },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Quartier Maarif',
    addressLocality: 'Casablanca',
    postalCode: '20100',
    addressRegion: 'Casablanca-Settat',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.5731,
    longitude: -7.5898,
  },
  areaServed: ['Casablanca', 'Maroc'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
}

/** Graph global injecté sur toutes les pages (GEO : Organization + LocalBusiness liés). */
export function buildSiteGraphJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [orgJsonLd, localBusinessJsonLd],
  }
}

const MONEY_SERVICE_SLUGS = new Set([
  '/agence-seo-casablanca',
  '/community-management-casablanca',
  '/services/strategie-marketing-rebranding',
  '/services/publicite-digitale',
  '/services/marketing-influence',
  '/services/seo',
  '/services/creation-contenu-community-management',
])

export function isServiceSchemaPage(slug: string) {
  return MONEY_SERVICE_SLUGS.has(slug.replace(/\/+$/, '') || '/')
}

/** Service JSON-LD pour pages money — lié à Organization via @id. */
export function buildServiceJsonLd(page: PageLinking) {
  if (!isServiceSchemaPage(page.slug)) return null

  const url = `${SITE_URL}${withTrailingSlash(page.slug)}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: page.titre,
    serviceType: page.mot_cle_principal || page.titre,
    description: `Prestation « ${page.mot_cle_principal || page.titre} » par We Yan Digital, agence digitale à Casablanca (Maarif).`,
    url,
    provider: { '@id': ORG_ID },
    areaServed: [
      { '@type': 'City', name: 'Casablanca' },
      { '@type': 'Country', name: 'Maroc' },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'MAD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/contact/`,
    },
  }
}
