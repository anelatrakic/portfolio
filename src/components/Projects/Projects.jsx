import React, { useState } from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Projects_Data from "../../assets/projects_data";
import { X, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {Projects_Data.map((project, index) => {
          return (
            <div
              key={index}
              className="project-item"
              onClick={() => openModal(project)}
            >
              <img src={project.img} alt={project.name} />
              <div className="project-overlay">
                <h3>{project.name}</h3>
                <p>Click to view details</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedProject.name}</h2>
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-details">
                <div className="modal-description">
                  <h3>{selectedProject.date}</h3>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {selectedProject.description}
                  </p>
                </div>

                <div className="modal-links">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link github-link"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
