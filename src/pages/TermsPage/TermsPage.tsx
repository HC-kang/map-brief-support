import { useTranslation } from 'react-i18next'
import { LegalTemplate } from '@/components/templates'
import { Text, Link } from '@/components/atoms'

const SUPPORT_EMAIL = 'weston0713@gmail.com'

export function TermsPage() {
  const { t } = useTranslation()

  const sections = [
    { key: 'acceptance', hasItems: false },
    { key: 'service', hasItems: false },
    { key: 'usage', hasItems: true },
    { key: 'intellectual', hasItems: false },
    { key: 'disclaimer', hasItems: false },
    { key: 'termination', hasItems: false },
    { key: 'changes', hasItems: false },
    { key: 'governing', hasItems: false },
    { key: 'contact', hasItems: false, showEmail: true },
  ]

  return (
    <LegalTemplate title={t('terms.title')} lastUpdated="2024-01-01">
      <div className="space-y-8">
        {sections.map(({ key, hasItems, showEmail }) => (
          <section key={key}>
            <Text variant="h3" className="mb-4">
              {t(`terms.sections.${key}.title`)}
            </Text>
            <Text color="secondary" className="mb-4">
              {t(`terms.sections.${key}.content`)}
            </Text>
            {hasItems && (
              <ul className="list-disc list-inside space-y-2 ml-4">
                {(t(`terms.sections.${key}.items`, { returnObjects: true }) as string[]).map(
                  (item, index) => (
                    <li key={index}>
                      <Text as="span" color="secondary">
                        {item}
                      </Text>
                    </li>
                  )
                )}
              </ul>
            )}
            {showEmail && (
              <Link to={`mailto:${SUPPORT_EMAIL}`} external variant="inline">
                {SUPPORT_EMAIL}
              </Link>
            )}
          </section>
        ))}
      </div>
    </LegalTemplate>
  )
}
