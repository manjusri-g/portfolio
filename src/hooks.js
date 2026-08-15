import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE } from './site'

export function usePageTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title
    return () => { document.title = prev }
  }, [title])
}

export function useScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
}

export function useHashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname !== '/' || !hash) return
    const id = decodeURIComponent(hash.slice(1))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const run = () => {
      document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
    }
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(run)
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => (
    typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ))

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export function useHomeTitle() {
  usePageTitle(SITE.title)
}
