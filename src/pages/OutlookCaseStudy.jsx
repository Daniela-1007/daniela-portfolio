import CaseStudyLayout from "../components/layout/CaseStudyLayout";
import workflowImg from "../assets/Images/outlook-workflow.png";
import draftsImg from "../assets/Images/outlook-drafts.png";
import schedulerImg from "../assets/Images/outlook-scheduler.png";
import scheduler2Img from "../assets/Images/outlook-scheduler-2.png";
import connectionImg from "../assets/Images/outlook-connection.png";

const heroStyle = {
  backgroundColor: "var(--color-surface)",
  borderBottom: "1px solid var(--color-border)",
  padding: "5rem 2rem 4rem",
  display: "flex",
  justifyContent: "center",
};

const heroInnerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const categoryStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const titleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  color: "var(--color-text)",
  margin: 0,
  lineHeight: 1.1,
};

const summaryStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "1.1rem",
  lineHeight: 1.8,
  color: "var(--color-muted)",
  maxWidth: "680px",
  margin: 0,
};

const metaStripStyle = {
  display: "flex",
  gap: "3rem",
  flexWrap: "wrap",
  paddingTop: "1.5rem",
  borderTop: "1px solid var(--color-border)",
};

const metaItemStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
};

const metaLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.68rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const metaValueStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.9rem",
  color: "var(--color-text)",
};

const sectionStyle = {
  padding: "5rem 2rem",
  display: "flex",
  justifyContent: "center",
};

const altSectionStyle = {
  ...sectionStyle,
  backgroundColor: "var(--color-surface)",
};

const sectionInnerStyle = {
  maxWidth: "1100px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2.5rem",
};

const sectionLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const sectionHeadingStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
  color: "var(--color-text)",
  margin: 0,
  lineHeight: 1.2,
};

const bodyTextStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "1rem",
  lineHeight: 1.85,
  color: "var(--color-muted)",
  maxWidth: "720px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "6px",
  border: "1px solid var(--color-border)",
  display: "block",
  objectFit: "contain",
  backgroundColor: "var(--color-bg)",
};

const imageCaptionStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.8rem",
  color: "var(--color-muted)",
  fontStyle: "italic",
  marginTop: "0.75rem",
  opacity: 0.7,
};

const twoColStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
  gap: "2rem",
};

const stepCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "1.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const stepNumStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "2rem",
  color: "var(--color-accent)",
  opacity: 0.4,
  lineHeight: 1,
};

const stepTitleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1.1rem",
  color: "var(--color-text)",
};

const stepBodyStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  lineHeight: 1.75,
  color: "var(--color-muted)",
};

const tagRowStyle = {
  display: "flex",
  gap: "0.5rem",
  flexWrap: "wrap",
};

const tagStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.75rem",
  color: "var(--color-muted)",
  border: "1px solid var(--color-border)",
  borderRadius: "100px",
  padding: "0.3rem 0.85rem",
};

const challengeCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderLeft: "3px solid var(--color-accent)",
  borderRadius: "0 6px 6px 0",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const challengeTitleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1rem",
  color: "var(--color-text)",
};

const outcomeRowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "1.5rem",
};

const outcomeCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "1.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const outcomeIconStyle = {
  fontSize: "1.5rem",
};

const outcomeTitleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1rem",
  color: "var(--color-accent)",
};

const outcomeBodyStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.875rem",
  lineHeight: 1.7,
  color: "var(--color-muted)",
};

