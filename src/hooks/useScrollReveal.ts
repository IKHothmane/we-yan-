import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    let frameId = 0
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const setupReveal = () => {
      const elements = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[]
      if (!elements.length) return () => {}

      elements.forEach((el) => {
        const delay = el.getAttribute('data-reveal-delay') || '0'
        el.classList.add(
          'opacity-0',
          'translate-y-8',
          'transition-opacity',
          'transition-transform',
          'duration-700',
          'ease-out',
        )
        el.style.transitionDelay = `${delay}ms`
      })

      if (prefersReduced) {
        elements.forEach((el) => {
          el.classList.remove('opacity-0', 'translate-y-8')
          el.classList.add('opacity-100', 'translate-y-0')
          el.style.transitionDelay = '0ms'
        })
        return () => {}
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const target = entry.target as HTMLElement
            target.classList.remove('opacity-0', 'translate-y-8')
            target.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(target)
          })
        },
        { threshold: 0.15 },
      )

      elements.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }

    let cleanup = () => {}
    frameId = window.requestAnimationFrame(() => {
      cleanup = setupReveal()
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])
}
