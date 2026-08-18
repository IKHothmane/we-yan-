import BlogArticleLayout from '../components/BlogArticleLayout'
import { pageSeo } from '../lib/pageSeo'

export default function BlogPrixSiteWebMarocPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogPrixSiteWebMaroc2026}
      heroImage="/images/advertising/data-preview.webp"
      heroAlt="Tarifs création site web Maroc 2026 - weyan digital agence casablanca prix forfait vitrine ecommerce"
      badgeCategory="Prix & Tarifs · Casablanca 2026"
      badgeColor={{ bg: '#FEF3C7', text: '#B45309', border: '#FCD34D' }}
      title={<>
        Prix site web Maroc <span style={{ color: '#FC9700' }}>2026</span> : combien coûte vraiment un site vitrine, e-commerce ou sur-mesure ?
      </>}
      publishDate="06 Août 2026"
      readTime="9 minutes"
      authorName="We Yan Digital"
      authorRole="Agence digitale Casablanca"
      intro={[
        <>
          <p>
            L'une des questions que l'on nous pose TOUS les jours à <strong className="font-semibold text-slate-800">notre agence à Casablanca Maarif</strong> c'est : <em>« combien coûte un site web au Maroc en 2026 ? »</em>. La réponse courte — « ça dépend » — n'aide personne. On a décidé d'être 100% transparents dans cet article : <strong className="font-semibold text-slate-900">fourchettes de prix détaillées</strong> selon le type de projet, comparatif freelance vs agence, pièges à éviter, et nos conseils We Yan Digital pour ne pas se tromper.
          </p>
        </>,
        <>
          <p>
            Que vous soyez entrepreneur, startup, PME, restaurant, e-commerçant ou grand compte à Casablanca, Rabat, Marrakech ou Tanger, vous trouverez ici le prix réaliste à prévoir en dirhams MAD 2026.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'Quels facteurs influencent le prix d\'un site web au Maroc en 2026 ?',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                Avant d'afficher les chiffres, il faut comprendre les leviers qui font varier le coût d'un projet. Pourquoi un site peut coûter 5 000 MAD chez un freelance junior et plus de 150 000 MAD chez une agence premium ? Parce que la qualité, le temps passé et les fonctionnalités ne sont pas du tout les mêmes.
              </p>
            </>,
            <>
              <ul className="space-y-3 mt-3 ml-5 list-disc text-[0.98rem] text-slate-700">
                <li><strong className="font-semibold">Type de site</strong> : vitrine simple, blog, catalogue produits, e-commerce (WooCommerce, PrestaShop, Shopify), site communautaire, application web métier.</li>
                <li><strong className="font-semibold">Design & Identité visuelle</strong> : thème acheté 50€ vs design sur-mesure UX/UI, maquettes Figma, retouches photo, animations premium.</li>
                <li><strong className="font-semibold">Nombre de pages</strong> : 3-5 pages vs 50-100 pages (SEO, catalogue, blog, catégories).</li>
                <li><strong className="font-semibold">Fonctionnalités</strong> : multi-langue FR/AR/EN, multi-devise, paiement en ligne CMI / Stripe / Paypal, réservation en ligne, CRM/ERP, intégrations API, livraison tracking, panier abandonné relance email, abonnements.</li>
                <li><strong className="font-semibold">SEO & performances</strong> : SEO intégré dès la conception, balises Schema.org, Core Web Vitals optimisés, sitemap, structure silo SEO.</li>
                <li><strong className="font-semibold">Maintenance & support</strong> : lancement + 2 mois de support vs maintenance annuelle, sauvegardes, uptime monitoring.</li>
                <li><strong className="font-semibold">Niveau du prestataire</strong> : freelance junior vs senior vs agence avec équipe dédiée (designer, dev front, dev back, SEO, chef de projet).</li>
              </ul>
            </>,
          ],
        },
        {
          heading: 'Fourchettes de prix détaillées en MAD 2026 (Maroc)',
          paragraphs: [
            <>
              <p>
                Les tarifs ci-dessous correspondent à <strong className="font-semibold text-slate-900">des prestations de qualité professionnelle</strong>, livrées avec le soin nécessaire, des délais respectés et du support. On exclut volontairement les prix « dérisoires » (moins de 3 000 MAD pour un site complet) qui finissent 9 fois sur 10 par un site non fini, buggué, non sécurisé ou non optimisé pour le référencement — ce qui coûte bien plus cher à long terme.
              </p>
            </>,
            <>
              <h3 className="font-bold text-[1.1rem] mt-2 mb-3 text-slate-900">Prix d'un site vitrine au Maroc en 2026</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-2xl overflow-hidden border border-slate-200 shadow-sm text-[0.95rem]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 text-left">
                      <th className="px-5 py-4 font-black">Formule site vitrine</th>
                      <th className="px-5 py-4 font-black">Tarifs MAD 2026</th>
                      <th className="px-5 py-4 font-black">Pour qui ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-t border-slate-200"><td className="px-5 py-4">Freelance junior (étudiant / 1ère expérience)</td><td className="px-5 py-4 font-bold">3 000 → 6 000 MAD</td><td className="px-5 py-4">Auto-entrepreneur test, présence web minimale, design basique thème tout-prêt.</td></tr>
                    <tr className="bg-slate-50 border-t border-slate-200"><td className="px-5 py-4">Freelance senior confirmé (3+ ans)</td><td className="px-5 py-4 font-bold">8 000 → 20 000 MAD</td><td className="px-5 py-4">PME, entrepreneur sérieux, besoin de fiabilité + SEO basique.</td></tr>
                    <tr className="bg-white border-t border-slate-200"><td className="px-5 py-4">Agence digitale Maroc qualité premium</td><td className="px-5 py-4 font-bold">6 500 → 35 000 MAD</td><td className="px-5 py-4">PME et entreprises qui veulent conversion + design premium + SEO performant + support sérieux.</td></tr>
                    <tr className="bg-slate-50 border-t border-slate-200"><td className="px-5 py-4">Site vitrine sur-mesure + UX/UI</td><td className="px-5 py-4 font-bold">22 000 → 80 000 MAD</td><td className="px-5 py-4">Grands comptes, marques premium, exigences fortes d'identité et d'expérience.</td></tr>
                  </tbody>
                </table>
              </div>
            </>,
            <>
              <h3 className="font-bold text-[1.1rem] mt-8 mb-3 text-slate-900">Prix d'un site e-commerce au Maroc en 2026</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-2xl overflow-hidden border border-slate-200 shadow-sm text-[0.95rem]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 text-left">
                      <th className="px-5 py-4 font-black">Formule e-commerce</th>
                      <th className="px-5 py-4 font-black">Tarifs MAD 2026</th>
                      <th className="px-5 py-4 font-black">Stack & taille catalogue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-t border-slate-200"><td className="px-5 py-4">WooCommerce standard (de base)</td><td className="px-5 py-4 font-bold">14 000 → 30 000 MAD</td><td className="px-5 py-4">- de 200 produits, thème premium, paiements standards, sans intégrations complexes.</td></tr>
                    <tr className="bg-slate-50 border-t border-slate-200"><td className="px-5 py-4">WooCommerce premium + SEO</td><td className="px-5 py-4 font-bold">22 000 → 55 000 MAD</td><td className="px-5 py-4">Jusqu'à 500-1000 références, multi-langue, relance panier abandonné, catalogue Facebook, Google Shopping ads.</td></tr>
                    <tr className="bg-white border-t border-slate-200"><td className="px-5 py-4">PrestaShop / Shopify Plus</td><td className="px-5 py-4 font-bold">30 000 → 120 000 MAD</td><td className="px-5 py-4">1 000+ produits, intégrations ERP / logistique / facturation, B2B, marketplace, multiples boutiques.</td></tr>
                    <tr className="bg-slate-50 border-t border-slate-200"><td className="px-5 py-4">E-commerce sur-mesure headless</td><td className="px-5 py-4 font-bold">60 000 → 200 000 MAD+</td><td className="px-5 py-4">React Next.js + backend dédié, API, très fort trafic, règles métier très spécifiques.</td></tr>
                  </tbody>
                </table>
              </div>
            </>,
          ],
        },
        {
          heading: 'Freelance vs Agence digitale Maroc : que choisir ?',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                Règle simple : <strong className="font-semibold text-slate-800">pour un projet simple sans enjeu critique de conversion</strong> (site vitrine 4 pages, présence web de base, petit budget), un freelance senior confirmé est parfait.
              </p>
            </>,
            <>
              <p>
                En revanche, si votre site <strong className="font-semibold text-slate-900">doit générer du CA (e-commerce, prise de RDV, formulaires leads, SEO stratégique)</strong>, préférez une agence digitale marocaine comme We Yan Digital à Casablanca. Pourquoi ? Parce que le projet est pris en charge par une équipe <em>pluridisciplinaire</em> : chef de projet, designer UX, développeur, expert SEO, expert Ads. Vous n'êtes pas dépendant d'une seule personne. L'agence suit votre site dans la durée, avec de la maintenance et des évolutions.
              </p>
            </>,
            <>
              <p>
                Le choix dépend aussi de l'urgence, de la complexité et de la régularité des échanges. Si vous avez besoin de <strong>réunions régulières en présentiel à Casablanca</strong> pour avancer sur un brief complexe, une agence basée localement est incomparable.
              </p>
            </>,
          ],
        },
        {
          heading: 'Coûts récurrents à ne pas oublier (frais annuels 2026 Maroc)',
          paragraphs: [
            <>
              <p>
                Trop d'entrepreneurs oublient le coût récurrent. Un site web, ce n'est pas un achat unique — c'est un actif digital qu'il faut entretenir, comme une voiture ou un local commercial.
              </p>
            </>,
            <>
              <ul className="space-y-3 mt-3 ml-5 list-disc text-[0.98rem] text-slate-700">
                <li><strong className="font-semibold">Nom de domaine (.ma, .com, .ma)</strong> : ~150 → 400 MAD / an selon le TLD.</li>
                <li><strong className="font-semibold">Hébergement web</strong> : ~500 → 3 500 MAD / an selon la qualité et le trafic. On préfère toujours du Cloudflare + SSD NVMe + support FR/AR.</li>
                <li><strong className="font-semibold">Certificat SSL HTTPS</strong> : souvent offert chez les hébergeurs sérieux (Let's Encrypt), mais EV SSL spécifique pour grandes marques ~2 500 MAD / an.</li>
                <li><strong className="font-semibold">Maintenance annuelle</strong> : mises à jour sécurité, sauvegardes quotidiennes, monitoring uptime. Comptez 1 500 → 8 000 MAD / an selon taille du site.</li>
                <li><strong className="font-semibold">Frais de paiement en ligne CMI</strong> : commission 2,5% à 3,5% par transaction + abonnement mensuel ~200 MAD.</li>
                <li><strong className="font-semibold">Abonnements plugins premium</strong> (thèmes, SEO, builder, email relance panier) : ~1 000 → 5 000 MAD / an selon stack.</li>
              </ul>
            </>,
          ],
        },
        {
          heading: 'Pièges à éviter pour votre projet site web Casablanca 2026',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                Après 5+ ans d'accompagnement de clients marocains, voici les erreurs que l'on voit <em>toutes les semaines</em> et qui coûtent très cher :
              </p>
            </>,
            <>
              <ol className="mt-3 space-y-3 ml-5 list-decimal text-[0.98rem] text-slate-700">
                <li><strong>❌ Prendre le devis le moins cher du marché</strong> : c'est la façon la plus sûre de perdre de l'argent. Un site mal fait, mal référencé, mal sécurisé ne vous rapportera aucun client. Vous finirez par le refaire 6 mois plus tard, soit 2 fois plus cher au total.</li>
                <li><strong>❌ Oublier le SEO et la conversion dans le brief</strong> : un site « joli » qui ne génère aucun lead est de la décoration, pas un outil business. Demandez systématiquement : plan mots-clés, title/meta, schema, mobile-first, formulaires A/B.</li>
                <li><strong>❌ Aucun support après livraison</strong> : un site web sans maintenance est une faille de sécurité assurée (hack, malware, spam). Gardez toujours 10% du budget annuel pour ça.</li>
                <li><strong>❌ Ne pas posséder son propre nom de domaine / hébergement</strong> : si c'est votre prestataire qui le possède à votre place, il peut vous bloquer. Vous devez être propriétaire TOUJOURS.</li>
                <li><strong>❌ Contenu fourni au dernier moment ou copié d'un autre site</strong> : le duplicate content fait chuter votre référencement Google. Prévoyez la production de contenu dans le planning, ou déléguez ça à une agence comme We Yan Digital.</li>
              </ol>
            </>,
          ],
        },
        {
          heading: 'Combien prévoir pour votre site web en 2026 ? Conclusion & conseils We Yan',
          paragraphs: [
            <>
              <p>
                Pour un entrepreneur ou une PME à Casablanca, on recommande en général : <strong>minimum 7 000 MAD HT pour un site vitrine sérieux</strong> (converti, responsive, SEO intégré, support 2 mois), et <strong>minimum 22 000 MAD HT pour un e-commerce WooCommerce fonctionnel et SEO</strong>.
              </p>
            </>,
            <>
              <p>
                Si vous avez un projet de site web à Casablanca, Marrakech, Rabat ou partout au Maroc, <strong className="font-semibold text-slate-900">nous vous envoyons un devis détaillé, service par service, en moins de 24h</strong>, sans engagement. Réponse d'un humain, pas de réponse automatique. On discute de vos objectifs, on vous donne des pistes pour optimiser votre budget.
              </p>
            </>,
          ],
        },
      ]}
      faq={[
        {
          q: "Quel est le prix d'un site vitrine 5 pages à Casablanca en 2026 ?",
          r: "Chez We Yan Digital, un site vitrine 5 pages premium et optimisé SEO démarre à 6 500 MAD HT (livraison 15 jours, design responsive, formulaire contact, hébergement 1 an offert, support 2 mois inclus). Selon design et fonctionnalités (blog, back-office, etc.), comptez entre 8 000 et 18 000 MAD HT.",
        },
        {
          q: "Combien coûte un site e-commerce WooCommerce au Maroc ?",
          r: "Prestation We Yan Digital e-commerce WooCommerce standard : à partir de 22 000 MAD HT (moins de 500 produits, catalogue Facebook, paiements CMI/Paypal/Stripe, SEO, relance panier, formation). Pour un site premium 1 000+ produits multi-langue, prévoyez 35 000 → 80 000 MAD HT.",
        },
        {
          q: "Faut-il choisir WordPress, PrestaShop ou un site sur-mesure React ?",
          r: "Règle simple : WordPress/WooCommerce pour les sites vitrines et e-commerces standards (80% des cas). PrestaShop pour de gros catalogues produits. Un site React/Next sur-mesure quand vous avez des règles métier très spécifiques ou un très fort trafic. Nous vous guidons sur le meilleur choix selon votre projet.",
        },
        {
          q: "Quels délais de livraison pour un site web à Casablanca ?",
          r: "Site vitrine : 10 → 20 jours ouvrés en moyenne. E-commerce standard : 30 → 45 jours. Site sur-mesure : 2 → 6 mois selon complexité. Nous livrons toujours un planning Gantt partagé au démarrage.",
        },
      ]}
      relatedLinks={[{ label: 'Demander un devis site web', to: '/contact' }]}
    />
  )
}
