import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/comment-choisir-agence-digitale-casablanca')
const lienAgence = pageLinking?.liens_sortants.find((l) => l.cible === '/agence')
const lienProjets = pageLinking?.liens_sortants.find((l) => l.cible === '/projets')
const lienContact = pageLinking?.liens_sortants.find((l) => l.cible === '/contact')

export default function BlogChoisirAgenceDigitaleCasablancaPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogChoisirAgenceDigitaleCasablanca}
      heroImage="/images/agency/story.webp"
      heroAlt="Comment choisir une agence digitale à Casablanca - critères We Yan Digital"
      badgeCategory="Guide · Agence digitale Casa"
      badgeColor={{ bg: '#DBEAFE', text: '#1D4ED8', border: '#93C5FD' }}
      title={
        <>
          Comment choisir une agence digitale à <span style={{ color: '#6483F0' }}>Casablanca</span> ?
        </>
      }
      publishDate="21 Octobre 2026"
      readTime="10 minutes"
      authorName="We Yan Digital"
      authorRole="Agence digitale Casablanca"
      intro={[
        <>
          <p>
            La « meilleure » agence digitale à Casablanca n’est pas celle au logo le plus joli : c’est celle qui{' '}
            <strong className="font-semibold text-slate-900">comprend votre marché, mesure les résultats et reste
            joignable</strong>. Voici une checklist concrète pour PME, startups et enseignes marocaines — avant de
            signer un devis.
          </p>
        </>,
        <>
          <p>
            Objectif : éviter les packs flous, les promesses « 1re page Google en 15 jours », et les prestataires qui
            disparaissent après l’acompte.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'Les 8 critères qui comptent vraiment',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <ol className="ml-5 list-decimal space-y-3 text-[0.98rem] leading-8 text-slate-700">
                <li>
                  <strong>Spécialité claire</strong> : SEO, ads, branding, CM — pas « on fait tout » sans équipe.
                </li>
                <li>
                  <strong>Cas locaux</strong> : preuves Casablanca / Maroc, pas seulement un portfolio international flou.
                </li>
                <li>
                  <strong>Devis détaillé</strong> : livrables par mois, hors média, hors licences.
                </li>
                <li>
                  <strong>Accès aux comptes</strong> : vous gardez GSC, Ads, Meta Business, DNS.
                </li>
                <li>
                  <strong>Reporting</strong> : KPI business (leads, appels, ROAS), pas seulement likes.
                </li>
                <li>
                  <strong>Présence locale</strong> : interlocuteur Maarif / Casa ou process à distance cadré.
                </li>
                <li>
                  <strong>Délais honnêtes</strong> : SEO en mois, Ads en semaines — jamais de miracle contractuel.
                </li>
                <li>
                  <strong>Références joignables</strong> : un client qui répond vaut dix slides.
                </li>
              </ol>
            </>,
          ],
        },
        {
          heading: 'Questions à poser en premier rendez-vous',
          paragraphs: [
            <>
              <ul className="ml-5 list-disc space-y-2.5 text-[0.98rem] leading-8 text-slate-700">
                <li>Qui travaille sur mon dossier (noms / rôles) ?</li>
                <li>Quels KPI dans 30 / 90 jours — et lesquels vous ne garantissez pas ?</li>
                <li>Le média Ads est-il inclus ou à part ?</li>
                <li>Que se passe-t-il si je résilie à 3 mois ?</li>
              </ul>
            </>,
          ],
        },
        {
          heading: 'Voir la méthode et les preuves We Yan',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                We Yan Digital est une agence digitale à Casablanca (Maarif) : SEO, site, ads, community, branding et
                influence — sur devis, avec reporting. Pour juger sur pièces, parcourez l’agence et les réalisations.
              </p>
            </>,
            lienAgence ? (
              <div className="mt-2 rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-6">
                <SemanticLink lien={lienAgence} clusterSource="hub" className="text-slate-700" />
              </div>
            ) : null,
            lienProjets ? <SemanticLink lien={lienProjets} clusterSource="hub" className="text-slate-700" /> : null,
            lienContact ? <SemanticLink lien={lienContact} clusterSource="hub" className="text-slate-700" /> : null,
          ],
        },
      ]}
      faq={[
        {
          q: 'Agence locale ou freelance distant ?',
          r: 'Pour du SEO local, du shooting ou des ateliers branding, une équipe Casa accélère. Pour une tâche isolée (un logo, une landing), un freelance senior peut suffire.',
        },
        {
          q: 'Faut-il choisir l’agence la moins chère ?',
          r: 'Non. Comparez le coût par livrable et le risque d’un projet à refaire. Un devis trop bas coupe souvent technique, contenu ou suivi.',
        },
        {
          q: 'Combien d’agences comparer ?',
          r: 'Deux ou trois devis sérieux suffisent. Au-delà, vous perdez du temps sans gagner en clarté.',
        },
      ]}
      ctaTitle="Envie de tester We Yan Digital sans engagement ?"
      ctaSubtitle="Brief sous 24h, devis clair, studio Maarif — ou visio pour Rabat, Marrakech, Tanger."
      relatedLinks={[
        { label: 'Découvrir l’agence', to: '/agence/' },
        { label: 'Voir les projets', to: '/projets/' },
      ]}
    />
  )
}
