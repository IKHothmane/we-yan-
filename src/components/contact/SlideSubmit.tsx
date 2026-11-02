import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'

type SlideSubmitProps = {
  complete: boolean
  sending: boolean
  onComplete: () => boolean | Promise<boolean>
}

export default function SlideSubmit({ complete, sending, onComplete }: SlideSubmitProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const startXRef = useRef(0)
  const startOffsetRef = useRef(0)
  const [offset, setOffset] = useState(0)
  const [maxOffset, setMaxOffset] = useState(0)
  const [dragging, setDragging] = useState(false)

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const knob = track.querySelector<HTMLElement>('.contact-slide-knob')
    if (!knob) return
    const styles = getComputedStyle(track)
    const padLeft = Number.parseFloat(styles.paddingLeft) || 0
    const padRight = Number.parseFloat(styles.paddingRight) || 0
    setMaxOffset(Math.max(0, track.clientWidth - padLeft - padRight - knob.offsetWidth))
  }, [])

  useEffect(() => {
    measure()
    const track = trackRef.current
    if (!track || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    return () => observer.disconnect()
  }, [measure])

  const shownOffset = complete ? maxOffset : offset

  async function finishIfNeeded(nextOffset: number) {
    if (maxOffset <= 0 || sending) return
    if (nextOffset >= maxOffset * 0.88) {
      const accepted = await onComplete()
      setOffset(accepted ? maxOffset : 0)
      return
    }
    setOffset(0)
  }

  function onPointerDown(event: ReactPointerEvent<HTMLButtonElement>) {
    if (complete || sending) return
    draggingRef.current = true
    setDragging(true)
    startXRef.current = event.clientX
    startOffsetRef.current = offset
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onPointerMove(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!draggingRef.current || complete || sending) return
    const next = Math.min(
      maxOffset,
      Math.max(0, startOffsetRef.current + (event.clientX - startXRef.current))
    )
    setOffset(next)
  }

  function onPointerUp(event: ReactPointerEvent<HTMLButtonElement>) {
    if (!draggingRef.current) return
    draggingRef.current = false
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    const next = Math.min(
      maxOffset,
      Math.max(0, startOffsetRef.current + (event.clientX - startXRef.current))
    )
    void finishIfNeeded(next)
  }

  async function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (complete || sending) return
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowRight') {
      event.preventDefault()
      const accepted = await onComplete()
      setOffset(accepted ? maxOffset : 0)
    }
  }

  const progress = maxOffset > 0 ? shownOffset / maxOffset : 0

  return (
    <div
      className={`contact-slide ${complete ? 'is-complete' : ''} ${dragging ? 'is-dragging' : ''} ${sending ? 'is-sending' : ''}`}
      ref={trackRef}
      role="group"
      aria-label="Glisser pour envoyer le message"
      aria-busy={sending}
    >
      <span className="contact-slide-label" style={{ opacity: 1 - progress * 0.85 }}>
        {complete ? 'Message envoyé' : sending ? 'Envoi en cours…' : 'Discutons de votre projet'}
      </span>
      <button
        type="button"
        className="contact-slide-knob"
        style={{ transform: `translateX(${shownOffset}px)` }}
        aria-label="Glisser vers la droite pour envoyer"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        disabled={sending || complete}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onKeyDown={onKeyDown}
      >
        →
      </button>
    </div>
  )
}
