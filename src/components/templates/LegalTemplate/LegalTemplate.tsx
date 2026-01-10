import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Text } from '@/components/atoms'
import { MainTemplate } from '../MainTemplate'

interface LegalTemplateProps {
  title: string
  lastUpdated?: string
  children: ReactNode
}

export function LegalTemplate({ title, lastUpdated, children }: LegalTemplateProps) {
  const { t } = useTranslation()

  return (
    <MainTemplate>
      <div className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <Text variant="h1" className="mb-4">
              {title}
            </Text>
            {lastUpdated && (
              <Text variant="bodySmall" color="muted">
                {t('privacy.lastUpdated')}: {lastUpdated}
              </Text>
            )}
          </div>
          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}
