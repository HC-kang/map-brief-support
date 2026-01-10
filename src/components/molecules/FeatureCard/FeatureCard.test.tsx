import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeatureCard } from './FeatureCard'

describe('FeatureCard', () => {
  it('renders title correctly', () => {
    render(
      <FeatureCard
        icon="pencil"
        title="Drawing Feature"
        description="Draw on the map"
      />
    )
    expect(screen.getByText('Drawing Feature')).toBeInTheDocument()
  })

  it('renders description correctly', () => {
    render(
      <FeatureCard
        icon="pencil"
        title="Drawing Feature"
        description="Draw on the map"
      />
    )
    expect(screen.getByText('Draw on the map')).toBeInTheDocument()
  })

  it('renders icon', () => {
    const { container } = render(
      <FeatureCard
        icon="pencil"
        title="Drawing Feature"
        description="Draw on the map"
      />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
