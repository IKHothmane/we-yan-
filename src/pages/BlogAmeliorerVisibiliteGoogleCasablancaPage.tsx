import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/ameliorer-visibilite-google-casablanca')
const lienSeo = pageLinking?.liens_sortants.find((l) => l.cible === '/agence-seo-casablanca')
const lienContact = pageLinking?.liens_sortants.find((l) => l.cible === '/contact')

export default function BlogAmeliorerVisibiliteGoogleCasablancaPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogAmeliorerVisibiliteGoogleCasablanca}
      heroImage="/images/seo/authority.webp"
      heroAlt="Améliorer sa visibilité Google à Casablanca - SEO local We Yan Digital"
      badgeCategory="Guide · SEO local Casa"
      badgeColor={{ bg: '#D1FAE5', text: '#047857', border: '#6EE7B7' }}
      title={
        <>
          Comment améliorer sa visibilité sur Google à <span style={{ color: '#10B981' }}>Casablanca</span> ?
        </>
      }
      publishDate="21 Octobre 2026"
      readTime="10 minutes"
      authorName="We Yan Digital"
      authorRole="Agence SEO Casablanca"
      intro={[
        <>
          <p>
            Pour apparaître sur Google à Casablanca, il faut combiner{' '}
            <strong className="font-semibold text-slate-900">SEO local (fiche Google Business)</strong>, un site
            technique sain, des pages qui répondent aux recherches FR / darija, et du temps (souvent 3 à 6 mois pour un
            trafic local utile). Voici le plan actionnable que nous appliquons chez We Yan Digital à Maarif.
          </p>
        </>,
        <>
          <p>
            Ce guide vise les commerces, cabinets et PME qui veulent plus d’appels, d’itinéraires et de leads organiques
            — pas seulement plus de likes.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: '1. Google Business Profile : le levier le plus rapide',
          headingAccent: '#10B981',
          paragraphs: [
            <>
              <p>
                Catégories exactes, horaires, photos quartier, posts hebdo, réponses aux avis, NAP cohérent (Name /
                Address / Phone) sur le site et les annuaires. À Casablanca, le pack local (carte + 3 résultats) décide
                souvent de l’appel avant même le site.
              </p>
            </>,
            <>
              <ul className="ml-5 list-disc space-y-2 text-[0.98rem] leading-8 text-slate-700">
                <li>Demandez des avis authentiques après chaque prestation réussie.</li>
                <li>Ajoutez des photos réelles (devanture, équipe, livrables) — pas des banques d’images génériques.</li>
                <li>Utilisez les attributs et services Google Business adaptés à votre métier.</li>
              </ul>
            </>,
          ],
        },
        {
          heading: '2. Site : technique + pages intention locale',
          paragraphs: [
            <>
              <p>
                Mobile rapide (Core Web Vitals), HTTPS, structure claire, balises title / H1 uniques, schema
                LocalBusiness. Créez des pages qui ciblent des intentions réelles : service + Casablanca, quartiers
                (Maarif, Anfa…), FAQ prix. Un site lent sur 4G casablancaise tue le SEO avant le contenu.
              </p>
            </>,
          ],
        },
        {
          heading: '3. Contenu et netlinking local',
          paragraphs: [
            <>
              <p>
                Articles utiles (prix, guides, comparatifs), citations locales, partenariats presse .ma. Évitez les PBN
                et les « 1re page en 15 jours ». Le netlinking local propre bat 200 ancres exactes achetées.
              </p>
            </>,
          ],
        },
        {
          heading: '4. Quand passer par une agence SEO Casablanca',
          headingAccent: '#6483F0',
          paragraphs: [
            <>
              <p>
                Si vous n’avez pas le temps d’auditer Search Console, produire des pages et suivre GMB chaque semaine,
                une <strong className="font-semibold text-slate-900">agence SEO à Casablanca</strong> structure le plan
                sur 6 mois. Accompagnement We Yan : sur devis, audit initial offert sous 24h.
              </p>
            </>,
            lienSeo ? (
              <div className="mt-2 rounded-2xl border border-[#A7F3D0] bg-[#ECFDF5] p-6">
                <SemanticLink lien={lienSeo} clusterSource="seo" className="text-slate-700" />
              </div>
            ) : null,
            lienContact ? <SemanticLink lien={lienContact} clusterSource="seo" className="text-slate-700" /> : null,
          ],
        },
      ]}
      faq={[
        {
          q: 'Combien de temps pour être visible sur Google à Casablanca ?',
          r: 'À Casablanca, les premières hausses de positions locales se voient souvent en 4 à 8 semaines. Un trafic utile sur des requêtes business demande en général 3 à 6 mois.',
        },
        {
          q: 'SEO ou Google Ads pour démarrer ?',
          r: 'Ads pour des leads dès les premières semaines ; SEO pour un actif durable. Le mix reste le plus efficace pour la plupart des PME.',
        },
        {
          q: 'Le SEO local suffit-il sans site ?',
          r: 'GMB peut générer des appels seuls. Dès que l’offre est complexe (devis, plusieurs services), un site convertit mieux que la seule fiche.',
        },
      ]}
      ctaTitle="Audit SEO local Casablanca offert sous 24h"
      ctaSubtitle="Positions, fiche Google Business, priorités techniques — We Yan Digital Maarif."
      relatedLinks={[{ label: 'Agence SEO Casablanca', to: '/agence-seo-casablanca/' }]}
    />
  )
}
