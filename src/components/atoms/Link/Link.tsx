import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

type LinkVariant = 'default' | 'nav' | 'footer' | 'inline'

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: ReactNode
  to: string
  variant?: LinkVariant
  external?: boolean
}

const variantStyles: Record<LinkVariant, string> = {
  default: 'text-blue-500 hover:text-blue-600 hover:underline',
  nav: 'text-slate-700 hover:text-blue-500 font-medium transition-colors',
  footer: 'text-slate-500 hover:text-slate-700 text-sm',
  inline: 'text-blue-500 underline hover:text-blue-600',
}

export function Link({
  children,
  to,
  variant = 'default',
  external = false,
  className = '',
  ...props
}: LinkProps) {
  const styles = `${variantStyles[variant]} ${className}`

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <RouterLink to={to} className={styles} {...props}>
      {children}
    </RouterLink>
  )
}
