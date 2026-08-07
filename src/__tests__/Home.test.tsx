import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Home from '../pages/Home'

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
}

describe('Home page', () => {
  it('renders hero section with name and positioning', () => {
    renderHome()
    expect(screen.getByText('Fabien Costes')).toBeInTheDocument()
    expect(screen.getByText('Qualité logicielle et IA appliquée')).toBeInTheDocument()
  })

  it('renders the 4 problems', () => {
    renderHome()
    expect(screen.getByText('Démonstrations à sécuriser')).toBeInTheDocument()
    expect(screen.getByText('Manque de couverture automatisée')).toBeInTheDocument()
    expect(screen.getByText('Données et migrations difficiles à contrôler')).toBeInTheDocument()
    expect(screen.getByText(/IA sans dispositif/)).toBeInTheDocument()
  })

  it('renders migration case study with key figures', () => {
    renderHome()
    expect(screen.getByText('~1 To')).toBeInTheDocument()
    expect(screen.getByText('100+ Mds')).toBeInTheDocument()
    expect(screen.getByText('~1 Md')).toBeInTheDocument()
    expect(screen.getByText('8 à 10 jours', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('4 anomalies critiques', { exact: false })).toBeInTheDocument()
  })

  it('marks migration as deterministic case study', () => {
    renderHome()
    const badges = screen.getAllByText('Étude de cas')
    expect(badges.length).toBeGreaterThanOrEqual(1)
  })

  it('marks agentic pipeline as experimentation', () => {
    renderHome()
    expect(screen.getByText('Expérimentation')).toBeInTheDocument()
    expect(screen.getByText(/Usine agentique/)).toBeInTheDocument()
  })

  it('distinguishes deterministic from experimental', () => {
    renderHome()
    expect(screen.getByText('Étude de cas')).toBeInTheDocument()
    expect(screen.getByText('Expérimentation')).toBeInTheDocument()
  })

  it('renders method steps', () => {
    renderHome()
    expect(screen.getByText(/Semaine 1/)).toBeInTheDocument()
    expect(screen.getByText(/Semaine 4/)).toBeInTheDocument()
  })

  it('renders profile summary with certifications', () => {
    renderHome()
    expect(screen.getByText('ISTQB Test Manager')).toBeInTheDocument()
    expect(screen.getByText('14+')).toBeInTheDocument()
  })

  it('renders contact section with LinkedIn link', () => {
    renderHome()
    const link = screen.getByRole('link', { name: /contacter sur LinkedIn/i })
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/fabiencostes/')
  })

  it('has navigation link to /parcours', () => {
    renderHome()
    const links = screen.getAllByRole('link', { name: /parcours/i })
    const parcoursLink = links.find(l => l.getAttribute('href') === '/parcours')
    expect(parcoursLink).toBeInTheDocument()
  })
})
