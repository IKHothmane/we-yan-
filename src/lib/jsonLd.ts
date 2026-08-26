import type { PageLinking } from './internalLinking'
import { withTrailingSlash } from './paths'

const SITE_URL = 'https://weyandigital.ma'
export const ORG_ID = `${SITE_URL}/#organization`
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`
export const WEBSITE_ID = `${SITE_URL}/#website`
const LOGO_URL = `${SITE_URL}/logo.png`

export const orgJsonLd = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'We Yan Digital',
  alternateName: ['We Yan', 'WeYanDigital'],
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services We Yan Digital Casablanca',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Référencement Naturel (SEO)',
          url: `${SITE_URL}/agence-seo-casablanca/`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Création de Contenu & Community Management',
          url: `${SITE_URL}/community-management-casablanca/`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Stratégie Marketing & Rebranding',
          url: `${SITE_URL}/services/strategie-marketing-rebranding/`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Publicité Digitale (Google Ads & Meta Ads)',
          url: `${SITE_URL}/services/publicite-digitale/`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Marketing d’Influence',
          url: `${SITE_URL}/services/marketing-influence/`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Média Publicité Offline',
          url: `${SITE_URL}/projets/`,
        },
      },
    ],
  },
  knowsAbout: [
    'Agence SEO Casablanca',
    'Agence digitale Casablanca',
    'Référencement naturel Maroc',
    'Community management Casablanca',
    'Agence branding Casablanca',
    'Agence Google Ads Maroc',
    'Agence influenceur Maroc',
  ],
}

export const websiteJsonLd = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'We Yan Digital',
  alternateName: 'We Yan',
  publisher: { '@id': ORG_ID },
}

/** Graph global injecté sur toutes les pages (sans FAQPage — FAQ = 1 seul bloc par page). */
export function buildSiteGraphJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [orgJsonLd, localBusinessJsonLd, websiteJsonLd],
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
