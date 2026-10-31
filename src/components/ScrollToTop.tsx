import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Remonte en haut à chaque changement de page (sauf ancre #...). */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
