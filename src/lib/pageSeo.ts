import { homePageSeo } from './homePageSeo'
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
  home: homePageSeo,
  services: createPageSeoConfig(
    'Services agence digitale Casablanca | We Yan Digital',
    'SEO, site web, branding, Google Ads, community et influence à Casablanca. Packs We Yan Digital pour PME et marques marocaines. Devis gratuit.',
    seoImages.services,
  ),
  strategyMarketing: createPageSeoConfig(
    'Agence branding Casablanca | Rebranding – We Yan Digital',
    'Agence branding à Casablanca : rebranding, identité et stratégie marketing. Packs sur devis. Audit gratuit, Maroc entier.',
    seoImages.strategyMarketing,
  ),
  contentCreation: createPageSeoConfig(
    'Création de contenu & community | We Yan Digital',
    'Création de contenu et community management : visuels premium, réseaux sociaux et engagement pour marques au Maroc. Devis sous 24h.',
    seoImages.contentCreation,
  ),
  advertising: createPageSeoConfig(
    'Publicité digitale Casablanca | Google & Meta Ads',
    'Offre multi-leviers We Yan Digital : Google Ads, Meta Ads et pilotage data à Casablanca. Media plan et devis sous 24h.',
    seoImages.advertising,
  ),
  agenceGoogleAdsCasablanca: createPageSeoConfig(
    'Agence Google Ads Casablanca | Search & conversions',
    'Agence Google Ads à Casablanca : campagnes Search, suivi des conversions, optimisation du budget. Devis We Yan Digital sous 24h.',
    seoImages.advertising,
  ),
  influenceMarketing: createPageSeoConfig(
    'Agence influenceur Maroc | Influence Casablanca',
    'Agence influenceur Maroc : casting, brief et reporting. Nano, micro, macro — tarifs story / reel 2026. We Yan Digital, devis sous 24h.',
    seoImages.influenceMarketing,
  ),
  seo: createPageSeoConfig(
    'Prestation SEO Maroc | Méthode, audit & suivi',
    'Service de référencement naturel au Maroc : audit technique, optimisation on-page, contenus et netlinking. Méthode We Yan Digital, devis sous 24h.',
    seoImages.seo,
  ),
  offlineMedia: createPageSeoConfig(
    'Publicité offline Maroc | Affichage & print – We Yan',
    'Média publicité offline : affichage, print, radio et dispositifs phygitaux. Approche omnicanale We Yan Digital Casablanca.',
    seoImages.offlineMedia,
  ),
  projects: createPageSeoConfig(
    'Réalisations agence digitale Casablanca | We Yan',
    'Portfolio We Yan Digital à Casablanca : branding, SEO, community, influence et campagnes pour marques marocaines. Étude de cas sur devis.',
    seoImages.projects,
  ),
  agency: createPageSeoConfig(
    'Agence digitale Casablanca Maarif | We Yan Digital',
    'We Yan Digital, agence digitale à Casablanca (Maarif) : SEO, ads, site web, branding et community. Méthode locale, devis sous 24h.',
    seoImages.agency,
  ),
  contact: createPageSeoConfig(
    'Contact agence digitale Casablanca | Devis 24h',
    'Contactez We Yan Digital à Casablanca pour un devis SEO, site web, Google Ads, branding ou community. Réponse sous 24h ouvrées.',
    seoImages.contact,
  ),
  merci: createPageSeoConfig(
    'Demande envoyée | We Yan Digital',
    'Merci pour votre demande. We Yan Digital vous répond sous 24h ouvrées à Casablanca.',
    seoImages.contact,
  ),

  notFound: createPageSeoConfig(
    'Page introuvable | We Yan Digital',
    'Cette page n’existe pas ou a été déplacée. Retrouvez les services We Yan Digital à Casablanca.',
    seoImages.home,
  ),

  agenceSeoCasablanca: createPageSeoConfig(
    'Agence SEO Casablanca | Audit gratuit & SEO local',
    'Agence SEO à Casablanca (Maarif) : SEO local Google Business, technique, contenus et reporting Search Console. Audit offert sous 24h — We Yan Digital.',
    seoImages.seo,
  ),
  creationSiteWebCasablanca: createPageSeoConfig(
    'Création site web Casablanca | We Yan Digital',
    'Création de site web à Casablanca : vitrine, e-commerce et sur-mesure. Devis et délais selon brief — guide prix marché 2026. We Yan Digital, réponse sous 24h.',
    seoImages.services,
  ),
  communityManagementCasablanca: createPageSeoConfig(
    'Community management Casablanca | Animation & forfaits',
    'Community management à Casablanca : Instagram, TikTok, LinkedIn, forfaits mensuels et reporting. Devis We Yan Digital sous 24h.',
    seoImages.contentCreation,
  ),

  blogPrixSiteWebMaroc2026: createPageSeoConfig(
    'Combien coûte un site web au Maroc 2026 ? | Prix',
    'Prix création site web Maroc 2026 : vitrine, e-commerce, sur-mesure. Fourchettes MAD indicatives et devis We Yan Digital Casablanca.',
    seoImages.services,
  ),
  blogPrixSeoCasablanca2026: createPageSeoConfig(
    'Combien coûte le SEO au Maroc 2026 ? | Prix Casa',
    'Prix SEO Maroc / Casablanca 2026 : audit, retainer, freelance vs agence. Fourchettes MAD indicatives — accompagnement We Yan sur devis.',
    seoImages.seo,
  ),
  blogPrixGoogleAdsMaroc2026: createPageSeoConfig(
    'Quel budget Google Ads au Maroc 2026 ? | CPC',
    'Budget Google Ads Maroc 2026 : CPC Search, Display, YouTube, paliers Casablanca et gestion agence. Fourchettes MAD indicatives.',
    seoImages.advertising,
  ),
  blogPrixMetaAdsCasablanca2026: createPageSeoConfig(
    'Budget Facebook & Instagram Ads Maroc 2026',
    'Budget publicité Facebook / Instagram au Maroc 2026 : CPC, CPM, CPL WhatsApp Casablanca. Fourchettes MAD et gestion sur devis.',
    seoImages.advertising,
  ),
  blogPrixInfluenceurMaroc2026: createPageSeoConfig(
    'Prix influenceur Maroc 2026 | Story, reel, post',
    'Prix influenceur au Maroc 2026 : nano, micro, macro — story, reel, post en MAD. Fourchettes Casablanca ; gestion We Yan sur devis.',
    seoImages.influenceMarketing,
  ),
  blogSeoVsSea: createPageSeoConfig(
    'SEO ou Google Ads au Maroc ? | Comparatif 2026',
    'SEO ou Google Ads pour une entreprise au Maroc : délais, coûts, ROI. Quand mixer référencement naturel et SEA — We Yan Digital.',
    seoImages.seo,
  ),
  blogPrixCommunityManagementMaroc2026: createPageSeoConfig(
    'Prix community management Maroc 2026 | Forfaits',
    'Combien coûte le community management au Maroc 2026 ? Fourchettes MAD, freelance vs agence, forfaits Instagram / TikTok. Devis We Yan.',
    seoImages.contentCreation,
  ),
  blogPrixIdentiteVisuelleMaroc2026: createPageSeoConfig(
    'Prix identité visuelle Maroc 2026 | Logo & charte',
    'Combien coûte une identité visuelle au Maroc 2026 ? Logo, charte, branding — fourchettes MAD indicatives. Devis We Yan Casablanca.',
    seoImages.strategyMarketing,
  ),
  blogChoisirAgenceDigitaleCasablanca: createPageSeoConfig(
    'Comment choisir une agence digitale à Casablanca',
    'Checklist pour choisir une agence digitale à Casablanca : critères, questions, pièges. Guide We Yan Digital Maarif.',
    seoImages.agency,
  ),
  blogAmeliorerVisibiliteGoogleCasablanca: createPageSeoConfig(
    'Améliorer sa visibilité Google à Casablanca 2026',
    'Comment améliorer sa visibilité sur Google à Casablanca : SEO local, fiche Google Business, contenu. Agence SEO We Yan.',
    seoImages.seo,
  ),
  blogBrandingMaroc: createPageSeoConfig(
    'Créer une marque au Maroc 2026 | Branding Casa',
    'Créer une marque au Maroc : naming, identité visuelle, positionnement et lancement. Accompagnement We Yan Digital Casablanca.',
    seoImages.strategyMarketing,
  ),
  blogRebrandingExempleCasablanca: createPageSeoConfig(
    'Exemple rebranding Casablanca 2026 | We Yan Digital',
    'Cas concret de rebranding à Casablanca : audit, positionnement, charte, déploiement. Méthode We Yan Digital.',
    seoImages.strategyMarketing,
  ),
  blogMarketingDigitalMaroc: createPageSeoConfig(
    'Marketing digital Maroc 2026 | Tendances & budget',
    'Tendances marketing digital au Maroc 2026 : SEO local, TikTok, influence, budget PME. Stratégie We Yan Digital Casablanca.',
    seoImages.contentCreation,
  ),

  conditionsGenerales: createPageSeoConfig(
    'CGV | Conditions générales – We Yan Digital Maroc',
    'CGV We Yan Digital : devis, paiement MAD, livrables, PI, responsabilité et droit applicable Maroc (Casablanca).',
    seoImages.contact,
  ),
  politiqueConfidentialite: createPageSeoConfig(
    'Politique de confidentialité | CNDP – We Yan Digital',
    'Protection des données We Yan Digital : collecte, cookies, droits CNDP et conservation. Conforme cadre Maroc et RGPD.',
    seoImages.contact,
  ),
  mentionsLegales: createPageSeoConfig(
    'Mentions légales | We Yan Digital Casablanca',
    'Mentions légales weyandigital.ma : éditeur We Yan Digital Casablanca, hébergeur, propriété intellectuelle et contact.',
    seoImages.contact,
  ),
} as const

