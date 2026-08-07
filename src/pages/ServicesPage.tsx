import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'

const solutionsCardsBackground =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA26cTrzHWhr1lAl33fd3Ki70zwSUi4OF6NjvcmIZ76Ga7-B-FjhQoLQtGZcbTdkiBFBnDeDM5_JRbgc_X94ePyxv64rKgjS7XfUkwJuIMzIENhqM1PpaK7RoethVHVm8di6c_IbAx7F-BB6NczMfoLzkMUeRiJ_K_cjdVe0s3vP6gWa8PXNUBIy5mhVNAtHC7--WgbqpaXlN1mq7vEhIVL9FZQN8rWrTrYlU634k6EKU8XO-Rm8y-Hu66NwWKW2iAryuhp5f9Z7lM'

const services = [
  {
    icon: 'travel_explore',
    title: 'Stratégie Marketing & Rebranding',
    description: 'Positionnement, relance de marque et plan d’action pour accélérer votre croissance.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/strategie-marketing-rebranding',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20marketing%20strategy%20and%20rebranding%20workshop%2C%20brand%20board%2C%20positioning%20notes%2C%20creative%20agency%20desk%2C%20orange%20and%20periwinkle%20palette%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'edit_document',
    title: 'Création de Contenu & Community Management',
    description: 'Photos, vidéos, reels et gestion quotidienne de vos réseaux sociaux.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/creation-contenu-community-management',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=premium%20content%20creation%20studio%2C%20camera%2C%20reels%20storyboard%2C%20softbox%20lights%2C%20stylish%20set%20design%2C%20orange%20and%20periwinkle%20accents%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'ads_click',
    title: 'Publicité Digitale (Meta Ads & Google Ads)',
    description: 'Campagnes sponsorisées pour générer trafic, leads et ventes qualifiées.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/publicite-digitale',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=meta%20ads%20and%20google%20ads%20dashboard%2C%20performance%20campaign%20charts%2C%20premium%20digital%20marketing%20workspace%2C%20orange%20and%20periwinkle%20palette%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'search',
    title: 'Référencement Naturel (SEO)',
    description: 'Optimisation SEO pour améliorer votre visibilité Google sur le long terme.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/seo',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=seo%20search%20ranking%20dashboard%2C%20organic%20traffic%20analytics%2C%20premium%20laptop%20workspace%2C%20orange%20and%20periwinkle%20brand%20palette%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'campaign',
    title: 'Marketing d’Influence',
    description: 'Collaborez avec les bons créateurs pour amplifier votre marque.',
    tone: 'primary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px]',
    to: '/services/marketing-influence',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=influencer%20marketing%20campaign%20planning%2C%20creator%20collaboration%20meeting%2C%20premium%20brand%20partnership%20scene%2C%20stylish%20studio%2C%20orange%20and%20periwinkle%20accents%2C%20realistic&image_size=portrait_4_3',
  },
  {
    icon: 'palette',
    title: 'Média Publicité Offline',
    description: 'Affichage, print et supports publicitaires pour renforcer votre présence terrain.',
    tone: 'secondary',
    layoutClassName: 'min-h-[300px] md:min-h-[320px] md:mt-16 lg:mt-20',
    to: '/services/media-publicite-offline',
    image:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=offline%20advertising%20media%20mockups%2C%20billboard%2C%20flyer%2C%20poster%20and%20print%20campaign%2C%20premium%20branding%20presentation%2C%20orange%20and%20periwinkle%20palette%2C%20realistic&image_size=portrait_4_3',
  },
] as const

