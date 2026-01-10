import { useTranslation } from 'react-i18next'
import { Text, Link } from '@/components/atoms'

export function Footer() {
  const { t } = useTranslation()

  const links = [
    { to: '/privacy', label: t('nav.privacy') },
    { to: '/terms', label: t('nav.terms') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Text variant="bodySmall" color="muted">
            {t('footer.copyright')}
          </Text>
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link key={link.to} to={link.to} variant="footer">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
