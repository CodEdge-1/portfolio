import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Process from "./components/Process";
import GitHubCTA from "./components/GitHubCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EmailModal from "./components/EmailModal";

function App() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const handleOpenEmail = () => setEmailModalOpen(true);

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <Navbar />
      <main>
        <Hero onOpenEmail={handleOpenEmail} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Process />
        <GitHubCTA />
        <Contact onOpenEmail={handleOpenEmail} />
      </main>
      <Footer onOpenEmail={handleOpenEmail} />
      <EmailModal
        isOpen={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
      />
    </div>
  );
}

export default App;
