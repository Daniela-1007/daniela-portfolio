import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pageStyle = {
  backgroundColor: "var(--color-bg)",
  minHeight: "100vh",
};

const navBarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  backgroundColor: "rgba(17,16,16,0.92)",
  backdropFilter: "blur(12px)",
  boxShadow: "0 1px 0 rgba(201,169,110,0.1)",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const backLinkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--color-muted)",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: "color 0.2s ease",
};

const logoStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.1rem",
  color: "var(--color-accent)",
  textDecoration: "none",
};

const contentStyle = {
  paddingTop: "5rem",
};

const footerStyle = {
  backgroundColor: "var(--color-surface)",
  borderTop: "1px solid var(--color-border)",
  padding: "2rem",
  display: "flex",
  justifyContent: "center",
};

const footerInnerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "1rem",
};

const navLinksStyle = {
  display: "flex",
  gap: "1.5rem",
  flexWrap: "wrap",
};

const navLinkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-muted)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

const projects = [
  { label: "Outlook Automation", path: "/projects/outlook" },
  { label: "Volunteer Page", path: "/projects/volunteer" },
  { label: "Health Portal Concept", path: "/projects/health-portal" },
  { label: "SPI Pharma", path: "/projects/spi-pharma" },
  { label: "HelpfulPet", path: "/projects/helpful-pet" },
];

export default function CaseStudyLayout({ children, currentPath }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentIndex = projects.findIndex((p) => p.path === currentPath);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div style={pageStyle}>
      <header style={navBarStyle}>
        <Link
          to="/#projects"
          style={backLinkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
        >
          ← Back to Projects
        </Link>
        <Link to="/" style={logoStyle}>
          Daniela Ordaz
        </Link>
      </header>

      <main style={contentStyle}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <nav
        style={{
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          padding: "3rem 2rem",
          display: "flex",
          justifyContent: "center",
        }}
        aria-label="Case study navigation"
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {prev ? (
            <Link
              to={prev.path}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "var(--color-muted)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
            >
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.6 }}>← Previous</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-text)" }}>{prev.label}</span>
            </Link>
          ) : <div />}

          <Link
            to="/#projects"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.775rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              textDecoration: "none",
              border: "1px solid var(--color-border)",
              padding: "0.6rem 1.25rem",
              borderRadius: "2px",
              transition: "color 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-muted)";
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            All Projects
          </Link>

          {next ? (
            <Link
              to={next.path}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "var(--color-muted)",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                alignItems: "flex-end",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
            >
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.6 }}>Next →</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-text)" }}>{next.label}</span>
            </Link>
          ) : <div />}
        </div>
      </nav>

      <footer style={footerStyle}>
        <div style={footerInnerStyle}>
          <Link to="/" style={logoStyle}>Daniela Ordaz</Link>
          <div style={navLinksStyle}>
            {projects.map((p) => (
              <Link
                key={p.path}
                to={p.path}
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

