import { stripTrailingSlash, withTrailingSlash } from './paths'

export { withTrailingSlash } from './paths'

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
  title_serp?: string
  faq?: Array<{ q: string; r: string }>
  breadcrumb: Array<{ label: string; to?: string }>
  liens_sortants: LienSortant[]
}

const UNIVERSAL_CLUSTERS: Cluster[] = ['home', 'hub', 'conversion']

const MONEY_SLUGS = [
  '/agence-seo-casablanca',
  '/community-management-casablanca',
  '/services/strategie-marketing-rebranding',
  '/services/publicite-digitale',
  '/services/marketing-influence',
]

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
    intention: 'Vendre le service SEO (audit, prestation, optimisation) et renvoyer vers l’agence locale Casablanca.',
    mot_cle_principal: 'referencement naturel maroc',
    cluster_semantique: 'seo',
    pageRank_voulu: 8,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
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
    intention: 'Ranker sur agence SEO Casablanca / expert SEO Casablanca, distinct du service SEO générique.',
    mot_cle_principal: 'agence seo casablanca',
    cluster_semantique: 'seo',
    pageRank_voulu: 9,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
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
    titre: 'Agence Branding & Rebranding Casablanca',
    intention: 'Ranker sur « agence branding casablanca » et convertir (page money).',
    mot_cle_principal: 'agence branding casablanca',
    cluster_semantique: 'branding',
    pageRank_voulu: 9,
    title_serp: 'Agence Branding & Rebranding Casablanca | Stratégie Marketing - We Yan Digital',
    faq: [
      {
        q: 'Quelle est la différence entre branding et rebranding ?',
        r: 'Le branding construit une marque qui n’existe pas encore : nom, promesse, identité de marque, premiers points de contact. Le rebranding corrige une marque déjà en marché — perception datée, fusion, nouveau positionnement, ou décalage avec Casablanca et le Maroc 2026. Chez We Yan Digital, les deux passent par un audit, une stratégie, puis une identité visuelle. On ne « change pas de logo » pour le plaisir : on décide d’abord ce que la marque doit dire, ensuite on dessine.',
      },
      {
        q: 'Combien de temps dure un rebranding à Casablanca ?',
        r: 'Un pack Starter (logo + charte) se livre en 3 à 5 semaines, avec ateliers à Maarif. Un Growth (identité + site + community) prend 8 à 12 semaines. Un Premium (SEO + Ads + déploiement) s’étale sur 4 à 6 mois, le temps d’aligner tous les points de contact. Le délai dépend surtout de vos validations internes : plus l’équipe est claire, plus c’est rapide.',
      },
      {
        q: 'Quel est le prix d’une agence branding à Casablanca ?',
        r: 'Chez We Yan Digital, le Starter démarre à 15 000 MAD HT (logo + charte). Le Growth (site + community management) est à 35 000 MAD HT. Le Premium (SEO + Ads + lancement) est à 70 000 MAD HT. Devis détaillé sous 24h, sans pack caché. Ces tarifs 2026 couvrent Casablanca, Rabat, Marrakech et Tanger. Un logo à 2 000 MAD n’inclut ni positionnement ni déploiement : comparez le livrable, pas le chiffre.',
      },
      {
        q: 'Faut-il refaire son site lors d’un rebranding ?',
        r: 'Pas toujours. Si le site est lent, non SEO, ou visuellement déconnecté de la nouvelle charte, oui. Sinon on peut d’abord poser l’identité, puis migrer le site. Un site cher sans positionnement rate : d’abord la marque, ensuite les pages. Le pack Growth inclut déjà un site vitrine aligné. Le Premium ajoute le SEO pour que Google voie la même promesse que vos visiteurs.',
      },
      {
        q: 'Une PME à Casablanca a-t-elle besoin d’un rebranding ?',
        r: 'Oui, dès que vos devis se comparent au prix, que vos équipes expliquent mal l’offre, ou que votre concurrent Maarif / Anfa paraît plus clair. Le rebranding n’est pas réservé aux grands comptes : c’est un levier de conversion locale. Une TPE food, une clinique, un cabinet B2B : dès que le client hésite à cause de l’image, pas du métier, il faut recadrer.',
      },
      {
        q: 'Rebranding ou community management : par quoi commencer ?',
        r: 'Si votre promesse n’est pas claire, commencez par le branding. Si la marque est claire mais invisible sur Instagram et TikTok, commencez par le community management. Les deux ensemble évitent de publier une identité qui n’existe pas encore. Le pack Growth couple les deux. Un community manager seul ne répare pas un positionnement flou ; une charte seule ne remplit pas le feed.',
      },
      {
        q: 'Intervenez-vous à Rabat, Marrakech et Tanger ?',
        r: 'Oui. L’agence est basée à Casablanca Maarif, avec ateliers en présentiel. Nous accompagnons aussi Rabat, Marrakech, Tanger et le reste du Maroc en visio, avec la même méthode et les mêmes livrables. Le signal local (Google, vitrine, langue) s’adapte à votre ville ; le process reste We Yan : audit, stratégie, identité, déploiement.',
      },
      {
        q: 'Comment se passe un audit branding gratuit ?',
        r: 'Vous remplissez le formulaire contact. Sous 24h ouvrées, un humain vous rappelle : perception actuelle, concurrence Casa, et 3 chantiers priorisés. Sans engagement. L’audit oriente ensuite Starter, Growth ou Premium. Préparez site, réseaux, et 3 concurrents. Plus vous êtes factuels, plus la reco est utile — ce n’est pas un appel commercial générique.',
      },
    ],
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
      { label: 'Agence branding Casablanca' },
    ],
    liens_sortants: [
      {
        cible: '/agence-seo-casablanca',
        ancre: 'agence digitale à Casablanca',
        contexte_avant: 'We Yan Digital n’est pas qu’une studio graphique : c’est une',
        contexte_apres: 'qui aligne marque, Google et conversion sur le marché marocain.',
        pourquoi: 'Pyramide : money branding pousse money SEO',
      },
      {
        cible: '/community-management-casablanca',
        ancre: 'community management à Casablanca',
        contexte_avant: 'Une charte sans animation quotidienne s’éteint : couplez le rebranding au',
        contexte_apres: 'pour que logo, reels et stories parlent la même langue.',
        pourquoi: 'Pyramide : money branding pousse money CM',
      },
      {
        cible: '/projets',
        ancre: 'réalisations rebranding',
        contexte_avant: 'La méthode de rebranding se lit concrètement dans nos',
        contexte_apres: 'avant / après livrées pour des marques de Casablanca et du Maroc.',
        pourquoi: 'Preuve sociale hub, 3 liens in-body en plus',
      },
      {
        cible: '/blog/rebranding-exemple-casablanca-2026',
        ancre: 'exemple de rebranding à Casablanca',
        contexte_avant: 'Pour voir un cas concret marché marocain 2026, lisez notre',
        contexte_apres: 'avec décisions de positionnement, charte et déploiement digital.',
        pourquoi: 'Article PR4 du silo branding',
      },
      {
        cible: '/contact',
        ancre: 'demander un audit branding gratuit',
        contexte_avant: 'Pour cadrer pack, délais et budget en MAD à Casablanca,',
        contexte_apres: 'nous répondons sous 24h ouvrées, sans aucun engagement.',
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
      { label: 'Services', to: '/services/' },
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
      { label: 'Services', to: '/services/' },
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
    intention: 'Ranker sur « agence google ads maroc » / « agence meta ads casablanca » et convertir (page money).',
    mot_cle_principal: 'agence google ads maroc',
    cluster_semantique: 'ads',
    pageRank_voulu: 9,
    title_serp: 'Agence Google Ads Maroc & Meta Ads Casablanca | We Yan Digital',
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
      { label: 'Publicité digitale Meta Ads et Google Ads' },
    ],
    liens_sortants: [
      {
        cible: '/blog/prix-google-ads-maroc-2026',
        ancre: 'prix Google Ads au Maroc',
        contexte_avant: 'Avant de lancer une campagne Search à Casablanca, comparez le',
        contexte_apres: 'en 2026, CPC par secteur, frais agence et budget media minimum.',
        pourquoi: 'Article PR4 du silo ads',
      },
      {
        cible: '/blog/prix-meta-ads-casablanca-2026',
        ancre: 'prix Meta Ads à Casablanca',
        contexte_avant: 'Le budget Facebook et Instagram se lit aussi via le',
        contexte_apres: 'avec CPC, coût par lead WhatsApp et forfaits de gestion 2026.',
        pourquoi: 'Article PR4 du silo ads',
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
    titre: 'Agence Influenceur Maroc',
    intention: 'Ranker sur « agence influenceur maroc » / « marketing influence casablanca » et convertir (page money).',
    mot_cle_principal: 'agence influenceur maroc',
    cluster_semantique: 'ads',
    pageRank_voulu: 9,
    title_serp: 'Agence Influenceur Maroc | Marketing d’Influence Casablanca - We Yan Digital',
    faq: [
      {
        q: 'Quel est le prix d’une story influenceur au Maroc en 2026 ?',
        r: 'Une story nano (10k–50k) se négocie souvent entre 800 et 2 500 MAD. Micro (50k–200k) : 2 500 à 8 000 MAD. Macro (200k+) : 8 000 à 25 000 MAD et plus selon la ville (Casablanca vs intérieur) et l’exclusivité. Le CPL réel dépend du brief, pas seulement du tarif brut.',
      },
      {
        q: 'Combien coûte un reel d’influenceur au Maroc ?',
        r: 'Nano : 1 500 à 5 000 MAD. Micro : 5 000 à 18 000 MAD. Macro : 18 000 à 60 000 MAD. Un reel usage ads (droits 3–6 mois) se facture 30 à 80 % de plus. Chez We Yan, le devis sépare cachet, droits et production.',
      },
      {
        q: 'Comment choisir un influenceur à Casablanca ?',
        r: 'On regarde l’audience réelle (ville, âge, langue), le taux d’engagement, les commentaires (pas les vues achetées), l’alignement offre, et les scandales. Un micro Casa qui vend en darija bat souvent un macro générique. Le casting We Yan refuse les faux followers.',
      },
      {
        q: 'Nano, micro ou macro : par quoi commencer ?',
        r: 'PME locale : 4 à 8 nanos / micros Casablanca, pas un seul macro. Le macro sert à la notoriété nationale une fois l’offre et le brief rodés. Un premier test We Yan tient en 15 000 à 35 000 MAD de cachets + gestion.',
      },
      {
        q: 'Faut-il coupler influence et Meta Ads ?',
        r: 'Oui dès que le UGC convertit. On whitelist le contenu, on le booste via l’agence Meta Ads Casablanca. Sans ads, la campagne meurt en 48h. Sans influence, les ads manquent de preuve sociale marocaine.',
      },
      {
        q: 'Comment mesurer le ROI d’une campagne influence ?',
        r: 'Codes promo, UTM, lien in-bio, screens WhatsApp, ventes attributées, et CPM/CPL vs ads. We Yan livre un reporting : livrables, portée, engagement, leads, CPA. Pas un PDF de screenshots sans chiffres.',
      },
      {
        q: 'Intervenez-vous à Rabat, Marrakech et Tanger ?',
        r: 'Oui. L’agence est à Casablanca Maarif. Casting et brief en visio ou présentiel. Les créateurs peuvent être Casa, Rabat, Marrakech, Tanger selon la cible. Le contrat et le reporting restent We Yan.',
      },
      {
        q: 'Comment lancer une campagne influence avec We Yan ?',
        r: 'Formulaire contact. Sous 24h : 3 profils, fourchette MAD, calendrier. Puis contrat, brief, validation contenus, mise en ligne, reporting. CTA : lancer ma campagne influence — sans engagement sur le premier échange.',
      },
    ],
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
      { label: 'Agence influenceur Maroc' },
    ],
    liens_sortants: [
      {
        cible: '/community-management-casablanca',
        ancre: 'community management à Casablanca',
        contexte_avant: 'Une campagne influence sans animation quotidienne s’éteint : couplez-la au',
        contexte_apres: 'pour que stories de créateurs et feed de marque parlent la même langue.',
        pourquoi: 'Pyramide : money influence pousse money CM',
      },
      {
        cible: '/services/publicite-digitale',
        ancre: 'agence Google Ads Maroc',
        contexte_avant: 'Quand l’intention de recherche est déjà chaude, couplez l’influence à une',
        contexte_apres: 'qui convertit le trafic Search pendant que les créateurs chauffent la demande.',
        pourquoi: 'Silo ads : influence → money ads',
      },
      {
        cible: '/services/publicite-digitale',
        ancre: 'agence Meta Ads Casablanca',
        contexte_avant: 'Les contenus UGC se scalent ensuite via une',
        contexte_apres: 'qui booste reels et stories déjà validés par l’audience organique.',
        pourquoi: 'Silo ads : 2e ancre vers money ads',
      },
      {
        cible: '/projets',
        ancre: 'campagnes d’influence',
        contexte_avant: 'Le casting et le reporting se lisent concrètement dans nos',
        contexte_apres: 'livrées pour des marques de Casablanca et du Maroc.',
        pourquoi: 'Preuve sociale hub',
      },
      {
        cible: '/blog/prix-influenceur-maroc-2026',
        ancre: 'prix d’un influenceur au Maroc',
        contexte_avant: 'Pour comparer nano, micro et macro en MAD, lisez notre',
        contexte_apres: 'avec tarifs story, reel, post et fourchettes 2026.',
        pourquoi: 'Article PR4 du silo, crawl hors sitemap',
      },
      {
        cible: '/contact',
        ancre: 'lancer ma campagne influence',
        contexte_avant: 'Pour un casting et un brief à Casablanca sans engagement,',
        contexte_apres: 'nous répondons sous 24h ouvrées, avec trois profils proposés.',
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
      { label: 'Services', to: '/services/' },
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
      { label: 'Services', to: '/services/' },
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
      { label: 'Services', to: '/services/' },
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
      { label: 'Services', to: '/services/' },
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
      { label: 'Services', to: '/services/' },
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
    slug: '/blog/rebranding-exemple-casablanca-2026',
    titre: 'Exemple de rebranding à Casablanca 2026',
    intention:
      'Cas concret de rebranding à Casablanca en 2026, puis pousser vers l’agence branding et le contact.',
    mot_cle_principal: 'rebranding casablanca exemple',
    cluster_semantique: 'branding',
    pageRank_voulu: 4,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
      { label: 'Exemple rebranding Casablanca 2026' },
    ],
    liens_sortants: [
      {
        cible: '/services/strategie-marketing-rebranding',
        ancre: 'agence branding à Casablanca',
        contexte_avant: 'Pour appliquer la même méthode à votre marque, notre',
        contexte_apres: 'cadre audit, identité visuelle et déploiement digital au Maroc.',
        pourquoi: 'Article PR4 → money branding PR9',
      },
      {
        cible: '/contact',
        ancre: 'demander un audit branding gratuit',
        contexte_avant: 'Pour un diagnostic de perception à Casablanca sans engagement,',
        contexte_apres: 'nous rappelons sous 24h ouvrées avec trois chantiers priorisés.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/blog/prix-google-ads-maroc-2026',
    titre: 'Prix Google Ads Maroc 2026',
    intention: 'Informer sur les tarifs CPC Google Ads au Maroc, puis pousser vers la money ads.',
    mot_cle_principal: 'prix google ads maroc',
    cluster_semantique: 'ads',
    pageRank_voulu: 4,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
      { label: 'Prix Google Ads Maroc 2026' },
    ],
    liens_sortants: [
      {
        cible: '/services/publicite-digitale',
        ancre: 'agence Google Ads Maroc',
        contexte_avant: 'Pour un media plan Search et un suivi ROAS à Casablanca, notre',
        contexte_apres: 'pilote le budget, le tracking conversions et un reporting hebdomadaire.',
        pourquoi: 'Article PR4 → money ads PR9',
      },
      {
        cible: '/contact',
        ancre: 'demander un media plan Google Ads',
        contexte_avant: 'Pour un chiffrage CPC réel selon votre secteur à Casablanca,',
        contexte_apres: 'nous envoyons un plan d’action et un tarif sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/blog/prix-meta-ads-casablanca-2026',
    titre: 'Prix Meta Ads Casablanca 2026',
    intention: 'Informer sur les tarifs CPC Meta Ads à Casablanca, puis pousser vers la money ads.',
    mot_cle_principal: 'prix meta ads casablanca',
    cluster_semantique: 'ads',
    pageRank_voulu: 4,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
      { label: 'Prix Meta Ads Casablanca 2026' },
    ],
    liens_sortants: [
      {
        cible: '/services/publicite-digitale',
        ancre: 'agence Meta Ads Casablanca',
        contexte_avant: 'Pour lancer Facebook et Instagram Ads sans brûler le budget, notre',
        contexte_apres: 'teste creatives, audiences Casablanca et le coût par lead en MAD.',
        pourquoi: 'Article PR4 → money ads PR9',
      },
      {
        cible: '/contact',
        ancre: 'demander un media plan Meta Ads',
        contexte_avant: 'Pour un budget Facebook Instagram calé sur vos leads à Casablanca,',
        contexte_apres: 'nous envoyons un plan d’action et un tarif sous 24h ouvrées.',
        pourquoi: 'Conversion',
      },
    ],
  },
  {
    slug: '/blog/prix-influenceur-maroc-2026',
    titre: 'Prix influenceur Maroc 2026',
    intention: 'Informer sur les tarifs story / reel / post, puis pousser vers la money influence.',
    mot_cle_principal: 'prix influenceur maroc',
    cluster_semantique: 'ads',
    pageRank_voulu: 4,
    breadcrumb: [
      { label: 'Accueil', to: '/' },
      { label: 'Services', to: '/services/' },
      { label: 'Prix influenceur Maroc 2026' },
    ],
    liens_sortants: [
      {
        cible: '/services/marketing-influence',
        ancre: 'agence influenceur Maroc',
        contexte_avant: 'Pour un casting, un brief et un reporting à Casablanca, notre',
        contexte_apres: 'négocie les tarifs, les droits d’usage et les KPIs en MAD.',
        pourquoi: 'Article PR4 → money influence PR9',
      },
      {
        cible: '/contact',
        ancre: 'demander un devis influence',
        contexte_avant: 'Pour un chiffrage nano micro macro selon votre offre à Casablanca,',
        contexte_apres: 'nous envoyons trois profils et un tarif sous 24h ouvrées.',
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
      { label: 'Services', to: '/services/' },
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
        cible: '/services/strategie-marketing-rebranding',
        ancre: 'rebranding à Casablanca',
        contexte_avant: 'Les identités retail et luxe du portfolio relèvent d’un vrai',
        contexte_apres: 'mené avec charte, site et lancement alignés sur le marché marocain.',
        pourquoi: 'PR6 portfolio → money branding PR9',
      },
      {
        cible: '/services/marketing-influence',
        ancre: 'campagnes d’influence au Maroc',
        contexte_avant: 'Les lancements social du portfolio relèvent aussi de nos',
        contexte_apres: 'avec casting créateurs, brief et reporting livrés à Casablanca.',
        pourquoi: 'PR6 portfolio → money influence PR9',
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
        cible: '/services/strategie-marketing-rebranding',
        ancre: 'agence branding à Casablanca',
        contexte_avant: 'Le travail d’identité, du positionnement à la charte, est porté par notre',
        contexte_apres: 'avec ateliers en présentiel à Maarif et un plan de lancement.',
        pourquoi: 'PR6 hub → money branding PR9',
      },
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
  { to: '/agence-seo-casablanca/', label: 'Agence SEO Casablanca' },
  { to: '/community-management-casablanca/', label: 'Community Management Casablanca' },
  { to: '/services/strategie-marketing-rebranding/', label: 'Stratégie & Rebranding' },
  { to: '/services/publicite-digitale/', label: 'Google Ads & Meta Ads' },
  { to: '/services/marketing-influence/', label: 'Marketing d’influence' },
] as const

function normalizePath(pathname: string) {
  return stripTrailingSlash(pathname)
}

export function getPageLinking(pathname: string) {
  const slug = normalizePath(pathname)
  return PAGES_LINKING.find((page) => page.slug === slug)
}

const SITE_URL = 'https://weyandigital.ma'

/** URL canonique officielle : https + non-www + slash final. */
export function toAbsoluteCanonical(pathname: string) {
  return `${SITE_URL}${withTrailingSlash(pathname)}`
}

export function buildFaqJsonLd(page: PageLinking) {
  if (!page.faq?.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.r,
      },
    })),
  }
}

export function buildPageDocumentTitle(page: PageLinking) {
  if (page.title_serp) return page.title_serp
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
  return toAbsoluteCanonical(page.slug)
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
        item: toAbsoluteCanonical(path),
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
      const cibleSlug = normalizePath(lien.cible)
      const cible = bySlug.get(cibleSlug)
      if (!cible) {
        errors.push(`${page.slug} → ${lien.cible} introuvable.`)
        continue
      }
      const same = page.cluster_semantique === cible.cluster_semantique
      const allowed =
        UNIVERSAL_CLUSTERS.includes(cible.cluster_semantique) ||
        UNIVERSAL_CLUSTERS.includes(page.cluster_semantique) ||
        MONEY_SLUGS.includes(cibleSlug)
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
