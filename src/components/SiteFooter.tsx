import { Link } from 'react-router-dom'

type SiteFooterProps = {
  revealDelay?: string
}

export default function SiteFooter({ revealDelay }: SiteFooterProps) {
  const revealProps = revealDelay
    ? { 'data-reveal': '', 'data-reveal-delay': revealDelay }
    : {}

  return (
    <footer
      className="w-full py-[clamp(3.5rem,8vw,4rem)] bg-[#0F172A] text-white border-t border-slate-800"
      {...revealProps}
    >
      <div className="px-[clamp(1rem,4vw,2rem)]">
        <h2 className="sr-only">Pied de page</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.9fr] gap-[clamp(1.75rem,4vw,3rem)] items-start">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4 mb-6 justify-center sm:justify-start">
              <span className="w-[clamp(2.75rem,6vw,3rem)] h-[clamp(2.75rem,6vw,3rem)] rounded-full overflow-hidden bg-white shadow-[0_10px_30px_-10px_rgba(252,151,0,0.7)] flex items-center justify-center">
                <img src="/Logo%20weyan.png?v=20260619" alt="We Yan Digital" className="h-full w-full object-cover" />
              </span>
              <span className="text-[clamp(1.5rem,4vw,2rem)] font-extrabold">
                we yan digital
              </span>
            </div>
            <p className="text-slate-400 text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed mb-8 max-w-sm text-center sm:text-left">
              Agence digitale marocaine qui transforme les marques avec creativite et strategie.
            </p>
            <p className="text-[clamp(0.7rem,1.5vw,0.75rem)] text-slate-300 uppercase tracking-widest text-center sm:text-left">
              © {new Date().getFullYear()} we yan digital. All rights reserved.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-[clamp(1rem,2.2vw,1.125rem)] font-bold mb-6">Explorer</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/projets">
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/agence">
                  Notre Agence
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-[clamp(1rem,2.2vw,1.125rem)] font-bold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/contact">
                  Conditions Generales
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/contact">
                  Politique de Confidentialite
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-[#FC9700] transition-colors" to="/contact">
                  Contactez-nous
                </Link>
              </li>
            </ul>
            <div className="mt-8 md:mt-10">
              <Link
                className="inline-flex w-full sm:w-auto justify-center px-[clamp(1.25rem,3vw,1.5rem)] py-[clamp(0.8rem,2vw,0.9rem)] bg-[#FC9700] text-[#0F172A] rounded-full text-[clamp(0.72rem,1.5vw,0.75rem)] font-bold hover:brightness-110 transition-all shadow-lg uppercase tracking-widest"
                to="/contact"
              >
                Commencer maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
