import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDe9DzGSm4Ox22FoANXhyHd8Yglhhi399hFw3fnk_71KKHw2TljzM211H67klnIIUJpXLspZNl8b1DWZWNwoVgSuW1eSNV7xm9P8mMYc4ESheOyMfheE3F47DIa9uH5PHwOrHaMN359bA7-yem0LUL0hFz0L-9QUkbKhKPsvZM5tOvFs_XPb42ptm1uEpMAKFDiwk5PCnPWDN_5sMf2dvmesZyArMY2dFyHWMJiPpPSDOS3puQSXvcGi4ow8_jRPCLRJGWxR-8_K_Y'

const authorityImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDdRh4_-MK7Unpk36Jzi1f_jg0ZAnmvaWohWICtxU7OlvXuyviCB4ThBtLaNLzYLAh4uAyxO9C8s_gRvOYC0Vd4ieqwUTk0hpuzzNAHtodo87bOr0ER6-GDZpT0XAmpIj2uENHdf1UW0Jk2ngrVB33DFkr1N9NNrEUFSaDVkyqBAxKMLIwdtACWghJ2WckxetDRYWvaSHi19-Jj3EpL2BAX7vSsim0kZirT8IiHlbxqcrPMgq30qt02kEu9y9_J_FgC5XKXCzf8cDY'

const testimonialImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA0DI7-1wDAccLUjsLKa_5h-AhlK3s6A6gsrqByOzCZUdb2e41-DBlzQl_hnnbV8dQ7N6GhFAqgdLhpNADgIVM3b6wHjrjNVoQZGAYIR7r7EKJtFWDX415yYQWMoex95XZrRv1z4Q9byrq1FtpxhEq5k8bqqnrZR72xjUopEfmYbwe6q93xGb9sTg2OfuypbvysdBmJE0Sb1KS17XGtp8YL8fikRjOPAKH407altJwxl2wMJi36N_R83jJNhkMREOf1JwAbVQovuFU'

const growthSteps = [
  {
    number: '01',
    title: 'Suivi Data-Driven',
    description: 'Dashboards en temps réel pour piloter trafic, positions, leads et conversions.',
  },
  {
    number: '02',
    title: 'Accompagnement Agile',
    description: 'Ajustements mensuels face aux mises à jour algorithmiques et aux opportunités SEO.',
  },
  {
    number: '03',
    title: 'ROI Durable',
    description: 'Le SEO capitalise sur le temps et devient un actif digital qui produit dans la durée.',
  },
] as const

