import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAs-UfMuuqGboj__Mjsss1geuA4s6CwyaaUkFwiuTa8HcKG2aYT6H5ceYSQNkhqvAV7Opuxdm3IlfgehEka8xQW_7ALT2sO0DI0hyTvaglnncjL0b9IX1ztyXpq-TKTMBifoAE28TdxBKwHkezwRLH5SO0G3wKrkGkEHwcESoqEnLwiCbx2L9ZzFXyvKWB-lZkmwXDBCG99aPWyAmjB6gxsqsNJr3NrKneVw7ycvXxc9eivOAR33wpfIieQyeMMQs-FUOm_H-i784E'

const approachImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAoFVEFvNkQ5VzOyalg80QtNoaB0KwO6B_lD0OJIt7EehNKlQemOly0lqmFZ8a09v9EN0B2XT2jrXORTb_I1zksZx4WrH1o_1rdrKd4Vwwn4JNQMIB87mxNlswPMIXyJzF4J4lv31qlbBCgGRgqew7_ePBkX1T1Fz6qXq7BcQexFP0pr4Sczkfo94fgzrIe9q46seZm_kyZzpgkYbYE2j6LumG1bpDaewQusPpqNWqqGsTRTwZUfL07TEKk5Vhy0ii6T9r1jQTF3XQ'

const approachSteps = [
  {
    icon: 'insights',
    title: 'Audit de perception',
    description:
      "Nous analysons votre image actuelle, vos concurrents et les points de friction qui ralentissent votre croissance.",
  },
  {
    icon: 'auto_awesome',
    title: 'ADN créatif',
    description:
      'Nous redéfinissons votre plateforme de marque, votre ton et votre système visuel pour une présence plus forte.',
  },
  {
    icon: 'trending_up',
    title: 'Déploiement tactique',
    description:
      'Nous orchestrons le lancement sur vos canaux clés avec un plan d’action mesurable et orienté résultats.',
  },
] as const

const deliverables = [
  {
    eyebrow: 'Visual DNA',
    title: 'Brand Identity',
    description:
      'Logo, palette, typographies, guidelines et direction artistique pour une image de marque cohérente.',
    accent: 'from-primary/10 to-primary/5',
    large: true,
  },
  {
    icon: 'travel_explore',
    title: 'Positionnement',
    description:
      'Une promesse claire, une différenciation nette et un message qui parle immédiatement à votre marché.',
    filled: true,
  },
  {
    title: 'Analyse de marché',
    description:
      'Cartographie concurrentielle, insights audience et KPIs pour prendre des décisions plus précises.',
    bars: ['w-[78%] bg-primary', 'w-[58%] bg-secondary', 'w-[88%] bg-slate-500'],
  },
  {
    title: 'Brand Voice & Messaging',
    description:
      'Ton de marque, storytelling, messages piliers et structure éditoriale pour une communication mémorable.',
    icon: 'chat',
    wide: true,
  },
] as const

