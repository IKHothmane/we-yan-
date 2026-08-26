import { Link, type LinkProps, type To } from 'react-router-dom'
import { withTrailingSlash } from '../lib/paths'

function normalizeTo(to: To): To {
  if (typeof to === 'string') return withTrailingSlash(to)
  if (typeof to === 'object' && to !== null && 'pathname' in to && typeof to.pathname === 'string') {
    return { ...to, pathname: withTrailingSlash(to.pathname) }
  }
  return to
}

/** Link interne SEO-safe : toujours vers l’URL finale avec slash (Cloudflare Pages). */
export default function AppLink({ to, ...props }: LinkProps) {
  return <Link to={normalizeTo(to)} {...props} />
}
