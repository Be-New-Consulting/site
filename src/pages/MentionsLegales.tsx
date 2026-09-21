import { Link } from 'react-router-dom'
import { legal } from '../data/legal'
import './MentionsLegales.css'

export default function MentionsLegales() {
  return (
    <section className="section legal-page">
      <div className="page-container">
        <Link to="/" className="legal-back">← Retour à l'accueil</Link>
        <div className="accent-line" />
        <h1 className="section-title">{legal.title}</h1>
        <p className="section-subtitle">{legal.intro}</p>

        {legal.sections.map((section) => {
          const rows = (section.rows ?? []).filter((row) => row.value !== '')
          return (
            <div key={section.heading} className="legal-block">
              <h2 className="legal-heading">{section.heading}</h2>

              {rows.length > 0 && (
                <dl className="legal-list">
                  {rows.map((row) => (
                    <div key={row.label} className="legal-row">
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {section.paragraphs?.map((text) => (
                <p key={text} className="legal-text">{text}</p>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
