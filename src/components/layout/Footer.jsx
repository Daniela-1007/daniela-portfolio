const footerStyle = {
  backgroundColor: "var(--color-surface)",
  borderTop: "1px solid var(--color-border)",
  padding: "3rem 2rem",
  display: "flex",
  justifyContent: "center",
};

const innerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "1.5rem",
};

const nameStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.1rem",
  color: "var(--color-accent)",
  textDecoration: "none",
};

const navStyle = {
  display: "flex",
  gap: "1.5rem",
  flexWrap: "wrap",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const linkStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.775rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-muted)",
  textDecoration: "none",
  transition: "color 0.2s ease",
};

const copyrightStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.775rem",
  color: "var(--color-muted)",
  opacity: 0.5,
  width: "100%",
  textAlign: "center",
  paddingTop: "1.5rem",
  borderTop: "1px solid var(--color-border)",
};

const footerLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  function handleEnter(e) {
    e.target.style.color = "var(--color-accent)";
  }

  function handleLeave(e) {
    e.target.style.color = "var(--color-muted)";
  }

  return (
    <footer role="contentinfo" style={footerStyle}>
      <div style={innerStyle}>
        <a href="#hero" style={nameStyle} aria-label="Back to top">
          Daniela Ordaz
        </a>

        <nav aria-label="Footer navigation">
          <ul style={navStyle}>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p style={copyrightStyle}>
          &copy; {year} Daniela Ordaz &mdash; Designed and built with React &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}

