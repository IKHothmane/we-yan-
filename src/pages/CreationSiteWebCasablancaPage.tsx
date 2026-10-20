import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import PageBreadcrumb from '../components/PageBreadcrumb'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'
import Icon from '../components/Icon'

const heroImage = '/images/strategy/approach.webp'
const studioImage = '/images/content/studio.webp'

const offres = [
  {
    t: 'Site vitrine professionnel',
    d: '3 à 8 pages : accueil, services, à propos, contact, blog. Design responsive, formulaires, SEO de base et mise en ligne à Casablanca.',
    prix: 'À partir de 6 500 MAD',
  },
  {
    t: 'Site e-commerce',
    d: 'Catalogue, panier, paiement CMI / virement, fiches produits, tracking conversions. Idéal commerces et marques D2C au Maroc.',
    prix: 'Sur devis',
  },
  {
    t: 'Site sur-mesure / multi-langue',
    d: 'FR / AR / EN, back-office, intégrations CRM ou WhatsApp Business, performances Core Web Vitals et structure SEO avancée.',
    prix: 'Sur devis',
  },
] as const

const etapes = [
  {
    n: '01',
    t: 'Brief & cadrage',
    d: 'Objectifs business, pages indispensables, ton de marque, audience Casablanca / Maroc, contraintes techniques.',
  },
  {
    n: '02',
    t: 'Wireframes & design',
    d: 'Structure des pages, maquettes desktop / mobile, validation avant développement pour éviter les allers-retours coûteux.',
  },
  {
    n: '03',
    t: 'Développement & SEO',
    d: 'Intégration, formulaires, vitesse mobile, balises title / meta, URLs propres, Schema.org de base, préparation Search Console.',
  },
  {
    n: '04',
    t: 'Mise en ligne & formation',
    d: 'Déploiement, tests, formation courte à la mise à jour des contenus, puis option SEO ou Ads pour générer du trafic.',
  },
] as const

const facteursPrix = [
  'Nombre de pages et de maquettes uniques',
  'E-commerce vs vitrine (paiement, stock, variantes)',
  'Multilingue (FR / AR / EN) et contenus fournis ou rédigés',
  'Intégrations (CRM, WhatsApp, Pixel, Analytics)',
  'Délai souhaité et niveau de design sur-mesure',
] as const

const faq = [
  {
    q: 'Combien coûte un site vitrine à Casablanca en 2026 ?',
    r: 'Chez We Yan Digital, un site vitrine 3–5 pages démarre généralement à partir de 6 500 MAD. Les projets intermédiaires et e-commerce se chiffrent selon le catalogue et les intégrations. Voir aussi notre guide prix site web Maroc 2026.',
  },
  {
    q: 'Quels sont les délais réalistes ?',
    r: 'Vitrine simple : souvent 3 à 6 semaines après validation du brief et des contenus. E-commerce ou sur-mesure : 6 à 12 semaines selon le volume produits et les validations.',
  },
  {
    q: 'Le site est-il optimisé pour Google ?',
    r: 'Oui : structure technique propre, pages indexables, balises de base et performances mobiles. Pour ranker sur « création site web Casablanca » ou vos services, un accompagnement SEO mensuel reste recommandé après la mise en ligne.',
  },
] as const

export default function CreationSiteWebCasablancaPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-800">
      <PageSeo {...pageSeo.creationSiteWebCasablanca} />
      <Navbar serviceTitle="Création site web Casablanca" />

      <main>
        <section className="relative overflow-hidden px-[clamp(1rem,4vw,2rem)] pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 z-0">
            <img
              alt="Création site web Casablanca — studio We Yan Digital"
              src={heroImage}
              className="h-full w-full object-cover object-center opacity-20"
              width={800}
              height={600}
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FFF7ED]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div data-reveal>
              <PageBreadcrumb className="mb-6" />
              <span
                className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em]"
                style={{ backgroundColor: '#FFF7ED', color: '#C2410C', borderColor: '#FED7AA' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#FC9700' }} />
                Création web · Casablanca Maarif
              </span>
              <h1 className="mb-7 font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,7vw,4.5rem)] text-slate-900">
                Création de site web à{' '}
                <span className="italic" style={{ color: '#FC9700' }}>
                  Casablanca
                </span>
              </h1>
              <p className="mb-5 max-w-2xl text-[clamp(1rem,2.1vw,1.15rem)] leading-8 text-slate-600">
                Sites vitrines, e-commerce et projets sur-mesure pour les entreprises marocaines. Design clair, performance
                mobile et base SEO solide — livrés par une équipe basée à Casablanca.
              </p>
              <p className="mb-9 max-w-2xl text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Besoin d’une fourchette budgétaire détaillée ? Lisez notre guide{' '}
                <Link
                  to="/blog/prix-site-web-maroc-2026/"
                  className="font-bold text-[#6483F0] underline-offset-4 hover:underline"
                >
                  prix site web Maroc 2026
                </Link>
                , puis demandez un devis calé sur votre brief.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-[#0F172A] transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ backgroundColor: '#FC9700', boxShadow: '0 22px 50px -18px rgba(252,151,0,0.55)' }}
                >
                  Demander un devis site web
                  <Icon name="arrow_forward" className="h-4 w-4" />
                </Link>
                <Link
                  to="/projets/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/20 bg-white px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.18em] text-slate-800 transition-all hover:bg-slate-50"
                >
                  Voir des réalisations
                </Link>
              </div>
            </div>

            <figure data-reveal data-reveal-delay="120" className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_70px_-24px_rgba(15,23,42,0.45)]">
                <img
                  alt="Exemple d’interface web moderne conçue à Casablanca"
                  src={studioImage}
                  className="block h-auto w-full"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F8FAFC] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto mb-14 max-w-3xl text-center" data-reveal>
              <h2 className="mb-4 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
                Trois types de sites pour les entreprises à Casablanca
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] leading-8 text-slate-600">
                On ne vend pas un « pack template » : on dimensionne le projet selon votre activité et votre budget.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {offres.map((offre, i) => (
                <article
                  key={offre.t}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_16px_36px_-20px_rgba(15,23,42,0.35)]"
                  data-reveal
                  data-reveal-delay={String(i * 80)}
                >
                  <h3 className="mb-3 text-[1.15rem] font-bold text-slate-900">{offre.t}</h3>
                  <p className="mb-5 text-[0.95rem] leading-7 text-slate-600">{offre.d}</p>
                  <p className="text-[0.85rem] font-black uppercase tracking-[0.14em]" style={{ color: '#FC9700' }}>
                    {offre.prix}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div data-reveal>
              <h2 className="mb-6 font-black tracking-tight text-[clamp(1.8rem,4.6vw,2.75rem)] text-slate-900">
                Processus de réalisation en 4 étapes
              </h2>
              <div className="space-y-5">
                {etapes.map((etape) => (
                  <div key={etape.n} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                    <span
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[0.85rem] font-black text-slate-900"
                      style={{ backgroundColor: '#FDE68A' }}
                    >
                      {etape.n}
                    </span>
                    <div>
                      <h3 className="mb-1 font-bold text-slate-900">{etape.t}</h3>
                      <p className="text-[0.95rem] leading-7 text-slate-600">{etape.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[2rem] p-7 text-white shadow-[0_30px_70px_-22px_rgba(15,23,42,0.6)] lg:sticky lg:top-36"
              style={{ backgroundColor: '#1F2937' }}
              data-reveal
              data-reveal-delay="120"
            >
              <h3 className="mb-5 text-[1.3rem] font-black tracking-tight">Ce qui fait varier le prix</h3>
              <ul className="mb-8 space-y-3">
                {facteursPrix.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-7 text-white/90">
                    <span
                      className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg text-[0.75rem] font-black"
                      style={{ backgroundColor: '#FC9700', color: '#0F172A' }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 hover:brightness-110"
                style={{ backgroundColor: '#FC9700', color: '#0F172A' }}
              >
                Obtenir mon devis sous 24h
                <Icon name="send" className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-center text-[0.85rem] text-white/70">
                Après la mise en ligne, couplez avec notre{' '}
                <Link to="/agence-seo-casablanca/" className="font-semibold text-white underline underline-offset-4">
                  agence SEO Casablanca
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#FED7AA] bg-[#FFF7ED] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center" data-reveal>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
                FAQ · Création site web Casablanca
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)] open:border-[#FC9700]"
                  data-reveal
                  data-reveal-delay={String(i * 70)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                    <h3 className="text-[1rem] font-bold leading-snug text-slate-900">{f.q}</h3>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-transform group-open:rotate-45 group-open:border-[#FC9700] group-open:bg-[#FC9700] group-open:text-[#0F172A]">
                      +
                    </span>
                  </summary>
                  <p className="mt-5 text-[0.98rem] leading-8 text-slate-600">{f.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
