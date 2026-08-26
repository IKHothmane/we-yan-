import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import PageBreadcrumb from '../components/PageBreadcrumb'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const heroImage = '/images/seo/hero-user.webp?v=20260623'
const authorityImage = '/images/seo/authority.webp'
const testimonialImage = '/images/seo/testimonial.webp'

const growthSteps = [
  {
    number: '01',
    title: 'Suivi Data-Driven',
    description:
      'Dashboards en temps reel pour piloter vos KPI : trafic, positions et surtout, conversions.',
  },
  {
    number: '02',
    title: 'Accompagnement Agile',
    description:
      "Le SEO evolue, nous aussi. Nous ajustons la strategie mensuellement face aux mises a jour algorithmiques.",
  },
  {
    number: '03',
    title: 'ROI Durable',
    description:
      "Contrairement a la publicite, le SEO capitalise sur le temps. Vos efforts d'aujourd'hui sont vos revenus de demain.",
  },
] as const

export default function SeoPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background font-body text-on-background">
      <PageSeo {...pageSeo.seo} />
      <Navbar serviceTitle="Référencement Naturel (SEO)" />

      <main>
        <section className="relative overflow-hidden px-[clamp(1rem,4vw,2rem)] pb-32 pt-32 md:px-margin-desktop md:pb-48 md:pt-40 lg:pt-48">
          <div className="absolute inset-0 z-0">
            <img
              alt="Luminous office background"
              className="h-full w-full object-cover object-center opacity-40"
              src={heroImage}
                    width={800}
                    height={600}
                  />
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md" />
          </div>

          <div className="relative z-10 grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="max-w-2xl" data-reveal>
              <PageBreadcrumb className="mb-6" />
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-brand-blue/20 bg-white px-5 py-2 text-brand-blue shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand-orange" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Expertise Performance
                </span>
              </div>
              <h1 className="mb-8 max-w-3xl font-rigot text-6xl font-extrabold leading-[1.05] text-brand-charcoal md:text-8xl">
                Référencement
                <br />
                <span className="block text-secondary italic drop-shadow-[0_10px_30px_rgba(252,151,0,0.28)]">
                  Naturel (SEO).
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-xl font-light leading-relaxed text-brand-charcoal/70 md:text-2xl">
                Cette page décrit notre <strong className="font-semibold text-brand-charcoal">prestation SEO</strong> :
                audit technique, optimisation on-page, suivi des positions et netlinking. Objectif : un
                service de référencement naturel mesurable, pas une page vitrine générique.
              </p>
              <p className="mb-12 max-w-xl text-lg font-light leading-relaxed text-brand-charcoal/70">
                Pour un accompagnement local (Google Business, pack local Maarif, expert SEO à Casablanca),
                voyez aussi notre{' '}
                <Link to="/agence-seo-casablanca/" className="font-bold text-brand-blue underline-offset-4 hover:underline">
                  agence SEO à Casablanca
                </Link>
                . Les deux pages se complètent : ici la méthode de service, là l’ancrage local.
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <Link
                  to="/contact/"
                  className="flex items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-4 text-lg font-bold text-on-secondary transition-all hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/20"
                >
                  Audit Gratuit
                  <Icon name="analytics" className="text-[22px]" />
                </Link>
                <a
                  href="#methode"
                  className="rounded-xl border-2 border-brand-blue px-8 py-4 text-center text-lg font-bold text-brand-blue transition-all hover:bg-brand-blue hover:text-white"
                >
                  Decouvrir l&apos;approche
                </a>
              </div>
            </div>

            <div
              className="relative hidden overflow-hidden rounded-3xl p-4 shadow-2xl glass-card lg:mt-48 lg:block xl:mt-56 2xl:mt-64"
              data-reveal
              data-reveal-delay="100"
            >
              <img
                alt="Dashboard SEO premium"
                className="h-full w-full rounded-2xl object-cover"
                src={heroImage}
                    width={800}
                    height={600}
                  />
              <div className="absolute -bottom-6 -left-6 w-[220px] max-w-[220px]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1rem] border-[3px] border-brand-orange bg-transparent shadow-[0_18px_45px_-18px_rgba(252,151,0,0.65)]" />
                <div className="relative rounded-[1rem] bg-secondary px-5 py-4 text-white shadow-xl">
                  <p className="mb-2 font-rigot text-4xl leading-none tracking-tight">40%</p>
                  <p className="text-sm font-semibold leading-snug text-white/95">
                    Croissance organique moyenne sur 12 mois
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-surface-container px-[clamp(1rem,4vw,2rem)] py-32 md:px-margin-desktop"
          id="methode"
        >
          <div className="w-full">
            <div className="mb-24 text-center" data-reveal>
              <h2 className="mb-6 font-rigot text-4xl font-bold text-brand-charcoal md:text-6xl">
                Une Methodologie a 360°
              </h2>
              <p className="mx-auto max-w-2xl text-xl font-light text-brand-charcoal/70">
                Le SEO n&apos;est pas un acte isole mais une synergie de techniques, de semantique et
                d&apos;autorite.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <article
                className="bento-item glass-card relative overflow-hidden rounded-3xl border border-brand-blue/10 bg-white p-12 md:col-span-2"
                data-reveal
              >
                <div className="flex flex-col gap-10 md:flex-row">
                  <div className="relative z-10 flex-1">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon name="insights" className="text-3xl" />
                    </div>
                    <h3 className="mb-4 font-rigot text-4xl font-bold text-brand-charcoal">
                      Audit Technique & Sante Web
                    </h3>
                    <p className="mb-6 text-lg leading-relaxed text-brand-charcoal/70">
                      Nous analysons chaque ligne de code pour eliminer les freins a l&apos;indexation.
                      De la vitesse de chargement aux Core Web Vitals, nous preparons votre site a
                      l&apos;excellence.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 font-bold text-brand-charcoal/80">
                        <Icon name="check_circle" className="text-sm text-brand-orange" />
                        Analyse de l&apos;architecture & Crawler
                      </li>
                      <li className="flex items-center gap-3 font-bold text-brand-charcoal/80">
                        <Icon name="check_circle" className="text-sm text-brand-orange" />
                        Optimisation Mobile-First
                      </li>
                    </ul>
                  </div>

                  <div className="flex w-full items-end justify-center rounded-2xl bg-surface-container p-6 md:w-1/3">
                    <div className="seo-bars flex h-40 items-end gap-3">
                      <div className="seo-bar seo-bar-blue seo-bar-1" />
                      <div className="seo-bar seo-bar-blue seo-bar-2" />
                      <div className="seo-bar seo-bar-orange seo-bar-3" />
                      <div className="seo-bar seo-bar-blue seo-bar-4" />
                    </div>
                  </div>
                </div>
              </article>

              <article
                className="bento-item flex flex-col rounded-3xl border border-brand-blue/10 bg-white p-10 shadow-sm transition-all hover:shadow-xl"
                data-reveal
                data-reveal-delay="100"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Icon name="search" className="text-3xl" />
                </div>
                <h3 className="mb-4 font-rigot text-2xl font-bold text-brand-charcoal">
                  Intelligence Semantique
                </h3>
                <p className="leading-relaxed text-brand-charcoal/70">
                  Nous identifions les intentions de recherche a fort potentiel de conversion pour
                  aligner votre contenu sur les besoins reels de vos clients.
                </p>
              </article>

              <article
                className="bento-item flex flex-col rounded-3xl border border-brand-blue/10 bg-white p-10 shadow-sm transition-all hover:shadow-xl"
                data-reveal
                data-reveal-delay="200"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Icon name="article" className="text-3xl" />
                </div>
                <h3 className="mb-4 font-rigot text-2xl font-bold text-brand-charcoal">
                  Strategie Editoriale
                </h3>
                <p className="leading-relaxed text-brand-charcoal/70">
                  Creation de contenus riches qui captivent votre audience et repondent precisement
                  aux algorithmes de Google.
                </p>
              </article>

              <article
                className="bento-item relative overflow-hidden rounded-3xl bg-primary p-12 text-white shadow-xl shadow-primary/20 ring-1 ring-primary/30 md:col-span-2"
                data-reveal
                data-reveal-delay="300"
              >
                <div className="flex flex-col items-center gap-10 md:flex-row">
                  <div className="relative z-10 flex-1">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <Icon name="hub" className="text-3xl text-white" />
                    </div>
                    <h3 className="mb-4 font-rigot text-4xl font-bold">Netlinking & Autorite</h3>
                    <p className="mb-6 text-lg leading-relaxed text-white/90">
                      Developpez la notoriete de votre domaine par une acquisition de liens
                      strategique et naturelle, augmentant la confiance des moteurs de recherche
                      envers votre marque.
                    </p>
                    <Link
                      to="/contact/"
                      className="inline-flex items-center gap-2 font-bold text-white transition-all hover:gap-4"
                    >
                      En savoir plus
                      <Icon name="arrow_forward" className="text-[20px]" />
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img
                      alt="Autorite SEO et netlinking"
                      className="rounded-xl shadow-lg mix-blend-luminosity opacity-80"
                      src={authorityImage}
                    width={800}
                    height={600}
                  />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white px-[clamp(1rem,4vw,2rem)] py-32 md:px-margin-desktop">
          <div className="grid w-full grid-cols-1 items-center gap-24 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="space-y-12">
                {growthSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="bento-item flex items-start gap-6"
                    data-reveal
                    data-reveal-delay={String(index * 100)}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-secondary/25 bg-secondary/10 font-rigot text-2xl font-bold text-secondary shadow-[0_10px_24px_-18px_rgba(252,151,0,0.9)]">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="mb-2 font-rigot text-2xl font-bold text-brand-charcoal">
                        {step.title}
                      </h4>
                      <p className="text-lg leading-relaxed text-brand-charcoal/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2" data-reveal>
              <h2 className="mb-8 font-rigot text-4xl font-bold leading-tight text-brand-charcoal md:text-6xl">
                Investissez dans un actif digital permanent
              </h2>
              <p className="mb-10 text-xl font-light leading-relaxed text-brand-charcoal/70">
                Notre vision du SEO ne se limite pas a la premiere page. Nous construisons une
                infrastructure digitale robuste qui attire, engage et convertit.
              </p>
              <div className="bento-item rounded-3xl border border-brand-blue/10 bg-surface-container p-8 shadow-sm">
                <p className="mb-6 text-lg italic leading-relaxed text-brand-charcoal/80">
                  "Depuis notre collaboration avec WE YAN DIGITAL, notre trafic qualifie a quadruple,
                  devenant notre premier canal de vente."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full bg-brand-blue/20">
                    <img
                      alt="Marc Lambert"
                      className="h-full w-full object-cover"
                      src={testimonialImage}
                    width={800}
                    height={600}
                  />
                  </div>
                  <div>
                    <p className="font-bold text-brand-charcoal">Marc Lambert</p>
                    <p className="text-sm text-brand-charcoal/60">
                      Directeur Marketing, InnovCorp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-32 md:px-margin-desktop">
          <div className="relative w-full overflow-hidden rounded-[3rem] border border-brand-blue/10 bg-surface-container p-16 text-center shadow-2xl md:p-24">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-5"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, #6483F0 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="relative z-10" data-reveal>
              <h2 className="mb-8 font-rigot text-5xl font-bold leading-tight text-brand-charcoal md:text-7xl">
                Pret a dominer
                <br />
                votre marche ?
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-xl font-light text-brand-charcoal/70">
                Discutons de vos objectifs et realisons un premier audit de votre visibilite
                actuelle.
              </p>
              <div className="flex flex-col justify-center gap-6 sm:flex-row">
                <Link
                  to="/contact/"
                  className="rounded-2xl bg-secondary px-10 py-5 text-lg font-bold text-on-secondary shadow-xl shadow-secondary/30 transition-transform hover:scale-105 hover:bg-secondary/90"
                >
                  Prendre RDV
                </Link>
                <Link
                  to="/projets/"
                  className="rounded-2xl border border-brand-blue/20 bg-white px-10 py-5 text-lg font-bold text-brand-charcoal shadow-sm transition-all hover:bg-surface-container"
                >
                  Consulter nos cas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter revealDelay="100" />
    </div>
  )
}
