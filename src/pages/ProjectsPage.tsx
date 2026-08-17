import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SemanticLink from '../components/SemanticLink'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

interface Project {
  title: string
  category: string
  year: string
  description: string
  image: string
  size: 'large' | 'medium' | 'small'
  secondary?: boolean
}

const projects: Project[] = [
  {
    title: 'Modern Retail Identity',
    category: 'Branding',
    year: '2024',
    description: "Refonte d'identité visuelle pour une enseigne retail en quête de distinction.",
    image: '/images/projects/project-1.jpg',
    size: 'large',
  },
  {
    title: 'Luxe Care',
    category: 'Branding',
    year: '2024',
    description: 'Univers premium et direction artistique pour une marque orientée désirabilité.',
    image: '/images/projects/project-2.jpg',
    size: 'medium',
    secondary: true,
  },
  {
    title: 'Campaign Launch',
    category: 'Influence',
    year: '2024',
    description: 'Campagne créateurs Instagram / TikTok : casting, brief et reporting pour un lancement marque.',
    image: '/images/projects/project-3.jpg',
    size: 'small',
  },
  {
    title: 'Fintech Hub',
    category: 'Stratégie digitale',
    year: '2023',
    description: 'Plateforme B2B conçue pour soutenir la croissance et la conversion.',
    image: '/images/projects/project-4.jpg',
    size: 'small',
  },
  {
    title: 'Creative Flow',
    category: 'Création de contenu',
    year: '2024',
    description: 'Production photo et vidéo pour nourrir une présence de marque cohérente.',
    image: '/images/projects/project-5.jpg',
    size: 'small',
  },
]

const filters = ['Tous', 'Branding', 'Création de contenu', 'Social Media', 'Influence', 'Stratégie digitale']

