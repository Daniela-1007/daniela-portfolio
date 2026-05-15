export const projects = [
  {
    id: 1,
    title: "Outlook Email Automation Tool",
    category: "Automation · Python · AI",
    description:
      "A Python-based workflow automation tool built for a Penn State professor. The system connects to the Outlook desktop app, scans incoming emails every 3 minutes via Windows Task Scheduler, and sorts them into categories using keyword detection across subject lines, email bodies, and sender addresses. For flagged categories, it connects to the OpenAI API to generate a context-aware draft reply — saved to Drafts with an [AUTO DRAFT] prefix so the user reviews before sending. Includes edge-case handling to force-launch Outlook if it is closed, and a safety limit to prevent runaway automation.",
    tags: ["Python", "OpenAI API", "win32com", "Task Scheduler", "Automation"],
    type: "code",
    codeSnippet: `rules = [
  {
    "folder": "School",
    "subject_keywords": ["canvas"],
    "sender_keywords": ["@psu.edu"],
    "draft_reply": False
  },
  {
    "folder": "Mom",
    "sender_keywords": ["carla"],
    "draft_reply": True
  },
]

def get_existing_or_start_outlook():
    try:
        outlook = win32com.client.GetActiveObject(
          "Outlook.Application"
        )
    except Exception:
        outlook = win32com.client.Dispatch(
          "Outlook.Application"
        )
        time.sleep(5)
    return outlook`,
    link: null,
    github: null,
  },
  {
    id: 2,
    title: "Volunteer Page Revamp",
    category: "UX Design · Research · Figma",
    description:
      "A full UX redesign of The Salvation Army's volunteer page. Starting from usability testing and user interviews, I identified friction points in the sign-up flow and information hierarchy. Delivered wireframes, prototypes, and a revised page layout that improved navigation clarity and increased volunteer form engagement.",
    tags: ["Figma", "Usability Testing", "Wireframing", "UX Research", "Prototyping"],
    type: "design",
    codeSnippet: null,
    link: "https://daniela-ordaz2025-portfolio.webflow.io/",
    github: null,
  },
  {
    id: 3,
    title: "Health Portal Redesign",
    category: "UX Design · Accessibility · Research",
    description:
      "A research-to-prototype redesign of a student health portal. Conducted user interviews and journey mapping to surface pain points in appointment scheduling and records access. Designed accessible, WCAG-compliant prototypes in Figma with a focus on reducing cognitive load for users navigating a stressful experience.",
    tags: ["Figma", "Accessibility", "WCAG", "Journey Mapping", "User Research"],
    type: "design",
    codeSnippet: null,
    link: "https://daniela-ordaz2025-portfolio.webflow.io/",
    github: null,
  },
  {
    id: 4,
    title: "Navigation Revamp",
    category: "UX Design · Information Architecture",
    description:
      "An information architecture and navigation overhaul for an existing web product. Used card sorting and tree testing to restructure the navigation system, reducing the number of clicks to reach key content and improving findability scores in follow-up usability tests.",
    tags: ["Information Architecture", "Card Sorting", "Tree Testing", "Figma", "UX Research"],
    type: "design",
    codeSnippet: null,
    link: "https://daniela-ordaz2025-portfolio.webflow.io/",
    github: null,
  },
];

