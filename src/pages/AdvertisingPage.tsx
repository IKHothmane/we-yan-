﻿﻿﻿﻿﻿﻿﻿import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const analyticsPreview = '/images/home/dashboard.webp?v=20260623-ad'

const dataPreview = '/images/advertising/data-preview.jpg'

const platforms = [
  {
    name: 'Google Ads',
    primaryLabel: 'Google',
    secondaryLabel: 'Ads',
    primaryClassName: 'text-[#4285F4]',
    secondaryClassName: 'text-[#34A853]',
  },
  {
    name: 'Meta Business',
    primaryLabel: 'Meta',
    secondaryLabel: 'Business',
    primaryClassName: 'text-[#0A66FF]',
    secondaryClassName: 'text-[#5B7CFF]',
  },
  {
    name: 'LinkedIn Ads',
    primaryLabel: 'LinkedIn',
    secondaryLabel: 'Ads',
    primaryClassName: 'text-[#0A66C2]',
    secondaryClassName: 'text-[#0A66C2]',
  },
  {
    name: 'TikTok for Business',
    primaryLabel: 'TikTok',
    secondaryLabel: 'for Business',
    primaryClassName: 'text-[#111111]',
    secondaryClassName: 'text-[#FE2C55]',
  },
  {
    name: 'Pinterest Ads',
    primaryLabel: 'Pinterest',
    secondaryLabel: 'Ads',
    primaryClassName: 'text-[#E60023]',
    secondaryClassName: 'text-[#E60023]',
  },
] as const

const platformCarouselItems = [...platforms, ...platforms] as const

type PlatformName = (typeof platforms)[number]['name']

function PlatformLogo({ name }: { name: PlatformName }) {
  if (name === 'Google Ads') {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-slate-200/70">
        <svg aria-hidden="true" className="h-9 w-9" viewBox="0 0 24 24">
          <path
            d="M21.8 12.23c0-.76-.07-1.49-.2-2.2H12v4.17h5.49a4.7 4.7 0 0 1-2.04 3.08v2.56h3.3c1.93-1.78 3.05-4.41 3.05-7.61Z"
            fill="#4285F4"
          />
          <path
            d="M12 22c2.76 0 5.08-.91 6.77-2.46l-3.3-2.56c-.91.61-2.08.97-3.47.97-2.67 0-4.93-1.8-5.74-4.22H2.85v2.64A10 10 0 0 0 12 22Z"
            fill="#34A853"
          />
          <path
            d="M6.26 13.73A5.99 5.99 0 0 1 6 12c0-.6.09-1.18.26-1.73V7.63H2.85A10 10 0 0 0 2 12c0 1.61.38 3.14 1.05 4.37l3.21-2.64Z"
            fill="#FBBC05"
          />
          <path
            d="M12 6.05c1.5 0 2.85.52 3.91 1.53l2.93-2.93C17.07 2.98 14.76 2 12 2a10 10 0 0 0-8.95 5.63l3.21 2.64C7.07 7.85 9.33 6.05 12 6.05Z"
            fill="#EA4335"
          />
        </svg>
      </div>
    )
  }

  if (name === 'Meta Business') {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FF] shadow-md ring-1 ring-[#d6e4ff]">
        <svg aria-hidden="true" className="h-9 w-9" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 15.5c1.7-5.7 4-8.5 6-8.5 2.3 0 3.2 4.5 4 7 .8-2.2 2.1-5.5 4.2-5.5 1.4 0 2.7 1.7 3.8 5"
            stroke="#0A66FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </svg>
      </div>
    )
  }

  if (name === 'LinkedIn Ads') {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A66C2] shadow-md">
        <span className="text-2xl font-bold leading-none text-white">in</span>
      </div>
    )
  }

  if (name === 'TikTok for Business') {
    return (
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#111111] shadow-md">
        <span className="absolute text-2xl font-black text-[#25F4EE] -translate-x-[1px]">♪</span>
        <span className="absolute text-2xl font-black text-[#FE2C55] translate-x-[1px] translate-y-[1px]">♪</span>
        <span className="relative text-2xl font-black text-white">♪</span>
      </div>
    )
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E60023] shadow-md">
      <span className="text-[1.7rem] font-black leading-none text-white">P</span>
    </div>
  )
}

