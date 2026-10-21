import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/prix-community-management-maroc-2026')
const lienCm = pageLinking?.liens_sortants.find((l) => l.cible === '/community-management-casablanca')
const lienContact = pageLinking?.liens_sortants.find((l) => l.cible === '/contact')

export default function BlogPrixCommunityManagementMarocPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogPrixCommunityManagementMaroc2026}
      heroImage="/images/content/community-team.webp"
      heroAlt="Prix community management Maroc 2026 - forfaits Instagram TikTok LinkedIn We Yan Digital Casablanca"
      badgeCategory="Prix · Community management 2026"
      badgeColor={{ bg: '#FCE7F3', text: '#9D174D', border: '#F9A8D4' }}
      title={
        <>
          Combien coûte le community management au Maroc <span style={{ color: '#6483F0' }}>2026</span> ?
        </>
      }
      publishDate="21 Octobre 2026"
      readTime="9 minutes"
      authorName="We Yan Digital"
      authorRole="Agence digitale Casablanca"
      intro={[
        <>
          <p>
            En 2026, un community management pro au Maroc tourne souvent entre{' '}
            <strong className="font-semibold text-slate-900">2 500 et 15 000+ MAD/mois</strong> selon le volume de
            posts, le nombre de plateformes et l’inclusion ou non de Meta Ads. Chez We Yan Digital à Casablanca, les
            forfaits sont <strong className="font-semibold text-slate-900">chiffrés sur devis</strong> après cadrage du
            brief — les fourchettes ci-dessous sont indicatives marché.
          </p>
        </>,
        <>
          <p>
            Cet article aide les PME marocaines à lire un devis CM : ce qui est inclus, ce qui est hors forfait, et
            quand un freelance junior ne suffit plus.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'Fourchettes indicatives 2026 (MAD / mois)',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[560px] text-left text-[0.95rem]">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-4 py-3">Profil</th>
                      <th className="px-4 py-3">Fourchette</th>
                      <th className="px-4 py-3">Typiquement inclus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-4 py-3">Freelance junior</td>
                      <td className="px-4 py-3 font-bold">2 500 → 5 000</td>
                      <td className="px-4 py-3">1–2 réseaux, posts basiques, peu de stratégie</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-4 py-3">Freelance senior / petite équipe</td>
                      <td className="px-4 py-3 font-bold">5 000 → 9 000</td>
                      <td className="px-4 py-3">Planning, carrousels, stories, reporting mensuel</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-4 py-3">Agence (CM + créa + option Ads)</td>
                      <td className="px-4 py-3 font-bold">7 000 → 15 000+</td>
                      <td className="px-4 py-3">Multi-plateformes, reels, shooting, Ads, KPI leads</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>,
            <>
              <p className="mt-4 text-slate-600">
                Les fourchettes sont indicatives marché Maroc 2026. We Yan Digital ne publie pas de grille fixe : chaque
                forfait est sur devis selon Instagram, TikTok, LinkedIn, volume et Ads.
              </p>
            </>,
          ],
        },
        {
          heading: 'Ce qui fait monter (ou baisser) le prix',
          paragraphs: [
            <>
              <ul className="ml-5 list-disc space-y-2.5 text-[0.98rem] leading-8 text-slate-700">
                <li>
                  <strong>Nombre de plateformes</strong> : IG seul ≠ IG + TikTok + LinkedIn + Facebook.
                </li>
                <li>
                  <strong>Production</strong> : templates Canva vs shooting studio Casablanca + reels tournés.
                </li>
                <li>
                  <strong>Animation</strong> : réponses DM / commentaires 5j/7 vs SLA &lt; 2h.
                </li>
                <li>
                  <strong>Ads</strong> : organique seul vs Meta / TikTok Ads inclus (média à part).
                </li>
                <li>
                  <strong>Langue</strong> : FR seul vs FR + darija + EN pour audiences Casa / Rabat / export.
                </li>
              </ul>
            </>,
          ],
        },
        {
          heading: 'Freelance ou agence à Casablanca ?',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                Un freelance suffit pour une présence minimale. Dès que vous avez besoin de shooting, de reels
                hebdomadaires, de tracking leads et d’un interlocuteur stable, une{' '}
                <strong className="font-semibold text-slate-900">agence community management Casablanca</strong> limite
                les trous de calendrier et les comptes « morts » entre deux vacances.
              </p>
            </>,
            lienCm ? (
              <div className="mt-2 rounded-2xl border border-[#FBCFE8] bg-[#FDF2F8] p-6">
                <SemanticLink lien={lienCm} clusterSource="creation" className="text-slate-700" />
              </div>
            ) : null,
            lienContact ? <SemanticLink lien={lienContact} clusterSource="creation" className="text-slate-700" /> : null,
          ],
        },
      ]}
      faq={[
        {
          q: 'Combien de posts par mois pour un forfait correct ?',
          r: 'Souvent 12 à 24 posts / mois + stories, selon la niche. En dessous de 8 posts réguliers, l’algorithme Instagram / TikTok peine à pousser la marque.',
        },
        {
          q: 'Le community management inclut-il la publicité ?',
          r: 'Pas toujours. Chez We Yan, Ads Meta / TikTok peut être option ou pack Performance — budget média et gestion précisés au devis.',
        },
        {
          q: 'Quel délai pour voir de l’engagement ?',
          r: 'Signaux (portée, commentaires) souvent en 2 à 4 semaines si le rythme est tenu. Des leads stables demandent en général plusieurs mois + tracking.',
        },
      ]}
      ctaTitle="Besoin d’un forfait community management calé sur vos réseaux ?"
      ctaSubtitle="Planning éditorial, créas et reporting — devis We Yan Digital sous 24h ouvrées à Casablanca."
      relatedLinks={[{ label: 'Community management Casablanca', to: '/community-management-casablanca/' }]}
    />
  )
}