export default function SeoPage() {
  useScrollReveal()

  return (
    <div className="font-body bg-surface text-on-surface min-h-screen overflow-hidden w-full pb-28 md:pb-32">
      <PageSeo {...pageSeo.seo} />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-surface to-surface pt-20 pb-32">
          <div className="max-w-container-max mx-auto grid grid-cols-1 items-center gap-16 px-[clamp(1rem,4vw,2rem)] lg:grid-cols-2 md:px-margin-desktop">
            <div className="z-10" data-reveal>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary">
                <span className="h-2 w-2 rounded-full bg-secondary" />
                <span className="text-[0.8rem] font-bold uppercase tracking-[0.18em]">Expertise Performance</span>
              </div>
              <h1 className="mb-8 text-[clamp(2.8rem,7vw,4.8rem)] font-extrabold tracking-[-0.04em] text-on-surface">
                Référencement Naturel (SEO)
              </h1>
              <p className="mb-12 max-w-xl text-[clamp(1rem,2.1vw,1.25rem)] leading-relaxed text-on-surface-variant">
                Dominez les résultats de recherche et transformez votre visibilité organique en levier de
                croissance durable grâce à une méthodologie scientifique et une approche axée sur les données.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-xl bg-secondary px-8 py-4 text-base font-bold text-white shadow-lg shadow-secondary/20 transition-all hover:opacity-90"
                >
                  Audit Gratuit
                </Link>
                <a
                  href="#methode"
                  className="rounded-xl border-2 border-primary px-8 py-4 text-base font-bold text-primary transition-all hover:bg-primary/5"
                >
                  Découvrir l&apos;approche
                </a>
              </div>
            </div>

            <div className="relative" data-reveal data-reveal-delay="100">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative z-10 rounded-[1.5rem] border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-xl">
                <img className="w-full rounded-xl" src={heroImage} alt="Dashboard SEO premium" />
                <div className="absolute -bottom-6 -left-6 max-w-[200px] rounded-xl bg-secondary p-6 text-white shadow-xl">
                  <p className="mb-1 text-3xl font-extrabold">140%</p>
                  <p className="text-[0.78rem] font-bold uppercase tracking-[0.12em] opacity-80">
                    Croissance organique moyenne sur 12 mois
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32" id="methode">
          <div className="max-w-container-max mx-auto px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="mb-20 text-center" data-reveal>
              <h2 className="mb-4 text-[clamp(2rem,5vw,3rem)] font-bold text-on-surface">Une Méthodologie à 360°</h2>
              <p className="mx-auto max-w-2xl text-on-surface-variant">
                Le SEO n&apos;est pas un acte isolé mais une synergie de techniques, de sémantique et d&apos;autorité.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <article
                className="group rounded-[1.5rem] border border-outline-variant/20 bg-surface-container-lowest p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 md:col-span-2"
                data-reveal
              >
                <div className="flex flex-col gap-10 md:flex-row">
                  <div className="flex-1">
                    <div className="mb-6 text-secondary">
                      <Icon name="insights" className="h-10 w-10" />
                    </div>
                    <h3 className="mb-4 text-[clamp(1.4rem,3vw,2rem)] font-bold">Audit Technique & Santé Web</h3>
                    <p className="mb-6 text-on-surface-variant">
                      Nous analysons chaque ligne de code pour éliminer les freins à l’indexation. De la vitesse
                      de chargement aux Core Web Vitals, nous préparons votre site à l’excellence.
                    </p>
                    <ul className="space-y-3 text-[0.92rem] font-semibold text-on-surface-variant">
                      <li className="flex items-center gap-3">
                        <Icon name="check_circle" className="h-4 w-4 text-secondary" />
                        Analyse de l&apos;architecture & Crawler
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="check_circle" className="h-4 w-4 text-secondary" />
                        Optimisation Mobile-First
                      </li>
                    </ul>
                  </div>
                  <div className="w-full rounded-xl bg-surface-container p-4 md:w-1/3">
                    <div className="flex h-full items-end justify-center py-4">
                      <div className="flex gap-2">
                        <div className="h-20 w-4 rounded-t bg-primary" />
                        <div className="h-32 w-4 rounded-t bg-primary" />
                        <div className="h-44 w-4 rounded-t bg-secondary" />
                        <div className="h-28 w-4 rounded-t bg-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-[1.5rem] border border-outline-variant/20 bg-surface-container-lowest p-10" data-reveal data-reveal-delay="100">
                <div className="mb-6 text-secondary">
                  <Icon name="search" className="h-10 w-10" />
                </div>
                <h3 className="mb-4 text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold">Intelligence Sémantique</h3>
                <p className="text-on-surface-variant">
                  Nous identifions les intentions de recherche à fort potentiel de conversion pour aligner votre
                  contenu sur les besoins réels de vos clients.
                </p>
              </article>

              <article className="rounded-[1.5rem] border border-outline-variant/20 bg-surface-container-lowest p-10" data-reveal data-reveal-delay="200">
                <div className="mb-6 text-secondary">
                  <Icon name="edit_document" className="h-10 w-10" />
                </div>
                <h3 className="mb-4 text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold">Stratégie Éditoriale</h3>
                <p className="text-on-surface-variant">
                  Création de contenus riches qui captivent votre audience et répondent précisément aux algorithmes de Google.
                </p>
              </article>

              <article
                className="relative overflow-hidden rounded-[1.5rem] border border-outline-variant/20 bg-surface-container-lowest p-10 md:col-span-2"
                data-reveal
                data-reveal-delay="300"
              >
                <div className="flex flex-col items-center gap-10 md:flex-row">
                  <div className="z-10 flex-1">
                    <div className="mb-6 text-secondary">
                      <Icon name="share" className="h-10 w-10" />
                    </div>
                    <h3 className="mb-4 text-[clamp(1.4rem,3vw,2rem)] font-bold">Netlinking & Autorité</h3>
                    <p className="mb-6 text-on-surface-variant">
                      Développez la notoriété de votre domaine par une acquisition de liens stratégique et naturelle,
                      augmentant la confiance des moteurs de recherche envers votre marque.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-secondary font-semibold transition-all hover:gap-4">
                      En savoir plus
                      <Icon name="arrow_forward" className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img className="rounded-xl shadow-lg" src={authorityImage} alt="Autorité SEO et netlinking" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-surface py-32">
          <div className="max-w-container-max mx-auto grid grid-cols-1 items-center gap-24 px-[clamp(1rem,4vw,2rem)] lg:grid-cols-2 md:px-margin-desktop">
            <div className="order-2 lg:order-1">
              <div className="space-y-12">
                {growthSteps.map((step, index) => (
                  <div key={step.number} className="flex gap-6" data-reveal data-reveal-delay={String(index * 100)}>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 font-bold text-primary">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                      <p className="text-on-surface-variant">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2" data-reveal>
              <h2 className="mb-8 text-[clamp(2rem,5vw,3rem)] font-bold">Investissez dans un actif digital permanent</h2>
              <p className="mb-10 text-[clamp(1rem,2.1vw,1.25rem)] text-on-surface-variant">
                Notre vision du SEO ne se limite pas à la première page. Nous construisons une infrastructure
                digitale robuste qui attire, engage et convertit.
              </p>
              <div className="rounded-[1.25rem] border border-outline-variant/30 bg-surface-container p-8">
                <p className="mb-4 italic text-on-surface-variant">
                  "Depuis notre collaboration avec We Digital, notre trafic qualifié a quadruplé, devenant notre
                  premier canal de vente."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-outline-variant">
                    <img className="h-full w-full object-cover" src={testimonialImage} alt="Marc Lambert" />
                  </div>
                  <div>
                    <p className="text-[0.92rem] font-semibold">Marc Lambert</p>
                    <p className="text-xs text-on-surface-variant">Directeur Marketing, InnovCorp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-32">
          <div className="max-w-container-max mx-auto relative overflow-hidden rounded-[2rem] bg-primary px-12 py-16 text-center text-white md:px-24">
            <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/10 blur-[80px]" />
            <div className="relative z-10" data-reveal>
              <h2 className="mb-8 text-[clamp(2rem,5vw,3rem)] font-bold">Prêt à dominer votre marché ?</h2>
              <p className="mx-auto mb-12 max-w-2xl text-[clamp(1rem,2.1vw,1.2rem)] opacity-90">
                Discutons de vos objectifs et réalisons un premier audit de votre visibilité actuelle.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="rounded-xl bg-secondary px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:brightness-95">
                  Prendre RDV
                </Link>
                <Link to="/projets" className="rounded-xl bg-white px-10 py-5 text-lg font-bold text-primary transition-all hover:bg-surface-container-lowest">
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
