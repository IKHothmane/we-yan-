import { Link } from 'react-router-dom'

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: '/icons/instagram.svg' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: '/icons/linkedin-in.svg' },
  { href: 'https://facebook.com', label: 'Facebook', icon: '/icons/facebook-f.svg' },
] as const

const serviceSubItems = [
  { label: 'SEO', to: '/services/seo' },
  { label: 'SEA', to: '/services/publicite-digitale' },
  { label: 'Social Media', to: '/services/creation-contenu-community-management' },
  { label: 'Branding', to: '/services/strategie-marketing-rebranding' },
  { label: 'Création Site Web', to: '/services' },
  { label: 'Media Offline', to: '/services/media-publicite-offline' },
] as const

const iconMaskStyle = (url: string) =>
  ({
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center',
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    backgroundColor: 'currentColor',
  }) as const

type SiteFooterProps = {
  revealDelay?: string
}

export default function SiteFooter({ revealDelay }: SiteFooterProps) {
  const revealProps = revealDelay
    ? { 'data-reveal': '', 'data-reveal-delay': revealDelay }
    : {}

  return (
    <footer
      className="w-full py-[clamp(3.5rem,8vw,4.5rem)] text-white"
      style={{ backgroundColor: '#6483F0' }}
      {...revealProps}
    >
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,4vw,2.5rem)]">
        <h2 className="sr-only">Pied de page</h2>
        <div className="w-full grid grid-cols-1 gap-[clamp(2.5rem,6vw,4rem)] md:grid-cols-2 xl:grid-cols-4 items-start">
          {/* COL 1 — Brand + Suivez-nous + Copyright */}
          <div className="flex flex-col h-full">
            <Link to="/" className="flex items-center gap-3 mb-6 hover:brightness-110 transition-all w-fit">
              <img
                src="/Logo%20weyan.png"
                alt="We Yan Digital · Agence digitale à Casablanca"
                className="h-[clamp(2.75rem,7vw,4rem)] w-auto object-contain drop-shadow-[0_14px_34px_-12px_rgba(15,23,42,0.35)]"
                loading="lazy"
              />
            </Link>
            <p className="text-white/90 text-[0.95rem] leading-relaxed max-w-[18rem] mb-8">
              Agence digitale à Casablanca qui transforme les marques avec créativité et stratégie.
            </p>

            <div className="mt-auto">
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white/65 mb-4">
                Suivez-nous
              </p>
              <div className="flex items-center gap-3 mb-8">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white/90 transition-all hover:bg-white hover:text-[#6483F0] hover:border-white"
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visitez notre ${socialLink.label}`}
                  >
                    <span aria-hidden="true" className="h-4 w-4" style={iconMaskStyle(socialLink.icon)} />
                  </a>
                ))}
              </div>
              <p className="text-[0.8rem] text-white/65">
                © 2026 We Yan Digital. Tous droits réservés.
              </p>
            </div>
          </div>

          {/* COL 2 — EXPLORER */}
          <div>
            <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.22em] mb-5 text-white/65">
              Explorer
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  className="text-white hover:text-white/85 transition-colors text-[1rem] font-semibold inline-flex items-center"
                  to="/projets"
                >
                  Nos Projets
                </Link>
              </li>
              <li>
                <p className="text-[0.8rem] font-bold uppercase tracking-[0.22em] mt-6 mb-3 text-white/65">
                  Services
                </p>
                <ul className="space-y-2.5">
                  {serviceSubItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        className="text-white/95 hover:text-white transition-colors text-[1rem] font-medium inline-block"
                        to={item.to}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="pt-6">
                <Link
                  className="text-white hover:text-white/85 transition-colors text-[1rem] font-semibold inline-flex items-center"
                  to="/agence"
                >
                  Notre Agence
                </Link>
              </li>
              <li>
                <Link
                  className="text-white/95 hover:text-white transition-colors text-[1rem] font-medium inline-block"
                  to="/blog/prix-site-web-maroc-2026"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3 — LÉGAL + Carte trust */}
          <div className="flex flex-col h-full">
            <div>
              <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.22em] mb-5 text-white/65">
                Légal
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <Link
                    className="text-white/95 hover:text-white transition-colors text-[1rem] font-medium inline-block"
                    to="/conditions-generales"
                  >
                    Conditions Générales
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/95 hover:text-white transition-colors text-[1rem] font-medium inline-block"
                    to="/politique-de-confidentialite"
                  >
                    Politique de Confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/95 hover:text-white transition-colors text-[1rem] font-medium inline-block"
                    to="/mentions-legales"
                  >
                    Mentions Légales
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white/95 hover:text-white transition-colors text-[1rem] font-medium inline-block"
                    to="/contact"
                  >
                    Contactez-nous
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-10">
              <Link
                to="/contact"
                className="block rounded-2xl border border-white/15 px-5 py-5 hover:bg-white/10 transition-all"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <p className="text-white font-bold text-[0.95rem] leading-relaxed mb-1.5">
                  Basé à Casablanca,
                  <br className="hidden sm:block" />
                  disponible dans tout le Maroc.
                </p>
                <p className="text-white/60 text-[0.82rem] leading-relaxed">
                  Réponse sous 24h ouvrées.
                </p>
              </Link>
            </div>
          </div>

          {/* COL 4 — CONTACT + CTA */}
          <div>
            <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.22em] mb-5 text-white/65">
              Contact
            </h3>
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-3.5">
                <a
                  href="tel:+212691567246"
                  className="group flex items-start gap-3.5 w-full"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white/95 group-hover:text-white transition-colors"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.8a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.28-1.28a2 2 0 012.11-.45c.9.35 1.84.59 2.8.72A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <div className="text-[0.98rem] text-white font-semibold leading-snug group-hover:brightness-110 transition-all">
                    <p>+212 6 91 56 72 46</p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3.5">
                <a
                  href="mailto:contact@weyandigital.ma"
                  className="group flex items-start gap-3.5 w-full"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white/95 group-hover:text-white transition-colors"
                    style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <div className="text-[0.98rem] text-white font-semibold leading-snug group-hover:brightness-110 transition-all break-all">
                    <p>contact@weyandigital.ma</p>
                  </div>
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-white pl-7 pr-5 py-5 shadow-[0_20px_45px_-16px_rgba(15,23,42,0.45)] hover:shadow-[0_26px_55px_-16px_rgba(15,23,42,0.55)] hover:scale-[1.01] transition-all"
            >
              <span
                className="text-[0.98rem] font-black uppercase tracking-wider leading-none"
                style={{ color: '#6483F0' }}
              >
                COMMENCER MAINTENANT
              </span>
              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: '#6483F0' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </Link>
            <Link to="/contact" className="mt-4 block text-center text-[0.82rem] text-white/65 hover:text-white/90 transition-colors">
              Devis gratuit • Réponse en 24h
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
