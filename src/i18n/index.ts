import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ko from './locales/ko.json'
import en from './locales/en.json'

const savedLanguage = typeof window !== 'undefined' 
  ? localStorage.getItem('language') || navigator.language.split('-')[0] 
  : 'ko'

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: ko },
    en: { translation: en },
  },
  lng: savedLanguage === 'ko' || savedLanguage === 'en' ? savedLanguage : 'ko',
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
