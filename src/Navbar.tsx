import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/20">
      <nav className="flex justify-between items-center px-8 md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-4">
          <img
            alt="We Digital"
            className="h-10 w-auto object-contain"
            src="/logo.jpg"
            loading="eager"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-headline text-2xl font-extrabold text-primary tracking-tighter">
              we yan digital
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-on-surface-variant">
              Make it Different
            </span>
          </div>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            className="font-label-md text-sm uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
            to="/projets"
          >
            Projets
          </Link>
          <Link
            className="font-label-md text-sm uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="font-label-md text-sm uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
            to="/agence"
          >
            Pourquoi nous
          </Link>
          <Link
            className="px-6 py-2 bg-secondary text-white rounded-full font-label-md uppercase tracking-wider scale-95 active:scale-90 transition-transform shadow-lg shadow-secondary/20"
            to="/contact"
          >
            Demander un devis
          </Link>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => document.getElementById('mobile-nav')?.classList.toggle('hidden')}
          aria-label="Ouvrir le menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>

      <div
        className="hidden fixed inset-0 bg-background z-50 flex flex-col items-center justify-center gap-8 md:hidden"
        id="mobile-nav"
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => document.getElementById('mobile-nav')?.classList.add('hidden')}
          aria-label="Fermer le menu"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <Link
          className="font-headline text-3xl text-primary"
          to="/projets"
          onClick={() => document.getElementById('mobile-nav')?.classList.add('hidden')}
        >
          Projets
        </Link>
        <Link
          className="font-headline text-3xl text-primary"
          to="/services"
          onClick={() => document.getElementById('mobile-nav')?.classList.add('hidden')}
        >
          Services
        </Link>
        <Link
          className="font-headline text-3xl text-primary"
          to="/agence"
          onClick={() => document.getElementById('mobile-nav')?.classList.add('hidden')}
        >
          Pourquoi nous
        </Link>
        <Link
          className="px-8 py-3 bg-secondary text-white rounded-full font-headline text-xl"
          to="/contact"
          onClick={() => document.getElementById('mobile-nav')?.classList.add('hidden')}
        >
          Demander un devis
        </Link>
      </div>
    </header>
  )
}
