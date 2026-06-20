import { Link } from 'react-router-dom'
import Icon from '../Icon'
import SiteFooter from '../SiteFooter'
import useScrollReveal from '../../hooks/useScrollReveal'

const svgToDataUri = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

const avatarImage = (initials: string, bg: string, fg: string) =>
  svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="60" fill="${bg}"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="${fg}">${initials}</text>
</svg>
`)

const homeImages = {
  branding: '/images/home/branding.webp?v=20260619',
  studio: '/images/home/studio.webp?v=20260619',
  dashboard: '/images/home/dashboard.webp?v=20260619',
}

const solutionsCardsBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA26cTrzHWhr1lAl33fd3Ki70zwSUi4OF6NjvcmIZ76Ga7-B-FjhQoLQtGZcbTdkiBFBnDeDM5_JRbgc_X94ePyxv64rKgjS7XfUkwJuIMzIENhqM1PpaK7RoethVHVm8di6c_IbAx7F-BB6NczMfoLzkMUeRiJ_K_cjdVe0s3vP6gWa8PXNUBIy5mhVNAtHC7--WgbqpaXlN1mq7vEhIVL9FZQN8rWrTrYlU634k6EKU8XO-Rm8y-Hu66NwWKW2iAryuhp5f9Z7lM'

const services = [
  {
    icon: 'palette',
    title: 'Branding',
    description: 'Identité visuelle, logo, charte graphique',
    tone: 'primary',
    layoutClassName: 'min-h-[250px] md:min-h-[280px] lg:min-h-[300px]',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20branding%20identity%20moodboard%2C%20logo%20sketches%2C%20elegant%20stationery%2C%20orange%20and%20periwinkle%20accents%2C%20realistic%20studio%20scene%2C%20editorial%20lighting&image_size=portrait_4_3',
  },
  {
    icon: 'edit_document',
    title: 'Content Creation',
    description: 'Photos, vidéos, reels, copywriting',
    tone: 'secondary',
    layoutClassName: 'min-h-[290px] md:min-h-[330px] md:mt-10 lg:mt-16',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20content%20creation%20studio%2C%20camera%2C%20reels%20storyboard%2C%20softbox%20lights%2C%20stylish%20set%20design%2C%20orange%20and%20periwinkle%20accents%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'groups',
    title: 'Community Management',
    description: 'Gestion des réseaux sociaux, engagement',
    tone: 'primary',
    layoutClassName: 'min-h-[265px] md:min-h-[300px] lg:-mt-4',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=social%20media%20community%20management%20dashboard%2C%20smartphone%20feed%2C%20engagement%20notifications%2C%20premium%20marketing%20workspace%2C%20orange%20and%20periwinkle%20brand%20palette%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'campaign',
    title: 'Influence Marketing',
    description: 'Partenariats, collaborations, stratégie',
    tone: 'secondary',
    layoutClassName: 'min-h-[310px] md:min-h-[350px] md:mt-14 lg:mt-24',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=influencer%20marketing%20campaign%20planning%2C%20creator%20collaboration%20meeting%2C%20premium%20brand%20partnership%20scene%2C%20stylish%20studio%2C%20orange%20and%20periwinkle%20accents%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'ads_click',
    title: 'Meta Ads',
    description: 'Campagnes publicitaires Facebook & Instagram',
    tone: 'primary',
    layoutClassName: 'min-h-[275px] md:min-h-[310px] md:-mt-4 lg:-mt-10',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=facebook%20instagram%20ads%20dashboard%20on%20laptop%2C%20paid%20campaign%20analytics%2C%20premium%20digital%20marketing%20workspace%2C%20orange%20and%20periwinkle%20highlights%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'search',
    title: 'Google Ads & SEO',
    description: 'Publicité Google & référencement naturel',
    tone: 'secondary',
    layoutClassName: 'min-h-[305px] md:min-h-[340px] md:mt-8 lg:mt-14',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=google%20ads%20and%20seo%20analytics%20dashboard%2C%20search%20ranking%20charts%2C%20premium%20laptop%20workspace%2C%20orange%20and%20periwinkle%20brand%20palette%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'travel_explore',
    title: 'Digital Strategy',
    description: 'Audit, KPIs, plan d’action personnalisé',
    tone: 'primary',
    layoutClassName: 'min-h-[255px] md:min-h-[295px] lg:-mt-6',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=digital%20strategy%20planning%20board%2C%20KPI%20dashboard%2C%20premium%20business%20workshop%2C%20agency%20desk%2C%20orange%20and%20periwinkle%20accents%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'insights',
    title: 'Web Development',
    description: 'Sites web, landing pages, e-commerce',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[345px] md:mt-12 lg:mt-20',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20web%20development%20workspace%2C%20large%20monitor%20with%20website%20wireframe%2C%20code%20editor%2C%20ecommerce%20mockup%2C%20orange%20and%20periwinkle%20accents%2C%20realistic&image_size=portrait_4_3',
  },
] as const

export default function HomeDeferredSections() {
  useScrollReveal()

  return (
    <>
      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-white" id="services">
        <div className="max-w-6xl mx-auto px-[clamp(1rem,4vw,2rem)]">
          <div className="text-center mb-[clamp(2.5rem,6vw,4rem)]" data-reveal>
            <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] text-slate-900 mb-4">
              Nos Solutions <span className="text-[#6483F0]">Digitales</span>
            </h2>
            <p className="text-slate-600 text-[clamp(1rem,2.3vw,1.125rem)] max-w-2xl mx-auto">
              Nous avons ce qu'il vous faut, de la création de logo à la campagne publicitaire.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" data-reveal data-reveal-delay="100">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative flex overflow-hidden rounded-3xl border border-white/15 p-[clamp(1.25rem,3vw,2rem)] text-white shadow-[0_14px_40px_-16px_rgba(15,23,42,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.7)] ${service.layoutClassName}`}
              >
                <div
                  className="absolute inset-0 scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage:
                      service.tone === 'secondary'
                        ? `linear-gradient(135deg, rgba(252, 151, 0, 0.32), rgba(15, 23, 42, 0.82)), url(${solutionsCardsBackground})`
                        : `linear-gradient(135deg, rgba(100, 131, 240, 0.34), rgba(15, 23, 42, 0.82)), url(${solutionsCardsBackground})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 scale-105 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.18), rgba(15, 23, 42, 0.7)), url(${service.image || solutionsCardsBackground})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />
                <div className="relative z-10 flex min-h-full flex-col justify-end">
                <div
                  className={`w-[clamp(3rem,7vw,3.5rem)] h-[clamp(3rem,7vw,3.5rem)] rounded-2xl flex items-center justify-center mb-[clamp(1rem,2vw,1.5rem)] backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/25 ${
                    service.tone === 'secondary' ? 'bg-[#FC9700]/20 text-white' : 'bg-[#6483F0]/20 text-white'
                  }`}
                >
                  <Icon name={service.icon} className="w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
                </div>
                <h3 className="text-[clamp(1.3rem,3vw,1.5rem)] font-bold text-white mb-3 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                  {service.title}
                </h3>
                <p className="text-white/85 text-[clamp(0.92rem,1.8vw,1rem)] leading-relaxed transition-all duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                  {service.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-slate-50" id="work">
        <div className="max-w-6xl mx-auto px-[clamp(1rem,4vw,2rem)]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[clamp(2rem,5vw,3rem)] gap-6" data-reveal>
            <div>
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 tracking-tight">
                Impact <span className="text-[#FC9700]">Visuel</span>
              </h2>
              <p className="text-slate-600 mt-2 text-[clamp(1rem,2.3vw,1.125rem)]">
                Découvrez nos créations pour nos partenaires
              </p>
            </div>
            <Link
              to="/projets"
              className="text-[#6483F0] font-bold border-b-2 border-[#6483F0] pb-1 hover:text-[#FC9700] hover:border-[#FC9700] transition-colors uppercase tracking-widest"
            >
              Voir nos projets
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal data-reveal-delay="100">
            <div className="lg:col-span-2">
              <img
                alt="Aperçu projet branding premium"
                className="w-full rounded-3xl shadow-xl aspect-[16/10] md:aspect-[16/9] object-cover"
                src={homeImages.branding}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 66vw, 100vw"
                width={1000}
                height={600}
              />
            </div>
            <div className="flex flex-col gap-8">
              <img
                alt="Studio créatif moderne"
                className="w-full rounded-3xl shadow-xl aspect-[4/3] object-cover"
                src={homeImages.studio}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 28vw, (min-width: 768px) 50vw, 100vw"
                width={500}
                height={380}
              />
              <img
                alt="Dashboard marketing premium"
                className="w-full rounded-3xl shadow-xl aspect-[4/3] object-cover"
                src={homeImages.dashboard}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 28vw, (min-width: 768px) 50vw, 100vw"
                width={500}
                height={380}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-[#0F172A] text-white" id="about">
        <div className="max-w-6xl mx-auto px-[clamp(1rem,4vw,2rem)] grid md:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-center">
          <div data-reveal>
            <h2 className="font-bold text-[clamp(2rem,5vw,3rem)] mb-[clamp(1.5rem,4vw,2rem)] leading-tight">
              Pourquoi nous faire <span className="text-[#FC9700]">confiance</span> ?
            </h2>
            <p className="text-slate-300 text-[clamp(1rem,2.3vw,1.125rem)] mb-[clamp(1.5rem,4vw,2.5rem)] leading-relaxed">
              Nous ne sommes pas juste une agence, nous sommes votre partenaire de croissance. Notre approche combine créativité sans limite et rigueur analytique pour assurer que chaque dirham investi génère de la valeur.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Icon name="circle" className="w-5 h-5 md:w-6 md:h-6 text-[#FC9700] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[clamp(1.2rem,3vw,1.5rem)] font-bold mb-1">Stratégie Personnalisée</h3>
                  <p className="text-slate-400 text-sm">
                    Pas de solutions "taille unique". Chaque marque est unique et mérite une voix propre.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Icon name="circle" className="w-5 h-5 md:w-6 md:h-6 text-[#FC9700] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[clamp(1.2rem,3vw,1.5rem)] font-bold mb-1">Focus Résultats</h3>
                  <p className="text-slate-400 text-sm">
                    Nous mesurons tout. Si ça ne convertit pas, on optimise jusqu'à l'excellence.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6" data-reveal data-reveal-delay="100">
            <div className="p-6 md:p-8 bg-white rounded-3xl text-center shadow-xl">
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-2">+50</p>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Projets</p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-3xl text-center shadow-xl mt-4 md:mt-8">
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-2">+20</p>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Marques</p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-3xl text-center shadow-xl">
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-2">+1M</p>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Impressions</p>
            </div>
            <div className="p-6 md:p-8 bg-white rounded-3xl text-center shadow-xl mt-4 md:mt-8">
              <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-2">100%</p>
              <p className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider">Passion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-white">
        <div className="max-w-6xl mx-auto px-[clamp(1rem,4vw,2rem)]">
          <h2 className="text-center text-[clamp(2rem,5vw,3rem)] font-bold text-slate-900 mb-[clamp(2.5rem,6vw,4rem)]" data-reveal>
            Ce que disent nos <span className="text-[#6483F0]">partenaires</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal data-reveal-delay="100">
            {[
              {
                quote: "Leur équipe a su capturer l'essence de notre marque dès le premier jour. Résultats incroyables !",
                author: 'Sara Benani',
                role: 'Lux Moroccan Decor',
                avatar: avatarImage('SB', '#FC9700', '#0F172A'),
              },
              {
                quote: 'Collaboration parfaite. Nos ventes ont augmenté de 180% en 6 mois grâce à leur stratégie social media.',
                author: 'Mehdi Alaoui',
                role: 'CEO, TechNova Morocco',
                avatar: avatarImage('MA', '#6483F0', '#FFFFFF'),
              },
              {
                quote: 'Leur branding est exceptionnel. On nous reconnaît immédiatement dans la rue. Retour client phénoménal.',
                author: 'Ines Tazi',
                role: 'Marketing, GreenFlow',
                avatar: avatarImage('IT', '#0F172A', '#FFFFFF'),
              },
            ].map((t) => (
              <div
                key={t.author}
                className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-slate-200 transition-all"
              >
                <p className="text-slate-600 mb-8 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img alt={t.author} className="w-full h-full object-cover" src={t.avatar} loading="lazy" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,9vw,8rem)] bg-slate-50">
        <div className="max-w-6xl mx-auto px-[clamp(1rem,4vw,2rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-3xl shadow-2xl">
            <div className="p-12 bg-white" data-reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Parlons de <span className="text-[#FC9700]">votre Projet</span>
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="home-contact-name">
                    Nom complet
                  </label>
                  <input
                    id="home-contact-name"
                    name="name"
                    type="text"
                    className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:border-[#FC9700]"
                    placeholder="Ex: Amine Benali"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="home-contact-email">
                    Adresse email
                  </label>
                  <input
                    id="home-contact-email"
                    name="email"
                    type="email"
                    className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:border-[#FC9700]"
                    placeholder="Ex: amine@exemple.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="home-contact-service">
                    Service souhaité
                  </label>
                  <select
                    id="home-contact-service"
                    name="service"
                    className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:border-[#FC9700] bg-white"
                  >
                    <option>Branding</option>
                    <option>Social Media</option>
                    <option>Publicité</option>
                    <option>Web Development</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700" htmlFor="home-contact-message">
                    Votre message
                  </label>
                  <textarea
                    id="home-contact-message"
                    name="message"
                    className="w-full border border-slate-300 rounded-lg p-4 focus:outline-none focus:border-[#FC9700] resize-none"
                    rows={4}
                    placeholder="Parlez-nous de vos objectifs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FC9700] text-[#0F172A] py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all"
                >
                  ENVOYER LE MESSAGE
                </button>
              </form>
            </div>
            <div className="p-12 bg-[#0F172A] text-white" data-reveal data-reveal-delay="100">
              <h3 className="text-2xl font-bold mb-8">Coordonnées</h3>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Icon name="phone" className="w-8 h-8 text-[#FC9700]" />
                  <div>
                    <p className="text-sm text-slate-400">Téléphone</p>
                    <p className="text-lg font-semibold">+212 6XX XXX XX XX</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="mail" className="w-8 h-8 text-[#FC9700]" />
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-lg font-semibold">hello@wedigital.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="location_on" className="w-8 h-8 text-[#FC9700]" />
                  <div>
                    <p className="text-sm text-slate-400">Adresse</p>
                    <p className="text-lg font-semibold">HAY HASSANI BLOC 5 N° 58, Casablanca 20200</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 rounded-2xl overflow-hidden">
                <iframe
                  title="Carte OpenStreetMap - HAY HASSANI BLOC 5 N° 58, Casablanca 20200"
                  className="w-full h-64 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-7.6878725%2C33.5608827%2C-7.6678725%2C33.5808827&layer=mapnik&marker=33.5708827%2C-7.6778725"
                />
              </div>
              <a
                href="https://www.openstreetmap.org/?mlat=33.5708827&mlon=-7.6778725#map=16/33.5708827/-7.6778725"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FC9700] hover:text-white transition-colors"
              >
                <Icon name="location_on" className="w-4 h-4" />
                Ouvrir dans OpenStreetMap
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[clamp(3.5rem,8vw,5rem)] bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-[clamp(1rem,4vw,2rem)]" data-reveal>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-[clamp(1.5rem,4vw,3rem)]">
            <p className="text-[clamp(0.78rem,1.6vw,0.85rem)] font-bold uppercase tracking-[0.25em] text-[#6483F0] mb-4">
              We Yan Digital
            </p>
            <h2 className="text-[clamp(1.8rem,4.5vw,2.6rem)] font-bold text-slate-900 leading-tight mb-5">
              We Yan Digital, agence digitale marocaine pour les marques qui veulent se demarquer
            </h2>
            <div className="space-y-4 text-slate-600 text-[clamp(1rem,2.1vw,1.08rem)] leading-relaxed">
              <p>
                We Yan Digital accompagne les entreprises, commerces et marques qui cherchent une agence digitale au Maroc capable de combiner strategie, creativite et execution. Si vos clients recherchent We Yan, We Yan Digital ou une agence de communication a Casablanca, cette plateforme presente notre expertise en branding, publicite digitale, creation de contenu et developpement web.
              </p>
              <p>
                Notre mission est simple : aider chaque marque a construire une presence forte sur Google, sur les reseaux sociaux et sur le web avec une approche claire, mesurable et orientee resultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
