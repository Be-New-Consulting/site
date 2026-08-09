import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { footer as footerData } from '../data/content'
import './Nav.css'

const navLinks = [
  { label: 'Réalisations', href: '/#realisations' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Contact', href: '/#contact' },
]

// Keep in sync with the mobile breakpoint in Nav.css
const MOBILE_QUERY = '(max-width: 767px)'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (typeof window.matchMedia !== 'function') return
    const mql = window.matchMedia(MOBILE_QUERY)
    const update = () => setIsMobile(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  const linksHidden = isMobile && !open

  return (
    <header className="nav-header">
      <nav className="nav page-container" aria-label="Navigation principale">
        <Link to="/" className="nav-brand" onClick={close}>
          <img src="/logo-benew.webp" alt="" className="nav-logo" width={32} height={32} />
          <span className="nav-brand-text">{footerData.brand}</span>
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className={`nav-toggle-bar ${open ? 'open' : ''}`} />
        </button>

        <ul
          id="nav-menu"
          className={`nav-links ${open ? 'nav-links--open' : ''}`}
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'nav-link--active' : ''}`}
                onClick={close}
                tabIndex={linksHidden ? -1 : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
