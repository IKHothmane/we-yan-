import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import useScrollReveal from '../hooks/useScrollReveal'

export default function HomePage() {
  useScrollReveal()

  return (
    <div className="bg-white font-sans text-slate-900 overflow-hidden w-full">
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

      <Navbar />

      <main>
        <section
          className="relative h-screen min-h-[800px] flex items-center overflow-hidden hero-bg pt-24"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.92) 45%, rgba(252, 151, 0, 0.18) 100%), radial-gradient(circle at 30% 20%, rgba(100, 131, 240, 0.35), transparent 55%), radial-gradient(circle at 70% 60%, rgba(252, 151, 0, 0.22), transparent 50%)',
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-[25%] right-[20%] floating-tag flex items-center space-x-3 px-6 py-3 rounded-2xl shadow-xl z-10"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-6 h-6 bg-[#FC9700] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>
              <span className="font-bold text-slate-800">Branding</span>
            </div>
            <div
              className="absolute bottom-[25%] right-[30%] floating-tag flex items-center space-x-3 px-6 py-3 rounded-2xl shadow-xl z-10"
              style={{ animationDelay: '1s' }}
            >
              <div className="w-6 h-6 bg-[#FC9700] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>
              <span className="font-bold text-slate-800">Ads</span>
            </div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-white text-6xl md:text-8xl font-rigot font-bold leading-tight mb-4">
                Make it <br /> Different
              </h1>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
                Votre marque mérite de se <br />
                <span className="text-[#FC9700]">démarquer.</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                Agence de communication spécialisée en branding, création de contenu, influence marketing
                et publicité digitale.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-[#FC9700] text-[#0F172A] px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-orange-500/20 text-center"
                >
                  Demander un devis
                </Link>
                <Link
                  to="/projets"
                  className="border-2 border-white/40 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center"
                >
                  Voir nos projets
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-white" id="services">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16" data-reveal>
            <h2 className="font-bold text-3xl md:text-5xl text-slate-900 mb-4">
              Nos Solutions <span className="text-[#6483F0]">Digitales</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Nous avons ce qu'il vous faut, de la création de logo à la campagne publicitaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal data-reveal-delay="100">
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
                className={`p-8 rounded-3xl border border-transparent hover:border-slate-200 transition-all shadow-sm ${
                  service.tone === 'secondary' ? 'bg-slate-50' : 'bg-white'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.tone === 'secondary' ? 'bg-[#FC9700]/10 text-[#FC9700]' : 'bg-[#6483F0]/10 text-[#6483F0]'
                }`}>
                  <Icon name={service.icon} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

        <section className="py-20 md:py-32 bg-slate-50" id="work">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" data-reveal>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Impact <span className="text-[#FC9700]">Visuel</span>
              </h2>
              <p className="text-slate-600 mt-2 text-lg">
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
              <div
                role="img"
                aria-label="Aperçu projet"
                className="w-full rounded-3xl shadow-xl aspect-[16/10] md:aspect-[16/9] bg-gradient-to-br from-[#FC9700]/15 via-white to-[#6483F0]/15 border border-slate-200 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(252,151,0,0.25),_transparent_55%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(100,131,240,0.22),_transparent_55%)]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl px-6 py-4 shadow-lg flex items-center gap-4">
                    <span className="w-12 h-12 rounded-2xl brand-gradient" aria-hidden="true" />
                    <div className="text-left">
                      <p className="font-bold text-slate-900 leading-tight">Portfolio</p>
                      <p className="text-sm text-slate-600">Aperçu de nos réalisations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div
                role="img"
                aria-label="Aperçu studio"
                className="w-full rounded-3xl shadow-xl aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-[#FC9700]/10 border border-slate-200 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(100,131,240,0.18),_transparent_55%)]"></div>
              </div>
              <div
                role="img"
                aria-label="Aperçu dashboard"
                className="w-full rounded-3xl shadow-xl aspect-[4/3] bg-gradient-to-br from-slate-100 via-white to-[#6483F0]/10 border border-slate-200 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,_rgba(252,151,0,0.16),_transparent_55%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="py-20 md:py-32 bg-[#0F172A] text-white" id="about">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div data-reveal>
            <h2 className="font-bold text-3xl md:text-5xl mb-8 leading-tight">
              Pourquoi nous faire <span className="text-[#FC9700]">confiance</span> ?
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Nous ne sommes pas juste une agence, nous sommes votre partenaire de croissance. Notre approche combine créativité sans limite et rigueur analytique pour assurer que chaque dirham investi génère de la valeur.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Icon name="circle" className="w-6 h-6 text-[#FC9700]" />
                <div>
                  <h3 className="text-2xl font-bold mb-1">Stratégie Personnalisée</h3>
                  <p className="text-slate-400 text-sm">
                    Pas de solutions "taille unique". Chaque marque est unique et mérite une voix propre.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Icon name="circle" className="w-6 h-6 text-[#FC9700]" />
                <div>
                  <h3 className="text-2xl font-bold mb-1">Focus Résultats</h3>
                  <p className="text-slate-400 text-sm">
                    Nous mesurons tout. Si ça ne convertit pas, on optimise jusqu'à l'excellence.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6" data-reveal data-reveal-delay="100">
            <div className="p-8 bg-white rounded-3xl text-center shadow-xl">
              <p className="text-5xl font-bold text-slate-900 mb-2">+50</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Projets</p>
            </div>
            <div className="p-8 bg-white rounded-3xl text-center shadow-xl mt-8">
              <p className="text-5xl font-bold text-slate-900 mb-2">+20</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Marques</p>
            </div>
            <div className="p-8 bg-white rounded-3xl text-center shadow-xl">
              <p className="text-5xl font-bold text-slate-900 mb-2">+1M</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Impressions</p>
            </div>
            <div className="p-8 bg-white rounded-3xl text-center shadow-xl mt-8">
              <p className="text-5xl font-bold text-slate-900 mb-2">100%</p>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Passion</p>
            </div>
          </div>
        </div>
      </section>

        <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-center text-3xl md:text-5xl font-bold text-slate-900 mb-16" data-reveal>
            Ce que disent nos <span className="text-[#6483F0]">partenaires</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-reveal data-reveal-delay="100">
            {[
              {
                quote: 'Leur équipe a su capturer l\'essence de notre marque dès le premier jour. Résultats incroyables !',
                author: 'Sara Benani',
                role: 'Lux Moroccan Decor',
                avatar: 'https://i.pravatar.cc/150?img=32'
              },
              {
                quote: 'Collaboration parfaite. Nos ventes ont augmenté de 180% en 6 mois grâce à leur stratégie social media.',
                author: 'Mehdi Alaoui',
                role: 'CEO, TechNova Morocco',
                avatar: 'https://i.pravatar.cc/150?img=33'
              },
              {
                quote: 'Leur branding est exceptionnel. On nous reconnaît immédiatement dans la rue. Retour client phénoménal.',
                author: 'Ines Tazi',
                role: 'Marketing, GreenFlow',
                avatar: 'https://i.pravatar.cc/150?img=34'
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

        <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
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
                    <p className="text-lg font-semibold">Bd d'Anfa, Casablanca, Morocco</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 rounded-2xl overflow-hidden">
                <div
                  role="img"
                  aria-label="Localisation Casablanca"
                  className="w-full h-64 bg-gradient-to-br from-slate-900 via-[#0F172A] to-slate-800 relative"
                >
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,_rgba(252,151,0,0.35),_transparent_50%)]"></div>
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_75%_60%,_rgba(100,131,240,0.3),_transparent_55%)]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-3">
                      <Icon name="location_on" className="w-6 h-6 text-[#FC9700]" />
                      <span className="text-white font-semibold">Casablanca</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </main>

      <footer className="w-full py-16 bg-[#0F172A] text-white border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span
                aria-hidden="true"
                className="w-12 h-12 rounded-full bg-[#FC9700] shadow-[0_10px_30px_-10px_rgba(252,151,0,0.7)]"
              />
              <span className="text-2xl font-extrabold">
                we yan digital
              </span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Agence digitale marocaine qui transforme les marques avec créativité et stratégie.
            </p>
            <p className="text-xs text-slate-300 uppercase tracking-widest">
              © {new Date().getFullYear()} we yan digital. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Explorer</h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/projets">
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/agence">
                  Notre Agence
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Légal</h4>
            <ul className="space-y-4">
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/contact">
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/contact">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/contact">
                  Contactez-nous
                </Link>
              </li>
            </ul>
            <div className="mt-10">
              <Link
                className="inline-flex px-6 py-2 bg-[#FC9700] text-[#0F172A] rounded-full text-xs font-bold hover:brightness-110 transition-all shadow-lg uppercase tracking-widest"
                to="/contact"
              >
                COMMENCER MAINTENANT
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
