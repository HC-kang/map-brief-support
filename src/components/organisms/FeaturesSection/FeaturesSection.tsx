import { useTranslation } from 'react-i18next'
import { Text } from '@/components/atoms'
import { FeatureCard } from '@/components/molecules'

export function FeaturesSection() {
  const { t } = useTranslation()

  const features = [
    {
      icon: 'pencil' as const,
      title: t('home.features.drawing.title'),
      description: t('home.features.drawing.description'),
    },
    {
      icon: 'photo' as const,
      title: t('home.features.photoMarker.title'),
      description: t('home.features.photoMarker.description'),
    },
    {
      icon: 'layers' as const,
      title: t('home.features.mapModes.title'),
      description: t('home.features.mapModes.description'),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Text variant="h2" className="text-center mb-12">
          {t('home.features.title')}
        </Text>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