const omniChannelCards = [
  {
    title: 'Google Search & Display',
    description:
      "Captez l'intention d'achat au moment précis. Du Search ultra-précis au Display à large portée, nous dominons les enchères pour vous placer devant les bons prospects.",
    icon: 'search',
    image: analyticsPreview,
    imageAlt: 'Google Search et Display',
    cardClassName: 'bg-brand-charcoal text-white',
    overlayClassName: 'bg-gradient-to-t from-brand-charcoal via-brand-charcoal/70 to-transparent',
    bodyClassName: 'text-white/75',
    iconWrapperClassName: 'bg-white/10 text-white',
    contentClassName: 'max-w-sm',
    imageClassName: 'absolute inset-0 h-full w-full object-cover object-center opacity-45 transition-transform duration-700 group-hover:scale-105',
  },
  {
    title: 'Meta Ads Excellence',
    description:
      'Dominez Instagram et Facebook grâce au social selling. Nous combinons créativité visuelle et ciblage algorithmique pour engager vos prospects et accélérer vos ventes.',
    icon: 'groups_3',
    image: dataPreview,
    imageAlt: 'Meta Ads Excellence',
    cardClassName: 'bg-[#EAF0F6] text-brand-charcoal',
    overlayClassName: 'bg-gradient-to-l from-white/70 to-transparent',
    bodyClassName: 'text-brand-charcoal/70',
    iconWrapperClassName: 'bg-white text-brand-blue shadow-sm',
    contentClassName: 'w-2/3',
    imageClassName:
      'absolute right-0 top-0 h-full w-[72%] object-contain object-right opacity-90 transition-transform duration-700 group-hover:scale-105',
  },
  {
    title: 'Video Strategy',
    description: 'YouTube & Reels pour une notoriété massive et des contenus qui captent vite l’attention.',
    icon: 'movie_filter',
    image: analyticsPreview,
    imageAlt: 'Video Strategy',
    cardClassName: 'bg-brand-charcoal text-white',
    overlayClassName: 'bg-gradient-to-t from-brand-charcoal via-brand-charcoal/70 to-transparent',
    bodyClassName: 'text-white/75',
    iconWrapperClassName: 'bg-white/10 text-white',
    contentClassName: 'max-w-sm',
    imageClassName:
      'absolute inset-0 h-full w-full object-cover object-center opacity-45 transition-transform duration-700 group-hover:scale-105',
  },
  {
    title: 'Data Intelligence',
    description:
      'Chaque centime dépensé est traqué. Nous implémentons les APIs de conversion et le suivi avancé pour nourrir les algorithmes avec une donnée plus propre et plus rentable.',
    icon: 'insights',
    image: dataPreview,
    imageAlt: 'Data Intelligence',
    cardClassName: 'bg-[#0B111A] text-white',
    overlayClassName: 'bg-gradient-to-l from-brand-charcoal/10 via-brand-charcoal/60 to-brand-charcoal',
    bodyClassName: 'text-white/70',
    iconWrapperClassName: 'bg-white/10 text-secondary',
    contentClassName: 'w-2/3',
    imageClassName:
      'absolute right-0 top-0 h-full w-[58%] object-cover object-center opacity-55 transition-transform duration-700 group-hover:scale-105',
  },
] as const

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
    className: 'border-2 border-slate-200 bg-white text-slate-500',
  },
  {
    number: '03',
    title: 'Optimisation',
    description:
      'A/B testing, ajustement des enchères, gestion des budgets et raffinement continu selon le ROAS réel.',
    className: 'border-2 border-slate-200 bg-white text-slate-500',
  },
  {
    number: '04',
    title: 'Scale',
    description:
      'Accélération sur les segments les plus rentables pour transformer la pub en moteur de croissance.',
    className: 'border-2 border-slate-200 bg-white text-slate-500',
  },
] as const

