import { useLocation } from 'react-router-dom'
import { getPageLinking } from '../lib/internalLinking'
import SemanticLink from './SemanticLink'

export default function RelatedPages() {
  const { pathname } = useLocation()
  const page = getPageLinking(pathname)
  if (!page || page.liens_sortants.length === 0) return null
  if (page.cluster_semantique === 'conversion' || page.cluster_semantique === 'legal') return null

  return (
    <section className="w-full bg-slate-50 border-t border-slate-200 py-[clamp(2.5rem,6vw,3.5rem)]">
      <div className="w-full max-w-[860px] mx-auto px-[clamp(1rem,4vw,2rem)]">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Pour aller plus loin</p>
        <h2 className="text-2xl font-black tracking-tight text-slate-900 mb-6">Continuer dans le même univers</h2>
        <div className="space-y-4">
          {page.liens_sortants.map((lien) => (
            <SemanticLink
              key={`${lien.cible}-${lien.ancre}`}
              lien={lien}
              clusterSource={page.cluster_semantique}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
