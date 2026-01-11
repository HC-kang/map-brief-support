import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Link } from './Link'

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>)
}

describe('Link', () => {
  it('renders children correctly', () => {
    renderWithRouter(<Link to="/test">Click me</Link>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as internal link by default', () => {
    renderWithRouter(<Link to="/about">About</Link>)
    const link = screen.getByRole('link', { name: 'About' })
    expect(link).toHaveAttribute('href', '/about')
    expect(link).not.toHaveAttribute('target')
  })

  it('renders as external link when external prop is true', () => {
    renderWithRouter(<Link to="https://example.com" external>External</Link>)
    const link = screen.getByRole('link', { name: 'External' })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies variant styles correctly', () => {
    const { rerender } = renderWithRouter(<Link to="/test" variant="default">Default</Link>)
    expect(screen.getByRole('link')).toHaveClass('text-[#2E5F4D]')

    rerender(<BrowserRouter><Link to="/test" variant="nav">Nav</Link></BrowserRouter>)
    expect(screen.getByRole('link')).toHaveClass('text-slate-700')

    rerender(<BrowserRouter><Link to="/test" variant="footer">Footer</Link></BrowserRouter>)
    expect(screen.getByRole('link')).toHaveClass('text-slate-500')
  })

  it('applies custom className', () => {
    renderWithRouter(<Link to="/test" className="custom-class">Custom</Link>)
    expect(screen.getByRole('link')).toHaveClass('custom-class')
  })
})
