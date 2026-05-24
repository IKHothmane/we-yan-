import { useEffect } from 'react'
import Navbar from './Navbar.tsx'

interface Service {
  title: string
  description: string
  icon: string
  tone: 'primary' | 'secondary'
}

interface PortfolioItem {
  title: string
  tag: string
  featured?: boolean
  tone: 'primary' | 'secondary'
  image: string
}

interface Testimonial {
  quote: string
  name: string
  role: string
  tone: 'primary' | 'secondary'
  avatar: string
}

const services: Service[] = [
  {
    title: 'Branding & identité visuelle',
    description:
      'Identité visuelle percutante et stratégie de marque cohérente pour marquer les esprits.',
    icon: 'brush',
    tone: 'primary',
  },
  {
    title: 'Création de contenu (photo, vidéo, reels)',
    description:
      'Production photo/vidéo premium pensée pour la performance et l’esthétique sur les formats sociaux.',
    icon: 'video_library',
    tone: 'secondary',
  },
  {
    title: 'Community management',
    description:
      'Gestion éditoriale, animation et modération pour bâtir une communauté active et fidèle.',
    icon: 'groups',
    tone: 'primary',
  },
  {
    title: "Marketing d’influence",
    description:
      'Collaborations ciblées avec créateurs et leaders d’opinion pour amplifier votre portée.',
    icon: 'campaign',
    tone: 'secondary',
  },
  {
    title: 'Publicité Meta Ads',
    description:
      'Campagnes Facebook & Instagram optimisées pour la conversion, le ROAS et la croissance.',
    icon: 'ads_click',
    tone: 'primary',
  },
  {
    title: 'Google Ads',
    description:
      'Capturez l’intention d’achat avec une structure de compte propre et des annonces performantes.',
    icon: 'search',
    tone: 'secondary',
  },
  {
    title: 'SEO & référencement',
    description:
      'Visibilité durable via optimisation technique, contenu et netlinking orientés résultats.',
    icon: 'travel_explore',
    tone: 'primary',
  },
  {
    title: 'Stratégie digitale',
    description:
      'Feuille de route 360° basée sur la donnée, alignée sur vos objectifs business.',
    icon: 'insights',
    tone: 'secondary',
  },
]

const portfolio: PortfolioItem[] = [
  {
    title: "Lancement Campagne 'Lumière'",
    tag: 'CONTENT & ADS',
    featured: true,
    tone: 'secondary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCepd34wN95r5n4e_lhiduxIU0iHrNCNgms5SOb2IODeq-u11xjUTzKSvArGazGXaqjPp9E7xTBlddBdWFcsG4S9H7PqpcSm5hrvBE_oQBakGPcmPKqauisDaX7lJ6rXAfodzSA2gKQiYcUtd9BknfGfMpL4LIl0j94vFKizBjrvQiYM_Ilo310QtQo2FUuUvIFp1KoeUqmH272vV_djgoJOigNU0VFBcf34X3idF902-qY5r6_KsZqpSEdQMFghjiISWkvNg9U-90',
  },
  {
    title: 'Branding — Identité Premium',
    tag: 'BRANDING',
    tone: 'primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoyweO0W1tSPc9TY2gaGIFiQnphBk-4ifHQ5Uj3iJFRMM00UkN6RvqaZlC2VaIzv2DoclwUoZ75EmYMuIhzkqb_uITBiQzrdBIiTBeihveVqJvrYVKijR8wfBy9udPRqB6mLWZDo69ZdQe-W5sQacP4mO1XWjObIXmT07Ch02TkXlhzJ3nDzrJcyybQb-MLYNFB0Vb45XU4UYMPfzGOL3c36MCYnNozyNsWPnpDXDw7zXDF8BTTaJ2ZATw4KELVbyku6otdfp1mCM',
  },
  {
    title: 'Meta Ads — Performance',
    tag: 'ADS',
    tone: 'secondary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZFPeUiKo7rq9WDfSKxtmL9IzQSt7jcAImesKMUycpZzcdbQrAimuU6v4h6cuuTHIfaa8gkHqokRRf95qNTIXjczQe6DAw-Vvk54y0K8w8sZ9G2_HB02T7ao89l0dEVw6__94ndgRxL4nny8gGbHr1ZoGvq8FRM6W6a8lIeKfDfk0YBG9BwSnzacRK-6FcKkvWVoP47GasDzqqU32wVQ65K0PlIqP1oBtoduyE0b1TxkF04QKVEUX-4vtxo7zaihQpSnsVzAmnEv4',
  },
  {
    title: 'Logo — Série Maroc',
    tag: 'DESIGN',
    tone: 'primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpJH-Hx_YvWuSl5bmE3UPd8JDWEYAn6IMa8CPqCpejrxi5Lb-S_iNUBdEuQuL6LeCaiMo8HGwTbbtZ2_-VU3UYErJ429lhn4yKYGOBlJL9INCdwlKGREEK1Do0hsVJgrdv7vlduxFIAh4sSUDlxiJaAbU8YIru_mjeqR4trc9oIzChJ4Vp8Cu91l4GeTLwANH96F34AovPOkcYTyfakVptYRJJmof6iYoUoFn472_-zDzaKNCl1VgOcrUqGydAPCId9nyaIxngHas',
  },
  {
    title: 'Reels — Storytelling',
    tag: 'CONTENT',
    tone: 'secondary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZFPeUiKo7rq9WDfSKxtmL9IzQSt7jcAImesKMUycpZzcdbQrAimuU6v4h6cuuTHIfaa8gkHqokRRf95qNTIXjczQe6DAw-Vvk54y0K8w8sZ9G2_HB02T7ao89l0dEVw6__94ndgRxL4nny8gGbHr1ZoGvq8FRM6W6a8lIeKfDfk0YBG9BwSnzacRK-6FcKkvWVoP47GasDzqqU32wVQ65K0PlIqP1oBtoduyE0b1TxkF04QKVEUX-4vtxo7zaihQpSnsVzAmnEv4',
  },
]

