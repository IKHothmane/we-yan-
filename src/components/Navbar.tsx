import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/95 backdrop-blur-md rounded-full px-8 py-3 border border-slate-200 shadow-lg">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/logo.jpg"
            alt=""
            aria-hidden="true"
            className="w-12 h-12 object-contain"
          />
          <span className="text-slate-900 font-bold text-xl tracking-tight">we yan digital</span>
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-slate-700 font-medium">
          <Link className="hover:text-[#FC9700] transition-colors" to="/projets">
            Projets
          </Link>
          <Link className="hover:text-[#FC9700] transition-colors" to="/services">
            Services
          </Link>
          <Link className="hover:text-[#FC9700] transition-colors" to="/agence">
            Pourquoi nous
          </Link>
        </div>
        <div>
          <Link
            className="bg-[#FC9700] text-[#0F172A] px-6 py-2 rounded-full font-semibold hover:brightness-110 transition-all text-sm uppercase tracking-wider"
            to="/contact"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </nav>
  )
}
