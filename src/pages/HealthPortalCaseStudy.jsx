import CaseStudyLayout from "../components/layout/CaseStudyLayout";
import homeImg from "../assets/Images/health-home.png";
import profileImg from "../assets/Images/health-profile.png";
import documentsImg from "../assets/Images/health-documents.png";
import doctorsImg from "../assets/Images/health-doctors.png";

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

const mobileImageStyle = {
  ...imageStyle,
  maxWidth: "280px",
  margin: "0 auto",
};

const imageCaptionStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  color: "var(--color-muted)",
  fontStyle: "italic",
  marginTop: "0.75rem",
  opacity: 0.7,
  textAlign: "center",
};

const fourColStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "1.5rem",
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

const insightBoxStyle = {
  backgroundColor: "rgba(201,169,110,0.06)",
  border: "1px solid rgba(201,169,110,0.2)",
  borderRadius: "6px",
  padding: "1.75rem 2rem",
  maxWidth: "720px",
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

export default function HealthPortalCaseStudy() {
  return (
    <CaseStudyLayout currentPath="/projects/health-portal">
      <div style={heroStyle}>
        <div style={heroInnerStyle}>
          <p style={categoryStyle}>UX Research · Original Concept Design · Accessibility · Figma</p>
          <h1 style={titleStyle}>Health Portal<br />Concept</h1>
          <p style={summaryStyle}>
            An original mobile health portal designed from scratch as a class
            project. Designed to help users manage their doctors, appointments,
            medical documents, and insurance in one place. Conducted user
            interviews, created personas and user flows, ran usability tests,
            and built an accessible high-fidelity Figma prototype from the
            ground up.
          </p>
          <div style={metaStripStyle}>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>My Role</span>
              <span style={metaValueStyle}>UX Researcher & UI Designer</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Context</span>
              <span style={metaValueStyle}>Academic Project</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Tools</span>
              <span style={metaValueStyle}>Figma · User Interviews · Usability Testing</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Platform</span>
              <span style={metaValueStyle}>Mobile (iOS)</span>
            </div>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>The Problem</p>
          <h2 style={sectionHeadingStyle}>Managing the unmanageable</h2>
          <p style={bodyTextStyle}>
            The insight behind this project came from personal experience.
            As a young adult taking charge of her own healthcare for the first
            time, I realized I had multiple doctors whose names, numbers, and
            locations I could barely keep track of. There was no single place
            to manage all of it.
          </p>
          <div style={insightBoxStyle}>
            <p style={{ ...bodyTextStyle, maxWidth: "none", color: "var(--color-text)", fontStyle: "italic" }}>
              "It does not only help young adults managing their own doctors for
              the first time — it helps mothers. Mothers take charge of their own
              doctors, their children's, and their partners' at times. This is a
              lot of doctors to manage. I aimed to manage the unmanageable."
            </p>
          </div>
          <p style={bodyTextStyle}>
            The goal was to design a mobile app that compiled all of a user's
            healthcare information — doctors, appointments, documents, and
            insurance — into one accessible, easy-to-navigate experience.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Research</p>
          <h2 style={sectionHeadingStyle}>Understanding the users</h2>
          <div style={twoColStyle}>
            {[
              {
                num: "01",
                title: "User Interviews",
                body: "Conducted interviews with peers and parents of peers — capturing two distinct user groups: young adults managing their own healthcare independently for the first time, and parents managing healthcare for an entire family.",
              },
              {
                num: "02",
                title: "Personas",
                body: "Built personas representing the primary user types identified in research — a young adult in their early 20s, and a parent managing multiple family members' health records.",
              },
              {
                num: "03",
                title: "User Flows",
                body: "Mapped out the key user flows for scheduling an appointment, looking up a doctor, accessing medical documents, and managing insurance information.",
              },
              {
                num: "04",
                title: "Usability Testing & Accessibility",
                body: "Ran usability tests with the same interview participants. Participants flagged accessibility issues that had not been identified during design — directly informing the final prototype revisions.",
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
          <p style={sectionLabelStyle}>The Prototype</p>
          <h2 style={sectionHeadingStyle}>High-Fidelity Figma Screens</h2>
          <p style={bodyTextStyle}>
            The final prototype covers the four core areas of the app — home
            navigation, doctor management, medical documents, and user profile
            with insurance. Every screen was designed with accessibility in
            mind, using clear labels, sufficient contrast, and familiar mobile
            UI patterns.
          </p>
          <div style={fourColStyle}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={homeImg} alt="Health Portal home screen showing main navigation options" style={mobileImageStyle} />
              <p style={imageCaptionStyle}>Home — main navigation hub</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={doctorsImg} alt="Health Portal doctors screen with searchable list of doctors by specialty" style={mobileImageStyle} />
              <p style={imageCaptionStyle}>Doctors — searchable by specialty</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={documentsImg} alt="Health Portal medical documents screen showing uploaded records" style={mobileImageStyle} />
              <p style={imageCaptionStyle}>Medical Documents — all records in one place</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={profileImg} alt="Health Portal profile screen showing personal information and insurance" style={mobileImageStyle} />
              <p style={imageCaptionStyle}>Profile — personal info, ID, and insurance</p>
            </div>
          </div>
          <a
            href="https://youtu.be/bFzBB-kWDvc?si=UfdHm_u3GNuH7HE"
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
            Watch Prototype Walkthrough ↗
          </a>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Key Design Decisions</p>
          <h2 style={sectionHeadingStyle}>Why it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                title: "Doctors searchable by specialty",
                body: "Users often remember what type of doctor they need before they remember the name. Filtering by specialty first reduces cognitive load significantly.",
              },
              {
                title: "Quick actions on every doctor card",
                body: "Appointment and Call buttons are visible directly on the doctor listing — removing the need to navigate to a separate detail page for common actions.",
              },
              {
                title: "Medical documents organized by date",
                body: "Documents are sorted by upload date so the most recent records are always easy to find — important when sharing records at an appointment.",
              },
              {
                title: "Insurance and ID together in Profile",
                body: "Insurance and ID verification live in the same screen because they are typically needed at the same time — a small but deliberate usability decision.",
              },
            ].map((item) => (
              <div key={item.title} style={outcomeCardStyle}>
                <p style={outcomeTitleStyle}>{item.title}</p>
                <p style={outcomeBodyStyle}>{item.body}</p>
              </div>
            ))}
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
                icon: "🎯",
                title: "Research-driven design",
                body: "Every major design decision was backed by interview findings or usability test feedback — not personal preference.",
              },
              {
                icon: "♿",
                title: "Accessibility surfaced in testing",
                body: "Participants identified accessibility issues during usability testing that the design phase had missed — a reminder that testing with real users is irreplaceable.",
              },
              {
                icon: "👥",
                title: "Two user groups, one solution",
                body: "Designing for both young adults and parents forced a more universal, flexible information architecture — making the app stronger for all users.",
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
            {["UX Research", "User Interviews", "Personas", "User Flows", "Usability Testing", "Accessibility", "Figma", "Mobile Design"].map((t) => (
              <span key={t} style={tagStyle}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
}

