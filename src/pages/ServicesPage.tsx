import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import useScrollReveal from '../hooks/useScrollReveal'

export default function ServicesPage() {
  useScrollReveal()

  return (
    <div className="font-body-md bg-background min-h-screen overflow-hidden w-full pb-28 md:pb-32">
      <Navbar />

      <main>
        <section className="pt-32 pb-20 px-8 md:px-margin-desktop max-w-container-max mx-auto text-center" data-reveal>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6">
            Nos Expertises <span className="text-primary italic">Digitales</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto" data-reveal data-reveal-delay="100">
            Des solutions sur mesure pour propulser votre marque au niveau supérieur grâce à une
            approche centrée sur l'innovation et la performance.
          </p>
        </section>

        <section className="py-section-padding px-8 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl shadow-[0_10px_40px_-10px_rgba(100,131,240,0.15)] border border-outline-variant/20 group hover:border-primary/30 transition-all duration-300" data-reveal>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name="architecture" className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    Branding & Visual Identity
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-md">
                    Nous créons des identités visuelles fortes qui racontent votre histoire et
                    captivent votre audience dès le premier regard.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface">
                      <Icon name="check_circle" className="w-4 h-4 text-secondary" />
                      Logo design & Iconography
                    </li>
                    <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface">
                      <Icon name="check_circle" className="w-4 h-4 text-secondary" />
                      Brand strategy & Architecture
                    </li>
                    <li className="flex items-center gap-3 font-label-md text-label-md text-on-surface">
                      <Icon name="check_circle" className="w-4 h-4 text-secondary" />
                      Visual guidelines & Stationery
                    </li>
                  </ul>
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <img
                    alt="Workspace branding"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpa3VKIP82G8xHVoadX2k1SG5vSeecooWPILhhlGRhaDXkbB6ZtBAaV4-ebYnMNd95xUevPNqNmUl-mUsIXePe_hT6eWYYseFdcC6IAR_NRBaO9kWK8urJK8760oUE3RhswuI4ksW_NM_Hvus8ks2RRGhuAscbuUK7M1x2y3k-psXyd2A0Ge6ivNJ5zLKVqZ2CqGR5xa-Jm4OzSNQaZr2kTU55fSEhs73Xto7yfFjtvFWSgXej3i4JgNvThFUv5UujoT-p000EMNE"
                    loading="lazy"
                    width={800}
                    height={256}
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-primary text-on-primary p-10 rounded-xl shadow-[0_10px_40px_-10px_rgba(100,131,240,0.15)] relative overflow-hidden group" data-reveal data-reveal-delay="100">
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

            <div className="md:col-span-5 bg-surface-container-low p-10 rounded-xl shadow-[0_10px_40px_-10px_rgba(100,131,240,0.15)] border border-outline-variant/20" data-reveal data-reveal-delay="200">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <Icon name="movie_filter" className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Content Creation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Du contenu visuel de haute qualité qui sublime votre marque et engage votre
                communauté.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-white">
                  <img
                    alt="Video production"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6DWMU19t88TzuFQFcclzlkb0XnvVzDQRdhxVmIakuiTSX9hDQXS3NIDHzxrXPrAB0lq1WMzM4_TRXSq3Lm3mctrLsemU1r68-PNyoKmI4LKSPnzDc7GcJmKQ40YDDYoKiKCXgoJ0GirE5ziG8k9dQp0NOb8jWGOct6EvqVuriBeQwejp5oH64i-Fzw31Lz5z6zULC6PcdOI1qZxj5KWmrmuRvy_YWb3Vi5ybOXVJo8sawjSEzszioI4BR6V4eG0ktFLirHFMrmAM"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-white">
                  <img
                    alt="Photography"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqe1f-VU4DkqYBxK6DAaop7C46CJQJAGn6y97JjuE65021BIjhvUGO0HdPuXNdTkBiLGXVmYD_v8qs7-t5LwiMYhzFiaeAOE1-w7wmJhxIRKOycltJ_Uq-ADCKErRaAiJZvBQImcJSmFDbtb5z2yNMQKbCNMUmSCoj-M7mBpMV2Ks8gK67w9rBXvYV0EtLhkm_QBgsq7qm-Ngur656uSecItFyZGOAk1_QzpdZpeR2J4WBozEhcDksvqcguRn3PvUe3hU8aoehi5E"
                    loading="lazy"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-xl shadow-[0_10px_40px_-10px_rgba(100,131,240,0.15)] border border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center" data-reveal data-reveal-delay="300">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name="groups_3" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                  Social Media & Influence
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Bâtissez une communauté engagée et collaborez avec les bons influenceurs pour
                  étendre votre portée.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-md text-label-md">
                    Community Management
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-md text-label-md">
                    Influencer Strategy
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-label-md text-label-md">
                    Social Audits
                  </span>
                </div>
              </div>
              <div className="flex-1 w-full h-full min-h-[250px] bg-background rounded-lg relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative flex flex-col gap-4 w-full px-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-outline-variant/10 flex items-center gap-3 animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-secondary/20"></div>
                    <div className="h-2 w-24 bg-surface-container rounded"></div>
                  </div>
                  <div
                    className="bg-white p-3 rounded-xl shadow-sm border border-outline-variant/10 flex items-center gap-3 ml-8 animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                    <div className="h-2 w-32 bg-surface-container rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-lowest">
          <div className="px-8 md:px-margin-desktop max-w-container-max mx-auto">
            <div className="text-center mb-16" data-reveal>
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-4 block">
                Notre Méthode
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Comment nous travaillons
              </h2>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-[28px] left-0 w-full h-0.5 bg-outline-variant/30 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative z-10">
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

        <section className="py-section-padding px-8" data-reveal data-reveal-delay="400">
          <div className="max-w-container-max mx-auto bg-primary rounded-[2rem] overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent"></div>
            <div className="relative z-10 px-8 py-16 md:py-24 text-center">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-8">
                Prêt à transformer votre présence en ligne ?
              </h2>
              <Link to="/contact" className="bg-secondary text-white px-10 py-5 rounded-full font-headline-md text-[20px] hover:brightness-110 transition-all duration-300 shadow-xl active:scale-95 inline-block">
                Discutons de votre projet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-variant/20" data-reveal data-reveal-delay="500">
        <div className="flex flex-col md:flex-row justify-between items-center py-16 px-8 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col gap-4 mb-8 md:mb-0">
            <div className="font-headline-md text-headline-md text-on-surface">we yan digital</div>
            <p className="text-on-surface-variant max-w-xs font-body-md text-body-md">
              L'agence digitale marocaine qui propulse les marques vers l'excellence.
            </p>
          </div>
          <div className="flex gap-12 mb-8 md:mb-0">
            <div className="flex flex-col gap-3">
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                to="/projets"
              >
                Projets
              </Link>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                to="/agence"
              >
                Notre Agence
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                to="/services"
              >
                Services
              </Link>
              <Link
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="text-on-surface-variant font-body-md text-body-md">
            © {new Date().getFullYear()} We Digital. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
