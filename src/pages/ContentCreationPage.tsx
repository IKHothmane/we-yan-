import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

interface GalleryItem {
  title: string
  image: string
  overlayClassName: string
  textClassName: string
  offset: boolean
}

// Images
const heroImage = '/images/content/hero-user.webp?v=20260623e'
const videoIconImage = '/images/content/icon-video.webp?v=20260623d'
const communityIconImage = '/images/content/icon-community.webp?v=20260623d'

const galleryItems: GalleryItem[] = [
  {
    title: 'LIFESTYLE ADVERTISING',
    image: '/images/content/gallery-lifestyle.webp?v=20260623d',
    overlayClassName: 'from-on-surface/90 via-on-surface/20 to-transparent',
    textClassName: 'text-surface',
    offset: false,
  },
  {
    title: 'MOTION GRAPHICS',
    image: '/images/content/gallery-motion.webp?v=20260623d',
    overlayClassName: 'from-primary/90 via-primary/20 to-transparent',
    textClassName: 'text-on-primary',
    offset: true,
  },
  {
    title: 'CULINARY CONTENT',
    image: '/images/content/gallery-culinary.webp?v=20260623d',
    overlayClassName: 'from-secondary/90 via-secondary/20 to-transparent',
    textClassName: 'text-on-secondary',
    offset: false,
  },
  {
    title: 'ARCHITECTURAL SHOOT',
    image: '/images/content/gallery-architecture.webp?v=20260623d',
    overlayClassName: 'from-primary/90 via-primary/20 to-transparent',
    textClassName: 'text-on-primary',
    offset: true,
  },
]

const expertiseLinks = ['Branding', 'Web Design', 'Content Creation', 'Social Media'] as const
const agencyLinks = ['Our Story', 'Case Studies', 'Process', 'Careers'] as const

