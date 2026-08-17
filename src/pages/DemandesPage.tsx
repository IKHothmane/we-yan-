import { useEffect, useMemo, useState } from 'react'

type Demande = {
  date?: string
  nom?: string
  email?: string
  telephone?: string
  service?: string
  message?: string
}

const STORAGE_KEY = 'weyan-demandes-key'

function formatDate(value?: string) {
  if (!value) return '—'
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return String(value)
  return new Intl.DateTimeFormat('fr-MA', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(parsed)
}

export default function DemandesPage() {
  const [key, setKey] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [rows, setRows] = useState<Demande[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Demandes | We Yan Digital'
    const robots = document.head.querySelector('meta[name="robots"]')
    if (robots) robots.setAttribute('content', 'noindex, nofollow')
  }, [])

  const loadRows = async (adminKey: string) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`/api/demandes?key=${encodeURIComponent(adminKey)}`, {
        headers: { Accept: 'application/json' },
      })
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; rows?: Demande[]; error?: string }
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Impossible de charger les demandes.')
      }
      setRows(data.rows || [])
      setUnlocked(true)
      sessionStorage.setItem(STORAGE_KEY, adminKey)
    } catch (err) {
      setUnlocked(false)
      setError(err instanceof Error ? err.message : 'Accès refusé.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved) {
      setKey(saved)
      void loadRows(saved)
    }
  }, [])

  const handleUnlock = (event: React.FormEvent) => {
    event.preventDefault()
    void loadRows(key.trim())
  }

  const countLabel = useMemo(() => {
    const n = rows.length
    return n <= 1 ? `${n} demande` : `${n} demandes`
  }, [rows.length])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">Espace interne</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">Demandes clients</h1>
          <p className="mt-2 text-slate-500">Les messages du site, enregistrés dans Google Sheets.</p>
        </header>

        {!unlocked && (
          <form onSubmit={handleUnlock} className="max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <label htmlFor="admin-key" className="text-sm font-semibold text-slate-700">
              Mot de passe
            </label>
            <input
              id="admin-key"
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-[#6483F0] focus:outline-none"
              placeholder="Clé d’accès"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full rounded-xl bg-[#6483F0] px-4 py-3 font-bold text-white disabled:opacity-70"
            >
              {loading ? 'Vérification…' : 'Ouvrir le tableau'}
            </button>
            {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
          </form>
        )}

        {unlocked && (
          <>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-500">{countLabel}</p>
              <button
                type="button"
                onClick={() => void loadRows(key)}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold hover:bg-slate-100"
              >
                Actualiser
              </button>
            </div>

            {error && <p className="mb-4 text-sm font-semibold text-red-600">{error}</p>}

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-bold">Date</th>
                    <th className="px-4 py-3 font-bold">Nom</th>
                    <th className="px-4 py-3 font-bold">Email</th>
                    <th className="px-4 py-3 font-bold">Téléphone</th>
                    <th className="px-4 py-3 font-bold">Service</th>
                    <th className="px-4 py-3 font-bold">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {loading && rows.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                        Chargement…
                      </td>
                    </tr>
                  )}
                  {!loading && rows.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-slate-500">
                        Aucune demande pour le moment.
                      </td>
                    </tr>
                  )}
                  {rows.map((row, index) => (
                    <tr key={`${row.email}-${index}`} className="border-t border-slate-100 align-top">
                      <td className="px-4 py-3 whitespace-nowrap text-slate-500">{formatDate(String(row.date || ''))}</td>
                      <td className="px-4 py-3 font-semibold">{row.nom || '—'}</td>
                      <td className="px-4 py-3">
                        {row.email ? (
                          <a href={`mailto:${row.email}`} className="text-[#6483F0] hover:underline">
                            {row.email}
                          </a>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">{row.telephone || '—'}</td>
                      <td className="px-4 py-3">{row.service || '—'}</td>
                      <td className="px-4 py-3 max-w-sm text-slate-600">{row.message || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
