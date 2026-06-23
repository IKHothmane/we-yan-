﻿﻿import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const heroImage = '/images/strategy/hero.jpg'

const approachImage = '/images/strategy/approach.jpg'

const positioningImage = '/images/strategy/positioning.jpg'

const microphoneIcon = '/icons/microphone-lines-solid-full.svg'

const approachSteps = [
  {
    icon: 'insights',
    title: 'Audit de Perception',
    description:
      "Comprendre comment vous êtes vu aujourd'hui pour définir qui vous serez demain.",
  },
  {
    icon: 'auto_awesome',
    title: 'ADN Créatif',
    description:
      "Codifier votre message pour qu'il résonne avec authenticité et modernité.",
  },
  {
    icon: 'rocket_launch',
    title: 'Déploiement Tactique',
    description:
      'Une exécution millimétrée sur tous les points de contact de votre audience.',
  },
] as const

const deliverables = [
  {
    eyebrow: 'Visual DNA',
    title: 'Brand Identity',
    description:
      'Un système visuel complet : logo, typographie exclusive, palette chromatique et guide de style pour une cohérence absolue.',
    large: true,
  },
  {
    title: 'Positionnement',
    description:
      'Définition de votre proposition de valeur unique et de votre avantage compétitif sur le marché.',
    filled: true,
  },
  {
    title: 'Analyse de marché',
    description:
      'Données comportementales et cartographie de la concurrence pour des décisions éclairées.',
    bars: ['w-[75%] bg-secondary', 'w-[45%] bg-primary', 'w-[90%] bg-secondary'],
  },
  {
    title: 'Brand Voice & Messaging',
    description:
      'Le ton, le vocabulaire et les piliers de communication qui humanisent votre marque.',
    icon: 'chat',
    wide: true,
  },
] as const

