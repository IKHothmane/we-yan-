import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/prix-seo-casablanca-2026')
const lienAgence = pageLinking?.liens_sortants.find((lien) => lien.cible === '/agence-seo-casablanca')

export default function BlogPrixSeoCasablancaPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogPrixSeoCasablanca2026}
      heroImage="/images/seo/hero.webp"
      heroAlt="Prix SEO Casablanca 2026 - tarifs référencement naturel We Yan Digital agence Maroc"
      badgeCategory="Prix SEO · Casablanca 2026"
      badgeColor={{ bg: '#DBEAFE', text: '#1D4ED8', border: '#93C5FD' }}
      title={
        <>
          Prix SEO Casablanca <span style={{ color: '#6483F0' }}>2026</span> : combien coûte un accompagnement référencement naturel ?
        </>
      }
      publishDate="17 Août 2026"
      readTime="8 minutes"
      authorName="We Yan Digital"
      authorRole="Agence SEO Casablanca"
      intro={[
        <>
          <p>
            « Combien coûte le SEO à Casablanca en 2026 ? » est la question qui arrive juste après « est-ce que ça marche vraiment au Maroc ? ». La réponse courte — un audit à 3 500 MAD, un mois à 8 000 MAD, un trimestre à 22 000 MAD — ne dit rien si on ne dit pas <strong className="font-semibold text-slate-900">ce que ce prix achète</strong> : technique, contenus, netlinking local, Google Business, et surtout un plan qui tient six mois.
          </p>
        </>,
        <>
          <p>
            Cet article pose des fourchettes réelles en dirhams, freelance versus agence, et le moment où le tarif n’est plus le sujet : c’est l’équipe qui exécute. We Yan Digital, à Casablanca Maarif, publie ces chiffres pour que vous puissiez comparer sans surprise.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'Ce qui fait varier le prix d’un SEO à Casablanca',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                Deux devis à 6 000 MAD / mois peuvent cacher deux métiers différents. Le premier livre trois articles et un rapport PDF. Le second pilote l’indexation, les Core Web Vitals, le maillage interne, les avis Google et un calendrier éditorial calé sur vos requêtes business. Au Maroc, la concurrence n’est pas la même selon que vous visez « avocat Casablanca Maarif » ou « assurance auto Maroc ».
              </p>
            </>,
            <>
              <ul className="space-y-3 mt-3 ml-5 list-disc text-[0.98rem] text-slate-700">
                <li><strong className="font-semibold">Intention locale ou nationale</strong> : pack Google Business + pages quartier versus silos nationaux et netlinking .ma.</li>
                <li><strong className="font-semibold">État du site</strong> : un WordPress lent, dupliqué, sans schema, coûte 4 à 8 semaines de technique avant le premier contenu utile.</li>
                <li><strong className="font-semibold">Volume éditorial</strong> : 2 pages / mois ne battent pas un concurrent qui publie 8 fiches et 2 guides.</li>
                <li><strong className="font-semibold">Autorité du domaine</strong> : un site de 6 mois n’achète pas les mêmes liens qu’une marque déjà citée par la presse marocaine.</li>
                <li><strong className="font-semibold">Suivi</strong> : Search Console, positions, appels GMB, leads formulaires. Sans tracking, le prix est un abonnement décoratif.</li>
              </ul>
            </>,
          ],
        },
        {
          heading: 'Fourchettes de prix SEO au Maroc en 2026 (MAD)',
          paragraphs: [
            <>
              <p>
                Les tarifs ci-dessous correspondent à un travail professionnel, pas à une « soumission de 50 mots-clés » vendue 1 500 MAD. On exclut les packs magiques : ils disparaissent des SERP dès la première mise à jour Google, et vous payez deux fois.
              </p>
            </>,
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-2xl overflow-hidden border border-slate-200 shadow-sm text-[0.95rem]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 text-left">
                      <th className="px-5 py-4 font-black">Prestation</th>
                      <th className="px-5 py-4 font-black">Tarifs MAD 2026</th>
                      <th className="px-5 py-4 font-black">Pour qui ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-t border-slate-200">
                      <td className="px-5 py-4">Audit SEO one-shot (technique + sémantique)</td>
                      <td className="px-5 py-4 font-bold">3 500 → 9 000 MAD</td>
                      <td className="px-5 py-4">Site vitrine ou e-commerce qui veut un diagnostic avant d’investir.</td>
                    </tr>
                    <tr className="bg-slate-50 border-t border-slate-200">
                      <td className="px-5 py-4">Freelance SEO junior (retainer mensuel)</td>
                      <td className="px-5 py-4 font-bold">4 000 → 7 000 MAD / mois</td>
                      <td className="px-5 py-4">Petite structure, concurrence locale faible, besoin d’un suivi simple.</td>
                    </tr>
                    <tr className="bg-white border-t border-slate-200">
                      <td className="px-5 py-4">Agence SEO Casablanca (retainer)</td>
                      <td className="px-5 py-4 font-bold">8 000 → 18 000 MAD / mois</td>
                      <td className="px-5 py-4">PME, cliniques, immobilier, B2B : technique + contenus + local + reporting.</td>
                    </tr>
                    <tr className="bg-slate-50 border-t border-slate-200">
                      <td className="px-5 py-4">Programme 6 mois (local + national)</td>
                      <td className="px-5 py-4 font-bold">45 000 → 95 000 MAD</td>
                      <td className="px-5 py-4">Marques qui visent des requêtes concurrentielles et un silo éditorial.</td>
                    </tr>
                    <tr className="bg-white border-t border-slate-200">
                      <td className="px-5 py-4">Netlinking marocain (à part)</td>
                      <td className="px-5 py-4 font-bold">2 500 → 12 000 MAD / trimestre</td>
                      <td className="px-5 py-4">Citations presse .ma, partenaires sectoriels : jamais des PBN jetables.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>,
            <>
              <p className="mt-6">
                Chez We Yan Digital, un accompagnement SEO sérieux pour une PME casablancaise démarre en pratique <strong className="font-semibold text-slate-900">autour de 8 000 MAD HT / mois</strong> sur un engagement de 6 mois : en dessous, on coupe soit le technique, soit le contenu, soit le local. C’est exactement ce que font les devis « trop beaux ».
              </p>
            </>,
          ],
        },
        {
          heading: 'Freelance, outil automatique ou agence : que paie-t-on vraiment ?',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                Un freelance senior confirmé reste pertinent si votre site est sain, votre niche peu concurrentielle, et si vous pouvez attendre. Une agence locale devient le bon choix dès que plusieurs métiers doivent avancer ensemble : développeur pour le Core Web Vitals, rédacteur pour les pages quartier, consultant pour Google Business, et un chef de projet qui parle à votre équipe commerciale.
              </p>
            </>,
            <>
              <p>
                Les plateformes qui promettent « 1re page Google en 30 jours » vendent de la visibilité artificielle. Google les détecte. Vous perdez le budget, parfois le domaine. En 2026, le prix d’un SEO propre à Casablanca, c’est surtout du temps d’experts et des contenus qui répondent à une requête réelle, pas une liste de 200 ancres exactes.
              </p>
            </>,
          ],
        },
        {
          heading: 'Du tarif à l’équipe : pourquoi le prix ne ranke pas tout seul',
          paragraphs: [
            <>
              <p>
                Une fourchette en MAD sert à cadrer le budget. Elle ne génère aucune position. Le glissement utile, pour une entreprise marocaine, est celui-ci : vous n’achetez pas « du SEO au kilo », vous achetez une méthode, un calendrier et une responsabilité. C’est là que le comparatif de prix doit basculer vers l’exécution.
              </p>
            </>,
            <>
              {lienAgence ? (
                <div className="rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-6 mt-2">
                  <SemanticLink lien={lienAgence} clusterSource="seo" className="text-slate-700" />
                </div>
              ) : null}
            </>,
            <>
              <p>
                Concrètement : le même budget de 10 000 MAD / mois chez une agence qui connaît Maarif, les fiches Google Business, les avis, et le maillage interne d’un site vitrine marocain, sort plus de leads qu’un prestataire offshore qui « optimise les meta » sans jamais appeler votre standard.
              </p>
            </>,
          ],
        },
        {
          heading: 'Comment lire un devis SEO sans se faire piéger',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <ol className="mt-1 space-y-3 ml-5 list-decimal text-[0.98rem] leading-8 text-slate-700">
                <li><strong>Exigez les livrables par mois</strong> : nombre de pages, correctifs techniques, actions GMB, reporting. Un « forfait SEO » sans liste est un abonnement flou.</li>
                <li><strong>Refusez la garantie de 1re position</strong> : personne ne commande l’algorithme. On s’engage sur un plan, des KPI, un rythme, pas sur un miracle.</li>
                <li><strong>Vérifiez qui écrit</strong> : contenus générés à la chaîne, sans expertise métier, saturent Google et n’aident pas un patient, un acheteur ou un DAF.</li>
                <li><strong>Gardez vos accès</strong> : Search Console, Analytics, GMB, DNS. Si le prestataire les lock, vous n’avez pas un partenaire, vous avez un otage.</li>
                <li><strong>Calendrier 6 mois minimum</strong> : à Casablanca, les requêtes locales bougent en 8 à 16 semaines. Couper à 60 jours, c’est jeter le ticket d’entrée.</li>
              </ol>
            </>,
          ],
        },
        {
          heading: 'Quel budget prévoir en 2026 ? Notre recommandation We Yan',
          paragraphs: [
            <>
              <p>
                Pour une PME ou un cabinet à Casablanca : <strong>audit 4 500 à 7 000 MAD</strong>, puis <strong>8 000 à 12 000 MAD / mois</strong> pendant 6 mois si vous visez des requêtes locales business (avocat, clinique, agence, restaurant premium, B2B). Pour un e-commerce national, prévoyez le haut de fourchette et un volet contenus produits.
              </p>
            </>,
            <>
              <p>
                Si vous voulez un chiffrage calé sur votre concurrence réelle (pas une grille générique), nous envoyons un plan d’action et un tarif sous 24h ouvrées. Le prix sert à décider. L’agence sert à ranker.
              </p>
            </>,
          ],
        },
      ]}
      faq={[
        {
          q: 'Quel est le prix d’un audit SEO à Casablanca en 2026 ?',
          r: 'Chez We Yan Digital, un audit technique + sémantique + local démarre à 3 500 MAD HT pour un site vitrine, et monte vers 9 000 MAD HT pour un e-commerce ou un site de 80+ pages. Le livrable inclut priorités, effort et impact — pas un PDF de 80 pages illisible.',
        },
        {
          q: 'Combien de mois faut-il budgéter avant de voir des positions ?',
          r: 'Sur des requêtes locales Casablanca peu concurrentielles, 8 à 12 semaines. Sur des requêtes nationales (« assurance », « formation », « immobilier neuf »), 4 à 9 mois. Un devis qui promet la première page en 15 jours n’est pas un devis SEO.',
        },
        {
          q: 'Le SEO local Google Business est-il inclus dans le retainer ?',
          r: 'Chez We Yan, oui : fiche, catégories, photos, posts, avis, NAP cohérent. Pour un commerce de quartier à Casablanca, GMB amène souvent plus d’appels que le blog dans les 90 premiers jours.',
        },
        {
          q: 'Peut-on faire du SEO à 3 000 MAD / mois ?',
          r: 'On peut publier deux textes. On ne peut pas à la fois corriger le technique, produire un silo, suivre GMB et reporter des KPI. À ce budget, mieux vaut un audit one-shot puis un trimestre plus tard, plutôt qu’un faux retainer.',
        },
      ]}
      ctaTitle="Besoin d’un devis SEO calé sur votre concurrence à Casablanca ?"
      ctaSubtitle="Nous chiffrons l’audit, le retainer et les livrables mois par mois. Réponse d’un humain sous 24h ouvrées, sans pack magique."
      relatedLinks={[{ label: 'Voir l’agence SEO Casablanca', to: '/agence-seo-casablanca' }]}
    />
  )
}
