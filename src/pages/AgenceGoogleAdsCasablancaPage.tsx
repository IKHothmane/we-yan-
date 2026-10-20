import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import PageBreadcrumb from '../components/PageBreadcrumb'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'
import Icon from '../components/Icon'

const heroImage = '/images/advertising/analytics-preview.webp'
const dataImage = '/images/advertising/data-preview.webp'

const pageLinking = getPageLinking('/agence-google-ads-casablanca')
const faq = pageLinking?.faq ?? []

const services = [
  {
    t: 'Campagnes Search et mots-clés commerciaux',
    d: 'Annonces sur les requêtes à intention d’achat à Casablanca et au Maroc : structure de comptes, groupes d’annonces, extensions et exclusions pour limiter le gaspillage.',
  },
  {
    t: 'Performance Max, si adapté au compte',
    d: 'Activation Performance Max lorsque le tracking et les créas le permettent — sans remplacer une Search solide sur vos mots-clés les plus rentables.',
  },
  {
    t: 'Remarketing et YouTube selon les objectifs',
    d: 'Reciblage des visiteurs et audiences utiles, campagnes vidéo si la notoriété ou la considération font partie du brief.',
  },
  {
    t: 'Suivi des conversions et optimisation',
    d: 'Balises, conversions Google Ads / Analytics, import CRM si besoin, puis optimisation hebdomadaire du CPA, du taux de conversion et du budget.',
  },
] as const

const methodes = [
  { n: '01', t: 'Audit du compte', d: 'Structure, mots-clés, qualité des annonces, tracking et gaspillages identifiés.' },
  { n: '02', t: 'Objectifs business', d: 'Leads, appels, ventes ou trafic qualifié — KPI et seuils réalistes en MAD.' },
  { n: '03', t: 'Recherche de mots-clés', d: 'Intentions Casablanca / Maroc, volumes, concurrence et priorisation.' },
  { n: '04', t: 'Lancement', d: 'Campagnes Search (et PMax si pertinent), extensions, budgets et enchères.' },
  { n: '05', t: 'Suivi & itération', d: 'Reporting clair, optimisations continues, arbitrage média vs résultats.' },
] as const

export default function AgenceGoogleAdsCasablancaPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-800">
      <PageSeo {...pageSeo.agenceGoogleAdsCasablanca} />
      <Navbar serviceTitle="Agence Google Ads Casablanca" />

      <main>
        <section className="relative overflow-hidden px-[clamp(1rem,4vw,2rem)] pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 z-0">
            <img
              alt="Agence Google Ads Casablanca — tableaux de bord campagnes Search We Yan Digital"
              src={heroImage}
              className="h-full w-full object-cover object-center opacity-20"
              width={800}
              height={600}
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#EEF2FF]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div data-reveal>
              <PageBreadcrumb className="mb-6" />
              <span
                className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em]"
                style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8', borderColor: '#93C5FD' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#4285F4' }} />
                Google Ads · Search · Casablanca Maarif
              </span>
              <h1
                className="mb-7 font-black uppercase tracking-[-0.03em] text-slate-900"
                style={{ lineHeight: 1.12, fontSize: 'clamp(1.75rem, 5.5vw, 3.25rem)' }}
              >
                Agence Google Ads à{' '}
                <span className="italic" style={{ color: '#FC9700' }}>
                  Casablanca
                </span>
                <span className="mt-2 block normal-case tracking-[-0.02em]" style={{ color: '#4285F4' }}>
                  Transformez vos recherches en clients
                </span>
              </h1>
              <p className="mb-5 max-w-2xl text-[clamp(1rem,2.1vw,1.15rem)] leading-8 text-slate-600">
                Accompagnement <strong className="font-semibold text-slate-800">Google Ads</strong> pour les
                entreprises de Casablanca : stratégie, campagnes Search, mesure des conversions et optimisation des
                dépenses publicitaires — sans diluer le brief dans Meta, TikTok ou l’influence.
              </p>
              <p className="mb-9 max-w-2xl text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                L’offre multi-leviers (Google + Meta + autres) reste sur notre page{' '}
                <Link
                  to="/services/publicite-digitale/"
                  className="font-bold text-[#4285F4] underline-offset-4 hover:underline"
                >
                  publicité digitale
                </Link>
                . Ici, nous parlons uniquement de{' '}
                <strong className="font-semibold text-slate-800">gestion Google Ads à Casablanca</strong>.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ backgroundColor: '#4285F4', boxShadow: '0 22px 50px -18px rgba(66,133,244,0.55)' }}
                >
                  Demander un devis Google Ads
                  <Icon name="arrow_forward" className="h-4 w-4" />
                </Link>
                <a
                  href="#methode"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/20 bg-white px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.18em] text-slate-800 transition-all hover:bg-slate-50"
                >
                  Découvrir notre méthode
                </a>
              </div>
              <p className="mt-6 text-[0.9rem] text-slate-500">
                Voir aussi :{' '}
                <Link
                  to="/blog/prix-google-ads-maroc-2026/"
                  className="font-semibold text-[#4285F4] underline-offset-4 hover:underline"
                >
                  prix Google Ads Maroc 2026
                </Link>
                {' · '}
                <Link
                  to="/blog/seo-vs-sea-maroc/"
                  className="font-semibold text-[#4285F4] underline-offset-4 hover:underline"
                >
                  SEO vs SEA
                </Link>
              </p>
            </div>

            <figure data-reveal data-reveal-delay="120" className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_70px_-24px_rgba(15,23,42,0.45)]">
                <img
                  alt="Reporting Google Ads Casablanca — conversions, CPA et budget média We Yan Digital"
                  src={dataImage}
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
          <div className="mx-auto max-w-[860px]" data-reveal>
            <h2 className="mb-6 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
              Pourquoi investir dans Google Ads à Casablanca ?
            </h2>
            <p className="mb-4 text-[1.05rem] leading-8 text-slate-600">
              Google Ads convient quand vos prospects recherchent déjà une offre : devis, rendez-vous, appel ou achat en
              ligne. À Casablanca, la concurrence sur Search est réelle — un compte mal structuré brûle le budget sans
              leads utiles.
            </p>
            <p className="text-[1.05rem] leading-8 text-slate-600">
              Nous ciblons les intentions commerciales locales et nationales, avec un suivi honnête des conversions
              (formulaires, appels, WhatsApp selon votre setup) plutôt qu’un simple volume de clics.
            </p>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto mb-14 max-w-3xl text-center" data-reveal>
              <h2 className="mb-4 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
                Nos services de gestion Google Ads
              </h2>
              <p className="text-[1.05rem] leading-8 text-slate-600">
                Un périmètre Google Ads clair — pas un catalogue de toutes les plateformes publicitaires.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((s, i) => (
                <article
                  key={s.t}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_14px_36px_-22px_rgba(15,23,42,0.35)]"
                  data-reveal
                  data-reveal-delay={String(i * 60)}
                >
                  <h3 className="mb-3 text-[1.1rem] font-black text-slate-900">{s.t}</h3>
                  <p className="text-[0.98rem] leading-7 text-slate-600">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="methode" className="border-y border-slate-200 bg-[#EEF2FF] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="mx-auto mb-14 max-w-3xl text-center" data-reveal>
              <h2 className="mb-4 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
                Notre méthode en 5 étapes
              </h2>
              <p className="text-[1.05rem] leading-8 text-slate-600">
                Audit du compte, objectifs, mots-clés, lancement puis suivi des résultats — chaque étape a un livrable.
              </p>
            </div>
            <ol className="grid grid-cols-1 gap-5 md:grid-cols-5">
              {methodes.map((m, i) => (
                <li
                  key={m.n}
                  className="rounded-2xl border border-[#BFDBFE] bg-white p-5"
                  data-reveal
                  data-reveal-delay={String(i * 50)}
                >
                  <span className="mb-3 block text-[0.75rem] font-black uppercase tracking-[0.2em] text-[#4285F4]">
                    {m.n}
                  </span>
                  <h3 className="mb-2 text-[1rem] font-black text-slate-900">{m.t}</h3>
                  <p className="text-[0.9rem] leading-7 text-slate-600">{m.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-2">
            <div data-reveal>
              <h2 className="mb-5 font-black tracking-tight text-[clamp(1.6rem,4vw,2.4rem)] text-slate-900">
                Quel budget prévoir pour Google Ads à Casablanca ?
              </h2>
              <p className="mb-4 text-[1.02rem] leading-8 text-slate-600">
                Distinguez le <strong className="font-semibold text-slate-800">budget média</strong> (versé à Google)
                des <strong className="font-semibold text-slate-800">honoraires de gestion</strong> (agence). En Search à
                Casablanca, un budget média utile démarre souvent autour de 3 000 à 8 000 MAD/mois selon le secteur —
                hors frais de gestion.
              </p>
              <p className="text-[1.02rem] leading-8 text-slate-600">
                Les fourchettes détaillées et les CPC par typologie sont dans notre guide{' '}
                <Link
                  to="/blog/prix-google-ads-maroc-2026/"
                  className="font-bold text-[#4285F4] underline-offset-4 hover:underline"
                >
                  prix Google Ads Maroc 2026
                </Link>
                . Le devis We Yan précise média + gestion selon vos objectifs.
              </p>
            </div>
            <div data-reveal data-reveal-delay="80">
              <h2 className="mb-5 font-black tracking-tight text-[clamp(1.6rem,4vw,2.4rem)] text-slate-900">
                Comment mesurons-nous les résultats ?
              </h2>
              <ul className="space-y-3 text-[1.02rem] leading-8 text-slate-600">
                <li className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 font-semibold text-slate-800">
                  Conversions (formulaires, appels, actions clés)
                </li>
                <li className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 font-semibold text-slate-800">
                  Coût par lead (CPL) et taux de conversion
                </li>
                <li className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 font-semibold text-slate-800">
                  Qualité du trafic Search (requêtes, pertinence)
                </li>
                <li className="rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 font-semibold text-slate-800">
                  CA attribué lorsque le tracking le permet
                </li>
              </ul>
            </div>
          </div>
        </section>

        {faq.length > 0 && (
          <section className="border-y border-[#BFDBFE] bg-[#EFF6FF] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center" data-reveal>
                <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
                  Questions fréquentes sur Google Ads à Casablanca
                </h2>
              </div>
              <div className="space-y-4">
                {faq.map((item, index) => (
                  <details
                    key={item.q}
                    open={index === 0}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)] open:border-[#4285F4]"
                    data-reveal
                    data-reveal-delay={String(index * 50)}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                      <h3 className="text-[1rem] font-bold leading-snug text-slate-900">{item.q}</h3>
                      <span
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-transform group-open:rotate-45 group-open:border-[#4285F4] group-open:bg-[#4285F4] group-open:text-white"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-5 text-[0.98rem] leading-8 text-slate-600">{item.r}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[860px] text-center" data-reveal>
            <h2 className="mb-5 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
              Parlons de votre projet Google Ads
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[1.05rem] leading-8 text-slate-600">
              Indiquez nom, entreprise, email, téléphone, secteur, budget média estimé et objectif (leads, appels,
              ventes). Nous répondons sous 24h ouvrées avec une première lecture réaliste — pas une promesse de ROAS
              magique.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#4285F4' }}
              >
                Demander un devis
                <Icon name="arrow_forward" className="h-4 w-4" />
              </Link>
              <Link
                to="/services/publicite-digitale/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/15 bg-white px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.18em] text-slate-800 transition-all hover:bg-slate-50"
              >
                Découvrir nos campagnes Meta Ads
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
