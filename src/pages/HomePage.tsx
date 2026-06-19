import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const svgToDataUri = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`

const avatarImage = (initials: string, bg: string, fg: string) =>
  svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="60" fill="${bg}"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="${fg}">${initials}</text>
</svg>
`)

export default function HomePage() {
  useScrollReveal()

  return (
    <div className="bg-white font-sans text-slate-900 overflow-hidden w-full pb-28 md:pb-32">
      <PageSeo {...pageSeo.home} />
      <style>{`
        @font-face {
          font-family: 'Rigot';
          src: local('Impact'), local('Arial Black');
        }
        .font-rigot {
          font-family: 'Rigot', 'Poppins', sans-serif;
          letter-spacing: -0.02em;
        }
        .hero-bg {
          background-size: cover;
          background-position: center;
        }
        .floating-tag {
          backdrop-filter: blur(8px);
          background-color: rgba(255, 255, 255, 0.9);
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <Navbar variant="hero" />

      <main>
        <section
          className="relative h-[100svh] min-h-[clamp(36rem,85svh,50rem)] flex items-center overflow-hidden hero-bg pt-[clamp(4.5rem,10vw,6rem)]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuCUGg2lUMCMuLVIsmlsCW4VyhcMGcJlUUMl8WKW4sWG7BNt5_6QydR1eLvwRbEAwjtrrx8lrp8w7z9dhh2l7he3JtaFLN9ULabhvNGcyARI2888BuU4mBZSQfh3mymgbuZOHVbRlV89er0sRGIjisA1u6vyKnwh7ksFmJ7-XFz-Td-GcCGNZm1z3s1Sh3-RRqEBCgpSgs6qp4hQoNPUyeyWlfcgk14kDadWrn7If66REaBcklH6wNH6JkyJZmSD8EkpCqH5QuKMRaY)',
          }}
        >
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div
              className="absolute top-[25%] right-[5%] lg:right-[20%] floating-tag flex items-center space-x-3 px-4 lg:px-6 py-2 lg:py-3 rounded-2xl shadow-xl z-10"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#FC9700] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>
              <span className="font-bold text-slate-800 text-sm lg:text-base">Branding</span>
            </div>
            <div
              className="absolute bottom-[25%] right-[8%] lg:right-[30%] floating-tag flex items-center space-x-3 px-4 lg:px-6 py-2 lg:py-3 rounded-2xl shadow-xl z-10"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#FC9700] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>
              <span className="font-bold text-slate-800 text-sm lg:text-base">Ads</span>
            </div>
          </div>
          <div className="container mx-auto px-[clamp(1rem,4vw,1.5rem)] relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-white text-[clamp(3rem,10vw,5.5rem)] font-rigot font-bold leading-[1.05] mb-[clamp(0.75rem,2vw,1rem)]">
                Make it <br /> Different
              </h1>
              <h2 className="text-white text-[clamp(1.65rem,5.4vw,3.125rem)] font-bold mb-[clamp(1.25rem,3vw,2rem)]">
                Votre marque mérite de se <br className="hidden sm:block" />
                <span className="text-[#FC9700]">démarquer.</span>
              </h2>
              <p className="text-gray-300 text-[clamp(1rem,2.2vw,1.25rem)] max-w-xl leading-relaxed mb-[clamp(1.5rem,3vw,2.5rem)]">
                Agence de communication spécialisée en branding, création de contenu, influence marketing
                et publicité digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-[clamp(0.75rem,2vw,1rem)]">
                <Link
                  to="/contact"
                  className="bg-[#FC9700] text-white px-[clamp(1.5rem,4vw,2.5rem)] py-[clamp(0.85rem,2vw,1rem)] rounded-full font-bold text-[clamp(0.95rem,2vw,1.125rem)] hover:scale-105 transition-transform shadow-lg shadow-orange-500/20 text-center"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/projets"
                  className="border-2 border-white/40 text-white px-[clamp(1.5rem,4vw,2.5rem)] py-[clamp(0.85rem,2vw,1rem)] rounded-full font-bold text-[clamp(0.95rem,2vw,1.125rem)] hover:bg-white/10 transition-all text-center"
                >
                  Voir nos projets
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                tone: 'primary'
              },
              {
                icon: 'edit_document',
                title: 'Content Creation',
                description: 'Photos, vidéos, reels, copywriting',
                tone: 'secondary'
              },
              {
                icon: 'groups',
                title: 'Community Management',
                description: 'Gestion des réseaux sociaux, engagement',
                tone: 'primary'
              },
              {
                icon: 'campaign',
                title: 'Influence Marketing',
                description: 'Partenariats, collaborations, stratégie',
                tone: 'secondary'
              },
              {
                icon: 'ads_click',
                title: 'Meta Ads',
                description: 'Campagnes publicitaires Facebook & Instagram',
                tone: 'primary'
              },
              {
                icon: 'search',
                title: 'Google Ads & SEO',
                description: 'Publicité Google & référencement naturel',
                tone: 'secondary'
              },
              {
                icon: 'travel_explore',
                title: 'Digital Strategy',
                description: 'Audit, KPIs, plan d’action personnalisé',
                tone: 'primary'
              },
              {
                icon: 'insights',
                title: 'Web Development',
                description: 'Sites web, landing pages, e-commerce',
                tone: 'secondary'
              }
            ].map((service) => (
              <div
                key={service.title}
                className={`p-[clamp(1.25rem,3vw,2rem)] rounded-3xl border border-transparent hover:border-slate-200 transition-all shadow-sm ${
                  service.tone === 'secondary' ? 'bg-slate-50' : 'bg-white'
                }`}
              >
                <div className={`w-[clamp(3rem,7vw,3.5rem)] h-[clamp(3rem,7vw,3.5rem)] rounded-2xl flex items-center justify-center mb-[clamp(1rem,2vw,1.5rem)] ${
                  service.tone === 'secondary' ? 'bg-[#FC9700]/10 text-[#FC9700]' : 'bg-[#6483F0]/10 text-[#6483F0]'
                }`}>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCepd34wN95r5n4e_lhiduxIU0iHrNCNgms5SOb2IODeq-u11xjUTzKSvArGazGXaqjPp9E7xTBlddBdWFcsG4S9H7PqpcSm5hrvBE_oQBakGPcmPKqauisDaX7lJ6rXAfodzSA2gKQiYcUtd9BknfGfMpL4LIl0j94vFKizBjrvQiYM_Ilo310QtQo2FUuUvIFp1KoeUqmH272vV_djgoJOigNU0VFBcf34X3idF902-qY5r6_KsZqpSEdQMFghjiISWkvNg9U-90"
                loading="lazy"
                width={1000}
                height={600}
              />
            </div>
            <div className="flex flex-col gap-8">
              <img
                alt="Studio créatif moderne"
                className="w-full rounded-3xl shadow-xl aspect-[4/3] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoyweO0W1tSPc9TY2gaGIFiQnphBk-4ifHQ5Uj3iJFRMM00UkN6RvqaZlC2VaIzv2DoclwUoZ75EmYMuIhzkqb_uITBiQzrdBIiTBeihveVqJvrYVKijR8wfBy9udPRqB6mLWZDo69ZdQe-W5sQacP4mO1XWjObIXmT07Ch02TkXlhzJ3nDzrJcyybQb-MLYNFB0Vb45XU4UYMPfzGOL3c36MCYnNozyNsWPnpDXDw7zXDF8BTTaJ2ZATw4KELVbyku6otdfp1mCM"
                loading="lazy"
                width={500}
                height={380}
              />
              <img
                alt="Dashboard marketing premium"
                className="w-full rounded-3xl shadow-xl aspect-[4/3] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZFPeUiKo7rq9WDfSKxtmL9IzQSt7jcAImesKMUycpZzcdbQrAimuU6v4h6cuuTHIfaa8gkHqokRRf95qNTIXjczQe6DAw-Vvk54y0K8w8sZ9G2_HB02T7ao89l0dEVw6__94ndgRxL4nny8gGbHr1ZoGvq8FRM6W6a8lIeKfDfk0YBG9BwSnzacRK-6FcKkvWVoP47GasDzqqU32wVQ65K0PlIqP1oBtoduyE0b1TxkF04QKVEUX-4vtxo7zaihQpSnsVzAmnEv4"
                loading="lazy"
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
                quote: 'Leur équipe a su capturer l\'essence de notre marque dès le premier jour. Résultats incroyables !',
                author: 'Sara Benani',
                role: 'Lux Moroccan Decor',
                avatar: avatarImage('SB', '#FC9700', '#0F172A')
              },
              {
                quote: 'Collaboration parfaite. Nos ventes ont augmenté de 180% en 6 mois grâce à leur stratégie social media.',
                author: 'Mehdi Alaoui',
                role: 'CEO, TechNova Morocco',
                avatar: avatarImage('MA', '#6483F0', '#FFFFFF')
              },
              {
                quote: 'Leur branding est exceptionnel. On nous reconnaît immédiatement dans la rue. Retour client phénoménal.',
                author: 'Ines Tazi',
                role: 'Marketing, GreenFlow',
                avatar: avatarImage('IT', '#0F172A', '#FFFFFF')
              }
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
                    <img
                      alt={t.author}
                      className="w-full h-full object-cover"
                      src={t.avatar}
                      loading="lazy"
                    />
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
      </main>

      <SiteFooter />
    </div>
  )
}
