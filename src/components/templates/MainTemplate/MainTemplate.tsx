import type { ReactNode } from 'react'
import { Header, Footer } from '@/components/organisms'

interface MainTemplateProps {
  children: ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
