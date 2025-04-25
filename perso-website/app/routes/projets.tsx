import React, { useEffect } from 'react';
import './projets.css';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  youtubeUrl?: string;
  githubLogoUrl?: string;
  youtubeLogoUrl?: string;
}

interface ProjetsProps {
  projects: Project[];
  onClose: () => void;
  customGithubLogo?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Optional prop for custom GitHub logo component
  customYoutubeLogo?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Optional prop for custom YouTube logo component
}

const Projets: React.FC<ProjetsProps> = ({
  projects,
  onClose,
  customGithubLogo,
  customYoutubeLogo,
}) => {
  useEffect(() => {
    document.title = 'Projects | Simon Hergott';
  }, []);

  const GithubLogo = (() => <img src="/github_logo.png" alt="GitHub" className="social-icon" />);
  const YoutubeLogo = (() => <img src="/yt_logo.png" alt="YouTube" className="social-icon" />);

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
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.youtubeUrl && (
                    <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer" className="youtube-link link-button">
                      <span>YouTube</span>
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