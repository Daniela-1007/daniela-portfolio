import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const headerBase = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 50,
  transition: "background 0.3s ease, box-shadow 0.3s ease",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const logoStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.25rem",
  color: "var(--color-accent)",
  textDecoration: "none",
  letterSpacing: "0.01em",
};

const linkStyle = {
  color: "var(--color-muted)",
  textDecoration: "none",
  fontSize: "0.875rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  transition: "color 0.2s ease",
  fontFamily: "var(--font-sans)",
};

const ulStyle = {
  display: "flex",
  gap: "2rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle = {
    ...headerBase,
    backgroundColor: scrolled ? "rgba(17,16,16,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    boxShadow: scrolled ? "0 1px 0 rgba(201,169,110,0.1)" : "none",
  };

  function handleMouseEnter(e) {
    e.target.style.color = "var(--color-accent)";
  }

  function handleMouseLeave(e) {
    e.target.style.color = "var(--color-muted)";
  }

  return (
    <header role="banner" style={headerStyle}>
      <a href="#hero" aria-label="Back to top" style={logoStyle}>
        Daniela Ordaz
      </a>

      <nav role="navigation" aria-label="Main navigation">
        <ul style={ulStyle}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={linkStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
