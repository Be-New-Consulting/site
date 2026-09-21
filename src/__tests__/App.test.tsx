import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App routing', () => {
  it('renders Home at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('Fabien Costes')).toBeInTheDocument()
  })

  it('renders Parcours at /parcours', () => {
    render(
      <MemoryRouter initialEntries={['/parcours']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText('Parcours professionnel')).toBeInTheDocument()
  })

  it('renders MentionsLegales at /mentions-legales', () => {
    render(
      <MemoryRouter initialEntries={['/mentions-legales']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: 'Mentions légales', level: 1 })).toBeInTheDocument()
    expect(screen.getByText('Éditeur du site')).toBeInTheDocument()
    expect(screen.getByText('Responsable de la publication')).toBeInTheDocument()
  })

  it('omits legal fields left empty', () => {
    render(
      <MemoryRouter initialEntries={['/mentions-legales']}>
        <App />
      </MemoryRouter>,
    )
    // Les champs non renseignes ne doivent pas apparaitre comme libelles orphelins.
    expect(screen.queryByText('SIREN')).not.toBeInTheDocument()
  })
})