export default function AdvertisingPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-gray font-sans text-brand-charcoal antialiased">
      <PageSeo {...pageSeo.advertising} />
      <Navbar serviceTitle="Publicité Digitale" />

      <main>
        <header className="relative overflow-hidden bg-white pb-20 pt-32 lg:pb-32 lg:pt-48">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl opacity-50" />
          <div className="pointer-events-none absolute bottom-0 right-20 h-[400px] w-[400px] rounded-full bg-green-200/20 blur-3xl opacity-50" />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-[clamp(1rem,2vw,2.5rem)]">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6" data-reveal>
                <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-gray-100 px-4 py-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Performance & ROI
                  </span>
                </div>
                <h1 className="mb-6 font-rigot text-5xl font-bold leading-[1.1] tracking-tight lg:text-7xl">
                  Publicité Digitale
                  <br />
                  <span className="text-brand-blue">Propulsée</span> par la Data
                </h1>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600">
                  Transformez votre budget publicitaire en moteur de croissance. Nous orchestrons des
                  campagnes multi-leviers omni-canales sur Meta Ads et Google Ads avec une exécution
                  chirurgicale, rentable et pilotée par la donnée.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-[52px] w-fit items-center justify-center whitespace-nowrap rounded-full border border-brand-orange bg-brand-orange px-8 py-3.5 text-center text-base font-medium leading-tight text-brand-charcoal shadow-lg shadow-orange-500/30 transition-colors hover:bg-orange-600 hover:text-brand-charcoal"
                  >
                    Démarrer une campagne →
                  </Link>
                  <a
                    href="#approche-omni-canale"
                    className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-3.5 text-base font-medium text-brand-charcoal transition-colors hover:bg-gray-50"
                  >
                    Voir nos études de cas
                  </a>
                </div>
              </div>

              <div className="relative lg:col-span-6" data-reveal data-reveal-delay="200">
                <div className="glassmorphism relative z-10 ml-auto max-w-md rounded-3xl p-8 shadow-glass">
                  <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-6">
                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500">Conversion Rate</p>
                      <p className="text-3xl font-bold text-brand-charcoal">+124%</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-brand-orange">
                      <Icon name="trending_up" className="text-2xl" />
                    </div>
                  </div>

                  <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-6">
                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500">Cost per Acquisition</p>
                      <p className="text-3xl font-bold text-brand-charcoal">-38%</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-brand-blue">
                      <Icon name="paid" className="text-2xl" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="mb-1 text-sm font-medium text-gray-500">ROAS Global</p>
                      <p className="text-3xl font-bold text-brand-charcoal">x8.4</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-500">
                      <Icon name="auto_awesome" className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-tr from-green-100 to-blue-50 opacity-50 blur-lg" />
              </div>
            </div>
          </div>
        </header>

        <section className="border-y border-gray-100 bg-white py-8">
          <div className="mx-auto w-full max-w-[1600px] px-[clamp(1rem,2vw,2.5rem)]">
            <div className="platform-carousel-mask">
              <div className="platform-carousel-track">
                {platformCarouselItems.map((platform, index) => (
                  <div key={`${platform.name}-${index}`} className="platform-carousel-item flex items-center gap-5">
                    <PlatformLogo name={platform.name} />
                    <div className="flex items-center space-x-3 whitespace-nowrap">
                      <span className={`text-3xl font-extrabold tracking-tight ${platform.primaryClassName}`}>{platform.primaryLabel}</span>
                      <span className={`text-2xl font-bold ${platform.secondaryClassName}`}>{platform.secondaryLabel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-gray py-24" id="approche-omni-canale">
          <div className="mx-auto w-full max-w-[1600px] px-[clamp(1rem,2vw,2.5rem)]">
            <div className="mb-16 text-center" data-reveal>
              <h2 className="font-rigot text-3xl text-brand-charcoal md:text-5xl">Une Approche Omni-Canale</h2>
              <p className="mx-auto mt-4 max-w-2xl text-body-md text-on-surface-variant">
                Nous ne jetons pas de l&apos;argent par les fenêtres. Nous plaçons vos annonces là où votre
                audience vit, respire et achète.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {omniChannelCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`group relative flex h-[300px] flex-col justify-end overflow-hidden rounded-[2rem] p-8 ${card.cardClassName}`}
                  data-reveal
                  data-reveal-delay={String(index * 100)}
                >
                  <img alt={card.imageAlt} className={card.imageClassName} src={card.image} />
                  <div className={`absolute inset-0 z-10 ${card.overlayClassName}`} />
                  <div className={`relative z-20 ${card.contentClassName}`}>
                    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${card.iconWrapperClassName}`}>
                      <Icon name={card.icon} className="text-[20px]" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                    <p className={`text-sm leading-relaxed ${card.bodyClassName}`}>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto w-full max-w-[1600px] px-[clamp(1rem,2vw,2.5rem)]">
            <div className="mb-20 text-center" data-reveal>
              <h2 className="mb-4 font-rigot text-3xl text-brand-charcoal md:text-5xl">
                Notre Processus de Performance
              </h2>
              <p className="mx-auto max-w-2xl text-body-md text-slate-500">
                Un cycle itératif conçu pour éliminer le gaspillage et amplifier ce qui fonctionne.
            </p>
            </div>

            <div className="relative mx-auto max-w-[1480px]">
              <div className="absolute left-0 top-8 z-0 hidden h-0.5 w-full -translate-y-1/2 bg-slate-200 md:block" />
              <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="relative z-10 text-center"
                    data-reveal
                    data-reveal-delay={String(index * 100)}
                  >
                    <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold ${step.className}`}>
                      {step.number}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-brand-charcoal">{step.title}</h3>
                    <p className="px-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-charcoal py-32 text-white">
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <img alt="Dashboard analytics premium" className="h-full w-full object-cover" src={analyticsPreview} />
          </div>
          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-[clamp(1rem,2vw,2.5rem)]">
            <div className="max-w-2xl" data-reveal>
              <div className="glass-card-dark rounded-[2rem] p-8 md:p-10">
                <h2 className="mb-6 font-rigot text-3xl text-white md:text-5xl">Data-Driven ou rien.</h2>
                <p className="text-body-lg leading-relaxed text-white/80">
                  À l&apos;ère de l&apos;IA et de la fin des cookies tiers, le tracking technique est votre
                  avantage compétitif. Nous construisons une infrastructure de données robuste avant de
                  scaler.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-4">
                    <Icon name="check_circle" className="mt-1 text-[20px] text-secondary" />
                    <div>
                      <span className="block font-bold">Conformité RGPD & Privacy</span>
                      <span className="text-body-md text-white/70">
                        Consent mode V2 et respect des normes européennes.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Icon name="ads_click" className="mt-1 text-[20px] text-secondary" />
                    <div>
                      <span className="block font-bold">GTM Server-Side</span>
                      <span className="text-body-md text-white/70">
                        Contournez les ad-blockers et récupérez plus de signaux de conversion.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Icon name="insights" className="mt-1 text-[20px] text-secondary" />
                    <div>
                      <span className="block font-bold">Attribution Multi-Touch</span>
                      <span className="text-body-md text-white/70">
                        Comprenez le rôle de chaque canal dans le parcours client final.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center">
          <div className="mx-auto w-full max-w-[1400px] px-[clamp(1rem,2vw,2.5rem)]" data-reveal>
            <h2 className="font-rigot text-4xl leading-tight text-brand-charcoal md:text-6xl">
              Prêt à multiplier votre <br className="hidden sm:block" />
              <span className="text-secondary">Chiffre d&apos;Affaires</span> ?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-body-lg text-on-surface-variant">
              Audit gratuit de vos comptes publicitaires actuels pour identifier vos pertes de budget.
            </p>
            <div className="pt-8">
              <Link
                className="inline-flex min-h-[56px] w-fit items-center justify-center whitespace-nowrap rounded-full border border-brand-orange bg-brand-orange px-10 py-4 text-center text-base font-medium leading-tight text-brand-charcoal shadow-lg shadow-orange-500/30 transition-colors hover:bg-orange-600 hover:text-brand-charcoal"
                to="/contact"
              >
                Réserver un audit publicitaire
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter revealDelay="100" />
    </div>
  )
}