export default function StrategieMarketingPage() {
  useScrollReveal()

  return (
    <div className="font-body bg-background min-h-screen overflow-hidden w-full pb-28 md:pb-32">
      <PageSeo {...pageSeo.strategyMarketing} />
      <Navbar />

      <main>
        <section className="relative h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Direction stratégique et rebranding premium"
              className="h-full w-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          </div>

          <div className="relative z-10 w-full max-w-container-max mx-auto px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop pt-28 md:pt-32">
            <div className="max-w-4xl" data-reveal>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/75 px-4 py-2 text-[0.76rem] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
                Strategic Excellence
              </span>
              <h1 className="mt-6 text-[clamp(2.8rem,8vw,5.8rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-on-surface">
                Stratégie Marketing
                <br />
                <span className="text-secondary">&amp; Rebranding.</span>
              </h1>
              <p
                className="mt-6 max-w-2xl text-[clamp(1rem,2.2vw,1.18rem)] leading-relaxed text-on-surface-variant"
                data-reveal
                data-reveal-delay="100"
              >
                Nous redéfinissons l’essence de votre marque pour capter l’attention, clarifier votre
                positionnement et accélérer votre croissance digitale avec une approche à la fois
                analytique et créative.
              </p>
              <div className="mt-10 flex flex-wrap gap-4" data-reveal data-reveal-delay="200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white shadow-[0_18px_40px_-18px_rgba(252,151,0,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_-18px_rgba(252,151,0,0.75)]"
                >
                  Démarrer la transformation
                </Link>
                <a
                  href="#livrables"
                  className="inline-flex items-center gap-3 rounded-xl border border-primary/20 bg-white/70 px-8 py-4 text-base font-bold text-primary backdrop-blur-sm transition-colors hover:bg-primary/5"
                >
                  Voir nos livrables
                  <Icon name="arrow_forward" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-[clamp(4.5rem,10vw,7.5rem)]">
          <div className="max-w-container-max mx-auto grid items-center gap-10 px-[clamp(1rem,4vw,2rem)] md:grid-cols-2 md:px-margin-desktop">
            <div className="relative" data-reveal>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_80px_-34px_rgba(15,23,42,0.35)]">
                <img
                  src={approachImage}
                  alt="Approche stratégique We Digital"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-6 h-36 w-36 rounded-full bg-secondary/20 blur-3xl" />
              <div className="absolute -left-6 -top-8 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
            </div>

            <div>
              <div data-reveal>
                <span className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-primary">
                  Notre approche
                </span>
                <h2 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-slate-950">
                  L’approche <span className="text-primary">We Digital</span>
                </h2>
                <p className="mt-5 max-w-xl text-[clamp(0.98rem,2vw,1.08rem)] leading-relaxed text-slate-600">
                  Chaque rebranding commence par une immersion profonde dans votre marché, votre audience
                  et votre culture de marque. Nous fusionnons data, intuition créative et exigence
                  stratégique pour construire une trajectoire claire.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {approachSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="group flex gap-5 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-28px_rgba(15,23,42,0.32)]"
                    data-reveal
                    data-reveal-delay={String(100 + index * 100)}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-[clamp(4.5rem,10vw,7.5rem)]" id="livrables">
          <div className="max-w-container-max mx-auto px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="mb-14 text-center" data-reveal>
              <span className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-secondary">
                Livrables stratégiques
              </span>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.1rem)] font-extrabold tracking-[-0.03em] text-slate-950">
                Les fondations de votre nouvelle trajectoire
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[clamp(0.98rem,2vw,1.08rem)] text-slate-600">
                Des outils concrets pour clarifier votre image, stabiliser votre discours et piloter votre
                croissance avec confiance.
              </p>
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-12" data-reveal data-reveal-delay="100">
              <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-34px_rgba(15,23,42,0.22)] md:col-span-8 md:p-10">
                <div className="relative z-10">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                    {deliverables[0].eyebrow}
                  </span>
                  <h3 className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold text-slate-950">
                    {deliverables[0].title}
                  </h3>
                  <p className="mt-4 max-w-xl text-slate-600">{deliverables[0].description}</p>
                </div>
                <div className="relative z-10 mt-10 flex gap-3 overflow-hidden">
                  <div className="h-24 w-24 rounded-2xl bg-primary" />
                  <div className="mt-5 h-24 w-24 rounded-2xl bg-secondary" />
                  <div className="h-24 w-24 rounded-2xl bg-slate-200" />
                  <div className="mt-5 h-24 w-24 rounded-2xl bg-slate-900" />
                </div>
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-3xl" />
              </article>

              <article className="rounded-[2rem] bg-primary p-8 text-white shadow-[0_24px_70px_-34px_rgba(100,131,240,0.55)] md:col-span-4 md:p-10">
                <div className="flex h-full flex-col justify-start text-left">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                    <Icon name={deliverables[1].icon} className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-[clamp(1.4rem,2.5vw,1.9rem)] font-extrabold">
                    {deliverables[1].title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">{deliverables[1].description}</p>
                </div>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8 shadow-[0_24px_70px_-34px_rgba(15,23,42,0.18)] md:col-span-4 md:p-10">
                <h3 className="text-[clamp(1.3rem,2.2vw,1.7rem)] font-extrabold text-slate-950">
                  {deliverables[2].title}
                </h3>
                <div className="mt-8 space-y-4">
                  {deliverables[2].bars.map((barClass, index) => (
                    <div key={index} className="h-2 overflow-hidden rounded-full bg-slate-300/70">
                      <div className={`h-full rounded-full ${barClass}`} />
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm leading-relaxed text-slate-600">{deliverables[2].description}</p>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-34px_rgba(15,23,42,0.22)] md:col-span-8 md:p-10">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-xl">
                    <h3 className="text-[clamp(1.4rem,2.6vw,1.9rem)] font-extrabold text-slate-950">
                      {deliverables[3].title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {deliverables[3].description}
                    </p>
                  </div>
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-dashed border-secondary/25 text-secondary">
                    <Icon name={deliverables[3].icon} className="h-10 w-10" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="overflow-hidden py-[clamp(4.5rem,10vw,7.5rem)]">
          <div className="max-w-container-max mx-auto px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div
              className="relative overflow-hidden rounded-[2.25rem] bg-slate-950 px-8 py-12 text-center shadow-[0_28px_80px_-32px_rgba(15,23,42,0.65)] md:px-16 md:py-20"
              data-reveal
            >
              <div className="absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-primary/25 blur-[90px]" />
              <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-secondary/20 blur-[90px]" />
              <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.02] text-white">
                  Prêt à écrire le prochain chapitre de votre histoire ?
                </h2>
                <p className="mt-6 text-[clamp(1rem,2vw,1.1rem)] leading-relaxed text-white/70">
                  Discutons de vos ambitions, de votre marché et des actions prioritaires pour construire
                  une marque plus forte, plus lisible et plus performante.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white transition-colors hover:bg-secondary/90"
                  >
                    <Icon name="chat" className="h-5 w-5" />
                    Parlons-en aujourd’hui
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
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
