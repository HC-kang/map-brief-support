import { useTranslation } from 'react-i18next'
import { PageTemplate } from '@/components/templates'
import { Text, Link, Icon } from '@/components/atoms'

const SUPPORT_EMAIL = 'weston0713@gmail.com'

export function BugReportPage() {
  const { t } = useTranslation()
  const steps = t('bugReport.howTo.steps', { returnObjects: true }) as string[]

  return (
    <PageTemplate title={t('bugReport.title')} subtitle={t('bugReport.description')}>
      <div className="space-y-8">
        <div className="bg-white rounded-xl border border-slate-200 p-8">
          <Text variant="h4" className="mb-4">
            {t('bugReport.howTo.title')}
          </Text>
          <ol className="list-decimal list-inside space-y-3">
            {steps.map((step, index) => (
              <li key={index}>
                <Text as="span" color="secondary">
                  {step}
                </Text>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-red-600">
              <Icon name="bug" size="lg" />
            </div>
            <div>
              <Text variant="h4" className="mb-2">
                {t('bugReport.email')}
              </Text>
              <Link
                to={`mailto:${SUPPORT_EMAIL}?subject=[Bug Report] Map Brief`}
                external
                variant="inline"
              >
                {SUPPORT_EMAIL}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