export default function StrategieMarketingPage() {
  useScrollReveal()

  return (
    <div className="font-body bg-background min-h-screen overflow-hidden w-full">
      <PageSeo {...pageSeo.strategyMarketing} />
      <Navbar />

      <main>
        <section className="relative flex min-h-[921px] items-center overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Direction stratégique et rebranding premium"
              className="h-full w-full scale-105 object-cover transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.68)_42%,rgba(255,255,255,0)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,249,249,0)_0%,rgba(249,249,249,1)_100%)]" />
          </div>

          <div className="relative z-10 w-full px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="max-w-4xl" data-reveal>
              <h1 className="font-display mt-2 text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-on-surface">
                Stratégie Marketing
                <br />
                <span className="text-secondary">&amp; Rebranding.</span>
              </h1>
              <p
                className="mt-8 max-w-2xl text-[clamp(1rem,2vw,1.18rem)] font-light leading-relaxed text-on-surface-variant"
                data-reveal
                data-reveal-delay="100"
              >
                Nous redéfinissons l&apos;essence de votre marque pour captiver l&apos;ère numérique.
                Une approche où l&apos;analyse rencontre l&apos;audace créative pour propulser votre
                influence.
              </p>
              <div className="mt-10 flex flex-wrap gap-4" data-reveal data-reveal-delay="200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-lg font-bold text-white shadow-[0_18px_40px_-18px_rgba(252,151,0,0.65)] transition-all duration-300 hover:bg-[#e68900]"
                >
                  Démarrer la transformation
                </Link>
                <a
                  href="#livrables"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-on-surface px-8 py-4 text-lg font-bold text-on-surface transition-colors hover:bg-on-surface hover:text-white"
                >
                  Voir nos cas d&apos;études
                  <Icon name="arrow_forward" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-surface-container-lowest px-[clamp(1rem,4vw,2rem)] py-section-padding md:px-margin-desktop">
          <div className="w-full">
            <div className="grid items-center gap-20 md:grid-cols-2" data-reveal>
              <div className="relative order-2 md:order-1" data-reveal data-reveal-delay="100">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-2xl shadow-primary/5">
                <img
                  src={approachImage}
                  alt="Approche stratégique We Digital"
                  className="h-full w-full object-cover"
                />
              </div>
                <div className="absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              </div>

              <div className="order-1 md:order-2">
                <h2 className="font-display text-[clamp(2.25rem,5vw,3.2rem)] font-extrabold uppercase tracking-[-0.03em] text-on-surface">
                  L&apos;Approche <span className="text-secondary">We Yan Digital</span>
                </h2>
                <p className="mt-8 text-[clamp(1rem,2vw,1.12rem)] leading-relaxed text-on-surface-variant">
                  Chaque rebranding commence par une immersion totale dans votre univers. Nous ne
                  changeons pas simplement votre logo ; nous sculptons une nouvelle perception. Notre
                  méthodologie fusionne les données de marché avec une intuition artistique raffinée.
                </p>

                <div className="mt-12 space-y-8">
                  {approachSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="group flex gap-6"
                      data-reveal
                      data-reveal-delay={String(150 + index * 100)}
                    >
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-outline-variant/30 bg-surface shadow-sm transition-colors duration-300 group-hover:border-secondary group-hover:text-secondary">
                        <Icon name={step.icon} className="h-7 w-7" />
                      </div>
                      <div>
                        <h4 className="font-display mb-2 text-xl font-bold text-on-surface">{step.title}</h4>
                        <p className="text-base leading-relaxed text-on-surface-variant">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-surface px-[clamp(1rem,4vw,2rem)] py-section-padding md:px-margin-desktop" id="livrables">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="relative z-10 w-full">
            <div className="mx-auto mb-20 max-w-3xl text-center" data-reveal>
              <h2 className="font-display text-[clamp(2.25rem,5vw,3.2rem)] font-extrabold uppercase tracking-[-0.03em] text-on-surface">
                Livrables Stratégiques
              </h2>
              <p className="mt-6 text-lg text-on-surface-variant">
                Des outils concrets pour piloter votre croissance et stabiliser votre identité.
              </p>
            </div>

            <div className="grid h-auto grid-cols-1 gap-8 md:grid-cols-12" data-reveal data-reveal-delay="100">
              <article className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-outline-variant/20 bg-surface-container-lowest p-12 shadow-sm transition-shadow hover:shadow-md md:col-span-8">
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                    {deliverables[0].eyebrow}
                  </span>
                  <h3 className="font-display mt-4 text-3xl font-bold text-on-surface">
                    {deliverables[0].title}
                  </h3>
                  <p className="mt-4 max-w-md text-lg text-on-surface-variant">{deliverables[0].description}</p>
                </div>
                <div className="mt-12 flex gap-4 overflow-hidden">
                  <div className="h-32 w-32 rounded-xl bg-primary shadow-inner" />
                  <div className="translate-y-6 h-32 w-32 rounded-xl bg-secondary shadow-inner" />
                  <div className="h-32 w-32 rounded-xl bg-primary-container shadow-inner" />
                  <div className="translate-y-6 h-32 w-32 rounded-xl bg-on-surface shadow-inner" />
                </div>
                <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-110" />
              </article>

              <article className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary to-[#587795] p-12 text-center text-white md:col-span-4">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/25 opacity-60" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                  <img
                    src={positioningImage}
                    alt="Illustration positionnement de marque"
                    className="mb-8 h-32 w-32 object-contain"
                  />
                  <h3 className="font-display text-2xl font-bold text-white">
                    {deliverables[1].title}
                  </h3>
                  <p className="mt-4 text-base text-white/85">{deliverables[1].description}</p>
                </div>
              </article>

              <article className="rounded-[1.75rem] border border-outline-variant/20 bg-surface-container-lowest p-10 transition-colors hover:border-primary/30 md:col-span-4">
                <h3 className="font-display text-2xl font-bold text-on-surface">
                  {deliverables[2].title}
                </h3>
                <div className="mb-8 mt-6 space-y-5">
                  {deliverables[2].bars.map((barClass, index) => (
                    <div key={index} className="h-2 overflow-hidden rounded-full border border-outline-variant/10 bg-surface">
                      <div className={`h-full rounded-full ${barClass}`} />
                    </div>
                  ))}
                </div>
                <p className="text-base text-on-surface-variant">{deliverables[2].description}</p>
              </article>

              <article className="group flex items-center gap-12 rounded-[1.75rem] border border-outline-variant/20 bg-surface-container-lowest p-12 transition-colors hover:border-secondary/30 md:col-span-8">
                <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-on-surface">
                      {deliverables[3].title}
                    </h3>
                    <p className="mt-4 text-lg text-on-surface-variant">
                      {deliverables[3].description}
                    </p>
                </div>
                <div className="hidden h-40 w-40 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-secondary/30 bg-surface transition-transform duration-500 group-hover:rotate-12 sm:flex">
                  <span
                    aria-hidden="true"
                    className="h-14 w-14 text-secondary"
                    style={{
                      WebkitMaskImage: `url(${microphoneIcon})`,
                      maskImage: `url(${microphoneIcon})`,
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                      backgroundColor: 'currentColor',
                    }}
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-surface-container-lowest px-[clamp(1rem,4vw,2rem)] py-section-padding md:px-margin-desktop">
          <div className="w-full">
            <div
              className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary via-[#587795] to-secondary px-10 py-16 text-center shadow-2xl md:px-16 md:py-24 lg:px-24 lg:py-32"
              data-reveal
            >
              <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-primary/25 blur-[90px]" />
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-secondary/25 blur-[90px]" />
              <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase leading-[1.1] text-white">
                  Prêt à écrire le prochain chapitre de votre histoire ?
                </h2>
                <p className="mt-8 text-xl font-light text-white/80">
                  Discutons de vos ambitions et voyons comment notre expertise peut transformer votre
                  présence digitale.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-10 py-5 text-lg font-bold text-white shadow-lg shadow-secondary/20 transition-colors hover:bg-[#e68900]"
                  >
                    <Icon name="chat" className="h-5 w-5" />
                    Parlons-en aujourd’hui
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    Prendre un RDV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter revealDelay="100" />
    </div>
  )
}
