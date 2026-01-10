import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { NavLink } from './NavLink'

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  )
}

describe('NavLink', () => {
  it('renders children correctly', () => {
    renderWithRouter(<NavLink to="/about">About</NavLink>)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders as a link with correct href', () => {
    renderWithRouter(<NavLink to="/about">About</NavLink>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/about')
  })

  it('applies active style when on current route', () => {
    renderWithRouter(<NavLink to="/about">About</NavLink>, { route: '/about' })
    expect(screen.getByRole('link')).toHaveClass('text-blue-500')
  })

  it('does not apply active style when on different route', () => {
    renderWithRouter(<NavLink to="/about">About</NavLink>, { route: '/home' })
    expect(screen.getByRole('link')).not.toHaveClass('text-blue-500')
  })
})
