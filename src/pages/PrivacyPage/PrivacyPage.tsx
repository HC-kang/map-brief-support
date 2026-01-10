import { useTranslation } from 'react-i18next'
import { LegalTemplate } from '@/components/templates'
import { Text, Link } from '@/components/atoms'

const SUPPORT_EMAIL = 'weston0713@gmail.com'

export function PrivacyPage() {
  const { t } = useTranslation()

  const sections = [
    { key: 'intro', hasItems: false },
    { key: 'collection', hasItems: true },
    { key: 'storage', hasItems: false },
    { key: 'sharing', hasItems: false },
    { key: 'rights', hasItems: false },
    { key: 'changes', hasItems: false },
    { key: 'contact', hasItems: false, showEmail: true },
  ]

  return (
    <LegalTemplate title={t('privacy.title')} lastUpdated="2024-01-01">
      <div className="space-y-8">
        {sections.map(({ key, hasItems, showEmail }) => (
          <section key={key}>
            <Text variant="h3" className="mb-4">
              {t(`privacy.sections.${key}.title`)}
            </Text>
            <Text color="secondary" className="mb-4">
              {t(`privacy.sections.${key}.content`)}
            </Text>
            {hasItems && (
              <ul className="list-disc list-inside space-y-2 ml-4">
                {(t(`privacy.sections.${key}.items`, { returnObjects: true }) as string[]).map(
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
