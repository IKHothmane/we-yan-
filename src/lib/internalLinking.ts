export type Cluster =
  | 'home'
  | 'hub'
  | 'seo'
  | 'branding'
  | 'creation'
  | 'ads'
  | 'conversion'
  | 'legal'

export type LienSortant = {
  cible: string
  ancre: string
  contexte_avant: string
  contexte_apres: string
  pourquoi: string
}

export type PageLinking = {
  slug: string
  titre: string
  intention: string
  mot_cle_principal: string
  cluster_semantique: Cluster
  pageRank_voulu: number
  breadcrumb: Array<{ label: string; to?: string }>
  liens_sortants: LienSortant[]
}

const UNIVERSAL_CLUSTERS: Cluster[] = ['home', 'hub', 'conversion']

export const PAGES_LINKING: PageLinking[] = [
  {
    slug: '/',
    titre: 'Accueil',
    intention: 'Page de rang 10 : poser We Yan Digital Casablanca et pousser vers les 3 piliers + contact.',
    mot_cle_principal: 'agence digitale casablanca',
    cluster_semantique: 'home',
    pageRank_voulu: 10,
    breadcrumb: [{ label: 'Accueil' }],
    liens_sortants: [
      {
        cible: '/agence-seo-casablanca',
        ancre: 'agence SEO à Casablanca',
        contexte_avant: 'Pour apparaître en premier sur Google au Maroc, travaillez avec une',
        contexte_apres: 'qui pilote audit, SEO local et contenu utile.',
        pourquoi: 'Pilier SEO — page money long tail',
      },
      {
        cible: '/community-management-casablanca',
        ancre: 'community management à Casablanca',
        contexte_avant: 'Pour animer Instagram, TikTok et LinkedIn au quotidien, notre',
        contexte_apres: 'produit le contenu utile et convertit vraiment l’audience locale.',
        pourquoi: 'Pilier création / social',
      },
      {
        cible: '/services/strategie-marketing-rebranding',
        ancre: 'stratégie marketing et rebranding',
        contexte_avant: 'Avant les campagnes, clarifiez votre marque avec une',
        contexte_apres: 'pensée pour le marché marocain et vos clients à Casablanca.',
        pourquoi: 'Pilier branding',
      },
      {
        cible: '/contact',
        ancre: 'demander un devis gratuit',
        contexte_avant: 'Un projet digital à Casablanca ? Vous pouvez',
        contexte_apres: '— notre équipe vous répond sous 24h ouvrées à Maarif.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/services',
    titre: 'Services',
    intention: 'Hub : ranker sur agence digitale Casablanca / services, puis envoyer vers les piliers.',
    mot_cle_principal: 'agence digitale casablanca services',
    cluster_semantique: 'hub',
    pageRank_voulu: 8,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services agence digitale Casablanca' },
    ],
    liens_sortants: [
      {
        cible: '/agence-seo-casablanca',
        ancre: 'référencement naturel SEO à Casablanca',
        contexte_avant: 'Le levier organique d’une entreprise marocaine se joue sur le',
        contexte_apres: 'avec un plan d’action local, national et un suivi mensuel.',
        pourquoi: 'Silo SEO',
      },
      {
        cible: '/community-management-casablanca',
        ancre: 'création de contenu et community management',
        contexte_avant: 'La visibilité sociale d’une marque à Casablanca passe par la',
        contexte_apres: 'conçue pour des marques qui vendent réellement au Maroc.',
        pourquoi: 'Silo création',
      },
      {
        cible: '/contact',
        ancre: 'parler de votre projet',
        contexte_avant: 'Pour un devis packagé selon vos priorités métier à Casablanca,',
        contexte_apres: 'avec l’équipe We Yan Digital, réponse sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/services/seo',
    titre: 'Référencement Naturel (SEO)',
    intention: 'Vendre le service SEO et renforcer le cluster vers la page long tail Casablanca.',
    mot_cle_principal: 'referencement naturel maroc',
    cluster_semantique: 'seo',
    pageRank_voulu: 8,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Référencement naturel SEO Maroc' },
    ],
    liens_sortants: [
      {
        cible: '/agence-seo-casablanca',
        ancre: 'agence SEO à Casablanca',
        contexte_avant: 'Pour un accompagnement local (Maarif, pack Google Business), voyez notre',
        contexte_apres: 'dédiée aux entreprises marocaines qui veulent ranker localement.',
        pourquoi: 'Pousser le pilier long tail',
      },
      {
        cible: '/blog/seo-vs-sea-maroc',
        ancre: 'SEO vs SEA au Maroc',
        contexte_avant: 'Pour choisir le bon mix d’acquisition au Maroc, lisez',
        contexte_apres: 'avec des budgets réels en MAD et des délais honnêtes.',
        pourquoi: 'Article du même cluster',
      },
      {
        cible: '/blog/prix-seo-casablanca-2026',
        ancre: 'prix d’un accompagnement SEO à Casablanca en 2026',
        contexte_avant: 'Pour calibrer le budget avant de signer un contrat, lisez',
        contexte_apres: 'puis voyez comment une agence locale transforme ce budget en positions.',
        pourquoi: 'Article PR4 du silo : prix → money page',
      },
      {
        cible: '/contact',
        ancre: 'demander un audit SEO gratuit',
        contexte_avant: 'Pour savoir où vous en êtes face à vos concurrents à Casablanca,',
        contexte_apres: 'nos experts analysent votre site en 24h et chiffrent le plan.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/agence-seo-casablanca',
    titre: 'Agence SEO Casablanca',
    intention: 'Ranker sur « agence SEO Casablanca » et convertir (page money).',
    mot_cle_principal: 'agence seo casablanca',
    cluster_semantique: 'seo',
    pageRank_voulu: 9,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Agence SEO Casablanca' },
    ],
    liens_sortants: [
      {
        cible: '/services/seo',
        ancre: 'méthode SEO We Yan Digital',
        contexte_avant: 'Le détail opérationnel, mois par mois, est décrit dans notre',
        contexte_apres: ': data, contenus éditoriaux, netlinking et SEO local.',
        pourquoi: 'Pilier service du silo',
      },
      {
        cible: '/blog/seo-vs-sea-maroc',
        ancre: 'comparatif SEO et Google Ads au Maroc',
        contexte_avant: 'Beaucoup de clients mixent organique et payant : voir le',
        contexte_apres: 'avant d’arbitrer le budget organique et le budget Ads.',
        pourquoi: 'Article du cluster',
      },
      {
        cible: '/contact',
        ancre: 'demander un audit SEO à Casablanca',
        contexte_avant: 'Pour un plan d’action chiffré sur vos mots-clés Casablanca,',
        contexte_apres: '— réponse d’un expert SEO sous 24h ouvrées à Maarif.',
        pourquoi: 'Conversion, ne pas diluer vers d’autres silos',
      },
    ],
  },
  {
    slug: '/services/strategie-marketing-rebranding',
    titre: 'Stratégie Marketing & Rebranding',
    intention: 'Ranker sur branding / rebranding Maroc et vendre le positionnement de marque.',
    mot_cle_principal: 'rebranding casablanca',
    cluster_semantique: 'branding',
    pageRank_voulu: 8,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Stratégie marketing et rebranding Casablanca' },
    ],
    liens_sortants: [
      {
        cible: '/blog/branding-creation-marque-maroc',
        ancre: 'créer une marque au Maroc',
        contexte_avant: 'Le parcours complet (naming, identité, lancement) est dans le guide',
        contexte_apres: 'rédigé pour 2026, avec budgets et étapes concrètes au Maroc.',
        pourquoi: 'Article du silo branding',
      },
      {
        cible: '/agence',
        ancre: 'l’agence We Yan Digital',
        contexte_avant: 'La méthode branding, du positionnement au lancement, est portée par',
        contexte_apres: 'basée à Casablanca Maarif, au plus près de vos équipes.',
        pourquoi: 'Hub / preuve',
      },
      {
        cible: '/contact',
        ancre: 'lancer un rebranding',
        contexte_avant: 'Pour cadrer positionnement, naming et identité visuelle au Maroc,',
        contexte_apres: 'avec un atelier de marque d’une demi-journée à Casablanca.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/services/creation-contenu-community-management',
    titre: 'Création de Contenu & Community Management',
    intention: 'Vendre contenu + CM et renvoyer vers la page long tail Casablanca.',
    mot_cle_principal: 'creation de contenu maroc',
    cluster_semantique: 'creation',
    pageRank_voulu: 8,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Création de contenu et community management' },
    ],
    liens_sortants: [
      {
        cible: '/community-management-casablanca',
        ancre: 'community manager à Casablanca',
        contexte_avant: 'Le dispositif local (Instagram, TikTok, Meta Ads) est détaillé pour un',
        contexte_apres: 'dédié aux marques marocaines qui publient chaque semaine.',
        pourquoi: 'Pilier long tail',
      },
      {
        cible: '/community-management-casablanca',
        ancre: 'community management à Casablanca',
        contexte_avant: 'Le dispositif complet avec planning éditorial et reporting est détaillé pour un',
        contexte_apres: 'qui gère Instagram, TikTok et LinkedIn au quotidien.',
        pourquoi: 'Pilier money creation - renforcer silo avant de sortir',
      },
      {
        cible: '/contact',
        ancre: 'demander un calendrier éditorial',
        contexte_avant: 'Pour un mois de contenus, animation et reporting,',
        contexte_apres: 'gratuitement : calendrier, formats et estimation de charge.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/community-management-casablanca',
    titre: 'Community Management Casablanca',
    intention: 'Ranker sur « community management Casablanca » et convertir.',
    mot_cle_principal: 'community management casablanca',
    cluster_semantique: 'creation',
    pageRank_voulu: 9,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Community management Casablanca' },
    ],
    liens_sortants: [
      {
        cible: '/services/creation-contenu-community-management',
        ancre: 'création de contenu premium',
        contexte_avant: 'Reels, photos et charte visuelle sont dans notre offre',
        contexte_apres: 'pour Instagram, TikTok et LinkedIn, du brief au reporting.',
        pourquoi: 'Pilier du silo',
      },
      {
        cible: '/blog/prix-site-web-maroc-2026',
        ancre: 'coût d’un site et d’une présence digitale',
        contexte_avant: 'Le budget CM se lit aussi via le',
        contexte_apres: 'en 2026, pour caler site, contenus et budget d’animation.',
        pourquoi: 'Article hub (autorisé)',
      },
      {
        cible: '/contact',
        ancre: 'recruter un community manager Casablanca',
        contexte_avant: 'Pour un devis community management plus Ads à Casablanca,',
        contexte_apres: '— réponse d’un community manager sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/services/publicite-digitale',
    titre: 'Publicité Digitale',
    intention: 'Vendre Meta Ads & Google Ads Maroc et rester dans le silo ads.',
    mot_cle_principal: 'agence google ads maroc',
    cluster_semantique: 'ads',
    pageRank_voulu: 8,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Publicité digitale Meta Ads et Google Ads' },
    ],
    liens_sortants: [
      {
        cible: '/blog/marketing-digital-tendances-maroc-2026',
        ancre: 'tendances ads et social commerce au Maroc',
        contexte_avant: 'Pour calibrer Meta Ads et Google Ads en 2026, lisez',
        contexte_apres: 'avec budgets PME, TikTok Shop et leviers d’acquisition mesurables.',
        pourquoi: 'Article du silo ads',
      },
      {
        cible: '/services/marketing-influence',
        ancre: 'marketing d’influence',
        contexte_avant: 'Les campagnes social ads se couplent souvent au',
        contexte_apres: 'pour la preuve sociale et les UGC qui convertissent vraiment.',
        pourquoi: 'Même silo ads',
      },
      {
        cible: '/contact',
        ancre: 'lancer une campagne Google Ads',
        contexte_avant: 'Pour un media plan Google et Meta à Casablanca,',
        contexte_apres: 'avec suivi des conversions, ROAS et reporting hebdomadaire.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/services/marketing-influence',
    titre: 'Marketing d’Influence',
    intention: 'Vendre l’influence Maroc dans le silo ads / acquisition.',
    mot_cle_principal: 'marketing influence maroc',
    cluster_semantique: 'ads',
    pageRank_voulu: 6,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Marketing d’influence Maroc' },
    ],
    liens_sortants: [
      {
        cible: '/services/publicite-digitale',
        ancre: 'publicité Meta Ads et Google Ads',
        contexte_avant: 'L’influence marocaine amplifie une campagne déjà mesurable via la',
        contexte_apres: 'déjà trackée, pour ne pas acheter de la notoriété à l’aveugle.',
        pourquoi: 'Silo ads',
      },
      {
        cible: '/blog/marketing-digital-tendances-maroc-2026',
        ancre: 'tendances influence et social commerce',
        contexte_avant: 'Le contexte 2026 est dans notre article sur les',
        contexte_apres: 'au Maroc, TikTok Shop compris, pour cadrer le brief créateurs.',
        pourquoi: 'Article du cluster',
      },
      {
        cible: '/contact',
        ancre: 'brief influenceurs Maroc',
        contexte_avant: 'Pour un casting de créateurs et un brief influence,',
        contexte_apres: 'avec l’équipe We Yan, contrats et KPIs inclus.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/services/media-publicite-offline',
    titre: 'Média Publicité Offline',
    intention: 'Compléter l’acquisition (affichage, print) sans casser le silo ads.',
    mot_cle_principal: 'publicite offline maroc',
    cluster_semantique: 'ads',
    pageRank_voulu: 5,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Média publicité offline Maroc' },
    ],
    liens_sortants: [
      {
        cible: '/services/publicite-digitale',
        ancre: 'campagnes digitales Meta et Google',
        contexte_avant: 'L’affichage urbain et le print fonctionnent encore mieux lorsqu’ils sont synchronisés avec des',
        contexte_apres: 'qui captent l’audience sur mobile au moment même où elle voit l’affiche.',
        pourquoi: 'Silo ads',
      },
      {
        cible: '/services/marketing-influence',
        ancre: 'marketing d’influence',
        contexte_avant: 'Affichage urbain et print se couplent aussi au',
        contexte_apres: 'pour une présence 360° entre rue, print et réseaux sociaux.',
        pourquoi: 'Silo ads',
      },
      {
        cible: '/contact',
        ancre: 'plan média Casablanca',
        contexte_avant: 'Pour un plan d’affichage, radio ou print aligné sur vos campagnes digitales,',
        contexte_apres: 'notre équipe media vous répond avec un devis sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/blog/prix-site-web-maroc-2026',
    titre: 'Prix site web Maroc 2026',
    intention: 'Informer sur les tarifs, puis pousser vers services / contact (pas un silo isolé).',
    mot_cle_principal: 'prix site web maroc',
    cluster_semantique: 'hub',
    pageRank_voulu: 4,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Prix site web Maroc 2026' },
    ],
    liens_sortants: [
      {
        cible: '/services',
        ancre: 'création de site avec une agence à Casablanca',
        contexte_avant: 'Après le comparatif de prix, voyez plutôt la',
        contexte_apres: 'plutôt qu’un freelance isolé, avec SEO et conversion inclus.',
        pourquoi: 'Pilier hub',
      },
      {
        cible: '/blog/branding-creation-marque-maroc',
        ancre: 'créer sa marque avant le site',
        contexte_avant: 'Un site cher sans positionnement de marque rate souvent :',
        contexte_apres: 'd’abord le naming, l’offre et la promesse, ensuite le site.',
        pourquoi: 'Article voisin',
      },
      {
        cible: '/contact',
        ancre: 'demander un devis site web',
        contexte_avant: 'Pour un chiffrage réel en MAD selon vos pages et modules,',
        contexte_apres: 'nous envoyons un devis détaillé sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/blog/seo-vs-sea-maroc',
    titre: 'SEO vs SEA Maroc',
    intention: 'Informer, puis pousser vers agence SEO et publicité digitale.',
    mot_cle_principal: 'seo vs sea maroc',
    cluster_semantique: 'seo',
    pageRank_voulu: 4,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'SEO vs SEA au Maroc' },
    ],
    liens_sortants: [
      {
        cible: '/agence-seo-casablanca',
        ancre: 'agence SEO à Casablanca',
        contexte_avant: 'Le levier organique se construit durablement avec une',
        contexte_apres: 'sur trois à six mois, avec un plan local Casablanca.',
        pourquoi: 'Pilier du cluster',
      },
      {
        cible: '/services/seo',
        ancre: 'offre référencement naturel',
        contexte_avant: 'Le détail méthodologique, audits et silos, est dans l’',
        contexte_apres: 'We Yan Digital, du technique au contenu éditorial.',
        pourquoi: 'Pilier service',
      },
      {
        cible: '/contact',
        ancre: 'audit SEO + plan Ads',
        contexte_avant: 'Pour un mix SEO plus Ads chiffré en MAD,',
        contexte_apres: 'personnalisé à votre secteur et à votre panier moyen.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/blog/prix-seo-casablanca-2026',
    titre: 'Prix SEO Casablanca 2026',
    intention: 'Informer sur les tarifs SEO, puis glisser vers la money page agence SEO Casablanca.',
    mot_cle_principal: 'prix seo casablanca',
    cluster_semantique: 'seo',
    pageRank_voulu: 4,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Prix SEO Casablanca 2026' },
    ],
    liens_sortants: [
      {
        cible: '/agence-seo-casablanca',
        ancre: 'agence SEO à Casablanca',
        contexte_avant: 'Une fois le budget cadré, le levier n’est plus le tarif : c’est une',
        contexte_apres: 'qui convertit ce prix en audit, contenus et positions Google locales.',
        pourquoi: 'Glissement prix → agence, boucle du silo SEO',
      },
      {
        cible: '/services/seo',
        ancre: 'offre de référencement naturel',
        contexte_avant: 'Le détail des livrables techniques et éditoriaux est dans notre',
        contexte_apres: 'avec méthode, calendrier et indicateurs de positions au Maroc.',
        pourquoi: 'Pilier service du même cluster',
      },
      {
        cible: '/contact',
        ancre: 'demander un devis SEO à Casablanca',
        contexte_avant: 'Pour un chiffrage réel selon votre concurrence locale,',
        contexte_apres: 'nous envoyons un plan d’action et un tarif sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/blog/branding-creation-marque-maroc',
    titre: 'Créer une marque au Maroc',
    intention: 'Informer sur le branding, puis pousser vers rebranding / contact.',
    mot_cle_principal: 'creer une marque maroc',
    cluster_semantique: 'branding',
    pageRank_voulu: 3,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Créer une marque au Maroc' },
    ],
    liens_sortants: [
      {
        cible: '/services/strategie-marketing-rebranding',
        ancre: 'stratégie marketing et rebranding',
        contexte_avant: 'Pour passer du guide à l’exécution concrète, notre',
        contexte_apres: 'cadre positionnement, identité et plan de lancement au Maroc.',
        pourquoi: 'Pilier du silo',
      },
      {
        cible: '/agence',
        ancre: 'équipe We Yan Digital',
        contexte_avant: 'Le travail de marque est mené par l’',
        contexte_apres: 'à Casablanca Maarif, avec des ateliers en présentiel.',
        pourquoi: 'Preuve / hub',
      },
      {
        cible: '/contact',
        ancre: 'atelier de marque',
        contexte_avant: 'Pour démarrer naming, charte graphique et univers de marque,',
        contexte_apres: 'nous organisons un atelier d’une demi-journée à Casablanca.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/blog/marketing-digital-tendances-maroc-2026',
    titre: 'Marketing digital Maroc 2026',
    intention: 'Informer sur les tendances, puis pousser ads / CM / contact.',
    mot_cle_principal: 'marketing digital maroc 2026',
    cluster_semantique: 'ads',
    pageRank_voulu: 3,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services' },
      { label: 'Marketing digital au Maroc 2026' },
    ],
    liens_sortants: [
      {
        cible: '/services/publicite-digitale',
        ancre: 'agence Google Ads et Meta Ads',
        contexte_avant: 'Pour activer ces tendances en campagnes, voyez notre',
        contexte_apres: 'à Casablanca, avec tracking, ROAS et reporting hebdomadaire.',
        pourquoi: 'Pilier ads',
      },
      {
        cible: '/services/marketing-influence',
        ancre: 'campagnes d’influence au Maroc',
        contexte_avant: 'TikTok, UGC et social commerce se déclinent aussi en',
        contexte_apres: 'avec brief, contrats et KPIs mesurables dès le premier mois.',
        pourquoi: 'Silo ads',
      },
      {
        cible: '/contact',
        ancre: 'plan digital 2026',
        contexte_avant: 'Pour un budget 2026 et un calendrier d’activation,',
        contexte_apres: 'nous chiffrons SEO, ads et contenus selon votre secteur.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/projets',
    titre: 'Projets',
    intention: 'Preuve sociale PR6 : redistribuer le jus vers les money pages SEO et CM, puis convertir.',
    mot_cle_principal: 'agence digitale casablanca realisations',
    cluster_semantique: 'hub',
    pageRank_voulu: 6,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Projets We Yan Digital Casablanca' },
    ],
    liens_sortants: [
      {
        cible: '/agence-seo-casablanca',
        ancre: 'projets SEO à Casablanca',
        contexte_avant: 'Parmi nos réalisations pour des marques marocaines, nos',
        contexte_apres: 'ont généré +180% de trafic organique en 6 mois.',
        pourquoi: 'Redistribuer PR6 du portfolio vers money page SEO',
      },
      {
        cible: '/community-management-casablanca',
        ancre: 'nos campagnes social media',
        contexte_avant: 'Et côté contenu social, stories, reels et community,',
        contexte_apres: 'ont dépassé deux millions de vues organiques en douze mois.',
        pourquoi: 'Redistribuer PR6 vers money page CM',
      },
      {
        cible: '/services',
        ancre: 'services de l’agence',
        contexte_avant: 'Ces livrables du portfolio We Yan correspondent aux',
        contexte_apres: 'SEO, ads, contenu et branding proposés à Casablanca.',
        pourquoi: 'Hub',
      },
      {
        cible: '/contact',
        ancre: 'demander une étude de cas',
        contexte_avant: 'Pour un projet similaire au vôtre, à Casablanca ou au Maroc,',
        contexte_apres: 'nous envoyons un dossier et un devis sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/agence',
    titre: 'Agence',
    intention: 'Confiance / E-E-A-T, puis contact. Pas une page de listing de services.',
    mot_cle_principal: 'agence we yan digital casablanca',
    cluster_semantique: 'hub',
    pageRank_voulu: 6,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Agence We Yan Digital Casablanca' },
    ],
    liens_sortants: [
      {
        cible: '/projets',
        ancre: 'réalisations',
        contexte_avant: 'La méthode We Yan se voit concrètement dans nos',
        contexte_apres: 'SEO, social et campagnes livrées pour des marques marocaines.',
        pourquoi: 'Hub',
      },
      {
        cible: '/contact',
        ancre: 'rencontrer l’équipe à Casablanca',
        contexte_avant: 'Pour un premier échange sans engagement, vous pouvez',
        contexte_apres: 'au studio Maarif, avec une réponse sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/contact',
    titre: 'Contact',
    intention: 'Page de conversion : ne doit PAS donner de jus ailleurs.',
    mot_cle_principal: 'contact agence digitale casablanca',
    cluster_semantique: 'conversion',
    pageRank_voulu: 7,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Contact We Yan Digital' },
    ],
    liens_sortants: [],
  },
  {
    slug: '/merci',
    titre: 'Merci',
    intention: 'Page de conversion Google Ads : tracker la demande, zéro lien de jus.',
    mot_cle_principal: '',
    cluster_semantique: 'conversion',
    pageRank_voulu: 1,
    breadcrumb: [{ label: 'Accueil', to: '/' }, { label: 'Demande envoyée' }],
    liens_sortants: [],
  },
  {
    slug: '/conditions-generales',
    titre: 'CGV',
    intention: 'Page légale, PageRank faible, pas de maillage commercial.',
    mot_cle_principal: '',
    cluster_semantique: 'legal',
    pageRank_voulu: 1,
    breadcrumb: [{ label: 'Accueil', to: '/' }, { label: 'Conditions générales' }],
    liens_sortants: [],
  },
  {
    slug: '/politique-de-confidentialite',
    titre: 'Confidentialité',
    intention: 'Page légale RGPD / CNDP.',
    mot_cle_principal: '',
    cluster_semantique: 'legal',
    pageRank_voulu: 1,
    breadcrumb: [{ label: 'Accueil', to: '/' }, { label: 'Politique de confidentialité' }],
    liens_sortants: [],
  },
  {
    slug: '/mentions-legales',
    titre: 'Mentions légales',
    intention: 'Page légale éditeur.',
    mot_cle_principal: '',
    cluster_semantique: 'legal',
    pageRank_voulu: 1,
    breadcrumb: [{ label: 'Accueil', to: '/' }, { label: 'Mentions légales' }],
    liens_sortants: [],
  },
]

export const FOOTER_PILIERS = [
  { to: '/agence-seo-casablanca', label: 'Agence SEO Casablanca' },
  { to: '/community-management-casablanca', label: 'Community Management Casablanca' },
  { to: '/services/strategie-marketing-rebranding', label: 'Stratégie & Rebranding' },
] as const

function normalizePath(pathname: string) {
  if (pathname === '/') return '/'
  return pathname.replace(/\/+$/, '')
}

export function getPageLinking(pathname: string) {
  const slug = normalizePath(pathname)
  return PAGES_LINKING.find((page) => page.slug === slug)
}

const SITE_URL = 'https://weyandigital.ma'

export function buildPageDocumentTitle(page: PageLinking) {
  if (page.slug === '/') {
    return 'We Yan Digital | Agence digitale Casablanca'
  }
  const keywordPhrase = page.titre.replace(/\s+Casablanca$/, ' à Casablanca')
  if (page.mot_cle_principal && keywordPhrase !== page.titre) {
    return `${page.titre} | We Yan Digital - ${keywordPhrase}`
  }
  return `${page.titre} | We Yan Digital`
}

export function buildPageMetaDescription(page: PageLinking) {
  return page.intention
}

export function buildPageCanonical(page: PageLinking) {
  return page.slug === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.slug}`
}

export function buildBreadcrumbJsonLd(page: PageLinking) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: page.breadcrumb.map((item, index) => {
      const isLast = index === page.breadcrumb.length - 1
      const path = isLast ? page.slug : item.to || '/'
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `${SITE_URL}${path === '/' ? '/' : path}`,
      }
    }),
  }
}

export function countWords(text: string) {
  return String(text || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
}

export function validateInternalLinks() {
  const bySlug = new Map(PAGES_LINKING.map((page) => [page.slug, page]))
  const errors: string[] = []

  for (const page of PAGES_LINKING) {
    if (page.cluster_semantique === 'home' && page.liens_sortants.length > 8) {
      errors.push(`[maillage] Home a ${page.liens_sortants.length} liens contenu (max 8).`)
    }
    if (page.cluster_semantique === 'conversion' && page.liens_sortants.length > 0) {
      errors.push(`[maillage] ${page.slug} est une page conversion : pas de jus sortant.`)
    }
    for (const lien of page.liens_sortants) {
      const avant = countWords(lien.contexte_avant)
      const apres = countWords(lien.contexte_apres)
      if (avant < 8) {
        errors.push(`${page.slug} → ${lien.cible} : contexte_avant a ${avant} mot(s) (min 8) — « ${lien.contexte_avant} »`)
      }
      if (apres < 8) {
        errors.push(`${page.slug} → ${lien.cible} : contexte_apres a ${apres} mot(s) (min 8) — « ${lien.contexte_apres} »`)
      }
      const cible = bySlug.get(lien.cible)
      if (!cible) {
        errors.push(`${page.slug} → ${lien.cible} introuvable.`)
        continue
      }
      const same = page.cluster_semantique === cible.cluster_semantique
      const allowed = UNIVERSAL_CLUSTERS.includes(cible.cluster_semantique) || UNIVERSAL_CLUSTERS.includes(page.cluster_semantique)
      if (!same && !allowed) {
        errors.push(
          `ALERTE SILO: ${page.slug} (${page.cluster_semantique}) → ${lien.cible} (${cible.cluster_semantique})`,
        )
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`[maillage] Build bloqué.\n- ${errors.join('\n- ')}`)
  }
}
