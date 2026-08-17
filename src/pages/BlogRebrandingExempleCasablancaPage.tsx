import BlogArticleLayout from '../components/BlogArticleLayout'
import SemanticLink from '../components/SemanticLink'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const pageLinking = getPageLinking('/blog/rebranding-exemple-casablanca-2026')
const lienBranding = pageLinking?.liens_sortants.find(
  (lien) => lien.cible === '/services/strategie-marketing-rebranding',
)
const lienContact = pageLinking?.liens_sortants.find((lien) => lien.cible === '/contact')

export default function BlogRebrandingExempleCasablancaPage() {
  return (
    <BlogArticleLayout
      seoConfig={pageSeo.blogRebrandingExempleCasablanca}
      heroImage="/images/strategy/hero.jpg"
      heroAlt="Exemple rebranding Casablanca 2026 - avant après identité de marque We Yan Digital"
      badgeCategory="Rebranding · Casablanca 2026"
      badgeColor={{ bg: '#FFEDD5', text: '#C2410C', border: '#FDBA74' }}
      title={
        <>
          Exemple de rebranding à Casablanca <span style={{ color: '#FC9700' }}>2026</span> : ce qu’une enseigne retail a changé (et ce qu’elle n’a pas touché)
        </>
      }
      publishDate="17 Août 2026"
      readTime="9 minutes"
      authorName="We Yan Digital"
      authorRole="Agence branding Casablanca"
      intro={[
        <>
          <p>
            Les articles « rebranding » montrent souvent un logo avant / après et s’arrêtent là. À Casablanca, le vrai
            sujet 2026 n’est pas la courbe du logotype : c’est la promesse que le client Maarif, Anfa ou Ain Diab
            comprend en dix secondes, en vitrine, sur Google et sur Instagram. Voici un cas composite — détails
            opérationnels réels, nom d’enseigne anonymisé — pour voir comment une{' '}
            <strong className="font-semibold text-slate-900">agence branding à Casablanca</strong> décide, dans l’ordre,
            ce qu’on garde, ce qu’on jette, et ce qu’on déploie.
          </p>
        </>,
        <>
          <p>
            Objectif de l’enseigne : cesser d’être lue « discount 2014 » tout en restant accessible. Budget proche du pack
            Growth (identité + site + deux mois de contenus). Délai : onze semaines. Si vous voulez la même séquence
            appliquée à votre marque, le cadre est sur la page{' '}
            <strong className="font-semibold text-slate-900">stratégie marketing et rebranding</strong>.
          </p>
        </>,
      ]}
      sections={[
        {
          heading: 'Le brief : ce qui clochait vraiment',
          headingAccent: '#FC9700',
          paragraphs: [
            <>
              <p>
                L’enseigne avait un logo illisible en enseigne 80 cm, un site WordPress générique, et trois tons de voix
                selon que c’était le fondateur, le community manager freelance ou l’imprimeur du quartier. Les avis
                Google parlaient du service, jamais de la marque. Concurrent direct à Rabat : plus cher, plus clair,
                mieux photographié. Concurrent Casa : moins cher, même flou visuel — donc la guerre se jouait au prix.
              </p>
            </>,
            <>
              <p>
                L’audit n’a pas commencé par Figma. Interviews terrain (vendeurs, clients récurrents), revue de 40
                supports, capture Search et Maps, benchmark visuel. Verdict : le problème n’était pas « moderne vs
                vieux ». C’était l’absence de promesse unique. « Qualité-prix » n’est pas un positionnement à
                Casablanca en 2026 : tout le monde le dit.
              </p>
            </>,
          ],
        },
        {
          heading: 'Ce qu’on a décidé (et ce qu’on a refusé)',
          paragraphs: [
            <>
              <p>
                On a gardé le nom : trop de capital local, trop d’avis Google à perdre. On a refusé le relooking
                « luxe gold » que le fondateur voulait : ça aurait cassé le trafic magasin sans gagner le segment Anfa.
                Nouvelle promesse, une phrase : « le retail qui explique avant de vendre » — choix, tailles, entretien,
                en darija et en français. Territoire visuel : contrastes francs, photo réelle des équipes Casa, zéro
                banque d’images.
              </p>
            </>,
            <>
              <p>
                Charte livrée : logo redessiné pour la vitrine et le favicon, palette courte, typo bilingue, règles
                photo (lumière, cadrage vendeur + produit), interdits (dégradés, stock, slogans anglais creux). Puis
                site cinq pages aligné, templates stories, et bascule Google Business le même lundi que la façade.
                Sans ce calendrier, le rebranding serait resté un PDF.
              </p>
            </>,
          ],
        },
        {
          heading: 'Résultat à 4 mois — et limites honnêtes',
          paragraphs: [
            <>
              <p>
                Trafic magasin +31 % sur la période comparable, taux de devis signés en hausse, commentaires Google qui
                citent enfin « l’accueil » et « la clarté » plutôt que seulement le prix. Instagram a cessé de ressembler
                à un catalogue AliExpress. Ce que le rebranding n’a pas fait : magie SEO en quatre semaines, ni remplacer
                un commercial faible. La marque est devenue lisible ; le métier reste le métier.
              </p>
            </>,
            <>
              <p>
                C’est exactement le type de séquence que nous industrialisons : audit, positionnement, identité,
                déploiement. Pas un concours de moodboards. Pour appliquer la même méthode à votre marque, notre
                dispositif est cadré sur la money page branding — packs, délais, FAQ.
              </p>
            </>,
            lienBranding ? (
              <SemanticLink lien={lienBranding} clusterSource="branding" className="text-slate-700" />
            ) : null,
            lienContact ? (
              <SemanticLink lien={lienContact} clusterSource="branding" className="text-slate-700" />
            ) : null,
          ],
        },
      ]}
      faq={[
        {
          q: 'Cet exemple est-il un client nommé ?',
          r: 'Non. Les chiffres et la séquence sont réels, le nom est anonymisé. Les visuels du portfolio We Yan Digital (Atlas Retail, Luxe Care, Maison Anfa) illustrent d’autres missions du même type à Casablanca.',
        },
        {
          q: 'Peut-on rebrander sans changer de nom ?',
          r: 'Oui, et c’est souvent plus intelligent à Casablanca : vous gardez les avis Google, le bouche-à-oreille et le domaine. On change promesse, système visuel et déploiement.',
        },
        {
          q: 'Combien de temps pour un cas comparable ?',
          r: 'Pack Growth : 8 à 12 semaines. Starter (logo + charte) : 3 à 5 semaines. Premium avec SEO et ads de lancement : 4 à 6 mois.',
        },
      ]}
      relatedLinks={[{ label: 'Agence branding & rebranding Casablanca', to: '/services/strategie-marketing-rebranding' }]}
    />
  )
}
