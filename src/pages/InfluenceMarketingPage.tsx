﻿﻿﻿import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import { pageSeo } from '../lib/pageSeo'

// Types
interface ProcessStep {
  number: string
  title: string
  description: string
  icon: string
}

// Hook useScrollReveal
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.bento-item').forEach((el) => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

const creatorImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBqEHKVc8cBzPpd2rqSg9cJgLRQAUZ0sIeqnAVukfSJlNhUPHecQJOl2fnajUsx_sc7OgGgPKj760k_PFCrdZMZk_pLiIdzbupl3pfTb7EChW01BtiHFqMXOXG6S9xFTEdl71N18bfZRgL0LrZYiq_wfte_nTgC5FzLFOLEWTW4mmU3WJsi3jaDx81fi4qtqUAuuDUkXYwuTZ9mDZQccqExjwW8IyfFadziYvRDCgmpWTI2bEARfBUYLsrJzgsHYc6wf3wb105sdK4',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCQYoP7JZt_0gcaL0lMzou3yEmGB0mH_EcJB_znVzLg1pw4TQV9-OJoPQtLu28Vd3kpAVX3WfFcG32uBXTH68ZpiaxBNCMIV3cAHQeMpsjtNokSsF77KkUoxjlMvSZyeW1yo3rwtoZxcULG5MFQLt9KVaaVCeB3dLix6Vozi28IlECEjSGVjhcWU65K0KJNn4lyA8zABvLyIxKbXpf8othzcVBaFHLLmXD0t3ArUIbjPZAkepRTLorofOvOsYGZNEXfzQpyRQZj0Wc',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApmsSU9nNlYVy1A3zpWH42dIf25FYPRm7KnKmBF8hjFZRecuthrs0VrlZzrQkUG_pe7hB-DczV0UZcYTOjMMLm8J6JDpgltO-FlPs9iaJRBQll2CC8h5TZOGboKuh9gCuilJKZDBZiPZmPaUfJiG3HxbXbXmj1F2mTwPgsoVTQReej6oaYux9yYtw652HLktXEgP5fHJ94xymWVMqEQZqKYhJUPigkDTcaYCWNRzKZjOuIDedbPoFQtXfqLD4JjmizHTINuYhB-Bw'
] as const

const heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiUPLwSoH2ABfBCJ2dF899_akQuF6xSSaPoMaIX8H7E7glOTP7yfzMLnqdayWBWscdkPGOWGUHZyuWPgZNRVDNBFio3RpYXBNeU3SjhGT2a36nDsZnmQzyjvXjphIj3ysIuCc-9CZhGhF_W4cQYj8DfOI3SFSS39eCIzpjVoAykMUoi1R8J2J5DHKp_i6X1hgkQp16Mix8jQivIilshT9fRzH0mEQgWLC_cREMP-bnxAxt5L17ErLeMF7ju74kPs29Hun61ldxibs'

const cultureImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgeN2ZDNCQd1THTPx_ppluph3jyvNHinygytfYhFyLNwuUhjAnShsJe4m0fRkSI1LNmgtChwoG7is9exjq2_68zJK1W1wzLU5D40sOf0MBdU7-21JpZ01osv6YIZXfVY0X_wP6aNgKEutyLa0Dah3XNatoUsHZm-sfXSUI47PehuL-93TcgoDz7mK8U3ijDUS4A6LKCPBJpCY4sAj_KX-ucCab0cp5JcDre3M-CI6pf6G5OYyWoDZEylY6pBgiKvfeFD9KKAmYrL8'

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Curation de Talents',
    description: "Identification de profils authentiques dont les valeurs et l'audience correspondent précisément à votre cible marketing.",
    icon: 'person_search',
  },
  {
    number: '02',
    title: 'Direction Artistique',
    description: "Co-création de concepts uniques qui respectent la 'patte' du créateur tout en sublimant les messages clés de votre marque.",
    icon: 'palette',
  },
  {
    number: '03',
    title: 'Optimisation ROI',
    description: "Monitoring en temps réel et ajustement des campagnes pour maximiser la visibilité et l'impact sur vos ventes.",
    icon: 'monitoring',
  },
]