function ServiceCard({
  title,
  description,
  icon,
  tone,
  layoutClassName,
  to,
  image,
  delay,
}: (typeof services)[number] & { delay: number }) {
  const cardClasses = `group relative isolate flex overflow-hidden rounded-3xl border border-white/15 p-[clamp(1.25rem,3vw,2rem)] text-white shadow-[0_14px_40px_-16px_rgba(15,23,42,0.55)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(15,23,42,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 ${layoutClassName}`
  const toneGradient =
    tone === 'secondary'
      ? 'bg-[linear-gradient(135deg,rgba(252,151,0,0.32),rgba(15,23,42,0.82))]'
      : 'bg-[linear-gradient(135deg,rgba(100,131,240,0.34),rgba(15,23,42,0.82))]'

  return (
    <Link
      to={to}
      aria-label={`Découvrir ${title}`}
      className={cardClasses}
      data-reveal
      data-reveal-delay={String(delay)}
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full rounded-[inherit] object-cover opacity-95"
        src={solutionsCardsBackground}
        loading="lazy"
        decoding="async"
      />
      <div className={`absolute inset-0 rounded-[inherit] ${toneGradient}`} />
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full rounded-[inherit] scale-105 transform-gpu object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
        src={image}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 rounded-[inherit] bg-slate-950/20 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
      <div className="absolute inset-0 rounded-[inherit] bg-white/0 transition-colors duration-500 group-hover:bg-white/5" />
      <div className="relative z-10 flex min-h-full flex-col justify-end">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-white backdrop-blur-sm">
          <Icon name={icon} className="text-[1.7rem] leading-none" />
        </div>
        <h3 className="mb-2 text-[clamp(1.3rem,3vw,1.5rem)] font-bold text-white transition-all duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          {title}
        </h3>
        <p className="text-white/85 text-[clamp(0.92rem,1.8vw,1rem)] leading-relaxed transition-all duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-white/90">
          Explorer
          <Icon name="arrow_forward" className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen overflow-hidden bg-[#f9f9f9] text-slate-900">
      <PageSeo {...pageSeo.services} />
      <Navbar />

      <main className="relative overflow-hidden pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-[6%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(167,199,231,0.42)_0%,rgba(167,199,231,0.1)_36%,transparent_70%)]" />
          <div className="absolute bottom-[8%] right-[6%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(254,94,30,0.16)_0%,rgba(254,94,30,0.08)_28%,transparent_68%)]" />
        </div>

        <section className="w-full flex flex-col items-center px-6 pb-10 text-center sm:px-8 lg:pb-14 pt-20">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] mb-8"
            style={{ backgroundColor: '#EEF2FF', color: '#4338CA', borderColor: '#C7D2FE' }}
            data-reveal
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            We Yan Digital · Agence digitale basée à Casablanca, Maarif
          </span>
          <h1
            className="max-w-5xl break-words text-[clamp(2rem,7.5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] text-slate-900 sm:tracking-[-0.05em]"
            data-reveal
          >
            Agence digitale à <span className="italic" style={{ color: '#FC9700' }}>Casablanca</span>
            <br />
            <span style={{ color: '#6483F0' }}>Services</span> SEO, Site Web, Branding & Ads
          </h1>
          <div
            className="mt-8 max-w-3xl text-[clamp(0.95rem,2vw,1.15rem)] leading-8 text-slate-600 space-y-4"
            data-reveal
            data-reveal-delay="100"
          >
            <p>
              Nous accompagnons <strong className="font-semibold text-slate-800">startups, PME et grands comptes</strong> sur tout le territoire marocain (Casablanca, Rabat, Marrakech, Tanger, Fès…) et à l’international, pour transformer leur présence digitale en un véritable <em>levier de croissance business</em>.
            </p>
            <p>
              Nos équipes maîtrisent aussi bien le <strong>référencement naturel SEO local</strong> sur des requêtes comme « agence digitale près de Casablanca », « SEO Maroc » ou « community management Casablanca », que les campagnes <strong>SEA Google Ads, Meta Ads et TikTok Ads</strong> qui génèrent des leads dès la première semaine. Notre promesse : <strong className="font-semibold">une stratégie sur-mesure, zéro pack standard, des résultats mesurables</strong> chaque mois.
            </p>
          </div>

          {/* Image avec ALT obligatoire pour le SEO */}
          <figure
            className="mt-14 w-full max-w-[980px] rounded-[1.75rem] overflow-hidden border border-slate-200 shadow-[0_30px_70px_-28px_rgba(15,23,42,0.4)]"
            data-reveal
            data-reveal-delay="180"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA26cTrzHWhr1lAl33fd3Ki70zwSUi4OF6NjvcmIZ76Ga7-B-FjhQoLQtGZcbTdkiBFBnDeDM5_JRbgc_X94ePyxv64rKgjS7XfUkwJuIMzIENhqM1PpaK7RoethVHVm8di6c_IbAx7F-BB6NczMfoLzkMUeRiJ_K_cjdVe0s3vP6gWa8PXNUBIy5mhVNAtHC7--WgbqpaXlN1mq7vEhIVL9FZQN8rWrTrYlU634k6EKU8XO-Rm8y-Hu66NwWKW2iAryuhp5f9Z7lM"
              alt="Agence digitale We Yan Digital à Casablanca - Équipe réunion stratégie marketing Maroc SEO site web branding publicité"
              className="w-full h-auto object-cover block"
              loading="eager"
              decoding="async"
            />
            <figcaption className="sr-only">
              Équipe We Yan Digital agence digitale Casablanca travaillant sur une stratégie SEO, branding et création de site web pour un client marocain.
            </figcaption>
          </figure>
        </section>

        <section className="w-full px-6 pb-24 sm:px-8 lg:pb-32">
          <div className="mx-auto max-w-5xl mb-16 text-center" data-reveal>
            <h2 className="text-[clamp(1.8rem,4.5vw,3rem)] font-black tracking-tight text-slate-900 mb-5">
              Nos 6 expertises digitales complémentaires
            </h2>
            <p className="text-[clamp(0.95rem,2vw,1.1rem)] leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Une seule agence digitale à Casablanca pour piloter <strong>tous vos leviers d’acquisition</strong> : du branding au référencement, en passant par la création de site web, la publicité payante, les réseaux sociaux et les influenceurs. Vous gardez un seul interlocuteur, nous gardons la cohérence globale de votre marque — et nous optimisons chaque mois votre retour sur investissement.
            </p>
          </div>
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 90} />
            ))}
          </div>
        </section>

        {/* Section « Pourquoi nous choisir » — contenu long SEO 500+ mots */}
        <section
          className="w-full px-6 pb-24 sm:px-8 lg:pb-32 bg-white border-y border-slate-200"
          data-reveal
          data-reveal-delay="250"
        >
          <div className="mx-auto max-w-[1200px] grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] items-start">
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-6"
                style={{ backgroundColor: '#FFF7ED', color: '#C2410C', borderColor: '#FED7AA' }}
              >
                Pourquoi We Yan
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#FC9700' }} />
              </span>
              <h2 className="text-[clamp(1.8rem,4.2vw,2.75rem)] font-black leading-[1.05] tracking-tight text-slate-900 mb-6">
                Pourquoi choisir <span style={{ color: '#6483F0' }}>We Yan Digital</span> comme agence digitale à Casablanca ?
              </h2>

              <div className="space-y-5 text-[clamp(0.95rem,1.9vw,1.05rem)] leading-8 text-slate-700">
                <p>
                  Contrairement aux freelances généralistes ou aux agences à l’étranger, <strong className="font-semibold text-slate-900">nous sommes implantés à Casablanca, quartier Maarif</strong>, au cœur de l’effervescence économique du Maroc. Cette proximité nous permet de <em>vraiment comprendre votre marché</em> : les habitudes d’achat des consommateurs marocains sur Meta, Instagram et TikTok, la concurrence dans votre secteur, les expressions de recherche locales tapées dans Google (en français, en darija ou en anglais), et les spécificités culturelles qui font qu’un message fonctionnera… ou pas.
                </p>
                <p>
                  Nous privilégions toujours une <strong className="font-semibold text-slate-900">stratégie mixte SEO + SEA</strong> : le SEO pour construire une <em>visibilité durable</em> sur 3 à 6 mois (pages premièrs sur Google, contenu qui capitalise avec le temps), et les campagnes Google Ads / Meta Ads pour générer <em>des leads qualifiés dès la première semaine</em>. Chaque euro dépensé en publicité est suivi dans un dashboard que vous pouvez consulter à tout moment — <strong className="font-semibold">transparence totale, zéro zone grise</strong>.
                </p>
                <p>
                  Enfin, notre <strong className="font-semibold text-slate-900">approche créative We Yan</strong> n’est jamais « un pack standard » : nous travaillons chaque mois une idée de marque forte, des visuels premium, un ton différentiant, pour que votre entreprise se démarque de <em>toutes</em> les autres agences et entreprises dans votre secteur à Casablanca. Branding, design, UX, storytelling : tout est pensé comme un <em>écosystème cohérent</em> — et nous nous adaptons à tous les budgets, de la startup qui démarre au grand compte qui veut accélérer son développement digital au Maroc et en Afrique.
                </p>
                <p className="pt-2">
                  <strong className="font-semibold text-slate-900">Prêt à transformer votre présence digitale en moteur de chiffre d’affaires ?</strong> Répondez-nous en moins de 24h avec un devis gratuit, sans engagement, détaillé service par service.
                </p>
              </div>
            </div>

            <div className="space-y-5 md:sticky md:top-36">
              <div
                className="rounded-[1.75rem] p-7 text-white shadow-[0_25px_60px_-22px_rgba(15,23,42,0.65)]"
                style={{ backgroundColor: '#1F2937' }}
              >
                <h3 className="text-[1.35rem] font-black tracking-tight mb-6">
                  6 raisons de travailler avec nous
                </h3>
                <ul className="space-y-4">
                  {[
                    { n: '01', t: 'Agence 100% Casablanca, réactivité unique sur Maroc' },
                    { n: '02', t: 'Dashboard live avec KPI trafic, leads, conversions & ROI' },
                    { n: '03', t: 'Stratégie mixte SEO (long terme) + SEA (immédiat)' },
                    { n: '04', t: 'Design premium & branding différenciant We Yan' },
                    { n: '05', t: 'Accompagnement startups, PME & grands comptes' },
                    { n: '06', t: 'Devis détaillé & réponse sous 24h chrono' },
                  ].map((r) => (
                    <li key={r.n} className="flex items-start gap-4">
                      <span
                        className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl font-black text-[0.82rem]"
                        style={{ backgroundColor: '#FC9700', color: '#0F172A' }}
                      >
                        {r.n}
                      </span>
                      <p className="text-white/85 text-[0.95rem] leading-7 pt-0.5">{r.t}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-[1.5rem] border border-slate-200 p-5"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
                  ✉️ Réponse garantie
                </p>
                <p className="text-slate-800 font-bold text-[1.05rem] leading-snug mb-4">
                  Demande de devis → réponse détaillée sous 24h ouvrées
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-[0.8rem] font-black uppercase tracking-[0.18em] text-white shadow-lg transition-all hover:brightness-110 hover:-translate-y-0.5"
                  style={{ backgroundColor: '#6483F0', boxShadow: '0 20px 44px -18px rgba(100,131,240,0.6)' }}
                >
                  Obtenir mon devis gratuit
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-black">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full mb-24 px-6 sm:px-8 lg:mb-32" data-reveal data-reveal-delay="450">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#1a1c1c] px-8 py-14 text-center text-white sm:px-12 md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,rgba(167,199,231,0.55),transparent_34%),radial-gradient(circle_at_80%_75%,rgba(254,94,30,0.45),transparent_28%)]"
            />
            <div className="relative z-10">
              <h2 className="mx-auto mb-8 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] font-black uppercase leading-[0.92] tracking-[-0.05em]">
                Prêt à transformer votre présence en ligne ?
              </h2>
              <Link
                className="inline-flex rounded-full bg-[#fe5e1e] px-8 py-4 text-[0.95rem] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_20px_40px_-20px_rgba(254,94,30,0.8)] transition-all duration-300 hover:scale-[1.03] hover:bg-[#ab3600]"
                to="/contact"
              >
                Discutons de votre projet
              </Link>
            </div>
          </div>
        </section>

        {/* PAGES LONG TAIL SEO · Maillage interne PageRank vers pages dédiées (hors /services/* wildcard) */}
        <section className="relative overflow-hidden py-[clamp(4rem,8vw,6rem)] text-slate-900">
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-0 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, #EEF2FF 0%, transparent 65%)' }} />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle, #FFF7ED 0%, transparent 65%)' }} />

          <div className="relative z-10 w-full max-w-[1180px] mx-auto px-[clamp(1rem,4vw,2rem)]">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-[clamp(2.2rem,5.5vw,3rem)]">
              <div data-reveal>
                <span className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ backgroundColor: '#EEF2FF', color: '#4338CA', borderColor: '#C7D2FE' }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
                  Expertises dédiées · Casablanca
                </span>
                <h2 className="font-black text-[clamp(1.9rem,5vw,3rem)] tracking-tight text-slate-900 mb-3 leading-[1.05]">
                  Nos pages <span style={{ color: '#6483F0' }}>expertise dédiée</span> SEO Casablanca & Community Management
                </h2>
                <p className="text-slate-500 text-[clamp(0.95rem,2vw,1.1rem)] max-w-2xl leading-relaxed">
                  Pour Google : des pages spécialisées ultra-longues, positionnées sur les requêtes longues traînes que tapent vos prospects marocains tous les jours.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Carte 1 : Agence SEO Casablanca */}
              <Link
                to="/agence-seo-casablanca"
                data-reveal
                className="group relative overflow-hidden rounded-[2rem] p-[clamp(1.5rem,3.5vw,2.25rem)] text-white shadow-[0_30px_60px_-30px_rgba(99,102,241,0.55)] hover:shadow-[0_45px_75px_-30px_rgba(99,102,241,0.75)] hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: '#6483F0' }}
              >
                <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl opacity-50" style={{ background: 'radial-gradient(circle,#4F46E5 0%,transparent 65%)' }} />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle,#818CF8 0%,transparent 65%)' }} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-7">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white">
                      ☝️ Requête #1 Google : Agence SEO Casablanca
                    </span>
                    <span aria-hidden="true" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm text-white text-xl">
                      🔎
                    </span>
                  </div>
                  <h3 className="text-[clamp(1.5rem,4vw,2.1rem)] font-black leading-[1.08] mb-4">
                    Agence SEO à Casablanca<br />· Premier sur Google en 2026
                  </h3>
                  <p className="text-white/85 leading-relaxed mb-7 max-w-xl text-[0.98rem]">
                    4 avantages We Yan, méthode 4 étapes, tarifs audit SEO gratuit, FAQ 3 questions, +1 600 mots uniques. Parfaite pour ranker #1 sur les requêtes SEO marocaines.
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5 mb-8 text-[0.8rem] font-semibold text-white/90">
                    <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1">SEO Local GBP</span>
                    <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1">Tech Audit Core Web Vitals</span>
                    <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1">Netlinking Maroc</span>
                  </div>
                  <span className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[0.88rem] font-black uppercase tracking-wider shadow-xl shadow-black/15 hover:scale-[1.02] transition-transform" style={{ color: '#6483F0' }}>
                    Découvrir l'agence SEO
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Carte 2 : Community Management Casablanca */}
              <Link
                to="/community-management-casablanca"
                data-reveal
                data-reveal-delay="120"
                className="group relative overflow-hidden rounded-[2rem] p-[clamp(1.5rem,3.5vw,2.25rem)] text-white shadow-[0_30px_60px_-30px_rgba(252,151,0,0.6)] hover:shadow-[0_45px_75px_-30px_rgba(252,151,0,0.8)] hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: '#FC9700' }}
              >
                <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl opacity-50" style={{ background: 'radial-gradient(circle,#F97316 0%,transparent 65%)' }} />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full blur-3xl opacity-40" style={{ background: 'radial-gradient(circle,#FBBF24 0%,transparent 65%)' }} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-7">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white">
                      📱 Community Management · Casablanca & Maroc
                    </span>
                    <span aria-hidden="true" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm text-white text-xl">
                      🎬
                    </span>
                  </div>
                  <h3 className="text-[clamp(1.5rem,4vw,2.1rem)] font-black leading-[1.08] mb-4">
                    Community management à<br />Casablanca · Contenu + Ads
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-7 max-w-xl text-[0.98rem]">
                    6 expertises, galerie studio We Yan, 3 forfaits Essentiel / Performance / Premium tarifs MAD / mois, budget Meta/TikTok Ads inclus, FAQ 3 questions.
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5 mb-8 text-[0.8rem] font-semibold text-white/95">
                    <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1">Studio photo Casablanca</span>
                    <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1">Reels / TikTok</span>
                    <span className="rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1">Meta & TikTok Ads</span>
                  </div>
                  <span className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[0.88rem] font-black uppercase tracking-wider shadow-xl shadow-black/15 hover:scale-[1.02] transition-transform" style={{ color: '#FC9700' }}>
                    Voir les forfaits CM
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter revealDelay="500" />
    </div>
  )
}
