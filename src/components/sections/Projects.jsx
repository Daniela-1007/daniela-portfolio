import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import volunteerImg from "../../assets/Images/volunteer-analytics.png";
import spiImg from "../../assets/Images/spi-navigation.png";
import healthOverviewImg from "../../assets/Images/health-overview.png";
import helpfulPetImg from "../../assets/Images/helpfulpet-home.png";

const projects = [
  {
    id: 1,
    title: "Outlook Email Automation Tool",
    category: "Automation · Python · AI",
    description:
      "Built a Python-based email automation tool for a Penn State professor to organize Outlook emails using sender rules, keyword detection, and scheduled processing. Integrated the OpenAI API to generate draft replies for review, with safeguards to keep the user in control before sending.",
    tags: ["Python", "OpenAI API", "win32com", "Task Scheduler", "Automation"],
    type: "code",
    image: null,
    youtube: null,
    link: "https://github.com/Daniela-1007/outlook-automation-",
    caseStudy: "/projects/outlook",
  },
  {
    id: 2,
    title: "Volunteer Page Revamp",
    category: "UX Design · Research · Figma",
    description:
      "Redesigned The Salvation Army's volunteer page by conducting a page audit and 10–15 user interviews to identify content gaps. Built the redesign using HTML, CSS, and Zesty.io CMS — adding new sections, imagery, and the organizational values that prospective volunteers look for.",
    tags: ["Figma", "Usability Testing", "Wireframing", "UX Research", "HTML & CSS", "Zesty.io"],
    type: "design",
    image: volunteerImg,
    youtube: "https://youtu.be/O9t4Scj-vy8?si=wQYRRCC0kUtVh5br",
    link: null,
    caseStudy: "/projects/volunteer",
  },
  {
    id: 3,
    title: "Health Portal Concept",
    category: "UX Design · Accessibility · Figma",
    description:
      "An original research-to-prototype design of a mobile health portal helping users manage doctors, appointments, medical records, and insurance in one place. Conducted user interviews, created personas and user flows, ran usability tests, and designed an accessible high-fidelity Figma prototype.",
    tags: ["Figma", "Accessibility", "User Research", "Usability Testing", "Mobile Design"],
    type: "design",
    image: healthOverviewImg,
    youtube: "https://youtu.be/bFzBB-kWDvc?si=UfdHm_u3GNuH7HE",
    link: null,
    caseStudy: "/projects/health-portal",
  },
  {
    id: 4,
    title: "Navigation Revamp — SPI Pharma",
    category: "UX Design · Information Architecture",
    description:
      "As sole UX designer at SPI Pharma, used Google Analytics and tree testing to identify navigation findability issues. Redesigned the cascading dropdown into a structured navigation system and presented findings to the marketing team.",
    tags: ["Information Architecture", "Google Analytics", "Tree Testing", "Figma"],
    type: "design",
    image: spiImg,
    youtube: "https://youtu.be/qClCKYDb7i4?si=VW3mPFgXPGfAU3B4",
    link: null,
    caseStudy: "/projects/spi-pharma",
  },
  {
    id: 5,
    title: "HelpfulPet — E-Commerce Web App",
    category: "Full-Stack Development · Node.js · Express",
    description:
      "A full-stack e-commerce web application for pet travel accessories built with Node.js and Express. Features product browsing with live filtering, individual product pages, a persistent localStorage cart, free shipping logic, checkout, and order confirmation — all server-side rendered with EJS.",
    tags: ["Node.js", "Express.js", "EJS", "JavaScript", "CSS", "localStorage"],
    type: "design",
    image: helpfulPetImg,
    youtube: null,
    link: "https://helpful-pet.onrender.com",
    caseStudy: "/projects/helpful-pet",
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

