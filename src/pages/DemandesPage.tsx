import { useEffect, useMemo, useState } from 'react'
import appsScriptSource from '../../scripts/google-apps-script.js?raw'

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
const STATUTS_KEY = 'weyan-demandes-statuts'

const SECTIONS: { id: Statut; title: string; hint: string; tone: string }[] = [
  { id: 'Nouvelle', title: 'À valider', hint: 'Nouvelles demandes', tone: 'bg-white border-slate-200' },
  { id: 'Validée', title: 'Validées', hint: 'Prêtes à démarrer', tone: 'bg-emerald-50 border-emerald-200' },
  { id: 'En cours', title: 'En cours', hint: 'Travail en cours', tone: 'bg-red-50 border-red-200' },
  { id: 'Terminée', title: 'Terminées', hint: 'Dossiers clos', tone: 'bg-sky-50 border-sky-200' },
  { id: 'Annulée', title: 'Annulées', hint: 'Demandes refusées', tone: 'bg-slate-100 border-slate-200' },
]

function normalizeStatut(value?: string): Statut {
  if (value === 'Valider' || value === 'Validée' || value === 'Validé') return 'Validée'
  if (value === 'En cours') return 'En cours'
  if (value === 'Terminer' || value === 'Terminée' || value === 'Terminé') return 'Terminée'
  if (value === 'Annuler' || value === 'Annulée' || value === 'Annulé') return 'Annulée'
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

function demandeKey(item: Demande) {
  return `${item.email || ''}|${item.message || ''}|${item.date || ''}`
}

function readSavedStatuts(): Record<string, Statut> {
  try {
    const parsed = JSON.parse(localStorage.getItem(STATUTS_KEY) || '{}') as Record<string, string>
    const out: Record<string, Statut> = {}
    for (const [key, value] of Object.entries(parsed)) out[key] = normalizeStatut(value)
    return out
  } catch {
    return {}
  }
}

function saveStatut(item: Demande, statut: Statut) {
  const all = readSavedStatuts()
  all[demandeKey(item)] = statut
  localStorage.setItem(STATUTS_KEY, JSON.stringify(all))
}

function mergeSavedStatuts(rows: Demande[], scriptReady: boolean) {
  const saved = readSavedStatuts()
  return rows.map((row) => {
    const fromSheet = normalizeStatut(row.statut)
    if (scriptReady && fromSheet !== 'Nouvelle') return { ...row, statut: fromSheet }
    return { ...row, statut: saved[demandeKey(row)] || fromSheet }
  })
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
  const [updatingRow, setUpdatingRow] = useState<number | string | null>(null)
  const [error, setError] = useState('')
  const [scriptReady, setScriptReady] = useState(true)
  const [copied, setCopied] = useState(false)

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
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean
        rows?: Demande[]
        error?: string
        scriptReady?: boolean
      }
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Impossible de charger les demandes.')
      }
      setRows(mergeSavedStatuts(data.rows || [], data.scriptReady !== false))
      setScriptReady(data.scriptReady !== false)
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

  const updateStatut = async (item: Demande, statut: Statut) => {
    const sheetRow = Number(item.row) || 0
    setUpdatingRow(sheetRow || item.email || item.message || 'row')
    setError('')
    saveStatut(item, statut)
    setRows((current) =>
      current.map((entry) =>
        (sheetRow && entry.row === sheetRow) ||
        (entry.email === item.email && entry.message === item.message)
          ? { ...entry, statut }
          : entry,
      ),
    )
    try {
      const response = await fetch(`/api/demandes?key=${encodeURIComponent(key)}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          row: sheetRow,
          email: item.email || '',
          message: item.message || '',
          statut,
        }),
      })
      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean
        error?: string
        warning?: string
        scriptReady?: boolean
        sheetUpdated?: boolean
      }
      if (data.scriptReady === false || data.sheetUpdated === false) setScriptReady(false)
      if (data.ok === false) {
        setError(data.error || 'Google Sheets n’a pas été modifié.')
      }
    } catch (err) {
      setScriptReady(false)
      setError(err instanceof Error ? err.message : 'Google Sheets n’a pas été modifié.')
    } finally {
      setUpdatingRow(null)
    }
  }

  const handleUnlock = (event: React.FormEvent) => {
    event.preventDefault()
    void loadRows(key.trim())
  }

  const copyScript = async () => {
    await navigator.clipboard.writeText(appsScriptSource)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2500)
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

            {(!scriptReady || error) && (
              <div className="mb-6 rounded-3xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-950">
                <p className="font-black">Google Sheets n’est pas à jour</p>
                <p className="mt-2">
                  Enregistrer le code ne suffit pas. Il faut publier une <strong>nouvelle version</strong> du
                  déploiement existant (icône crayon), pas un nouveau déploiement.
                </p>
                <ol className="mt-3 list-decimal space-y-1 pl-5">
                  <li>Ouvre le Google Sheet → <strong>Extensions → Apps Script</strong></li>
                  <li>Efface tout le code, clique le bouton ci-dessous, puis colle</li>
                  <li>Enregistre (disquette)</li>
                  <li>
                    <strong>Déployer → Gérer les déploiements → crayon</strong> → Version :{' '}
                    <strong>Nouvelle version</strong> → <strong>Déployer</strong>
                  </li>
                  <li>Recharge cette page, puis reclique Valider / En cours / Terminer</li>
                </ol>
                <button
                  type="button"
                  onClick={() => void copyScript()}
                  className="mt-4 rounded-full bg-amber-900 px-4 py-2 text-xs font-bold text-white hover:brightness-110"
                >
                  {copied ? 'Script copié' : 'Copier le script Google'}
                </button>
                {error && <p className="mt-3 font-semibold text-red-700">{error}</p>}
              </div>
            )}

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
                            const busy = updatingRow !== null && (updatingRow === sheetRow || updatingRow === row.email)
                            return (
                              <tr key={`${sheetRow || row.email}-${index}`} className={`border-t border-slate-100 align-top ${rowClass(statut)}`}>
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
                                <td className="px-4 py-3 relative z-20">
                                  <div className="flex flex-wrap gap-2 pointer-events-auto">
                                    {statut === 'Nouvelle' && (
                                      <>
                                        <button
                                          type="button"
                                          disabled={busy}
                                          onClick={() => void updateStatut(row, 'Validée')}
                                          className="relative z-20 cursor-pointer rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50"
                                        >
                                          Valider
                                        </button>
                                        <button
                                          type="button"
                                          disabled={busy}
                                          onClick={() => void updateStatut(row, 'Annulée')}
                                          className="relative z-20 cursor-pointer rounded-full bg-slate-500 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50"
                                        >
                                          Annuler
                                        </button>
                                      </>
                                    )}
                                    {statut === 'Validée' && (
                                      <button
                                        type="button"
                                        disabled={busy}
                                        onClick={() => void updateStatut(row, 'En cours')}
                                        className="relative z-20 cursor-pointer rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50"
                                      >
                                        En cours
                                      </button>
                                    )}
                                    {statut === 'En cours' && (
                                      <button
                                        type="button"
                                        disabled={busy}
                                        onClick={() => void updateStatut(row, 'Terminée')}
                                        className="relative z-20 cursor-pointer rounded-full bg-sky-600 px-4 py-2 text-xs font-bold text-white hover:brightness-110 disabled:opacity-50"
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