export const PAGE_SEO_BY_SLUG: Record<string, PageSeoConfig> = {
  '/': pageSeo.home,
  '/services': pageSeo.services,
  '/services/strategie-marketing-rebranding': pageSeo.strategyMarketing,
  '/services/creation-contenu-community-management': pageSeo.contentCreation,
  '/services/publicite-digitale': pageSeo.advertising,
  '/agence-google-ads-casablanca': pageSeo.agenceGoogleAdsCasablanca,
  '/services/marketing-influence': pageSeo.influenceMarketing,
  '/services/seo': pageSeo.seo,
  '/services/media-publicite-offline': pageSeo.offlineMedia,
  '/projets': pageSeo.projects,
  '/agence': pageSeo.agency,
  '/contact': pageSeo.contact,
  '/merci': pageSeo.merci,
  '/agence-seo-casablanca': pageSeo.agenceSeoCasablanca,
  '/creation-site-web-casablanca': pageSeo.creationSiteWebCasablanca,
  '/community-management-casablanca': pageSeo.communityManagementCasablanca,
  '/blog/prix-site-web-maroc-2026': pageSeo.blogPrixSiteWebMaroc2026,
  '/blog/prix-seo-casablanca-2026': pageSeo.blogPrixSeoCasablanca2026,
  '/blog/prix-google-ads-maroc-2026': pageSeo.blogPrixGoogleAdsMaroc2026,
  '/blog/prix-meta-ads-casablanca-2026': pageSeo.blogPrixMetaAdsCasablanca2026,
  '/blog/prix-influenceur-maroc-2026': pageSeo.blogPrixInfluenceurMaroc2026,
  '/blog/seo-vs-sea-maroc': pageSeo.blogSeoVsSea,
  '/blog/prix-community-management-maroc-2026': pageSeo.blogPrixCommunityManagementMaroc2026,
  '/blog/prix-identite-visuelle-maroc-2026': pageSeo.blogPrixIdentiteVisuelleMaroc2026,
  '/blog/comment-choisir-agence-digitale-casablanca': pageSeo.blogChoisirAgenceDigitaleCasablanca,
  '/blog/ameliorer-visibilite-google-casablanca': pageSeo.blogAmeliorerVisibiliteGoogleCasablanca,
  '/blog/branding-creation-marque-maroc': pageSeo.blogBrandingMaroc,
  '/blog/rebranding-exemple-casablanca-2026': pageSeo.blogRebrandingExempleCasablanca,
  '/blog/marketing-digital-tendances-maroc-2026': pageSeo.blogMarketingDigitalMaroc,
  '/conditions-generales': pageSeo.conditionsGenerales,
  '/politique-de-confidentialite': pageSeo.politiqueConfidentialite,
  '/mentions-legales': pageSeo.mentionsLegales,
}
