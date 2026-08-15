import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { usePageTitle } from '../hooks.js'

export default function NotFound() {
  usePageTitle('Page not found — Manjusri Gobiraj')

  return (
    <div className="cs-page">
      <Nav tone="light" />
      <section id="main" className="not-found">
        <div className="container">
          <p className="cs-hero__label">404</p>
          <h1 className="cs-hero__title">This page wandered off.</h1>
          <p className="cs-hero__tagline">Head back home to see selected work.</p>
          <Link to="/" className="card__cta">Back home →</Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
