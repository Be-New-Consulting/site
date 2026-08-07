import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { footer as footerData } from '../data/content'
import './Nav.css'

const navLinks = [
  { label: 'Réalisations', href: '/#realisations' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="nav-header">
      <nav className="nav page-container" aria-label="Navigation principale">
        <Link to="/" className="nav-brand" onClick={handleLinkClick}>
          <img src="/logo-benew.png" alt="" className="nav-logo" width={32} height={32} />
          <span className="nav-brand-text">{footerData.brand}</span>
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          <span className={`nav-toggle-bar ${open ? 'open' : ''}`} />
        </button>

        <ul className={`nav-links ${open ? 'nav-links--open' : ''}`} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  to={link.href}
                  className={`nav-link ${location.pathname === link.href ? 'nav-link--active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className="nav-link" onClick={handleLinkClick}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
