import AppLink from '../components/AppLink'
import Navbar from '../components/Navbar'
import PageBreadcrumb from '../components/PageBreadcrumb'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const articles = [
  {
    to: '/blog/prix-site-web-maroc-2026/',
    title: 'Combien coûte un site web au Maroc 2026 ?',
    excerpt: 'Vitrine, e-commerce, sur-mesure — fourchettes MAD et devis We Yan.',
    tag: 'Prix',
  },
  {
    to: '/blog/prix-seo-casablanca-2026/',
    title: 'Combien coûte le SEO au Maroc 2026 ?',
    excerpt: 'Audit, retainer, freelance vs agence — guide Casablanca.',
    tag: 'SEO',
  },
  {
    to: '/blog/prix-google-ads-maroc-2026/',
    title: 'Quel budget Google Ads au Maroc 2026 ?',
    excerpt: 'CPC, paliers média et gestion — pour un test lisible.',
    tag: 'Ads',
  },
  {
    to: '/blog/prix-meta-ads-casablanca-2026/',
    title: 'Budget Facebook & Instagram Ads Maroc 2026',
    excerpt: 'CPC, CPM, CPL WhatsApp à Casablanca.',
    tag: 'Meta',
  },
  {
    to: '/blog/prix-influenceur-maroc-2026/',
    title: 'Prix influenceur Maroc 2026',
    excerpt: 'Story, reel, post — nano, micro, macro.',
    tag: 'Influence',
  },
  {
    to: '/blog/seo-vs-sea-maroc/',
    title: 'SEO ou Google Ads au Maroc ?',
    excerpt: 'Comparatif délais, coûts, ROI — quand mixer les deux.',
    tag: 'Guide',
  },
  {
    to: '/blog/prix-community-management-maroc-2026/',
    title: 'Prix community management Maroc 2026',
    excerpt: 'Forfaits Instagram, TikTok, LinkedIn — fourchettes marché.',
    tag: 'CM',
  },
  {
    to: '/blog/prix-identite-visuelle-maroc-2026/',
    title: 'Prix identité visuelle Maroc 2026',
    excerpt: 'Logo, charte, branding — fourchettes indicatives.',
    tag: 'Branding',
  },
  {
    to: '/blog/comment-choisir-agence-digitale-casablanca/',
    title: 'Comment choisir une agence digitale à Casablanca',
    excerpt: 'Checklist 8 critères avant de signer un devis.',
    tag: 'Guide',
  },
  {
    to: '/blog/ameliorer-visibilite-google-casablanca/',
    title: 'Améliorer sa visibilité Google à Casablanca',
    excerpt: 'SEO local, Google Business, contenus — plan actionnable.',
    tag: 'SEO local',
  },
  {
    to: '/blog/branding-creation-marque-maroc/',
    title: 'Créer une marque au Maroc 2026',
    excerpt: 'Naming, identité, positionnement, lancement.',
    tag: 'Branding',
  },
  {
    to: '/blog/rebranding-exemple-casablanca-2026/',
    title: 'Exemple rebranding Casablanca 2026',
    excerpt: 'Cas concret : audit, charte, déploiement.',
    tag: 'Cas',
  },
  {
    to: '/blog/marketing-digital-tendances-maroc-2026/',
    title: 'Marketing digital Maroc — tendances 2026',
    excerpt: 'SEO local, TikTok, influence, budgets PME.',
    tag: 'Tendances',
  },
] as const

export default function BlogIndexPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-800">
      <PageSeo {...pageSeo.blogIndex} />
      <Navbar serviceTitle="Blog · We Yan Digital" />

      <main>
        <section className="px-[clamp(1rem,4vw,2rem)] pt-28 pb-12 sm:px-8">
          <div className="mx-auto max-w-[920px]" data-reveal>
            <PageBreadcrumb className="mb-6" />
            <p className="mb-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#6483F0]">
              Blog · Guides Maroc 2026
            </p>
            <h1 className="mb-4 font-black tracking-tight text-[clamp(1.9rem,5vw,3.25rem)] text-slate-900">
              Blog We Yan Digital — prix, SEO et marketing au Maroc
            </h1>
            <p className="max-w-2xl text-[clamp(1rem,2vw,1.15rem)] leading-8 text-slate-600">
              Articles pour les entreprises marocaines : tarifs indicatifs, comparatifs et conseils — avec liens vers nos
              pages services à Casablanca.
            </p>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] pb-20 sm:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-[920px] gap-5">
            {articles.map((a, i) => (
              <AppLink
                key={a.to}
                to={a.to}
                className="group block rounded-2xl border border-slate-200 bg-slate-50/80 p-6 transition hover:border-[#6483F0] hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(100,131,240,0.45)]"
                data-reveal
                data-reveal-delay={String(Math.min(i * 40, 320))}
              >
                <span className="mb-2 inline-block text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#6483F0]">
                  {a.tag}
                </span>
                <h2 className="mb-2 text-[1.15rem] font-black text-slate-900 group-hover:text-[#6483F0] sm:text-[1.25rem]">
                  {a.title}
                </h2>
                <p className="text-[0.98rem] leading-7 text-slate-600">{a.excerpt}</p>
              </AppLink>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
