import CaseStudyTemplate from '../components/CaseStudyTemplate.jsx'

export default function Wcasl() {
  return (
    <CaseStudyTemplate
      title="WCASL"
      tagline="Designing West Coast Adult Soccer League’s first website to connect 800+ players with clarity, community, and competition."
      cover="/wacsl-cover.png"
      coverAlt="West Coast Adult Soccer League homepage"
      website="https://www.wcasl.org/"
      websiteLabel="Live Website"
      meta={[
        { key: 'Timeline', val: '2025' },
        { key: 'Role', val: 'Web Designer · Content Strategist' },
        { key: 'Client', val: 'West Coast Adult Soccer League' },
        { key: 'Tools', val: 'Figma · Squarespace' },
        { key: 'Disciplines', val: 'Web Design · Content Strategy' },
      ]}
      impact={[
        { num: '800+', desc: 'Adult players across the league' },
        { num: '4', desc: 'Age-based divisions' },
        { num: '1st', desc: 'League website, launched 2025' },
      ]}
      background={(
        <>
          <p>
            <strong>West Coast Adult Soccer League (WCASL)</strong> is a South Orange County league
            founded in 2009. It brings together 800+ adult players across four divisions for
            year-round games on grass and turf — competitive play with a family-friendly, inclusive
            community.
          </p>
          <p>
            Before this project, the league had no dedicated website. Players and families needed a
            clear home for registration, divisions, schedules, rules, and the culture of the league.
          </p>
        </>
      )}
      task="Design and write WCASL’s first website so 800+ players can find their division, register, and feel the league’s community from the first screen."
    />
  )
}
