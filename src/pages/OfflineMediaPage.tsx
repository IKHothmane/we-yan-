﻿﻿﻿﻿﻿import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const heroImage = '/images/offline/hero-custom.jpg'

const oohImage = '/images/offline/ooh.jpg'

const cinemaImage = '/images/offline/cinema.jpg'

const bridgeFeatures = [
  {
    icon: 'qr_code_2',
    title: 'Ciblages QR Dynamiques',
    description:
      "Mesurez l'engagement physique et redirigez l'audience vers des expériences immersives.",
    accent: 'bg-secondary text-white',
    titleClassName: 'text-white',
  },
  {
    icon: 'location_on',
    title: 'Géo-Fencing Retargeting',
    description: 'Reciblez sur mobile les utilisateurs ayant croisé vos panneaux publicitaires.',
    accent: 'bg-white text-primary',
    titleClassName: 'text-white',
  },
  {
    icon: 'analytics',
    title: 'Data-Driven Media Buying',
    description: 'Optimisez vos placements offline grâce aux insights de flux de mobilité urbaine.',
    accent: 'bg-white/15 text-white',
    titleClassName: 'text-white',
  },
] as const

const approachSteps = [
  {
    number: '01',
    title: 'Stratégie & Mapping',
    description:
      'Identification des points de contact clés basés sur les habitudes de vie de votre cible. Nous cartographions les zones à forte affluence.',
    dotClassName: 'bg-primary',
  },
  {
    number: '02',
    title: 'Négociation & Achat',
    description:
      "Accès privilégié aux meilleures régies publicitaires nationales. Optimisation des coûts et garantie d'emplacements premium.",
    dotClassName: 'bg-secondary',
  },
  {
    number: '03',
    title: 'Production Haute-Fidélité',
    description:
      "Création visuelle adaptée aux grands formats. Gestion de l'impression et de la pose pour un rendu impeccable.",
    dotClassName: 'bg-primary',
  },
] as const

