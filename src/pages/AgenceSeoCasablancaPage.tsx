import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import PageBreadcrumb from '../components/PageBreadcrumb'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'
import Icon from '../components/Icon'

const heroImage = '/images/seo/hero.webp'
const authorityImage = '/images/seo/authority.webp'

const avantages = [
  {
    n: '01',
    t: 'SEO local Google Business Profile — Casablanca & Maroc',
    d: "Optimisation complète de votre fiche Google Business : photos quartier Maarif, horaires, services, NAP cohérent, management d'avis clients, posts hebdos — indispensable pour le pack local Google.",
  },
  {
    n: '02',
    t: 'Audit technique + maillage interne orienté conversion',
    d: 'Vitesse mobile, Core Web Vitals, Schema.org (LocalBusiness, FAQPage), URLs propres, maillage en silo depuis l’accueil et le blog vers vos pages commerciales Casablanca.',
  },
  {
    n: '03',
    t: 'Contenus sur l’intention locale (FR / Darija)',
    d: 'Plan éditorial ciblant les recherches réelles à Casablanca : prix, comparatif, « près de chez moi », devis. Chaque page money a un objectif de requête clair — sans bourrage de mots-clés.',
  },
  {
    n: '04',
    t: 'Netlinking local + reporting Search Console',
    d: 'Liens cohérents (annuaires, partenaires, presse sectorielle) et suivi mensuel des impressions, clics et positions — les mêmes indicateurs que votre Search Console.',
  },
] as const

const livrablesMois1 = [
  'Audit technique + inventaire des pages indexées / exclues',
  'Cartographie des requêtes locales prioritaires (Casablanca + Maroc)',
  'Plan d’actions 30 / 60 / 90 jours classé par impact',
  'Optimisation des balises title / meta / H1 des pages money',
  'Check Google Business Profile + cohérence NAP',
] as const

const livrablesMensuels = [
  'Suivi positions & impressions (Search Console)',
  'Optimisations on-page et maillage interne',
  'Briefs ou publications de contenus locaux',
  'Actions SEO local (fiche, avis, posts)',
  'Rapport mensuel + appel de suivi dédié',
] as const

const preuvesSuivi = [
  {
    t: 'Positions & CTR',
    d: 'Évolution des requêtes commerciales (ex. agence SEO Casablanca, seo Casablanca) : impressions, clics, CTR moyen.',
  },
  {
    t: 'Pages money',
    d: 'Pages services et landing locales suivies séparément pour éviter la cannibalisation avec le blog.',
  },
  {
    t: 'Leads organiques',
    d: 'Formulaires et appels issus du trafic Google — rapportés chaque mois, sans promesse de « 1ʳᵉ place garantie ».',
  },
] as const

const faq = [
  {
    q: 'Pourquoi choisir une agence SEO à Casablanca plutôt qu’un freelance distant ?',
    r: 'Une agence locale connaît les habitudes de recherche (FR / Darija), les annuaires et la concurrence casablancaise. Chez We Yan Digital (Maarif), vous avez un interlocuteur, un reporting Search Console et un ancrage Google Business réel — pas seulement des optimisations « template ».',
  },
  {
    q: 'Combien coûte une prestation SEO au Maroc en 2026 ?',
    r: 'À Casablanca en 2026, un accompagnement SEO démarre en général à partir de 3 500 MAD/mois selon la concurrence et le volume de mots-clés. L’audit initial est offert sous 24h. Détail des fourchettes : voir notre guide prix SEO Casablanca 2026.',
  },
  {
    q: 'En combien de temps voit-on les résultats SEO à Casablanca ?',
    r: 'Premières hausses de positions souvent en 4 à 8 semaines. Trafic local utile : 3 à 6 mois. Requêtes nationales très concurrentielles : 6 à 12 mois. Nous couplons parfois SEO + Google Ads dès le premier mois pour ne pas attendre le seul organique.',
  },
  {
    q: 'Quelle différence avec votre page « prestation SEO » ?',
    r: 'La page service décrit la méthode et les livrables techniques. Cette page cible les entreprises qui cherchent une agence SEO à Casablanca : proximité Maarif, SEO local, pack Google Business et accompagnement commercial.',
  },
  {
    q: 'Travaillez-vous hors Casablanca ?',
    r: 'Oui. Basés à Maarif, nous accompagnons aussi Rabat, Marrakech, Tanger et le reste du Maroc à distance, avec le même reporting mensuel.',
  },
] as const

export default function AgenceSeoCasablancaPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-800">
      <PageSeo {...pageSeo.agenceSeoCasablanca} />
      <Navbar serviceTitle="Agence SEO Casablanca" />

      <main>
        <section className="relative overflow-hidden px-[clamp(1rem,4vw,2rem)] pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 z-0">
            <img
              alt="Agence SEO Casablanca - Equipe We Yan Digital travail référencement naturel Maroc"
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
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] mb-7"
                style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8', borderColor: '#93C5FD' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
                Agence SEO · We Yan Digital · Casablanca Maarif
              </span>
              <h1 className="font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,7vw,4.75rem)] text-slate-900 mb-4">
                Agence SEO à{' '}
                <span className="italic" style={{ color: '#FC9700' }}>Casablanca</span>
              </h1>
              <p className="font-black tracking-tight text-[clamp(1.25rem,3.5vw,2rem)] text-slate-900 mb-7">
                <span style={{ color: '#6483F0' }}>Visibilité Google</span> mesurable
              </p>
              <p className="text-[clamp(1rem,2.1vw,1.15rem)] leading-8 text-slate-600 max-w-2xl mb-5">
                Vous cherchez une <strong className="font-semibold text-slate-800">agence SEO à Casablanca</strong> pour apparaître sur Google quand vos clients recherchent vos services ?
                We Yan Digital (Maarif) pilote SEO local, technique et contenus — avec un reporting Search Console clair chaque mois.
              </p>
              <p className="text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600 max-w-2xl mb-9">
                Nous ne vendons pas une « 1ʳᵉ place garantie ». Nous livrons un plan d’actions priorisé, des pages money structurées,
                une fiche Google Business soignée et des indicateurs mesurables (impressions, clics, positions, demandes).
                Le détail opérationnel de la{' '}
                <Link to="/services/seo/" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  prestation SEO
                </Link>
                {' '}(méthode & livrables techniques) est décrit à part — ici, l’intention est claire : trouver une agence SEO locale à Casablanca.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ backgroundColor: '#6483F0', boxShadow: '0 22px 50px -18px rgba(100,131,240,0.65)' }}
                >
                  Demander un audit SEO
                  <Icon name="arrow_forward" className="h-4 w-4" />
                </Link>
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/20 bg-white px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.18em] text-slate-800 transition-all hover:bg-slate-50"
                >
                  Voir la méthode
                </a>
              </div>
              <p className="mt-6 text-[0.9rem] text-slate-500">
                Voir aussi :{' '}
                <Link to="/blog/prix-seo-casablanca-2026/" className="font-semibold text-[#6483F0] underline-offset-4 hover:underline">
                  prix SEO Casablanca 2026
                </Link>
                {' · '}
                <Link to="/projets/" className="font-semibold text-[#6483F0] underline-offset-4 hover:underline">
                  réalisations
                </Link>
                {' · '}
                <Link to="/creation-site-web-casablanca/" className="font-semibold text-[#6483F0] underline-offset-4 hover:underline">
                  création de site web
                </Link>
              </p>
            </div>

            <figure data-reveal data-reveal-delay="120" className="relative">
              <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_30px_70px_-24px_rgba(15,23,42,0.45)]">
                <img
                  alt="Dashboard SEO We Yan Digital - positions Google, trafic organique, leads conversions PME maroc"
                  src={authorityImage}
                  className="w-full h-auto block"
                    width={800}
                    height={600}
                    loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 max-w-[250px] rounded-[1.25rem] bg-white border border-slate-200 p-4 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)]">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">Preuve de travail</p>
                <p className="font-black text-[1.15rem] leading-snug" style={{ color: '#6483F0' }}>
                  Reporting Search Console
                </p>
                <p className="text-[0.85rem] text-slate-600 font-semibold leading-snug mt-1.5">
                  Positions, impressions et clics suivis chaque mois — cas clients détaillés sur devis.
                </p>
              </div>
            </figure>
          </div>
        </section>

        <section className="bg-[#F8FAFC] border-y border-slate-200 px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900 mb-4">
                Pourquoi une <span style={{ color: '#FC9700' }}>agence SEO locale</span> à Casablanca ?
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] leading-8 text-slate-600">
                Parce que le marché marocain a ses propres habitudes de recherche (FR / Darija), ses annuaires locaux et une concurrence locale spécifique. Nous combinons SEO local Google Business, technique, contenus et netlinking cohérent — sans promesse de « 1ʳᵉ place garantie ».
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
              {avantages.map((a, i) => (
                <article
                  key={a.n}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_16px_36px_-20px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(100,131,240,0.4)]"
                  data-reveal
                  data-reveal-delay={String(i * 80)}
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black text-[0.95rem] text-slate-900"
                      style={{ backgroundColor: '#FDE68A' }}
                    >
                      {a.n}
                    </span>
                    <div>
                      <h3 className="font-bold text-[1.08rem] text-slate-900 mb-2 leading-snug">{a.t}</h3>
                      <p className="text-[0.95rem] leading-7 text-slate-600">{a.d}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="audit" className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr] items-start">
            <div data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-6">
                Méthode en 4 étapes
              </span>
              <h2 className="font-black tracking-tight text-[clamp(1.8rem,4.6vw,2.75rem)] text-slate-900 mb-6">
                Notre méthodologie SEO <span style={{ color: '#6483F0' }}>Data-Driven</span> pour Casablanca
              </h2>
              <div className="space-y-5 text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                <p>
                  <strong className="font-semibold text-slate-800">Étape 1 — Audit SEO complet</strong> : on plonge dans votre site, votre Search Console, votre Ahrefs/Semrush. On identifie TOUS les freins (pages non indexées, contenu trop court, duplicate, liens morts, Core Web Vitals).
                </p>
                <p>
                  <strong className="font-semibold text-slate-800">Étape 2 — Stratégie de mots-clés</strong> : priorisation selon volume de recherche mensuel au Maroc, intention commerciale et difficulté. On ne perd pas de temps sur des mots-clés qui ne génèrent pas de revenu.
                </p>
                <p>
                  <strong className="font-semibold text-slate-800">Étape 3 — Mise en œuvre</strong> : on optimise le contenu existant (H1, H2, balises title/meta, ALT images, schema), on crée les pages manquantes, on publie 2 à 4 articles/mois et on booste votre profil de backlinks.
                </p>
                <p>
                  <strong className="font-semibold text-slate-800">Étape 4 — Reporting mensuel live</strong> : dashboard partagé en temps réel (trafic, positions Google, conversions organiques, chiffre d'affaires SEO). Appel de suivi mensuel avec votre expert SEO dédié.
                </p>
              </div>
            </div>

            <div
              className="sticky lg:top-36 rounded-[2rem] p-7 text-white shadow-[0_30px_70px_-22px_rgba(15,23,42,0.6)]"
              style={{ backgroundColor: '#1F2937' }}
              data-reveal
              data-reveal-delay="120"
            >
              <h3 className="font-black tracking-tight text-[1.3rem] mb-5">
                Audit SEO gratuit — sous 24h ouvrées
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  'État des positions sur vos requêtes prioritaires',
                  'Check Core Web Vitals mobile & desktop',
                  'Check NAP + Google Business Profile (local)',
                  '3 actions à fort impact à lancer sous 7 jours',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span
                      className="mt-1 h-6 w-6 flex-shrink-0 rounded-lg flex items-center justify-center font-black text-[0.75rem]"
                      style={{ backgroundColor: '#FC9700', color: '#0F172A' }}
                    >
                      ✓
                    </span>
                    <p className="text-white/90 text-[0.95rem] leading-7 pt-0.5">{p}</p>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 hover:brightness-110"
                style={{ backgroundColor: '#FC9700', color: '#0F172A' }}
              >
                Recevoir mon audit SEO gratuit
                <Icon name="send" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
              <h2 className="font-black tracking-tight text-[clamp(1.6rem,4vw,2.4rem)] text-slate-900 mb-4">
                Livrables concrets — mois 1 puis chaque mois
              </h2>
              <p className="text-slate-600 leading-7">
                Vous savez exactement ce que vous recevez. Pour les fourchettes budgétaires, consultez aussi{' '}
                <Link to="/blog/prix-seo-casablanca-2026/" className="font-semibold text-[#6483F0] underline-offset-4 hover:underline">
                  prix SEO Casablanca 2026
                </Link>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div
                className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_16px_36px_-20px_rgba(15,23,42,0.3)]"
                data-reveal
              >
                <h3 className="font-black text-[1.15rem] text-slate-900 mb-5">Mois 1 — cadrage & quick wins</h3>
                <ul className="space-y-3 text-[0.98rem] text-slate-700">
                  {livrablesMois1.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: '#6483F0' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFC] p-7 shadow-[0_16px_36px_-20px_rgba(15,23,42,0.3)]"
                data-reveal
                data-reveal-delay="80"
              >
                <h3 className="font-black text-[1.15rem] text-slate-900 mb-5">Chaque mois — exécution & suivi</h3>
                <ul className="space-y-3 text-[0.98rem] text-slate-700">
                  {livrablesMensuels.map((item) => (
                    <li key={item} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: '#FC9700' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0F172A] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-24 text-white">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center max-w-2xl mx-auto mb-12" data-reveal>
              <h2 className="font-black tracking-tight text-[clamp(1.6rem,4vw,2.4rem)] mb-4">
                Résultats suivis — pas de promesses creuses
              </h2>
              <p className="text-white/70 leading-7">
                Nous mesurons ce que Google mesure déjà dans Search Console. Les études de cas détaillées
                (secteurs, délais, hausses de clics) sont partagées sur devis, avec l’accord des clients.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {preuvesSuivi.map((item, i) => (
                <article
                  key={item.t}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                  data-reveal
                  data-reveal-delay={String(i * 70)}
                >
                  <h3 className="font-bold text-[1.05rem] mb-3" style={{ color: '#FDE68A' }}>
                    {item.t}
                  </h3>
                  <p className="text-white/75 text-[0.95rem] leading-7">{item.d}</p>
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-white/60 text-[0.95rem]" data-reveal>
              Agence basée à Casablanca Maarif · Accompagnement aussi à Rabat, Marrakech et dans tout le Maroc
            </p>
          </div>
        </section>

        {/* FAQ — Schema.org FAQPage est dans le <head> global + Questions/Réponses visuelles */}
        <section className="bg-[#EFF6FF] border-y border-[#BFDBFE] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12" data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#1D4ED8] border border-[#BFDBFE] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-5">
                FAQ SEO Maroc
              </span>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
                Questions fréquentes · Agence SEO Casablanca
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)] open:shadow-[0_18px_40px_-20px_rgba(100,131,240,0.45)] open:border-[#6483F0]"
                  data-reveal
                  data-reveal-delay={String(i * 70)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                    <h3 className="font-bold text-[1rem] text-slate-900 leading-snug marker:content-none">{f.q}</h3>
                    <span
                      className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-transform group-open:rotate-45 group-open:text-white group-open:border-[#6483F0] group-open:bg-[#6483F0]"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-5 text-slate-600 leading-8 text-[0.98rem]">{f.r}</p>
                </details>
              ))}
            </div>

            <div className="mt-14 text-center" data-reveal>
              <p className="text-slate-700 font-semibold mb-5">
                Vous avez d'autres questions ? Nous répondons sous 24h ouvrées.
              </p>
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white shadow-[0_22px_50px_-18px_rgba(100,131,240,0.65)] transition-all hover:-translate-y-0.5 hover:brightness-110"
                style={{ backgroundColor: '#6483F0' }}
              >
                Discuter avec un expert SEO
                <Icon name="arrow_forward" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
