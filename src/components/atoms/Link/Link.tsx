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
  default: 'text-[#2E5F4D] hover:text-[#1e3d32] hover:underline',
  nav: 'text-slate-700 hover:text-[#2E5F4D] font-medium transition-colors',
  footer: 'text-slate-500 hover:text-slate-700 text-sm',
  inline: 'text-[#2E5F4D] underline hover:text-[#1e3d32]',
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
