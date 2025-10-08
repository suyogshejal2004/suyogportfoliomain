import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants"; // Make sure this path is correct

// UPDATED: Import icons for the action buttons
import { FaGithub, FaGooglePlay, FaNpm } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  const filteredProjects =
    activeFilter === "all"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeFilter);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  // GSAP animations remain the same as they are already great!
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.from(card, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 85%" },
        delay: index * 0.1,
      });
    });
    gsap.fromTo(
      ".filter-btn",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.7)",
        delay: 0.2,
      }
    );
  }, []);

  useGSAP(() => {
    gsap.to(".project-card", {
      opacity: 0,
      y: 30,
      duration: 0.4,
      stagger: 0.05,
      onComplete: () => {
        gsap.fromTo(
          ".project-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      },
    });
  }, [activeFilter, showAll]);

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "react-native",
      name: "React Native",
      count: projects.filter((p) => p.category === "react-native").length,
    },
    {
      id: "flutter",
      name: "Flutter",
      count: projects.filter((p) => p.category === "flutter").length,
    },
    {
      id: "npm",
      name: "NPM Packages",
      count: projects.filter((p) => p.category === "npm").length,
    },
    {
      id: "web",
      name: "Web Apps",
      count: projects.filter((p) => p.category === "web").length,
    },
  ].filter((c) => c.count > 0);

  const currentCategory = categories.find((c) => c.id === activeFilter);

  return (
    // UPDATED: Added relative and overflow-hidden for background glow effect
    <section
      id="work"
      ref={sectionRef}
      className="relative flex-center md:mt-40 mt-20 section-padding xl:px-0 overflow-hidden"
    >
      {/* UPDATED: Background glow element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-blue-900/20 blur-3xl rounded-full -z-10" />

      <div className="w-full h-full md:px-20 px-5">
        <div className="text-center mb-16">
          {/* UPDATED: Gradient text for the main header */}
          <h2 className="font-semibold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 mb-4">
            My Projects
          </h2>
          <p className="text-white-50 md:text-xl">
            🚀 A Collection of My Work Across Different Technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/20"
                  : "bg-gray-800/50 text-white-50 border-gray-700 hover:bg-gray-800 hover:border-gray-500 hover:-translate-y-0.5"
              }`}
            >
              {category.name}
              <span
                className={`ml-2 px-1.5 py-0.5 rounded text-xs transition-colors ${
                  activeFilter === category.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {/* UPDATED: Increased gap */}
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              // UPDATED: Enhanced card styling and hover effects
              className="project-card group bg-gray-800/40 rounded-xl border border-gray-700/80 transition-all duration-300 overflow-hidden hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="relative">
                <div className="h-44 bg-gray-900 flex items-center justify-center p-4 overflow-hidden">
                  {" "}
                  {/* UPDATED: Slightly taller image area */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="max-h-32 w-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"
                    onClick={() => setSelectedImage(project.image)}
                  />
                </div>
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-yellow-500/10 text-yellow-300 text-xs font-semibold rounded-full border border-yellow-500/30">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-white text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white-50 text-sm mb-4 line-clamp-3">
                    {" "}
                    {/* UPDATED: More clamp space */}
                    {project.description}
                  </p>
                </div>

                {/* UPDATED: Prettier tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-blue-900/30 text-blue-300 rounded-md text-xs font-medium border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-5 mt-auto">
                  {/* UPDATED: Buttons with icons */}
                  <div className="flex items-center gap-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gray-700/50 text-gray-200 text-sm rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.playStoreLink && (
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-green-500/20 text-green-300 text-sm rounded-lg hover:bg-green-500/30 transition-all duration-300 font-medium"
                      >
                        <FaGooglePlay /> Play Store
                      </a>
                    )}
                    {project.npmLink && (
                      <a
                        href={project.npmLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-purple-500/20 text-purple-300 text-sm rounded-lg hover:bg-purple-500/30 transition-all duration-300 font-medium"
                      >
                        <FaNpm /> NPM
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤷‍♂️</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Nothing to see here!
            </h3>
            <p className="text-white-50">
              No projects match the selected category... yet.
            </p>
          </div>
        )}

        {filteredProjects.length > 6 && !showAll && (
          <div className="text-center mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              View All {filteredProjects.length - 6} Projects
            </button>
          </div>
        )}
      </div>

      {/* UPDATED: Added smoother transition for modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={`transition-all duration-300 ease-in-out ${
              selectedImage ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Project Preview"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default AppShowcase;
