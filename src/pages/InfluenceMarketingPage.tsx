import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import PageBreadcrumb from '../components/PageBreadcrumb'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const heroImage = '/images/content/studio-content-v2.jpg'
const approachImage = '/images/content/gallery-lifestyle.jpg'
const sideImage = '/images/content/gallery-culinary.jpg'

const pageLinking = getPageLinking('/services/marketing-influence')
const faq = pageLinking?.faq ?? []

const packs = [
  {
    nom: 'Nano',
    inclus: '10k – 50k abonnés',
    prix: '800 → 5 000 MAD / livrable',
    detail: 'Stories et reels locaux Casablanca. Idéal pour tester une offre, un code promo, un point de vente Maarif / Anfa.',
  },
  {
    nom: 'Micro',
    inclus: '50k – 200k abonnés',
    prix: '2 500 → 18 000 MAD / livrable',
    detail: 'Meilleur rapport preuve / coût au Maroc 2026. Audience encore conversationnelle, CPL souvent plus sain que le macro.',
    featured: true,
  },
  {
    nom: 'Macro',
    inclus: '200k+ abonnés',
    prix: '8 000 → 60 000 MAD / livrable',
    detail: 'Notoriété nationale, lancement, saison. Se justifie quand l’offre et le brief sont déjà rodés sur du nano / micro.',
  },
] as const

const cplRows = [
  { format: 'Story (15–60 s)', nano: '800 → 2 500', micro: '2 500 → 8 000', macro: '8 000 → 25 000' },
  { format: 'Reel / TikTok', nano: '1 500 → 5 000', micro: '5 000 → 18 000', macro: '18 000 → 60 000' },
  { format: 'Post feed', nano: '1 200 → 4 000', micro: '4 000 → 14 000', macro: '12 000 → 45 000' },
] as const

const realisations = [
  {
    nom: 'retail-casa',
    titre: 'Retail Casablanca',
    avant: 'Boost Meta sans visage local, CPL haut, zéro preuve sociale.',
    apres: '8 micros Casa, code magasin, +22 % de trafic boutique sur 6 semaines.',
    image: '/images/projects/project-3.jpg',
  },
  {
    nom: 'food-maarif',
    titre: 'Food Maarif',
    avant: 'Photos stock, stories internes peu vues.',
    apres: '4 nanos + 2 reels UGC, files d’attente week-end, WhatsApp saturé.',
    image: '/images/content/gallery-culinary.jpg',
  },
  {
    nom: 'beauty-anfa',
    titre: 'Beauty Anfa',
    avant: 'Un macro one-shot, spike d’un jour, zéro relance.',
    apres: 'Série micro + whitelist ads, CPA stable 8 semaines.',
    image: '/images/content/gallery-lifestyle.jpg',
  },
] as const

