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
})
