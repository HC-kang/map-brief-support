import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { LanguageSwitcher } from './LanguageSwitcher'

const createI18nInstance = (lang: string) => {
  const instance = i18n.createInstance()
  instance.init({
    lng: lang,
    resources: {
      ko: { translation: {} },
      en: { translation: {} },
    },
  })
  return instance
}

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, 'setItem')
  })

  it('displays current language', () => {
    const i18nInstance = createI18nInstance('ko')
    render(
      <I18nextProvider i18n={i18nInstance}>
        <LanguageSwitcher />
      </I18nextProvider>
    )
    expect(screen.getByText('ko')).toBeInTheDocument()
  })

  it('toggles language when clicked', async () => {
    const i18nInstance = createI18nInstance('ko')
    render(
      <I18nextProvider i18n={i18nInstance}>
        <LanguageSwitcher />
      </I18nextProvider>
    )

    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByText('en')).toBeInTheDocument()
  })

  it('saves language preference to localStorage', async () => {
    const i18nInstance = createI18nInstance('ko')
    render(
      <I18nextProvider i18n={i18nInstance}>
        <LanguageSwitcher />
      </I18nextProvider>
    )

    await userEvent.click(screen.getByRole('button'))
    expect(localStorage.setItem).toHaveBeenCalledWith('language', 'en')
  })
})
