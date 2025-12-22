import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyJourney from "./pages/MyJourney";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import TechnicalSkills from "./pages/TechnicalSkills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} />

        <main>
          <Home />
          <About />
          <MyJourney />
          <TechnicalSkills />
          <Skills />
          <Projects />

          <Experience />

          <Contact />
        </main>

        <Footer />
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 rounded-full bg-purple-600 p-3 text-white shadow-lg hover:bg-purple-700 transition"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}