const projetsLinking = getPageLinking('/projets')
const lienBranding = projetsLinking?.liens_sortants.find(
  (lien) => lien.cible === '/services/strategie-marketing-rebranding',
)
const lienInfluence = projetsLinking?.liens_sortants.find(
  (lien) => lien.cible === '/services/marketing-influence',
)

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  useScrollReveal()

  const filteredProjects = projects.filter((project) => (activeFilter === 'Tous' ? true : project.category === activeFilter))

  return (
    <div className="min-h-screen bg-[#F1F1F1] overflow-hidden w-full">
      <PageSeo {...pageSeo.projects} />
      <Navbar />

      <main className="bg-[#F1F1F1] min-h-screen pt-24">
        <header className="w-full pt-[clamp(5rem,9vw,6rem)] pb-[clamp(3rem,7vw,4rem)] px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
          <div className="flex flex-col gap-6 max-w-4xl" data-reveal>
            <span className="text-primary font-semibold text-[14px] uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              Portfolio créatif
            </span>
            <h1 className="font-display text-[clamp(2.9rem,8vw,5.25rem)] text-on-surface leading-[1.02] font-bold">
              Nos Projets
            </h1>
            <p className="font-body text-[clamp(1rem,2.5vw,1.25rem)] text-on-surface-variant leading-relaxed max-w-2xl">
              Découvrez une sélection de projets où stratégie, identité et contenu se rencontrent pour faire rayonner des marques ambitieuses.
            </p>
            {lienBranding ? (
              <SemanticLink lien={lienBranding} clusterSource="hub" className="max-w-2xl text-on-surface-variant" />
            ) : null}
            {lienInfluence ? (
              <SemanticLink lien={lienInfluence} clusterSource="hub" className="max-w-2xl text-on-surface-variant" />
            ) : null}
          </div>
        </header>

        <section className="sticky top-[72px] md:top-[80px] z-40 bg-white/60 backdrop-blur-md py-6 border-y border-outline-variant/30" data-reveal data-reveal-delay="100">
          <div className="w-full px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="flex flex-nowrap overflow-x-auto md:flex-wrap gap-4 pb-2 md:pb-0 no-scrollbar items-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap px-8 py-2.5 rounded-full text-[14px] font-semibold border transition-all ${
                    activeFilter === filter
                      ? 'bg-[#1b1b1b] text-white border-[#1b1b1b]'
                      : 'bg-white border-outline-variant text-on-surface-variant hover:border-primary'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="grid grid-cols-1 gap-[clamp(1rem,2vw,2rem)] md:grid-cols-2 xl:grid-cols-12">
              {filteredProjects.map((project, index) => {
              if (project.size === 'large') {
                return (
                  <div
                    key={project.title}
                    className="group project-card relative overflow-hidden rounded-xl bg-white md:col-span-2 xl:col-span-8"
                    data-reveal
                    data-reveal-delay={index * 100}
                  >
                    <div className="aspect-[16/10] md:aspect-[16/9] overflow-hidden">
                      <img
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                        src={project.image}
                        loading="lazy"
                        width={800}
                        height={520}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 opacity-100 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary text-white text-[12px] font-bold uppercase rounded-sm font-body">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[12px] font-bold uppercase rounded-sm font-body">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="font-display text-[32px] md:text-[44px] text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="font-body text-white/70 max-w-xl text-lg">{project.description}</p>
                    </div>
                  </div>
                )
              }

              if (project.size === 'medium' && project.secondary) {
                return (
                  <div
                    key={project.title}
                    className="group project-card relative overflow-hidden rounded-xl bg-white md:col-span-1 xl:col-span-4"
                    data-reveal
                    data-reveal-delay={index * 100}
                  >
                    <div className="aspect-square md:h-full overflow-hidden">
                      <img
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                        src={project.image}
                        loading="lazy"
                        width={800}
                        height={520}
                      />
                    </div>
                    <div className="absolute inset-0 bg-secondary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white text-center p-8 backdrop-blur-sm">
                      <span className="font-body text-[12px] font-bold uppercase tracking-widest mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-display text-[32px]">{project.title}</h3>
                      <div className="mt-6 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                        <Icon name="add" className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <div
                  key={project.title}
                  className="group project-card rounded-xl bg-white overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-outline-variant/30 md:col-span-1 xl:col-span-4"
                  data-reveal
                  data-reveal-delay={index * 100}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      src={project.image}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-secondary font-bold text-[12px] uppercase tracking-wider font-body">
                      {project.category}
                    </span>
                    <h4 className="font-display text-[26px] mt-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="mt-4 flex items-center gap-2 text-on-surface-variant text-[14px] font-body">
                      <span>{project.description}</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              )
              })}
            </div>

          <div className="flex justify-center mt-20" data-reveal data-reveal-delay="500">
            <Link to="/contact" className="group flex items-center gap-4 text-on-surface font-bold text-[16px] border-b-2 border-secondary pb-2 hover:gap-6 transition-all duration-300 font-display">
              Parlons de votre projet
              <Icon name="arrow_forward" className="w-5 h-5 text-secondary" />
            </Link>
          </div>
        </section>

        <section className="py-section-padding" data-reveal data-reveal-delay="600">
          <div className="w-full px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="relative bg-[#1b1b1b] overflow-hidden rounded-xl p-[clamp(1.75rem,5vw,7rem)] text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
              <div className="relative z-10 flex flex-col items-center gap-8">
                <h2 className="font-display text-[clamp(2.3rem,6vw,4rem)] text-white leading-tight max-w-3xl">
                  Prêt à donner vie à votre prochain projet ?
                </h2>
                <p className="font-body text-[clamp(1rem,2.5vw,1.25rem)] text-white/60 max-w-2xl mx-auto">
                  Nous accompagnons les marques qui veulent allier clarté stratégique, exécution soignée et impact durable.
                </p>
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-bold text-[18px] hover:scale-105 hover:brightness-110 shadow-2xl shadow-secondary/40 transition-all duration-300 active:scale-95 mt-4 font-display inline-block">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter revealDelay="700" />

      <style>{`
        .project-card:hover img { transform: scale(1.03); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}
