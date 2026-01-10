import { useTranslation } from 'react-i18next'
import { FAQItem } from '@/components/molecules'

interface FAQItemData {
  question: string
  answer: string
}

export function FAQList() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as FAQItemData[]

  return (
    <div className="divide-y divide-slate-200 border rounded-lg bg-white">
      {items.map((item, index) => (
        <div key={index} className="px-6">
          <FAQItem question={item.question} answer={item.answer} />
        </div>
      ))}
    </div>
  )
}
