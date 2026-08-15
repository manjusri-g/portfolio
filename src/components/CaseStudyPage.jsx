import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import { usePageTitle, useScrollTop } from '../hooks.js'

export default function CaseStudyPage({ title, children }) {
  usePageTitle(`${title} — Manjusri Gobiraj`)
  useScrollTop()

  return (
    <div className="cs-page">
      <Nav tone="light" />
      {children}
      <Footer />
    </div>
  )
}
