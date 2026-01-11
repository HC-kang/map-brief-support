import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Text } from './Text'

describe('Text', () => {
  it('renders children correctly', () => {
    render(<Text>Hello World</Text>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders with correct default tag based on variant', () => {
    const { container, rerender } = render(<Text variant="h1">Heading 1</Text>)
    expect(container.querySelector('h1')).toBeInTheDocument()

    rerender(<Text variant="h2">Heading 2</Text>)
    expect(container.querySelector('h2')).toBeInTheDocument()

    rerender(<Text variant="body">Body text</Text>)
    expect(container.querySelector('p')).toBeInTheDocument()
  })

  it('allows overriding the tag with as prop', () => {
    const { container } = render(<Text variant="h1" as="span">Custom tag</Text>)
    expect(container.querySelector('span')).toBeInTheDocument()
    expect(container.querySelector('h1')).not.toBeInTheDocument()
  })

  it('applies variant styles correctly', () => {
    render(<Text variant="h1">Large heading</Text>)
    expect(screen.getByText('Large heading')).toHaveClass('text-4xl')
  })

  it('applies color styles correctly', () => {
    const { rerender } = render(<Text color="primary">Primary</Text>)
    expect(screen.getByText('Primary')).toHaveClass('text-slate-900')

    rerender(<Text color="muted">Muted</Text>)
    expect(screen.getByText('Muted')).toHaveClass('text-slate-500')

    rerender(<Text color="accent">Accent</Text>)
    expect(screen.getByText('Accent')).toHaveClass('text-[#2E5F4D]')
  })

  it('applies custom className', () => {
    render(<Text className="custom-class">With custom class</Text>)
    expect(screen.getByText('With custom class')).toHaveClass('custom-class')
  })
})
