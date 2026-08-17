import { createPortal } from 'react-dom'

type ContactSendPopupProps = {
  open: boolean
  status: 'success' | 'error'
  errorMessage?: string
  onClose: () => void
}

export default function ContactSendPopup({ open, status, errorMessage, onClose }: ContactSendPopupProps) {
  if (!open || typeof document === 'undefined') return null

  const isSuccess = status === 'success'

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isSuccess ? 'Demande envoyée' : 'Erreur d’envoi'}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[520px] rounded-2xl bg-white p-6 shadow-2xl border border-slate-200"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">
              {isSuccess ? 'Succès' : 'Erreur'}
            </p>
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              {isSuccess ? 'Demande envoyée' : "Impossible d’envoyer"}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {isSuccess
                ? 'Merci ! Nous vous répondons sous 24h ouvrées.'
                : errorMessage || 'Réessayez dans quelques instants.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-3 py-2 text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Fermer"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl bg-secondary text-on-secondary font-semibold px-5 py-3 hover:brightness-110 transition-all"
          >
            OK
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