export default function ContentCreationPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-hidden bg-surface text-on-surface">
      <PageSeo {...pageSeo.contentCreation} />
      <Navbar serviceTitle="Création de Contenu" />

      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[921px] items-center overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Studio premium de création de contenu"
              className="h-full w-full scale-105 object-cover transition-transform duration-1000"
                    width={800}
                    height={600}
                  />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.68)_42%,rgba(255,255,255,0)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,249,249,0)_0%,rgba(249,249,249,1)_100%)]" />
          </div>

          <div className="relative z-10 w-full px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="max-w-4xl" data-reveal>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-white/75 px-4 py-2 text-[0.76rem] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-sm">
                Expertise Digitale
              </span>
              <h1 className="mt-6 text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-on-surface">
                Content
                <br />
                <span className="text-secondary">Empire.</span>
              </h1>
              <p
                className="mt-8 max-w-2xl text-[clamp(1rem,2vw,1.18rem)] font-light leading-relaxed text-on-surface-variant"
                data-reveal
                data-reveal-delay="100"
              >
                Transformez votre présence sociale en une expérience visuelle immersive. Nous
                fusionnons la haute photographie, la production vidéo cinématographique et des
                stratégies d&apos;engagement basées sur la data.
              </p>
              <div className="mt-10 flex flex-wrap gap-4" data-reveal data-reveal-delay="200">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-4 text-lg font-bold text-white shadow-[0_18px_40px_-18px_rgba(252,151,0,0.65)] transition-all duration-300 hover:bg-[#e68900]"
                >
                  Démarrer un projet
                </Link>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-on-surface px-8 py-4 text-lg font-bold text-on-surface transition-colors hover:bg-on-surface hover:text-white"
                >
                  Voir le showreel
                  <Icon name="arrow_forward" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-surface-container-lowest py-section-padding">
          <div className="w-full px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="mb-20 text-center" data-reveal>
              <h2 className="mb-6 text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase tracking-[-0.03em] text-on-surface">
                NOS PILIERS <span className="text-primary">CRÉATIFS</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
                De la capture brute à la stratégie de distribution, nous maîtrisons chaque étape de
                la chaîne de valeur du contenu avec une esthétique premium.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <article
                className="glass-card group rounded-2xl border border-outline-variant/20 p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
                data-reveal
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon name="photo_camera" className="text-3xl" />
                </div>
                <h3 className="rigot-headline mb-4 text-2xl text-on-surface">
                  Photographie Premium
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  Shootings produits, lifestyle et corporate avec une direction artistique
                  internationale et un rendu haut de gamme.
                </p>
              </article>

              <article
                className="glass-card group rounded-2xl border border-outline-variant/20 p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
                data-reveal
                data-reveal-delay="100"
              >
                <div className="mb-6 h-16 w-16 transition-transform group-hover:scale-110">
                  <img
                    src={videoIconImage}
                    alt="Icône video production"
                    className="h-full w-full object-contain mix-blend-multiply"
                    width={800}
                    height={600}
                  />
                </div>
                <h3 className="rigot-headline mb-4 text-2xl text-on-surface">
                  Video Production
                </h3>
                <p className="leading-relaxed text-on-surface-variant">
                  Reels, courts-métrages et publicités dynamiques cinématographiques pour capter
                  l'attention en 3 secondes.
                </p>
              </article>

              <article
                className="glass-card group flex flex-col rounded-2xl border border-outline-variant/20 p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
                data-reveal
                data-reveal-delay="200"
              >
                <div className="mb-6 h-16 w-16 transition-transform group-hover:scale-110">
                  <img
                    src={communityIconImage}
                    alt="Icône community management"
                    className="h-full w-full object-contain mix-blend-multiply"
                    width={800}
                    height={600}
                  />
                </div>
                <h3 className="rigot-headline mb-4 text-2xl text-on-surface">
                  Community Management
                </h3>
                <p className="mb-6 leading-relaxed text-on-surface-variant">
                  Animation de communauté, service client social et modération proactive pour une
                  e-réputation impeccable.
                </p>
                <ul className="mt-auto space-y-2">
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Icon name="check_circle" className="text-sm text-secondary" />
                    Réponse en moins de 2h
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                    <Icon name="check_circle" className="text-sm text-secondary" />
                    Gestion de crise
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-surface py-section-padding" id="gallery">
          <div className="w-full px-[clamp(1rem,4vw,2rem)] md:px-margin-desktop">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-reveal>
              <div>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold uppercase tracking-[-0.03em] text-on-surface">
                  L'Art du <span className="text-secondary">Feed</span>
                </h2>
                <p className="mt-4 max-w-xl text-lg text-on-surface-variant">
                  Un aperçu des formats premium que nous créons quotidiennement pour nos clients
                  d'exception.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  aria-label="Précédent"
                  className="rounded-full border border-outline-variant bg-surface-container-lowest p-4 transition-colors hover:border-secondary hover:text-secondary"
                >
                  <Icon name="chevron_left" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Suivant"
                  className="rounded-full bg-on-surface p-4 text-surface shadow-lg transition-colors hover:bg-secondary"
                >
                  <Icon name="chevron_right" className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {galleryItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ${
                    item.offset? 'md:-translate-y-6' : ''
                  }`}
                  data-reveal
                  data-reveal-delay={String(index * 100)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={800}
                    height={600}
                  />
                  <div
                    className={`absolute inset-0 flex items-end bg-gradient-to-t p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.overlayClassName}`}
                  >
                    <span className={`font-bold tracking-wide ${item.textClassName}`}>
                      {item.title}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden border-t border-outline-variant/10 bg-surface-container-lowest py-section-padding">
          <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[80px]" />
          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-12 px-[clamp(1rem,4vw,2rem)] text-center md:flex-row md:px-margin-desktop md:text-left">
            <div className="max-w-2xl" data-reveal>
              <h2 className="mb-6 text-[clamp(3rem,6vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-on-surface">
                PRÊT À DEVENIR
                <br />
                <span className="text-secondary">VIRAL?</span>
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-on-surface-variant">
                Votre audience attend du contenu qui mérite son attention. Donnez-leur une raison
                de s'arrêter sur votre publication avec une esthétique premium et un message
                percutant.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-secondary px-10 py-5 text-lg font-bold text-on-secondary shadow-xl shadow-secondary/20 transition-all hover:bg-secondary-container"
              >
                Parlez à un Expert
                <Icon name="arrow_forward" className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            <div className="hidden lg:block" data-reveal data-reveal-delay="150">
              <div className="flex h-32 w-32 animate-spin-slow items-center justify-center rounded-full border border-secondary/30">
                <Icon name="north_east" className="text-4xl text-secondary" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter revealDelay="100" />
    </div>
  )
}
