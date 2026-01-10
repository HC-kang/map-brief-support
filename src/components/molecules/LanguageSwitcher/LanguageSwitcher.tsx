import { useTranslation } from 'react-i18next'
import { Button, Icon } from '@/components/atoms'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const toggleLanguage = () => {
    const newLang = currentLang === 'ko' ? 'en' : 'ko'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1"
      aria-label={currentLang === 'ko' ? 'Switch to English' : '한국어로 변경'}
    >
      <Icon name="globe" size="sm" />
      <span className="uppercase">{currentLang}</span>
    </Button>
  )
}
