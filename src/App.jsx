import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import FallingFruit from './pages/FallingFruit.jsx'
import PlasticBeach from './pages/PlasticBeach.jsx'

function useStarTrail() {
  useEffect(() => {
    let lastX = 0
    let lastY = 0

    const onMove = (e) => {
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      if (dx * dx + dy * dy < 400) return  // only spawn after moving ~20px
      lastX = e.clientX
      lastY = e.clientY

      const size = Math.random() * 7 + 5  // 5–12 px
      const el = document.createElement('div')
      el.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: ${size}px;
        height: ${size}px;
        pointer-events: none;
        z-index: 9999;
        animation: cursorStarFade ${0.4 + Math.random() * 0.3}s ease-out forwards;
      `
      el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 20 20"><path d="M10 0 L11.4 8.6 L20 10 L11.4 11.4 L10 20 L8.6 11.4 L0 10 L8.6 8.6 Z" fill="#3d1a78"/></svg>`
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 700)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
}

function StarCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onMove = e => setPos({ x: e.clientX, y: e.clientY })
    const onDown = () => setActive(true)
    const onUp   = () => setActive(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
    }
  }, [])

  return (
    <div
      className={`star-cursor${active ? ' star-cursor--active' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 0 C9 0 9.8 6.5 11 8 C12.2 9.5 18 9 18 9 C18 9 12.2 9.5 11 11 C9.8 12.5 9 18 9 18 C9 18 8.2 12.5 7 11 C5.8 9.5 0 9 0 9 C0 9 5.8 8.5 7 8 C8.2 7.5 9 0 9 0 Z"
          fill="black"
        />
      </svg>
    </div>
  )
}

const imgIcon    = 'https://www.figma.com/api/mcp/asset/289d5f39-1137-4b17-881e-5fc6aa4ccfb2'
const imgCatArt  = 'https://www.figma.com/api/mcp/asset/47da6da3-db0e-436a-a1f3-7442f6eddc72'

const projects = [
  {
    id: 1,
    tag: 'Sustainability · Visual Design',
    year: '2025',
    title: 'Plastic Beach',
    desc: 'Bringing clarity to soft plastic recycling through thoughtful signage and a redesigned web experience.',
    color: '#d6e8e0',
    slug: 'plastic-beach',
  },
  {
    id: 2,
    tag: 'User Research · Community Design',
    year: '2025',
    title: 'Falling Fruit',
    desc: 'Making urban foraging more accessible with a friendlier platform and stronger community features.',
    color: '#f0f0f0',
    video: '/falling-fruit.mov',
    slug: 'falling-fruit',
  },
  {
    id: 3,
    tag: 'Web Design · Content Strategy',
    year: '2025',
    title: 'WCASL',
    desc: 'Designing WCASL\'s first-ever website to connect 800+ players with clarity, community, and competition.',
    color: '#d4e0f0',
  },
  {
    id: 4,
    tag: 'AI Tool · Figma Make',
    year: '2026',
    title: 'Agent UX',
    desc: 'An AI-powered research tool that simulates user personas to complete usability tasks — cutting weeks of research to minutes.',
    color: '#c2d8f0',
    award: '1st Place · Wildcard Track · DiamondHacks 2026',
    href: 'https://www.agentux.dev/',
    image: '/agentux.png',
  },
]

function WorkCard({ project }) {
  const inner = (
    <article className={`card${project.featured ? ' card--featured' : ''}`}>
      {project.video ? (
        <div className="card__thumb card__thumb--video" style={{ '--card-color': project.color }}>
          <video src={project.video} autoPlay muted loop playsInline className="card__video" />
        </div>
      ) : project.image ? (
        <div className="card__thumb card__thumb--image" style={{ '--card-color': project.color }}>
          <img src={project.image} alt={project.title} className="card__image" />
        </div>
      ) : (
        <div className="card__thumb" style={{ '--card-color': project.color }} />
      )}
      <div className="card__body">
        <div className="card__meta">
          <span className="card__tag">{project.tag}</span>
          <span className="card__year">{project.year}</span>
        </div>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__desc">{project.desc}</p>
        {project.award && (
          <div className="card__award">
            <span className="card__award-icon">★</span>
            {project.award}
          </div>
        )}
        <span className="card__cta">{project.href ? 'View website →' : 'View case study →'}</span>
      </div>
    </article>
  )

  if (project.slug) return <Link to={`/${project.slug}`} className="card-link">{inner}</Link>
  if (project.href) return <a href={project.href} target="_blank" rel="noreferrer" className="card-link">{inner}</a>
  return inner
}

function Home() {
  return (
    <div className="page">

      {/* ── Nav ── */}
      <nav className="nav">
        <div className="container nav__inner">
          <a href="#" className="nav__name">Manjusri Gobiraj</a>
          <ul className="nav__links">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="https://drive.google.com/file/d/1BTrrQapKdsm8nJaMuBZGNju-RYtL4irE/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
          </ul>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Looking for Product Design internships!
            </div>
            <h1 className="hero__title">
              <span className="hero__title-line">Hi, I&apos;m Manjusri!</span>
              <br />
              <span className="hero__title-line">A Product Designer fueled by</span>
              <br />
              <span className="hero__title-line">curiosity, <em>creativity</em>, and cats.</span>
            </h1>
            <p className="hero__sub">
              3rd year student at UCSD &mdash; B.S. Cognitive Science: Design &amp; Interaction
            </p>
          </div>
          <div className="hero__illustration">
            <img src={imgIcon} alt="Illustrated portrait of Manjusri" />
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="work">
        <div className="container">
          <div className="work__header">
            <span className="section-label">Selected Work</span>
            <h2 className="section-heading">Projects I&apos;m proud of</h2>
          </div>
          <div className="work__grid">
            {projects.map(p => <WorkCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <p className="footer__tagline">Thank you for stopping by <em>~</em></p>
            <div className="footer__links">
              <div className="footer__col">
                <span className="footer__col-title">Navigation</span>
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="https://drive.google.com/file/d/1BTrrQapKdsm8nJaMuBZGNju-RYtL4irE/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
              </div>
              <div className="footer__col">
                <span className="footer__col-title">Contact</span>
                <a href="https://www.linkedin.com/in/manjusri-gobiraj/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:manjusri.gobiraj@gmail.com">Email</a>
              </div>
            </div>
            <p className="footer__copy">© 2026 Manjusri Gobiraj</p>
          </div>
          <div className="footer__illustration">
            <img src={imgCatArt} alt="Cat art illustration" />
          </div>
        </div>
      </footer>

    </div>
  )
}

export default function App() {
  useStarTrail()

  return (
    <>
      <StarCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/falling-fruit" element={<FallingFruit />} />
        <Route path="/plastic-beach" element={<PlasticBeach />} />
      </Routes>
    </>
  )
}
