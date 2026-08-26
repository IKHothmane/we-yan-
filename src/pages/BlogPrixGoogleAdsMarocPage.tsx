import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/prix-google-ads-maroc-2026')
const lienAds = pageLinking?.liens_sortants.find((lien) => lien.cible === '/services/publicite-digitale')
const lienContact = pageLinking?.liens_sortants.find((lien) => lien.cible === '/contact')

export default function BlogPrixGoogleAdsMarocPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogPrixGoogleAdsMaroc2026}
      heroImage="/images/advertising/data-preview.webp"
      heroAlt="Prix Google Ads Maroc 2026 - CPC Search Display YouTube We Yan Digital Casablanca"
      badgeCategory="Prix Google Ads · Maroc 2026"
      badgeColor={{ bg: '#DBEAFE', text: '#1D4ED8', border: '#93C5FD' }}
      title={
        <>
          Prix Google Ads Maroc <span style={{ color: '#6483F0' }}>2026</span> : CPC, budget media et frais d’agence
        </>
      }
      publishDate="17 Août 2026"
      readTime="10 minutes"
      authorName="We Yan Digital"
      authorRole="Agence Google Ads Casablanca"
      intro={[
        <>
          <p>
            « Combien coûte Google Ads au Maroc ? » n’a pas une réponse unique. Vous payez trois choses distinctes : le{' '}
            <strong className="font-semibold text-slate-900">média</strong> (ce que Google encaisse au clic), les{' '}
            <strong className="font-semibold text-slate-900">frais de gestion</strong> (l’agence ou le freelance), et le{' '}
            <strong className="font-semibold text-slate-900">tracking</strong> (conversion, GA4, Google Ads tag). Un devis
            qui mélange les trois dans un « forfait 5 000 MAD » cache soit un budget média trop petit pour apprendre, soit
            une gestion au rabais.
          </p>
        </>,
        <>
          <p>
            Cet article pose des fourchettes 2026 en dirhams, observées à Casablanca et au national : CPC Search par
            intention, budgets minimums qui servent à quelque chose, et ce qu’une{' '}
            <strong className="font-semibold text-slate-900">agence Google Ads Maroc</strong> facture vraiment. Pas de
            garantie de première position : Google vend des enchères, pas un classement magique.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'Les 3 lignes d’un devis Google Ads (ne les mélangez pas)',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                Le CPC n’est pas le prix de l’agence. Le CPC est le coût d’un clic, variable selon mot-clé, qualité
                d’annonce, landing page et concurrence. L’agence facture le pilotage : structure des campagnes, négatives,
                extensions, enchères, creatives, reporting. Le tracking est un chantier à part : sans conversion mesurée,
                vous optimisez du trafic, pas du chiffre d’affaires.
              </p>
            </>,
            <>
              <p>
                À Casablanca, un budget média de 3 000 MAD / mois sur une requête concurrentielle (« avocat », « clinique
                esthétique », « formation MBA ») s’épuise en quelques jours. Le même montant sur une marque peu cherchée
                peut durer quatre semaines. D’où l’intérêt du tableau CPC ci-dessous : il sert à dimensionner le média,
                pas à signer un contrat les yeux fermés.
              </p>
            </>,
            <>
              <ul className="mt-2 ml-5 list-disc space-y-2.5 text-[0.98rem] leading-8 text-slate-700">
                <li>
                  <strong className="font-semibold">Média</strong> : ce que Google facture (Search, Display, Demand Gen,
                  YouTube, Performance Max).
                </li>
                <li>
                  <strong className="font-semibold">Gestion</strong> : 4 500 à 12 000 MAD / mois chez We Yan, ou 12–18 % du
                  média au-delà de 40 000 MAD / mois.
                </li>
                <li>
                  <strong className="font-semibold">Setup</strong> : compte, conversions, audiences, négatives : 2 500 à
                  6 000 MAD one-shot si le compte part de zéro.
                </li>
              </ul>
            </>,
          ],
        },
        {
          heading: 'Tableau CPC Google Ads au Maroc en 2026 (MAD)',
          paragraphs: [
            <>
              <p>
                Fourchettes moyennes constatées sur des comptes gérés depuis Casablanca. Un CPC hors fourchette n’est pas
                une arnaque : c’est souvent un Quality Score faible, une landing lente, ou une enchère trop large
                (match trop ouvert). Ces chiffres excluent les enchères « brand » d’un concurrent qui vous copie le nom.
              </p>
            </>,
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse overflow-hidden rounded-2xl border border-slate-200 text-[0.95rem] shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-left text-slate-800">
                      <th className="px-5 py-4 font-black">Type / intention</th>
                      <th className="px-5 py-4 font-black">CPC moyen</th>
                      <th className="px-5 py-4 font-black">CPL / CPA typique</th>
                      <th className="px-5 py-4 font-black">Budget média min / mois</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Search marque (votre nom)</td>
                      <td className="px-5 py-4 font-bold">1 → 3 MAD</td>
                      <td className="px-5 py-4">15 → 40 MAD</td>
                      <td className="px-5 py-4">2 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-5 py-4">Search local Casa (services)</td>
                      <td className="px-5 py-4 font-bold">8 → 22 MAD</td>
                      <td className="px-5 py-4">40 → 180 MAD</td>
                      <td className="px-5 py-4">8 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Search e-commerce / retail</td>
                      <td className="px-5 py-4 font-bold">3 → 9 MAD</td>
                      <td className="px-5 py-4">25 → 90 MAD</td>
                      <td className="px-5 py-4">6 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-5 py-4">Search B2B national</td>
                      <td className="px-5 py-4 font-bold">10 → 28 MAD</td>
                      <td className="px-5 py-4">80 → 350 MAD</td>
                      <td className="px-5 py-4">10 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Display / Demand Gen</td>
                      <td className="px-5 py-4 font-bold">0,4 → 1,5 MAD</td>
                      <td className="px-5 py-4">Variable (vue / visite)</td>
                      <td className="px-5 py-4">4 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-5 py-4">YouTube (TrueView / in-feed)</td>
                      <td className="px-5 py-4 font-bold">0,5 → 2 MAD</td>
                      <td className="px-5 py-4">Lead 30 → 120 MAD</td>
                      <td className="px-5 py-4">5 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Performance Max (mixte)</td>
                      <td className="px-5 py-4 font-bold">3 → 12 MAD</td>
                      <td className="px-5 py-4">Selon feed + conversion</td>
                      <td className="px-5 py-4">8 000 MAD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>,
            <>
              <p className="mt-6">
                Lecture simple : si votre lead doit rapporter moins de 200 MAD de marge, un Search local à 22 MAD le clic
                avec un taux de conversion de 5 % donne un CPL autour de 440 MAD. Soit le tunnel convertit mieux, soit
                vous changez de mot-clé, soit Google Ads n’est pas le premier levier. C’est exactement le calcul qu’une
                agence fait avant d’ouvrir le budget.
              </p>
            </>,
          ],
        },
        {
          heading: 'Budget mensuel type pour une PME à Casablanca',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                En 2026, We Yan Digital refuse les campagnes « 1 500 MAD média + gestion offerte » : Google n’a pas assez
                de data pour sortir du stade brouillon, et vous concluez que « Ads ne marche pas ». Les paliers ci-dessous
                sont ceux qui permettent un test propre sur 6 à 8 semaines.
              </p>
            </>,
            <>
              <ul className="mt-2 ml-5 list-disc space-y-2.5 text-[0.98rem] leading-8 text-slate-700">
                <li>
                  <strong>Test Search local</strong> : 8 000 à 12 000 MAD média + 5 000 MAD gestion. 15–25 mots-clés, 2
                  landing, conversions appel + formulaire.
                </li>
                <li>
                  <strong>PME en croissance</strong> : 15 000 à 30 000 MAD média + 7 000 à 10 000 MAD gestion. Search +
                  Remarketing + YouTube court.
                </li>
                <li>
                  <strong>E-commerce / national</strong> : 40 000 MAD+ média, gestion au % (12–15 %). Feed marchand,
                  PMax, Search marque protégée.
                </li>
              </ul>
            </>,
            <>
              <p>
                Le Quality Score reste le levier le plus sous-estimé au Maroc. Une annonce générique + une homepage lente
                sur mobile Maarif, et votre CPC double sans que le secteur ait changé. Avant d’augmenter le budget,
                on corrige la page, le message, les négatives. C’est moins spectaculaire qu’un « boost », c’est ce qui
                fait baisser le CPC de 8 à 5 MAD sur trois semaines.
              </p>
            </>,
          ],
        },
        {
          heading: 'Ce qui fait exploser le CPC (et comment le calmer)',
          paragraphs: [
            <>
              <p>
                Concurrence Casa / Rabat sur les mêmes termes. Match trop large qui aspire des requêtes darija hors
                sujet. Page qui met 4 secondes à charger. Conversion mal taguée : Google « apprend » sur des pages vues,
                pas des devis. Annonces sans extension d’appel alors que 60 % des leads locaux sont un coup de fil.
              </p>
            </>,
            <>
              <p>
                Calmer le CPC, ce n’est pas baisser l’enchère jusqu’à disparaître. C’est resserrer : intention commerciale
                uniquement, négatives (gratuit, stage, PDF, emploi), horaires où votre standard répond, zone Casablanca
                puis cercles Rabat / Marrakech si le CPA tient. Un compte propre à 10 000 MAD / mois bat un compte sale à
                40 000 MAD.
              </p>
            </>,
          ],
        },
        {
          heading: 'Freelance, outil automatique ou agence Google Ads Maroc',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                Un freelance senior reste pertinent si vous avez déjà un compte sain, un tracking fiable, et besoin d’un
                regard 4 heures par semaine. Une agence locale devient le bon choix dès que Search, YouTube, PMax et le
                site doivent bouger ensemble — et que quelqu’un doit répondre sous 24h quand une campagne part en vrille
                un vendredi.
              </p>
            </>,
            <>
              <p>
                Les scripts « IA qui gère Google Ads toute seule » optimisent le CPC, pas votre marge. Sans brief secteur
                (clinique vs retail vs B2B SaaS marocain), l’algorithme pousse le volume. Vous payez des clics. L’agence
                sert à dire non : ce mot-clé, cette zone, cette créative, on coupe.
              </p>
            </>,
            lienAds ? (
              <div className="mt-2 rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-6">
                <SemanticLink lien={lienAds} clusterSource="ads" className="text-slate-700" />
              </div>
            ) : null,
            lienContact ? (
              <SemanticLink lien={lienContact} clusterSource="ads" className="text-slate-700" />
            ) : null,
          ],
        },
        {
          heading: 'Notre recommandation We Yan pour 2026',
          paragraphs: [
            <>
              <p>
                Pour une PME ou un cabinet à Casablanca : <strong>setup 3 500 à 6 000 MAD</strong>, puis{' '}
                <strong>8 000 à 15 000 MAD de média</strong> et <strong>5 000 à 8 000 MAD de gestion</strong> pendant 8
                semaines de test. Si le CPA est dans votre fourchette, on scale. Si non, on arrête ou on change d’offre
                — pas de retainer ads éternel « pour voir ».
              </p>
            </>,
            <>
              <p>
                Google Ads n’est pas moins cher que le SEO. Il est plus rapide. Le mix gagnant au Maroc reste Search pour
                les leads maintenant, SEO pour baisser le coût d’acquisition à 6 mois. Le prix du clic sert à décider.
                L’agence sert à ne pas brûler le budget.
              </p>
            </>,
          ],
        },
      ]}
      faq={[
        {
          q: 'Quel budget Google Ads minimum au Maroc en 2026 ?',
          r: 'En Search local Casablanca, 8 000 MAD / mois de média est le plancher pour un test lisible. En dessous, Google n’apprend pas et vous concluez à tort que le canal est mort. La gestion We Yan démarre à 5 000 MAD HT / mois en plus du média.',
        },
        {
          q: 'Le CPC Google Ads est-il plus cher à Casablanca qu’à Rabat ?',
          r: 'Souvent oui sur les services (santé, juridique, immobilier, formation). La densité d’annonceurs est plus forte. Un CPC Casa à 18 MAD peut tomber à 11 MAD sur la même requête à Fès, avec un volume plus faible. On dimensionne ville par ville.',
        },
        {
          q: 'Faut-il payer l’agence en % du média ou au forfait ?',
          r: 'Forfait sous 30 000 MAD de média : le % punirait une gestion sérieuse sur un petit budget. Au-delà, 12–15 % aligne l’agence sur le scale. We Yan publie les deux modes, sans surprise sur la facture.',
        },
        {
          q: 'Google Ads remplace-t-il le SEO ?',
          r: 'Non. Ads achète la visibilité dès la première semaine. Le SEO construit un actif. Couper Ads le jour où le SEO ranke est possible. Couper le SEO parce qu’Ads « marche » vous laisse dépendant du CPC qui, lui, ne baisse jamais tout seul.',
        },
      ]}
      ctaTitle="Besoin d’un media plan Google Ads calé sur votre CPC réel ?"
      ctaSubtitle="Nous chiffrons média, gestion et tracking selon votre secteur à Casablanca. Réponse d’un humain sous 24h ouvrées, sans pack magique."
      relatedLinks={[{ label: 'Voir l’agence Google Ads & Meta Ads', to: '/services/publicite-digitale/' }]}
    />
  )
}
