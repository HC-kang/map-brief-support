import type { HTMLAttributes, ReactNode, ElementType } from 'react'

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'bodySmall' | 'caption'
type TextColor = 'primary' | 'secondary' | 'muted' | 'accent' | 'white'
type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div' | 'label'

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  variant?: TextVariant
  color?: TextColor
  as?: TextElement
}

const variantStyles: Record<TextVariant, string> = {
  h1: 'text-4xl md:text-5xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl font-semibold leading-snug',
  h4: 'text-xl md:text-2xl font-semibold leading-snug',
  body: 'text-base leading-relaxed',
  bodySmall: 'text-sm leading-relaxed',
  caption: 'text-xs leading-normal',
}

const colorStyles: Record<TextColor, string> = {
  primary: 'text-slate-900',
  secondary: 'text-slate-700',
  muted: 'text-slate-500',
  accent: 'text-[#2E5F4D]',
  white: 'text-white',
}

const defaultTags: Record<TextVariant, TextElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  bodySmall: 'p',
  caption: 'span',
}

export function Text({
  children,
  variant = 'body',
  color = 'primary',
  as,
  className = '',
  ...props
}: TextProps) {
  const Tag = (as || defaultTags[variant]) as ElementType
  
  return (
    <Tag
      className={`${variantStyles[variant]} ${colorStyles[color]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
