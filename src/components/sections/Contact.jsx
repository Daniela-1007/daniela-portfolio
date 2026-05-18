import { motion } from "framer-motion";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "danyordaz02@outlook.com",
    href: "mailto:danyordaz02@outlook.com",
    description: "Best way to reach me",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/daniela-ordaz",
    href: "https://www.linkedin.com/in/daniela-ordaz/",
    description: "Connect professionally",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Daniela-1007",
    href: "https://github.com/Daniela-1007",
    description: "See my code",
  },
  {
    id: "resume",
    label: "Resume",
    value: "Download PDF",
    href: "/Daniela_Ordaz_Resume_2026.pdf",
    download: true,
    description: "My full experience",
  },
];

const sectionStyle = {
  padding: "8rem 2rem",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "var(--color-bg)",
};

const innerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
};

const headerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "600px",
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

const cardBaseStyle = {
  backgroundColor: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "2rem",
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  transition: "border-color 0.25s ease, transform 0.25s ease",
  cursor: "pointer",
};

const cardLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.7rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const cardValueStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.1rem",
  color: "var(--color-text)",
  lineHeight: 1.3,
  wordBreak: "break-word",
};

const cardDescStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  color: "var(--color-muted)",
  marginTop: "auto",
};

const arrowStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.1rem",
  color: "var(--color-accent)",
  opacity: 0.5,
  alignSelf: "flex-end",
  transition: "opacity 0.2s ease, transform 0.2s ease",
};

const availabilityStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1.5rem 2rem",
  backgroundColor: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  maxWidth: "560px",
};

const dotPulseStyle = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#4ade80",
  flexShrink: 0,
  boxShadow: "0 0 8px rgba(74,222,128,0.6)",
};

const availabilityTextStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  color: "var(--color-muted)",
  lineHeight: 1.5,
};

const availabilityEmStyle = {
  color: "var(--color-text)",
  fontStyle: "normal",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "1.5rem",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: d },
  }),
};

export default function Contact() {
  function handleCardEnter(e) {
    e.currentTarget.style.borderColor = "rgba(201,169,110,0.4)";
    e.currentTarget.style.transform = "translateY(-3px)";
    const arrow = e.currentTarget.querySelector(".arrow");
    if (arrow) {
      arrow.style.opacity = "1";
      arrow.style.transform = "translate(2px, -2px)";
    }
  }

  function handleCardLeave(e) {
    e.currentTarget.style.borderColor = "var(--color-border)";
    e.currentTarget.style.transform = "translateY(0)";
    const arrow = e.currentTarget.querySelector(".arrow");
    if (arrow) {
      arrow.style.opacity = "0.5";
      arrow.style.transform = "translate(0, 0)";
    }
  }

  return (
    <section id="contact" style={sectionStyle} aria-label="Contact">
      <div style={innerStyle}>
        <motion.div
          style={headerStyle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p style={labelStyle}>Get In Touch</p>
          <h2 style={headingStyle}>
            Let's connect about UX Engineer, UX Design, or Front-End opportunities.
          </h2>
          <p style={subheadStyle}>
            I am currently open to full-time entry-level UX Engineer, UX Design,
            and Front-End Developer roles. Feel free to reach out — I would love
            to connect.
          </p>
        </motion.div>

        <motion.div
          style={availabilityStyle}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          <div style={dotPulseStyle} />
          <p style={availabilityTextStyle}>
            <em style={availabilityEmStyle}>Available for opportunities</em>
            {" "}— open to full-time entry-level and contract roles in UX Engineering,
            UX Design, and Front-End Development.
          </p>
        </motion.div>

        <div style={gridStyle}>
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.download ? "_self" : "_blank"}
              rel={link.download ? undefined : "noopener noreferrer"}
              download={link.download || undefined}
              style={cardBaseStyle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i * 0.1}
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
              aria-label={`${link.label} — ${link.value}`}
            >
              <p style={cardLabelStyle}>{link.label}</p>
              <p style={cardValueStyle}>{link.value}</p>
              <p style={cardDescStyle}>{link.description}</p>
              <span className="arrow" style={arrowStyle}>↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

