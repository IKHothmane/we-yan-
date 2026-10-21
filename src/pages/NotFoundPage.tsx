import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import PageSeo from '../components/PageSeo'
import SiteFooter from '../components/SiteFooter'
import { pageSeo } from '../lib/pageSeo'

export default function NotFoundPage() {
  useEffect(() => {
    const robots = document.head.querySelector('meta[name="robots"]')
    if (robots) robots.setAttribute('content', 'noindex, nofollow')
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-body text-slate-900">
      <PageSeo {...pageSeo.notFound} />
      <Navbar serviceTitle="Page introuvable · We Yan Digital" />

      <main className="max-w-[720px] mx-auto px-[clamp(1rem,5vw,2rem)] py-[clamp(4rem,10vw,7rem)] text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6483F0] mb-4">Erreur 404</p>
        <h1 className="font-black tracking-tight text-[clamp(2rem,5.4vw,3.4rem)] mb-4">
          Page introuvable
        </h1>
        <p className="text-slate-600 text-[clamp(1rem,2.4vw,1.2rem)] leading-relaxed mb-10">
          Cette adresse n’existe pas ou a été déplacée. Utilisez le menu ou retournez à l’accueil.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-secondary px-6 py-3 font-semibold text-on-secondary hover:brightness-110 transition-all"
          >
            Retour à l’accueil
          </Link>
          <Link
            to="/contact/"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition-all"
          >
            Nous contacter
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
