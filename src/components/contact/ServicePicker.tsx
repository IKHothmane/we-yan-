import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '../../constants/services'

type ServicePickerProps = {
  value: string
  disabled: boolean
  onChange: (label: string) => void
}

export default function ServicePicker({ value, disabled, onChange }: ServicePickerProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const selected = SERVICES.find((item) => item.label === value)

  useEffect(() => {
    if (!open) return
    function onPointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node | null
      if (rootRef.current && target && !rootRef.current.contains(target)) setOpen(false)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      className={`contact-service-picker ${open ? 'is-open' : ''} ${selected ? 'has-value' : ''}`}
      ref={rootRef}
    >
      <span className="contact-service-label" id="contact-service-label">
        Quel service vous intéresse ?
      </span>
      <button
        type="button"
        className="contact-service-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby="contact-service-label contact-service-value"
        disabled={disabled}
        onClick={() => setOpen((current) => !current)}
      >
        <span id="contact-service-value" className="contact-service-value">
          {selected ? (
            <>
              <strong>{selected.short}</strong>
              <small>{selected.hint}</small>
            </>
          ) : (
            <strong className="is-placeholder">Choisir un service</strong>
          )}
        </span>
        <span className="contact-service-chevron" aria-hidden="true">
          ▾
        </span>
      </button>

      {open ? (
        <ul className="contact-service-list" role="listbox" aria-labelledby="contact-service-label">
          {SERVICES.map((item) => {
            const active = value === item.label
            return (
              <li key={item.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={`contact-service-option ${active ? 'is-active' : ''}`}
                  onClick={() => {
                    onChange(item.label)
                    setOpen(false)
                  }}
                >
                  <span className="contact-service-option-text">
                    <strong>{item.short}</strong>
                    <small>{item.hint}</small>
                  </span>
                  {active ? (
                    <span className="contact-service-check" aria-hidden="true">
                      ✓
                    </span>
                  ) : null}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}

      {/* Champ caché pour la validation / accessibilité formulaire */}
      <select
        className="contact-service-native"
        value={value}
        required
        tabIndex={-1}
        aria-hidden="true"
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">Quel service vous intéresse ?</option>
        {SERVICES.map((item) => (
          <option key={item.id} value={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}
