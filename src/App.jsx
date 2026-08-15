import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './cs.css'
import { useHashScroll, useHomeTitle, usePrefersReducedMotion } from './hooks.js'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import FallingFruit from './pages/FallingFruit.jsx'
import PlasticBeach from './pages/PlasticBeach.jsx'
import Wcasl from './pages/Wcasl.jsx'
import AgentUx from './pages/AgentUx.jsx'
import Tesla from './pages/Tesla.jsx'
import CityOfSanDiego from './pages/CityOfSanDiego.jsx'
import NotFound from './pages/NotFound.jsx'

function useStarTrail(enabled) {
  useEffect(() => {
    if (!enabled) return
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
  }, [enabled])
}

function StarCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onMove = e => setPos({ x: e.clientX, y: e.clientY })
    const onDown = () => setActive(true)
    const onUp = () => setActive(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
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

const nonprofits = [
  {
    id: 1,
    title: 'Plastic Beach',
    desc: 'Bringing clarity to soft plastic recycling through thoughtful signage and a redesigned web experience.',
    tags: ['Sustainability', 'Visual Design'],
    year: '2025',
    color: '#d6e8e0',
    slug: 'plastic-beach',
    image: '/plastic-beach-cover.png',
    website: 'https://www.plastic-beach.com/',
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
    slug: 'wcasl',
    image: '/wacsl-cover.png',
    website: 'https://www.wcasl.org/',
  },
  {
    id: 4,
    title: 'Agent UX',
    desc: 'An AI-powered research tool that simulates user personas to complete usability tasks — cutting weeks of research to minutes.',
    tags: ['AI Tool', 'Figma Make'],
    year: '2026',
    color: '#c2d8f0',
    award: '1st Place · Wildcard Track · DiamondHacks 2026',
    slug: 'agent-ux',
    image: '/agentux.png',
    website: 'https://www.agentux.dev/',
  },
]

const industry = [
  {
    id: 5,
    title: 'Tesla',
    desc: 'Industry case study — replace this description with the project outcome.',
    tags: ['Program Design', 'UX'],
    year: '2026',
    color: '#e8e4dc',
    slug: 'tesla',
    image: '/tesla-cover.png',
  },
  {
    id: 6,
    title: 'The City of San Diego',
    desc: 'User experience work for civic services in San Diego — replace this description with the project outcome.',
    tags: ['UX Design', 'Civic Tech'],
    year: '2026',
    color: '#d6e0f0',
    slug: 'city-of-san-diego',
    image: '/city-cover.png',
  },
]

function WorkCard({ project }) {
  const to = `/${project.slug}`

  const media = project.video ? (
    <video src={project.video} autoPlay muted loop playsInline className="card__media" />
  ) : project.image ? (
    <img
      src={project.image}
      alt=""
      className="card__media"
    />
  ) : null

  return (
    <article className="card">
      <Link to={to} className="card__thumb-link" aria-hidden="true" tabIndex={-1}>
        <div className="card__thumb" style={{ '--card-color': project.color }}>
          {media}
        </div>
      </Link>
      <div className="card__body">
        <h3 className="card__title">
          <Link to={to}>{project.title}</Link>
        </h3>
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
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="card__website"
          >
            View website <span className="card__website-arrow">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

function Home() {
  useHomeTitle()
  useHashScroll()
  const [overPhoto, setOverPhoto] = useState(() => {
    if (typeof window === 'undefined') return true
    const hash = window.location.hash
    if (hash && hash !== '#about') return false
    return window.scrollY < 48
  })

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onScroll = () => setOverPhoto(window.scrollY < 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
      <Nav tone={overPhoto ? 'photo' : 'light'} />

      <section className="hero" id="about">
        <img src="/hero-bg.png" alt="" className="hero__bg-img" />
        <div className="container hero__inner">
          <div className="hero__text">
            <h1 className="hero__title">Hello, I&apos;m Manjusri!</h1>
            <p className="hero__sub">
              A Product Designer <em className="hero__drawn">drawn</em> to whimsical skies, quiet cafes, and getting the details right.
            </p>
            <div className="hero__roles">
              <p>4th Year, Cognitive Science @ UC San Diego</p>
              <p>User Experience Intern @ The City of San Diego</p>
            </div>
          </div>
          <div className="hero__photo">
            <img src="/manu-portfolio-pic.png" alt="Manjusri Gobiraj" />
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="container">
          <h2 className="work__heading">Industry</h2>
          <div className="work__list">
            {industry.map(p => <WorkCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <section id="nonprofits" className="work work--follow">
        <div className="container">
          <h2 className="work__heading">Non Profit Organizations</h2>
          <div className="work__list">
            {nonprofits.map(p => <WorkCard key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function App() {
  const reducedMotion = usePrefersReducedMotion()
  useStarTrail(!reducedMotion)

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.remove('has-star-cursor')
      return
    }
    document.documentElement.classList.add('has-star-cursor')
    return () => document.documentElement.classList.remove('has-star-cursor')
  }, [reducedMotion])

  return (
    <>
      {!reducedMotion && <StarCursor />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/falling-fruit" element={<FallingFruit />} />
        <Route path="/plastic-beach" element={<PlasticBeach />} />
        <Route path="/wcasl" element={<Wcasl />} />
        <Route path="/agent-ux" element={<AgentUx />} />
        <Route path="/tesla" element={<Tesla />} />
        <Route path="/city-of-san-diego" element={<CityOfSanDiego />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
