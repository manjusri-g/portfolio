import CaseStudyTemplate from '../components/CaseStudyTemplate.jsx'

export default function CityOfSanDiego() {
  return (
    <CaseStudyTemplate
      title="The City of San Diego"
      tagline="User experience work for the City of San Diego — replace this tagline with the project’s outcome once the case study is written."
      cover="/city-cover.png"
      coverAlt="Inside San Diego city services"
      meta={[
        { key: 'Timeline', val: 'TBD' },
        { key: 'Role', val: 'User Experience Intern' },
        { key: 'Client', val: 'The City of San Diego' },
        { key: 'Tools', val: 'Figma' },
        { key: 'Disciplines', val: 'UX Design · Product Design' },
      ]}
      background={(
        <>
          <p>
            As a User Experience Intern at <strong>The City of San Diego</strong>, this project sat
            inside civic services — designing for residents, staff, and the systems that connect them.
          </p>
          <p>
            Replace this copy with the real problem, stakeholders, and constraints. Keep the
            two-column label | body rhythm and the home type scale.
          </p>
        </>
      )}
      task="State the civic design problem in one or two sentences. Who was blocked, and what did the experience need to do?"
    />
  )
}
