import { useState } from 'react'
import CaseStudyPage from '../components/CaseStudyPage.jsx'
import CaseStudyTemplate from '../components/CaseStudyTemplate.jsx'

const PASSWORD = 'DESIGN!'
const STORAGE_KEY = 'portfolio:tesla-unlocked'

function TeslaGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (value.toUpperCase() === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, '1')
      onUnlock()
      return
    }
    setError(true)
  }

  return (
    <CaseStudyPage title="Tesla">
      <section id="main" className="gate">
        <div className="container">
          <p className="cs-hero__label">Protected work</p>
          <h1 className="cs-hero__title">Tesla</h1>
          <p className="gate__lede">
            This case study is password protected. Enter the password to continue.
          </p>
          <form className="gate__form" onSubmit={submit}>
            <label className="gate__label" htmlFor="tesla-password">Password</label>
            <input
              id="tesla-password"
              className="gate__input"
              type="text"
              name="password"
              autoComplete="off"
              spellCheck="false"
              autoCapitalize="characters"
              value={value}
              onChange={(e) => {
                setValue(e.target.value.toUpperCase())
                setError(false)
              }}
              aria-invalid={error}
            />
            {error && (
              <p className="gate__error" role="alert">That password doesn&apos;t match. Try again.</p>
            )}
            <button type="submit" className="gate__submit">Enter</button>
          </form>
        </div>
      </section>
    </CaseStudyPage>
  )
}

export default function Tesla() {
  const [unlocked, setUnlocked] = useState(() => (
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === '1'
  ))

  if (!unlocked) return <TeslaGate onUnlock={() => setUnlocked(true)} />

  return (
    <CaseStudyTemplate
      title="Tesla"
      tagline="Industry work — replace this tagline with the project’s outcome once the case study is written."
      cover="/tesla-cover.png"
      coverAlt="Tesla Model S homepage"
      meta={[
        { key: 'Timeline', val: 'TBD' },
        { key: 'Role', val: 'Product Designer' },
        { key: 'Client', val: 'Tesla' },
        { key: 'Tools', val: 'Figma' },
        { key: 'Disciplines', val: 'Program Design · UX' },
      ]}
      background={(
        <>
          <p>
            Background for this Tesla project goes here — the problem, the team, and the context
            you were designing in.
          </p>
          <p>
            Replace this copy with the real story. Keep the two-column label | body rhythm and the
            home type scale (purple 700 headings, DM Sans).
          </p>
        </>
      )}
      task="State the design problem in one or two sentences. What were you asked to make clearer, faster, or more usable?"
    />
  )
}
