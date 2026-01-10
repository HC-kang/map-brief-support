import type { ReactNode } from 'react'
import { Text } from '@/components/atoms'
import { MainTemplate } from '../MainTemplate'

interface PageTemplateProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export function PageTemplate({ title, subtitle, children }: PageTemplateProps) {
  return (
    <MainTemplate>
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <Text variant="h1" className="mb-4">
              {title}
            </Text>
            {subtitle && (
              <Text color="secondary">
                {subtitle}
              </Text>
            )}
          </div>
          {children}
        </div>
      </div>
    </MainTemplate>
  )
}
