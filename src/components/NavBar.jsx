import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // ... (no changes in this useEffect)
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // ... (no changes in this useEffect for scroll lock)
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    if (showResume) {
      htmlElement.style.overflow = 'hidden';
      bodyElement.style.overflow = 'hidden';
    } else {
      htmlElement.style.overflow = 'auto';
      bodyElement.style.overflow = 'auto';
    }
    return () => {
      htmlElement.style.overflow = 'auto';
      bodyElement.style.overflow = 'auto';
    };
  }, [showResume]);

  const handleNavClick = (event, id) => {
    // ... (no changes in this function)
    if (id === "resume-trigger") {
      event.preventDefault();
      setShowResume(true);
    } else {
      setShowResume(false);
    }
  };

  // NEW: A robust function to handle the file download
const handleDownload = () => {
    const pdfUrl = "/images/project/resumesuyog.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Suyog_Shejal_Resume.pdf"; // This is the file name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        {/* ... (no changes in the header JSX) ... */}
        <div className="inner">
          <a href="#hero" className="logo">
            Suyog Shejal
          </a>
          <nav className="desktop">
            <ul>
              {navLinks.map(({ link, name, id }) => (
                <li key={name} className="group">
                  <a href={link} onClick={(e) => handleNavClick(e, id)}>
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className="contact-btn group" onClick={() => setShowResume(false)}>
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </header>

      {showResume && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-2 sm:p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-2xl w-full max-w-4xl h-[95vh] sm:h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-3 sm:p-4 border-b border-gray-700 flex-shrink-0">
              <h3 className="text-white font-semibold text-base sm:text-lg">My Resume</h3>
              <div className="flex items-center gap-2 sm:gap-4">
                
                {/* UPDATED: Changed from an <a> tag to a <button> that calls handleDownload */}
                {/* <button
                  onClick={handleDownload}
                  className="px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Download
                </button> */}

                <button
                  onClick={() => setShowResume(false)}
                  className="text-gray-400 hover:text-white text-2xl sm:text-3xl font-light leading-none"
                >
                  &times;
                </button>
              </div>
            </div>
            <div className="flex-grow p-1 sm:p-2">
              <iframe
                src="/images/project/resumesuyog.pdf#toolbar=0"
                className="w-full h-full border-0 rounded-b-lg"
                title="Suyog Shejal's Resume"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;