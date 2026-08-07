import { footer as footerData } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-container footer-inner">
        <div className="footer-brand">
          <img src="/logo-benew.png" alt="" width={24} height={24} className="footer-logo" />
          <span>{footerData.brand}</span>
        </div>
        <ul className="footer-links" role="list">
          {footerData.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
