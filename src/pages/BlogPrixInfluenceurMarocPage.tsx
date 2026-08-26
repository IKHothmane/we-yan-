import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/prix-influenceur-maroc-2026')
const lienInfluence = pageLinking?.liens_sortants.find((lien) => lien.cible === '/services/marketing-influence')
const lienContact = pageLinking?.liens_sortants.find((lien) => lien.cible === '/contact')

export default function BlogPrixInfluenceurMarocPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogPrixInfluenceurMaroc2026}
      heroImage="/images/content/gallery-lifestyle.webp"
      heroAlt="Prix influenceur Maroc 2026 - tarifs story reel post nano micro macro We Yan Digital Casablanca"
      badgeCategory="Prix influenceur · Maroc 2026"
      badgeColor={{ bg: '#EDE9FE', text: '#5B21B6', border: '#C4B5FD' }}
      title={
        <>
          Prix d’un influenceur au Maroc <span style={{ color: '#6483F0' }}>2026</span> : story, reel, post (nano / micro / macro)
        </>
      }
      publishDate="17 Août 2026"
      readTime="10 minutes"
      authorName="We Yan Digital"
      authorRole="Agence influenceur Casablanca"
      intro={[
        <>
          <p>
            « Combien coûte un influenceur au Maroc ? » se répond en trois colonnes :{' '}
            <strong className="font-semibold text-slate-900">cachet</strong> (ce que le créateur encaisse),{' '}
            <strong className="font-semibold text-slate-900">droits</strong> (usage ads, durée, exclusivité), et{' '}
            <strong className="font-semibold text-slate-900">gestion</strong> (casting, contrat, brief, reporting). Un
            tarif Instagram envoyé en DM mélange souvent les trois. Vous comparez des pommes et des clics achetés.
          </p>
        </>,
        <>
          <p>
            Fourchettes 2026 en MAD, observées à Casablanca, Rabat, Marrakech : story, reel, post, selon nano (10k–50k),
            micro (50k–200k) et macro (200k+). Une{' '}
            <strong className="font-semibold text-slate-900">agence influenceur Maroc</strong> sert à négocier le vrai
            livrable, pas à gonfler une facture « pack 10 KOL ».
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'Ce que le prix doit inclure (et ce qu’il cache)',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                Le cachet brut n’est pas le coût de campagne. Ajoutez : tournage si le créateur n’a pas de setup,
                produits offerts, déplacement Casa–Rabat, mention légale #ad, droits de booster le UGC 30 à 90 jours.
                Un reel « 8 000 MAD » sans droits ads vous force à recaster dès que vous voulez scale Meta. Un reel
                « 11 000 MAD » avec whitelist 60 jours est souvent moins cher au CPA.
              </p>
            </>,
            <>
              <ul className="mt-2 ml-5 list-disc space-y-2.5 text-[0.98rem] leading-8 text-slate-700">
                <li>
                  <strong>Cachet</strong> : story / reel / post, une vague ou un mois.
                </li>
                <li>
                  <strong>Droits</strong> : ads, site, point de vente, 30–90 jours, parfois 6 mois.
                </li>
                <li>
                  <strong>Gestion We Yan</strong> : 6 000 à 15 000 MAD selon le nombre de profils, hors cachets.
                </li>
              </ul>
            </>,
          ],
        },
        {
          heading: 'Tableau prix story / reel / post Maroc 2026 (MAD)',
          paragraphs: [
            <>
              <p>
                Médianes de négociations saines — audience réelle, pas d’achat de followers. Casablanca et comptes
                bilingues FR/darija : haut de fourchette. Intérieur du pays et comptes niche : bas. Un écart ×3 sur le
                même palier d’abonnés est normal : l’engagement et la ville pèsent plus que le compteur.
              </p>
            </>,
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse overflow-hidden rounded-2xl border border-slate-200 text-[0.95rem] shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-left text-slate-800">
                      <th className="px-5 py-4 font-black">Format</th>
                      <th className="px-5 py-4 font-black">Nano 10k–50k</th>
                      <th className="px-5 py-4 font-black">Micro 50k–200k</th>
                      <th className="px-5 py-4 font-black">Macro 200k+</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Story (1–3 slides)</td>
                      <td className="px-5 py-4 font-bold">800 → 2 500</td>
                      <td className="px-5 py-4 font-bold">2 500 → 8 000</td>
                      <td className="px-5 py-4 font-bold">8 000 → 25 000</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-5 py-4">Reel / TikTok (20–45 s)</td>
                      <td className="px-5 py-4 font-bold">1 500 → 5 000</td>
                      <td className="px-5 py-4 font-bold">5 000 → 18 000</td>
                      <td className="px-5 py-4 font-bold">18 000 → 60 000</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Post feed</td>
                      <td className="px-5 py-4 font-bold">1 200 → 4 000</td>
                      <td className="px-5 py-4 font-bold">4 000 → 14 000</td>
                      <td className="px-5 py-4 font-bold">12 000 → 45 000</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-5 py-4">Pack 1 reel + 3 stories</td>
                      <td className="px-5 py-4 font-bold">2 500 → 7 000</td>
                      <td className="px-5 py-4 font-bold">7 000 → 22 000</td>
                      <td className="px-5 py-4 font-bold">22 000 → 70 000</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Droit ads +30–90 j (en sus)</td>
                      <td className="px-5 py-4">+20 → 40 %</td>
                      <td className="px-5 py-4">+30 → 60 %</td>
                      <td className="px-5 py-4">+40 → 80 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>,
            <>
              <p className="mt-6">
                Lecture CPL : un micro à 6 000 MAD le reel qui amène 40 conversations WhatsApp = 150 MAD / conversation.
                Un macro à 40 000 MAD qui amène 80 likes et 4 DM = vous avez acheté de la notoriété, pas un tunnel. Le
                tableau sert à budgéter. Le casting sert à ne pas payer le palier au-dessus sans audience utile à Casa.
              </p>
            </>,
          ],
        },
        {
          heading: 'Budget campagne type à Casablanca',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                Test 4 semaines, 5 nanos / micros locaux : 18 000 à 35 000 MAD de cachets + 6 000 à 8 000 MAD de
                gestion. Vague nationale 3 macros : 80 000 MAD+ hors droits. We Yan refuse le « un gros pour impressionner
                le DG » en premier test : trop cher pour apprendre.
              </p>
            </>,
            <>
              <p>
                Ramadan, soldes, rentrée : les cachets montent de 15 à 40 %. Réservez 3 à 5 semaines à l’avance. Un
                créateur Casa food le vendredi soir n’est plus dispo le mercredi pour le week-end.
              </p>
            </>,
          ],
        },
        {
          heading: 'Faux followers, agent, et devis trop beaux',
          paragraphs: [
            <>
              <p>
                Un compte 200k à 1,2 % d’engagement avec des commentaires « nice pic » en anglais n’est pas un macro
                marocain : c’est un catalogue. On croise les vues stories vs abonnés, la cohérence des villes, les
                anciennes pubs. Un tarif 50 % sous le marché cache souvent un compte loué ou un usage illimité que vous
                n’aurez jamais par écrit.
              </p>
            </>,
            <>
              <p>
                Les agents honnêtes existent. Les intermédiaires qui prennent 40 % sans brief ni reporting, aussi.
                We Yan facture la gestion en clair et reverse le cachet. Vous savez qui est payé pour quoi.
              </p>
            </>,
          ],
        },
        {
          heading: 'Du tarif à l’agence qui caste',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                Une grille MAD ne choisit pas le créateur. Elle évite de signer à l’aveugle. Ensuite quelqu’un vérifie
                l’audience Casablanca, écrit le brief, relance le livrable, et dit si on booste en ads. C’est le métier
                d’une agence influenceur, pas d’un tableur.
              </p>
            </>,
            lienInfluence ? (
              <div className="mt-2 rounded-2xl border border-[#DDD6FE] bg-[#F5F3FF] p-6">
                <SemanticLink lien={lienInfluence} clusterSource="ads" className="text-slate-700" />
              </div>
            ) : null,
            lienContact ? (
              <SemanticLink lien={lienContact} clusterSource="ads" className="text-slate-700" />
            ) : null,
          ],
        },
        {
          heading: 'Recommandation We Yan 2026',
          paragraphs: [
            <>
              <p>
                PME Casa : <strong>5 micros</strong>, mix story + reel, droits ads 60 jours, budget cachets{' '}
                <strong>20 000 à 40 000 MAD</strong>, gestion <strong>7 000 MAD</strong>, huit semaines. Si le CPA tient,
                on scale ou on whitelist. Si l’offre ne convertit pas, on arrête — pas un deuxième macro « pour voir ».
              </p>
            </>,
            <>
              <p>
                Le prix de la story sert à décider. L’agence sert à ne pas acheter des vues fantômes.
              </p>
            </>,
          ],
        },
      ]}
      faq={[
        {
          q: 'Quel est le prix d’une story influenceur au Maroc en 2026 ?',
          r: 'Nano 800 à 2 500 MAD, micro 2 500 à 8 000 MAD, macro 8 000 à 25 000 MAD. Casablanca au haut de fourchette. Une story swipe-up / lien + mention #ad se négocie au-dessus d’une story « look du jour » sans CTA.',
        },
        {
          q: 'Faut-il payer plus pour TikTok que pour Instagram ?',
          r: 'Souvent le même palier si l’audience se recoupe. Un compte TikTok-only avec un bon taux de complétion peut coûter autant qu’un micro IG. On achète le format qui convertit votre offre, pas le logo de l’app.',
        },
        {
          q: 'Le barème We Yan est-il un tarif fixe ?',
          r: 'Non : c’est une boussole. Chaque devis liste cachet, droits, dates. Vous comparez des lignes, pas un « forfait influence » flou.',
        },
        {
          q: 'Peut-on payer en produits seulement ?',
          r: 'Sur du nano très local, parfois un produit premium + petit cachet. Sur du micro / macro Casa, le 100 % barter se raréfie en 2026 : le créateur a des charges. Prévoyez du cash.',
        },
      ]}
      ctaTitle="Besoin d’un devis influence calé sur des cachets réels ?"
      ctaSubtitle="Trois profils, fourchette MAD, calendrier. Réponse d’un humain sous 24h ouvrées, sans pack magique."
      relatedLinks={[{ label: 'Voir l’agence influenceur Maroc', to: '/services/marketing-influence/' }]}
    />
  )
}