export default function InfluenceMarketingPage() {
  useScrollReveal()

  return (
    <div className="bg-background text-on-background font-body selection:bg-secondary selection:text-brand-charcoal">
      <PageSeo {...pageSeo.influenceMarketing} />
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 md:px-20 py-32 md:py-48 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Cinematic Studio Background"
              className="w-full h-full object-cover object-center opacity-40"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md"></div>
          </div>

          <div className="relative z-10 max-w- mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-brand-blue/15 bg-white text-brand-blue/80 shadow-sm px-5 py-2">
                <Icon name="campaign" className="text-" />
                <span className="text-xs font-bold tracking-widest uppercase">Influence & Storytelling</span>
              </div>
              <h1 className="mb-8 font-rigot text-6xl font-extrabold leading-[1.05] text-brand-charcoal md:text-8xl">
                L’influence qui <span className="text-brand-orange italic">Rayonne</span>.
              </h1>
              <p className="mb-12 max-w-xl font-light leading-relaxed text-[#70798B] text-xl md:text-2xl">
                Nous connectons votre marque aux créateurs les plus impactants. Plus que de simples placements, nous bâtissons des récits authentiques qui engagent, inspirent et convertissent.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/contact"
                  className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/20 transition-all text-lg"
                >
                  Lancer une campagne <Icon name="trending_up" />
                </Link>
                <a
                  href="#creators"
                  className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-xl font-bold hover:bg-brand-blue hover:text-white transition-all text-lg"
                >
                  Découvrir nos créateurs
                </a>
              </div>
            </div>
            <div className="hidden lg:block relative rounded-3xl overflow-hidden shadow-2xl glass-card p-4">
              <img alt="Agency Studio" className="w-full h-full object-cover rounded-2xl" src={heroImage}/>
            </div>
          </div>
        </section>

        {/* Partnerships / Stats Bento */}
        <section className="px-8 md:px-20 py-32 bg-white" id="creators">
          <div className="max-w- mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Large Card: Storytelling */}
              <div className="md:col-span-2 md:row-span-2 glass-card bg-surface-container p-12 rounded-3xl flex flex-col justify-between overflow-hidden relative bento-item border border-brand-blue/10">
                <div className="relative z-10">
                  <h3 className="mb-6 font-rigot text-4xl font-bold text-brand-charcoal">Le Storytelling au cœur</h3>
                  <p className="text-lg leading-relaxed text-[#70798B]">Nous ne faisons pas de la publicité, nous racontons des histoires. Chaque collaboration est pensée pour s'intégrer naturellement dans le quotidien de l'audience.</p>
                </div>
                <div className="mt-16 flex -space-x-4 items-center">
                  {creatorImages.map((img, idx) => (
                    <img key={idx} className="w-16 h-16 rounded-full border-4 border-white object-cover" src={img} alt="Creator" />
                  ))}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary text-base font-bold text-white shadow-lg shadow-primary/25">
                    +500
                  </div>
                </div>
              </div>

              {/* Stat 1 */}
              <div className="bento-item flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-brand-blue/10 bg-surface-container p-10 text-center">
                <span className="text-brand-orange font-rigot text-6xl font-bold mb-4">94%</span>
                <span className="text-sm font-bold uppercase tracking-widest text-[#8C94A6]">Taux d'Engagement</span>
              </div>

              {/* Image Block */}
              <div className="bento-item relative min-h-[240px] overflow-hidden rounded-3xl md:col-span-1">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cultureImage})` }}></div>
              </div>

              {/* Campaign Management */}
              <div className="bento-item flex min-h-[260px] flex-col justify-center rounded-3xl bg-primary p-10 text-white shadow-xl shadow-primary/20 ring-1 ring-primary/30 md:col-span-2">
                <div className="mb-6 flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Icon name="analytics" className="text-[30px] text-white" />
                  </div>
                  <h3 className="font-rigot text-4xl font-bold tracking-tight">Gestion 360°</h3>
                </div>
                <p className="max-w-3xl text-xl leading-relaxed text-white/90">
                  Du sourcing des profils à l&apos;analyse des KPIs, nous pilotons l&apos;intégralité de vos campagnes
                  avec une transparence totale sur les performances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-8 md:px-20 py-32 bg-surface-container max-w-full">
          <div className="max-w- mx-auto">
            <div className="text-center mb-24">
              <h2 className="font-rigot text-4xl md:text-6xl font-bold text-brand-charcoal mb-6">Notre Processus Stratégique</h2>
              <p className="mx-auto max-w-3xl font-light text-[#8B93A6] text-xl">Une approche basée sur les données pour garantir l'alignement parfait entre votre marque et les créateurs de contenu.</p>
            </div>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-black/5 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  <div className="pointer-events-none absolute -right-4 -top-12 select-none font-rigot text-[110px] font-extrabold leading-none text-brand-blue/[0.12] md:text-[140px]">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <Icon name={step.icon} />
                    </div>
                    <h4 className="mb-4 font-rigot text-2xl font-bold text-brand-charcoal">{step.title}</h4>
                    <p className="leading-relaxed text-[#7A8397]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 md:px-20 py-32">
          <div className="max-w- mx-auto bg-surface-container rounded- p-16 md:p-24 text-center relative overflow-hidden border-brand-blue/10 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #6483F0 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div className="relative z-10">
              <h2 className="font-rigot text-5xl md:text-7xl font-bold text-brand-charcoal mb-8 leading-tight">Prêt à devenir <br/>une icône digitale?</h2>
              <p className="mx-auto mb-12 max-w-2xl font-light text-[#8B93A6] text-xl">Discutons de votre prochaine campagne d'influence et définissons ensemble votre stratégie de conquête.</p>
              <Link
                to="/contact"
                className="bg-secondary text-on-secondary px-14 py-6 rounded-2xl font-bold text-xl hover:scale-105 hover:bg-secondary/90 transition-transform shadow-xl shadow-secondary/30 inline-block"
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
