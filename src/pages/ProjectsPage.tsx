import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import useScrollReveal from '../hooks/useScrollReveal'

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
    description: 'Identité visuelle novatrice pour le secteur retail au Maroc.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNTGXkUV5g81ISneMfjN-O2cpC3O4vPu3s79ZDskipBo4_AYA2QAsDbP3cChyqHj6PC0dcSCQRsTxR2u1x8jTKmAlA7rIGFafL4gA9nj39ZHoswXO42-ZQK8XxbcC0EqB0gbFaSoptmmJvW2U-jM_sqJEuRfiUqVM9a8N-AwJzRHDk3LWv1pap45ICf7ir7wmDpPo7ZtawvzmAX6b7miKiC1izPkPUoHxUGzcJ44_trTZxrFoiEv0rzvYPxVCVSvEIHyCe5aCyEf4',
    size: 'large',
  },
  {
    title: 'Luxe Care',
    category: 'Product Design',
    year: '2024',
    description: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIMmUVG7OKX1VqbVDbIjF7YYVcrW6_nBiWxBkDgIep5Di2WwtNS3g35pwuNbcwj275n8_rutfqkkTiltBUm0oTg4456pqjLcfVF13K_zMrcnkw7lFWTe8t1eSBfMxD5OtBfIM95ifchcdxy8HC5SyaJ0UEaWDXILiAjcbgxQ4JYazbTS3Ttl7kLc8tSpvyt7EXcVfa9nYaN4Y1-8Vf0WxxzZ7DjWJHAm5j_a2bHDdppO8rIqZVZBcMAFuUwyNUHv4oD5WWsNfiyhA',
    size: 'medium',
    secondary: true,
  },
  {
    title: 'Campaign Launch',
    category: 'Social Media',
    year: '2024',
    description: 'Lancement Digital',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXpcMXigDzN3H2KqayLINUCgXKEXMJw47UDb9Ar8E60-BQVXAJ6UlJFNcLLSgIHEraSHapYfPH2HunnznKIp_M6LRT9je4Ykli9_IL7Tp1iskwP4zbUheYc6DeiEAy-xGW4NsIt4xHpRYX-DegTbRd0S2UYj-iMaw013x1CYKJRyujxo4ByPaNeqDlf0enocV64QkQTIhW69xWkgd9j1Z5v08pqVI3Lj2rsQeiTuDECV4guyHYJojMDzrxjXhP6kRKiEazcoBol8M',
    size: 'small',
  },
  {
    title: 'Fintech Hub',
    category: 'Data Strategy',
    year: '2023',
    description: 'Plateforme B2B',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBypvLcPd31s47HMB2RhGtLAyFXpY4xAphoZIZXHD8yOfnjvFhxDEF_Yk63CGXhMEmlDRcvviANYDV5FHvq90YR1B_X9AXBcrTxaKzxpSLAAh3tVuWDaNnAmmy7XFDP5HAVnXuaa4lkBsvkct8y_yQ7xKhPEDCbhcwxVnPsELTUMGTu-lSRDRZomsPcHVDrz-aaoCQ2VXV9bxx2E7nPb6Zz-3JJtl-yASsaP0P-dcaWbHcQcr_dkeyebBBvjNQ4V878CGeRLolKjMU',
    size: 'small',
  },
  {
    title: 'Creative Flow',
    category: 'Content Creation',
    year: '2024',
    description: 'Production Studio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD81dLKYJiL3ECpe0CCs-eLyp5swpyUILzmxQPnDHCxhJQNAj1mxVGh8HM6mXJgqN49VNGXzUWfT-JutGcqcgI6PwlLRiNWUEOlOhPCuxk4Az2l7CGFWPb5pdU0oXpPm0GN8tjNUAdBLJW-4A0Z1KTGvyMJO6c1n-LRKavDJKyN2Aj0DWM8phrRATYidyE38BdPs24dxw4G73Ahk-kfyWXBK5Pu4qGRnuu1lfg-jqhHokKz3uEJTH6xr8A1q-_zMqDUtMiW_f9HEc',
    size: 'small',
  },
]

