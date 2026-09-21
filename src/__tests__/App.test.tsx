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
    // Un champ renseigne est rendu...
    expect(screen.getByText('979 591 872')).toBeInTheDocument()
    // ...tandis qu'un champ vide ne laisse pas de libelle orphelin.
    expect(screen.queryByText('Capital social')).not.toBeInTheDocument()
    expect(screen.queryByText('RCS')).not.toBeInTheDocument()
  })
})
