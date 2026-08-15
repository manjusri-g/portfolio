import { Link } from 'react-router-dom'
import { SITE } from '../site'

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/footer-bg.png" alt="" className="footer__bg-img" />
      <div className="container footer__inner">
        <div className="footer__left">
          <p className="footer__tagline">Thanks for stopping by!</p>
          <p className="footer__copy">made with love © 2026 {SITE.name}</p>
        </div>
        <div className="footer__right">
          <div className="footer__col">
            <span className="footer__col-title">Connect</span>
            <a href={SITE.email} className="footer__col-link">
              Email <span className="link-arrow">↗</span>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="footer__col-link"
            >
              LinkedIn <span className="link-arrow">↗</span>
            </a>
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Navigation</span>
            <Link to={{ pathname: '/', hash: 'work' }} className="footer__col-link">Work</Link>
            <Link to={{ pathname: '/', hash: 'about' }} className="footer__col-link">About</Link>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              className="footer__col-link"
            >
              Resume <span className="link-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
