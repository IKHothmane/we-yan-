import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const creatorImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBqEHKVc8cBzPpd2rqSg9cJgLRQAUZ0sIeqnAVukfSJlNhUPHecQJOl2fnajUsx_sc7OgGgPKj760k_PFCrdZMZk_pLiIdzbupl3pfTb7EChW01BtiHFqMXOXG6S9xFTEdl71N18bfZRgL0LrZYiq_wfte_nTgC5FzLFOLEWTW4mmU3WJsi3jaDx81fi4qtqUAuuDUkXYwuTZ9mDZQccqExjwW8IyfFadziYvRDCgmpWTI2bEARfBUYLsrJzgsHYc6wf3wb105sdK4',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCQYoP7JZt_0gcaL0lMzou3yEmGB0mH_EcJB_znVzLg1pw4TQV9-OJoPQtLu28Vd3kpAVX3WfFcG32uBXTH68ZpiaxBNCMIV3cAHQeMpsjtNokSsF77KkUoxjlMvSZyeW1yo3rwtoZxcULG5MFQLt9KVaaVCeB3dLix6Vozi28IlECEjSGVjhcWU65K0KJNn4lyA8zABvLyIxKbXpf8othzcVBaFHLLmXD0t3ArUIbjPZAkepRTLorofOvOsYGZNEXfzQpyRQZj0Wc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApmsSU9nNlYVy1A3zpWH42dIf25FYPRm7KnKmBF8hjFZRecuthrs0VrlZzrQkUG_pe7hB-DczV0UZcYTOjMMLm8J6JDpgltO-FlPs9iaJRBQll2CC8h5TZOGboKuh9gCuilJKZDBZiPZmPaUfJiG3HxbXbXmj1F2mTwPgsoVTQReej6oaYux9yYtw652HLktXEgP5fHJ94xymWVMqEQZqKYhJUPigkDTcaYCWNRzKZjOuIDedbPoFQtXfqLD4JjmizHTINuYhB-Bw',
] as const

const cultureImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDgeN2ZDNCQd1THTPx_ppluph3jyvNHinygytfYhFyLNwuUhjAnShsJe4m0fRkSI1LNmgtChwoG7is9exjq2_68zJK1W1wzLU5D40sOf0MBdU7-21JpZ01osv6YIZXfVY0X_wP6aNgKEutyLa0Dah3XNatoUsHZm-sfXSUI47PehuL-93TcgoDz7mK8U3ijDUS4A6LKCPBJpCY4sAj_KX-ucCab0cp5JcDre3M-CI6pf6G5OYyWoDZEylY6pBgiKvfeFD9KKAmYrL8'

const processSteps = [
  {
    number: '01',
    title: 'Curation de Talents',
    description:
      'Nous identifions des profils authentiques dont l’univers et l’audience correspondent précisément à votre cible.',
  },
  {
    number: '02',
    title: 'Direction Artistique',
    description:
      'Nous concevons des concepts qui respectent la patte du créateur tout en sublimant votre message de marque.',
  },
  {
    number: '03',
    title: 'Optimisation ROI',
    description:
      'Nous pilotons les KPIs en temps réel pour maximiser la visibilité, l’engagement et l’impact business.',
  },
] as const

