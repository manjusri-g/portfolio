import { Link, useLocation } from 'react-router-dom'
import { SITE } from '../site'

export default function Nav({ tone = 'light' }) {
  const { pathname } = useLocation()
  const skipHref = pathname === '/' ? '#work' : '#main'

  return (
    <nav className={`nav nav--${tone}`}>
      <a href={skipHref} className="skip-link">Skip to content</a>
      <div className="container nav__inner">
        <Link to="/" className="nav__name">{SITE.name}</Link>
        <ul className="nav__links">
          <li><Link to={{ pathname: '/', hash: 'work' }}>Work</Link></li>
          <li><Link to={{ pathname: '/', hash: 'about' }}>About</Link></li>
          <li>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              className="nav__resume"
            >
              Resume <span className="nav__arrow">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
