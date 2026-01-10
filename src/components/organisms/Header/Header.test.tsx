import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { describe, it, expect } from 'vitest'
import i18n from '@/i18n'
import { Header } from './Header'

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>{ui}</BrowserRouter>
    </I18nextProvider>
  )
}

describe('Header', () => {
  it('renders app name', () => {
    renderWithProviders(<Header />)
    expect(screen.getByText('Map Brief')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    renderWithProviders(<Header />)
    expect(screen.getByRole('link', { name: /home|홈/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /faq/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact|문의/i })).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    renderWithProviders(<Header />)
    const menuButton = screen.getByLabelText('Toggle menu')
    
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    
    await userEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    
    await userEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders language switcher', () => {
    renderWithProviders(<Header />)
    const switchers = screen.getAllByRole('button', { name: /switch to|한국어로/i })
    expect(switchers.length).toBeGreaterThan(0)
  })
})
