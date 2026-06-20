import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const heroImage =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20content%20creation%20studio%2C%20camera%20rig%2C%20creative%20team%20planning%20reels%2C%20softbox%20lights%2C%20luxury%20brand%20shoot%2C%20periwinkle%20and%20orange%20palette%2C%20realistic%2C%20cinematic&image_size=landscape_16_9'

const studioImage =
  'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=creative%20content%20production%20workspace%2C%20camera%2C%20laptop%2C%20storyboard%2C%20social%20media%20planning%2C%20premium%20agency%20studio%2C%20realistic&image_size=portrait_4_3'

const workflowSteps = [
  {
    icon: 'auto_awesome',
    title: 'Concept créatif',
    description:
      'Nous définissons l’idée forte, l’angle visuel et le message pour créer un contenu qui se démarque immédiatement.',
  },
  {
    icon: 'movie_filter',
    title: 'Production premium',
    description:
      'Shooting photo, tournage vidéo, reels, formats publicitaires et déclinaisons sociales produits avec exigence.',
  },
  {
    icon: 'groups_3',
    title: 'Animation de communauté',
    description:
      'Planification, publication, modération et engagement pour transformer votre audience en communauté active.',
  },
] as const

const deliverables = [
  {
    eyebrow: 'Content System',
    title: 'Direction éditoriale',
    description:
      'Lignes éditoriales, piliers de contenu, tonalité et calendrier pour garder une communication cohérente et régulière.',
  },
  {
    icon: 'movie_filter',
    title: 'Production social media',
    description:
      'Photos, vidéos, stories, reels et formats ads conçus pour performer sur Instagram, TikTok et Meta.',
  },
  {
    title: 'Planning & Performance',
    description:
      'Organisation mensuelle, suivi des publications, reporting et ajustements continus pour améliorer l’impact.',
    bars: ['w-[84%] bg-primary', 'w-[68%] bg-secondary', 'w-[90%] bg-slate-500'],
  },
  {
    title: 'Community Management',
    description:
      'Gestion des messages, réponses, modération et interactions pour renforcer la proximité avec votre audience.',
    icon: 'chat',
  },
] as const

export default function ContentCreationPage() {
  useScrollReveal()

  return (
    <div className="font-body bg-background min-h-screen overflow-hidden w-full pb-28 md:pb-32">
      <PageSeo {...pageSeo.contentCreation} />
      <Navbar />

      <main>
        <section className="relative h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Studio premium de création de contenu"
              className="h-full w-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          </div>

          <div className="relative z-10 w-full max-w-container-max mx-auto px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop pt-28 md:pt-32">
            <div className="max-w-4xl" data-reveal>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/75 px-4 py-2 text-[0.76rem] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
                Creative Production
              </span>
              <h1 className="mt-6 text-[clamp(2.8rem,8vw,5.8rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-on-surface">
                Création de Contenu
                <br />
                <span className="text-secondary">&amp; Community Management.</span>
              </h1>
              <p
                className="mt-6 max-w-2xl text-[clamp(1rem,2.2vw,1.18rem)] leading-relaxed text-on-surface-variant"
                data-reveal
                data-reveal-delay="100"
              >
                Nous imaginons, produisons et animons un contenu qui valorise votre marque, capte
                l’attention et nourrit une relation durable avec votre audience sur les réseaux sociaux.
              </p>
              <div className="mt-10 flex flex-wrap gap-4" data-reveal data-reveal-delay="200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white shadow-[0_18px_40px_-18px_rgba(252,151,0,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_-18px_rgba(252,151,0,0.75)]"
                >
                  Lancer votre contenu
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
                  src={studioImage}
                  alt="Organisation studio et community management"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-6 h-36 w-36 rounded-full bg-secondary/20 blur-3xl" />
              <div className="absolute -left-6 -top-8 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
            </div>

            <div>
              <div data-reveal>
                <span className="text-[0.78rem] font-bold uppercase tracking-[0.22em] text-primary">
                  Notre méthode
                </span>
                <h2 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] font-extrabold tracking-[-0.03em] text-slate-950">
                  Une machine à contenu <span className="text-primary">pensée pour performer</span>
                </h2>
                <p className="mt-5 max-w-xl text-[clamp(0.98rem,2vw,1.08rem)] leading-relaxed text-slate-600">
                  Nous combinons direction créative, production visuelle et gestion quotidienne pour
                  construire une présence sociale plus forte, plus régulière et plus engageante.
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {workflowSteps.map((step, index) => (
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
                Livrables créatifs
              </span>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.1rem)] font-extrabold tracking-[-0.03em] text-slate-950">
                Tout ce qu’il faut pour nourrir votre présence sociale
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[clamp(0.98rem,2vw,1.08rem)] text-slate-600">
                Des assets visuels, un planning clair et une animation quotidienne pour transformer
                votre contenu en moteur de croissance.
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
                <div className="relative z-10 mt-10 grid grid-cols-4 gap-3 overflow-hidden">
                  <div className="h-24 rounded-2xl bg-primary" />
                  <div className="mt-5 h-24 rounded-2xl bg-secondary" />
                  <div className="h-24 rounded-2xl bg-slate-200" />
                  <div className="mt-5 h-24 rounded-2xl bg-slate-900" />
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
                  Besoin d’un contenu qui attire et engage vraiment ?
                </h2>
                <p className="mt-6 text-[clamp(1rem,2vw,1.1rem)] leading-relaxed text-white/70">
                  Parlons de vos objectifs, de vos plateformes clés et du rythme éditorial le plus
                  pertinent pour faire grandir votre marque.
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
