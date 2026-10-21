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
    'Agence branding à Casablanca : rebranding, identité et stratégie marketing. Packs dès 15 000 MAD. Audit gratuit, Maroc entier.',
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
    'Agence Google Ads Casablanca | Gestion de campagnes – We Yan Digital',
    'We Yan Digital accompagne les entreprises de Casablanca sur Google Ads : stratégie, gestion des campagnes, suivi des conversions et optimisation du budget. Demandez un devis.',
    seoImages.advertising,
  ),
  influenceMarketing: createPageSeoConfig(
    'Agence influenceur Maroc | Influence Casablanca',
    'Agence influenceur Maroc : casting, brief et reporting. Nano, micro, macro — tarifs story / reel 2026. We Yan Digital, devis sous 24h.',
    seoImages.influenceMarketing,
  ),
  seo: createPageSeoConfig(
    'Service SEO Maroc | Audit & référencement naturel',
    'Prestation SEO au Maroc : audit technique, on-page, positions et netlinking. Référencement naturel We Yan Digital, devis sous 24h.',
    seoImages.seo,
  ),
  offlineMedia: createPageSeoConfig(
    'Publicité offline Maroc | Affichage & print – We Yan',
    'Média publicité offline : affichage, print, radio et dispositifs phygitaux. Approche omnicanale We Yan Digital Casablanca.',
    seoImages.offlineMedia,
  ),
  projects: createPageSeoConfig(
    'Projets & réalisations Casablanca | We Yan Digital',
    'Projets We Yan Digital à Casablanca : branding, campagnes sociales, design et identités pour marques ambitieuses au Maroc.',
    seoImages.projects,
  ),
  agency: createPageSeoConfig(
    'Agence digitale Casablanca | We Yan Digital',
    'Découvrez We Yan Digital à Casablanca Maarif : vision, méthode et équipe dédiées à la performance et à la créativité digitale.',
    seoImages.agency,
  ),
  contact: createPageSeoConfig(
    'Contact agence digitale Casablanca | We Yan Digital',
    'Contactez We Yan Digital pour branding, site web, SEO ou publicité à Casablanca et au Maroc. Réponse sous 24h ouvrées.',
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
    'Agence SEO Casablanca | Référencement – We Yan',
    'Visibilité Google à Casablanca : audit SEO, technique, contenus locaux et stratégie. We Yan Digital Maarif — audit gratuit.',
    seoImages.seo,
  ),
  creationSiteWebCasablanca: createPageSeoConfig(
    'Création site web Casablanca | We Yan Digital',
    'Création de site web à Casablanca : vitrine, e-commerce et sur-mesure. Délais, prix réalistes et devis gratuit sous 24h.',
    seoImages.services,
  ),
  communityManagementCasablanca: createPageSeoConfig(
    'Community management Casablanca | We Yan Digital',
    'Community management à Casablanca : Instagram, TikTok, LinkedIn, animation et conversion. Agence We Yan Digital, devis 24h.',
    seoImages.contentCreation,
  ),

  blogPrixSiteWebMaroc2026: createPageSeoConfig(
    'Prix site web Maroc 2026 | Tarifs vitrine & e-commerce',
    'Tarifs création site web au Maroc 2026 : vitrine, e-commerce, sur-mesure. Fourchettes MAD et conseils We Yan Digital Casablanca.',
    seoImages.services,
  ),
  blogPrixSeoCasablanca2026: createPageSeoConfig(
    'Prix SEO Casablanca 2026 | Tarifs référencement',
    'Prix SEO à Casablanca 2026 : audit, retainer, freelance vs agence. Fourchettes MAD et guide pour choisir une agence qui ranke.',
    seoImages.seo,
  ),
  blogPrixGoogleAdsMaroc2026: createPageSeoConfig(
    'Prix Google Ads Maroc 2026 | CPC et budgets',
    'Prix Google Ads au Maroc 2026 : CPC Search, Display, YouTube, budgets Casablanca et frais d’agence. Fourchettes MAD.',
    seoImages.advertising,
  ),
  blogPrixMetaAdsCasablanca2026: createPageSeoConfig(
    'Prix Meta Ads Casablanca 2026 | CPC et CPL',
    'Prix Meta Ads à Casablanca 2026 : CPC, CPM, coût par lead WhatsApp, budgets Facebook / Instagram. Fourchettes MAD.',
    seoImages.advertising,
  ),
  blogPrixInfluenceurMaroc2026: createPageSeoConfig(
    'Prix influenceur Maroc 2026 | Story, reel, post',
    'Prix influenceur au Maroc 2026 : nano, micro, macro — story, reel, post en MAD. Fourchettes Casablanca et We Yan Digital.',
    seoImages.influenceMarketing,
  ),
  blogSeoVsSea: createPageSeoConfig(
    'SEO vs SEA Maroc 2026 | Quelle stratégie choisir ?',
    'SEO vs SEA Google Ads à Casablanca : délais, coûts, ROI. La stratégie gagnante We Yan Digital reste le mix SEO + SEA.',
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
  '/blog/branding-creation-marque-maroc': pageSeo.blogBrandingMaroc,
  '/blog/rebranding-exemple-casablanca-2026': pageSeo.blogRebrandingExempleCasablanca,
  '/blog/marketing-digital-tendances-maroc-2026': pageSeo.blogMarketingDigitalMaroc,
  '/conditions-generales': pageSeo.conditionsGenerales,
  '/politique-de-confidentialite': pageSeo.politiqueConfidentialite,
  '/mentions-legales': pageSeo.mentionsLegales,
}