export default function InfluenceMarketingPage() {
  useScrollReveal()

  return (
    <div className="font-body bg-background min-h-screen overflow-hidden w-full pb-28 md:pb-32">
      <PageSeo {...pageSeo.influenceMarketing} />
      <Navbar />

      <main className="pt-24">
        <section className="relative max-w-container-max mx-auto overflow-hidden px-[clamp(1rem,4vw,2rem)] py-24 md:px-margin-desktop md:py-32">
          <div className="max-w-3xl" data-reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-primary">
              <Icon name="campaign" className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Influence & Storytelling</span>
            </div>
            <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] text-on-surface md:text-7xl">
              L’influence qui <span className="text-secondary italic">Rayonne</span>.
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Nous connectons votre marque aux créateurs les plus impactants du Maroc. Plus que de
              simples placements, nous bâtissons des récits authentiques qui engagent, inspirent et
              convertissent.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-4 font-bold text-white transition-all hover:shadow-lg hover:shadow-secondary/20"
              >
                Lancer une campagne
                <Icon name="trending_up" className="h-5 w-5" />
              </Link>
              <a
                href="#creators"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-8 py-4 font-bold text-primary transition-all hover:bg-primary/5"
              >
                Découvrir nos créateurs
              </a>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-[clamp(1rem,4vw,2rem)] py-24 md:px-margin-desktop" id="creators">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <article
                className="glass-card bento-item relative overflow-hidden rounded-[2rem] p-10 md:col-span-2 md:row-span-2"
                data-reveal
              >
                <div className="relative z-10">
                  <h2 className="mb-4 text-3xl font-bold text-primary">Le Storytelling au cœur</h2>
                  <p className="text-on-surface-variant">
                    Nous ne faisons pas de la publicité, nous racontons des histoires. Chaque collaboration
                    est pensée pour s’intégrer naturellement dans le quotidien de l’audience.
                  </p>
                </div>
                <div className="mt-12 flex -space-x-4">
                  {creatorImages.map((image) => (
                    <img
                      key={image}
                      className="h-16 w-16 rounded-full border-4 border-white object-cover"
                      src={image}
                      alt="Créateur de contenu premium"
                    />
                  ))}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-primary-container font-bold text-on-primary-container">
                    +500
                  </div>
                </div>
              </article>

              <article
                className="bento-item flex flex-col items-center justify-center rounded-[2rem] border border-outline-variant/30 bg-white p-8 text-center"
                data-reveal
                data-reveal-delay="100"
              >
                <span className="mb-2 text-5xl font-bold text-secondary">94%</span>
                <span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                  Taux d&apos;Engagement
                </span>
              </article>

              <article
                className="bento-item relative min-h-[200px] overflow-hidden rounded-[2rem]"
                data-reveal
                data-reveal-delay="200"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cultureImage})` }}
                />
              </article>

              <article
                className="bento-item rounded-[2rem] bg-primary p-8 text-on-primary md:col-span-2"
                data-reveal
                data-reveal-delay="300"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                    <Icon name="insights" className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Gestion 360°</h3>
                </div>
                <p className="leading-relaxed opacity-90">
                  Du sourcing des profils à l&apos;analyse des KPIs, nous pilotons l’intégralité de vos campagnes
                  avec une transparence totale sur les performances.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="max-w-container-max mx-auto px-[clamp(1rem,4vw,2rem)] py-32 md:px-margin-desktop">
          <div className="mb-20 text-center" data-reveal>
            <h2 className="mb-6 text-4xl font-bold text-on-surface md:text-5xl">Notre Processus Stratégique</h2>
            <p className="mx-auto max-w-2xl text-on-surface-variant">
              Une approche basée sur les données pour garantir l’alignement parfait entre votre marque
              et les créateurs de contenu.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article key={step.number} className="relative group" data-reveal data-reveal-delay={String(index * 100)}>
                <div className="pointer-events-none absolute -left-4 -top-16 select-none text-[120px] font-extrabold leading-none text-primary/10 transition-colors group-hover:text-primary/20">
                  {step.number}
                </div>
                <div className="relative z-10 pt-8">
                  <h3 className="mb-4 text-xl font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-on-surface-variant">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24 px-[clamp(1rem,4vw,2rem)] py-24 md:px-margin-desktop">
          <div className="max-w-container-max mx-auto relative overflow-hidden rounded-[2.5rem] bg-on-surface p-12 text-center md:p-20">
            <div className="relative z-10" data-reveal>
              <h2 className="mb-8 text-4xl font-bold text-surface md:text-6xl">
                Prêt à devenir
                <br />
                une icône digitale ?
              </h2>
              <p className="mx-auto mb-12 max-w-xl text-lg text-surface/70">
                Discutons de votre prochaine campagne d’influence et définissons ensemble votre stratégie
                de conquête.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-secondary px-12 py-5 text-lg font-bold text-white transition-transform hover:scale-105"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter revealDelay="100" />
    </div>
  )
}
