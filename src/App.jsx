import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";
import OutlookCaseStudy from "./pages/OutlookCaseStudy";
import VolunteerCaseStudy from "./pages/VolunteerCaseStudy";
import HealthPortalCaseStudy from "./pages/HealthPortalCaseStudy";
import SPICaseStudy from "./pages/SPICaseStudy";
import HelpfulPetCaseStudy from "./pages/HelpfulPetCaseStudy";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/outlook" element={<OutlookCaseStudy />} />
      <Route path="/projects/volunteer" element={<VolunteerCaseStudy />} />
      <Route path="/projects/health-portal" element={<HealthPortalCaseStudy />} />
      <Route path="/projects/spi-pharma" element={<SPICaseStudy />} />
      <Route path="/projects/helpful-pet" element={<HelpfulPetCaseStudy />} />
    </Routes>
  );
}

export default App;

