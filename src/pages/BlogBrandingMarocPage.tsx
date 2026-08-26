import BlogArticleLayout from '../components/BlogArticleLayout'
import { pageSeo } from '../lib/pageSeo'

export default function BlogBrandingMarocPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogBrandingMaroc}
      heroImage="/images/strategy/approach.webp"
      heroAlt="Branding Maroc creation identite visuelle Casablanca agence We Yan Digital logo charte graphique marque"
      badgeCategory="Branding · Identité de marque · 2026"
      badgeColor={{ bg: '#FEF3C7', text: '#B45309', border: '#FCD34D' }}
      title={<>
        Comment créer une marque <span style={{ color: '#FC9700' }}>au Maroc en 2026</span> : guide complet We Yan Digital
      </>}
      publishDate="06 Août 2026"
      readTime="11 minutes"
      authorName="Direction Artistique We Yan"
      authorRole="Branding · Casablanca Maarif"
      intro={[
        <>
          <p>
            Créer une marque qui reste dans la tête des consommateurs marocains, qui se différencie, qui vend — ce n'est pas « faire un joli logo ». C'est un <strong className="font-semibold text-slate-900">processus stratégique complet</strong> : positionnement, naming, identité visuelle, expérience, storytelling, digital, lancement.
          </p>
        </>,
        <>
          <p>
            Guide complet We Yan Digital basé sur nos 5+ ans d'accompagnement de marques marocaines lancées à Casablanca : startup food, e-commerce mode, cosmétique bio, cafés premium, services B2B, etc. Étape par étape.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: "Étape 1 — Stratégie & Positionnement (avant TOUT design)",
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                Erreur #1 des entrepreneurs marocains : commencer par le logo. STOP. Le logo est une <em>conséquence</em> de votre stratégie, pas un point de départ. Avant un trait, une couleur ou une typo, on doit répondre à ces questions — <strong className="font-semibold text-slate-900">si vous y répondez pas, votre marque sera une de plus, aucune mémorisation</strong> :
              </p>
            </>,
            <>
              <ul className="space-y-2.5 mt-2 ml-5 list-disc text-[0.98rem] leading-8 text-slate-700">
                <li><strong className="font-bold">Qui est votre client idéal marocain ?</strong> Âge, ville (Casablanca ? Rabat ? Tanger ?), CSP, habitudes d'achat, ce qu'il aime, ce qu'il déteste, douleurs.</li>
                <li><strong className="font-bold">Contre QUI vous différenciez ?</strong> Nommez vos 3-4 concurrents directs. Lister leurs forces, leurs faiblesses, leurs prix, leur style de communication.</li>
                <li><strong className="font-bold">Quelle est VRAIMENT votre promesse unique de valeur (USP) ?</strong> En 1 phrase : pourquoi moi plutôt qu'un autre ? (ex : « Cosmétique bio made in Maroc » = nul. « Cosmétique bio 100% made in Casablanca, zéro plastique, livraison 2h à Casablanca » = PUISSANT).</li>
                <li><strong className="font-bold">Quel est le « personalité » de votre marque ?</strong> Est-elle sérieuse, fun, premium, accessible, jeune, luxueuse, féminine, masculine, tech, eco ? 3 adjectifs MAX.</li>
                <li><strong className="font-bold">Prix, positionnement, promesse ?</strong> Premium / Mid-range / Discount. Justifiez.</li>
              </ul>
            </>,
            <>
              <p className="mt-3">
                <strong>Conseil We Yan</strong> : cette étape dure 2 à 4 semaines avec des ateliers stratégiques. On appelle ça un <em>Brand Sprint</em>. Rien ne se fait avant.
              </p>
            </>,
          ],
        },
        {
          heading: "Étape 2 — Naming : nom de votre marque au Maroc",
          paragraphs: [
            <>
              <p>
                Le nom de votre marque est un <strong className="font-semibold text-slate-900">actif immatériel crucial</strong>. Un bon nom doit répondre à 5 critères :
              </p>
            </>,
            <>
              <ol className="mt-2 space-y-2.5 ml-5 list-decimal text-[0.98rem] leading-8 text-slate-700">
                <li><strong>Facile à prononcer</strong> en français ET en darija, et à épeler.</li>
                <li><strong>Pas de nom déjà déposé à l'OMPIC</strong> (recherche préalable OMPIC Maroc + Google + réseaux sociaux).</li>
                <li><strong>Nom de domaine disponible</strong> en .ma ET .com si possible.</li>
                <li><strong>Disponible @monNom sur Instagram / Facebook / TikTok / LinkedIn.</strong></li>
                <li><strong>Évite les doubles sens négatifs</strong> (vérifiez en arabe et en français !).</li>
              </ol>
            </>,
            <>
              <p className="mt-3">
                Erreur courante : les noms trop longs ou bizarres avec des K/W/Y pour faire « moderne » qui finissent impossibles à retenir. La mémorisation {'→'} l'originalité. Votre client doit entendre le nom <em>une fois</em> et s'en souvenir.
              </p>
            </>,
          ],
        },
        {
          heading: "Étape 3 — Identité visuelle : logo, couleurs, typo, charte graphique",
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                C'est maintenant qu'on passe au design. L'identité visuelle = un <strong className="font-semibold text-slate-900">système complet cohérent</strong>, pas juste un logo. Ça comprend :
              </p>
            </>,
            <>
              <ul className="space-y-2.5 mt-2 ml-5 list-disc text-[0.98rem] leading-8 text-slate-700">
                <li><strong>Logo</strong> : version principale, variante horizontale, variante carrée (icône pour favicon, réseaux sociaux).</li>
                <li><strong>Palette de couleurs</strong> : couleurs primaires (2-3 max), secondaires, couleurs neutres. Exemple We Yan Digital : orange #FC9700 + bleu #6483F0 + noir 0F172A.</li>
                <li><strong>Typographies</strong> : 2 familles max. Une police de titre (display), une police de corps lisible mobile.</li>
                <li><strong>Système graphique</strong> : motifs, pictos, style d'images, filtres, style de boutons, façon d'associer les éléments.</li>
                <li><strong>Charte graphique PDF</strong> : document 30-60 pages expliquant toutes les règles d'usage (tailles minimums, zones de respirabilité, usages interdits, applications : cartes de visite, packaging, affiches, email signature, réseaux sociaux, publicités).</li>
              </ul>
            </>,
            <>
              <p className="mt-3">
                <strong>Conseil pro</strong> : évitez de créer l'identité visuelle sur Canva à 0 MAD par votre cousin « qui sait faire du design ». Une identité bricolée = perte de crédibilité et CA perdu à long terme. Investir 10 000 MAD dans un bon branding vs 1 000 MAD chez un amateur = différence visible sur votre taux de conversion à 6 mois.
              </p>
            </>,
          ],
        },
        {
          heading: "Étape 4 — Déclinaisons de marque & univers digital",
          paragraphs: [
            <>
              <p>
                Une identité visuelle ne sert à rien si elle n'est pas déclinée sur TOUS vos points de contact. Checklist de lancement obligatoire :
              </p>
            </>,
            <>
              <ul className="space-y-2.5 mt-2 ml-5 list-disc text-[0.98rem] leading-8 text-slate-700">
                <li>Site web (vitrine ou e-commerce) entièrement cohérent charte graphique, mobile-first.</li>
                <li>Profils réseaux sociaux 100% à jour : photo de profil, couverture, bio, templates posts/stories/reels cohérents.</li>
                <li>Cartes de visite, papier à entête, signature email d'équipe, flyers, dépliants si offline.</li>
                <li>Si offline : design des locaux, menu, packaging produit, étiquettes, sacs shopping, uniformes équipe, signalétique.</li>
                <li>Templates publicitaires Google Ads, Meta Ads, TikTok Ads, abribus, affiches.</li>
                <li>Emailing templates (newsletter, transactionnel).</li>
              </ul>
            </>,
          ],
        },
        {
          heading: "Étape 5 — Storytelling, voix & ton de communication",
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                Deux marques peuvent avoir des designs très proches mais <strong className="font-semibold text-slate-900">un ton opposé</strong>. Le ton fait toute la différence. Définissez :
              </p>
            </>,
            <>
              <ul className="space-y-2.5 mt-2 ml-5 list-disc text-[0.98rem] leading-8 text-slate-700">
                <li><strong>Langues</strong> : FR ? Darija écrit ? Arabe littéraire ? Anglais ? 2 langues minimum en 2026 au Maroc pour max de portée.</li>
                <li><strong>Histoire de la marque (Brand Story)</strong> en 200 mots : qui l'a fondée, pourquoi, mission, vision, valeurs (clients adorent ça, Google aussi).</li>
                <li><strong>Messages clés (3-5 max)</strong> : phrases que vous répétez PARTOUT (site, pub, réseaux, oral).</li>
                <li><strong>Lignes rouges à ne jamais dire</strong> (ex : jamais de langage familier, jamais d'argot si premium).</li>
              </ul>
            </>,
          ],
        },
        {
          heading: "Étape 6 — Le lancement (Go-to-market Maroc 2026)",
          paragraphs: [
            <>
              <p>
                60% du succès d'une nouvelle marque réside dans son <strong className="font-semibold text-slate-900">lancement</strong>. Une marque qui sort doucement = personne ne s'en souvient. Faites du bruit ! Playbook We Yan :
              </p>
            </>,
            <>
              <ol className="mt-2 space-y-2.5 ml-5 list-decimal text-[0.98rem] leading-8 text-slate-700">
                <li><strong>Teaser 10 jours avant</strong> sur réseaux sociaux : extraits mystères, story teasing, compte à rebours, concours Follow + Tag amis (marque + prix offert).</li>
                <li><strong>Influence marketing micro-influenceurs locaux</strong> (10k à 100k abonnés) dans votre secteur. Micro-influenceurs Maroc = TRÈS haut taux d'engagement.</li>
                <li><strong>Campagne Meta Ads + TikTok Ads + Google Ads brand</strong> sur 3 semaines au lancement (budget : au minimum 15 000 MAD).</li>
                <li><strong>Événement lancement physique</strong> si c'est un local ou produit : pop-up, soirée presse, influenceurs + clients VIP.</li>
                <li><strong>Communiqué de presse digital</strong> à la relève média marocaine + portails secteur.</li>
                <li><strong>Optimisation Google Business Profile</strong> dès le jour J (heure d'ouverture, photos, avis, posts).</li>
              </ol>
            </>,
          ],
        },
        {
          heading: "Quel budget prévoir pour créer une marque au Maroc en 2026 ?",
          paragraphs: [
            <>
              <div className="overflow-x-auto mt-2">
                <table className="w-full border-collapse rounded-2xl overflow-hidden border border-slate-200 shadow-sm text-[0.95rem]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 text-left">
                      <th className="px-5 py-4 font-black">Prestation branding</th>
                      <th className="px-5 py-4 font-black">Tarif professionnel Maroc 2026</th>
                      <th className="px-5 py-4 font-black">Pour quel besoin ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-t border-slate-200"><td className="px-5 py-4">Logo simple (1 variante + 2 modifs)</td><td className="px-5 py-4 font-bold">2 000 → 6 000 MAD</td><td className="px-5 py-4">Auto-entrepreneur début, besoin léger, très petit budget.</td></tr>
                    <tr className="bg-slate-50 border-t border-slate-200"><td className="px-5 py-4">Identité visuelle complète + charte</td><td className="px-5 py-4 font-bold">10 000 → 30 000 MAD</td><td className="px-5 py-4">Startup, PME, e-commerce sérieux, restaurateur, marque produit.</td></tr>
                    <tr className="bg-white border-t border-slate-200"><td className="px-5 py-4">Branding stratégique complet (positionnement + identité + guide ton + déclinaisons + lancement)</td><td className="px-5 py-4 font-bold">35 000 → 120 000 MAD</td><td className="px-5 py-4">Entreprises, marques désirant un actif de marque durable, grand compte.</td></tr>
                  </tbody>
                </table>
              </div>
            </>,
          ],
        },
      ]}
      faq={[
        {
          q: "Comment protéger ma marque au Maroc (dépôt marque OMPIC) ?",
          r: "Faites une recherche d'antériorité OMPIC sur le nom et le logo, puis déposez votre marque à l'OMPIC (Office Marocain de la Propriété Industrielle et Commerciale) en classe Nice correspondant à votre activité. Frais OMPIC officiels ~1 500 MAD (une classe). Un avocat spécialisé ou agence peut s'en charger pour 3 000 → 8 000 MAD. C'est OBLIGATOIRE avant tout investissement marketing (évitez qu'on vous vole votre nom après 2 ans !).",
        },
        {
          q: "Combien de temps pour créer une marque complète ?",
          r: "Chez We Yan Digital agence Casablanca : 4 → 12 semaines selon complexité. Brand Sprint stratégique : 2 semaines, Identité visuelle + charte : 2-4 semaines, Déclinaisons digitales (site web + réseaux + lancement) : 4 → 8 semaines.",
        },
        {
          q: "Dois-je créer d'abord ma marque OU mon site web ?",
          r: "D'ABORD LA MARQUE. Sans positionnement, nom, couleurs, typo, valeurs, ton, on ne peut pas faire un site web cohérent. Sinon vous ferez un site générique qu'il faudra refaire intégralement après. Ordre : Stratégie → Identité → Site web & digital → Lancement.",
        },
      ]}
      relatedLinks={[{ label: 'Nos offres branding & stratégie', to: '/services/strategie-marketing-rebranding/' }]}
    />
  )
}
