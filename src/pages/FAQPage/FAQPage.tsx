import { useTranslation } from 'react-i18next'
import { PageTemplate } from '@/components/templates'
import { FAQList } from '@/components/organisms'

export function FAQPage() {
  const { t } = useTranslation()

  return (
    <PageTemplate title={t('faq.title')}>
      <FAQList />
    </PageTemplate>
  )
}
