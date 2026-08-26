import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/prix-meta-ads-casablanca-2026')
const lienAds = pageLinking?.liens_sortants.find((lien) => lien.cible === '/services/publicite-digitale')
const lienContact = pageLinking?.liens_sortants.find((lien) => lien.cible === '/contact')

export default function BlogPrixMetaAdsCasablancaPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogPrixMetaAdsCasablanca2026}
      heroImage="/images/home/dashboard.webp?v=20260623-ad"
      heroAlt="Prix Meta Ads Casablanca 2026 - CPC Facebook Instagram WhatsApp We Yan Digital"
      badgeCategory="Prix Meta Ads · Casablanca 2026"
      badgeColor={{ bg: '#DBEAFE', text: '#1D4ED8', border: '#93C5FD' }}
      title={
        <>
          Prix Meta Ads Casablanca <span style={{ color: '#0A66FF' }}>2026</span> : CPC, coût par lead et budget Facebook / Instagram
        </>
      }
      publishDate="17 Août 2026"
      readTime="10 minutes"
      authorName="We Yan Digital"
      authorRole="Agence Meta Ads Casablanca"
      intro={[
        <>
          <p>
            Facebook Ads et Instagram Ads au Maroc se paient encore en dirhams, mais le compteur n’est plus le CPC
            seul. Meta optimise un <strong className="font-semibold text-slate-900">objectif</strong> : trafic, leads,
            messages WhatsApp, ventes. Un CPL à 18 MAD sur un formulaire peut cacher des leads poubelle. Un CPC à 0,80
            MAD peut rapporter zéro devis. D’où ce guide 2026 : fourchettes réelles à Casablanca, ce que le budget
            média achète, et ce que facture une <strong className="font-semibold text-slate-900">agence Meta Ads
            Casablanca</strong>.
          </p>
        </>,
        <>
          <p>
            We Yan Digital gère des comptes depuis Maarif : retail, cliniques, formation, e-commerce, B2B. Les chiffres
            ci-dessous sont des médianes de campagnes saines — pixel + CAPI branchés, creatives testées, audience
            locale. Sans tracking, le « prix Meta » n’existe pas : vous achetez de l’impression.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'CPC, CPM, CPL : ce que vous payez vraiment sur Meta',
          headingAccent: '#0A66FF',
          paragraphs: [
            <>
              <p>
                Le CPC (clic) intéresse le trafic site. Le CPM (mille impressions) intéresse la notoriété. Le CPL (lead)
                intéresse le commercial. Le coût par message WhatsApp intéresse les marques marocaines qui closent sur
                le fil. Comparer deux devis « Meta 6 000 MAD » sans objectif, c’est comparer un kilo de pommes et un kilo
                de clous.
              </p>
            </>,
            <>
              <p>
                À Casablanca, l’enchère monte dès que plusieurs cliniques, écoles ou enseignes visent 25–45 ans, intérêts
                shopping, zone 15 km autour d’Anfa. Le CPM grimpe le ramadan, les soldes, et le week-end. Il redescend
                en août sur certains verticals. Un bon media plan lisse : creatives nouvelles toutes les 10–14 jours,
                sinon la fatigue d’audience fait exploser le CPC sans que Meta « soit devenu plus cher ».
              </p>
            </>,
            <>
              <ul className="mt-2 ml-5 list-disc space-y-2.5 text-[0.98rem] leading-8 text-slate-700">
                <li>
                  <strong className="font-semibold">Média</strong> : ce que Meta encaisse (enchères + TVA selon facturation).
                </li>
                <li>
                  <strong className="font-semibold">Gestion We Yan</strong> : 4 500 à 10 000 MAD / mois, ou 12–16 % du
                  média au-delà de 35 000 MAD.
                </li>
                <li>
                  <strong className="font-semibold">Creatives</strong> : 1 500 à 6 000 MAD / mois si shooting / UGC, souvent
                  le vrai levier de baisse du CPL, pas l’enchère.
                </li>
              </ul>
            </>,
          ],
        },
        {
          heading: 'Tableau prix Meta Ads à Casablanca en 2026 (MAD)',
          paragraphs: [
            <>
              <p>
                Fourchettes pour des campagnes avec pixel, CAPI, et au moins 3 creatives en rotation. Un CPL hors
                fourchette vient souvent d’un formulaire trop long, d’une audience « tout le Maroc » , ou d’une offre
                floue. Instagram et Facebook partagent le même compte Ads : le split se joue sur le placement, pas sur
                deux factures.
              </p>
            </>,
            <>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse overflow-hidden rounded-2xl border border-slate-200 text-[0.95rem] shadow-sm">
                  <thead>
                    <tr className="bg-slate-100 text-left text-slate-800">
                      <th className="px-5 py-4 font-black">Objectif</th>
                      <th className="px-5 py-4 font-black">CPC / CPM</th>
                      <th className="px-5 py-4 font-black">CPL / CPA typique</th>
                      <th className="px-5 py-4 font-black">Budget média min / mois</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Trafic site</td>
                      <td className="px-5 py-4 font-bold">CPC 0,5 → 1,4 MAD</td>
                      <td className="px-5 py-4">Visite, pas un lead</td>
                      <td className="px-5 py-4">3 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-5 py-4">Leads (formulaire / instant)</td>
                      <td className="px-5 py-4 font-bold">CPM 18 → 40 MAD</td>
                      <td className="px-5 py-4">12 → 45 MAD / lead</td>
                      <td className="px-5 py-4">5 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Messages WhatsApp</td>
                      <td className="px-5 py-4 font-bold">CPC 0,6 → 1,8 MAD</td>
                      <td className="px-5 py-4">8 → 25 MAD / conversation</td>
                      <td className="px-5 py-4">4 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-5 py-4">Ventes e-commerce</td>
                      <td className="px-5 py-4 font-bold">CPC 1 → 3 MAD</td>
                      <td className="px-5 py-4">20 → 90 MAD / achat</td>
                      <td className="px-5 py-4">8 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Notoriété / reach</td>
                      <td className="px-5 py-4 font-bold">CPM 15 → 35 MAD</td>
                      <td className="px-5 py-4">Pas un CPA</td>
                      <td className="px-5 py-4">3 000 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-5 py-4">Remarketing (site / IG)</td>
                      <td className="px-5 py-4 font-bold">CPC 0,4 → 1,1 MAD</td>
                      <td className="px-5 py-4">Souvent le meilleur CPA</td>
                      <td className="px-5 py-4">2 500 MAD</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-5 py-4">Advantage+ shopping</td>
                      <td className="px-5 py-4 font-bold">Mixte</td>
                      <td className="px-5 py-4">Selon catalogue + pixel</td>
                      <td className="px-5 py-4">10 000 MAD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>,
            <>
              <p className="mt-6">
                Un lead Instant Form à 14 MAD n’a de valeur que s’il est rappelé. Au Maroc, le taux de jointure téléphone
                descend vite si le formulaire n’a pas de numéro vérifié. We Yan préfère souvent WhatsApp ou un lead
                site + appel : CPL un peu plus haut, closing nettement meilleur. Le tableau sert à budgéter, pas à
                chasser le CPL le plus bas du marché.
              </p>
            </>,
          ],
        },
        {
          heading: 'Budget type : starter, croissance, e-commerce Casa',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                En dessous de 4 000 MAD / mois de média, Meta n’a pas assez d’événements pour sortir de la phase
                d’apprentissage. Vous voyez des CPM qui dansent. Ce n’est pas « l’algorithme contre vous » : c’est un
                échantillon trop petit. Les paliers We Yan 2026 :
              </p>
            </>,
            <>
              <ul className="mt-2 ml-5 list-disc space-y-2.5 text-[0.98rem] leading-8 text-slate-700">
                <li>
                  <strong>Starter local</strong> : 5 000 à 8 000 MAD média + 4 500 MAD gestion. 1 objectif (WhatsApp ou
                  leads), 4 creatives, zone Casablanca.
                </li>
                <li>
                  <strong>Croissance</strong> : 12 000 à 25 000 MAD média + 7 000 MAD gestion. Prospecting + remarketing +
                  tests Reels / stories chaque semaine.
                </li>
                <li>
                  <strong>E-commerce</strong> : 30 000 MAD+ média, gestion au %. Catalogue, CAPI, exclusions acheteurs,
                  creatives UGC.
                </li>
              </ul>
            </>,
            <>
              <p>
                La créative pèse plus que le ciblage en 2026. Une audience large + 5 visuels qui parlent darija / FR
                selon la cible bat un ultra-ciblage coincé sur 8 000 personnes Maarif. On le voit chaque mois : le CPC
                baisse quand le hook des 3 premières secondes est clair, pas quand on ajoute un 14e intérêt « shopping ».
              </p>
            </>,
          ],
        },
        {
          heading: 'Pièges Casablanca : audiences, CAPI, fatigue',
          paragraphs: [
            <>
              <p>
                Audience « Maroc entier » pour une boutique physique à Gauthier : vous payez Tanger. Lookalike trop
                petite : Meta recycle les mêmes 2 000 personnes. Pixel seul sans CAPI : iOS coupe 30 à 50 % des
                conversions, l’algorithme sous-apprend, le CPL monte. Creatives identiques 45 jours : fatigue, CPC +40 %.
              </p>
            </>,
            <>
              <p>
                Autre classique : booster une publication organique au lieu d’un Ads Manager structuré. Vous n’avez ni
                A/B propre, ni exclusion, ni reporting ROAS. Moins cher en apparence, plus cher au lead. Une{' '}
                <strong className="font-semibold text-slate-900">agence Meta Ads Casablanca</strong> pose d’abord le
                compte, ensuite le boost.
              </p>
            </>,
          ],
        },
        {
          heading: 'Du tarif à l’équipe qui pilote',
          headingAccent: '#0A66FF',
          paragraphs: [
            <>
              <p>
                Le tableau de prix ne ranke pas tout seul, et il ne convertit pas tout seul. Il sert à cadrer. Ensuite
                quelqu’un coupe les campagnes mortes, relance les creatives, et dit si WhatsApp vaut mieux que le
                formulaire. C’est le métier. Un outil qui « gère Meta à votre place » n’assiste pas votre commercial le
                dimanche soir quand 40 messages arrivent.
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
          heading: 'Recommandation We Yan 2026',
          paragraphs: [
            <>
              <p>
                Pour une PME casablancaise : <strong>5 000 à 10 000 MAD de média</strong>,{' '}
                <strong>4 500 à 7 000 MAD de gestion</strong>, 4 à 6 creatives, CAPI branché, objectif WhatsApp ou leads
                site. Huit semaines. Si le CPA tient, on scale. Si l’offre ne convertit pas, on arrête le média plutôt
                que d’ajouter 20 000 MAD sur une landing confuse.
              </p>
            </>,
            <>
              <p>
                Meta Ads et Google Ads ne se cannibalisent pas : Search attrape l’intention, Meta crée la demande et
                relance. Le bon budget 2026 à Casa est souvent 60 / 40 ou 50 / 50 selon que vous vendez un rendez-vous
                ou un produit. Le prix du lead sert à décider. L’agence sert à ne pas acheter des commentaires.
              </p>
            </>,
          ],
        },
      ]}
      faq={[
        {
          q: 'Quel budget Meta Ads minimum à Casablanca en 2026 ?',
          r: '5 000 MAD / mois de média pour un test leads ou WhatsApp lisible. 3 000 MAD peuvent suffire en remarketing seul si vous avez déjà du trafic. La gestion We Yan démarre à 4 500 MAD HT / mois en plus du média.',
        },
        {
          q: 'Pourquoi mon CPL Instant Form est bas mais aucun client n’achète ?',
          r: 'Le formulaire natif attire les curieux. Sans qualification (budget, ville, besoin), vous payez des contacts. Passez sur WhatsApp, raccourcissez, ou pré-qualifiez. Un CPL à 30 MAD rappelé vaut mieux qu’un CPL à 12 MAD fantôme.',
        },
        {
          q: 'Faut-il séparer Facebook et Instagram ?',
          r: 'Un seul compte Ads. On laisse souvent Advantage+ placements, puis on exclut Audience Network si le CPA se dégrade. Séparer les campagnes par objectif, pas par logo de réseau, sauf test créatif Stories vs Feed.',
        },
        {
          q: 'Meta Ads remplace-t-il le community management ?',
          r: 'Non. Ads accélère une identité déjà claire. Un feed vide ou une charte absente fait exploser le coût de la preuve sociale. D’où le couple We Yan : contenus + ads, pas un boost sur un compte mort.',
        },
      ]}
      ctaTitle="Besoin d’un media plan Meta Ads calé sur votre CPL à Casablanca ?"
      ctaSubtitle="Nous chiffrons média, creatives et gestion selon votre offre. Réponse d’un humain sous 24h ouvrées, sans boost magique."
      relatedLinks={[{ label: 'Voir l’agence Google Ads & Meta Ads', to: '/services/publicite-digitale/' }]}
    />
  )
}