export default function InfluenceMarketingPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-800">
      <PageSeo {...pageSeo.influenceMarketing} />
      <Navbar serviceTitle="Agence influenceur Maroc" />

      <main>
        <section className="relative overflow-hidden px-[clamp(1rem,4vw,2rem)] pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 z-0">
            <img
              alt="Agence marketing d’influence Casablanca - créateurs Instagram TikTok We Yan Digital"
              src={heroImage}
              className="h-full w-full object-cover object-center opacity-20"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#EEF2FF]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div data-reveal>
              <PageBreadcrumb className="mb-6" />
              <span
                className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em]"
                style={{ backgroundColor: '#EDE9FE', color: '#5B21B6', borderColor: '#C4B5FD' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
                Agence influenceur · We Yan Digital · Casablanca
              </span>
              <h1 className="mb-7 font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(1.7rem,5.6vw,3.25rem)] text-slate-900">
                Agence Marketing d’Influence à{' '}
                <span className="italic" style={{ color: '#FC9700' }}>
                  Casablanca
                </span>
                {' : '}
                <span className="mt-3 block text-[clamp(1.1rem,3vw,1.75rem)] font-extrabold normal-case tracking-[-0.02em] text-slate-800">
                  Vos campagnes avec les bons influenceurs
                </span>
              </h1>
              <p className="mb-5 max-w-2xl text-[clamp(1rem,2.1vw,1.15rem)] leading-8 text-slate-600">
                We Yan Digital est une <strong className="font-semibold text-slate-900">agence influenceur Maroc</strong>,
                basée à Casablanca Maarif. Nous ne vendons pas une liste de comptes : nous castons, négocions, briefons et
                reportons des campagnes de <strong className="font-semibold text-slate-800">marketing influence Casablanca</strong>{' '}
                qui vendent — stories, reels, TikTok, droits d’usage ads. Une campagne sans animation de marque s’éteint :
                couplez-la au{' '}
                <Link
                  to="/community-management-casablanca"
                  className="font-bold text-[#6483F0] underline-offset-4 hover:underline"
                >
                  community management à Casablanca
                </Link>{' '}
                pour que le feed officiel et les créateurs parlent la même langue. Quand l’intention Search est déjà
                chaude, couplez l’influence à une{' '}
                <Link to="/services/publicite-digitale" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  agence Google Ads Maroc
                </Link>{' '}
                et une{' '}
                <Link to="/services/publicite-digitale" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  agence Meta Ads Casablanca
                </Link>{' '}
                : les UGC se scalent, le trafic se convertit.
              </p>
              <p className="mb-9 max-w-2xl text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Nano, micro, macro : le bon mix dépend de votre offre, pas du nombre d’abonnés Instagram. We Yan Digital
                refuse les faux followers, les briefs « soyez créatifs » et les campagnes sans code, sans UTM, sans
                contrat. Vous voyez les profils, les tarifs MAD, les droits, les dates. Rabat, Marrakech, Tanger : même
                méthode, créateurs calés sur la ville cible.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ backgroundColor: '#6483F0', boxShadow: '0 22px 50px -18px rgba(100,131,240,0.65)' }}
                >
                  Lancer ma campagne influence
                  <Icon name="arrow_forward" className="h-4 w-4" />
                </Link>
                <a
                  href="#methode"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-900/20 bg-white px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.18em] text-slate-800 transition-all hover:bg-slate-50"
                >
                  Voir la méthode en 4 étapes
                </a>
              </div>
            </div>

            <figure data-reveal data-reveal-delay="120" className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_30px_70px_-24px_rgba(15,23,42,0.45)]">
                <img
                  alt="Casting influenceurs Casablanca - campagne Instagram TikTok We Yan Digital"
                  src={approachImage}
                  className="block h-auto w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 max-w-[240px] rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)]">
                <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500">Maroc 2026</p>
                <p className="text-[2rem] font-black leading-none" style={{ color: '#6483F0' }}>
                  4 étapes
                </p>
                <p className="mt-1.5 text-[0.85rem] font-semibold leading-snug text-slate-600">
                  Casting, négociation, brief, reporting
                </p>
              </div>
            </figure>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F8FAFC] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[860px]" data-reveal>
            <h2 className="mb-6 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
              Pourquoi l’influence au Maroc en 2026 ?
            </h2>
            <div className="space-y-5 text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
              <p>
                Instagram et TikTok ne sont plus un à-côté pour les marques marocaines : c’est là que Casablanca compare
                un resto, une clinique, une sneaker, une formation. Les études d’usage 2025–2026 placent le Maroc parmi
                les marchés MENA les plus actifs sur le short video. Un feed Ads sans visage local convertit moins qu’un
                créateur qui parle darija, montre le quartier, et répond aux commentaires. L’influence n’est pas de la
                pub déguisée : c’est de la preuve sociale géolocalisée.
              </p>
              <p>
                Trois raisons de bouger maintenant. Première : la saturation Ads. CPM et CPL montent dès que cinq
                cliniques visent Anfa. Un micro Casa coupe le bruit. Deuxième : le social commerce. Stories + lien +
                WhatsApp, c’est le tunnel réel, pas un site que personne n’ouvre. Troisième : la confiance. Un avis
                créateur pèse plus qu’une bannière. Attention : le marché est aussi saturé de faux abonnés et de
                « pack 10 influenceurs » à 3 000 MAD. Une agence influenceur Maroc sert à filtrer, pas à empiler des
                screenshots.
              </p>
              <p>
                We Yan Digital travaille le marketing influence Casablanca comme un media : audience, brief, droits,
                KPI. Pas un DM Instagram à 23h. Pour le détail des cachets story / reel / post, lisez notre{' '}
                <Link
                  to="/blog/prix-influenceur-maroc-2026"
                  className="font-bold text-[#6483F0] underline-offset-4 hover:underline"
                >
                  prix d’un influenceur au Maroc
                </Link>{' '}
                avec tarifs 2026 en MAD.
              </p>
            </div>
          </div>
        </section>

        <section id="methode" className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div data-reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C4B5FD] bg-[#F5F3FF] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#5B21B6]">
                Méthode We Yan · 4 étapes
              </span>
              <h2 className="mb-6 font-black tracking-tight text-[clamp(1.8rem,4.6vw,2.75rem)] text-slate-900">
                Notre méthode influence en 4 étapes
              </h2>
              <p className="mb-8 text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Casting, négociation, brief, reporting. Inverser l’ordre (payer d’abord, brief ensuite) brûle le budget.
                Le déroulé se lit dans nos{' '}
                <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  campagnes d’influence
                </Link>
                , livrées pour des marques de Casablanca et du Maroc.
              </p>

              <div className="space-y-8">
                <article>
                  <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">1. Casting</h3>
                  <p className="leading-8 text-slate-600">
                    Ville, langue, âge, affinité offre, engagement réel, commentaires, historique pubs. On écarte les
                    comptes gonflés. Short-list 8–12, vous validez 4–8. Le casting se voit dans nos{' '}
                    <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                      campagnes d’influence
                    </Link>{' '}
                    retail, food et beauty.
                  </p>
                </article>
                <article>
                  <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">2. Négociation</h3>
                  <p className="leading-8 text-slate-600">
                    Cachet, formats, dates, exclusivité concurrentielle, droits ads 30–90 jours, usage site. Contrat
                    We Yan, pas un vocal WhatsApp. Les conditions apparaissent dans nos{' '}
                    <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                      campagnes d’influence
                    </Link>{' '}
                    avec un CPL lisible, pas un « on verra ».
                  </p>
                </article>
                <article>
                  <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">3. Brief</h3>
                  <p className="leading-8 text-slate-600">
                    Promesse, interdits, hooks, CTA (code, WhatsApp, magasin), mentions légales. Le créateur garde sa
                    voix : un script robot tue le reach. Validation avant mise en ligne. Exemples de briefs dans nos{' '}
                    <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                      campagnes d’influence
                    </Link>
                    .
                  </p>
                </article>
                <article>
                  <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">4. Reporting</h3>
                  <p className="leading-8 text-slate-600">
                    Portée, engagement, clics, codes, leads, CPA vs ads. Recommandation : recaster, booster en ads, ou
                    arrêter. Le reporting se lit dans nos{' '}
                    <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                      campagnes d’influence
                    </Link>
                    , pas dans un album de captures d’écran.
                  </p>
                </article>
              </div>
            </div>

            <div
              className="sticky rounded-[2rem] p-7 text-white shadow-[0_30px_70px_-22px_rgba(15,23,42,0.6)] lg:top-36"
              style={{ backgroundColor: '#1F2937' }}
              data-reveal
              data-reveal-delay="120"
            >
              <img
                src={sideImage}
                alt="Campagne influence food Casablanca - UGC We Yan Digital"
                className="mb-6 h-28 w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <h3 className="mb-5 text-[1.3rem] font-black tracking-tight">Casting offert cette semaine</h3>
              <ul className="mb-8 space-y-4">
                {[
                  '3 profils nano / micro calés Casablanca',
                  'Fourchette MAD story + reel',
                  'Calendrier 4 à 6 semaines',
                  'Réponse humaine sous 24h ouvrées',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg text-[0.75rem] font-black"
                      style={{ backgroundColor: '#FC9700', color: '#0F172A' }}
                    >
                      ✓
                    </span>
                    <p className="pt-0.5 text-[0.95rem] leading-7 text-white/90">{item}</p>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 hover:brightness-110"
                style={{ backgroundColor: '#FC9700', color: '#0F172A' }}
              >
                Lancer ma campagne influence
                <Icon name="send" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="prix" className="border-y border-slate-200 bg-[#F5F3FF] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="mx-auto mb-12 max-w-3xl text-center" data-reveal>
              <h2 className="mb-4 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
                Tableau prix influence Maroc 2026
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Cachets indicatifs HT, créateurs Maroc, 2026. Casablanca et Rabat souvent au haut de fourchette.
                Droits ads et exclusivité s’ajoutent. We Yan facture la gestion à part (brief, contrat, relances,
                reporting) : 6 000 à 15 000 MAD selon le nombre de profils — pas un % opaque sur le cachet.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {packs.map((pack) => (
                <article
                  key={pack.nom}
                  className={`rounded-[1.5rem] border p-6 ${
                    pack.featured
                      ? 'border-[#6483F0] bg-white shadow-[0_18px_40px_-20px_rgba(100,131,240,0.45)]'
                      : 'border-slate-200 bg-white'
                  }`}
                  data-reveal
                >
                  <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-slate-500">{pack.nom}</p>
                  <p className="mb-1 text-[1.05rem] font-black text-slate-900">{pack.inclus}</p>
                  <p className="mb-3 font-black text-[#6483F0]">{pack.prix}</p>
                  <p className="leading-7 text-slate-600">{pack.detail}</p>
                </article>
              ))}
            </div>

            <div className="overflow-x-auto rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_44px_-24px_rgba(15,23,42,0.35)]" data-reveal>
              <table className="w-full min-w-[720px] text-left text-[0.95rem]">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.12em]">Format (MAD)</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.12em]">Nano 10k–50k</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.12em]">Micro 50k–200k</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.12em]">Macro 200k+</th>
                  </tr>
                </thead>
                <tbody>
                  {cplRows.map((row) => (
                    <tr key={row.format} className="border-t border-slate-200">
                      <td className="px-6 py-5 font-black text-slate-900">{row.format}</td>
                      <td className="px-6 py-5 text-slate-600">{row.nano}</td>
                      <td className="px-6 py-5 text-slate-600">{row.micro}</td>
                      <td className="px-6 py-5 text-slate-600">{row.macro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-8 text-center text-[0.95rem] leading-8 text-slate-600" data-reveal>
              Un CPL story n’est pas le cachet : c’est cachet / leads attribués. Un nano à 1 200 MAD qui amène 15
              WhatsApp utiles bat un macro à 40 000 MAD qui amène des likes. Pour un casting et un brief à Casablanca
              sans engagement,{' '}
              <Link to="/contact" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                lancer ma campagne influence
              </Link>{' '}
              : nous répondons sous 24h ouvrées, avec trois profils proposés.
            </p>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto mb-12 max-w-3xl" data-reveal>
              <h2 className="mb-4 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
                Nos réalisations influence à Casablanca
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Trois extraits. Le détail (casting, brief, chiffres) est dans le portfolio. Pour la galerie, ouvrez nos{' '}
                <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  campagnes d’influence
                </Link>
                . Offline (affichage, print) reste dans le même portfolio : on ne crée pas de money page média hors
                volume.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
              {realisations.map((item, index) => (
                <article
                  key={item.nom}
                  className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_36px_-20px_rgba(15,23,42,0.35)]"
                  data-reveal
                  data-reveal-delay={String(index * 80)}
                >
                  <img
                    src={item.image}
                    alt={`campagne-influence-casablanca-${item.nom}`}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">{item.titre}</h3>
                    <p className="mb-2 text-[0.92rem] leading-7 text-slate-600">
                      <strong className="font-semibold text-slate-800">Avant :</strong> {item.avant}
                    </p>
                    <p className="text-[0.92rem] leading-7 text-slate-600">
                      <strong className="font-semibold text-slate-800">Après :</strong> {item.apres}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F8FAFC] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[860px]" data-reveal>
            <h2 className="mb-6 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
              Influence vs Ads : quand choisir ?
            </h2>
            <div className="space-y-5 text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
              <p>
                Ads achète l’intention. Influence crée la preuve. Si votre client tape déjà « clinique esthétique
                Casablanca », commencez par une{' '}
                <Link to="/services/publicite-digitale" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  agence Google Ads Maroc
                </Link>
                . Si personne ne vous connaît et que le CPM Meta grimpe, commencez par 4 micros, puis scalez le UGC via
                une{' '}
                <Link to="/services/publicite-digitale" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  agence Meta Ads Casablanca
                </Link>
                . Les deux pages, c’est la même money ads : le silo se boucle, zéro fuite vers le SEO.
              </p>
              <p>
                Règle We Yan : influence seule si l’offre a besoin de visages. Ads seuls si le tunnel convertit déjà.
                Les deux dès que le reel marche — whitelist, CAPI, exclusion des convertis. Community management en
                parallèle pour répondre aux commentaires sous les contenus créateurs. C’est comme ça que les 5 PR9 du
                footer se tiennent : SEO, CM, branding, ads, influence.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#C4B5FD] bg-[#F5F3FF] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center" data-reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C4B5FD] bg-white px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#5B21B6]">
                FAQ Influence Maroc · Rich snippet
              </span>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
                FAQ Agence influenceur Maroc
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <details
                  key={item.q}
                  open={index === 0}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)] open:border-[#6483F0] open:shadow-[0_18px_40px_-20px_rgba(100,131,240,0.45)]"
                  data-reveal
                  data-reveal-delay={String(index * 50)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                    <h3 className="text-[1rem] font-bold leading-snug text-slate-900 marker:content-none">{item.q}</h3>
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-transform group-open:rotate-45 group-open:border-[#6483F0] group-open:bg-[#6483F0] group-open:text-white"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-5 text-[0.98rem] leading-8 text-slate-600">{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[860px] text-center" data-reveal>
            <h2 className="mb-5 font-black tracking-tight text-[clamp(1.8rem,4.6vw,2.75rem)] text-slate-900">
              Prêt à lancer avec les bons influenceurs ?
            </h2>
            <p className="mb-8 text-[clamp(0.95rem,2vw,1.1rem)] leading-8 text-slate-600">
              Casting : 3 profils, fourchette MAD, calendrier. Réponse sous 24h ouvrées.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-5 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white shadow-[0_22px_50px_-18px_rgba(100,131,240,0.65)] transition-all hover:-translate-y-0.5 hover:brightness-110"
              style={{ backgroundColor: '#6483F0' }}
            >
              Lancer ma campagne influence
              <Icon name="arrow_forward" className="h-4 w-4" />
            </Link>
            <p className="mt-6 text-[0.92rem] leading-7 text-slate-500">
              Agence basée à Casablanca, intervention à Rabat, Marrakech, Tanger.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
