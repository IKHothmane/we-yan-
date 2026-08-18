import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import PageBreadcrumb from '../components/PageBreadcrumb'
import SiteFooter from '../components/SiteFooter'
import useScrollReveal from '../hooks/useScrollReveal'
import { getPageLinking } from '../lib/internalLinking'
import { pageSeo } from '../lib/pageSeo'

const heroImage = '/images/strategy/hero.webp'
const approachImage = '/images/strategy/approach.webp'
const positioningImage = '/images/strategy/positioning.webp'

const pageLinking = getPageLinking('/services/strategie-marketing-rebranding')
const faq = pageLinking?.faq ?? []

const packs = [
  {
    nom: 'Starter',
    inclus: 'Logo + charte',
    prix: '15 000 MAD',
    detail: 'Audit court, naming si besoin, logo, palette, typo, mini-charte PDF. Idéal pour poser une identité de marque à Casablanca sans tout reconstruire.',
  },
  {
    nom: 'Growth',
    inclus: 'Site + community management',
    prix: '35 000 MAD',
    detail: 'Starter + site vitrine aligné charte + 2 mois de création de contenu. La marque se voit en ligne et sur Instagram / TikTok.',
    featured: true,
  },
  {
    nom: 'Premium',
    inclus: 'SEO + Ads',
    prix: '70 000 MAD',
    detail: 'Growth + plan SEO local + campagnes Google / Meta de lancement. Rebranding, visibilité et leads sur le même trimestre.',
  },
] as const

const realisations = [
  {
    nom: 'atlas-retail',
    titre: 'Atlas Retail',
    avant: 'Enseigne perçue « discount 2014 », logo illisible en vitrine Maarif.',
    apres: 'Système visuel 2026, signalétique unifiée, +31 % de trafic magasin sur 4 mois.',
    image: '/images/projects/project-1.webp',
  },
  {
    nom: 'luxe-care',
    titre: 'Luxe Care',
    avant: 'Marque cosmétique confondue avec l’import, aucun univers premium.',
    apres: 'Positionnement « rituel Casablanca », packagings, site et stories alignés.',
    image: '/images/projects/project-2.webp',
  },
  {
    nom: 'maison-anfa',
    titre: 'Maison Anfa',
    avant: 'Hospitalité haut de gamme, site générique, zéro fil rouge photo.',
    apres: 'Charte photo, ton de voix, booking et Google Business cohérents.',
    image: '/images/projects/project-3.webp',
  },
] as const

