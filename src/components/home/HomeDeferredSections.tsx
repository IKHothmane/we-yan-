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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" data-reveal data-reveal-delay="100">
            {[
              {
                icon: 'palette',
                title: 'Branding',
                description: 'Identité visuelle, logo, charte graphique',
                tone: 'primary',
              },
              {
                icon: 'edit_document',
                title: 'Content Creation',
                description: 'Photos, vidéos, reels, copywriting',
                tone: 'secondary',
              },
              {
                icon: 'groups',
                title: 'Community Management',
                description: 'Gestion des réseaux sociaux, engagement',
                tone: 'primary',
              },
              {
                icon: 'campaign',
                title: 'Influence Marketing',
                description: 'Partenariats, collaborations, stratégie',
                tone: 'secondary',
              },
              {
                icon: 'ads_click',
                title: 'Meta Ads',
                description: 'Campagnes publicitaires Facebook & Instagram',
                tone: 'primary',
              },
              {
                icon: 'search',
                title: 'Google Ads & SEO',
                description: 'Publicité Google & référencement naturel',
                tone: 'secondary',
              },
              {
                icon: 'travel_explore',
                title: 'Digital Strategy',
                description: 'Audit, KPIs, plan d’action personnalisé',
                tone: 'primary',
              },
              {
                icon: 'insights',
                title: 'Web Development',
                description: 'Sites web, landing pages, e-commerce',
                tone: 'secondary',
              },
            ].map((service) => (
              <div
                key={service.title}
                className={`p-[clamp(1.25rem,3vw,2rem)] rounded-3xl border border-transparent hover:border-slate-200 transition-all shadow-sm ${
                  service.tone === 'secondary' ? 'bg-slate-50' : 'bg-white'
                }`}
              >
                <div
                  className={`w-[clamp(3rem,7vw,3.5rem)] h-[clamp(3rem,7vw,3.5rem)] rounded-2xl flex items-center justify-center mb-[clamp(1rem,2vw,1.5rem)] ${
                    service.tone === 'secondary' ? 'bg-[#FC9700]/10 text-[#FC9700]' : 'bg-[#6483F0]/10 text-[#6483F0]'
                  }`}
                >
                  <Icon name={service.icon} className="w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)]" />
                </div>
                <h3 className="text-[clamp(1.3rem,3vw,1.5rem)] font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-[clamp(0.92rem,1.8vw,1rem)] leading-relaxed">
                  {service.description}
                </p>
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
