import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { FAQItem } from './FAQItem'

describe('FAQItem', () => {
  const defaultProps = {
    question: 'What is Map Brief?',
    answer: 'Map Brief is a map recording app.',
  }

  it('renders question correctly', () => {
    render(<FAQItem {...defaultProps} />)
    expect(screen.getByText('What is Map Brief?')).toBeInTheDocument()
  })

  it('answer is hidden by default', () => {
    render(<FAQItem {...defaultProps} />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows answer when clicked', async () => {
    render(<FAQItem {...defaultProps} />)
    const button = screen.getByRole('button')
    
    await userEvent.click(button)
    
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText('Map Brief is a map recording app.')).toBeVisible()
  })

  it('toggles answer visibility on multiple clicks', async () => {
    render(<FAQItem {...defaultProps} />)
    const button = screen.getByRole('button')
    
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
