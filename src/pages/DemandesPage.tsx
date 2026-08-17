import { useEffect, useMemo, useState } from 'react'

type Statut = 'Nouvelle' | 'Validée' | 'En cours' | 'Terminée' | 'Annulée'

type Demande = {
  row?: number
  date?: string
  nom?: string
  email?: string
  telephone?: string
  service?: string
  message?: string
  statut?: string
}

const STORAGE_KEY = 'weyan-demandes-key'

const SECTIONS: { id: Statut; title: string; hint: string; tone: string }[] = [
  { id: 'Nouvelle', title: 'À valider', hint: 'Nouvelles demandes', tone: 'bg-white border-slate-200' },
  { id: 'Validée', title: 'Validées', hint: 'Prêtes à démarrer', tone: 'bg-emerald-50 border-emerald-200' },
  { id: 'En cours', title: 'En cours', hint: 'Travail en cours', tone: 'bg-red-50 border-red-200' },
  { id: 'Terminée', title: 'Terminées', hint: 'Dossiers clos', tone: 'bg-sky-50 border-sky-200' },
  { id: 'Annulée', title: 'Annulées', hint: 'Demandes refusées', tone: 'bg-slate-100 border-slate-200' },
]

function normalizeStatut(value?: string): Statut {
  if (value === 'Validée' || value === 'En cours' || value === 'Terminée' || value === 'Annulée') return value
  return 'Nouvelle'
}

function formatDate(value?: string) {
  if (!value) return '—'
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return String(value)
  return new Intl.DateTimeFormat('fr-MA', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(parsed)
}

function rowClass(statut: Statut) {
  if (statut === 'Validée') return 'bg-emerald-50'
  if (statut === 'En cours') return 'bg-red-50'
  if (statut === 'Terminée') return 'bg-sky-50'
  if (statut === 'Annulée') return 'bg-slate-100 text-slate-500'
  return 'bg-white'
}

function badgeClass(statut: Statut) {
  if (statut === 'Validée') return 'bg-emerald-600 text-white'
  if (statut === 'En cours') return 'bg-red-600 text-white'
  if (statut === 'Terminée') return 'bg-sky-600 text-white'
  if (statut === 'Annulée') return 'bg-slate-500 text-white'
  return 'bg-slate-800 text-white'
}

export default function DemandesPage() {
  const [key, setKey] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [rows, setRows] = useState<Demande[]>([])
  const [loading, setLoading] = useState(false)
  const [updatingRow, setUpdatingRow] = useState<number | null>(null)
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

  const updateStatut = async (row: number, statut: Statut) => {
    setUpdatingRow(row)
    setError('')
    try {
      const response = await fetch(`/api/demandes?key=${encodeURIComponent(key)}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ row, statut }),
      })
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string }
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Mise à jour impossible.')
      }
      setRows((current) => current.map((item) => (item.row === row ? { ...item, statut } : item)))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Mise à jour impossible.')
    } finally {
      setUpdatingRow(null)
    }
  }

  const handleUnlock = (event: React.FormEvent) => {
    event.preventDefault()
    void loadRows(key.trim())
  }

  const grouped = useMemo(() => {
    const map = new Map<Statut, Demande[]>()
    for (const section of SECTIONS) map.set(section.id, [])
    for (const row of rows) {
      const statut = normalizeStatut(row.statut)
      map.get(statut)?.push(row)
    }
    return map
  }, [rows])

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
          <p className="mt-2 text-slate-500">Valider, suivre et clôturer les demandes. Les couleurs sont aussi appliquées dans Google Sheets.</p>
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
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
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

            <div className="space-y-8">
              {SECTIONS.map((section) => {
                const sectionRows = grouped.get(section.id) || []
                return (
                  <section key={section.id} className={`rounded-3xl border p-4 md:p-6 ${section.tone}`}>
                    <div className="mb-4 flex items-end justify-between gap-3">
                      <div>
                        <h2 className="text-xl md:text-2xl font-black tracking-tight">{section.title}</h2>
                        <p className="text-sm text-slate-500">{section.hint} · {sectionRows.length}</p>
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-white/70 bg-white/80">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-white/90 text-slate-600">
                          <tr>
                            <th className="px-4 py-3 font-bold">Date</th>
                            <th className="px-4 py-3 font-bold">Nom</th>
                            <th className="px-4 py-3 font-bold">Email</th>
                            <th className="px-4 py-3 font-bold">Téléphone</th>
                            <th className="px-4 py-3 font-bold">Service</th>
                            <th className="px-4 py-3 font-bold">Message</th>
                            <th className="px-4 py-3 font-bold">Statut</th>
                            <th className="px-4 py-3 font-bold">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sectionRows.length === 0 && (
                            <tr>
                              <td colSpan={8} className="px-4 py-6 text-center text-slate-400">
                                Aucune demande dans cette catégorie.
                              </td>
                            </tr>
                          )}
                          {sectionRows.map((row, index) => {
                            const statut = normalizeStatut(row.statut)
                            const sheetRow = Number(row.row)
                            const busy = updatingRow === sheetRow
                            return (
                              <tr key={`${sheetRow}-${index}`} className={`border-t border-slate-100 align-top ${rowClass(statut)}`}>
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
                                <td className="px-4 py-3">
                                  <span className={`inline-flex rounded-full px-2.5 py-1 text-[0.7rem] font-black uppercase tracking-wide ${badgeClass(statut)}`}>
                                    {statut}
                                  </span>
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex flex-wrap gap-2">
                                    {statut === 'Nouvelle' && (
                                      <>
                                        <button
                                          type="button"
                                          disabled={busy || !sheetRow}
                                          onClick={() => void updateStatut(sheetRow, 'Validée')}
                                          className="rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                                        >
                                          Valider
                                        </button>
                                        <button
                                          type="button"
                                          disabled={busy || !sheetRow}
                                          onClick={() => void updateStatut(sheetRow, 'Annulée')}
                                          className="rounded-full bg-slate-500 px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                                        >
                                          Annuler
                                        </button>
                                      </>
                                    )}
                                    {statut === 'Validée' && (
                                      <button
                                        type="button"
                                        disabled={busy || !sheetRow}
                                        onClick={() => void updateStatut(sheetRow, 'En cours')}
                                        className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                                      >
                                        En cours
                                      </button>
                                    )}
                                    {statut === 'En cours' && (
                                      <button
                                        type="button"
                                        disabled={busy || !sheetRow}
                                        onClick={() => void updateStatut(sheetRow, 'Terminée')}
                                        className="rounded-full bg-sky-600 px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                                      >
                                        Terminer
                                      </button>
                                    )}
                                    {(statut === 'Terminée' || statut === 'Annulée') && (
                                      <span className="text-xs font-semibold text-slate-400">—</span>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
