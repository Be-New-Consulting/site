import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useHashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = hash.slice(1)
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return true
      }
      return false
    }

    // Element may not be rendered yet after a route change
    if (!scroll()) {
      const frame = requestAnimationFrame(() => {
        if (!scroll()) {
          setTimeout(scroll, 100)
        }
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [pathname, hash])
}
