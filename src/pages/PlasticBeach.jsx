import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../cs.css'

function useScrollTop() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
}

function Placeholder({ label, aspect = '16/9', color = '#d0e8e0' }) {
  return (
    <div className="cs-placeholder" style={{ '--ph-color': color, '--ph-aspect': aspect }}>
      <span className="cs-placeholder__label">{label}</span>
    </div>
  )
}

export default function PlasticBeach() {
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
          <h1 className="cs-hero__title">Plastic Beach</h1>
          <p className="cs-hero__tagline">
            Quick and accurate sorting for soft plastic recycling — redesigning signage and a website that actually works.
          </p>
          <div className="cs-meta">
            <div className="cs-meta__item">
              <span className="cs-meta__key">Timeline</span>
              <span className="cs-meta__val">April – July 2025</span>
            </div>
            <div className="cs-meta__item">
              <span className="cs-meta__key">Role</span>
              <span className="cs-meta__val">Team Lead · UX/Product Designer</span>
            </div>
            <div className="cs-meta__item">
              <span className="cs-meta__key">Team</span>
              <span className="cs-meta__val">5 Designers</span>
            </div>
            <div className="cs-meta__item">
              <span className="cs-meta__key">Tools</span>
              <span className="cs-meta__val">Figma · Procreate</span>
            </div>
            <div className="cs-meta__item">
              <span className="cs-meta__key">Disciplines</span>
              <span className="cs-meta__val">Product Design · UX Design · Graphic Design · User Research</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero visual ── */}
      <div className="container">
        <Placeholder label="Hero / Cover Visual" aspect="21/9" color="#c8e0d4" />
      </div>

      {/* ── Impact ── */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-impact">
            <div className="cs-impact__stat">
              <span className="cs-impact__num">80%</span>
              <span className="cs-impact__desc">Sorting accuracy in usability testing</span>
            </div>
            <div className="cs-impact__stat">
              <span className="cs-impact__num">30+</span>
              <span className="cs-impact__desc">Retail and distribution partners</span>
            </div>
            <div className="cs-impact__stat">
              <span className="cs-impact__num">120k lbs</span>
              <span className="cs-impact__desc">Of plastic diverted from landfills</span>
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
              <strong>Plastic Beach</strong> is a nonprofit focused on advancing soft plastic recycling across commercial,
              retail, and community environments. Soft plastics — like bubble wrap and plastic film — are recyclable
              through specialized programs, but are often mistakenly discarded due to a lack of awareness.
            </p>
            <p>
              Plastic Beach partnered with <strong>Design for America at UC San Diego</strong>, engaging our design team
              to enhance the clarity and effectiveness of their website and educational materials.
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
              Redesign the Plastic Beach website and informational placard to improve clarity around soft plastic
              recycling, streamline user flow, and add dedicated Recycling Guidelines and Advocacy pages.
            </p>
            <p>Key constraints: an <strong>8×8" placard</strong> format and a <strong>wide range of customers and contexts</strong> — from busy back-of-house staff to residential families.</p>
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
                We conducted a competitive analysis of plastic recycling placards. While existing designs featured
                clear calls to action and strong color schemes, <strong>excessive text and poor legibility</strong> reduced
                their effectiveness — especially in low-light environments and for less knowledgeable audiences.
                This surfaced a clear opportunity: design for varied contexts without oversimplifying to the point of
                incorrect sorting.
              </p>
            </div>
          </div>

          <Placeholder label="Competitive Analysis" color="#c8e0d4" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">User Surveys</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                We ran two surveys to understand how people perceived the existing placard and navigated the current
                website — where they hesitated, what confused them, and what they expected next.
              </p>
              <ul className="cs-list">
                <li>Old Placard average design rating: <strong>6.36/10</strong></li>
                <li><strong>78.6%</strong> of respondents wanted more visuals and icons</li>
                <li><strong>42.9%</strong> felt there was too much text and needed simplification</li>
                <li><strong>73%</strong> of website users wanted a smoother, clearer navigation flow</li>
                <li><strong>37%</strong> suggested updating the look with softer elements and modern UI patterns</li>
              </ul>
            </div>
          </div>

          <Placeholder label="Survey Data Visualization" color="#c8e0d4" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">User Interviews</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                I conducted <strong>4 business client interviews</strong> to understand the workflow between businesses
                and Plastic Beach, focusing on efficiency and clarity.
              </p>
              <ul className="cs-list">
                <li><strong>75%</strong> requested clearer, more accessible information on accepted plastics — especially tricky materials like multi-layer bags</li>
                <li><strong>50%</strong> wanted bright colors, simple slogans, visuals for yes/no plastics, and the "thumb test"</li>
              </ul>
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
              <p>Two personas — a small business owner and a residential parent — helped guide the redesign by surfacing the distinct needs and challenges of each audience.</p>
            </div>
          </div>
          <div className="cs-personas">
            <div className="cs-persona">
              <Placeholder label="John Martinez — Persona" aspect="4/3" color="#b8d8cc" />
              <div className="cs-persona__body">
                <h3 className="cs-persona__name">John Martinez</h3>
                <p className="cs-persona__role">Small Business Owner</p>
                <p><strong>Goal:</strong> Avoid contamination fees and train new staff quickly on soft plastic sorting.</p>
                <p><strong>Frustration:</strong> Employees have 3 seconds to make waste decisions — needs a Yes/No rule and clear examples at bin distance.</p>
                <blockquote className="cs-quote">"My employees have 3 seconds to make waste decisions."</blockquote>
              </div>
            </div>
            <div className="cs-persona">
              <Placeholder label="Taylor Jones — Persona" aspect="4/3" color="#b8d8cc" />
              <div className="cs-persona__body">
                <h3 className="cs-persona__name">Taylor Jones</h3>
                <p className="cs-persona__role">Parent</p>
                <p><strong>Goal:</strong> Recycle correctly and reduce household waste with a system kids can follow.</p>
                <p><strong>Frustration:</strong> No simple icons or short labels — wants kid-friendly examples and a QR code for more info.</p>
                <blockquote className="cs-quote">"I want my kids to learn the rule and use it without asking."</blockquote>
              </div>
            </div>
          </div>

          <div className="cs-hmw">
            <p className="cs-hmw__text">
              How might we implement a simple and clean design system to create a placard and update the website that <em>builds knowledge about soft plastics and improves sorting efficiency</em> for clients?
            </p>
          </div>
        </div>
      </section>

      {/* ── Design: Placard ── */}
      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__heading">Design — Placard</h2>

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Wireframes</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                I translated early wireframes into a mid-fidelity design by prioritizing clear visual hierarchy, adding
                recognizable icons for each plastic type, and incorporating concise rules and contact information to
                make the placard both informative and easy to scan.
              </p>
            </div>
          </div>
          <Placeholder label="Wireframes → Mid-Fidelity" aspect="4/3" color="#c8e0d4" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Placard Graphics</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                I personally illustrated <strong>13 graphics</strong> on the placard in <strong>Procreate</strong> to
                ensure cohesive visuals that matched the desired style — resulting in a clear and visually consistent design.
              </p>
            </div>
          </div>
          <Placeholder label="Custom Procreate Illustrations" aspect="16/9" color="#c8e0d4" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">High-Fidelity</span>
            </div>
            <div className="cs-two-col__body">
              <p>Key design decisions that drove the final placard:</p>
              <ul className="cs-list">
                <li><strong>Icon-led hierarchy</strong> over paragraphs — reduces cognitive load and speeds recognition</li>
                <li><strong>Thumb test + Clean/Dry statement</strong> — binary decisions beat long lists</li>
                <li><strong>Custom illustrations</strong> — consistent style improves legibility and trust</li>
                <li><strong>3–5 word rules</strong> — fits real-world glanceability at bin distance</li>
                <li><strong>Contrast-first color</strong> — readable in dim back-of-house lighting</li>
              </ul>
            </div>
          </div>
          <Placeholder label="High-Fidelity Placard" aspect="1/1" color="#c8e0d4" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Usability Testing</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                I conducted <strong>task observation</strong> with 10 participants who sorted a grocery bag (soft plastic)
                and two non-recyclable plastics (a chip bag and a dirty Ziploc).
              </p>
              <div className="cs-result">
                <span className="cs-result__num">80%</span>
                <span className="cs-result__label">Sorted items correctly · Average visual appeal rating of <strong>4.5 / 5</strong> from business clients</span>
              </div>
              <blockquote className="cs-quote cs-quote--highlight">
                "100% of business client respondents reported the placard was clear and helpful for sorting soft plastics."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design: Website ── */}
      <section className="cs-section cs-section--tinted">
        <div className="container">
          <h2 className="cs-section__heading">Design — Website</h2>

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Design Audit</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                We began with a comprehensive audit of the existing site, identifying <strong>inconsistent styling and
                navigation challenges</strong> that made it difficult for users to find information efficiently.
              </p>
            </div>
          </div>

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Wireframes</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                We wireframed three new pages — an <strong>FAQ page</strong>, an <strong>Advocacy page</strong>, and a
                <strong> Recycling Guidelines page</strong> — designed to improve user flow and complement the placard
                with richer information.
              </p>
            </div>
          </div>
          <Placeholder label="Website Wireframes" color="#c8e0d4" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">High-Fidelity</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                During the high-fidelity stage, redesigned layouts were implemented directly onto <strong>Wix</strong>,
                incorporating a revamped header and footer. I mainly designed the <strong>Advocacy</strong> and
                <strong> Recycling Guidelines</strong> pages, applying the updated style guide across all pages with a
                focus on clarity and finding information quickly.
              </p>
              <p>
                When transferring the design onto Wix, I encountered visual opportunities with the rest of the website
                that led to reformatting the colors — mainly a focus on the primary dark blue.
              </p>
            </div>
          </div>
          <div className="cs-screens">
            <Placeholder label="Recycling Guidelines Page" aspect="16/10" color="#c8e0d4" />
            <Placeholder label="Advocacy Page" aspect="16/10" color="#c8e0d4" />
            <Placeholder label="Homepage Redesign" aspect="16/10" color="#c8e0d4" />
            <Placeholder label="FAQ Page" aspect="16/10" color="#c8e0d4" />
          </div>
        </div>
      </section>

      {/* ── Final Deliverables ── */}
      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__heading">Final Deliverables</h2>
          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Placard</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                The final placard will be used by <strong>over 30 clients</strong> including large-scale partners like
                UCSD, CSU San Marcos, and Disney — enabling staff to properly sort soft plastics in their back-end
                workflow.
              </p>
            </div>
          </div>
          <Placeholder label="Final Placard" aspect="1/1" color="#c8e0d4" />

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Website</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                The redesigned website is live and serves as a central hub for forming new business partnerships and
                educating residential users about soft plastic recycling — expanding Plastic Beach's reach beyond its
                existing client network.
              </p>
            </div>
          </div>
          <Placeholder label="Final Website" color="#c8e0d4" />

          <div className="cs-deliverables">
            <a
              href="https://www.plastic-beach.com/"
              target="_blank"
              rel="noreferrer"
              className="cs-deliverable"
            >
              <span className="cs-deliverable__title">Live Website ↗</span>
              <span className="cs-deliverable__sub">View the redesigned Plastic Beach website</span>
            </a>
            <a
              href="https://manjusri.framer.website/plastic-beach"
              target="_blank"
              rel="noreferrer"
              className="cs-deliverable"
            >
              <span className="cs-deliverable__title">Full Case Study ↗</span>
              <span className="cs-deliverable__sub">Read the complete process on Framer</span>
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
              This project grew me as both a designer and a leader. I learned to run clear, consistent stakeholder
              communication so feedback loops stayed productive and aligned, and I got to merge my sustainability
              passion with my craft — even using my own illustrations.
            </p>
            <p>
              Shipped a streamlined, visually consistent website that supports <strong>residential education</strong> and
              <strong> business partnerships</strong>. Delivered a final placard adopted by <strong>30+ clients</strong> with
              <strong> 100% positive stakeholder feedback</strong>. Solutions enhance user clarity while advancing the
              <em> environmental mission</em> I care about.
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
