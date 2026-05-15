import { motion } from "framer-motion";

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
  gap: "5rem",
};

const topRowStyle = {
  display: "flex",
  gap: "5rem",
  flexWrap: "wrap",
  alignItems: "flex-start",
};

const labelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
  marginBottom: "1.5rem",
};

const headingStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2rem, 4vw, 3rem)",
  color: "var(--color-text)",
  margin: "0 0 2rem 0",
  lineHeight: 1.2,
};

const bioStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.05rem",
  lineHeight: 1.85,
  color: "var(--color-muted)",
  maxWidth: "560px",
};

const bioEmStyle = {
  color: "var(--color-text)",
  fontStyle: "normal",
};

const rightColStyle = {
  flex: "0 0 280px",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  paddingTop: "0.25rem",
};

const skillsBoxStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "4px",
  padding: "2rem",
};

const skillsHeadingStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
  marginBottom: "1.5rem",
};

const skillsGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.85rem 1.5rem",
};

const skillItemStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  color: "var(--color-muted)",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const skillDotStyle = {
  width: "4px",
  height: "4px",
  borderRadius: "50%",
  backgroundColor: "var(--color-accent)",
  flexShrink: 0,
};

const dividerStyle = {
  width: "100%",
  height: "1px",
  backgroundColor: "var(--color-border)",
};

const logosLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-muted)",
};

const logosGridStyle = {
  display: "flex",
  gap: "3rem",
  flexWrap: "wrap",
  alignItems: "center",
};

const orgNameStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.3rem",
  color: "var(--color-muted)",
  opacity: 0.6,
  letterSpacing: "0.02em",
  transition: "opacity 0.2s ease, color 0.2s ease",
  cursor: "default",
};

const interestsRowStyle = {
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
};

const interestPillStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  color: "var(--color-muted)",
  border: "1px solid var(--color-border)",
  borderRadius: "100px",
  padding: "0.4rem 1rem",
  letterSpacing: "0.04em",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: d },
  }),
};

const orgs = [
  "Penn State University",
  "The Salvation Army",
  "SPI Pharma · ABFI",
];

const interests = [
  "🎨 Arts & Crafts",
  "🍳 Cooking & Baking",
  "🌎 Bilingual — EN / ES",
  "✦ Iterative by nature",
];

const skills = [
  "UX Research",
  "Figma",
  "Front-End Dev",
  "Python",
  "Accessibility",
  "SQL",
  "Usability Testing",
  "GitHub",
  "Information Arch.",
  "HTML & CSS",
];

export default function About() {
  return (
    <section id="about" style={sectionStyle} aria-label="About Daniela">
      <div style={innerStyle}>
        <div style={topRowStyle}>
          <motion.div
            style={{ flex: "1 1 400px" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p style={labelStyle} variants={fadeUp} custom={0}>
              About Me
            </motion.p>
            <motion.h2 style={headingStyle} variants={fadeUp} custom={0.1}>
              Design-minded.<br />Code-capable.<br />Human-centered.
            </motion.h2>
            <motion.p style={bioStyle} variants={fadeUp} custom={0.2}>
              I am a{" "}
              <em style={bioEmStyle}>
                UX Engineer and recent Penn State graduate
              </em>{" "}
              in Human-Centered Design and Development. I work at the
              intersection of research, design, and code — turning user needs
              into interfaces and systems that actually function in the real
              world.
              <br /><br />
              My experience includes redesigning live websites, building
              automation tools in Python, prototyping health systems from
              research to high-fidelity, and making accessibility improvements
              to university web content. I care about the{" "}
              <em style={bioEmStyle}>
                details that make the difference between something that works
                and something that feels right.
              </em>
              <br /><br />
              I am bilingual in English and Spanish, and I bring a
              maker&apos;s curiosity to everything I build.
            </motion.p>

            <motion.div
              style={{ marginTop: "2.5rem" }}
              variants={fadeUp}
              custom={0.3}
            >
              <p style={{ ...logosLabelStyle, marginBottom: "1rem" }}>
                A little more me
              </p>
              <div style={interestsRowStyle}>
                {interests.map((item) => (
                  <span key={item} style={interestPillStyle}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={rightColStyle}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div style={skillsBoxStyle}>
              <p style={skillsHeadingStyle}>What I bring</p>
              <div style={skillsGridStyle}>
                {skills.map((skill) => (
                  <div key={skill} style={skillItemStyle}>
                    <span style={skillDotStyle} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div style={dividerStyle} />

        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p style={logosLabelStyle} variants={fadeUp} custom={0}>
            Where I have worked
          </motion.p>
          <div style={logosGridStyle}>
            {orgs.map((org, i) => (
              <motion.span
                key={org}
                style={orgNameStyle}
                variants={fadeUp}
                custom={i * 0.1}
                onMouseEnter={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.color = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.opacity = "0.6";
                  e.target.style.color = "var(--color-muted)";
                }}
              >
                {org}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

