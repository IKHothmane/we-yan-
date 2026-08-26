import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import PageBreadcrumb from '../components/PageBreadcrumb'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { pageSeo } from '../lib/pageSeo'
import Icon from '../components/Icon'

const heroImage = '/images/content/studio-content-v2.webp'
const gallery1 = '/images/content/gallery-culinary.webp'
const gallery2 = '/images/content/gallery-lifestyle.webp'

const services = [
  {
    t: 'Stratégie éditoriale & Planning',
    d: "Définition de vos piliers de contenu, ton de voix, calendrier de publication mensuel. Nous construisons un planning cohérent aligné sur vos objectifs (notoriété, leads, ventes) et les temps forts de votre secteur au Maroc.",
    icon: 'event_note',
  },
  {
    t: 'Création visuelle premium (Studio)',
    d: "Séances photo produit, food, mode & lifestyle dans notre studio partenaire à Casablanca. Retouche professionnelle, visuels carrousels, stories, reels, couvertures, brand content sur-mesure.",
    icon: 'photo_camera',
  },
  {
    t: 'Production vidéo & Reels TikTok/IG',
    d: "Courtes vidéos verticales optimisées pour l'algorithme : hooks 3 premières secondes, sous-titres auto FR/Darija, musiques tendance, scripts sur-mesure. Idéal pour TikTok, Instagram Reels, YouTube Shorts.",
    icon: 'movie',
  },
  {
    t: 'Community management & animation',
    d: "Réponses aux commentaires, DMs, mentions, story réponses, sondages, mini-jeux. Nous construisons une vraie communauté engagée autour de votre marque, pas seulement des abonnés factices.",
    icon: 'diversity_3',
  },
  {
    t: 'Publicité Meta + TikTok Ads',
    d: "Campagnes payantes Facebook Ads / Instagram Ads / TikTok Ads : audiences locales Casablanca & Maroc, tests creatives A/B, audiences lookalike, tracking CAPI Meta Server-Side, optimisation ROAS et coût par lead.",
    icon: 'campaign',
  },
  {
    t: 'Reporting live KPI mensuel',
    d: "Dashboard partagé temps réel : nombre de followers, portée, impressions, taux d'engagement, leads générés, ventes réseaux sociaux, ROAS publicitaire. Appel 1h par mois avec votre community manager dédié.",
    icon: 'monitoring',
  },
] as const

const forfaits = [
  {
    nom: 'Essentiel',
    prix: '3 500 MAD/mois',
    public: 'PME & Jeune marque',
    features: [
      'Plateformes : Instagram + Facebook (2)',
      '12 posts/mois dont 4 carrousels premium',
      '8 stories/mois avec stickers interactifs',
      '1 shooting photo court inclus/mois',
      'Réponse commentaires & DMs 5j/7',
      '1 rapport mensuel KPI détaillé',
    ],
    accent: '#1F2937',
  },
  {
    nom: 'Performance',
    prix: '7 500 MAD/mois',
    public: 'Marque en croissance · Populaire',
    featured: true,
    features: [
      'Plateformes : IG + FB + TikTok + LinkedIn (4)',
      '24 posts/mois dont 8 reels vidéo',
      '24 stories animées + sondages hebdos',
      '2 shooting premium + 1 video reel pack',
      'Meta Ads inclus (jusqu\'à 15 000 MAD budget/mois)',
      'Community manager 6j/7 + optimisation weekly',
      'Suivi conversion GA4 + Meta Pixel CAPI',
      'Reporting live dashboard 24/7 + 2 rendez-vous/mois',
    ],
    accent: '#6483F0',
  },
  {
    nom: 'Premium',
    prix: 'Sur devis',
    public: 'Grands comptes · E-commerce',
    features: [
      'Toutes plateformes + YouTube + X selon besoin',
      'Volume posts et reels sur-mesure (quotidien)',
      'Production studio dédiée / shooting mensuel complet',
      'Influence marketing + micro-influenceurs marocains',
      'Budget Ads défini chaque mois + optimisation temps réel',
      'Équipe dédiée : CM + Designer + Vidéaste + Ads expert',
      'SLA réponses DMs en moins de 2h',
      "Stratégie content + SEO blog + emailing automatisée",
    ],
    accent: '#FC9700',
  },
] as const

