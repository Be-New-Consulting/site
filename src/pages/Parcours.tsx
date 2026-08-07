import { Link } from 'react-router-dom'
import { experiences, certifications, skills, domains, cvLink } from '../data/parcours'
import './Parcours.css'

export default function Parcours() {
  return (
    <>
      <section className="section parcours-hero">
        <div className="page-container">
          <Link to="/" className="parcours-back">← Retour à l'accueil</Link>
          <h1 className="section-title parcours-title">Parcours professionnel</h1>
          <p className="section-subtitle">
            Plus de 14 ans en qualité logicielle — de consultant test à pilote transverse de 4 équipes,
            aujourd'hui indépendant.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" id="experiences">
        <div className="page-container">
          <div className="accent-line" />
          <h2 className="section-title">Expériences</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <article key={index} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <span className="timeline-period">{exp.period}</span>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-context">{exp.context}</p>
                  <ul className="timeline-highlights">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="section section--alt" id="competences">
        <div className="page-container">
          <div className="accent-line" />
          <h2 className="section-title">Compétences</h2>
          <div className="grid-3 skills-grid">
            <div>
              <h3 className="skills-category">Test & Qualité</h3>
              <ul className="skills-list">
                {skills.testing.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="skills-category">Management & Organisation</h3>
              <ul className="skills-list">
                {skills.management.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="skills-category">Technique</h3>
              <ul className="skills-list">
                {skills.tech.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Domaines */}
      <section className="section">
        <div className="page-container">
          <div className="grid-2">
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Certifications</h2>
              <ul className="cert-list">
                {certifications.map((cert) => (
                  <li key={cert.name} className="cert-item">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-org">{cert.org}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="accent-line" />
              <h2 className="section-title">Domaines fonctionnels</h2>
              <div className="domain-badges">
                {domains.map((d) => (
                  <span key={d} className="badge">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--alt parcours-cta-section">
        <div className="page-container" style={{ textAlign: 'center' }}>
          <a href={cvLink} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
            Voir le CV complet
          </a>
        </div>
      </section>
    </>
  )
}
