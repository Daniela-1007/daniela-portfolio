import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import volunteerImg from "../../assets/images/volunteer-analytics.png";
import spiImg from "../../assets/images/spi-navigation.png";

const projects = [
  {
    id: 1,
    title: "Outlook Email Automation Tool",
    category: "Automation · Python · AI",
    description:
      "A Python-based workflow automation tool built for a Penn State professor. Connects to Outlook, scans incoming emails every 3 minutes via Windows Task Scheduler, and sorts them using keyword detection across subject lines, bodies, and sender addresses. For flagged categories, it calls the OpenAI API to generate a draft reply saved to Drafts with an [AUTO DRAFT] prefix — the user always reviews before sending. Includes edge-case handling to force-launch Outlook if closed, and a safety limit to prevent runaway automation.",
    tags: ["Python", "OpenAI API", "win32com", "Task Scheduler", "Automation"],
    type: "code",
    image: null,
    youtube: null,
    link: null,
  },
  {
    id: 2,
    title: "Volunteer Page Revamp",
    category: "UX Design · Research · Figma",
    description:
      "A full UX redesign of The Salvation Army's volunteer page. Starting from usability testing and user interviews, I identified friction points in the sign-up flow and information hierarchy. Delivered wireframes, prototypes, and a revised page layout that improved navigation clarity — with real analytics tracking improved engagement post-launch.",
    tags: ["Figma", "Usability Testing", "Wireframing", "UX Research", "Prototyping"],
    type: "design",
    image: volunteerImg,
    youtube: "https://youtu.be/O9t4Scj-vy8?si=wQYRRCC0kUtVh5br",
    link: null,
  },
  {
    id: 3,
    title: "Health Portal Redesign",
    category: "UX Design · Accessibility · Figma",
    description:
      "A research-to-prototype redesign of a student health portal. Conducted user interviews and journey mapping to surface pain points in appointment scheduling and records access. Designed accessible, WCAG-compliant prototypes in Figma focused on reducing cognitive load for users navigating a stressful experience.",
    tags: ["Figma", "Accessibility", "WCAG", "Journey Mapping", "User Research"],
    type: "design",
    image: null,
    youtube: "https://youtu.be/bFzBB-kWDvc?si=UfdHm_u3GNuH7HE",
    link: null,
  },
  {
    id: 4,
    title: "Navigation Revamp — SPI Pharma",
    category: "UX Design · Information Architecture",
    description:
      "An information architecture and navigation overhaul for SPI Pharma's website. Analyzed the existing navigation structure, identified findability issues, and redesigned the menu system to reduce clicks to key content. Delivered a full presentation of findings and redesign rationale to the marketing team.",
    tags: ["Information Architecture", "Figma", "UX Research", "Presentation"],
    type: "design",
    image: spiImg,
    youtube: "https://youtu.be/qClCKYDb7i4?si=VW3mPFgXPGfAU3B4",
    link: null,
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
  gap: "4rem",
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

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
  gap: "2rem",
};

export default function Projects() {
  return (
    <section id="projects" style={sectionStyle} aria-label="Projects">
      <div style={innerStyle}>
        <motion.div
          style={headerStyle}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p style={labelStyle}>Selected Work</p>
          <h2 style={headingStyle}>Projects that bridge design and code.</h2>
          <p style={subheadStyle}>
            A mix of UX research, interface design, and real engineering —
            each project built around a human problem worth solving.
          </p>
        </motion.div>

        <div style={gridStyle}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

