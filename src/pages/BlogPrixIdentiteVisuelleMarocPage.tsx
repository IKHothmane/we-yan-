import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/prix-identite-visuelle-maroc-2026')
const lienBranding = pageLinking?.liens_sortants.find(
  (l) => l.cible === '/services/strategie-marketing-rebranding',
)
const lienContact = pageLinking?.liens_sortants.find((l) => l.cible === '/contact')

export default function BlogPrixIdentiteVisuelleMarocPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogPrixIdentiteVisuelleMaroc2026}
      heroImage="/images/strategy/positioning.webp"
      heroAlt="Prix identité visuelle Maroc 2026 - logo charte branding We Yan Digital Casablanca"
      badgeCategory="Prix · Identité visuelle 2026"
      badgeColor={{ bg: '#FFEDD5', text: '#C2410C', border: '#FDBA74' }}
      title={
        <>
          Combien coûte une identité visuelle au Maroc <span style={{ color: '#FC9700' }}>2026</span> ?
        </>
      }
      publishDate="21 Octobre 2026"
      readTime="9 minutes"
      authorName="We Yan Digital"
      authorRole="Agence branding Casablanca"
      intro={[
        <>
          <p>
            Logo seul sur Canva ou système de marque complet ? Au Maroc en 2026, les fourchettes indicatives vont souvent
            de <strong className="font-semibold text-slate-900">3 000 MAD</strong> (logo basique) à{' '}
            <strong className="font-semibold text-slate-900">70 000 MAD+</strong> (identité + site + activation). Chez We
            Yan Digital, Starter / Growth / Premium sont <strong className="font-semibold text-slate-900">sur devis</strong>{' '}
            — pas de grille figée dans cet article.
          </p>
        </>,
        <>
          <p>
            Réponse utile pour une PME à Casablanca : budgétez d’abord le périmètre (logo, charte, déclinaisons,
            guidelines), puis le déploiement (site, réseaux, print).
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'Tableau indicatif logo & identité (MAD HT)',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full min-w-[560px] text-left text-[0.95rem]">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-4 py-3">Livrable</th>
                      <th className="px-4 py-3">Marché indicatif</th>
                      <th className="px-4 py-3">Pour qui</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-4 py-3">Logo simple (freelance)</td>
                      <td className="px-4 py-3 font-bold">3 000 → 8 000</td>
                      <td className="px-4 py-3">Test marque, MVP</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-slate-50">
                      <td className="px-4 py-3">Logo + mini-charte</td>
                      <td className="px-4 py-3 font-bold">10 000 → 25 000</td>
                      <td className="px-4 py-3">PME qui pose une identité propre</td>
                    </tr>
                    <tr className="border-t border-slate-200 bg-white">
                      <td className="px-4 py-3">Identité + site / contenus</td>
                      <td className="px-4 py-3 font-bold">25 000 → 70 000+</td>
                      <td className="px-4 py-3">Rebranding ou lancement sérieux</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>,
            <>
              <p className="mt-4 text-slate-600">
                Fourchettes marché indicatives 2026. Un devis We Yan liste les déclinaisons (réseaux, print, signalétique)
                pour éviter les « packs surprise ».
              </p>
            </>,
          ],
        },
        {
          heading: 'Logo ≠ branding',
          paragraphs: [
            <>
              <p>
                Le logo est un signe. L’identité visuelle, c’est palette, typo, règles photo, ton et usages. Le branding
                ajoute positionnement et promesse. Sans ces couches, vous payez un fichier .ai que personne n’applique
                correctement sur Instagram ou sur une vitrine Maarif.
              </p>
            </>,
          ],
        },
        {
          heading: 'Passer du prix à l’agence branding',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                Une fois le budget cadré, l’enjeu est la méthode : audit → stratégie → identité → déploiement. C’est le
                rôle d’une <strong className="font-semibold text-slate-900">agence branding à Casablanca</strong>.
              </p>
            </>,
            lienBranding ? (
              <div className="mt-2 rounded-2xl border border-[#FDBA74] bg-[#FFF7ED] p-6">
                <SemanticLink lien={lienBranding} clusterSource="branding" className="text-slate-700" />
              </div>
            ) : null,
            lienContact ? <SemanticLink lien={lienContact} clusterSource="branding" className="text-slate-700" /> : null,
          ],
        },
      ]}
      faq={[
        {
          q: 'Faut-il déposer sa marque à l’OMPIC avant le logo ?',
          r: 'Idéalement oui : recherche d’antériorité puis dépôt. Les frais OMPIC officiels sont distincts des honoraires design / agence.',
        },
        {
          q: 'Combien de temps pour une identité complète ?',
          r: 'Le délai est communiqué au devis selon le pack et les validations. Comptez souvent plusieurs semaines pour logo + charte, plus pour un déploiement digital complet.',
        },
        {
          q: 'Peut-on rebrander sans changer de nom ?',
          r: 'Oui, et c’est fréquent à Casablanca : vous gardez avis Google et domaine, vous changez promesse et système visuel.',
        },
      ]}
      ctaTitle="Besoin d’un devis identité visuelle à Casablanca ?"
      ctaSubtitle="Audit court, périmètre clair, devis HT sous 24h — We Yan Digital Maarif."
      relatedLinks={[{ label: 'Agence branding & rebranding', to: '/services/strategie-marketing-rebranding/' }]}
    />
  )
}
