import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const solutionCardsBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA26cTrzHWhr1lAl33fd3Ki70zwSUi4OF6NjvcmIZ76Ga7-B-FjhQoLQtGZcbTdkiBFBnDeDM5_JRbgc_X94ePyxv64rKgjS7XfUkwJuIMzIENhqM1PpaK7RoethVHVm8di6c_IbAx7F-BB6NczMfoLzkMUeRiJ_K_cjdVe0s3vP6gWa8PXNUBIy5mhVNAtHC7--WgbqpaXlN1mq7vEhIVL9FZQN8rWrTrYlU634k6EKU8XO-Rm8y-Hu66NwWKW2iAryuhp5f9Z7lM'

export default function ServicesPage() {
  useScrollReveal()

  return (
    <div className="font-body-md bg-background min-h-screen overflow-hidden w-full pb-28 md:pb-32">
      <PageSeo {...pageSeo.services} />
      <Navbar />

      <main>
        <section
          className="pt-[clamp(7rem,12vw,8rem)] pb-[clamp(3.5rem,8vw,5rem)] px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop max-w-container-max mx-auto text-center"
          data-reveal
        >
          <h1 className="font-display-lg text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.95] text-on-surface mb-6">
            Nos Expertises <span className="text-primary italic">Digitales</span>
          </h1>
          <p
            className="font-body-lg text-[clamp(1rem,2.5vw,1.25rem)] text-on-surface-variant max-w-2xl mx-auto"
            data-reveal
            data-reveal-delay="100"
          >
            Des solutions sur mesure pour propulser votre marque au niveau supérieur grâce à une
            approche centrée sur l'innovation et la performance.
          </p>
        </section>

        <section className="py-section-padding px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop max-w-container-max mx-auto">
          <div className="overflow-x-auto pb-4">
            <div className="grid min-w-[980px] grid-cols-12 gap-[clamp(1rem,2vw,2rem)]">
              <div
                className="col-span-7 relative overflow-hidden rounded-xl border border-white/15 p-[clamp(1.5rem,3vw,2.5rem)] text-white shadow-[0_10px_40px_-10px_rgba(15,23,42,0.45)] group transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.84), rgba(15, 23, 42, 0.56)), url(${solutionCardsBackground})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                data-reveal
              >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Icon name="architecture" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-4">
                    Branding & Visual Identity
                  </h3>
                  <p className="font-body-md text-body-md text-white/80 mb-6 max-w-md">
                    Nous créons des identités visuelles fortes qui racontent votre histoire et
                    captivent votre audience dès le premier regard.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 font-label-md text-label-md text-white">
                      <Icon name="check_circle" className="w-4 h-4 text-[#FC9700]" />
                      Logo design & Iconography
                    </li>
                    <li className="flex items-center gap-3 font-label-md text-label-md text-white">
                      <Icon name="check_circle" className="w-4 h-4 text-[#FC9700]" />
                      Brand strategy & Architecture
                    </li>
                    <li className="flex items-center gap-3 font-label-md text-label-md text-white">
                      <Icon name="check_circle" className="w-4 h-4 text-[#FC9700]" />
                      Visual guidelines & Stationery
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    Strategic Direction
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    Logo Systems
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    Premium Identity
                  </span>
                </div>
              </div>
            </div>

              <div
                className="col-span-5 relative overflow-hidden rounded-xl border border-white/15 p-[clamp(1.5rem,3vw,2.5rem)] text-white shadow-[0_10px_40px_-10px_rgba(15,23,42,0.45)] group"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(76, 96, 194, 0.78), rgba(15, 23, 42, 0.72)), url(${solutionCardsBackground})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                data-reveal
                data-reveal-delay="100"
              >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-6">
                  <Icon name="trending_up" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">Digital Growth</h3>
                <p className="font-body-md text-body-md text-white/80 mb-8">
                  Boostez votre visibilité et convertissez vos prospects en clients fidèles avec
                  nos stratégies de croissance pilotées par les données.
                </p>
                <div className="space-y-6">
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <h4 className="font-label-md text-label-md mb-2">Meta & Google Ads</h4>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full w-[85%] transition-all duration-1000"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <h4 className="font-label-md text-label-md mb-2">SEO Performance</h4>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div className="bg-secondary h-full w-[92%] transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors duration-500"></div>
            </div>

              <div
                className="col-span-5 relative overflow-hidden rounded-xl border border-white/15 p-[clamp(1.5rem,3vw,2.5rem)] text-white shadow-[0_10px_40px_-10px_rgba(15,23,42,0.45)]"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.82), rgba(76, 96, 194, 0.54)), url(${solutionCardsBackground})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                data-reveal
                data-reveal-delay="200"
              >
              <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                <Icon name="movie_filter" className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Content Creation</h3>
              <p className="font-body-md text-body-md text-white/80 mb-8">
                Du contenu visuel de haute qualité qui sublime votre marque et engage votre
                communauté.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex h-full flex-col justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Video</span>
                    <p className="text-lg font-semibold text-white">Reels, ads et capsules premium</p>
                  </div>
                </div>
                <div className="aspect-square rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex h-full flex-col justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Photo</span>
                    <p className="text-lg font-semibold text-white">Shooting produit et lifestyle</p>
                  </div>
                </div>
              </div>
            </div>

              <div
                className="col-span-7 flex flex-row gap-8 items-center rounded-xl border border-white/15 p-[clamp(1.5rem,3vw,2.5rem)] text-white shadow-[0_10px_40px_-10px_rgba(15,23,42,0.45)]"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.84), rgba(15, 23, 42, 0.58)), url(${solutionCardsBackground})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                data-reveal
                data-reveal-delay="300"
              >
              <div className="flex-1">
                <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Icon name="groups_3" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-headline-md text-headline-md mb-4">
                  Social Media & Influence
                </h3>
                <p className="font-body-md text-body-md text-white/80 mb-6">
                  Bâtissez une communauté engagée et collaborez avec les bons influenceurs pour
                  étendre votre portée.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="bg-white/10 text-white px-4 py-1.5 rounded-full font-label-md text-label-md border border-white/15 backdrop-blur-sm">
                    Community Management
                  </span>
                  <span className="bg-white/10 text-white px-4 py-1.5 rounded-full font-label-md text-label-md border border-white/15 backdrop-blur-sm">
                    Influencer Strategy
                  </span>
                  <span className="bg-white/10 text-white px-4 py-1.5 rounded-full font-label-md text-label-md border border-white/15 backdrop-blur-sm">
                    Social Audits
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full h-full min-h-[250px] rounded-lg relative flex items-center justify-center overflow-hidden border border-white/15 bg-white/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="relative flex flex-col gap-4 w-full px-6">
                  <div className="bg-white/85 p-3 rounded-xl shadow-sm border border-white/30 flex items-center gap-3 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-secondary/20"></div>
                    <div className="h-2 w-24 bg-surface-container rounded"></div>
                  </div>
                  <div
                    className="bg-white/85 p-3 rounded-xl shadow-sm border border-white/30 flex items-center gap-3 ml-8 animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    <div className="h-2 w-32 bg-surface-container rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-lowest">
          <div className="px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-16" data-reveal>
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-4 block">
                Notre Méthode
              </span>
              <h2 className="font-headline-lg text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] text-on-surface">
                Comment nous travaillons
              </h2>
            </div>
            <div className="relative overflow-x-auto pb-4">
              <div className="absolute top-[28px] left-0 min-w-[920px] w-full h-0.5 bg-outline-variant/30 z-0"></div>
              <div className="grid min-w-[920px] grid-cols-4 gap-[clamp(1rem,2vw,2rem)] relative z-10">
                {[
                  {
                    num: '01',
                    title: 'Audit & Discovery',
                    desc: 'Comprendre vos enjeux, votre marché et définir des objectifs clairs.',
                  },
                  {
                    num: '02',
                    title: 'Stratégie Creative',
                    desc: "Conception d'un plan d'action unique mêlant créativité et technologie.",
                  },
                  {
                    num: '03',
                    title: 'Exécution Agile',
                    desc: 'Production de vos assets et lancement des campagnes avec précision.',
                  },
                  {
                    num: '04',
                    title: 'Optimisation',
                    desc: 'Analyse des résultats et itérations pour maximiser le ROI.',
                  },
                ].map((step, index) => (
                  <div
                    key={step.num}
                    className="bg-background p-8 rounded-xl border border-outline-variant/20 hover:border-primary transition-colors duration-300"
                    data-reveal
                    data-reveal-delay={index * 100}
                  >
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center font-bold text-headline-md text-primary shadow-sm mb-6 border border-primary/20">
                      {step.num}
                    </div>
                    <h4 className="font-headline-md text-[20px] text-on-surface mb-3">{step.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-section-padding px-[clamp(1rem,4vw,2rem)]"
          data-reveal
          data-reveal-delay="400"
        >
          <div className="max-w-container-max mx-auto bg-primary rounded-[2rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent"></div>
            <div className="relative z-10 px-[clamp(1.5rem,4vw,3rem)] py-[clamp(3rem,7vw,6rem)] text-center">
              <h2 className="font-headline-lg text-[clamp(2.25rem,6vw,4rem)] leading-[1.05] text-white mb-8">
                Prêt à transformer votre présence en ligne ?
              </h2>
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-full font-headline-md text-[20px] hover:brightness-110 transition-all duration-300 shadow-xl active:scale-95 inline-block">
                Discutons de votre projet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter revealDelay="500" />
    </div>
  )
}
