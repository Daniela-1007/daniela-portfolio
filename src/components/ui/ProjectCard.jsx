import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardStyle = {
  backgroundColor: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  transition: "border-color 0.3s ease, transform 0.3s ease",
};

const imageWrapStyle = {
  width: "100%",
  height: "220px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "var(--color-bg)",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
  display: "block",
  transition: "transform 0.4s ease",
};

const codePreviewStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#0d1117",
  padding: "1.5rem",
  overflow: "hidden",
  boxSizing: "border-box",
};

const codeLineStyle = {
  fontFamily: "'Courier New', monospace",
  fontSize: "0.72rem",
  lineHeight: 1.7,
  whiteSpace: "pre",
  overflow: "hidden",
};

const bodyStyle = {
  padding: "1.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  flex: 1,
};

const categoryStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.7rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const titleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.35rem",
  color: "var(--color-text)",
  margin: 0,
  lineHeight: 1.3,
};

const descStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  lineHeight: 1.75,
  color: "var(--color-muted)",
  margin: 0,
};

const tagsRowStyle = {
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
};

const tagStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.7rem",
  color: "var(--color-muted)",
  border: "1px solid var(--color-border)",
  borderRadius: "100px",
  padding: "0.25rem 0.75rem",
  letterSpacing: "0.04em",
};

const footerStyle = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "auto",
  paddingTop: "0.5rem",
};

const primaryLinkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.775rem",
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#111010",
  textDecoration: "none",
  backgroundColor: "var(--color-accent)",
  borderRadius: "2px",
  padding: "0.5rem 1.1rem",
  transition: "opacity 0.2s ease",
  display: "inline-block",
};

const secondaryLinkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.775rem",
  fontWeight: 500,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
  textDecoration: "none",
  border: "1px solid var(--color-accent)",
  borderRadius: "2px",
  padding: "0.5rem 1.1rem",
  transition: "background 0.2s ease, color 0.2s ease",
  display: "inline-block",
};

const codeLines = [
  { text: "rules = [", color: "#e6edf3" },
  { text: '  { "folder": "School",', color: "#79c0ff" },
  { text: '    "sender_keywords": ["@psu.edu"],', color: "#a5d6ff" },
  { text: '    "draft_reply": False },', color: "#a5d6ff" },
  { text: '  { "folder": "Mom",', color: "#79c0ff" },
  { text: '    "sender_keywords": ["carla"],', color: "#a5d6ff" },
  { text: '    "draft_reply": True },', color: "#7ee787" },
  { text: "]", color: "#e6edf3" },
  { text: "", color: "#e6edf3" },
  { text: "def get_or_start_outlook():", color: "#d2a8ff" },
  { text: "    try:", color: "#e6edf3" },
  { text: '        outlook = GetActiveObject(', color: "#ffa657" },
  { text: '          "Outlook.Application"', color: "#a5d6ff" },
  { text: "        )", color: "#ffa657" },
  { text: "    except Exception:", color: "#e6edf3" },
  { text: '        outlook = Dispatch(', color: "#ffa657" },
  { text: '          "Outlook.Application"', color: "#a5d6ff" },
  { text: "        )", color: "#ffa657" },
  { text: "        time.sleep(5)", color: "#e6edf3" },
  { text: "    return outlook", color: "#e6edf3" },
];

export default function ProjectCard({ project }) {
  function handleCardEnter(e) {
    e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)";
    e.currentTarget.style.transform = "translateY(-4px)";
  }

  function handleCardLeave(e) {
    e.currentTarget.style.borderColor = "var(--color-border)";
    e.currentTarget.style.transform = "translateY(0)";
  }

  function handleImgEnter(e) {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1.04)";
  }

  function handleImgLeave(e) {
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "scale(1)";
  }

  function handleSecondaryEnter(e) {
    e.target.style.backgroundColor = "var(--color-accent)";
    e.target.style.color = "#111010";
  }

  function handleSecondaryLeave(e) {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "var(--color-accent)";
  }

  function handlePrimaryEnter(e) {
    e.target.style.opacity = "0.85";
  }

  function handlePrimaryLeave(e) {
    e.target.style.opacity = "1";
  }

  return (
    <motion.div
      style={cardStyle}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div
        style={imageWrapStyle}
        onMouseEnter={project.image ? handleImgEnter : undefined}
        onMouseLeave={project.image ? handleImgLeave : undefined}
      >
        {project.type === "code" ? (
          <div style={codePreviewStyle}>
            {codeLines.map((line, i) => (
              <div key={i} style={{ ...codeLineStyle, color: line.color }}>
                {line.text}
              </div>
            ))}
          </div>
        ) : project.image ? (
          <img src={project.image} alt={project.title} style={imageStyle} />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--color-bg)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                color: "var(--color-border)",
                letterSpacing: "0.1em",
              }}
            >
              Case Study
            </span>
          </div>
        )}
      </div>

      <div style={bodyStyle}>
        <p style={categoryStyle}>{project.category}</p>
        <h3 style={titleStyle}>{project.title}</h3>
        <p style={descStyle}>{project.description}</p>

        <div style={tagsRowStyle}>
          {project.tags.map((tag) => (
            <span key={tag} style={tagStyle}>{tag}</span>
          ))}
        </div>

        <div style={footerStyle}>
          {project.caseStudy && (
            <Link
              to={project.caseStudy}
              style={primaryLinkStyle}
              onMouseEnter={handlePrimaryEnter}
              onMouseLeave={handlePrimaryLeave}
            >
              View Case Study
            </Link>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={secondaryLinkStyle}
              onMouseEnter={handleSecondaryEnter}
              onMouseLeave={handleSecondaryLeave}
            >
              {project.type === "code" ? "View on GitHub ↗" : "View Live Site ↗"}
            </a>
          )}
          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={secondaryLinkStyle}
              onMouseEnter={handleSecondaryEnter}
              onMouseLeave={handleSecondaryLeave}
            >
              Watch Walkthrough
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

