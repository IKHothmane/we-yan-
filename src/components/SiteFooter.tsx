import { Link } from 'react-router-dom'
import RelatedPages from './RelatedPages'
import { FOOTER_PILIERS } from '../lib/internalLinking'

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: '/icons/instagram.svg' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: '/icons/linkedin-in.svg' },
  { href: 'https://facebook.com', label: 'Facebook', icon: '/icons/facebook-f.svg' },
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
    <>
      <RelatedPages />
      <footer
        className="w-full py-[clamp(3.5rem,8vw,4.5rem)] text-white"
        style={{ backgroundColor: '#6483F0' }}
        {...revealProps}
      >
        <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,4vw,2.5rem)]">
          <h2 className="sr-only">Pied de page</h2>
          <div className="w-full grid grid-cols-1 gap-[clamp(2.5rem,6vw,4rem)] md:grid-cols-3 items-start">
            <div className="flex flex-col h-full">
              <Link to="/" className="flex items-center gap-3 mb-6 hover:brightness-110 transition-all w-fit">
                <img
                  src="/Logo%20weyan.png"
                  alt="We Yan Digital · Agence digitale à Casablanca"
                  className="h-[clamp(2.75rem,7vw,4rem)] w-auto object-contain drop-shadow-[0_14px_34px_-12px_rgba(15,23,42,0.35)]"
                  loading="lazy"
                />
              </Link>
              <p className="text-white text-[0.95rem] leading-relaxed max-w-[18rem] mb-8">
                Agence digitale à Casablanca qui transforme les marques avec créativité et stratégie.
              </p>
              <div className="flex items-center gap-3 mb-8">
                {socialLinks.map((socialLink) => (
                  <a
                    key={socialLink.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/45 text-white transition-all hover:bg-white hover:text-[#6483F0] hover:border-white"
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visitez notre ${socialLink.label}`}
                  >
                    <span aria-hidden="true" className="h-4 w-4" style={iconMaskStyle(socialLink.icon)} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.22em] mb-5 text-white/85">
                Piliers
              </h3>
              <ul className="space-y-3">
                {FOOTER_PILIERS.map((item) => (
                  <li key={item.to}>
                    <Link
                      className="text-white hover:text-white/85 transition-colors text-[1rem] font-semibold inline-block"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link
                    className="text-white hover:text-white/85 transition-colors text-[1rem] font-semibold inline-block"
                    to="/contact"
                  >
                    Contact / devis gratuit
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.22em] mb-5 text-white/85">
                Contact
              </h3>
              <ul className="space-y-4 mb-6">
                <li>
                  <a href="tel:+212691567246" className="text-white font-semibold hover:brightness-110">
                    +212 6 91 56 72 46
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@weyandigital.ma" className="text-white font-semibold hover:brightness-110 break-all">
                    contact@weyandigital.ma
                  </a>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 font-black uppercase tracking-wider text-[#6483F0] hover:scale-[1.01] transition-all"
              >
                Commencer maintenant
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/20 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[0.78rem] text-white/80">
            <p>© 2026 We Yan Digital. Tous droits réservés.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
              <Link to="/politique-de-confidentialite" className="hover:text-white">Confidentialité</Link>
              <Link to="/conditions-generales" className="hover:text-white">CGV</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
