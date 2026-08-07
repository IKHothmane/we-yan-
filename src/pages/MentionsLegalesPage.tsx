import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import { pageSeo } from '../lib/pageSeo'
import SiteFooter from '../components/SiteFooter'

export default function MentionsLegalesPage() {

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-900">
      <PageSeo {...pageSeo.mentionsLegales} />
      <Navbar serviceTitle="Mentions Légales · We Yan Digital" />

      <main>
        <div className="w-full max-w-[1080px] mx-auto px-[clamp(1rem,5vw,2rem)] py-[clamp(3.5rem,8vw,5rem)]">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-[0.82rem] text-slate-500 mb-8" aria-label="Fil d'Ariane">
          <Link to="/" className="hover:text-[#6483F0] transition-colors">We Yan Digital</Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700 font-medium">Mentions Légales</span>
        </nav>

        <h1 className="font-black tracking-tight leading-[1.05] text-[clamp(2rem,5.4vw,3.2rem)] mb-4">
          Mentions Légales
        </h1>
        <p className="text-slate-600 text-[clamp(1rem,2.5vw,1.15rem)] leading-relaxed mb-3 max-w-3xl">
          Informations légales et éditoriales du site weyandigital.ma — Conformes au Code de la Consommation, Code du Numérique et Dahut RGPD du Royaume du Maroc, ainsi qu'au droit européen applicable.
        </p>
        <p className="text-slate-500 text-sm mb-14">Dernière mise à jour : 01 août 2026</p>

        {/* Section 1 */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-5 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            1. Éditeur du site
          </h2>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] mb-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="px-6 py-5 bg-white">
                <p className="text-[0.75rem] uppercase tracking-widest text-slate-400 font-bold mb-2">Raison sociale</p>
                <p className="text-slate-800 font-bold text-[1.08rem] leading-snug">We Yan Digital</p>
                <p className="text-slate-500 text-sm mt-1">Agence digitale full-service · Casablanca Maroc</p>
              </div>
              <div className="px-6 py-5 bg-white">
                <p className="text-[0.75rem] uppercase tracking-widest text-slate-400 font-bold mb-2">Forme juridique</p>
                <p className="text-slate-800 font-bold text-[1.08rem] leading-snug">Société à Responsabilité Limitée (S.A.R.L. — Maroc)</p>
                <p className="text-slate-500 text-sm mt-1">Capital social (indiqué sur demande)</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-t border-slate-100">
              <div className="px-6 py-5">
                <p className="text-[0.75rem] uppercase tracking-widest text-slate-400 font-bold mb-2">Identifiants fiscaux & commerce</p>
                <ul className="space-y-1 text-slate-700 text-[0.98rem] leading-relaxed">
                  <li className="flex items-start justify-between gap-3"><span className="text-slate-500">Identifiant Fiscal (IF)</span><span className="font-semibold">— — — —</span></li>
                  <li className="flex items-start justify-between gap-3"><span className="text-slate-500">Registre de Commerce (RC) Casablanca</span><span className="font-semibold">— — — —</span></li>
                  <li className="flex items-start justify-between gap-3"><span className="text-slate-500">Identifiant Commun de l'Entreprise (ICE)</span><span className="font-semibold">— — — —</span></li>
                  <li className="flex items-start justify-between gap-3"><span className="text-slate-500">Patente / Taxe professionnelle</span><span className="font-semibold">— — — —</span></li>
                  <li className="flex items-start justify-between gap-3"><span className="text-slate-500">CNSS</span><span className="font-semibold">— — — —</span></li>
                </ul>
                <p className="text-[0.8rem] text-slate-400 mt-3 leading-snug">* Ces champs seront complétés sur production du certificat RC final. Pour toute vérification, contactez notre équipe juridique.</p>
              </div>
              <div className="px-6 py-5">
                <p className="text-[0.75rem] uppercase tracking-widest text-slate-400 font-bold mb-2">Siège social</p>
                <p className="text-slate-800 font-medium text-[1rem] leading-relaxed">
                  We Yan Digital<br />
                  Quartier Maarif, Casablanca 20100<br />
                  Royaume du Maroc
                </p>
                <div className="mt-4 space-y-2">
                  <p className="flex items-center gap-2 text-slate-700 text-[0.95rem]"><span className="text-[#6483F0]">📞</span> <a href="tel:+212691567246" className="font-semibold hover:underline">+212 6 91 56 72 46</a></p>
                  <p className="flex items-center gap-2 text-slate-700 text-[0.95rem]"><span className="text-[#6483F0]">✉️</span> <a href="mailto:contact@weyandigital.ma" className="font-semibold hover:underline">contact@weyandigital.ma</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            2. Directeur de la publication
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem]">
            <p>
              Le Directeur de la publication du site internet weyandigital.ma, au sens des articles 13 et suivants du Dahut n° 1-00-206 du 18 Rabia Ier 1422 relatif à la presse et à la publication au Maroc, est le représentant légal de We Yan Digital (Casablanca, Maroc).
            </p>
            <p className="mt-2">
              Toute demande relative au contenu éditorial doit être adressée à <a href="mailto:contact@weyandigital.ma" className="text-[#6483F0] font-semibold">contact@weyandigital.ma</a> avec mention « Directeur de publication — We Yan Digital » en objet.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            3. Hébergeur du site
          </h2>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <div className="px-6 py-5 bg-slate-50 border-b border-slate-100">
              <p className="text-slate-500 text-[0.8rem] uppercase tracking-widest font-bold">Fournisseur d'hébergement principal</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 px-6 py-5 gap-4">
              <div>
                <p className="text-slate-800 font-bold text-[1.08rem] mb-2">OVH SAS / OVHCloud</p>
                <p className="text-slate-600 text-[0.95rem] leading-relaxed">
                  2 rue Kellermann — 59100 Roubaix, France<br />
                  RCS Lille Métropole 424 761 419 00045<br />
                  SAS au capital de 10 174 560 €
                </p>
                <p className="mt-3 text-slate-500 text-sm">
                  Tél OVH (assistance hébergement) : <a href="tel:+33972101007" className="font-semibold text-slate-600 hover:text-[#6483F0]">+33 9 72 10 10 07</a>
                </p>
              </div>
              <div>
                <p className="text-slate-700 font-bold mb-2 text-[1rem]">Types de données hébergées</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1 text-[0.95rem]">
                  <li>Fichiers statiques du site (React SPA, images, CSS)</li>
                  <li>Emails et formulaires (via service SMTP sécurisé)</li>
                  <li>Backups chiffrés journaliers</li>
                  <li>Certificat SSL/TLS Let's Encrypt + HSTS</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-[0.9rem] mt-3 leading-relaxed">
            <strong>Hébergement secondaire Maroc (optionnel pour clients Maroc) :</strong> hébergement via prestataire agréé (ANRT) Rabat/Casablanca. Facturation & contrat transmis sur demande.
          </p>
        </section>

        {/* Section 4 */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            4. Propriété intellectuelle
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem] space-y-2">
            <p>L'ensemble des éléments contenus sur le site weyandigital.ma est protégé par la législation marocaine et internationale sur la propriété intellectuelle (Code de la Propriété Intellectuelle du Royaume du Maroc, article 357 et suivants).</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>✅ Logo We Yan Digital, charte graphique, marque MAKE IT DIFFERENT : marques déposées We Yan Digital (© 2024 - 2026).</li>
              <li>✅ Textes, pages long tail SEO, articles blog, études de cas, infographies, visuels & illustrations : © We Yan Digital — tous droits réservés.</li>
              <li>✅ Logo marques citées (Google Partner, Meta Business Partner, TikTok Shop…) : propriété de leurs détenteurs respectifs.</li>
            </ul>
            <p className="mt-2">
              Toute reproduction, représentation, diffusion, republication, téléchargement, modification, utilisation ou vente, même partielle, d'un contenu protégé sans autorisation écrite préalable de We Yan Digital est strictement interdite et passible de poursuites civiles et pénales conformément aux articles 357 à 433 du Code de la Propriété Intellectuelle Maroc (J.O. n° 5395 du 16 Joumada II 1420 — 13 septembre 1999).
            </p>
            <p className="mt-2 text-slate-600">
              🙋 Autorisation de citation : Les courtes citations de nos articles (max 2 paragraphes) sont permises sous réserve de mentionner la source weyandigital.ma par un lien hypertexte <strong>indexable en dofollow</strong> vers la page source — tout article copié collé sans lien expose son auteur à une plainte Google DMCA (dépublication sous 72h garantie).
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="scroll-mt-24 mb-11">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            5. Contact entreprise / Modification des mentions
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem] space-y-2">
            <p><strong>Pour toute demande légale, certification, preuve RC, appel d'offres ou vérification :</strong></p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Email juridique & achats : <a href="mailto:contact@weyandigital.ma" className="text-[#6483F0] font-semibold">contact@weyandigital.ma</a> (Mention : Service Juridique — Mentions Légales)</li>
              <li>Téléphone : <a href="tel:+212691567246" className="text-[#6483F0] font-semibold">+212 6 91 56 72 46</a> (lun-ven, 9h-18h, fuseau GMT+1 / Casablanca)</li>
              <li>Adresse correspondance : We Yan Digital — Maarif, Casablanca 20100, Maroc</li>
            </ul>
            <p className="mt-3 text-slate-500 text-[0.95rem]">
              <em>⚠️ Les présentes mentions légales peuvent être mises à jour à tout moment (nouvel hébergeur, nouveau numéro RC, changement capital…). Merci de consulter cette page avant toute déclaration, copie ou appel d'offres avec We Yan Digital.</em>
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="scroll-mt-24 mb-14">
          <h2 className="text-[1.4rem] sm:text-[1.55rem] font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span aria-hidden="true" className="h-7 w-1.5 rounded-full" style={{ backgroundColor: '#6483F0' }} />
            6. Responsabilité éditoriale & déclarations non-contractuelles
          </h2>
          <div className="text-slate-700 leading-[1.9] text-[1rem] sm:text-[1.05rem] space-y-2">
            <p>We Yan Digital s'efforce de fournir sur le site weyandigital.ma des informations aussi précises, à jour et véridiques que possible (informations tarifaires, études SEO, guides blog, comparatifs prix Maroc 2026).</p>
            <p>Nous ne saurions toutefois garantir :</p>
            <ol className="list-decimal pl-6 space-y-1.5">
              <li>L'absence d'erreurs typographiques ou d'omissions sur une page (malgré relectures multiples) — <strong>nous vous remercions de nous signaler toute erreur à contact@weyandigital.ma, correction sous 48h.</strong></li>
              <li>L'absence d'indisponibilité temporaire pour maintenance technique (max 15 min / mois en dehors des heures ouvrées).</li>
              <li>La nature <strong>exclusivement indicative</strong> des tarifs et fourchettes publiés dans les pages Services, Création Site Web Casablanca et Blog : aucun prix n'est contractuel avant signature d'un devis détaillé signé We Yan Digital.</li>
            </ol>
            <p className="mt-3">Conformément aux articles 73 et suivants du Dahut n° 09-08 du 18 février 2009 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel (CNDP), toute personne physique ou morale peut demander la rectification ou le retrait d'une information erronée la concernant.</p>
          </div>
        </section>

        {/* CTA */}
        <div
          className="mt-14 rounded-3xl px-[clamp(1.5rem,5vw,3rem)] py-[clamp(2rem,5.5vw,3rem)] shadow-[0_30px_60px_-30px_rgba(15,23,42,0.35)] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          style={{ backgroundColor: '#6483F0' }}
        >
          <div>
            <h3 className="text-[clamp(1.25rem,3.2vw,1.75rem)] font-black leading-tight mb-2">
              Prêt.e à booster votre marque digitale ?
            </h3>
            <p className="text-white/85 max-w-xl text-[1rem] leading-relaxed">
              Site web premium, SEO premier Google, branding de marque. Nos devis We Yan Digital sont détaillés, transparents, sans surprise — sous 24h ouvrables.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[0.95rem] font-black uppercase tracking-wider shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap"
            style={{ color: '#6483F0' }}
          >
            Demander un devis
          </Link>
        </div>
      </div>

      <SiteFooter />
      </main>
    </div>
  )
}
