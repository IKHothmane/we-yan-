declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
  }
}

const TRACKED_KEY = 'weyan-lead-tracked'

export function trackLeadConversion() {
  if (typeof window === 'undefined') return
  if (sessionStorage.getItem(TRACKED_KEY) === '1') return
  sessionStorage.setItem(TRACKED_KEY, '1')

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'generate_lead',
    event_category: 'contact',
    event_label: 'demande_envoyee',
    page_path: '/merci',
  })

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      method: 'formulaire',
      page_path: '/merci',
    })
  }
}

export function markLeadReadyToTrack() {
  sessionStorage.removeItem(TRACKED_KEY)
}
