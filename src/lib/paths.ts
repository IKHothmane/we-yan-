/**
 * Cloudflare Pages force un 308 vers l’URL avec slash final.
 * Sitemap, canonicals et liens internes doivent donc utiliser la même forme.
 */
export function withTrailingSlash(path: string): string {
  if (!path || path === '/') return '/'

  const hashIndex = path.indexOf('#')
  const queryIndex = path.indexOf('?')
  let cut = path.length
  if (hashIndex >= 0) cut = Math.min(cut, hashIndex)
  if (queryIndex >= 0) cut = Math.min(cut, queryIndex)

  const pathname = path.slice(0, cut)
  const suffix = path.slice(cut)
  if (pathname === '/' || pathname.endsWith('/')) return path
  return `${pathname}/${suffix}`
}

export function stripTrailingSlash(path: string): string {
  if (!path || path === '/') return '/'
  return path.replace(/\/+$/, '') || '/'
}
