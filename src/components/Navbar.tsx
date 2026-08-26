import { Link } from 'react-router-dom'

type NavbarProps = {
  variant?: 'light' | 'hero'
  serviceTitle?: string
}

export default function Navbar({ variant = 'light', serviceTitle }: NavbarProps) {
  void variant

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services/', label: 'Services' },
    { to: '/projets/', label: 'Projets' },
    { to: '/agence/', label: 'About' },
    { to: '/contact/', label: 'Contacte' },
  ] as const

  const socialLinks = [
    { href: 'https://instagram.com', label: 'Instagram', icon: '/icons/instagram.svg', hoverClassName: 'hover:text-secondary' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: '/icons/linkedin-in.svg', hoverClassName: 'hover:text-primary' },
    { href: 'https://facebook.com', label: 'Facebook', icon: '/icons/facebook-f.svg', hoverClassName: 'hover:text-secondary' },
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

  return (
    <>
      <nav className="fixed left-0 right-0 top-4 z-50 px-[clamp(0.875rem,3vw,1.5rem)]">
        <div
          className={`max-w-7xl mx-auto rounded-full px-[clamp(0.8rem,3vw,2rem)] py-[clamp(0.65rem,1.8vw,0.85rem)] transition-all bg-white/95 border border-slate-200 shadow-lg overflow-visible`}
        >
          <div className="hidden md:flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-4 overflow-visible">
              <div className="relative h-0 overflow-visible flex-shrink-0 w-[clamp(9rem,22vw,14rem)]">
                <img
                  src="/Logo%20weyan.png"
                  alt="We Yan Digital"
                  className="absolute left-0 top-1/2 w-full h-auto max-h-[clamp(3.5rem,9vw,5.5rem)] object-contain z-[60]"
                  style={{ transform: 'translate3d(0, -50%, 0) rotate(-6deg)' }}
                  width={448}
                  height={88}
                  decoding="async"
                />
              </div>
              {serviceTitle ? (
                <span
                  className={`max-w-[18rem] truncate text-[clamp(0.9rem,1.4vw,1.1rem)] font-semibold tracking-[-0.02em] text-slate-800`}
                >
                  {serviceTitle}
                </span>
              ) : (
                <span className="sr-only">We Yan Digital</span>
              )}
            </Link>

            <div
              className={`hidden md:flex items-center space-x-[clamp(1.25rem,2.6vw,2.5rem)] font-medium text-[clamp(0.9rem,1.2vw,1rem)] text-slate-700`}
            >
              {links.slice(0, 4).map((link) => (
                <Link key={link.to} className="hover:text-[#FC9700] transition-colors" to={link.to}>
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4">
                <Link className="hover:text-[#FC9700] transition-colors" to={links[4].to}>
                  {links[4].label}
                </Link>
                <div className="flex items-center gap-2">
                  {socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.label}
                      aria-label={socialLink.label}
                      className={`flex items-center justify-center transition-all ${socialLink.hoverClassName} text-slate-700`}
                      href={socialLink.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span aria-hidden="true" className="h-5 w-5" style={iconMaskStyle(socialLink.icon)} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-5 gap-1 md:hidden">
            {links.map((link) => (
              <Link
                key={link.to}
                className={`flex min-h-[48px] items-center justify-center rounded-2xl px-2 py-3 text-center text-[0.68rem] font-semibold transition-colors text-slate-700 hover:bg-slate-100`}
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
