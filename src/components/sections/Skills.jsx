import { motion } from "framer-motion";

const skillCategories = [
  {
    id: 1,
    label: "Design & Research",
    icon: "✦",
    skills: [
      "Figma",
      "UX Research",
      "Usability Testing",
      "Wireframing",
      "Prototyping",
      "Journey Mapping",
      "Information Architecture",
      "Accessibility / WCAG",
    ],
  },
  {
    id: 2,
    label: "Development",
    icon: "⟨/⟩",
    skills: [
      "HTML & CSS",
      "Python",
      "SQL",
      "Jupyter Notebook",
    ],
  },
  {
    id: 3,
    label: "Tools & Platforms",
    icon: "◈",
    skills: [
      "VS Code",
      "GitHub",
      "Google Analytics ✦ Certified",
      "Google Colab",
      "draw.io",
      "SolidWorks",
    ],
  },
  {
    id: 4,
    label: "Currently Building",
    icon: "↗",
    skills: [
      "JavaScript",
      "React",
      "Figma Make",
      "Streamlit",
    ],
    growing: true,
  },
];

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

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "640px",
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "1.5rem",
};

const cardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const growingCardStyle = {
  ...cardStyle,
  borderColor: "rgba(201,169,110,0.2)",
  background: "linear-gradient(135deg, rgba(201,169,110,0.04) 0%, var(--color-bg) 60%)",
};

const cardHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
};

const iconStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1rem",
  color: "var(--color-accent)",
  lineHeight: 1,
};

const cardLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const skillListStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.7rem",
};

const skillItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  color: "var(--color-text)",
  lineHeight: 1.4,
};

const dotStyle = {
  width: "5px",
  height: "5px",
  borderRadius: "50%",
  backgroundColor: "var(--color-accent)",
  flexShrink: 0,
  opacity: 0.7,
};

const growingDotStyle = {
  ...dotStyle,
  backgroundColor: "transparent",
  border: "1px solid var(--color-accent)",
  opacity: 0.6,
};

const growingNoteStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.72rem",
  color: "var(--color-muted)",
  letterSpacing: "0.05em",
  fontStyle: "italic",
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

export default function Skills() {
  return (
    <section id="skills" style={sectionStyle} aria-label="Skills">
      <div style={innerStyle}>
        <motion.div
          style={headerStyle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p style={labelStyle}>Capabilities</p>
          <h2 style={headingStyle}>
            Skills and tools I use to design, build, and improve digital experiences.
          </h2>
          <p style={subheadStyle}>
            Honest about where I am strong, transparent about where I am building.
            Every skill listed is something I can speak to confidently.
          </p>
        </motion.div>

        <div style={gridStyle}>
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              style={cat.growing ? growingCardStyle : cardStyle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i * 0.1}
            >
              <div style={cardHeaderStyle}>
                <span style={iconStyle}>{cat.icon}</span>
                <span style={cardLabelStyle}>{cat.label}</span>
              </div>

              <div style={skillListStyle}>
                {cat.skills.map((skill) => (
                  <div key={skill} style={skillItemStyle}>
                    <span style={cat.growing ? growingDotStyle : dotStyle} />
                    {skill}
                  </div>
                ))}
              </div>

              {cat.growing && (
                <p style={growingNoteStyle}>
                  Actively building through current projects and continued learning.
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

