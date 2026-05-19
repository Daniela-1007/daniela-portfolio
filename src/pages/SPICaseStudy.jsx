import CaseStudyLayout from "../components/layout/CaseStudyLayout";
import beforeImg from "../assets/Images/spi-before.png";
import afterImg from "../assets/Images/spi-after.jpg";

const heroStyle = {
  backgroundColor: "var(--color-surface)",
  borderBottom: "1px solid var(--color-border)",
  padding: "5rem 2rem 4rem",
  display: "flex",
  justifyContent: "center",
};

const heroInnerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const categoryStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const titleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  color: "var(--color-text)",
  margin: 0,
  lineHeight: 1.1,
};

const summaryStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.1rem",
  lineHeight: 1.8,
  color: "var(--color-muted)",
  maxWidth: "680px",
  margin: 0,
};

const metaStripStyle = {
  display: "flex",
  gap: "3rem",
  flexWrap: "wrap",
  paddingTop: "1.5rem",
  borderTop: "1px solid var(--color-border)",
};

const metaItemStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
};

const metaLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.68rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const metaValueStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  color: "var(--color-text)",
};

const sectionStyle = {
  padding: "5rem 2rem",
  display: "flex",
  justifyContent: "center",
};

const altSectionStyle = {
  ...sectionStyle,
  backgroundColor: "var(--color-surface)",
};

const sectionInnerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
};

const sectionLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const sectionHeadingStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
  color: "var(--color-text)",
  margin: 0,
  lineHeight: 1.2,
};

const bodyTextStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  lineHeight: 1.85,
  color: "var(--color-muted)",
  maxWidth: "720px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "6px",
  border: "1px solid var(--color-border)",
  display: "block",
  objectFit: "contain",
  backgroundColor: "var(--color-bg)",
};

const imageCaptionStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  color: "var(--color-muted)",
  fontStyle: "italic",
  marginTop: "0.75rem",
  opacity: 0.7,
};

const twoColStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
  gap: "2rem",
};

const stepCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "1.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const stepNumStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "2rem",
  color: "var(--color-accent)",
  opacity: 0.4,
  lineHeight: 1,
};

const stepTitleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.1rem",
  color: "var(--color-text)",
};

const stepBodyStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  lineHeight: 1.75,
  color: "var(--color-muted)",
};

const tagRowStyle = {
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
};

const tagStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  color: "var(--color-muted)",
  border: "1px solid var(--color-border)",
  borderRadius: "100px",
  padding: "0.3rem 0.85rem",
};

const problemCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderLeft: "3px solid var(--color-accent)",
  borderRadius: "0 6px 6px 0",
  padding: "1.25rem 1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};

const outcomeCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "1.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const outcomeTitleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1rem",
  color: "var(--color-accent)",
};

const outcomeBodyStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  lineHeight: 1.7,
  color: "var(--color-muted)",
};

const watchBtnStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "0.85rem 2rem",
  backgroundColor: "transparent",
  color: "var(--color-accent)",
  border: "1px solid var(--color-accent)",
  borderRadius: "2px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background 0.2s ease, color 0.2s ease",
  display: "inline-block",
  alignSelf: "flex-start",
};

