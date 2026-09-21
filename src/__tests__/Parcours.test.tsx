import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Parcours from '../pages/Parcours'

function renderParcours() {
  return render(
    <MemoryRouter initialEntries={['/parcours']}>
      <Parcours />
    </MemoryRouter>,
  )
}

describe('Parcours page', () => {
  it('renders page title', () => {
    renderParcours()
    expect(screen.getByText('Parcours professionnel')).toBeInTheDocument()
  })

  it('renders experiences timeline', () => {
    renderParcours()
    expect(screen.getByText('Test Manager / Deployment Manager')).toBeInTheDocument()
    expect(screen.getByText('Mai 2022 – Présent')).toBeInTheDocument()
  })

  it('renders certifications', () => {
    renderParcours()
    expect(screen.getByText('ISTQB Foundation')).toBeInTheDocument()
    expect(screen.getByText('ISTQB Agile')).toBeInTheDocument()
    expect(screen.getByText('ISTQB Test Manager')).toBeInTheDocument()
    expect(screen.getByText('TMap Test Engineer')).toBeInTheDocument()
  })

  it('renders skills categories', () => {
    renderParcours()
    expect(screen.getByText('Test & Qualité')).toBeInTheDocument()
    expect(screen.getByText('Management & Organisation')).toBeInTheDocument()
    expect(screen.getByText('Technique')).toBeInTheDocument()
  })

  it('renders contact CTA', () => {
    renderParcours()
    const link = screen.getByRole('link', { name: /Échangeons/i })
    expect(link).toHaveAttribute('href', '/#contact')
  })

  it('renders back link to home', () => {
    renderParcours()
    const link = screen.getByRole('link', { name: /Retour/i })
    expect(link).toHaveAttribute('href', '/')
  })
})
