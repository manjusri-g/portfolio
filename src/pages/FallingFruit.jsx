import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../cs.css'

function useScrollTop() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
}

function Placeholder({ label, aspect = '16/9', color = '#e8f0e8' }) {
  return (
    <div className="cs-placeholder" style={{ '--ph-color': color, '--ph-aspect': aspect }}>
      <span className="cs-placeholder__label">{label}</span>
    </div>
  )
}

export default function FallingFruit() {
  useScrollTop()

  return (
    <div className="cs-page">

      {/* ── Nav ── */}
      <nav className="nav">
        <div className="container nav__inner">
          <Link to="/" className="nav__name">Manjusri Gobiraj</Link>
          <ul className="nav__links">
            <li><Link to="/#work">Work</Link></li>
            <li><Link to="/#about">About</Link></li>
            <li><a href="https://drive.google.com/file/d/1BTrrQapKdsm8nJaMuBZGNju-RYtL4irE/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
          </ul>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="cs-hero">
        <div className="container">
          <p className="cs-hero__label">Case Study</p>
          <h1 className="cs-hero__title">Falling Fruit</h1>
          <p className="cs-hero__tagline">
            Making urban foraging more accessible through a community-driven platform redesign.
          </p>
          <div className="cs-meta">
            <div className="cs-meta__item">
              <span className="cs-meta__key">Timeline</span>
              <span className="cs-meta__val">6 weeks · June – July 2025</span>
            </div>
            <div className="cs-meta__item">
              <span className="cs-meta__key">Role</span>
              <span className="cs-meta__val">Product Designer</span>
            </div>
            <div className="cs-meta__item">
              <span className="cs-meta__key">Team</span>
              <span className="cs-meta__val">4 Designers</span>
            </div>
            <div className="cs-meta__item">
              <span className="cs-meta__key">Tools</span>
              <span className="cs-meta__val">Figma · Python</span>
            </div>
            <div className="cs-meta__item">
              <span className="cs-meta__key">Disciplines</span>
              <span className="cs-meta__val">Product Design · UX Research · UX/UI Design</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero visual ── */}
      <div className="container">
        <Placeholder label="Hero / Cover Visual" aspect="21/9" color="#d6e8d6" />
      </div>

      {/* ── Impact ── */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-impact">
            <div className="cs-impact__stat">
              <span className="cs-impact__num">250+</span>
              <span className="cs-impact__desc">Users reached via survey</span>
            </div>
            <div className="cs-impact__stat">
              <span className="cs-impact__num">10</span>
              <span className="cs-impact__desc">Countries reached</span>
            </div>
            <div className="cs-impact__stat">
              <span className="cs-impact__num">100%</span>
              <span className="cs-impact__desc">Positive stakeholder feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Background ── */}
      <section className="cs-section">
        <div className="container cs-two-col">
          <div className="cs-two-col__label">
            <span className="section-label">Background</span>
          </div>
          <div className="cs-two-col__body">
            <p>
              The Falling Fruit project was part of a national initiative by <strong>Design for America (DFA)</strong> in
              partnership with <strong>Falling Fruit</strong>, a nonprofit dedicated to mapping edible plants worldwide.
              While Falling Fruit had built an open-source platform, they wanted to better understand user needs and
              create a more accessible, engaging experience for urban foragers.
            </p>
            <p>
              Our team participated in this challenge to explore how human-centered design could reduce barriers to
              foraging, promote sustainability, and strengthen community connections through technology.
            </p>
          </div>
        </div>
      </section>

      {/* ── Task ── */}
      <section className="cs-section cs-section--tinted">
        <div className="container cs-two-col">
          <div className="cs-two-col__label">
            <span className="section-label">Task</span>
          </div>
          <div className="cs-two-col__body">
            <p className="cs-pullquote">
              Identify user pain points within the existing Falling Fruit platform and design a solution that makes
              urban foraging more accessible and community-driven.
            </p>
          </div>
        </div>
      </section>

      {/* ── Research ── */}
      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__heading">Research</h2>

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Competitive Analysis</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                We looked at <strong>iNaturalist</strong>, which has a large community but is broad beyond foraging,
                and <strong>Robin Greenfield</strong>, directed at foragers, which offers rich content but feels
                overwhelming with low engagement. We also observed an active <strong>urban foraging Reddit
                community</strong>, where users shared resources and highlighted concerns around trespassing,
                legality, and safety.
              </p>
              <p>
                Our competitive analysis revealed gaps in <strong>accessibility, community, and trust.</strong> Existing
                platforms made it hard to engage socially — a clear opportunity to design features for group
                connections and experience sharing.
              </p>
            </div>
          </div>

          <Placeholder label="Competitive Analysis" color="#e0ead8" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">User Surveys</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                Out of 13 national teams, our group initiated the survey design and collaborated with two other teams
                to refine and distribute it. Together, we collected <strong>243 responses</strong>. I then cleaned and
                coded the data using <strong>Python</strong> libraries to uncover clearer themes in user needs.
              </p>
              <ul className="cs-list">
                <li><strong>52%</strong> of respondents have been foraging for 5+ years — most users are experienced before finding Falling Fruit.</li>
                <li><strong>~28%</strong> said they were in a Falling Fruit community, revealing interest is higher than actual participation.</li>
              </ul>
              <blockquote className="cs-quote">
                "Creating a platform where foragers could interact more could be a potentially beneficial addition."
              </blockquote>
              <blockquote className="cs-quote">
                "If Falling Fruit ever incorporated a social aspect, I would be interested in joining other local groups."
              </blockquote>
            </div>
          </div>

          <Placeholder label="Survey Data Visualization" color="#e0ead8" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">User Interviews</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                We connected with both the Falling Fruit <strong>founder</strong> and a <strong>frequent user</strong>.
                We found that Falling Fruit is valued as a database, but community members want lightweight,
                humanizing features — notes, feeds, seasonal prompts, event boards — to foster connection without
                overwhelming the small volunteer team.
              </p>
              <blockquote className="cs-quote cs-quote--highlight">
                "Fruit is designed to be beautiful and call your attention so you can eat it and spread its life."
                <cite>— Falling Fruit Interviewee</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Defining the Problem ── */}
      <section className="cs-section cs-section--tinted">
        <div className="container">
          <h2 className="cs-section__heading">Defining the Problem</h2>
          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">User Personas</span>
            </div>
            <div className="cs-two-col__body">
              <p>I created two personas to understand Falling Fruit users from two perspectives — both revealing community as a pressing need.</p>
            </div>
          </div>
          <div className="cs-personas">
            <div className="cs-persona">
              <Placeholder label="Nick Smith — Persona" aspect="4/3" color="#dde8f0" />
              <div className="cs-persona__body">
                <h3 className="cs-persona__name">Nick Smith, 30</h3>
                <p className="cs-persona__role">Businessman · New York City</p>
                <p><strong>Goal:</strong> Find a calming, sustainable hobby outside of work — discover edible plants near his Manhattan apartment.</p>
                <p><strong>Frustration:</strong> No community aspect; unsure where to start; worried about legality and safety.</p>
                <blockquote className="cs-quote">"No community aspect, I'd love to see an ability to communicate or ask for help IDing."</blockquote>
              </div>
            </div>
            <div className="cs-persona">
              <Placeholder label="Jessica Nguyen — Persona" aspect="4/3" color="#dde8f0" />
              <div className="cs-persona__body">
                <h3 className="cs-persona__name">Jessica Nguyen, 30</h3>
                <p className="cs-persona__role">Middle School Teacher · Plano, TX</p>
                <p><strong>Goal:</strong> Reconnect with a local foraging community after moving from San Diego.</p>
                <p><strong>Frustration:</strong> No groups, events, or messaging in Falling Fruit; social presence feels incomplete.</p>
                <blockquote className="cs-quote">"Being able to organize foraging outages/events could be huge for the platform."</blockquote>
              </div>
            </div>
          </div>

          <div className="cs-hmw">
            <p className="cs-hmw__text">
              How might we provide the existing foraging community with the tools they need to <em>engage with, educate, and support each other</em> in their foraging journeys?
            </p>
          </div>
        </div>
      </section>

      {/* ── Design ── */}
      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__heading">Design</h2>

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Wireframes</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                Given a <strong>one-week time constraint</strong> for prototyping, I prioritized rough layouts of the
                community landing page and a localized activity feed — the two features most directly tied to pain
                points around isolation and lack of reliable information.
              </p>
            </div>
          </div>
          <Placeholder label="Wireframes" color="#e0ead8" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Solution</span>
            </div>
            <div className="cs-two-col__body">
              <p>A <strong>Community Page</strong> on the Falling Fruit website — the hub connecting all engagement features.</p>
              <ul className="cs-list">
                <li><strong>Community Page Landing</strong> — entry point to forums, events, updates, and educational resources.</li>
                <li><strong>Localized Activity Feed</strong> — tailored to the user's area, highlighting nearby plant activity and posts from local foragers. <em>(Feature I led design for)</em></li>
                <li><strong>User Story Highlights</strong> — a showcase of community-led experiences to celebrate contributions. <em>(Feature I led design for)</em></li>
                <li><strong>Ask Your Community (Forum)</strong> — a space to ask questions, share knowledge, and crowdsource plant identification.</li>
                <li><strong>Group Outing Organization</strong> — plan, join, or discover local foraging outings directly in the platform.</li>
              </ul>
            </div>
          </div>

          <div className="cs-screens">
            <Placeholder label="Community Page Landing" aspect="16/10" color="#d6e8d6" />
            <Placeholder label="Localized Activity Feed" aspect="16/10" color="#d6e8d6" />
            <Placeholder label="Ask Your Community Forum" aspect="16/10" color="#d6e8d6" />
            <Placeholder label="Group Outing Organization" aspect="16/10" color="#d6e8d6" />
          </div>
        </div>
      </section>

      {/* ── Usability Testing ── */}
      <section className="cs-section cs-section--tinted">
        <div className="container cs-two-col">
          <div className="cs-two-col__label">
            <span className="section-label">Usability Testing</span>
          </div>
          <div className="cs-two-col__body">
            <p>
              We conducted usability testing with <strong>4 participants</strong>, guiding them through 6 core scenarios
              on the new Community Page (forum posts, event creation, local events, tips, activity feed, and user highlights).
            </p>
            <div className="cs-result">
              <span className="cs-result__num">100%</span>
              <span className="cs-result__label">Task completion rate · Average ease rating of <strong>4.3 / 5</strong></span>
            </div>
            <p>
              Testing confirmed the structure and flow worked well, while surfacing improvements in interaction states,
              labeling clarity (e.g., replacing "I'm going!" with "Join"), and navigation patterns.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final Deliverables ── */}
      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__heading">Final Deliverables</h2>
          <div className="cs-deliverables">
            <a
              href="https://www.figma.com/proto/V1v4QFbYDLo5pBK5sq5zZk/Week-5-Falling-Fruit--Prototype?page-id=0%3A1&node-id=194-5816&viewport=1871%2C218%2C0.36&t=PrCXWUR0x1Of6eAv-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=194%3A5816&show-proto-sidebar=1"
              target="_blank"
              rel="noreferrer"
              className="cs-deliverable"
            >
              <span className="cs-deliverable__title">Figma Prototype ↗</span>
              <span className="cs-deliverable__sub">View the Community Page prototype</span>
            </a>
            <a
              href="https://docs.google.com/presentation/d/1XhYqDDmJMcjyDlTpV_uuiFt5Fxv6NulcUN-k-Do53iE/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="cs-deliverable"
            >
              <span className="cs-deliverable__title">Final Slides ↗</span>
              <span className="cs-deliverable__sub">Research process, design decisions & solution</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Reflection ── */}
      <section className="cs-section cs-section--tinted">
        <div className="container cs-two-col">
          <div className="cs-two-col__label">
            <span className="section-label">Reflection</span>
          </div>
          <div className="cs-two-col__body">
            <p>
              This project was both fast-paced and deeply rewarding. One of our biggest successes was conducting and
              sharing a survey that gathered <strong>243 responses</strong> — feedback that the Falling Fruit founder
              was excited to receive and use to guide future improvements. We were honored to receive
              <strong> 100% positive feedback</strong> from both the DFA organizers and the Falling Fruit team.
            </p>
            <p>
              Beyond outcomes, this was a personal highlight. I enjoyed collaborating with 13 other DFA teams across
              the U.S. and contributing at every stage — from research and data cleaning to design and usability
              testing. A project that embodied <em>teamwork, creativity, and learning.</em>
            </p>
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
                <Link to="/#work">Work</Link>
                <Link to="/#about">About</Link>
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
        </div>
      </footer>

    </div>
  )
}
