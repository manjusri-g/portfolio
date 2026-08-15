import CaseStudyPage from '../components/CaseStudyPage.jsx'
import CsFigure from '../components/CsFigure.jsx'

export default function FallingFruit() {
  return (
    <CaseStudyPage title="Falling Fruit">

      <header id="main" className="cs-hero">
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

      <div className="container">
        <CsFigure src="/ff-hero1.png" alt="Falling Fruit community page redesign" />
      </div>

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

          <CsFigure src="/ff-swot.png" alt="SWOT analysis of the existing Falling Fruit platform" />

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
                &ldquo;Creating a platform where foragers could interact more could be a potentially beneficial addition.&rdquo;
              </blockquote>
              <blockquote className="cs-quote">
                &ldquo;If Falling Fruit ever incorporated a social aspect, I would be interested in joining other local groups.&rdquo;
              </blockquote>
            </div>
          </div>

          <CsFigure src="/ff-survey.png" alt="Survey results: how respondents got involved in Falling Fruit" />

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
                &ldquo;Fruit is designed to be beautiful and call your attention so you can eat it and spread its life.&rdquo;
                <cite>— Falling Fruit Interviewee</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

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
              <CsFigure src="/ff-persona-nick.png" alt="Persona sketch of Nick Smith" aspect="4/3" contain />
              <div className="cs-persona__body">
                <h3 className="cs-persona__name">Nick Smith, 30</h3>
                <p className="cs-persona__role">Businessman · New York City</p>
                <p><strong>Goal:</strong> Find a calming, sustainable hobby outside of work — discover edible plants near his Manhattan apartment.</p>
                <p><strong>Frustration:</strong> No community aspect; unsure where to start; worried about legality and safety.</p>
                <blockquote className="cs-quote">&ldquo;No community aspect, I&apos;d love to see an ability to communicate or ask for help IDing.&rdquo;</blockquote>
              </div>
            </div>
            <div className="cs-persona">
              <CsFigure src="/ff-persona-jessica.png" alt="Persona sketch of Jessica Nguyen" aspect="4/3" contain />
              <div className="cs-persona__body">
                <h3 className="cs-persona__name">Jessica Nguyen, 30</h3>
                <p className="cs-persona__role">Middle School Teacher · Plano, TX</p>
                <p><strong>Goal:</strong> Reconnect with a local foraging community after moving from San Diego.</p>
                <p><strong>Frustration:</strong> No groups, events, or messaging in Falling Fruit; social presence feels incomplete.</p>
                <blockquote className="cs-quote">&ldquo;Being able to organize foraging outages/events could be huge for the platform.&rdquo;</blockquote>
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
          <div className="cs-figures">
            <CsFigure src="/ff-wireframe-main.png" alt="Wireframe of the Falling Fruit community landing page" />
            <CsFigure src="/ff-wireframe-activity.png" alt="Wireframe of the localized activity feed" />
          </div>

          <div className="cs-two-col cs-two-col--gap">
            <div className="cs-two-col__label">
              <span className="section-label">Solution</span>
            </div>
            <div className="cs-two-col__body">
              <p>A <strong>Community Page</strong> on the Falling Fruit website — the hub connecting all engagement features.</p>
              <ul className="cs-list">
                <li><strong>Community Page Landing</strong> — entry point to forums, events, updates, and educational resources.</li>
                <li><strong>Localized Activity Feed</strong> — tailored to the user&apos;s area, highlighting nearby plant activity and posts from local foragers. <em>(Feature I led design for)</em></li>
                <li><strong>User Story Highlights</strong> — a showcase of community-led experiences to celebrate contributions. <em>(Feature I led design for)</em></li>
                <li><strong>Ask Your Community (Forum)</strong> — a space to ask questions, share knowledge, and crowdsource plant identification.</li>
                <li><strong>Group Outing Organization</strong> — plan, join, or discover local foraging outings directly in the platform.</li>
              </ul>
            </div>
          </div>

          <div className="cs-screens">
            <CsFigure src="/ff-screen-community.gif" alt="Community page landing animation" />
            <CsFigure src="/ff-screen-activity.gif" alt="Localized activity feed animation" />
            <CsFigure src="/ff-screen-forum.gif" alt="Ask Your Community forum animation" />
            <CsFigure src="/ff-screen-events.gif" alt="Group outing organization animation" />
          </div>
          <CsFigure src="/ff-screen-highlights.gif" alt="User story highlights animation" />
        </div>
      </section>

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
              labeling clarity (e.g., replacing &ldquo;I&apos;m going!&rdquo; with &ldquo;Join&rdquo;), and navigation patterns.
            </p>
          </div>
        </div>
      </section>

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
              <span className="cs-deliverable__sub">Research process, design decisions &amp; solution</span>
            </a>
          </div>
        </div>
      </section>

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

    </CaseStudyPage>
  )
}
