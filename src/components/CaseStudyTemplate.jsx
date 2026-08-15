import CaseStudyPage from './CaseStudyPage.jsx'
import CsFigure from './CsFigure.jsx'

function Placeholder({ label, aspect = '16/9' }) {
  return (
    <div className="cs-placeholder" style={{ '--ph-aspect': aspect }}>
      <span className="cs-placeholder__label">{label}</span>
    </div>
  )
}

export default function CaseStudyTemplate({
  title,
  tagline,
  meta,
  cover,
  coverAlt,
  website,
  websiteLabel = 'Live Website',
  impact,
  background,
  task,
}) {
  return (
    <CaseStudyPage title={title}>
      <header id="main" className="cs-hero">
        <div className="container">
          <p className="cs-hero__label">Case Study</p>
          <h1 className="cs-hero__title">{title}</h1>
          <p className="cs-hero__tagline">{tagline}</p>
          <div className="cs-meta">
            {meta.map(item => (
              <div className="cs-meta__item" key={item.key}>
                <span className="cs-meta__key">{item.key}</span>
                <span className="cs-meta__val">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {cover && (
        <div className="container">
          <CsFigure src={cover} alt={coverAlt || `${title} cover`} />
        </div>
      )}

      {impact?.length > 0 && (
        <section className="cs-section">
          <div className="container">
            <div className="cs-impact">
              {impact.map(stat => (
                <div className="cs-impact__stat" key={stat.desc}>
                  <span className="cs-impact__num">{stat.num}</span>
                  <span className="cs-impact__desc">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cs-section">
        <div className="container cs-two-col">
          <div className="cs-two-col__label">
            <span className="section-label">Background</span>
          </div>
          <div className="cs-two-col__body">{background}</div>
        </div>
      </section>

      <section className="cs-section cs-section--tinted">
        <div className="container cs-two-col">
          <div className="cs-two-col__label">
            <span className="section-label">Task</span>
          </div>
          <div className="cs-two-col__body">
            <p className="cs-pullquote">{task}</p>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="container">
          <h2 className="cs-section__heading">Research</h2>
          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Process</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                Research notes, interviews, and findings go here. Replace this copy and the placeholder
                visuals as the case study is filled in.
              </p>
            </div>
          </div>
          <Placeholder label="Research visual" />
        </div>
      </section>

      <section className="cs-section cs-section--tinted">
        <div className="container">
          <h2 className="cs-section__heading">Design</h2>
          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Solution</span>
            </div>
            <div className="cs-two-col__body">
              <p>
                Wireframes, key screens, and design decisions go here. Swap the placeholders for
                process work as it is ready.
              </p>
            </div>
          </div>
          <div className="cs-screens">
            <Placeholder label="Key screen 1" aspect="16/10" />
            <Placeholder label="Key screen 2" aspect="16/10" />
          </div>
        </div>
      </section>

      {website && (
        <section className="cs-section">
          <div className="container">
            <h2 className="cs-section__heading">Final Deliverables</h2>
            <div className="cs-deliverables">
              <a href={website} target="_blank" rel="noreferrer" className="cs-deliverable">
                <span className="cs-deliverable__title">{websiteLabel} ↗</span>
                <span className="cs-deliverable__sub">Open the live site</span>
              </a>
            </div>
          </div>
        </section>
      )}
    </CaseStudyPage>
  )
}
