import { Link } from 'react-router-dom'
import { hero, problems, caseMigration, caseAgentic, method, profileSummary, contact } from '../data/content'
import AgenticPipeline from '../components/AgenticPipeline'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero section">
        <div className="page-container">
          <p className="hero-name">Fabien Costes</p>
          <h1 className="hero-title">{hero.title}</h1>
          <blockquote className="hero-tagline">{hero.tagline}</blockquote>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-ctas">
            <Link to="/#realisations" className="btn btn--primary">
              {hero.ctas.realisations.label}
            </Link>
            <Link to={hero.ctas.parcours.href} className="btn btn--secondary">
              {hero.ctas.parcours.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Problèmes résolus */}
      <section className="section section--alt" id="problemes">
        <div className="page-container">
          <div className="accent-line" />
          <h2 className="section-title">{problems.title}</h2>
          <div className="grid-4 problems-grid">
            {problems.items.map((item) => (
              <article key={item.title} className="card problem-card">
                <span className="problem-icon" aria-hidden="true">{item.icon}</span>
                <h3 className="problem-title">{item.title}</h3>
                <p className="problem-desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Étude de cas : Migration */}
      <section className="section" id="realisations">
        <div className="page-container">
          <span className="badge">{caseMigration.badge}</span>
          <h2 className="section-title case-title">{caseMigration.title}</h2>
          <p className="section-subtitle">{caseMigration.context}</p>

          <div className="grid-3 case-kpis">
            {caseMigration.volume.map((kpi) => (
              <div key={kpi.label} className="kpi">
                <div className="kpi-value">{kpi.value}</div>
                <div className="kpi-label">{kpi.label}</div>
              </div>
            ))}
          </div>

          <div className="case-details-full grid-3">
            <div>
              <h3 className="case-section-title">Périmètre migré</h3>
              <ul className="case-list">
                {caseMigration.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="case-section-title">Sources et environnement</h3>
              <ul className="case-list">
                {caseMigration.sources.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="case-section-title">Approche</h3>
              <ul className="case-list">
                {caseMigration.approach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="case-approach-detail-box">
            <p className="case-approach-detail">{caseMigration.approachDetail}</p>
          </div>

          <div className="case-results">
            <h3 className="case-section-title">Résultats</h3>
            <ul className="case-results-list">
              {caseMigration.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Étude de cas : Usine agentique */}
      <section className="section section--alt" id="experimentation">
        <div className="page-container">
          <span className="badge badge--experiment">{caseAgentic.badge}</span>
          <h2 className="section-title case-title">{caseAgentic.title}</h2>
          <p className="section-subtitle">{caseAgentic.objective}</p>

          <div className="case-details">
            <div className="case-scope">
              <h3 className="case-section-title">Périmètre expérimenté</h3>
              <p className="case-scope-text">{caseAgentic.scope}</p>
            </div>

            <div className="case-tech">
              <h3 className="case-section-title">Contexte technique</h3>
              <ul className="case-list">
                {caseAgentic.techContext.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="case-pipeline-section">
            <h3 className="case-section-title">Chaîne agentique</h3>
            <AgenticPipeline />
          </div>

          <blockquote className="case-key-message">
            {caseAgentic.keyMessage}
          </blockquote>

          <div className="case-result-box">
            <p className="case-result-text">{caseAgentic.result}</p>
            <p className="case-evolution">{caseAgentic.evolution}</p>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section className="section" id="methode">
        <div className="page-container">
          <div className="accent-line" />
          <h2 className="section-title">{method.title}</h2>
          <p className="section-subtitle">{method.subtitle}</p>
          <div className="method-steps">
            {method.steps.map((step) => (
              <div key={step.number} className="method-step">
                <div className="method-step-number">{step.number}</div>
                <div className="method-step-content">
                  <h3 className="method-step-title">{step.title}</h3>
                  <p className="method-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours résumé */}
      <section className="section section--alt" id="parcours-resume">
        <div className="page-container">
          <div className="accent-line" />
          <h2 className="section-title">{profileSummary.title}</h2>

          <div className="grid-3 profile-kpis">
            {profileSummary.highlights.map((h) => (
              <div key={h.label} className="kpi">
                <div className="kpi-value">{h.value}</div>
                <div className="kpi-label">{h.label}</div>
              </div>
            ))}
          </div>

          <div className="profile-details grid-2">
            <div>
              <h3 className="case-section-title">Compétences clés</h3>
              <div className="profile-badges">
                {profileSummary.skills.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="case-section-title">Certifications</h3>
              <ul className="case-list">
                {profileSummary.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="profile-cta">
            <Link to={profileSummary.cta.href} className="btn btn--primary">
              {profileSummary.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="page-container contact-section">
          <div className="accent-line" />
          <h2 className="section-title">{contact.title}</h2>
          <p className="contact-message">{contact.message}</p>
          <a
            href={contact.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            {contact.linkedin.label}
          </a>
        </div>
      </section>
    </>
  )
}
