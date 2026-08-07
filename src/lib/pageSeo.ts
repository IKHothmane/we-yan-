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
    'Stratégie Marketing & Rebranding | We Yan Digital',
    'Découvrez notre service Stratégie Marketing & Rebranding pour clarifier votre positionnement, moderniser votre image et accélérer votre croissance digitale.',
    seoImages.strategyMarketing,
  ),
  contentCreation: createPageSeoConfig(
    'Création de Contenu & Community Management | We Yan Digital',
    'Découvrez notre service de création de contenu et community management pour produire des visuels premium, animer vos réseaux sociaux et renforcer l’engagement.',
    seoImages.contentCreation,
  ),
  advertising: createPageSeoConfig(
    'Publicité Digitale (Meta Ads & Google Ads) | We Yan Digital',
    'Découvrez notre service de publicité digitale pour piloter vos campagnes Meta Ads et Google Ads, optimiser vos budgets et maximiser votre retour sur investissement.',
    seoImages.advertising,
  ),
  influenceMarketing: createPageSeoConfig(
    'Marketing d’Influence | We Yan Digital',
    'Découvrez notre service de marketing d’influence pour connecter votre marque aux bons créateurs, construire des récits authentiques et amplifier votre impact.',
    seoImages.influenceMarketing,
  ),
  seo: createPageSeoConfig(
    'Référencement Naturel (SEO) | We Yan Digital',
    'Découvrez notre service SEO pour améliorer votre visibilité Google, renforcer votre autorité et transformer le trafic organique en croissance durable.',
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

  agenceSeoCasablanca: createPageSeoConfig(
    'Agence SEO à Casablanca · Référencement naturel Maroc 2026 | We Yan Digital',
    'Agence SEO à Casablanca (Maroc) spécialisée en référencement naturel local et national. Nous vous mettons premier sur Google : audit technique, SEO local Google Business, stratégie éditoriale, netlinking marocain. Devis SEO gratuit sous 24h.',
    seoImages.seo,
  ),
  communityManagementCasablanca: createPageSeoConfig(
    'Community Management Casablanca · Réseaux sociaux Maroc | We Yan Digital',
    'Community Management à Casablanca : animation Instagram, Facebook, LinkedIn, TikTok, création contenu premium (reels, photos, carrousels), community manager dédié, publicité Meta Ads + TikTok Ads, KPIs mensuels. Agence community manager Maroc.',
    seoImages.contentCreation,
  ),

  blogPrixSiteWebMaroc2026: createPageSeoConfig(
    'Prix site web Maroc 2026 : tarifs création site vitrine, e-commerce',
    'Tarifs création site web au Maroc en 2026 : combien coûte un site vitrine, un e-commerce, un site sur-mesure ? Comparatif prix agence vs freelance, fourchettes détaillées 5 000 → 120 000 MAD, conseils We Yan Digital Casablanca.',
    seoImages.services,
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
