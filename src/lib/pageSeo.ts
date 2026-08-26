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
    'Agence digitale à Casablanca · Services SEO, Site Web, Branding, Ads | We Yan Digital',
    'We Yan Digital — agence digitale à Casablanca : SEO Maroc, SEA Google Ads, community management, branding, création site web vitrine et e-commerce, influence marketing et publicité offline. Devis gratuit sous 24h pour startups, PME et grands comptes au Maroc.',
    seoImages.services,
  ),
  strategyMarketing: createPageSeoConfig(
    'Agence Branding & Rebranding Casablanca | Stratégie Marketing - We Yan Digital',
    'Agence branding à Casablanca : rebranding, identité de marque, stratégie marketing Maroc. Packs dès 15 000 MAD. Audit gratuit, intervention Rabat, Marrakech, Tanger.',
    seoImages.strategyMarketing,
  ),
  contentCreation: createPageSeoConfig(
    'Création de Contenu & Community Management | We Yan Digital',
    'Découvrez notre service de création de contenu et community management pour produire des visuels premium, animer vos réseaux sociaux et renforcer l’engagement.',
    seoImages.contentCreation,
  ),
  advertising: createPageSeoConfig(
    'Agence Google Ads Maroc & Meta Ads Casablanca | We Yan Digital',
    'Agence Google Ads Maroc et Meta Ads Casablanca : media plan, CPC, tracking ROAS. Campagnes Search, Facebook, Instagram. Devis sous 24h.',
    seoImages.advertising,
  ),
  influenceMarketing: createPageSeoConfig(
    'Agence Influenceur Maroc | Marketing d’Influence Casablanca - We Yan Digital',
    'Agence influenceur Maroc et marketing d’influence Casablanca : casting, brief, reporting. Nano, micro, macro, tarifs story / reel 2026. Devis sous 24h.',
    seoImages.influenceMarketing,
  ),
  seo: createPageSeoConfig(
    'Service SEO Maroc | Audit, optimisation et référencement naturel',
    'Prestation SEO au Maroc : audit technique, optimisation on-page, suivi des positions et netlinking. Service de référencement naturel We Yan Digital, devis sous 24h.',
    seoImages.seo,
  ),
  offlineMedia: createPageSeoConfig(
    'Média Publicité Offline | We Yan Digital',
    'Découvrez notre service média publicité offline pour orchestrer vos campagnes d’affichage, print, radio et dispositifs phygitaux avec une approche omnicanale.',
    seoImages.offlineMedia,
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
  merci: createPageSeoConfig(
    'Votre demande a bien été envoyée | We Yan Digital',
    'Merci pour votre demande. We Yan Digital vous répond sous 24h ouvrées.',
    seoImages.contact,
  ),

  agenceSeoCasablanca: createPageSeoConfig(
    'Agence SEO Casablanca | Référencement local et expert SEO Maroc',
    'Agence SEO à Casablanca : référencement local Google Business, expert SEO Casablanca, audit et accompagnement mensuel. We Yan Digital — devis sous 24h.',
    seoImages.seo,
  ),
  communityManagementCasablanca: createPageSeoConfig(
    'Community Management Casablanca | Contenu et réseaux sociaux',
    'Community management à Casablanca : création de contenu Instagram, TikTok et LinkedIn, animation quotidienne et conversion. Agence We Yan Digital, devis sous 24h.',
    seoImages.contentCreation,
  ),

  blogPrixSiteWebMaroc2026: createPageSeoConfig(
    'Prix site web Maroc 2026 : tarifs création site vitrine, e-commerce',
    'Tarifs création site web au Maroc en 2026 : combien coûte un site vitrine, un e-commerce, un site sur-mesure ? Comparatif prix agence vs freelance, fourchettes détaillées 5 000 → 120 000 MAD, conseils We Yan Digital Casablanca.',
    seoImages.services,
  ),
  blogPrixSeoCasablanca2026: createPageSeoConfig(
    'Prix SEO Casablanca 2026 : tarifs référencement naturel au Maroc',
    'Prix d’un accompagnement SEO à Casablanca en 2026 : audit, retainer mensuel, freelance vs agence, fourchettes MAD honnêtes. Comment passer du tarif à une agence SEO qui ranke vraiment.',
    seoImages.seo,
  ),
  blogPrixGoogleAdsMaroc2026: createPageSeoConfig(
    'Prix Google Ads Maroc 2026 : CPC, budget media et frais d’agence',
    'Prix Google Ads au Maroc en 2026 : CPC Search, Display, YouTube, budgets minimum Casablanca, frais d’agence. Fourchettes MAD et media plan We Yan Digital.',
    seoImages.advertising,
  ),
  blogPrixMetaAdsCasablanca2026: createPageSeoConfig(
    'Prix Meta Ads Casablanca 2026 : CPC, CPL Facebook et Instagram',
    'Prix Meta Ads à Casablanca en 2026 : CPC, CPM, coût par lead WhatsApp, budgets Facebook / Instagram. Fourchettes MAD et agence We Yan Digital.',
    seoImages.advertising,
  ),
  blogPrixInfluenceurMaroc2026: createPageSeoConfig(
    'Prix influenceur Maroc 2026 : tarifs story, reel et post',
    'Prix d’un influenceur au Maroc en 2026 : nano, micro, macro, story, reel, post en MAD. Fourchettes Casablanca et agence We Yan Digital.',
    seoImages.influenceMarketing,
  ),
  blogSeoVsSea: createPageSeoConfig(
    'SEO vs SEA au Maroc : quelle stratégie choisir en 2026 ? | We Yan Digital',
    'SEO vs SEA Google Ads à Casablanca et au Maroc : différences, délais, coûts, ROI. Pourquoi la stratégie gagnante We Yan Digital est toujours SEO + SEA mixte. Devis gratuit Casablanca.',
    seoImages.seo,
  ),
  blogBrandingMaroc: createPageSeoConfig(
    'Comment créer une marque au Maroc en 2026 · Branding Casablanca',
    'Créer une marque au Maroc en 2026 : stratégie de marque, naming, identité visuelle logo, charte graphique, positionnement, lancement. Accompagnement branding We Yan Digital agence à Casablanca.',
    seoImages.strategyMarketing,
  ),
  blogRebrandingExempleCasablanca: createPageSeoConfig(
    'Exemple de rebranding à Casablanca 2026 | We Yan Digital',
    'Cas concret de rebranding à Casablanca en 2026 : audit, positionnement, charte, déploiement digital. Méthode We Yan Digital et lien vers l’agence branding Casablanca.',
    seoImages.strategyMarketing,
  ),
  blogMarketingDigitalMaroc: createPageSeoConfig(
    'Marketing digital au Maroc : tendances, budget et leviers 2026',
    'Les tendances marketing digital au Maroc en 2026 : social commerce TikTok Shop, SEO local Casablanca, IA générative contenu, influence marketing, budget PME. Stratégie digitale complète We Yan Digital.',
    seoImages.contentCreation,
  ),

  // --- Pages légales obligatoires footer (GSC + UX + confiance) ---
  conditionsGenerales: createPageSeoConfig(
    'Conditions Générales de Vente (CGV) · We Yan Digital Maroc',
    'CGV de l\'agence We Yan Digital : commande, devis, paiement MAD, livrables, propriété intellectuelle, responsabilité, résiliation, droit applicable Maroc tribunaux Casablanca. Document contractuel valable août 2026.',
    seoImages.contact,
  ),
  politiqueConfidentialite: createPageSeoConfig(
    'Politique de Confidentialité · RGPD Maroc (CNDP) | We Yan Digital',
    'Politique RGPD et protection des données We Yan Digital : données collectées, finalités, cookies Google Analytics/Meta Pixel, durée conservation, droits CNDP accès/rectification/oubli/portabilité, hébergement sécurisé. Conforme Dahut 09-08 Maroc + RGPD UE.',
    seoImages.contact,
  ),
  mentionsLegales: createPageSeoConfig(
    'Mentions Légales · Éditeur, hébergeur, IP | We Yan Digital Casablanca',
    'Mentions légales site weyandigital.ma : éditeur SARL We Yan Digital Casablanca Maarif RC/IF/ICE, directeur publication, hébergeur OVH Roubaix, propriété intellectuelle marques & contenus, responsabilité éditoriale, contact juridique. Royaume du Maroc.',
    seoImages.contact,
  ),
} as const

export const PAGE_SEO_BY_SLUG: Record<string, PageSeoConfig> = {
  '/': pageSeo.home,
  '/services': pageSeo.services,
  '/services/strategie-marketing-rebranding': pageSeo.strategyMarketing,
  '/services/creation-contenu-community-management': pageSeo.contentCreation,
  '/services/publicite-digitale': pageSeo.advertising,
  '/services/marketing-influence': pageSeo.influenceMarketing,
  '/services/seo': pageSeo.seo,
  '/services/media-publicite-offline': pageSeo.offlineMedia,
  '/projets': pageSeo.projects,
  '/agence': pageSeo.agency,
  '/contact': pageSeo.contact,
  '/merci': pageSeo.merci,
  '/agence-seo-casablanca': pageSeo.agenceSeoCasablanca,
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
