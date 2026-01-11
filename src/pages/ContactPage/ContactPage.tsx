import { useTranslation } from 'react-i18next'
import { PageTemplate } from '@/components/templates'
import { Text, Link, Icon } from '@/components/atoms'

const SUPPORT_EMAIL = 'weston0713@gmail.com'

export function ContactPage() {
  const { t } = useTranslation()

  return (
    <PageTemplate title={t('contact.title')} subtitle={t('contact.description')}>
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#d1ebe1] text-[#2E5F4D]">
            <Icon name="mail" size="lg" />
          </div>
          <div>
            <Text variant="h4" className="mb-2">
              {t('contact.email')}
            </Text>
            <Link to={`mailto:${SUPPORT_EMAIL}`} external variant="inline">
              {SUPPORT_EMAIL}
            </Link>
            <Text variant="bodySmall" color="muted" className="mt-4">
              {t('contact.responseTime')}
            </Text>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
