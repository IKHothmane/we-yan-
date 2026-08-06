import { Link } from 'react-router-dom'

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: '/icons/instagram.svg' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: '/icons/linkedin-in.svg' },
  { href: 'https://facebook.com', label: 'Facebook', icon: '/icons/facebook-f.svg' },
] as const

const serviceSubItems = [
  { label: 'Référencement SEO', to: '/services/seo' },
  { label: 'SEA Google Ads', to: '/services/publicite-digitale' },
  { label: 'Social Media', to: '/services/creation-contenu-community-management' },
  { label: 'Branding', to: '/services/strategie-marketing-rebranding' },
  { label: 'Création Site Web', to: '/services/seo' },
  { label: 'Media Buying', to: '/services/publicite-digitale' },
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
      className="w-full py-[clamp(3.5rem,8vw,4rem)] text-white border-t border-white/20"
      style={{ backgroundColor: '#6483F0' }}
      {...revealProps}
    >
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,4vw,2rem)]">
        <h2 className="sr-only">Pied de page</h2>
        <div className="w-full grid grid-cols-1 gap-[clamp(2rem,5vw,3.5rem)] md:grid-cols-2 xl:grid-cols-4 items-start">
          {/* COLONNE 1 - Identité + Trust */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/Logo%20weyan.png"
                alt="We Yan Digital"
                className="h-[clamp(2.5rem,6vw,3.25rem)] w-auto object-contain drop-shadow-[0_10px_30px_-10px_rgba(15,23,42,0.35)]"
              />
              <span className="text-[clamp(1.25rem,3vw,1.75rem)] font-extrabold leading-none">
                We Yan Digital
              </span>
            </div>
            <p className="text-white/90 text-[0.95rem] leading-relaxed mb-6">
              Agence digitale à Casablanca qui transforme les marques avec créativité et stratégie.
            </p>

            {/* NAP complet pour le SEO local */}
            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-4 mb-5">
              <p className="font-extrabold text-white text-[0.92rem] leading-snug mb-2">
                We Yan Digital — Casablanca, Maarif
              </p>
              <ul className="space-y-1.5 text-[0.85rem]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  <a href="tel:+212691567246" className="text-white/85 hover:text-white font-semibold transition-colors">
                    +212 6 91 56 72 46
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  <a href="mailto:contact@weyandigital.ma" className="text-white/85 hover:text-white font-semibold transition-colors break-all">
                    contact@weyandigital.ma
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                  <span className="text-white/80">Casablanca — Maroc</span>
                </li>
              </ul>
            </div>

            <ul className="space-y-3 mb-6 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-[13px] font-bold text-white">
                  📍
                </span>
                <div>
                  <p className="font-semibold text-white">Casablanca, Maroc</p>
                  <p className="text-white/70 text-[0.8rem]">Quartier Maarif - Bureau 202</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-[13px] font-bold text-white">
                  🪪
                </span>
                <div className="space-y-0.5 text-white/80 text-[0.82rem]">
                  <p><span className="font-semibold text-white/95">IF:</span> 00000000</p>
                  <p><span className="font-semibold text-white/95">RC:</span> 00000</p>
                  <p><span className="font-semibold text-white/95">ICE:</span> 00000000000000</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-[13px] font-bold text-white">
                  ⭐
                </span>
                <p className="text-white/85 text-[0.85rem]">
                  <span className="font-bold text-white">Google Partner</span> · Certifié Agency
                </p>
              </li>
            </ul>
          </div>

          {/* COLONNE 2 - Explorer */}
          <div>
            <h3 className="text-[1rem] font-extrabold uppercase tracking-wider mb-5 text-white">
              Explorer
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  className="text-white/85 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 text-[0.92rem]"
                  to="/projets"
                >
                  Nos Projets
                </Link>
              </li>
              <li>
                <p className="text-white/95 font-semibold mt-2 mb-1.5 text-[0.92rem]">
                  Services
                </p>
                <ul className="pl-3 border-l border-white/15 space-y-1.5">
                  {serviceSubItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        className="text-white/75 hover:text-white hover:translate-x-0.5 transition-all inline-block text-[0.82rem]"
                        to={item.to}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="pt-1.5">
                <Link
                  className="text-white/85 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 text-[0.92rem]"
                  to="/agence"
                >
                  Notre Agence
                </Link>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 - Legal */}
          <div>
            <h3 className="text-[1rem] font-extrabold uppercase tracking-wider mb-5 text-white">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="text-white/85 hover:text-white transition-colors text-[0.92rem]" to="/services">
                  Tous nos services
                </Link>
              </li>
              <li>
                <Link className="text-white/85 hover:text-white transition-colors text-[0.92rem]" to="/agence">
                  Notre agence
                </Link>
              </li>
              <li>
                <Link className="text-white/85 hover:text-white transition-colors text-[0.92rem]" to="/projets">
                  Nos projets clients
                </Link>
              </li>
              <li>
                <Link className="text-white/85 hover:text-white transition-colors text-[0.92rem]" to="/contact">
                  Contactez-nous · Devis gratuit 24h
                </Link>
              </li>
            </ul>

            {/* SUIVEZ-NOUS (sous Legal pour rester visible) */}
            <div className="mt-8">
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white/70 mb-4">
                Suivez-nous
              </p>
              <div className="flex items-center gap-3 mb-5">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/90 transition-all hover:bg-white hover:text-[#6483F0]"
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visitez notre ${socialLink.label}`}
                  >
                    <span aria-hidden="true" className="h-4 w-4" style={iconMaskStyle(socialLink.icon)} />
                  </a>
                ))}
              </div>

              {/* Google Reviews badge */}
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/20 px-4 py-3 backdrop-blur-sm">
                <div>
                  <div className="flex items-center gap-0.5 text-yellow-300 text-[1rem] leading-none mb-1">
                    ★★★★★
                  </div>
                  <p className="text-[0.7rem] uppercase tracking-widest text-white/75 font-bold">
                    Google Reviews
                  </p>
                </div>
                <div className="pl-3 border-l border-white/20">
                  <p className="text-white text-[1.4rem] font-black leading-none">
                    5.0
                  </p>
                  <p className="text-[0.68rem] text-white/75 mt-0.5">/ 5 · 120+ avis</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLONNE 4 - Contact & Conversion */}
          <div>
            <h3 className="text-[1rem] font-extrabold uppercase tracking-wider mb-5 text-white">
              Contact & Devis
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="tel:+212691567246"
                  className="group flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3 hover:bg-white/15 transition-all"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6483F0] text-lg font-bold flex-shrink-0">
                    📞
                  </span>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-widest text-white/70 font-bold">
                      Appel direct
                    </p>
                    <p className="text-white font-bold text-[1rem] leading-tight group-hover:brightness-110">
                      +212 6 91 56 72 46
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@weyandigital.ma"
                  className="group flex items-center gap-3 rounded-xl bg-white/10 border border-white/15 px-4 py-3 hover:bg-white/15 transition-all"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6483F0] text-lg font-bold flex-shrink-0">
                    ✉️
                  </span>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-widest text-white/70 font-bold">
                      Email
                    </p>
                    <p className="text-white font-bold text-[0.95rem] leading-tight break-all">
                      contact@weyandigital.ma
                    </p>
                  </div>
                </a>
              </li>
            </ul>

            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_40px_-14px_rgba(15,23,42,0.55)] hover:scale-[1.01] hover:shadow-[0_22px_44px_-14px_rgba(15,23,42,0.65)] transition-all"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-black" style={{ backgroundColor: '#6483F0', color: '#fff' }}>
                ⚡
              </span>
              <span className="flex flex-col text-left">
                <span className="text-[#0F172A] font-black text-[0.95rem] leading-tight uppercase tracking-wider">
                  Devis gratuit
                </span>
                <span className="text-[#6483F0] font-bold text-[0.75rem] leading-tight">
                  Réponse en moins de 24h
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.75rem] text-white/70 uppercase tracking-widest text-center sm:text-left">
            © {new Date().getFullYear()} We Yan Digital · Agence digitale Casablanca. Tous droits réservés.
          </p>
          <p className="text-[0.72rem] text-white/60 text-center sm:text-right">
            Made with 🧡 à Casablanca, pour le Maroc et le monde.
          </p>
        </div>
      </div>
    </footer>
  )
}
