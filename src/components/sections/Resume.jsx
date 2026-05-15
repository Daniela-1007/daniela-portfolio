import { motion } from "framer-motion";

const experience = [
  {
    id: 1,
    role: "Web Development & Educational Technology Intern",
    org: "The Pennsylvania State University",
    period: "Jan 2026 – Apr 2026",
    highlights: [
      "Built a Python automation tool connecting to Outlook via win32com and OpenAI API",
      "Automated email sorting and AI-assisted draft reply generation on a 3-minute scheduler",
      "Made accessibility-focused updates to university webpages and instructional materials",
    ],
  },
  {
    id: 2,
    role: "Web Communications Intern",
    org: "The Salvation Army",
    period: "May 2025 – Jul 2025",
    highlights: [
      "Redesigned the volunteer page — improving navigation clarity and engagement",
      "Created wireframes and prototypes in Figma to communicate design ideas",
      "Conducted usability testing and gathered feedback to improve user navigation",
    ],
  },
  {
    id: 3,
    role: "AI Prompt Engineer",
    org: "The Pennsylvania State University",
    period: "Jan 2025 – Jul 2025",
    highlights: [
      "Developed a stock sentiment analysis project using Python and financial news data",
      "Built an interactive Streamlit dashboard with data visualization tools",
      "Collaborated with peers using GitHub for version control",
    ],
  },
  {
    id: 4,
    role: "Digital Marketing Analyst Intern",
    org: "SPI Pharma — Associated British Foods (ABFI)",
    period: "May 2023 – Aug 2023",
    highlights: [
      "Redesigned the SPI Pharma website navigation using UX research and Figma",
      "Created mockups and reviewed user feedback using analytics tools",
      "Collaborated with developers, designers, and marketing team members",
    ],
  },
];

const education = {
  degree: "B.S. Human-Centered Design and Development",
  school: "Pennsylvania State University, University Park",
  period: "Graduated May 2026",
  gpa: "GPA: 3.24 · Focus: Data Science · Dean's List: Fall 2023",
};

const sectionStyle = {
  padding: "8rem 2rem",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "var(--color-surface)",
};

const innerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "4rem",
};

const headerRowStyle = {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "2rem",
};

const headerLeftStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "560px",
};

const labelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const headingStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2rem, 4vw, 3rem)",
  color: "var(--color-text)",
  margin: 0,
  lineHeight: 1.2,
};

const subheadStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  color: "var(--color-muted)",
  lineHeight: 1.7,
  margin: 0,
};

const downloadBtnStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "0.9rem 2rem",
  backgroundColor: "var(--color-accent)",
  color: "#111010",
  border: "none",
  borderRadius: "2px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  display: "inline-block",
  whiteSpace: "nowrap",
  flexShrink: 0,
};

const educationCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const eduLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.7rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
  marginBottom: "0.5rem",
};

const eduDegreeStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.2rem",
  color: "var(--color-text)",
  margin: 0,
};

const eduMetaStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  color: "var(--color-muted)",
};

const timelineStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0",
};

const expCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderBottom: "none",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  transition: "background 0.2s ease",
};

const expCardLastStyle = {
  ...expCardStyle,
  borderBottom: "1px solid var(--color-border)",
  borderRadius: "0 0 6px 6px",
};

const expCardFirstStyle = {
  ...expCardStyle,
  borderRadius: "6px 6px 0 0",
};

const expHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "0.5rem",
};

const roleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.1rem",
  color: "var(--color-text)",
  margin: 0,
};

const orgStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.85rem",
  color: "var(--color-accent)",
};

const periodStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.775rem",
  color: "var(--color-muted)",
  letterSpacing: "0.04em",
  whiteSpace: "nowrap",
};

const highlightListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  paddingLeft: "0",
  margin: 0,
  listStyle: "none",
};

const highlightItemStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  color: "var(--color-muted)",
  lineHeight: 1.65,
  display: "flex",
  gap: "0.75rem",
  alignItems: "flex-start",
};

const bulletStyle = {
  color: "var(--color-accent)",
  flexShrink: 0,
  marginTop: "2px",
  opacity: 0.6,
};

const linkedinLinkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-muted)",
  textDecoration: "none",
  transition: "color 0.2s ease",
  display: "inline-block",
  marginTop: "0.5rem",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: d },
  }),
};

export default function Resume() {
  function handleBtnEnter(e) {
    e.target.style.opacity = "0.85";
    e.target.style.transform = "translateY(-1px)";
  }

  function handleBtnLeave(e) {
    e.target.style.opacity = "1";
    e.target.style.transform = "translateY(0)";
  }

  function handleLinkEnter(e) {
    e.target.style.color = "var(--color-accent)";
  }

  function handleLinkLeave(e) {
    e.target.style.color = "var(--color-muted)";
  }

  return (
    <section id="resume" style={sectionStyle} aria-label="Resume">
      <div style={innerStyle}>
        <motion.div
          style={headerRowStyle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div style={headerLeftStyle}>
            <p style={labelStyle}>Experience</p>
            <h2 style={headingStyle}>
              Where I have learned,<br />and what I have built.
            </h2>
            <p style={subheadStyle}>
              A summary of my professional experience. Download the full PDF
              for complete details.
            </p>
            <a
              href="https://www.linkedin.com/in/daniela-ordaz/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkedinLinkStyle}
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
            >
              View full profile on LinkedIn ↗
            </a>
          </div>

          <a
            href="/Daniela_Ordaz_Resume_2026.pdf"
            download
            style={downloadBtnStyle}
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
            aria-label="Download Daniela Ordaz resume PDF"
          >
            Download Résumé
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <div style={educationCardStyle}>
            <p style={eduLabelStyle}>Education</p>
            <p style={eduDegreeStyle}>{education.degree}</p>
            <p style={eduMetaStyle}>{education.school}</p>
            <p style={eduMetaStyle}>{education.period}</p>
            <p style={eduMetaStyle}>{education.gpa}</p>
          </div>
        </motion.div>

        <motion.div
          style={timelineStyle}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experience.map((exp, i) => {
            let cardStyle;
            if (i === 0) cardStyle = expCardFirstStyle;
            else if (i === experience.length - 1) cardStyle = expCardLastStyle;
            else cardStyle = expCardStyle;

            return (
              <motion.div
                key={exp.id}
                style={cardStyle}
                variants={fadeUp}
                custom={i * 0.1}
              >
                <div style={expHeaderStyle}>
                  <div>
                    <p style={orgStyle}>{exp.org}</p>
                    <h3 style={roleStyle}>{exp.role}</h3>
                  </div>
                  <span style={periodStyle}>{exp.period}</span>
                </div>

                <ul style={highlightListStyle}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} style={highlightItemStyle}>
                      <span style={bulletStyle}>—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