const testimonials: Testimonial[] = [
  {
    quote:
      'We Digital a littéralement transformé notre présence sur Instagram. Nos ventes ont augmenté de 40% en seulement 3 mois.',
    name: 'Sara Benani',
    role: 'Lux Moroccan Decor',
    tone: 'primary',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlQBRhqHyX16e1zU1TK398qFk0ZHUw0P7mZVEI7ZEBnu2lKnrh006xgtnFMUtKTnr4clbw4SUPG8C89HXNB8eci8bXHMRCAqBBd6i-qI8TtoivD0FQ-Kk3umNcJnCdnqA76kWLEbjxYFDPojnyPPikM-p7FHU1JHafeSvCbuOzlPSwN9YbhG3EzWjaTPE-m4tX3saP4j8AiC40xYC5Y_XAiGHur_CFbtRQVq44p1X_psZj_tDB1czz4rfAfj5cm1ukinmcPSSNX_s',
  },
  {
    quote:
      'Une équipe jeune, réactive et surtout très créative. Ils ont su capturer l\'essence de notre marque dès le premier jour.',
    name: 'Mehdi Alaoui',
    role: 'CEO, TechNova Morocco',
    tone: 'secondary',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpJH-Hx_YvWuSl5bmE3UPd8JDWEYAn6IMa8CPqCpejrxi5Lb-S_iNUBdEuQuL6LeCaiMo8HGwTbbtZ2_-VU3UYErJ429lhn4yKYGOBlJL9INCdwlKGREEK1Do0hsVJgrdv7vlduxFIAh4sSUDlxiJaAbU8YIru_mjeqR4trc9oIzChJ4Vp8Cu91l4GeTLwANH96F34AovPOkcYTyfakVptYRJJmof6iYoUoFn472_-zDzaKNCl1VgOcrUqGydAPCId9nyaIxngHas',
  },
  {
    quote:
      'Leur expertise SEO nous a fait gagner des positions clés. Une approche sérieuse et premium.',
    name: 'Ines Tazi',
    role: 'Marketing, GreenFlow',
    tone: 'primary',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZFPeUiKo7rq9WDfSKxtmL9IzQSt7jcAImesKMUycpZzcdbQrAimuU6v4h6cuuTHIfaa8gkHqokRRf95qNTIXjczQe6DAw-Vvk54y0K8w8sZ9G2_HB02T7ao89l0dEVw6__94ndgRxL4nny8gGbHr1ZoGvq8FRM6W6a8lIeKfDfk0YBG9BwSnzacRK-6FcKkvWVoP47GasDzqqU32wVQ65K0PlIqP1oBtoduyE0b1TxkF04QKVEUX-4vtxo7zaihQpSnsVzAmnEv4',
  },
]

