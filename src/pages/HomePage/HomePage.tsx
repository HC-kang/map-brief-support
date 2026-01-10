import { MainTemplate } from '@/components/templates'
import { HeroSection, FeaturesSection, RecommendationsSection } from '@/components/organisms'

export function HomePage() {
  return (
    <MainTemplate>
      <HeroSection />
      <FeaturesSection />
      <RecommendationsSection />
    </MainTemplate>
  )
}
