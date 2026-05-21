import CaseStudyLayout from "../components/layout/CaseStudyLayout";
import homeImg from "../assets/Images/helpfulpet-home.png";
import shopImg from "../assets/Images/helpfulpet-shop.png";
import detailsImg from "../assets/Images/helpfulpet-details.png";
import cartImg from "../assets/Images/helpfulpet-cart.png";
import confirmationImg from "../assets/Images/helpfulpet-confirmation.png";

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

const outcomeCardStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "6px",
  padding: "1.75rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
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

const techTableStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
};

const techItemStyle = {
  backgroundColor: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  borderRadius: "4px",
  padding: "1rem 1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
};

const techLabelStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "0.68rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--color-accent)",
};

const techValueStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "1rem",
  color: "var(--color-text)",
};

const liveBtnStyle = {
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
  transition: "opacity 0.2s ease",
  display: "inline-block",
  alignSelf: "flex-start",
};

const githubBtnStyle = {
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
  alignSelf: "flex-start",
};

export default function HelpfulPetCaseStudy() {
  return (
    <CaseStudyLayout currentPath="/projects/helpful-pet">
      <div style={heroStyle}>
        <div style={heroInnerStyle}>
          <p style={categoryStyle}>Full-Stack Development · Node.js · Express · E-Commerce</p>
          <h1 style={titleStyle}>HelpfulPet —<br />E-Commerce Web App</h1>
          <p style={summaryStyle}>
            A full-stack e-commerce web application for pet travel accessories,
            built from scratch using Node.js and Express. Features a complete
            shopping flow from product browsing and filtering to cart management
            and order confirmation — all without a database, using server-side
            rendering with EJS templates.
          </p>
          <div style={metaStripStyle}>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>My Role</span>
              <span style={metaValueStyle}>Sole Developer & Designer</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Context</span>
              <span style={metaValueStyle}>Academic Project — rebuilt independently</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Stack</span>
              <span style={metaValueStyle}>Node.js · Express · EJS · JavaScript · CSS</span>
            </div>
            <div style={metaItemStyle}>
              <span style={metaLabelStyle}>Status</span>
              <span style={metaValueStyle}>Live on Render</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="https://helpful-pet.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              style={liveBtnStyle}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              View Live Site ↗
            </a>
            <a
              href="https://github.com/Daniela-1007/helpful-pet"
              target="_blank"
              rel="noopener noreferrer"
              style={githubBtnStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "var(--color-accent)";
                e.target.style.color = "#111010";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "var(--color-accent)";
              }}
            >
              View on GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Overview</p>
          <h2 style={sectionHeadingStyle}>A complete shopping experience, built from scratch</h2>
          <p style={bodyTextStyle}>
            HelpfulPet is a full-stack e-commerce website for pet travel
            accessories — carriers, portable beds, feeding gear, strollers,
            and safety products for cats and dogs. The project started as a
            class assignment but was rebuilt entirely independently after
            recovering from a concussion mid-semester.
          </p>
          <p style={bodyTextStyle}>
            Rather than using a database, product data is stored as a
            JavaScript array on the server and passed dynamically into EJS
            templates at request time. The cart is managed on the client side
            using localStorage, making it persistent across page navigation
            without requiring a backend session.
          </p>
          <div>
            <img src={homeImg} alt="HelpfulPet homepage showing hero section and shop by category" style={imageStyle} />
            <p style={imageCaptionStyle}>HelpfulPet homepage — warm earthy brand identity with clear CTAs for browsing by pet type.</p>
          </div>
        </div>
      </div>

      <div style={sectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Technical Stack</p>
          <h2 style={sectionHeadingStyle}>How it is built</h2>
          <div style={techTableStyle}>
            {[
              { label: "Runtime", value: "Node.js" },
              { label: "Framework", value: "Express.js" },
              { label: "Templating", value: "EJS" },
              { label: "Styling", value: "Vanilla CSS" },
              { label: "Cart Logic", value: "JavaScript + localStorage" },
              { label: "Version Control", value: "Git + GitHub" },
            ].map((item) => (
              <div key={item.label} style={techItemStyle}>
                <span style={techLabelStyle}>{item.label}</span>
                <span style={techValueStyle}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Features</p>
          <h2 style={sectionHeadingStyle}>What was built</h2>
          <div style={twoColStyle}>
            {[
              {
                num: "01",
                title: "Product Filtering",
                body: "Users can filter by pet type (cats/dogs) and category using URL query parameters. Express reads req.query and filters the product array before passing results to the EJS template — no database needed.",
              },
              {
                num: "02",
                title: "Product Detail Pages",
                body: "Each product has its own detail page with a quantity selector and Add to Cart button. Routes are handled dynamically by Express using the product ID from the URL.",
              },
              {
                num: "03",
                title: "Persistent Cart",
                body: "The cart is stored in localStorage as a JSON string. It persists across page navigation and updates the cart count in the sticky header in real time.",
              },
              {
                num: "04",
                title: "Free Shipping Logic",
                body: "Orders over $50 get free shipping automatically. Orders under $50 are charged $5.99. The logic runs on the cart page and updates the order summary dynamically.",
              },
              {
                num: "05",
                title: "Checkout & Confirmation",
                body: "A full checkout form collects shipping and payment details. On submission, an order confirmation page is generated with a random order number and the cart is reset automatically.",
              },
              {
                num: "06",
                title: "Responsive Design",
                body: "The layout adapts to mobile screens using CSS custom properties and a consistent design system built with Playfair Display headings and DM Sans body text.",
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
          <p style={sectionLabelStyle}>Screens</p>
          <h2 style={sectionHeadingStyle}>The full shopping flow</h2>
          <div>
            <img src={shopImg} alt="HelpfulPet shop page showing product grid with filter sidebar" style={imageStyle} />
            <p style={imageCaptionStyle}>Shop page — product grid with live filtering by pet type and category via URL query parameters.</p>
          </div>
          <div style={twoColStyle}>
            <div>
              <img src={detailsImg} alt="HelpfulPet product detail page with quantity selector and add to cart" style={imageStyle} />
              <p style={imageCaptionStyle}>Product detail page — quantity selector and Add to Cart button with animated toast notification.</p>
            </div>
            <div>
              <img src={cartImg} alt="HelpfulPet cart page showing order summary and free shipping threshold" style={imageStyle} />
              <p style={imageCaptionStyle}>Cart page — dynamic order total, free shipping threshold logic, and quantity editing.</p>
            </div>
          </div>
          <div>
            <img src={confirmationImg} alt="HelpfulPet order confirmation page with generated order number" style={imageStyle} />
            <p style={imageCaptionStyle}>Order confirmation page — randomly generated order number, estimated delivery, and automatic cart reset.</p>
          </div>
        </div>
      </div>

      <div style={altSectionStyle}>
        <div style={sectionInnerStyle}>
          <p style={sectionLabelStyle}>Outcome</p>
          <h2 style={sectionHeadingStyle}>What I learned</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                icon: "🖥️",
                title: "Server-side rendering",
                body: "Building with EJS and Express gave me a clear understanding of how the server generates and sends complete HTML pages — and when that approach is more appropriate than a frontend framework.",
              },
              {
                icon: "🛒",
                title: "Client-side state management",
                body: "Managing cart state with localStorage across multiple pages without a framework or database taught me the fundamentals of client-side persistence and JSON serialization.",
              },
              {
                icon: "🎨",
                title: "Design to code without Figma",
                body: "Starting from a paper sketch and designing directly in CSS pushed me to make decisions in the browser — building the design system with CSS custom properties as I went.",
              },
              {
                icon: "💪",
                title: "Rebuilt independently",
                body: "Originally a class project, I rebuilt the entire application on my own after recovering from a concussion. Completing it independently gave me a much deeper understanding of every part of the codebase.",
              },
            ].map((o) => (
              <div key={o.title} style={outcomeCardStyle}>
                <span style={{ fontSize: "1.5rem" }}>{o.icon}</span>
                <p style={outcomeTitleStyle}>{o.title}</p>
                <p style={outcomeBodyStyle}>{o.body}</p>
              </div>
            ))}
          </div>
          <div style={tagRowStyle}>
            {["Node.js", "Express.js", "EJS", "JavaScript", "CSS", "localStorage", "REST Routes", "Server-Side Rendering", "Git", "Render"].map((t) => (
              <span key={t} style={tagStyle}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </CaseStudyLayout>
  );
}

