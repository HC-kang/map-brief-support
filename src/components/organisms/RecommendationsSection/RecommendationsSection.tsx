import { useTranslation } from 'react-i18next'
import { Text } from '@/components/atoms'
import { FeatureCard } from '@/components/molecules'

export function RecommendationsSection() {
  const { t } = useTranslation()

  const recommendations = [
    {
      icon: 'utensils' as const,
      title: t('home.recommendations.foodie.title'),
      description: t('home.recommendations.foodie.description'),
    },
    {
      icon: 'plane' as const,
      title: t('home.recommendations.traveler.title'),
      description: t('home.recommendations.traveler.description'),
    },
    {
      icon: 'building' as const,
      title: t('home.recommendations.surveyor.title'),
      description: t('home.recommendations.surveyor.description'),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Text variant="h2" className="text-center mb-12">
          {t('home.recommendations.title')}
        </Text>
        
        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Text variant="h4" color="accent">
            {t('home.cta')}
          </Text>
        </div>
      </div>
    </section>
  )
}