export default function OfflineMediaPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-hidden bg-surface font-body text-on-surface">
      <PageSeo {...pageSeo.offlineMedia} />
      <Navbar serviceTitle="Média Publicité Offline" />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-surface px-[clamp(1rem,4vw,2rem)] pb-24 pt-24 md:px-margin-desktop md:pb-32 md:pt-32">
          <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/10 blur-[100px]" />
          <div className="w-full grid items-center gap-16 lg:grid-cols-2">
            <div className="relative z-10" data-reveal>
              <h1 className="mb-8 text-[clamp(3rem,8vw,5.4rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.06em] text-on-surface">
                Impact <span className="text-primary">Massif</span>
                <br />
                Réalité <span className="text-secondary">Tangible.</span>
              </h1>
              <p className="mb-10 max-w-xl text-[clamp(1rem,2.2vw,1.22rem)] leading-relaxed text-on-surface-variant">
                Nous fusionnons la puissance sensorielle de la publicité offline avec l&apos;intelligence de la
                donnée digitale pour créer des campagnes omnicanales mémorables.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-secondary px-8 py-4 text-base font-bold text-white shadow-lg shadow-secondary/20 transition-all hover:translate-y-[-2px] hover:shadow-xl"
                >
                  Découvrir nos solutions
                  <Icon name="arrow_forward" className="h-5 w-5" />
                </Link>
                <a
                  href="#ecosysteme-offline"
                  className="inline-flex items-center rounded-2xl border border-primary/20 px-8 py-4 text-base font-bold text-primary transition-colors hover:bg-primary/5"
                >
                  Voir l&apos;écosystème
                </a>
              </div>
            </div>

            <div className="relative" data-reveal data-reveal-delay="100">
              <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-2xl md:h-[600px] md:rotate-3 md:scale-105">
                <img className="h-full w-full object-cover" src={heroImage} alt="Grand panneau publicitaire urbain" />
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full px-[clamp(1rem,4vw,2rem)] py-section-padding md:px-margin-desktop"
          id="ecosysteme-offline"
        >
          <div className="mb-16 text-center" data-reveal>
            <h2 className="mb-4 text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase tracking-[-0.05em]">
              L&apos;Écosystème Offline
            </h2>
            <p className="mx-auto max-w-2xl text-[clamp(1rem,2vw,1.12rem)] text-on-surface-variant">
              Dominance visuelle, répétition stratégique et intégration digitale via QR, phygital et retargeting géolocalisé.
            </p>
          </div>

          <div className="grid h-auto grid-cols-1 gap-6 md:grid-cols-12 md:h-[800px]">
            <article
              className="group relative flex flex-col justify-end overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/70 p-8 backdrop-blur-md md:col-span-8"
              data-reveal
            >
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={oohImage}
                  alt="Affichage urbain OOH"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              <span className="mb-4 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                Le plus impactant
              </span>
              <h3 className="mb-2 text-[clamp(1.5rem,3vw,2rem)] font-bold uppercase text-white">
                Affichage Urbain (OOH)
              </h3>
              <p className="max-w-md text-white/80">
                Panneaux 4x3, unipoles, mobiliers urbains et écrans LED géants pour une présence incontournable.
              </p>
            </article>

            <article
              className="flex flex-col items-center justify-center rounded-[1.5rem] border border-primary/10 bg-primary/10 p-8 text-center md:col-span-4"
              data-reveal
              data-reveal-delay="100"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <Icon name="radio" className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-[clamp(1.4rem,2.4vw,1.8rem)] font-bold uppercase">Radio & Podcast</h3>
              <p className="text-on-surface-variant">
                L&apos;émotion par la voix. Spots publicitaires et sponsoring sur les ondes nationales les plus écoutées.
              </p>
            </article>

            <article
              className="flex flex-col rounded-[1.5rem] border border-outline-variant/30 bg-surface-container-high p-8 md:col-span-4"
              data-reveal
              data-reveal-delay="200"
            >
              <Icon name="newspaper" className="mb-4 h-10 w-10 text-secondary" />
              <h3 className="mb-4 text-[clamp(1.4rem,2.4vw,1.8rem)] font-bold uppercase">Presse & Print</h3>
              <p className="mb-6 text-on-surface-variant">
                L&apos;autorité de l&apos;imprimé. Campagnes dans les magazines premium et quotidiens influents.
              </p>
              <div className="mt-auto flex gap-2 border-t border-outline-variant/20 pt-4">
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary">
                  Qualité Premium
                </span>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-primary">
                  Ciblage CSP+
                </span>
              </div>
            </article>

            <article
              className="relative overflow-hidden rounded-[1.5rem] p-8 md:col-span-8"
              data-reveal
              data-reveal-delay="300"
            >
              <div className="absolute inset-0 -z-10">
                <img className="h-full w-full object-cover" src={cinemaImage} alt="Publicité TV et cinéma" />
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
              </div>
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold uppercase text-white">TV & Cinéma</h3>
                  <Icon name="movie_filter" className="h-8 w-8 text-white" />
                </div>
                <p className="max-w-md text-[clamp(1rem,2vw,1.2rem)] font-medium leading-tight text-white">
                  La narration au service de votre marque sur les plus grands écrans du pays.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary py-section-padding text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]" />
          <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(100,131,240,0.55),transparent_60%)]" />
          </div>
          <div className="w-full grid items-center gap-16 px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop lg:grid-cols-2">
            <div data-reveal>
              <h2 className="mb-8 text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-tight tracking-[-0.05em]">
                Le Pont vers le <span className="text-secondary">Digital.</span>
              </h2>
              <ul className="space-y-8">
                {bridgeFeatures.map((feature, index) => (
                  <li
                    key={feature.title}
                    className="flex items-center gap-6 rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
                    data-reveal
                    data-reveal-delay={String(index * 100)}
                  >
                    <div
                      className={`flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl shadow-lg ${feature.accent}`}
                    >
                      <Icon name={feature.icon} className="text-[2.2rem] leading-none" />
                    </div>
                    <div>
                      <h3 className={`mb-2 text-lg font-bold ${feature.titleClassName}`}>{feature.title}</h3>
                      <p className="text-white/85">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex justify-center" data-reveal data-reveal-delay="150">
              <div className="relative h-[min(28rem,80vw)] w-[min(28rem,80vw)] rounded-full border border-white/10 bg-white/5">
                <div className="absolute inset-6 rounded-full border-2 border-dashed border-secondary/50 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-20 rounded-full bg-secondary/20 blur-2xl" />
                <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm md:h-44 md:w-44">
                  <Icon name="cell_tower" className="text-[5rem] leading-none text-secondary md:text-[7rem]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-[clamp(1rem,4vw,2rem)] py-section-padding md:px-margin-desktop">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="md:w-1/3" data-reveal>
              <h2 className="md:sticky md:top-32 text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.05em]">
                Notre
                <br />
                Approche.
              </h2>
            </div>

            <div className="space-y-20 md:w-2/3">
              {approachSteps.map((step, index) => (
                <article
                  key={step.number}
                  className="relative border-l-2 border-primary/20 pl-12"
                  data-reveal
                  data-reveal-delay={String(index * 100)}
                >
                  <span className={`absolute -left-[13px] top-0 h-6 w-6 rounded-full border-4 border-surface ${step.dotClassName}`} />
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">{step.number}</p>
                  <h3 className="mb-4 text-[clamp(1.4rem,2.6vw,2rem)] font-bold">{step.title}</h3>
                  <p className="text-[clamp(1rem,2vw,1.12rem)] leading-relaxed text-on-surface-variant">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] pb-section-padding md:px-margin-desktop">
          <div className="w-full overflow-hidden rounded-[2rem] bg-primary/12 px-8 py-14 text-center md:px-20 md:py-24">
            <div className="relative z-10" data-reveal>
              <h2 className="mb-8 text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase tracking-[-0.05em] text-on-surface">
                Prêt à Dominer l&apos;Espace Public ?
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-[clamp(1rem,2vw,1.15rem)] text-on-surface-variant">
                Donnez à votre marque la stature qu&apos;elle mérite avec une campagne média offline d&apos;envergure.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="rounded-2xl bg-secondary px-10 py-5 text-lg font-bold text-white transition-colors hover:brightness-95"
                >
                  Lancer mon projet
                </Link>
                <Link
                  to="/projets"
                  className="rounded-2xl border border-primary/15 bg-white/70 px-10 py-5 text-lg font-bold text-primary backdrop-blur-md transition-colors hover:bg-white"
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
