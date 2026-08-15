import CaseStudyTemplate from '../components/CaseStudyTemplate.jsx'

export default function AgentUx() {
  return (
    <CaseStudyTemplate
      title="Agent UX"
      tagline="An AI-powered research tool that simulates user personas to complete usability tasks — cutting weeks of research to minutes."
      cover="/agentux.png"
      coverAlt="Agent UX running an evaluation on a live website"
      website="https://www.agentux.dev/"
      websiteLabel="Live Website"
      meta={[
        { key: 'Timeline', val: '2026' },
        { key: 'Role', val: 'Product Designer' },
        { key: 'Award', val: '1st Place · Wildcard Track · DiamondHacks 2026' },
        { key: 'Tools', val: 'Figma Make · AI' },
        { key: 'Disciplines', val: 'Product Design · AI Tooling' },
      ]}
      impact={[
        { num: '1st', desc: 'Wildcard Track · DiamondHacks 2026' },
        { num: 'Minutes', desc: 'Instead of weeks of research cycles' },
        { num: 'AI', desc: 'Persona-based usability tasks on a live URL' },
      ]}
      background={(
        <>
          <p>
            <strong>Agent UX</strong> is an AI web design tester built for DiamondHacks 2026. Designers
            paste a live URL, pick personas (like first-time user or elderly), and run generated
            usability tasks against the real page.
          </p>
          <p>
            The tool was built to shrink the gap between shipping a flow and learning whether people
            can actually complete it — without recruiting a full study for every iteration.
          </p>
        </>
      )}
      task="Design an AI research tool that simulates user personas completing usability tasks on a live website, so teams can find friction in minutes instead of weeks."
    />
  )
}
