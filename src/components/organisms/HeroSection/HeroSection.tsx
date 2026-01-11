import { useTranslation } from 'react-i18next'
import { Text, Icon } from '@/components/atoms'

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-gradient-to-br from-[#e8f5f0] to-slate-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#2E5F4D] text-white mb-8 shadow-lg">
            <Icon name="map" size="xl" />
          </div>
          
          <Text variant="h1" className="mb-6 max-w-3xl">
            {t('home.hero.title')}
          </Text>
          
          <Text variant="body" color="secondary" className="mb-4 max-w-2xl">
            {t('home.hero.subtitle')}
          </Text>
          
          <Text variant="body" color="secondary" className="max-w-2xl">
            {t('home.hero.description')}
          </Text>
        </div>
      </div>
    </section>
  )
}