const filters = ['Tous', 'Branding', 'Content Creation', 'Social Media', 'Stratégie']

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  useScrollReveal()

  const filteredProjects = projects.filter((p) =>
    activeFilter === 'Tous' ? true : p.category === activeFilter || (activeFilter === 'Stratégie' && p.category === 'Data Strategy'),
  )

  return (
    <div className="min-h-screen bg-[#F1F1F1] overflow-hidden w-full pb-28 md:pb-32">
      <PageSeo
        title="Projets | we yan digital"
        description="Explorez les projets de we yan digital en branding, campagnes sociales, design digital et identités visuelles réalisées pour des marques ambitieuses."
      />
      <Navbar />

      <main className="bg-[#F1F1F1] min-h-screen pt-24">
        <header className="pt-20 pb-16 px-8 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col gap-6 max-w-4xl" data-reveal>
            <span className="text-primary font-semibold text-[14px] uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              Portfolio
            </span>
            <h1 className="font-display text-[48px] md:text-[84px] text-on-surface leading-[1.1] font-bold">
              Nos Projets
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              Une immersion dans notre univers créatif où la stratégie rencontre l'innovation pour propulser les marques marocaines.
            </p>
          </div>
        </header>

        <section className="sticky top-[72px] md:top-[80px] z-40 bg-white/60 backdrop-blur-md py-6 border-y border-outline-variant/30" data-reveal data-reveal-delay="100">
          <div className="px-8 md:px-margin-desktop max-w-container-max mx-auto">
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

        <section className="py-20 px-8 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {filteredProjects.map((project, index) => {
              if (project.size === 'large') {
                return (
                  <div
                    key={project.title}
                    className="md:col-span-8 group project-card relative overflow-hidden rounded-xl bg-white"
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
                    className="md:col-span-4 group project-card relative overflow-hidden rounded-xl bg-white"
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
                  className="md:col-span-4 group project-card rounded-xl bg-white overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-outline-variant/30"
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
              Discuter d'un projet
              <Icon name="arrow_forward" className="w-5 h-5 text-secondary" />
            </Link>
          </div>
        </section>

        <section className="py-section-padding" data-reveal data-reveal-delay="600">
          <div className="max-w-container-max mx-auto px-8 md:px-margin-desktop">
            <div className="relative bg-[#1b1b1b] overflow-hidden rounded-xl p-12 md:p-28 text-center">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
              <div className="relative z-10 flex flex-col items-center gap-8">
                <h2 className="font-display text-[40px] md:text-[64px] text-white leading-tight max-w-3xl">
                  Prêt à lancer votre projet ?
                </h2>
                <p className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
                  Rejoignez les marques qui font confiance à notre expertise pour transformer leur présence digitale en un avantage compétitif majeur.
                </p>
                <Link to="/contact" className="bg-secondary text-white px-12 py-5 rounded-full font-bold text-[18px] hover:scale-105 hover:brightness-110 shadow-2xl shadow-secondary/40 transition-all duration-300 active:scale-95 mt-4 font-display inline-block">
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-outline-variant/30" data-reveal data-reveal-delay="700">
        <div className="flex flex-col md:flex-row justify-between items-start py-20 px-8 md:px-margin-desktop max-w-container-max mx-auto gap-16">
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="w-12 h-12 rounded-full bg-secondary shadow-[0_10px_30px_-10px_rgba(252,151,0,0.7)]"
              />
              <span className="font-display text-xl font-bold text-on-surface tracking-tight">
                we yan digital
              </span>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Agence digitale premium spécialisée dans l'innovation créative et la stratégie d'impact pour le marché marocain et international.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-12 md:gap-24">
              <div className="flex flex-col gap-6">
                <h5 className="font-display font-bold text-[14px] uppercase tracking-widest text-on-surface">
                  Exploration
                </h5>
                <div className="flex flex-col gap-4">
                  <Link className="font-body text-on-surface-variant hover:text-primary transition-colors" to="/projets">
                    Projets
                  </Link>
                  <Link className="font-body text-on-surface-variant hover:text-primary transition-colors" to="/agence">
                    Notre Agence
                  </Link>
                  <Link className="font-body text-on-surface-variant hover:text-primary transition-colors" to="/services">
                    Services
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h5 className="font-display font-bold text-[14px] uppercase tracking-widest text-on-surface">
                  Suivez-nous
                </h5>
                <div className="flex flex-col gap-4">
                  <a className="font-body text-on-surface-variant hover:text-primary transition-colors" href="https://instagram.com" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a className="font-body text-on-surface-variant hover:text-primary transition-colors" href="https://linkedin.com" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="font-body text-on-surface-variant hover:text-primary transition-colors" href="https://twitter.com" target="_blank" rel="noreferrer">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-outline-variant/10 py-10 px-8 md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-body text-[14px] text-on-surface-variant/60">
              © {new Date().getFullYear()} we yan digital Agency. Tous droits réservés.
            </p>
            <div className="flex gap-8">
              <Link className="font-body text-[14px] text-on-surface-variant/60 hover:text-on-surface transition-colors" to="/contact">
                Contact
              </Link>
              <Link className="font-body text-[14px] text-on-surface-variant/60 hover:text-on-surface transition-colors" to="/agence">
                Agence
              </Link>
            </div>
          </div>
      </footer>

      <style>{`
        .project-card:hover img { transform: scale(1.03); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  )
}
