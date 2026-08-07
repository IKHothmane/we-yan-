import { type ComponentType, lazy } from 'react'

/**
 * Wrapper autour de React.lazy() qui, en cas d'échec du chargement d'un chunk
 * (cache navigateur périmé après nouveau déploiement = "MIME type HTML" error),
 * relance automatiquement une 2ème tentative après purge location search cache
 * avant de laisser l'ErrorBoundary afficher le bouton "Recharger".
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  retriesLeft = 1,
) {
  return lazy(async () => {
    try {
      return await factory()
    } catch (error) {
      const isChunkError =
        error instanceof Error &&
        (/Failed to fetch dynamically imported module|Loading chunk [a-zA-Z0-9_-]+ failed|does not provide an export named|MIME type/i.test(
          error.message ?? '',
        ))

      if (isChunkError && retriesLeft > 0 && typeof window !== 'undefined') {
        // Invalidation douce : ajouter un timestamp à la fin d'URL force un nouveau fetch
        try {
          const ts = `__t=${Date.now()}`
          const sep = window.location.search.includes('?') ? '&' : '?'
          const nextUrl = `${window.location.pathname}${window.location.search}${sep}${ts}${window.location.hash}`
          window.history.replaceState({}, '', nextUrl)
        } catch (_) {
          /* noop */
        }
        return lazyWithRetry(factory, retriesLeft - 1) as unknown as Promise<{ default: T }>
      }
      throw error
    }
  })
}