export default function SPICaseStudy() {
  return (
    <CaseStudyLayout currentPath="/projects/spi-pharma">
      <div style={heroStyle}>
        <div style={heroInnerStyle}>
          <p style={categoryStyle}>Information Architecture · UX Design · Google Analytics · Tree Testing</p>
          <h1 style={titleStyle}>Navigation Revamp<br />— SPI Pharma</h1>
          <p style={summaryStyle}>
            As the sole UX designer working alongside the development team at
            SPI Pharma, I identified critical navigation issues through Google
            Analytics data and expert review, conducted tree testing to validate
            findability problems, and redesigned the navigation system to reduce
            cognitive load and improve access to key content. I presented the
            findings and redesign rationale directly to the marketing team.
          </p>
          <div style={metaStripStyle}>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>My Role</span>
              <span style={metaValueStyle}>Sole UX Designer</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Timeline</span>
              <span style={metaValueStyle}>May 2023 – Aug 2023</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Tools</span>
              <span style={metaValueStyle}>Figma · Google Analytics · Tree Testing</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Collaborators</span>
              <span style={metaValueStyle}>Development & Marketing Teams</span>
            </div>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>The Problem</p>
          <h2 style={sectionHeadingStyle}>A navigation that buried its own content</h2>
          <p style={bodyTextStyle}>
            SPI Pharma's original navigation used a flat mega-menu layout.
            While it showed subcategories in columns, the structure lacked
            clear visual hierarchy and the top-level labels were vague —
            making it difficult for users to know where to start. Terms like
            "Company Resources" and "SPI News" were ambiguous, and the overall
            organization of product categories needed refinement.
          </p>
          <p style={bodyTextStyle}>
            Google Analytics data confirmed that users were not reaching
            product pages at expected rates. The navigation labels and
            structure were creating friction before users even reached
            the content they came for.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ ...stepBodyStyle, color: "var(--color-accent)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Key Issues Identified</p>
            {[
              "Top-level navigation labels were vague — 'Company Resources' and 'SPI News' lacked clarity",
              "Product category organization made it difficult to predict where specific items would be found",
              "Navigation structure did not reflect how users mentally categorized SPI Pharma's products",
              "Analytics showed users were not reaching key product pages at expected rates",
            ].map((issue) => (
              <div key={issue} style={problemCardStyle}>
                <p style={stepBodyStyle}>{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Before</p>
          <h2 style={sectionHeadingStyle}>The Original Navigation</h2>
          <div>
            <img src={beforeImg} alt="SPI Pharma original flat mega-menu navigation" style={imageStyle} />
            <p style={imageCaptionStyle}>The original SPI Pharma navigation — a flat mega-menu layout that was already in place when I joined the internship.</p>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Process</p>
          <h2 style={sectionHeadingStyle}>Research & Design Approach</h2>
          <div style={twoColStyle}>
            {[
              {
                num: "01",
                title: "Google Analytics Review",
                body: "Analyzed real user behavior data to identify where users were dropping off and which product pages were underperforming. This confirmed the navigation was creating measurable friction — and pushed me to pursue my Google Analytics certification during this internship.",
              },
              {
                num: "02",
                title: "Expert Review",
                body: "Conducted a heuristic evaluation of the existing navigation against established usability principles — identifying visibility problems, interaction costs, and cognitive load issues.",
              },
              {
                num: "03",
                title: "Tree Testing",
                body: "Used tree testing to validate that users struggled to find specific products within the existing navigation structure — providing concrete evidence to support the redesign recommendation.",
              },
              {
                num: "04",
                title: "Redesign & Presentation",
                body: "Designed a flat mega-menu layout that exposes all sub-categories at once, eliminating hidden levels. Presented the findings, methodology, and redesign rationale to the marketing team with a full supporting presentation.",
              },
            ].map((step) => (
              <div key={step.num} style={stepCardStyle}>
                <span style={stepNumStyle}>{step.num}</span>
                <p style={stepTitleStyle}>{step.title}</p>
                <p style={stepBodyStyle}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>After</p>
          <h2 style={sectionHeadingStyle}>The Redesigned Navigation</h2>
          <div>
            <img src={afterImg} alt="SPI Pharma redesigned cascading dropdown navigation" style={imageStyle} />
            <p style={imageCaptionStyle}>The redesigned SPI Pharma navigation — a structured cascading dropdown that organizes products into clear categories, improving findability and reducing cognitive load.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ ...stepBodyStyle, color: "var(--color-accent)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>What Changed</p>
            {[
              "Navigation labels simplified and clarified — 'SPI News' became 'News and Events', 'Company Resources' became 'Resource Center'",
              "Product categories reorganized based on tree testing findings to better match user mental models",
              "Added 'Easy-To-Digest' as a clear entry point for users new to SPI Pharma's product range",
              "Cascading dropdown structure introduced to reveal subcategories progressively and reduce initial cognitive load",
            ].map((change) => (
              <div key={change} style={problemCardStyle}>
                <p style={stepBodyStyle}>{change}</p>
              </div>
            ))}
          </div>
          <a
            href="https://youtu.be/qClCKYDb7i4?si=VW3mPFgXPGfAU3B4"
            target="_blank"
            rel="noopener noreferrer"
            style={watchBtnStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "var(--color-accent)";
              e.target.style.color = "#111010";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "var(--color-accent)";
            }}
          >
            Watch Presentation ↗
          </a>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Outcome</p>
          <h2 style={sectionHeadingStyle}>Reflections</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: "📊",
                title: "Data drove the decision",
                body: "Using real Google Analytics data to identify the problem — rather than relying on assumption — made the redesign recommendation significantly more credible when presenting to stakeholders.",
              },
              {
                icon: "🎓",
                title: "Certification earned",
                body: "Working with Google Analytics on a real project motivated me to pursue and earn my Google Analytics certification during this internship.",
              },
              {
                icon: "🤝",
                title: "Cross-functional collaboration",
                body: "Working alongside developers and presenting to the marketing team taught me how to communicate design decisions to non-design stakeholders clearly and confidently.",
              },
            ].map((o) => (
              <div key={o.title} style={outcomeCardStyle}>
                <span style={{ fontSize: "1.5rem" }}>{o.icon}</span>
                <p style={outcomeTitleStyle}>{o.title}</p>
                <p style={outcomeBodyStyle}>{o.body}</p>
              </div>
            ))}
          </div>
          <div style={tagRowStyle}>
            {["Information Architecture", "Tree Testing", "Google Analytics", "Expert Review", "Figma", "Mega-Menu", "Navigation Design", "Stakeholder Presentation"].map((t) => (
              <span key={t} style={tagStyle}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
}

