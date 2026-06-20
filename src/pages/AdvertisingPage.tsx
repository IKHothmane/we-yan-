import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const analyticsPreview =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20digital%20advertising%20dashboard%2C%20meta%20ads%20and%20google%20ads%20analytics%2C%20luxury%20agency%20ui%2C%20periwinkle%20and%20orange%20palette%2C%20realistic%2C%20high-end&image_size=landscape_16_9'

const dataPreview =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDUad7QAZLjYWLP-6TjHz2kMlr9eyztvFzFGPrXMqEX33FmUAPUeghP3YG_SKC7sbYhtPewX1H7L4g8MchCLR7bxEJmou-eb8jWzALn4tciMzBDnvSxavb23QLMOKd0NQ_7kEVRlBoPlMV9dNwSaDC8Zr1f7vKy16DEQUwM7mRDNhQ7rougW8e90dqgve3sMyi_9XnrqYcUMKip4CYQo0LibYheGMc3a9fOteCjRFL1-coxlXgVLyiTFJInsgMq1o2G96csTCkmVIU'

const platforms = ['Google Ads', 'Meta Business', 'LinkedIn Ads', 'TikTok for Business', 'Pinterest Ads'] as const

const processSteps = [
  {
    number: '01',
    title: 'Audit & Setup',
    description:
      'Analyse de vos comptes, installation des pixels, setup des conversions et structuration des campagnes.',
    className: 'bg-secondary text-white shadow-[0_20px_40px_-20px_rgba(252,151,0,0.5)]',
  },
  {
    number: '02',
    title: 'Lancement',
    description:
      'Déploiement des campagnes Meta et Google avec une structure claire, des audiences solides et des créas adaptées.',
    className: 'bg-primary/15 text-primary',
  },
  {
    number: '03',
    title: 'Optimisation',
    description:
      'A/B testing, ajustement des enchères, gestion des budgets et raffinement continu selon le ROAS réel.',
    className: 'bg-slate-200 text-slate-900',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'Accélération sur les segments les plus rentables pour transformer la pub en moteur de croissance.',
    className: 'bg-secondary text-white',
  },
] as const

