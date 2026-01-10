import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, FAQPage, ContactPage, BugReportPage, PrivacyPage, TermsPage } from '@/pages'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bug-report" element={<BugReportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
