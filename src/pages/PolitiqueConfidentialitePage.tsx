import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import { pageSeo } from '../lib/pageSeo'
import SiteFooter from '../components/SiteFooter'

export default function PolitiqueConfidentialitePage() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-900">
      <PageSeo {...pageSeo.politiqueConfidentialite} />
      <Navbar serviceTitle="Confidentialité · RGPD Maroc" />

      <main>
        <div className="w-full max-w-[1080px] mx-auto px-[clamp(1rem,5vw,2rem)] py-[clamp(3.5rem,8vw,5rem)]">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-[0.82rem] text-slate-500 mb-8" aria-label="Fil d'Ariane">
          <Link to="/" className="hover:text-[#6483F0] transition-colors">We Yan Digital</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700 font-medium">Politique de Confidentialité</span>
        </nav>

        <h1 className="font-black tracking-tight leading-[1.05] text-[clamp(2rem,5.4vw,3.2rem)] mb-4">
          Politique de Confidentialité & Protection des Données
        </h1>
        <p className="text-slate-600 text-[clamp(1rem,2.5vw,1.15rem)] leading-relaxed mb-3 max-w-3xl">
          We Yan Digital s'engage à protéger votre vie privée. Cette page décrit comment nous collectons, utilisons et sécurisons vos données personnelles, conformément au Dahut n° 09-08 RGPD Maroc (CNDP Rabat) et au RGPD européen 2016/679 selon applicable.
        </p>
        <p className="text-slate-500 text-sm mb-14">Dernière mise à jour : 01 août 2026</p>

        {/* -------- Section 1 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            1. Responsable du traitement (Controller)
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem]">
            <p>
              Le responsable du traitement de vos données personnelles est la société <strong>We Yan Digital</strong>, agence digitale immatriculée au registre de commerce de Casablanca (Maroc), dont le siège social est situé au quartier Maarif, Casablanca, Maroc.
            </p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Email DPO / contact données : <a href="mailto:contact@weyandigital.ma" className="text-[#6483F0] font-semibold">contact@weyandigital.ma</a></li>
              <li>Téléphone : <a href="tel:+212691567246" className="text-[#6483F0] font-semibold">+212 6 91 56 72 46</a></li>
              <li>Adresse postale : We Yan Digital — Casablanca Maarif, 20100, Royaume du Maroc</li>
            </ul>
          </div>
        </section>

        {/* -------- Section 2 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            2. Quelles données collectons-nous ?
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem] space-y-3">
            <p>Nous collectons uniquement les données strictement nécessaires pour répondre à vos demandes et vous accompagner dans votre projet digital :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données formulaire de contact & devis :</strong> Prénom, Nom, entreprise, email, téléphone, nom de domaine, message libre, ville (Casablanca, Marrakech, Rabat…), budget envisagé.</li>
              <li><strong>Données navigation & cookies :</strong> Adresse IP anonymisée, navigateur, pages consultées, source d'acquisition (Google, Facebook, newsletter, direct…), appareil utilisé.</li>
              <li><strong>Données relation client :</strong> Historique des échanges emails/appels, devis signés, factures payées, livrables, accès client dashboard reporting SEO / Ads.</li>
              <li><strong>Données des clients campagnes publicitaires :</strong> Lors de la gestion de vos campagnes Meta Ads / Google Ads, vous restez propriétaire de vos comptes publicitaires ; nous n'avons accès qu'aux métadonnées et aux audiences, jamais aux coordonnées bancaires de vos prospects.</li>
            </ul>
            <p className="text-slate-500 text-[0.95rem]"><em>💡 Nous ne demandons <strong>jamais</strong> d'informations sensibles : CIN/Passeport, RIB, religion, opinions politiques, données biométriques. Si ce n'est pas dans la liste ci-dessus, nous n'en avons pas besoin.</em></p>
          </div>
        </section>

        {/* -------- Section 3 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            3. Finalités du traitement
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem]">
            <p className="mb-3">Vos données sont traitées pour une finalité explicite et unique — jamais réutilisées à votre insu :</p>
            <ol className="list-decimal pl-6 space-y-1.5">
              <li><strong>Réponse à votre demande</strong> : devis, audit SEO gratuit, appel de découverte, sous 24h ouvrées.</li>
              <li><strong>Exécution contractuelle</strong> : réalisation de la prestation (site web, branding, SEO, SEA, CM).</li>
              <li><strong>Facturation & comptabilité</strong> (obligation légale, conservation 10 ans conformément au CGI Maroc).</li>
              <li><strong>Amélioration du site & du SEO</strong> : compter le nombre de visites et de pages vues pour optimiser notre contenu (Google Analytics anonymisé).</li>
              <li><strong>Prospection commerciale douce</strong> : newsletter mensuelle We Yan Trends (SEO/Branding/Ads Maroc) uniquement si vous avez coché la case correspondante. Désinscription en 1 clic.</li>
            </ol>
          </div>
        </section>

        {/* -------- Section 4 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            4. Base légale du traitement (RGPD)
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem]">
            Les traitements mis en œuvre reposent sur l'une des 4 bases légales suivantes :
            <ul className="list-disc pl-6 space-y-1.5 mt-2">
              <li>Votre <strong>consentement</strong> explicite (case à cocher formulaire, cookies non essentiels) — <em>art. 6.1.a RGPD.</em></li>
              <li>L'<strong>exécution d'un contrat</strong> ou de mesures précontractuelles à votre demande (devis signé) — <em>art. 6.1.b RGPD.</em></li>
              <li>L'<strong>obligation légale</strong> (conservation factures, documents fiscaux Maroc, réponse à une injonction CNDP ou judiciaire) — <em>art. 6.1.c RGPD.</em></li>
              <li>L'<strong>intérêt légitime</strong> de We Yan Digital (amélioration UX, statistiques anonymes, lutte contre le SPAM) sans préjudice de vos droits fondamentaux — <em>art. 6.1.f RGPD.</em></li>
            </ul>
          </div>
        </section>

        {/* -------- Section 5 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            5. Durée de conservation
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-4">
            <table className="min-w-full border-collapse text-[0.95rem]">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left px-5 py-3 border-b border-slate-200 font-bold text-slate-700">Catégorie de données</th>
                  <th className="text-left px-5 py-3 border-b border-slate-200 font-bold text-slate-700">Durée de conservation</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="px-5 py-3 border-b border-slate-100 text-slate-700">Prospects n'ayant pas signé de devis</td>
                  <td className="px-5 py-3 border-b border-slate-100 text-slate-700 font-medium">3 ans à compter du dernier contact</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-slate-100 text-slate-700">Clients (données relationnelles)</td>
                  <td className="px-5 py-3 border-b border-slate-100 text-slate-700 font-medium">5 ans après fin de la relation commerciale</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 border-b border-slate-100 text-slate-700">Factures, pièces comptables & fiscales</td>
                  <td className="px-5 py-3 border-b border-slate-100 text-slate-700 font-medium">10 ans (Dahut fisc Maroc)</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-slate-700">Logs anonymisés Analytics & serveur</td>
                  <td className="px-5 py-3 text-slate-700 font-medium">14 mois maximum</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-[0.95rem] leading-relaxed">
            À l'expiration, vos données sont soit anonymisées définitivement (pour statistiques agrégées), soit supprimées de façon sécurisée.
          </p>
        </section>

        {/* -------- Section 6 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            6. Cookies & traceurs
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem] space-y-2">
            <p>Le site weyandigital.ma utilise plusieurs catégories de cookies :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>🍪 Cookies strictement nécessaires (aucun consentement)</strong> : session React, anti-SPAM formulaire (Turnstile/hCaptcha). Durée de vie max 7 jours.</li>
              <li><strong>📊 Cookies de mesure d'audience (consentement)</strong> : Google Analytics 4 anonymisé (IP tronquée, pas de collecte CIN), pour compter les visites sans vous identifier. Vous pouvez désactiver GA à tout moment via les paramètres.</li>
              <li><strong>🎯 Cookies publicitaires (consentement)</strong> : Meta Pixel, Google Ads Remarketing Tag — utilisés uniquement si vous êtes intéressés par nos campagnes (SEO, création site web Maroc). Supprimables 1 clic dans la bannière.</li>
            </ul>
            <p>Vous pouvez gérer vos préférences à tout moment via le bandeau Cookies en bas à gauche, ou directement dans les paramètres de votre navigateur (Chrome, Safari, Firefox, Edge).</p>
          </div>
        </section>

        {/* -------- Section 7 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            7. Vos droits CNDP / RGPD
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem] space-y-2">
            <p>Vous disposez des droits suivants, gratuits et sans motif à justifier :</p>
            <ol className="list-decimal pl-6 space-y-1.5">
              <li><strong>Droit d'accès</strong> : connaître précisément quelles données nous détenons sur vous.</li>
              <li><strong>Droit de rectification</strong> : corriger toute information inexacte (numéro téléphone, adresse…).</li>
              <li><strong>Droit à l'effacement (« droit à l'oubli »)</strong> : demander la suppression totale de vos données (hors conservation obligatoire).</li>
              <li><strong>Droit à la limitation</strong> : figer le traitement dans certains cas (contestation exactitude des données).</li>
              <li><strong>Droit à la portabilité</strong> : récupérer vos données fournies dans un format structuré, lisible et interopérable (JSON/CSV).</li>
              <li><strong>Droit d'opposition</strong> : vous opposer à un traitement basé sur intérêt légitime ou prospection commerciale.</li>
              <li><strong>Droit de définir des directives post-mortem</strong> sur le devenir de vos données.</li>
              <li><strong>Droit d'introduire une réclamation</strong> auprès de la <strong>CNDP (Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel, Rabat — Maroc)</strong> si vous estimez que vos droits n'ont pas été respectés.</li>
            </ol>
            <p className="mt-3"><strong>Comment exercer ?</strong> Email : <a href="mailto:contact@weyandigital.ma" className="text-[#6483F0] font-semibold">contact@weyandigital.ma</a> · Tél : <a href="tel:+212691567246" className="text-[#6483F0] font-semibold">+212 6 91 56 72 46</a> · Réponse sous <strong>30 jours calendaires</strong> (art. 12 RGPD).</p>
          </div>
        </section>

        {/* -------- Section 8 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            8. Sécurité & hébergement
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem] space-y-2">
            <p>We Yan Digital met en œuvre les mesures de sécurité physiques, logiques et organisationnelles suivantes :</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Accès aux données limitées aux seuls salariés We Yan Digital dûment habilités, sur le principe du "need to know".</li>
              <li>Hébergement site web & emails : serveurs sécurisés (SSD, backups journaliers chiffrés, pare-feu WAF, HTTPS HSTS strict).</li>
              <li>Authentification forte 2FA sur tous nos outils internes et comptes Ads/Search Console clients.</li>
              <li>Chiffrement AES-256 des pièces sensibles échangées (factures, maquettes confidentielles).</li>
              <li>Aucun partage, vente, location ou échange de vos données personnelles avec un tiers commerçant — <strong>jamais</strong>.</li>
            </ul>
            <p className="text-slate-500 mt-3 text-[0.95rem]"><em>💡 Les seuls destinataires externes éventuels : comptables & commissaires aux comptes (obligation légale Maroc), hébergeur, prestataires de paiement CMI/Stripe (uniquement lors d'un règlement). Tous soumis à une clause de confidentialité conforme RGPD.</em></p>
          </div>
        </section>

        {/* -------- Section 9 -------- */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            9. Transferts de données hors UE & Maroc
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem]">
            Certains outils que nous utilisons (Google Analytics, Meta Ads, Google Ads, Mailchimp, Notion, Figma, Slack) peuvent héberger certaines métadonnées anonymisées ou agrégées sur leurs serveurs situés aux États-Unis ou dans l'Union Européenne. Ces transferts sont effectués dans le strict respect des textes applicables (décisions adéquation UE, clauses contractuelles types standardisées). Pour toute question précise sur un sous-traitant, contactez-nous : nous vous transmettons l'inventaire des sous-traitants.
          </div>
        </section>

        {/* -------- Section 10 -------- */}
        <section className="scroll-mt-24 mb-14">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            10. Modifications & contact DPO
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem]">
            We Yan Digital se réserve le droit de modifier à tout moment la présente politique de confidentialité, notamment pour se conformer à toute nouvelle disposition légale (Royaume du Maroc, UE, CNDP). Les modifications sont applicables dès leur publication en ligne et portent la date de mise à jour en haut de cette page.
            <p className="mt-3"><strong>📮 Correspondance DPO</strong> : We Yan Digital — Délégué à la Protection des Données · contact@weyandigital.ma · +212 6 91 56 72 46 · Réponse sous 30 jours.</p>
          </div>
        </section>

        {/* CTA */}
        <div
          className="mt-14 rounded-3xl px-[clamp(1.5rem,5vw,3rem)] py-[clamp(2rem,5.5vw,3rem)] shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          style={{ backgroundColor: '#6483F0' }}
        >
          <div>
            <h3 className="text-[clamp(1.25rem,3.2vw,1.75rem)] font-black leading-tight mb-2">
              Besoin d'un audit digital gratuit ?
            </h3>
            <p className="text-white/85 max-w-xl text-[1rem] leading-relaxed">
              Analyse SEO, performance site web, funnel Ads. On vous explique tout en darija ou en français — sous 24h ouvrées.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[0.95rem] font-black uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap"
            style={{ color: '#6483F0' }}
          >
            Demander mon audit
          </Link>
        </div>
      </div>

      <SiteFooter />
      </main>
    </div>
  )
}
