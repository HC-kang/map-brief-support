import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders svg element', () => {
    const { container } = render(<Icon name="map" />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('applies correct size', () => {
    const { container, rerender } = render(<Icon name="map" size="sm" />)
    let svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '16')
    expect(svg).toHaveAttribute('height', '16')

    rerender(<Icon name="map" size="lg" />)
    svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')

    rerender(<Icon name="map" size="xl" />)
    svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('has aria-hidden attribute for accessibility', () => {
    const { container } = render(<Icon name="map" />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies custom className', () => {
    const { container } = render(<Icon name="map" className="custom-class" />)
    expect(container.querySelector('svg')).toHaveClass('custom-class')
  })

  it('renders different icons', () => {
    const { container, rerender } = render(<Icon name="map" />)
    const mapPath = container.querySelector('path')?.getAttribute('d')

    rerender(<Icon name="pencil" />)
    const pencilPath = container.querySelector('path')?.getAttribute('d')

    expect(mapPath).not.toBe(pencilPath)
  })
})
