import React, { useEffect } from 'react'
import './projets.css';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjetsProps {
  projects: Project[];
  onClose: () => void;
}

const Projets: React.FC<ProjetsProps> = ({ projects, onClose }) => {
    useEffect(() => {
        document.title = 'Crédits | Simon Hergott';
      }, []);
    
  return (
    <div className="projets-modal open">
      <div className="projets-modal-content">
        <h1>Projects</h1>
        <div className="projets-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              {project.imageUrl && (
                <img src={project.imageUrl} alt={project.name} className="project-image" />
              )}
              <div className="project-details">
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <ul className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                )}
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
                      Website
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 395.3C109.4 406 103.7 390.8 103.7 375.5c-1.7-11.3-4.1-22.7-4.1-34.6 0-27.5 7.6-41.3 23.6-58.9-5.9-15.9-22.8-32.1-37.1-40.9-17.8-10.9-24.8-20.3-24.8-30.8 0-9.2 6.7-19 19.4-25.7 11.9-5.1 28.3-2 34.2 6.5 16.3 8.5 29 23.4 29 43.5 14.2 43.5 44.2 59.8 58.1 12.7 5.9 45.3 19.3 58.9 27.5 11.3 8.5 17.9 22.3 17.9 35.8 0 12.2-5.8 22.8-19.6 31.3c1.6 2.8 5.4 6.8 16.1 5.4 17.7-1.1 39.2-18.4 42.3-39.1 3.9-25.3 12.6-49.6 29.6-67.1 19.7-23.2 45.9-34.8 67.9-34.8 27.6 0 51.9 17.2 59.7 42.5 4.9 15.5 12.4 31.9 23.2 42.9 21.1 20.1 48.1 32.8 72.1 32.8 13.8 0 26.6-3.3 38.3-9.1 11.8-5.7 22.8-15 28.6-26.4 5.7-11.4 10.2-23.6 14.8-35.8 3.2-8.6 6.1-17.9 9.2-27.2.1-1.1 1.4-5.2 4.2-8.7-1.6-.1-2.6-.2-3.7-.2-2.7.1-5.2.3-7.6.3C228.3 414 221 414.1 214.3 414.1c-28.2 0-51.7-17-59.1-34.7-5.4-12.5-15.8-23.6-34.9-23.6-9.2 0-16.8.8-23.1 4.8-11.7 8.1-24.1 16.6-36.7 16.6-10.5 0-19.4-2.4-25.9-6.5-11.2-6.2-20.6-16.6-27.8-29.6-7.6-12.6-16.6-24.7-31-24.7-13.9 0-27.5 7.9-37.4 20.5-21.5 24.5-34.4 47.3-34.4 79.9 0 32.8 26.6 59.7 58.9 59.7 22.8 0 40.1-13.4 50.2-34.8 7.4-15.7 13.2-30.4 13.2-58.9 0-58.9-32-89.2-68.5-89.2-23.7 0-44.4 12.9-51.6 34.7-1.6 4.9-2.8 9.8-4 14.8-2.2 9.4-6 19-12.1 25.7-6.3 6.8-14.3 10.1-23.4 10.1-3.1 0-5.9-.3-8.7-.6-.2-2.4-1.6-6.3-5-9.7-2.9-3.4-6.7-6.1-10.9-8.7z"></path></svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;