export default function AdvertisingPage() {
  useScrollReveal()

  return (
    <div className="font-body bg-background min-h-screen overflow-hidden w-full pb-28 md:pb-32">
      <PageSeo {...pageSeo.advertising} />
      <Navbar />

      <main>
        <header className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background px-[clamp(1rem,4vw,2rem)] pb-20 pt-24 md:px-margin-desktop md:pb-32 md:pt-32">
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="space-y-8 lg:w-3/5" data-reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[0.8rem] font-bold text-primary">
                  <Icon name="trending_up" className="h-4 w-4" />
                  Performance & ROI
                </div>
                <h1 className="text-[40px] leading-[1.1] text-on-surface md:text-[72px]">
                  Publicité Digitale <span className="text-primary italic">Propulsée</span> par la Data.
                </h1>
                <p className="max-w-2xl text-body-lg leading-relaxed text-on-surface-variant">
                  Transformez votre budget publicitaire en moteur de croissance. Nous orchestrons des
                  campagnes Meta Ads et Google Ads ultra-ciblées pour maximiser votre retour sur
                  investissement.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-[0_18px_40px_-18px_rgba(252,151,0,0.7)]"
                  >
                    Démarrer une Campagne
                    <Icon name="arrow_forward" className="h-5 w-5" />
                  </Link>
                  <a
                    href="#approche-omni-canale"
                    className="inline-flex items-center rounded-xl border-2 border-primary/20 px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-primary/5"
                  >
                    Voir nos études de cas
                  </a>
                </div>
              </div>

              <div className="w-full lg:w-2/5" data-reveal data-reveal-delay="100">
                <div className="relative">
                  <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
                  <div className="glass-card relative rounded-[2rem] p-8 shadow-xl shadow-primary/5">
                    <div className="space-y-6">
                      <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
                        <div>
                          <p className="text-label-md text-on-surface-variant">Conversion Rate</p>
                          <p className="text-[32px] font-bold text-on-surface">+124%</p>
                        </div>
                        <Icon name="insights" className="h-10 w-10 text-secondary" />
                      </div>
                      <div className="flex items-end justify-between border-b border-outline-variant/30 pb-4">
                        <div>
                          <p className="text-label-md text-on-surface-variant">Cost per Acquisition</p>
                          <p className="text-[32px] font-bold text-on-surface">-38%</p>
                        </div>
                        <Icon name="trending_up" className="h-10 w-10 text-primary" />
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-label-md text-on-surface-variant">ROAS Global</p>
                          <p className="text-[32px] font-bold text-on-surface">x8.4</p>
                        </div>
                        <Icon name="ads_click" className="h-10 w-10 text-green-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="border-y border-outline-variant/20 bg-surface-container-low py-12">
          <div className="max-w-container-max mx-auto flex flex-wrap items-center justify-center gap-8 px-[clamp(1rem,4vw,2rem)] opacity-60 grayscale transition-all duration-500 md:justify-between md:px-margin-desktop">
            {platforms.map((platform) => (
              <span key={platform} className="text-headline-md font-bold text-on-surface-variant">
                {platform}
              </span>
            ))}
          </div>
        </section>

        <section
          className="max-w-container-max mx-auto px-[clamp(1rem,4vw,2rem)] py-section-padding md:px-margin-desktop"
          id="approche-omni-canale"
        >
          <div className="mb-16 text-center" data-reveal>
            <h2 className="text-[32px] text-on-surface md:text-[48px]">Une Approche Omni-Canale</h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-md text-on-surface-variant">
              Nous ne jetons pas de l&apos;argent par les fenêtres. Nous plaçons vos annonces là où votre
              audience vit, respire et achète.
            </p>
          </div>

          <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-2 md:h-[600px]">
            <article
              className="group flex flex-col justify-between rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest p-8 transition-all duration-300 hover:border-primary md:col-span-7"
              data-reveal
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon name="search" className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-headline-md font-bold">Google Search & Display</h3>
                <p className="text-body-md text-on-surface-variant">
                  Captez l’intention d’achat au moment précis. Du Search ultra-précis au Display à large
                  portée, nous dominons les enchères pour vous placer devant les bons prospects.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 overflow-hidden">
                <span className="rounded-full bg-surface-container-high px-3 py-1 text-label-md">Keyword Strategy</span>
                <span className="rounded-full bg-surface-container-high px-3 py-1 text-label-md">Retargeting</span>
                <span className="rounded-full bg-surface-container-high px-3 py-1 text-label-md">Shopping</span>
              </div>
            </article>

            <article
              className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-white md:col-span-5"
              data-reveal
              data-reveal-delay="100"
            >
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <Icon name="groups_3" className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-4 text-headline-md font-bold">Meta Ads Excellence</h3>
                <p className="text-body-md text-white/80">
                  Dominez Instagram et Facebook grâce au social selling. Nous combinons créativité visuelle
                  et ciblage algorithmique pour engager vos prospects et accélérer vos ventes.
                </p>
              </div>
              <Icon name="ads_click" className="absolute -bottom-10 -right-10 h-40 w-40 opacity-10 transition-transform duration-700 group-hover:rotate-12" />
            </article>

            <article
              className="flex flex-col justify-between rounded-[2rem] bg-secondary p-8 text-white md:col-span-4"
              data-reveal
              data-reveal-delay="200"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                  <Icon name="movie_filter" className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-[24px] font-bold">Video Strategy</h3>
                <p className="text-label-md opacity-90">YouTube & Reels pour une notoriété massive.</p>
              </div>
              <button className="mt-4 w-full rounded-xl bg-white py-3 font-bold text-secondary transition-all hover:bg-white/90">
                Exploration
              </button>
            </article>

            <article
              className="flex items-center gap-8 rounded-[2rem] border border-outline-variant/30 bg-surface-container-high p-8 md:col-span-8"
              data-reveal
              data-reveal-delay="300"
            >
              <div className="hidden w-1/3 lg:block">
                <img className="h-auto w-full rounded-xl shadow-md" src={analyticsPreview} alt="Dashboard analytics premium" />
              </div>
              <div className="flex-1">
                <h3 className="mb-3 text-[24px] font-bold">Data Intelligence</h3>
                <p className="mb-4 text-body-md text-on-surface-variant">
                  Chaque centime dépensé est traqué. Nous implémentons les APIs de conversion et le suivi
                  avancé pour nourrir les algorithmes avec une donnée plus propre et plus rentable.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Icon name="check_circle" className="h-5 w-5 text-primary" />
                    <span className="text-label-md">Tracking Server-Side</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check_circle" className="h-5 w-5 text-primary" />
                    <span className="text-label-md">Dashboarding Temps-Réel</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-on-surface py-section-padding text-surface">
          <div className="max-w-container-max mx-auto px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row" data-reveal>
              <div className="max-w-xl">
                <h2 className="mb-6 text-[32px] leading-tight md:text-[48px]">Notre Processus de Performance</h2>
                <p className="text-body-lg text-white/70">
                  Un cycle itératif conçu pour éliminer le gaspillage et amplifier ce qui fonctionne.
                </p>
              </div>
              <div className="text-[64px] font-bold text-secondary/20">01 — 04</div>
            </div>

            <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
              <div className="absolute left-0 top-12 z-0 hidden h-[2px] w-full bg-white/10 md:block" />
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative z-10 space-y-6"
                  data-reveal
                  data-reveal-delay={String(index * 100)}
                >
                  <div className={`flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold ${step.className}`}>
                    {step.number}
                  </div>
                  <h3 className="text-headline-md font-bold">{step.title}</h3>
                  <p className="text-body-md text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-[clamp(1rem,4vw,2rem)] py-section-padding md:px-margin-desktop">
          <div className="max-w-container-max mx-auto rounded-[32px] border border-outline-variant/20 bg-surface-container-lowest p-8 md:p-16">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="space-y-8 lg:w-1/2" data-reveal>
                <h2 className="text-[32px] text-on-surface md:text-[48px]">Data-Driven ou rien.</h2>
                <p className="text-body-lg text-on-surface-variant">
                  À l&apos;ère de l&apos;IA et de la fin des cookies tiers, le tracking technique est votre
                  avantage compétitif. Nous construisons une infrastructure de données robuste avant de scaler.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Icon name="check_circle" className="mt-1 h-5 w-5 text-secondary" />
                    <div>
                      <span className="block font-bold">Conformité RGPD & Privacy</span>
                      <span className="text-body-md text-on-surface-variant">
                        Consent mode V2 et respect des normes européennes.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Icon name="ads_click" className="mt-1 h-5 w-5 text-secondary" />
                    <div>
                      <span className="block font-bold">GTM Server-Side</span>
                      <span className="text-body-md text-on-surface-variant">
                        Contournez les ad-blockers et récupérez plus de signaux de conversion.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Icon name="insights" className="mt-1 h-5 w-5 text-secondary" />
                    <div>
                      <span className="block font-bold">Attribution Multi-Touch</span>
                      <span className="text-body-md text-on-surface-variant">
                        Comprenez le rôle de chaque canal dans le parcours client final.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/2" data-reveal data-reveal-delay="100">
                <div className="group relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-110" />
                  <img className="relative z-10 rounded-[2rem] shadow-2xl" src={dataPreview} alt="Infrastructure data marketing" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-section-padding text-center md:px-margin-desktop">
          <div className="mx-auto max-w-3xl space-y-8" data-reveal>
            <h2 className="text-[48px] leading-none md:text-[64px]">
              Prêt à multiplier votre <span className="text-secondary">Chiffre d&apos;Affaires</span> ?
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Audit gratuit de vos comptes publicitaires actuels pour identifier vos pertes de budget.
            </p>
            <div className="pt-6">
              <Link
                className="inline-block rounded-full bg-on-surface px-12 py-5 text-xl font-bold text-surface transition-all hover:bg-primary"
                to="/contact"
              >
                Réserver mon Audit Publicitaire
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter revealDelay="100" />
    </div>
  )
}