function classNames(...values: (string | false | null | undefined)[]) {
  return values.filter(Boolean).join(' ')
}

function useScrollReveal() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const elements = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[]
    elements.forEach((el) => {
      const delay = el.getAttribute('data-reveal-delay') || '0'
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
      el.style.transitionDelay = `${delay}ms`
    })

    if (prefersReduced) {
      elements.forEach((el) => {
        el.classList.remove('opacity-0', 'translate-y-8')
        el.classList.add('opacity-100', 'translate-y-0')
        el.style.transitionDelay = '0ms'
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          target.classList.remove('opacity-0', 'translate-y-8')
          target.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(target)
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <div className="bg-background text-on-background font-body">
      <Navbar />

      <main id="top">
        <section
          className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
        >
          <div className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-primary/20 rounded-full hero-blob"></div>
          <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-secondary/15 rounded-full hero-blob"></div>
          <div className="absolute top-24 right-1/2 translate-x-1/2 w-[520px] h-[520px] bg-primary/10 rounded-full hero-blob"></div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-gutter items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur border border-primary/10 mb-6">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="text-primary font-label-md uppercase tracking-[0.18em] text-xs">
                  Make it Different
                </span>
              </div>

              <h1 className="font-rigot text-display-lg-mobile md:text-display-lg text-on-background mb-6 leading-[1] tracking-tighter">
                Votre marque mérite de se <span className="text-secondary">démarquer</span>.
              </h1>

              <p className="font-body text-body-lg text-on-surface-variant mb-10 max-w-xl">
                Agence de communication spécialisée en branding, création de contenu, influence
                marketing et publicité digitale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  className="px-8 py-4 bg-secondary text-white rounded-full font-label-md text-center hover:shadow-xl hover:shadow-secondary/30 transition-all transform hover:-translate-y-1"
                  href="#contact"
                >
                  Demander un devis
                </a>
                <a
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-label-md text-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                  href="#work"
                >
                  Voir nos projets
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.22em] text-on-surface-variant">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Branding
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span> Ads
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Content
                </span>
              </div>
            </div>

            <div className="relative mt-12 md:mt-0">
              <div className="glass-card rounded-[2.5rem] p-4 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <img
                  alt="A premium workspace"
                  className="rounded-[2rem] w-full h-[380px] sm:h-[460px] md:h-[520px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpJH-Hx_YvWuSl5bmE3UPd8JDWEYAn6IMa8CPqCpejrxi5Lb-S_iNUBdEuQuL6LeCaiMo8HGwTbbtZ2_-VU3UYErJ429lhn4yKYGOBlJL9INCdwlKGREEK1Do0hsVJgrdv7vlduxFIAh4sSUDlxiJaAbU8YIru_mjeqR4trc9oIzChJ4Vp8Cu91l4GeTLwANH96F34AovPOkcYTyfakVptYRJJmof6iYoUoFn472_-zDzaKNCl1VgOcrUqGydAPCId9nyaIxngHas"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl hidden lg:block border border-primary/5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <p className="font-headline text-3xl tracking-tighter">+150%</p>
                    <p className="text-xs font-label-md opacity-70">Engagement Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-section-padding bg-white" id="services">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-20" data-reveal>
              <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-4 tracking-tighter">
                Nos solutions <span className="text-primary">digitales</span>
              </h2>
              <p className="font-body text-body-md text-on-surface-variant max-w-2xl mx-auto">
                Une approche 360° pour couvrir tous les points de contact de votre audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {services.map((service, index) => {
                const toneClasses =
                  service.tone === 'secondary'
                    ? 'hover:border-secondary/20'
                    : 'hover:border-primary/20'
                const iconClasses =
                  service.tone === 'secondary'
                    ? 'bg-secondary/10 text-secondary'
                    : 'bg-primary/10 text-primary'

                return (
                  <div
                    key={service.title}
                    className={classNames(
                      'p-8 bg-background rounded-[2rem] border border-transparent hover-lift shadow-sm',
                      toneClasses,
                    )}
                    data-reveal
                    data-reveal-delay={index * 100}
                  >
                    <div
                      className={classNames(
                        'w-14 h-14 rounded-2xl flex items-center justify-center mb-6',
                        iconClasses,
                      )}
                    >
                      <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                    </div>
                    <h3 className="font-headline text-2xl mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )
              })}

              <div className="p-8 bg-secondary text-white rounded-[2rem] hover-lift shadow-xl flex flex-col justify-center items-center text-center shadow-secondary/20" data-reveal data-reveal-delay="800">
                <h3 className="font-headline text-2xl mb-4 tracking-tight">
                  Besoin d’un pack sur mesure ?
                </h3>
                <a
                  className="px-6 py-3 bg-white text-secondary rounded-full font-label-md font-bold transition-transform active:scale-95"
                  href="#contact"
                >
                  Discutons-en
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-section-padding bg-background overflow-hidden" id="work">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-reveal>
              <div>
                <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg tracking-tighter">
                  Portfolio <span className="text-secondary">premium</span>
                </h2>
                <p className="font-body text-body-md text-on-surface-variant mt-2">
                  Mockups Instagram, campagnes publicitaires, logos & branding.
                </p>
              </div>
              <a
                className="text-primary font-label-md border-b-2 border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors uppercase tracking-widest"
                href="#contact"
              >
                Demander un devis
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {portfolio
                .filter((p) => p.featured)
                .map((p) => (
                  <div
                    key={p.title}
                    className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] h-[420px] sm:h-[460px] md:h-[520px] shadow-lg"
                    data-reveal
                    data-reveal-delay="100"
                  >
                    <img
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={p.image}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10 text-white">
                      <span className="text-secondary font-label-md mb-2">{p.tag}</span>
                      <h3 className="font-headline text-4xl tracking-tight">{p.title}</h3>
                    </div>
                  </div>
                ))}

              <div className="md:col-span-4 flex flex-col gap-gutter">
                {portfolio
                  .filter((p) => !p.featured)
                  .slice(0, 2)
                  .map((p, index) => (
                    <div
                      key={p.title}
                      className="group relative overflow-hidden rounded-[2.5rem] flex-1 min-h-[238px] shadow-lg"
                      data-reveal
                      data-reveal-delay={200 + index * 100}
                    >
                      <img
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={p.image}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-label-md border border-white px-6 py-2 rounded-full uppercase tracking-widest">
                          VOIR LE PROJET
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-gutter grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {portfolio
                .filter((p) => !p.featured)
                .slice(2)
                .map((p, index) => (
                  <div
                    key={p.title}
                    className="group relative overflow-hidden rounded-[2.5rem] h-[240px] sm:h-[280px] shadow-lg"
                    data-reveal
                    data-reveal-delay={400 + index * 100}
                  >
                    <img
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={p.image}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                      <span className="text-secondary font-label-md mb-2">{p.tag}</span>
                      <h3 className="font-headline text-2xl tracking-tight">{p.title}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-section-padding bg-primary text-white" id="about">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div data-reveal>
                <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-8 leading-tight tracking-tighter">
                  Pourquoi nous faire <span className="text-secondary">confiance</span> ?
                </h2>

                <p className="font-body text-body-lg mb-10 opacity-90 leading-relaxed">
                  Nous ne sommes pas juste une agence, nous sommes votre partenaire de croissance. Notre approche combine créativité sans limite et rigueur analytique pour assurer que chaque dirham investi génère de la valeur.
                </p>

                <ul className="space-y-6">
                  {[
                    {
                      title: 'Stratégie Personnalisée',
                      description:
                        'Pas de solutions "taille unique". Chaque marque est unique et mérite une voix propre.',
                    },
                    {
                      title: 'Focus Résultats',
                      description:
                        'Nous mesurons tout. Si ça ne convertit pas, on optimise jusqu\'à l\'excellence.',
                    },
                  ].map((item, index) => (
                    <li key={item.title} className="flex gap-4 items-start" data-reveal data-reveal-delay={100 + index * 100}>
                      <span className="material-symbols-outlined text-secondary text-3xl">
                        check_circle
                      </span>
                      <div>
                        <h4 className="font-headline text-2xl mb-1 tracking-tight">{item.title}</h4>
                        <p className="opacity-80 text-sm font-body leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-gutter" data-reveal data-reveal-delay="300">
                {[
                  { value: '+50', label: 'Projets', tone: 'secondary' },
                  { value: '+20', label: 'Marques', tone: 'primary', offset: true },
                  { value: '+1M', label: 'Impressions', tone: 'secondary' },
                  { value: '100%', label: 'Passion', tone: 'primary', offset: true },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={classNames(
                      'p-10 bg-white/10 backdrop-blur-md rounded-[2.5rem] border border-white/20 text-center hover:bg-white/20 transition-colors',
                      stat.offset ? 'mt-8' : '',
                    )}
                    data-reveal
                    data-reveal-delay={400 + index * 100}
                  >
                    <p
                      className={classNames(
                        'text-5xl font-headline font-extrabold mb-2 tracking-tighter',
                        stat.tone === 'secondary' ? 'text-secondary' : 'text-secondary',
                      )}
                    >
                      {stat.value}
                    </p>
                    <p className="font-label-md uppercase tracking-widest opacity-80 text-xs">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-section-padding bg-white">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-center mb-16 tracking-tighter" data-reveal>
              Ce que disent nos <span className="text-primary">partenaires</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {testimonials.map((t, index) => (
                <div
                  key={t.name}
                  className={classNames(
                    'p-10 bg-background rounded-[2.5rem] relative border border-transparent transition-all shadow-sm',
                    t.tone === 'secondary' ? 'hover:border-secondary/10' : 'hover:border-primary/10',
                  )}
                  data-reveal
                  data-reveal-delay={index * 100}
                >
                  <span
                    className={classNames(
                      'material-symbols-outlined absolute top-8 right-10 text-7xl',
                      t.tone === 'secondary' ? 'text-secondary/10' : 'text-primary/10',
                    )}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    format_quote
                  </span>
                  <p className="font-body text-on-surface-variant mb-8 leading-relaxed italic">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full overflow-hidden border-2 border-white shadow-md">
                      <img
                        alt={t.name}
                        className="w-full h-full object-cover"
                        src={t.avatar}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-headline text-xl tracking-tight">{t.name}</p>
                      <p className="text-xs opacity-60 font-body">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-section-padding bg-background" id="contact">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-[3.5rem] overflow-hidden shadow-2xl border border-primary/5">
              <div className="p-10 md:p-20" data-reveal>
                <h2 className="font-headline text-4xl mb-8 tracking-tighter">
                  Parlons de votre <span className="text-secondary">projet</span>
                </h2>

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
                        Nom complet
                      </label>
                      <input
                        className="w-full px-6 py-4 bg-background rounded-2xl border-none focus:ring-2 focus:ring-primary/40 placeholder:opacity-40 font-body"
                        placeholder="Votre nom"
                        type="text"
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
                        Email professionnel
                      </label>
                      <input
                        className="w-full px-6 py-4 bg-background rounded-2xl border-none focus:ring-2 focus:ring-primary/40 placeholder:opacity-40 font-body"
                        placeholder="email@exemple.com"
                        type="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
                      Service souhaité
                    </label>
                    <select className="w-full px-6 py-4 bg-background rounded-2xl border-none focus:ring-2 focus:ring-primary/40 text-on-surface-variant font-body">
                      <option>Branding & identité</option>
                      <option>Création de contenu</option>
                      <option>Influence</option>
                      <option>Meta Ads</option>
                      <option>Google Ads</option>
                      <option>SEO</option>
                      <option>Stratégie digitale</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">
                      Votre message
                    </label>
                    <textarea
                      className="w-full px-6 py-4 bg-background rounded-2xl border-none focus:ring-2 focus:ring-primary/40 placeholder:opacity-40 font-body"
                      placeholder="Dites-nous en plus sur vos objectifs..."
                      rows={4}
                    />
                  </div>

                  <button className="w-full py-5 bg-secondary text-white rounded-2xl font-headline text-lg hover:shadow-xl hover:shadow-secondary/30 transition-all active:scale-[0.98] uppercase tracking-widest">
                    Envoyer
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <a
                      className="px-4 py-3 rounded-2xl bg-background hover:bg-primary hover:text-white transition-colors text-center"
                      href="https://wa.me/212600000000"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                    <a
                      className="px-4 py-3 rounded-2xl bg-background hover:bg-primary hover:text-white transition-colors text-center"
                      href="mailto:hello@wedigital.ma"
                    >
                      Email
                    </a>
                    <a
                      className="px-4 py-3 rounded-2xl bg-background hover:bg-primary hover:text-white transition-colors text-center"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Réseaux
                    </a>
                  </div>
                </form>
              </div>

              <div className="relative bg-primary p-10 md:p-20 text-white flex flex-col justify-between" data-reveal data-reveal-delay="200">
                <div>
                  <h3 className="font-headline text-3xl mb-12 tracking-tight">Coordonnées</h3>

                  <div className="space-y-10">
                    <div className="flex gap-6 items-center" data-reveal data-reveal-delay="300">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                        <span className="material-symbols-outlined text-2xl">call</span>
                      </div>
                      <div>
                        <p className="font-label-md text-xs uppercase tracking-widest opacity-60 mb-1">
                          Téléphone
                        </p>
                        <p className="font-headline text-2xl tracking-tight">+212 5XX XX XX XX</p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-center" data-reveal data-reveal-delay="400">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                        <span className="material-symbols-outlined text-2xl">mail</span>
                      </div>
                      <div>
                        <p className="font-label-md text-xs uppercase tracking-widest opacity-60 mb-1">
                          Email
                        </p>
                        <p className="font-headline text-2xl tracking-tight">hello@wedigital.ma</p>
                      </div>
                    </div>

                    <div className="flex gap-6 items-center">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                        <span className="material-symbols-outlined text-2xl">location_on</span>
                      </div>
                      <div>
                        <p className="font-label-md text-xs uppercase tracking-widest opacity-60 mb-1">
                          Adresse
                        </p>
                        <p className="font-headline text-2xl tracking-tight">
                          Bd d'Anfa, Casablanca, Maroc
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 rounded-[2rem] overflow-hidden h-56 w-full bg-white/5 border border-white/10 shadow-lg">
                  <iframe
                    title="Carte — Casablanca"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Casablanca%2C%20Maroc&z=12&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full py-16 md:py-section-padding bg-white border-t border-background" data-reveal>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img alt="We Digital" className="h-8 w-auto object-contain" src="/logo.jpg" />
                <span className="font-headline text-2xl font-extrabold text-primary tracking-tighter">
                  we yan digital
                </span>
              </div>

              <p className="font-body text-body-md text-on-surface-variant max-w-md mb-8 leading-relaxed">
                L’agence digitale qui repousse les limites de la créativité pour les marques
                marocaines ambitieuses. Faites passer votre business au niveau supérieur.
              </p>

              <p className="text-xs font-label-md text-on-surface-variant/60 uppercase tracking-widest">
                © {new Date().getFullYear()} We Digital. Tous droits réservés.
              </p>
            </div>

            <div>
              <h4 className="font-headline text-lg mb-6 text-primary tracking-tight">Explorer</h4>
              <ul className="space-y-4 font-body text-sm">
                <li>
                  <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#work">
                    Nos projets
                  </a>
                </li>
                <li>
                  <a
                    className="text-on-surface-variant hover:text-secondary transition-colors"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-on-surface-variant hover:text-secondary transition-colors"
                    href="#about"
                  >
                    Pourquoi nous
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-headline text-lg mb-6 text-primary tracking-tight">Contact</h4>
              <ul className="space-y-4 font-body text-sm">
                <li>
                  <a className="text-on-surface-variant hover:text-secondary transition-colors" href="mailto:hello@wedigital.ma">
                    hello@wedigital.ma
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant hover:text-secondary transition-colors" href="https://wa.me/212600000000" target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#contact">
                    Formulaire
                  </a>
                </li>
              </ul>

              <div className="mt-10">
                <a
                  className="inline-flex px-6 py-2 bg-primary text-white rounded-full text-xs font-headline font-bold hover:bg-secondary transition-colors shadow-lg shadow-primary/20 uppercase tracking-widest"
                  href="#contact"
                >
                  Contacter l’équipe
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
