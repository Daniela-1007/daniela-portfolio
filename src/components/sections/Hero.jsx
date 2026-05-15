import { motion } from "framer-motion";
import profilePhoto from "../../assets/IST_2493.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: delay },
  }),
};

const sectionStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6rem 2rem 4rem",
  position: "relative",
  overflow: "hidden",
};

const innerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4rem",
  flexWrap: "wrap",
};

const textBlockStyle = {
  flex: "1 1 520px",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const eyebrowStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const headingStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.8rem, 6vw, 5rem)",
  lineHeight: 1.1,
  color: "var(--color-text)",
  margin: 0,
};

const taglineStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  lineHeight: 1.7,
  color: "var(--color-muted)",
  maxWidth: "480px",
  margin: 0,
};

const ctaRowStyle = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "0.5rem",
};

const primaryBtnStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "0.85rem 2rem",
  backgroundColor: "var(--color-accent)",
  color: "#111010",
  border: "none",
  borderRadius: "2px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "opacity 0.2s ease, transform 0.2s ease",
  display: "inline-block",
};

const secondaryBtnStyle = {
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
};

const photoWrapStyle = {
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const photoRingStyle = {
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  padding: "3px",
  background: "linear-gradient(135deg, var(--color-accent), transparent 60%)",
  boxShadow: "0 0 60px rgba(201,169,110,0.15)",
};

const photoImgStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "center top",
  display: "block",
};

const dividerStyle = {
  width: "48px",
  height: "1px",
  backgroundColor: "var(--color-accent)",
  opacity: 0.5,
};

export default function Hero() {
  function handlePrimaryHover(e) {
    e.target.style.opacity = "0.85";
    e.target.style.transform = "translateY(-1px)";
  }

  function handlePrimaryLeave(e) {
    e.target.style.opacity = "1";
    e.target.style.transform = "translateY(0)";
  }

  function handleSecondaryHover(e) {
    e.target.style.backgroundColor = "var(--color-accent)";
    e.target.style.color = "#111010";
  }

  function handleSecondaryLeave(e) {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "var(--color-accent)";
  }

  return (
    <section id="hero" style={sectionStyle} aria-label="Introduction">
      <div style={innerStyle}>
        <div style={textBlockStyle}>
          <motion.p
            style={eyebrowStyle}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            UX Engineer
          </motion.p>

          <motion.h1
            style={headingStyle}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
          >
            Hi, I am<br />Daniela Ordaz.
          </motion.h1>

          <motion.div
            style={dividerStyle}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
          />

          <motion.p
            style={taglineStyle}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
          >
            I design for humans, build for systems,<br />and research the space between.
          </motion.p>

          <motion.div
            style={ctaRowStyle}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <a
              href="#projects"
              style={primaryBtnStyle}
              onMouseEnter={handlePrimaryHover}
              onMouseLeave={handlePrimaryLeave}
            >
              View Projects
            </a>
            <a
              href="/Daniela_Ordaz_Resume_2026.pdf"
              download
              style={secondaryBtnStyle}
              onMouseEnter={handleSecondaryHover}
              onMouseLeave={handleSecondaryLeave}
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          style={photoWrapStyle}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div style={photoRingStyle}>
            <img
              src={profilePhoto}
              alt="Daniela Ordaz, UX Engineer"
              style={photoImgStyle}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

