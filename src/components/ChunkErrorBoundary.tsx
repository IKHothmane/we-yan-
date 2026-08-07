import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children?: ReactNode }
type State = { hasError: boolean; error: Error | null }

export default class ChunkErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false, error: null }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[ChunkErrorBoundary] Erreur récupérée (probable chunk JS périmé) :', error?.message, info?.componentStack)
  }

  private handleHardReload = () => {
    if (typeof window !== 'undefined') {
      try {
        if (window.caches && 'keys' in window.caches) {
          window.caches.keys().then((keys) => Promise.all(keys.map((k) => window.caches.delete(k)))).catch(() => {})
        }
      } catch (_) {
        /* noop */
      }
      window.location.reload()
    }
  }

  public render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="min-h-[100svh] w-full flex items-center justify-center bg-slate-50 px-[clamp(1rem,4vw,2rem)] py-16 font-body text-slate-900">
        <div className="w-full max-w-[520px] text-center">
          <div
            className="mx-auto mb-7 inline-flex h-20 w-20 items-center justify-center rounded-[1.5rem] shadow-2xl shadow-indigo-500/30"
            style={{ backgroundColor: '#6483F0' }}
          >
            <span aria-hidden="true" className="text-white text-3xl font-black leading-none">
              W
            </span>
          </div>
          <h1 className="mb-4 text-[clamp(1.9rem,5vw,2.75rem)] font-black leading-tight tracking-tight">
            Mise à jour <span style={{ color: '#6483F0' }}>en cours</span>
          </h1>
          <p className="mb-8 text-slate-500 text-[1.05rem] leading-relaxed">
            Une nouvelle version de We Yan Digital vient d'être déployée. Votre navigateur doit recharger une fois pour récupérer les derniers fichiers.
          </p>
          <div className="space-y-3">
            <button
              type="button"
              onClick={this.handleHardReload}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[0.95rem] font-black uppercase tracking-wider shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all whitespace-nowrap"
              style={{ backgroundColor: '#6483F0', color: '#FFF', boxShadow: '0 20px 45px -20px rgba(100,131,240,0.65)' }}
            >
              Recharger le site
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4.5 w-4.5 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 4v6h-6" />
                <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
              </svg>
            </button>
            {this.state.error && (
              <p className="pt-3 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-slate-400 truncate">
                {String(this.state.error.message ?? 'Erreur inconnue')}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
