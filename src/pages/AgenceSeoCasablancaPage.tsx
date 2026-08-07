import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'
import Icon from '../components/Icon'

const heroImage = '/images/seo/hero.jpg'
const authorityImage = '/images/seo/authority.jpg'

const avantages = [
  {
    n: '01',
    t: 'SEO local Google Business Profile — Casablanca & Maroc',
    d: "Optimisation complète de votre fiche Google Business : photos quartier Maarif, horaires, services, NAP cohérent, management d'avis clients 5 étoiles, posts hebdos — indispensable pour apparaître dans le pack local Google.",
  },
  {
    n: '02',
    t: "Audit technique sémantique + maillage interne d'autorité",
    d: 'Vitesse mobile, Core Web Vitals, balises Schema.org (FAQPage, LocalBusiness, ProfessionalService), structure des URLs en /mot-cle-cible, maillage interne en silo SEO qui transmet le PageRank de la home vers vos pages services.',
  },
  {
    n: '03',
    t: 'Stratégie éditoriale — mots-clés FR / Darija / EN',
    d: 'Plan éditorial mensuel ciblant les intentions de recherche tapées à Casablanca et au Maroc : prix, comparatif, guide, « près de chez moi », avis, etc. Chaque article 500+ mots, H1 optimisé, image ALT riche.',
  },
  {
    n: '04',
    t: 'Netlinking local marocain + backlinks d’autorité',
    d: "Backlinks depuis annuaires marocains, presse digital, portails secteur et sites autoritaires (DA 50+) pour augmenter la confiance Google en votre domaine. Nous privilégions toujours le naturel et la cohérence thématique.",
  },
] as const

const faq = [
  {
    q: 'Combien coûte une prestation SEO au Maroc en 2026 ?',
    r: 'Chez We Yan Digital à Casablanca, nos accompagnements SEO démarrent à partir de 3 500 MAD/mois pour une PME ciblant Casablanca sur 10-20 mots-clés. Un package national complet avec stratégie éditoriale et netlinking se situe entre 7 000 et 15 000 MAD/mois. Audit unique ponctuel : à partir de 2 500 MAD.',
  },
  {
    q: "En combien de temps voit-on les résultats d'une agence SEO à Casablanca ?",
    r: "Nos clients voient généralement les premières améliorations de positions entre 4 à 8 semaines. Les résultats de première page Google et de trafic organique qualifié se matérialisent sur 3 à 6 mois pour les requêtes locales, 6 à 12 mois sur des requêtes nationales très concurrentielles. Nous pilotons toujours en parallèle une campagne SEA pour obtenir des leads dès la première semaine.",
  },
  {
    q: "Travaillez-vous avec des entreprises hors Casablanca ?",
    r: "Oui, bien sûr. Nous accompagnons des entreprises à Rabat, Marrakech, Tanger, Fès et dans tout le Maroc. Grâce aux outils SEO internationaux (Ahrefs, Semrush, Screaming Frog) et à nos réunions à distance (Teams, Google Meet), nous avons la même qualité d'accompagnement pour tous nos clients marocains, peu importe leur ville.",
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
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#EEF2FF]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div data-reveal>
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] mb-7"
                style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8', borderColor: '#93C5FD' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
                Agence SEO · We Yan Digital · Casablanca Maarif
              </span>
              <h1 className="font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,7vw,4.75rem)] text-slate-900 mb-7">
                Agence SEO à{' '}
                <span className="italic" style={{ color: '#FC9700' }}>Casablanca</span>
                <br />
                <span style={{ color: '#6483F0' }}>Premier sur Google</span> en 2026
              </h1>
              <p className="text-[clamp(1rem,2.1vw,1.15rem)] leading-8 text-slate-600 max-w-2xl mb-5">
                Spécialiste du référencement naturel local et national au <strong className="font-semibold text-slate-800">Maroc</strong>, notre agence SEO basée à Casablanca, quartier Maarif, met votre entreprise en <strong className="font-semibold text-slate-900">première page Google</strong> sur les mots-clés qui génèrent du chiffre d'affaires.
              </p>
              <p className="text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600 max-w-2xl mb-9">
                Contrairement aux généralistes, nous combinons <strong>SEO local</strong> (fictive Google Business, avis, proximité Casablanca), <strong>SEO technique</strong> (vitesse, Core Web Vitals, Schema.org), <strong>SEO sémantique</strong> (500+ mots par page, intentions de recherche marocaines FR/Darija) et <strong>netlinking local</strong> — la méthode qui a déjà fait monter plus de 30 clients marocains en Top 3 Google.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ backgroundColor: '#6483F0', boxShadow: '0 22px 50px -18px rgba(100,131,240,0.65)' }}
                >
                  Devis SEO gratuit · 24h
                  <Icon name="arrow_forward" className="h-4 w-4" />
                </Link>
                <a
                  href="#audit"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/20 bg-white px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.18em] text-slate-800 transition-all hover:bg-slate-50"
                >
                  Comment on travaille
                </a>
              </div>
            </div>

            <figure data-reveal data-reveal-delay="120" className="relative">
              <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_30px_70px_-24px_rgba(15,23,42,0.45)]">
                <img
                  alt="Dashboard SEO We Yan Digital - positions Google, trafic organique, leads conversions PME maroc"
                  src={authorityImage}
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 max-w-[230px] rounded-[1.25rem] bg-white border border-slate-200 p-4 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)]">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500 mb-1.5">Résultat client</p>
                <p className="font-black text-[2rem] leading-none" style={{ color: '#6483F0' }}>+218%</p>
                <p className="text-[0.85rem] text-slate-600 font-semibold leading-snug mt-1.5">
                  Trafic organique sur 9 mois · Client Casablanca e-commerce mode
                </p>
              </div>
            </figure>
          </div>
        </section>

        <section className="bg-[#F8FAFC] border-y border-slate-200 px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900 mb-4">
                Pourquoi We Yan est <span style={{ color: '#FC9700' }}>LA meilleure agence SEO</span> à Casablanca ?
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] leading-8 text-slate-600">
                Parce que nous sommes implantés à Casablanca et nous maîtrisons VRAIMENT les spécificités du marché marocain : les habitudes des internautes darijaophones, la concurrence dans votre secteur, les annuaires locaux, les expressions populaires et les pièges à éviter pour ne pas se faire pénaliser par Google.
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
                💡 Audit SEO gratuit offert cette semaine
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  'États des positions de vos 50 mots-clés',
                  'Check Core Web Vitals mobile & desktop',
                  'Check NAP cohérent + Google Business (local)',
                  '3 actions +ROI à mettre en place sous 7 jours',
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
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 hover:brightness-110"
                style={{ backgroundColor: '#FC9700', color: '#0F172A' }}
              >
                Recevoir mon audit SEO gratuit
                <Icon name="send" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ — Schema.org FAQPage est dans le <head> global + Questions/Réponses visuelles */}
        <section className="bg-[#EFF6FF] border-y border-[#BFDBFE] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12" data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#1D4ED8] border border-[#BFDBFE] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-5">
                FAQ SEO Maroc · Rich Snippet
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
                to="/contact"
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
