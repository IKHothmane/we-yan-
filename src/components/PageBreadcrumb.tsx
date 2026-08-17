import { Link, useLocation } from 'react-router-dom'
import { getPageLinking, type PageLinking } from '../lib/internalLinking'

type PageBreadcrumbProps = {
  page?: PageLinking
  className?: string
}

export default function PageBreadcrumb({ page, className = '' }: PageBreadcrumbProps) {
  const { pathname } = useLocation()
  const resolved = page ?? getPageLinking(pathname)
  if (!resolved || resolved.breadcrumb.length < 2) return null

  return (
    <nav aria-label="Fil d'Ariane" className={`flex flex-wrap items-center gap-2 text-[0.82rem] text-slate-500 ${className}`}>
      {resolved.breadcrumb.map((item, index) => {
        const last = index === resolved.breadcrumb.length - 1
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {last || !item.to ? (
              <span className="font-medium text-slate-700">{item.label}</span>
            ) : (
              <Link to={item.to} className="hover:text-[#6483F0] transition-colors">
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