export default function OutlookCaseStudy() {
  return (
    <CaseStudyLayout currentPath="/projects/outlook">
      <div style={heroStyle}>
        <div style={heroInnerStyle}>
          <p style={categoryStyle}>Automation · Python · AI · Real-World Deployment</p>
          <h1 style={titleStyle}>Outlook Email<br />Automation Tool</h1>
          <p style={summaryStyle}>
            A Python-based automation system that connects to Microsoft Outlook,
            sorts incoming emails using rule-based and AI-assisted categorization,
            and generates draft replies using the OpenAI API — all running
            automatically every 3 minutes via Windows Task Scheduler. Built for
            a Penn State professor and deployed in a real working environment.
          </p>
          <div style={metaStripStyle}>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>My Role</span>
              <span style={metaValueStyle}>Sole Developer</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Timeline</span>
              <span style={metaValueStyle}>Jan 2026 – Apr 2026</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Tools</span>
              <span style={metaValueStyle}>Python · OpenAI API · win32com · Task Scheduler</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Status</span>
              <span style={metaValueStyle}>Deployed & In Use</span>
            </div>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Overview</p>
          <h2 style={sectionHeadingStyle}>The Problem</h2>
          <p style={bodyTextStyle}>
            Managing a high volume of daily emails is a time-consuming task,
            especially when those emails span multiple categories — academic,
            personal, professional, and automated notifications. My professor
            needed a system that could intelligently sort incoming emails and
            even draft replies for certain categories, without requiring constant
            manual attention.
          </p>
          <p style={bodyTextStyle}>
            The challenge was building something that worked reliably in a real
            desktop environment, integrated with an existing email client, and
            kept the human in control — never sending anything automatically
            without review.
          </p>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>System Design</p>
          <h2 style={sectionHeadingStyle}>Complete Workflow</h2>
          <p style={bodyTextStyle}>
            Before writing a single line of code, I mapped out the complete
            system architecture. The diagram below shows all 12 steps from
            the scheduler trigger to the final draft creation, including
            decision points, safety limits, and the AI categorization fallback.
          </p>
          <div>
            <img src={workflowImg} alt="Complete workflow diagram for the Outlook Email Automation Tool" style={imageStyle} />
            <p style={imageCaptionStyle}>Complete 12-step workflow diagram showing the full automation pipeline, decision logic, and safety features.</p>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>How It Works</p>
          <h2 style={sectionHeadingStyle}>Step by Step</h2>
          <div style={twoColStyle}>
            {[
              {
                num: "01",
                title: "Scheduler Trigger",
                body: "Windows Task Scheduler runs the Python script every 3 minutes automatically — even if Outlook is closed. If Outlook is not open, the script forces it to launch before continuing.",
              },
              {
                num: "02",
                title: "Connect to Outlook",
                body: "Uses win32com.client to connect to the classic Outlook desktop app via Windows COM automation, accessing the MAPI namespace and default inbox.",
              },
              {
                num: "03",
                title: "Rule-Based Classification",
                body: "Each unread email is checked against a priority-ordered set of rules — matching sender email addresses, subject line keywords, and body keywords to assign a category.",
              },
              {
                num: "04",
                title: "AI Categorization Fallback",
                body: "If no rule matches, the email content is sent to the OpenAI API for intelligent categorization. This handles vague or unexpected emails that keyword rules would miss.",
              },
              {
                num: "05",
                title: "Move to Folder",
                body: "Once categorized, the email is moved to the correct Outlook folder — Mom, School, Jobs, Cards, or No Reply. Folders are created automatically if they do not exist.",
              },
              {
                num: "06",
                title: "AI Draft Reply",
                body: "For emails in the Mom category only, the OpenAI API generates a warm, natural draft reply. The draft is saved with an [AUTO DRAFT] prefix — the user must review and send it manually.",
              },
            ].map((step) => (
              <div key={step.num} style={stepCardStyle}>
                <span style={stepNumStyle}>{step.num}</span>
                <p style={stepTitleStyle}>{step.title}</p>
                <p style={stepBodyStyle}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Visuals</p>
          <h2 style={sectionHeadingStyle}>The System in Action</h2>
          <div>
            <img src={draftsImg} alt="Outlook drafts folder showing an AUTO DRAFT email generated by the system" style={imageStyle} />
            <p style={imageCaptionStyle}>The Outlook Drafts folder showing an [AUTO DRAFT] reply generated by the OpenAI API — ready for human review before sending.</p>
          </div>
          <div style={twoColStyle}>
            <div>
              <img src={connectionImg} alt="Python script successfully connecting to Outlook" style={imageStyle} />
              <p style={imageCaptionStyle}>The Python script successfully establishing a connection to the Outlook desktop application via win32com.</p>
            </div>
            <div>
              <img src={schedulerImg} alt="Windows Task Scheduler configured to run the automation script" style={imageStyle} />
              <p style={imageCaptionStyle}>Windows Task Scheduler configured to run the automation script on a repeating schedule.</p>
            </div>
          </div>
          <div>
            <img src={scheduler2Img} alt="Task Scheduler trigger settings showing 3-minute repeat interval" style={imageStyle} />
            <p style={imageCaptionStyle}>Task Scheduler trigger settings — the script runs every 3 minutes, simulating near real-time email processing.</p>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Engineering Challenges</p>
          <h2 style={sectionHeadingStyle}>What Did Not Work the First Time</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              {
                title: "Outlook Version Compatibility",
                body: "The newer version of Outlook does not fully support win32com automation. I had to switch back to classic Outlook before the connection scripts worked correctly — a non-obvious environment issue that took significant debugging to identify.",
              },
              {
                title: "OpenAI API Environment Variables",
                body: "The AI reply script kept failing because Python could not find the API key. The code was correct but the .env file was not set up properly. I had to learn how to load environment variables into Python before the AI features would run.",
              },
              {
                title: "Draft Visibility in Outlook",
                body: "Drafts were being created but were hard to locate because Outlook was not sorting them as expected. What looked like a code failure was actually an Outlook behavior issue — a reminder that debugging means understanding the full system, not just the code.",
              },
              {
                title: "Keyword Rules Were Too Rigid",
                body: "Early keyword matching failed on vague emails. This led to integrating AI categorization as a fallback — a design decision that made the system significantly more robust and generalizable.",
              },
            ].map((c) => (
              <div key={c.title} style={challengeCardStyle}>
                <p style={challengeTitleStyle}>{c.title}</p>
                <p style={stepBodyStyle}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Outcome</p>
          <h2 style={sectionHeadingStyle}>Results & Reflections</h2>
          <div style={outcomeRowStyle}>
            {[
              {
                icon: "✅",
                title: "Deployed in a Real Environment",
                body: "The tool ran successfully for both my professor and myself. My sister has since requested the same setup for her own computer — an organic signal that the tool solves a real problem.",
              },
              {
                icon: "🔒",
                title: "Human Oversight by Design",
                body: "No email is ever sent automatically. Every AI-generated draft requires manual review before sending — a deliberate safety decision that keeps the user in control.",
              },
              {
                icon: "🧠",
                title: "What I Would Do Differently",
                body: "I would plan the architecture more carefully upfront, add better logging and error handling earlier, and start with a hybrid rule + AI classification system from the beginning.",
              },
              {
                icon: "📈",
                title: "What I Learned",
                body: "Integrating multiple technologies is harder than writing any single piece of code. Testing in isolation first, then combining, is the only reliable way to build complex systems.",
              },
            ].map((o) => (
              <div key={o.title} style={outcomeCardStyle}>
                <span style={outcomeIconStyle}>{o.icon}</span>
                <p style={outcomeTitleStyle}>{o.title}</p>
                <p style={outcomeBodyStyle}>{o.body}</p>
              </div>
            ))}
          </div>
          <div style={tagRowStyle}>
            {["Python", "OpenAI API", "win32com", "Windows Task Scheduler", "Automation", "Email Triage", "AI Integration"].map((t) => (
              <span key={t} style={tagStyle}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
}

