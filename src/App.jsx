import { useState, useEffect, useRef } from 'react'
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
      if (dx * dx + dy * dy < 400) return
      lastX = e.clientX
      lastY = e.clientY

      const size = Math.random() * 7 + 5
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
      el.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 20 20"><path d="M10 0 L11.4 8.6 L20 10 L11.4 11.4 L10 20 L8.6 11.4 L0 10 L8.6 8.6 Z" fill="#9350b2"/></svg>`
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

function HeroStars() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const NUM_STARS = 24
    const ATTRACT_RADIUS = 160
    const ATTRACT_STRENGTH = 0.055
    const RETURN_STRENGTH = 0.035

    let W = 0, H = 0

    const makeStars = () =>
      Array.from({ length: NUM_STARS }, () => {
        const rx = Math.random() * W
        const ry = Math.random() * H
        return { rx, ry, cx: rx, cy: ry, size: Math.random() * 4 + 2, alpha: Math.random() * 0.45 + 0.35 }
      })

    let stars = []

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
      stars = makeStars()
    }
    resize()
    window.addEventListener('resize', resize)

    let mx = -9999, my = -9999

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mx = e.clientX - rect.left
      my = e.clientY - rect.top
    }
    const onMouseLeave = () => { mx = -9999; my = -9999 }

    window.addEventListener('mousemove', onMouseMove)
    const section = canvas.parentElement
    section?.addEventListener('mouseleave', onMouseLeave)

    const drawStar = (x, y, r) => {
      ctx.beginPath()
      ctx.moveTo(x, y - r)
      ctx.quadraticCurveTo(x + r * 0.22, y - r * 0.22, x + r, y)
      ctx.quadraticCurveTo(x + r * 0.22, y + r * 0.22, x, y + r)
      ctx.quadraticCurveTo(x - r * 0.22, y + r * 0.22, x - r, y)
      ctx.quadraticCurveTo(x - r * 0.22, y - r * 0.22, x, y - r)
      ctx.closePath()
      ctx.fill()
    }

    let animId
    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      for (const s of stars) {
        const dx = mx - s.cx
        const dy = my - s.cy
        const dist = Math.hypot(dx, dy)
        if (dist < ATTRACT_RADIUS) {
          s.cx += dx * ATTRACT_STRENGTH
          s.cy += dy * ATTRACT_STRENGTH
        } else {
          s.cx += (s.rx - s.cx) * RETURN_STRENGTH
          s.cy += (s.ry - s.cy) * RETURN_STRENGTH
        }
        ctx.globalAlpha = s.alpha
        ctx.fillStyle = '#ffffff'
        drawStar(s.cx, s.cy, s.size)
      }
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      section?.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__stars" />
}

const projects = [
  {
    id: 1,
    title: 'Plastic Beach',
    desc: 'Bringing clarity to soft plastic recycling through thoughtful signage and a redesigned web experience.',
    tags: ['Sustainability', 'Visual Design'],
    year: '2025',
    color: '#d6e8e0',
    slug: 'plastic-beach',
  },
  {
    id: 2,
    title: 'Falling Fruit',
    desc: 'Making urban foraging more accessible with a friendlier platform and stronger community features.',
    tags: ['User Research', 'Community Design'],
    year: '2025',
    color: '#f0f0f0',
    video: '/falling-fruit.mov',
    slug: 'falling-fruit',
  },
  {
    id: 3,
    title: 'WCASL',
    desc: "Designing WCASL's first-ever website to connect 800+ players with clarity, community, and competition.",
    tags: ['Web Design', 'Content Strategy'],
    year: '2025',
    color: '#d4e0f0',
  },
  {
    id: 4,
    title: 'Agent UX',
    desc: 'An AI-powered research tool that simulates user personas to complete usability tasks — cutting weeks of research to minutes.',
    tags: ['AI Tool', 'Figma Make'],
    year: '2026',
    color: '#c2d8f0',
    award: '1st Place · Wildcard Track · DiamondHacks 2026',
    href: 'https://www.agentux.dev/',
    image: '/agentux.png',
  },
]

function WorkCard({ project }) {
  const thumb = project.video ? (
    <div className="card__thumb" style={{ '--card-color': project.color }}>
      <video src={project.video} autoPlay muted loop playsInline className="card__media" />
    </div>
  ) : project.image ? (
    <div className="card__thumb" style={{ '--card-color': project.color }}>
      <img src={project.image} alt={project.title} className="card__media card__media--contain" />
    </div>
  ) : (
    <div className="card__thumb" style={{ '--card-color': project.color }} />
  )

  const inner = (
    <article className="card">
      {thumb}
      <div className="card__body">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__desc">{project.desc}</p>
        {project.award && (
          <div className="card__award">
            <span className="card__award-icon">★</span>
            {project.award}
          </div>
        )}
        <div className="card__tags">
          {project.tags.map(t => (
            <span key={t} className="card__tag-pill">{t}</span>
          ))}
        </div>
        <span className="card__cta">{project.href ? 'View website →' : 'View case study →'}</span>
      </div>
    </article>
  )

  if (project.slug) return <Link to={`/${project.slug}`} className="card-link">{inner}</Link>
  if (project.href) return <a href={project.href} target="_blank" rel="noreferrer" className="card-link">{inner}</a>
  return inner
}

function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">

      {/* ── Nav ── */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#" className="nav__name">Manjusri Gobiraj</a>
          <ul className="nav__links">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li>
              <a
                href="https://drive.google.com/file/d/1BTrrQapKdsm8nJaMuBZGNju-RYtL4irE/view?usp=sharing"
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

      {/* ── Hero ── */}
      <section className="hero">
        <img src="/hero-bg.png" alt="" className="hero__bg-img" />
        <div className="container hero__inner">
          <div className="hero__text">
            <h1 className="hero__title">Hello, I&apos;m Manjusri!</h1>
            <p className="hero__sub">
              A Product Designer <em>drawn</em> to whimsical skies, quiet cafes, and getting the details right.
            </p>
            <div className="hero__roles">
              <p>4th Year, Cognitive Science @ UC San Diego</p>
              <p>User Experience Intern @ The City of San Diego</p>
            </div>
          </div>
          <div className="hero__decoration">
            <img src="/hero-vector.svg" alt="" />
          </div>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="work">
        <div className="container">
          <h2 className="work__heading">Selected Projects</h2>
          <div className="work__list">
            {projects.map(p => <WorkCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <img src="/footer-bg.png" alt="" className="footer__bg-img" />
        <div className="container footer__inner">
          <div className="footer__left">
            <p className="footer__tagline">Thanks for stopping by!</p>
            <p className="footer__copy">made with love © 2026 Manjusri Gobiraj</p>
          </div>
          <div className="footer__right">
            <div className="footer__col">
              <span className="footer__col-title">Connect</span>
              <a
                href="mailto:manjusri.gobiraj@gmail.com"
                className="footer__col-link"
              >
                Email <span className="link-arrow">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/manjusri-gobiraj/"
                target="_blank"
                rel="noreferrer"
                className="footer__col-link"
              >
                LinkedIn <span className="link-arrow">↗</span>
              </a>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Navigation</span>
              <a href="#work" className="footer__col-link">Work</a>
              <a href="#about" className="footer__col-link">About</a>
              <a
                href="https://drive.google.com/file/d/1BTrrQapKdsm8nJaMuBZGNju-RYtL4irE/view?usp=sharing"
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
