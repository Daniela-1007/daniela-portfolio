import CaseStudyLayout from "../components/layout/CaseStudyLayout";
import before1Img from "../assets/Images/volunteer-before-1.png";
import before2Img from "../assets/Images/volunteer-before-2.png";
import after1Img from "../assets/Images/volunteer-after-1.jpg";
import after2Img from "../assets/Images/volunteer-after-2.jpg";
import figmaImg from "../assets/Images/volunteer-figma.png";
import analyticsImg from "../assets/Images/volunteer-analytics.png";

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

const outcomeCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "1.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const outcomeIconStyle = {
  fontSize: "1.5rem",
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

const findingCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderLeft: "3px solid var(--color-accent)",
  borderRadius: "0 6px 6px 0",
  padding: "1.25rem 1.5rem",
};

export default function VolunteerCaseStudy() {
  return (
    <CaseStudyLayout currentPath="/projects/volunteer">
      <div style={heroStyle}>
        <div style={heroInnerStyle}>
          <p style={categoryStyle}>UX Design · Content Strategy · HTML/CSS · Zesty.io CMS</p>
          <h1 style={titleStyle}>Volunteer Page<br />Revamp</h1>
          <p style={summaryStyle}>
            A content and UX redesign of The Salvation Army's volunteer page.
            Starting with a page audit and 10–15 user interviews, I identified
            gaps in content, missing organizational values, and unclear structure.
            I then redesigned the page using HTML, CSS, and Zesty.io — adding
            new sections, imagery, and the values of the organization that
            prospective volunteers look for before committing their time.
          </p>
          <div style={metaStripStyle}>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>My Role</span>
              <span style={metaValueStyle}>Sole UX Designer & Developer</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Timeline</span>
              <span style={metaValueStyle}>May 2025 – Jul 2025</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Tools</span>
              <span style={metaValueStyle}>Figma · Zesty.io · HTML · CSS</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Status</span>
              <span style={metaValueStyle}>Prototype Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>The Problem</p>
          <h2 style={sectionHeadingStyle}>A page that did not tell the full story</h2>
          <p style={bodyTextStyle}>
            The existing volunteer page was sparse. It told visitors they could
            volunteer, but it did not tell them why. There was no information
            about the organization's values — something that research shows is
            one of the first things people look for before choosing to give their
            time to an organization.
          </p>
          <p style={bodyTextStyle}>
            The page also lacked visual context, had sections with thin content,
            and did not communicate the mission in a compelling way. For an
            organization as impactful as The Salvation Army, the page was not
            doing justice to the work they do.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Before</p>
          <h2 style={sectionHeadingStyle}>The Original Page</h2>
          <div style={twoColStyle}>
            <div>
              <img src={before1Img} alt="Original Salvation Army volunteer page - top section" style={imageStyle} />
              <p style={imageCaptionStyle}>Original volunteer page — top section. Minimal content, no values messaging.</p>
            </div>
            <div>
              <img src={before2Img} alt="Original Salvation Army volunteer page - lower section" style={imageStyle} />
              <p style={imageCaptionStyle}>Original volunteer page — lower section. Sparse detail and limited engagement.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Research</p>
          <h2 style={sectionHeadingStyle}>Page Audit & User Interviews</h2>
          <p style={bodyTextStyle}>
            I started by auditing the existing page myself, flagging every section
            that lacked content, clarity, or visual support. I then conducted
            interviews with 10–15 people to validate my findings and surface any
            issues I had missed.
          </p>
          <p style={bodyTextStyle}>
            A consistent theme emerged: people wanted to know the organization's
            values before committing to volunteer. They were looking for something
            that felt trustworthy and mission-driven — not just a sign-up form.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <p style={{ ...stepBodyStyle, color: "var(--color-accent)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Key Findings</p>
            {[
              "Missing organizational values — the most consistently mentioned gap",
              "Insufficient imagery to convey the human impact of volunteering",
              "Thin content in several sections that left users with unanswered questions",
              "No clear sense of what volunteering with The Salvation Army actually looks like day-to-day",
            ].map((finding) => (
              <div key={finding} style={findingCardStyle}>
                <p style={stepBodyStyle}>{finding}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Process</p>
          <h2 style={sectionHeadingStyle}>Design & Development</h2>
          <div style={twoColStyle}>
            {[
              {
                num: "01",
                title: "Figma Mobile Prototype",
                body: "Designed a mobile-first prototype in Figma to plan the new layout, content hierarchy, and the values section before writing any code.",
              },
              {
                num: "02",
                title: "HTML & CSS in Zesty.io",
                body: "Wrote HTML and CSS directly in the Zesty.io CMS to build the redesigned page, adding new sections, imagery, and the organizational values.",
              },
              {
                num: "03",
                title: "Values Section Added",
                body: "Added a dedicated values section highlighting The Salvation Army's core principles — Passionate, Compassionate, Uplifting, Brave, and Trustworthy.",
              },
              {
                num: "04",
                title: "CMS Content Updates",
                body: "Used the Zesty.io CMS to update statistics and content on the front page of the Salvation Army website, gaining hands-on experience with content management systems.",
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

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>After</p>
          <h2 style={sectionHeadingStyle}>The Redesign</h2>
          <div>
            <img src={figmaImg} alt="Figma mobile prototype showing the redesigned volunteer page with values section" style={{ ...imageStyle, maxWidth: "400px" }} />
            <p style={imageCaptionStyle}>Figma mobile prototype — showing the new values section with imagery and organizational mission messaging.</p>
          </div>
          <div style={twoColStyle}>
            <div>
              <img src={after1Img} alt="Redesigned volunteer page HTML and CSS in Zesty.io editor" style={imageStyle} />
              <p style={imageCaptionStyle}>The redesigned page being built in Zesty.io — HTML and CSS written to implement the new layout and content.</p>
            </div>
            <div>
              <img src={after2Img} alt="Redesigned volunteer page showing new sections and layout" style={imageStyle} />
              <p style={imageCaptionStyle}>The redesigned page with new sections, updated content hierarchy, and the added values messaging.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Analytics</p>
          <h2 style={sectionHeadingStyle}>Page Performance</h2>
          <p style={bodyTextStyle}>
            During my internship, I tracked page performance using analytics
            tools. The data below reflects traffic to the pages I worked on
            during my time at The Salvation Army headquarters.
          </p>
          <div>
            <img src={analyticsImg} alt="Analytics dashboard showing page visit data for redesigned pages" style={imageStyle} />
            <p style={imageCaptionStyle}>Analytics dashboard showing visit data for the pages updated during the internship period.</p>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Outcome</p>
          <h2 style={sectionHeadingStyle}>Reflections</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: "🔍",
                title: "Research Validates Instinct",
                body: "My initial audit flagged the missing values section, and every interview confirmed it. Talking to real users validated the direction before a single line of code was written.",
              },
              {
                icon: "💻",
                title: "Design Meets Development",
                body: "Moving from Figma into Zesty.io required translating design decisions into working HTML and CSS — bridging the gap between design and implementation.",
              },
              {
                icon: "🌱",
                title: "First CMS Experience",
                body: "Working in Zesty.io gave me real hands-on experience with a production CMS and content management workflow in a professional environment.",
              },
            ].map((o) => (
              <div key={o.title} style={outcomeCardStyle}>
                <span style={outcomeIconStyle}>{o.icon}</span>
                <p style={outcomeTitleStyle}>{o.title}</p>
                <p style={outcomeBodyStyle}>{o.body}</p>
              </div>
            ))}
          </div>
          <div style={tagRowStyle}>
            {["UX Research", "User Interviews", "Content Strategy", "Figma", "HTML & CSS", "Zesty.io", "CMS", "Information Architecture"].map((t) => (
              <span key={t} style={tagStyle}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
}