export default function StrategieMarketingPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-800">
      <PageSeo {...pageSeo.strategyMarketing} />
      <Navbar serviceTitle="Agence branding Casablanca" />

      <main>
        <section className="relative overflow-hidden px-[clamp(1rem,4vw,2rem)] pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-40">
          <div className="absolute inset-0 z-0">
            <img
              alt="Agence branding Casablanca - studio We Yan Digital identité de marque et rebranding"
              src={heroImage}
              className="h-full w-full object-cover object-center opacity-20"
                    width={800}
                    height={600}
                    loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FFF7ED]" />
          </div>

          <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
            <div data-reveal>
              <PageBreadcrumb className="mb-6" />
              <span
                className="mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em]"
                style={{ backgroundColor: '#FFEDD5', color: '#C2410C', borderColor: '#FDBA74' }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#FC9700' }} />
                Agence branding · We Yan Digital · Casablanca Maarif
              </span>
              <h1 className="mb-7 font-black uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(1.75rem,5.8vw,3.35rem)] text-slate-900">
                Agence de Branding et Rebranding à{' '}
                <span className="italic" style={{ color: '#FC9700' }}>
                  Casablanca
                </span>
                {' : '}
                <span className="mt-3 block text-[clamp(1.15rem,3.2vw,1.85rem)] font-extrabold normal-case tracking-[-0.02em] text-slate-800">
                  Donnez une âme à votre marque
                </span>
              </h1>
              <p className="mb-5 max-w-2xl text-[clamp(1rem,2.1vw,1.15rem)] leading-8 text-slate-600">
                We Yan Digital est une <strong className="font-semibold text-slate-900">agence branding à Casablanca</strong>,
                implantée à Maarif, qui construit et relance des marques marocaines pour qu’elles soient comprises, désirées et
                choisies. Nous ne livrons pas un logo isolé : nous alignons promesse, identité visuelle, site et activation
                commerciale. We Yan Digital n’est pas qu’un studio graphique : c’est une{' '}
                <Link to="/agence-seo-casablanca" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  agence digitale à Casablanca
                </Link>{' '}
                qui aligne marque, Google et conversion sur le marché marocain. Une charte sans animation quotidienne
                s’éteint : couplez le rebranding au{' '}
                <Link
                  to="/community-management-casablanca"
                  className="font-bold text-[#6483F0] underline-offset-4 hover:underline"
                >
                  community management à Casablanca
                </Link>{' '}
                pour que logo, reels et stories parlent la même langue. PME d’Anfa, enseigne retail ou marque qui vise
                Rabat, Marrakech et Tanger : le travail commence par une lecture honnête de votre perception actuelle.
              </p>
              <p className="mb-9 max-w-2xl text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Le <strong className="font-semibold text-slate-800">branding</strong> crée une marque qui n’existe pas encore :
                nom, promesse, identité de marque, premiers points de contact. Le{' '}
                <strong className="font-semibold text-slate-800">rebranding à Casablanca</strong> corrige une marque déjà en
                marché — logo daté, fusion, nouveau positionnement, ou décalage avec le client 2026. Les deux exigent une
                stratégie marketing Maroc, pas un simple « lifting » de couleurs. C’est ce que nous vendons ici : une
                méthode, un calendrier, un budget en MAD, et une équipe qui reste après le PDF de charte.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
                  style={{ backgroundColor: '#FC9700', boxShadow: '0 22px 50px -18px rgba(252,151,0,0.65)' }}
                >
                  Demander un audit branding gratuit
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
                  alt="Atelier identité de marque Casablanca - charte, logo et positionnement We Yan Digital"
                  src={approachImage}
                  className="block h-auto w-full"
                    width={800}
                    height={600}
                    loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 max-w-[240px] rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)]">
                <p className="mb-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-slate-500">Marché Casa 2026</p>
                <p className="text-[2rem] font-black leading-none" style={{ color: '#FC9700' }}>
                  4 étapes
                </p>
                <p className="mt-1.5 text-[0.85rem] font-semibold leading-snug text-slate-600">
                  Audit, stratégie, identité visuelle, déploiement digital
                </p>
              </div>
            </figure>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[#F8FAFC] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[860px]" data-reveal>
            <h2 className="mb-6 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
              Pourquoi faire un rebranding à Casablanca en 2026 ?
            </h2>
            <div className="space-y-5 text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
              <p>
                Le marché marocain a changé de vitesse. Les clients comparent en deux scrolls, les avis Google pèsent plus
                qu’une vitrine Boulevard Zerktouni, et une identité floue se traduit tout de suite en devis « trop cher »
                — alors que le vrai problème est l’illisible. Un rebranding à Casablanca en 2026 n’est pas un caprice
                créatif : c’est un levier de conversion locale, au même titre qu’un site rapide ou une fiche Google
                soignée. Les entreprises qui restent sur un logo 2015, des photos stock et un discours copié-collé
                disparaissent derrière des concurrents plus clairs, même moins expérimentés. À Maarif, Anfa, Ain Diab
                comme à Sidi Maarouf, le client ne « ressent » plus la marque : il la scanne. S’il ne comprend pas en
                dix secondes ce que vous vendez et pourquoi vous, il swipe.
              </p>
              <p>
                Première raison : la concurrence Casa / Rabat s’est professionnalisée. Banques, retail, cliniques, food,
                B2B tech : tout le monde a « un Instagram ». Ce qui manque, c’est une identité de marque Casablanca
                distinctive — une promesse qu’on peut répéter en darija et en français sans se contredire. Deuxième
                raison : les équipes internes n’arrivent plus à expliquer l’offre. Commercial, community manager,
                agence média : chacun invente un pitch. Le rebranding recadre le message avant de dépenser le budget ads.
                Troisième raison : les points de contact se sont multipliés (WhatsApp Business, TikTok, Google Maps,
                packaging, uniformes, signatures mail). Sans système visuel, chaque support raconte une autre marque, et
                Google comme Meta apprennent un signal brouillé. Un rebranding propre aligne aussi NAP, visuels Maps et
                templates ads : moins de friction, plus de confiance.
              </p>
              <p>
                Un exemple local : une enseigne retail du Grand Casablanca, perçue « discount années 2010 », a repris
                naming, signalétique et ton. En quatre mois, le trafic magasin et le taux de devis signés ont bougé —
                pas grâce à une couleur tendance, grâce à une promesse enfin compréhensible. Ce n’est pas un cas isolé :
                les marques qui clarifient d’abord le positionnement convertissent mieux ensuite, y compris en SEA. Pour
                le déroulé décisions, charte et déploiement, lisez notre{' '}
                <Link
                  to="/blog/rebranding-exemple-casablanca-2026"
                  className="font-bold text-[#6483F0] underline-offset-4 hover:underline"
                >
                  exemple de rebranding à Casablanca
                </Link>{' '}
                avec le calendrier réel et les erreurs à ne plus copier en 2026.
              </p>
            </div>
          </div>
        </section>

        <section id="methode" className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div data-reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FED7AA] bg-[#FFF7ED] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#C2410C]">
                Méthode We Yan · 4 étapes
              </span>
              <h2 className="mb-6 font-black tracking-tight text-[clamp(1.8rem,4.6vw,2.75rem)] text-slate-900">
                Notre méthode de rebranding en 4 étapes
              </h2>
              <p className="mb-8 text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Chaque mission d’agence branding à Casablanca suit le même ordre : comprendre, décider, dessiner,
                déployer. Inverser l’ordre (logo d’abord) coûte deux fois le budget. La preuve se lit dans nos{' '}
                <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  réalisations rebranding
                </Link>
                , avant / après livrées pour des marques de Casablanca et du Maroc.
              </p>

              <div className="space-y-8">
                <article>
                  <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">1. Audit de marque</h3>
                  <p className="leading-8 text-slate-600">
                    Interviews direction et terrain, revue des supports, écoute clients, benchmark Casa / Rabat,
                    perception Google et réseaux. On nomme ce qui cloche : promesse floue, visuel daté, écart prix /
                    image. Livrable : diagnostic priorisé, pas un roman. Nous regardons aussi les avis, le NAP et les
                    templates ads existants : souvent le « problème logo » est un problème de message. La méthode se lit
                    concrètement dans nos{' '}
                    <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                      réalisations rebranding
                    </Link>{' '}
                    où l’audit a précédé chaque pixel.
                  </p>
                </article>
                <article>
                  <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">2. Stratégie &amp; Positionnement</h3>
                  <p className="leading-8 text-slate-600">
                    Cible, territoire, promesse unique, ton, architecture d’offre. Atelier en présentiel à Maarif ou
                    visio pour Rabat, Marrakech, Tanger. Décisions écrites : ce que vous êtes, ce que vous n’êtes plus,
                    comment un commercial Casablanca l’explique en vingt secondes. Sans cette étape, l’identité visuelle
                    n’est que décoration. Nous tranchons aussi le niveau de prix perçu : premium accessible, expert,
                    voisinage — pour que charte et offre ne se contredisent pas. Voyez le positionnement appliqué dans
                    nos{' '}
                    <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                      réalisations rebranding
                    </Link>{' '}
                    retail, cosmétique et hospitalité.
                  </p>
                </article>
                <article>
                  <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">3. Identité visuelle (logo, charte)</h3>
                  <p className="leading-8 text-slate-600">
                    Logo, palette, typographie, règles photo, déclinaisons print et digital. Charte utilisable par
                    votre imprimeur, votre community manager et votre développeur — pas un moodboard Pinterest. Nous
                    testons la lisibilité vitrine, mobile et Google Business. Les systèmes livrés apparaissent dans nos{' '}
                    <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                      réalisations rebranding
                    </Link>{' '}
                    avec avant / après packagings et interfaces.
                  </p>
                </article>
                <article>
                  <h3 className="mb-3 text-[1.15rem] font-black text-slate-900">4. Déploiement digital</h3>
                  <p className="leading-8 text-slate-600">
                    Site, templates réseaux, signatures, parfois SEO et ads de lancement. Un rebranding qui reste dans
                    un dossier Drive n’existe pas pour le client Casablanca. Nous planifions le bascule : date, assets,
                    formation interne, premiers contenus. Le déploiement se voit dans nos{' '}
                    <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                      réalisations rebranding
                    </Link>{' '}
                    : site, stories et fiche Google qui parlent enfin la même langue.
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
                src={positioningImage}
                alt="Positionnement de marque Casablanca - stratégie marketing We Yan Digital"
                className="mb-6 h-28 w-full rounded-2xl object-cover"
                    width={800}
                    height={600}
                    loading="lazy"
              />
              <h3 className="mb-5 text-[1.3rem] font-black tracking-tight">Audit branding gratuit cette semaine</h3>
              <ul className="mb-8 space-y-4">
                {[
                  'Lecture de votre perception actuelle (site, Google, réseaux)',
                  '3 écarts vs concurrents Casa / Rabat',
                  'Recommandation Starter, Growth ou Premium',
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
                Demander un audit branding gratuit
                <Icon name="send" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="prix" className="border-y border-slate-200 bg-[#FFF7ED] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="mx-auto mb-12 max-w-3xl text-center" data-reveal>
              <h2 className="mb-4 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
                Combien coûte un rebranding à Casablanca ?
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Les fourchettes « à partir de 3 000 MAD » cachent un logo Canva. Chez We Yan Digital, le prix d’une
                agence branding à Casablanca est publié. Starter, Growth et Premium sont HT, sans pack surprise. Le
                devis final dépend du nombre de déclinaisons, de la reprise du site et du volume de contenus. Tableau
                indicatif 2026, valable pour Casablanca, Rabat, Marrakech et Tanger.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_44px_-24px_rgba(15,23,42,0.35)]" data-reveal>
              <table className="w-full min-w-[640px] text-left text-[0.95rem]">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.12em]">Pack</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.12em]">Inclus</th>
                    <th className="px-6 py-4 font-black uppercase tracking-[0.12em]">Prix</th>
                  </tr>
                </thead>
                <tbody>
                  {packs.map((pack) => (
                    <tr key={pack.nom} className="border-t border-slate-200">
                      <td className="px-6 py-5 font-black text-slate-900">{pack.nom}</td>
                      <td className="px-6 py-5 text-slate-600">{pack.inclus}</td>
                      <td className="px-6 py-5 font-black text-slate-900">{pack.prix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {packs.map((pack) => (
                <article
                  key={pack.nom}
                  className={`rounded-[1.5rem] border p-6 ${
                    pack.featured ? 'border-[#FC9700] bg-white shadow-[0_18px_40px_-20px_rgba(252,151,0,0.45)]' : 'border-slate-200 bg-white'
                  }`}
                  data-reveal
                >
                  <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-slate-500">{pack.nom}</p>
                  <p className="mb-3 text-[1.05rem] font-black text-slate-900">{pack.inclus}</p>
                  <p className="leading-7 text-slate-600">{pack.detail}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-[0.95rem] leading-8 text-slate-600" data-reveal>
              Un Starter mal cadré coûte plus cher qu’un Growth bien cadré : on refait le site six mois plus tard. Dites-nous
              où vous en êtes, nous recommandons le pack — pas le plus cher. Pour cadrer pack, délais et budget en MAD à
              Casablanca,{' '}
              <Link to="/contact" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                demander un audit branding gratuit
              </Link>{' '}
              : nous répondons sous 24h ouvrées, sans aucun engagement.
            </p>
          </div>
        </section>

        <section className="px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto mb-12 max-w-3xl" data-reveal>
              <h2 className="mb-4 font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.75rem)] text-slate-900">
                Nos réalisations rebranding à Casablanca
              </h2>
              <p className="text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
                Trois extraits. Le détail (brief, contraintes, calendrier) est dans le portfolio. Chaque projet a un
                avant / après : perception, supports, et ce que le client Casablanca voit aujourd’hui. Nous montrons
                volontairement des secteurs différents — retail, cosmétique, hospitalité — pour que vous voyiez la
                méthode, pas un style unique copié-collé. Les visuels ci-dessous sont des extraits de tournage et de
                direction artistique : le fil rouge, c’est la cohérence logo / photo / interface, pas un effet de mode.
                Pour la galerie complète et d’autres silos (SEO, social), ouvrez nos{' '}
                <Link to="/projets" className="font-bold text-[#6483F0] underline-offset-4 hover:underline">
                  réalisations rebranding
                </Link>
                . Si votre secteur n’apparaît pas, le process reste le même : audit, positionnement, identité,
                déploiement digital à Casablanca et au Maroc.
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
                    alt={`rebranding-casablanca-${item.nom}`}
                    className="h-52 w-full object-cover"
                    width={800}
                    height={600}
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
              Rebranding vs Community Management : quel levier choisir ?
            </h2>
            <div className="space-y-5 text-[clamp(0.95rem,2vw,1.08rem)] leading-8 text-slate-600">
              <p>
                Un rebranding sans community management, c’est une charte qui dort. Un community management sans
                branding, c’est du contenu qui change de visage chaque semaine. À Casablanca, les deux silos se tiennent :
                d’abord une identité de marque claire, ensuite une{' '}
                <Link
                  to="/services/creation-contenu-community-management"
                  className="font-bold text-[#6483F0] underline-offset-4 hover:underline"
                >
                  creation de contenu maroc
                </Link>{' '}
                calée sur cette identité — calendrier, studio, reels, réponses. Si votre promesse n’est pas écrite, chaque
                post invente une autre entreprise. Si la promesse est écrite mais invisible, Instagram et TikTok restent
                vides pendant que vos concurrents Maarif publient.
              </p>
              <p>
                Règle simple : branding d’abord si vos équipes ne savent pas expliquer l’offre, si le logo fait fuir, si
                le site contredit la vitrine. Community ensuite — ou en parallèle dès le pack Growth — via le{' '}
                <Link
                  to="/community-management-casablanca"
                  className="font-bold text-[#6483F0] underline-offset-4 hover:underline"
                >
                  community management casablanca
                </Link>
                . We Yan Digital tient les deux métiers dans la même agence pour éviter le classique : une DA qui livre,
                une autre équipe qui ignore la charte. C’est ainsi que Branding et CM se poussent mutuellement : la
                money page branding envoie du jus vers la money page social, et l’inverse via le footer et le hub
                services.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#FED7AA] bg-[#FFF7ED] px-[clamp(1rem,4vw,2rem)] py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center" data-reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FDBA74] bg-white px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#C2410C]">
                FAQ Rebranding Casablanca · Rich snippet
              </span>
              <h2 className="font-black tracking-tight text-[clamp(1.75rem,4.6vw,2.6rem)] text-slate-900">
                FAQ Rebranding Casablanca
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((item, index) => (
                <details
                  key={item.q}
                  open={index === 0}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.35)] open:border-[#FC9700] open:shadow-[0_18px_40px_-20px_rgba(252,151,0,0.45)]"
                  data-reveal
                  data-reveal-delay={String(index * 50)}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 marker:content-none">
                    <h3 className="text-[1rem] font-bold leading-snug text-slate-900 marker:content-none">{item.q}</h3>
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition-transform group-open:rotate-45 group-open:border-[#FC9700] group-open:bg-[#FC9700] group-open:text-slate-900"
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
              Prêt à donner une âme à votre marque ?
            </h2>
            <p className="mb-8 text-[clamp(0.95rem,2vw,1.1rem)] leading-8 text-slate-600">
              Audit branding gratuit : perception actuelle, concurrence Casa, trois chantiers priorisés. Réponse sous
              24h ouvrées.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-5 text-[0.82rem] font-black uppercase tracking-[0.2em] text-white shadow-[0_22px_50px_-18px_rgba(252,151,0,0.65)] transition-all hover:-translate-y-0.5 hover:brightness-110"
              style={{ backgroundColor: '#FC9700' }}
            >
              Demander un audit branding gratuit
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
