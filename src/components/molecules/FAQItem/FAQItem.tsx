import { useState } from 'react'
import { Text, Icon } from '@/components/atoms'

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#2E5F4D] focus:ring-offset-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Text variant="body" className="font-medium pr-4">
          {question}
        </Text>
        <Icon
          name="chevronDown"
          size="md"
          className={`flex-shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <Text color="secondary" className="pl-0">
          {answer}
        </Text>
      </div>
    </div>
  )
}
