import { useEffect, useRef, useState } from "react";
import { projects } from "../../consts/projects";
import { FaGithub } from "react-icons/fa";
import styles from "../../style";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  const projectRefs = useRef([]);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const { current: projectElements } = projectRefs;
      const currentScrollPosition = window.scrollY + window.innerHeight * 0.5;

      for (let i = 0; i < projectElements.length; i++) {
        const projectElement = projectElements[i];
        const projectOffsetTop = projectElement.offsetTop;

        if (currentScrollPosition >= projectOffsetTop) {
          setActiveProjectIndex(i);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (projectRefs.current[index] = el)}
          className={`min-h-screen flex items-center  ${
            activeProjectIndex === index ? "active-project" : ""
          }`}
        >
          <div className="container mx-auto px-4 lg:flex lg:items-center ">
            <div className="lg:w-1/2">
              <img
                src={project.image} // Use the appropriate image property
                alt={project.title}
                className="rounded-lg"
              />
            </div>
            <div className={`lg:w-1/2 lg:ml-8 text-white ${styles.marginY}`}>
              {/* content */}
              <h2 className="text-3xl font-bold mb-4 orange-text-gradient">
                {project.title}
              </h2>
              <p className="text-lg">{project.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2 blue-text-gradient">
                  Technology Used:
                </h3>
                <ul className="list-disc list-inside">
                  {project.tools.map((tool, toolIndex) => (
                    <li key={toolIndex}>{tool}</li>
                  ))}
                </ul>
              </div>
              {/* Github */}
              {project.githubLink && (
                <div className="mt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg text-gray-300 hover:text-gray-400"
                  >
                    <FaGithub className="mr-2 w-5 h-5" />
                    GitHub
                  </a>
                </div>
              )}
              {project.link && (
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lg text-white hover:text-gray-300"
                  >
                    <FaLink className="inline-block mr-1 mb-1" />
                    View More
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