const faq = [
  {
    q: 'Combien coûte un community manager à Casablanca en 2026 ?',
    r: "Les tarifs community manager Maroc varient de 2 500 MAD/mois pour un freelance junior jusqu'à 15 000+ MAD/mois pour une agence premium avec équipe dédiée + production vidéo + publicité Ads. Chez We Yan Digital agence de Casablanca Maarif, nos forfaits community management complets commencent à 3 500 MAD/mois (Essentiel PME).",
  },
  {
    q: 'Quels réseaux sociaux privilégier pour une marque marocaine ?',
    r: "La réponse dépend de votre audience et votre secteur. En 2026 au Maroc : Instagram reste incontournable (mode, beauté, food, lifestyle), TikTok explose pour les marques D2C, services, restaurant, divertissement, Facebook est toujours très fort pour les commerces locaux et classes populaires, LinkedIn pour les B2B / services professionnels / formations, WhatsApp Business pour la relation client directe. Nous vous guidons selon votre cible.",
  },
  {
    q: "Quel taux d'engagement peut-on espérer avec votre agence ?",
    r: "Chez un client qui démarre, nous visons dès le premier trimestre un taux d'engagement minimum de 2% sur Instagram et 3% sur TikTok, avec un contenu créatif, authentique et régulièrement testé. Pour les marques déjà établies, nous optimisons la croissance et la conversion. Tous les KPI sont suivis chaque semaine.",
  },
] as const

export default function CommunityManagementCasablancaPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-800">
      <PageSeo {...pageSeo.communityManagementCasablanca} />
      <Navbar serviceTitle="Community Management Casablanca" />

      <main>
        <section className="relative overflow-hidden px-[clamp(1rem,4vw,2rem)] pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 z-0">
            <img
              alt="Community manager We Yan Digital Casablanca creation contenu studio reel photo marque marocaine"
              src={heroImage}
              className="h-full w-full object-cover object-center opacity-20"
                    width={800}
                    height={600}
                    loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FEF2F2]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1200px] grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_1fr] items-start">
            <div data-reveal>
              <PageBreadcrumb className="mb-6" />
              <span
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] mb-7"
                style={{ backgroundColor: '#FCE7F3', color: '#9D174D', borderColor: '#F9A8D4' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#FC9700' }} />
                Community Management · Casablanca · We Yan Digital
              </span>
              <h1 className="font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,7vw,4.75rem)] text-slate-900 mb-7">
                Community management à{' '}
                <span className="italic" style={{ color: '#FC9700' }}>Casablanca</span>
                <br />
                <span style={{ color: '#6483F0' }}>Contenu premium + Ads</span> performant
              </h1>
              <p className="text-[clamp(1rem,2.1vw,1.15rem)] leading-8 text-slate-600 max-w-2xl mb-5">
                Vous voulez une communauté <strong className="font-semibold text-slate-900">engagée, réelle et qui achète</strong> sur Instagram, Facebook, TikTok et LinkedIn ? Notre agence We Yan Digital à Casablanca Maarif anime vos réseaux sociaux avec du contenu premium, du community management humain et des campagnes publicitaires Meta + TikTok Ads optimisées pour <strong className="font-semibold text-slate-800">maximiser vos ventes</strong>.
              </p>
              <p className="text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600 max-w-2xl mb-9">
                Nous ne faisons pas de « followers achetés » ni de fake engagement. Chaque publication, chaque reel, chaque DM répondu est pensée pour renforcer votre image de marque et <strong className="font-semibold text-slate-900">rapporter des leads qualifiés</strong>. Devis gratuit et réponse sous 24h.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  to="/contact/"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ backgroundColor: '#6483F0', boxShadow: '0 22px 50px -18px rgba(100,131,240,0.65)' }}
                >
                  Demander un devis community
                  <Icon name="arrow_forward" className="h-4 w-4" />
                </Link>
                <a
                  href="#forfaits"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/20 bg-white px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.18em] text-slate-800 transition-all hover:bg-slate-50"
                >
                  Voir les forfaits
                </a>
              </div>
            </div>

            <figure data-reveal data-reveal-delay="120" className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-10">
                <div className="rounded-[1.5rem] overflow-hidden shadow-[0_22px_48px_-20px_rgba(15,23,42,0.45)]">
                  <img
                    alt="Creation contenu culinaire Maroc studio photo We Yan Digital community management Casablanca"
                    src={gallery1}
                    className="w-full h-auto"
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.5rem] overflow-hidden shadow-[0_22px_48px_-20px_rgba(15,23,42,0.45)]">
                  <img
                    alt="Lifestyle content creation Maroc Instagram reels TikTok agence digitale Casablanca We Yan"
                    src={gallery2}
                    className="w-full h-auto"
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>
              </div>
            </figure>
          </div>
        </section>

        <section className="bg-[#F8FAFC] border-y border-slate-200 px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900 mb-4">
                Notre offre community management <span style={{ color: '#FC9700' }}>6 expertises</span>
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] leading-8 text-slate-600">
                Un <strong className="font-semibold text-slate-800">interlocuteur unique</strong> pour toute votre communication sur les réseaux sociaux : de la stratégie de contenu, à la création visuelle en studio, en passant par l'animation quotidienne, la publicité Ads et le reporting ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {services.map((s, i) => (
                <article
                  key={s.t}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_36px_-20px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-18px_rgba(252,151,0,0.4)]"
                  data-reveal
                  data-reveal-delay={String(i * 70)}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white" style={{ color: '#6483F0' }}>
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-[1.05rem] text-slate-900 mb-2 leading-snug">{s.t}</h3>
                  <p className="text-[0.93rem] leading-7 text-slate-600">{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="forfaits" className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1300px]">
            <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900 mb-4">
                Nos <span style={{ color: '#6483F0' }}>3 forfaits</span> community management Casablanca 2026
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] leading-8 text-slate-600">
                Forfaits sans engagement minimum de 3 mois. Possibilité de moduler vos besoins chaque mois (plus de shooting, plus de reels, plus de budget Ads).
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:gap-8">
              {forfaits.map((f, i) => (
                <article
                  key={f.nom}
                  className={`relative rounded-[2rem] border p-7 shadow-[0_18px_44px_-24px_rgba(15,23,42,0.4)] transition-all hover:-translate-y-1 ${
                    f.featured
                      ? 'text-white scale-[1.02] z-10'
                      : 'border-slate-200 bg-white'
                  }`}
                  style={{
                    backgroundColor: f.featured ? '#1F2937' : undefined,
                    borderColor: f.featured ? 'transparent' : undefined,
                    boxShadow: f.featured
                      ? '0 30px 80px -24px rgba(252,151,0,0.55), inset 0 0 0 2px #FC9700'
                      : undefined,
                  }}
                  data-reveal
                  data-reveal-delay={String(i * 90)}
                >
                  <p
                    className={`text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4 ${
                      f.featured ? 'text-orange-200' : 'text-slate-500'
                    }`}
                  >
                    {f.public}
                  </p>
                  <h3 className={`font-black text-[1.1rem] leading-snug mb-2 ${f.featured ? 'text-white' : 'text-slate-900'}`}>
                    Forfait {f.nom}
                  </h3>
                  <p className={`font-black text-[1.65rem] tracking-tight leading-none mb-8 ${f.featured ? 'text-white' : 'text-slate-900'}`}>
                    {f.prix}
                  </p>
                  <ul className={`space-y-3 mb-8 ${f.featured ? 'text-white/90' : 'text-slate-600'}`}>
                    {f.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-[0.92rem] leading-7">
                        <span
                          className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: f.accent }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact/"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-[0.78rem] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: f.featured ? '#FC9700' : f.accent,
                      color: f.accent === '#FC9700' ? '#0F172A' : '#FFFFFF',
                    }}
                  >
                    Choisir ce forfait
                    <Icon name="arrow_forward" className="h-3.5 w-3.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FEF2F2] border-y border-[#FECDD3] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12" data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white text-[#BE123C] border border-[#FECDD3] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-5">
                FAQ Rich Snippet · Google
              </span>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
                FAQ — Community Manager Casablanca · Maroc 2026
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((f, i) => (
                <details
                  key={f.q}
                  open={i === 0}
                  className="group rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)] open:shadow-[0_18px_40px_-20px_rgba(252,151,0,0.5)] open:border-[#FC9700]"
                  data-reveal
                  data-reveal-delay={String(i * 70)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                    <h3 className="font-bold text-[1rem] text-slate-900 leading-snug marker:content-none">{f.q}</h3>
                    <span
                      className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-transform group-open:rotate-45 group-open:text-slate-900 group-open:border-[#FC9700] group-open:bg-[#FC9700]"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-5 text-slate-600 leading-8 text-[0.98rem]">{f.r}</p>
                </details>
              ))}
            </div>
            <div className="mt-14 text-center" data-reveal>
              <Link
                to="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white shadow-[0_22px_50px_-18px_rgba(100,131,240,0.65)] transition-all hover:-translate-y-0.5 hover:brightness-110"
                style={{ backgroundColor: '#6483F0' }}
              >
                Lancer nos réseaux sociaux →
                <Icon name="send" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
