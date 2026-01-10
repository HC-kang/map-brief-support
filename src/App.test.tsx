import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { describe, it, expect } from 'vitest'
import i18n from '@/i18n'
import { App } from './App'

const renderApp = () => {
  return render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  )
}

describe('App', () => {
  it('renders home page by default', () => {
    renderApp()
    expect(screen.getByText('Map Brief')).toBeInTheDocument()
  })

  it('renders hero section on home page', () => {
    renderApp()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
