import type { ReactNode } from 'react'
import { Text, Icon } from '@/components/atoms'

type IconName = 'map' | 'pencil' | 'photo' | 'layers' | 'mail' | 'bug' | 'menu' | 'close' | 'chevronDown' | 'globe' | 'utensils' | 'plane' | 'building'

interface FeatureCardProps {
  icon: IconName
  title: string
  description: string
  children?: ReactNode
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#d1ebe1] text-[#2E5F4D] mb-4">
        <Icon name={icon} size="lg" />
      </div>
      <Text variant="h4" className="mb-2">
        {title}
      </Text>
      <Text color="secondary">
        {description}
      </Text>
    </div>
  )
}
