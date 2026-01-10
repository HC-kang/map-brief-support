import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { describe, it, expect } from 'vitest'
import i18n from '@/i18n'
import { Footer } from './Footer'

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>{ui}</BrowserRouter>
    </I18nextProvider>
  )
}

describe('Footer', () => {
  it('renders copyright text', () => {
    renderWithProviders(<Footer />)
    expect(screen.getByText(/Map Brief/i)).toBeInTheDocument()
  })

  it('renders privacy policy link', () => {
    renderWithProviders(<Footer />)
    expect(screen.getByRole('link', { name: /privacy|개인정보/i })).toBeInTheDocument()
  })

  it('renders terms of service link', () => {
    renderWithProviders(<Footer />)
    expect(screen.getByRole('link', { name: /terms|이용약관/i })).toBeInTheDocument()
  })

  it('renders contact link', () => {
    renderWithProviders(<Footer />)
    expect(screen.getByRole('link', { name: /contact|문의/i })).toBeInTheDocument()
  })
})
