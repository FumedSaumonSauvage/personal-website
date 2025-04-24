import { useState, useEffect } from 'react';
import './homepage.css';
import Projets from './projets';
import Credits from './credits';

const words = ["Simon Hergott", "Linkedin", "LinkedIn", "Github", "Projects", "Curriculum Vitae", "Contact", "Credits", "Legal"];

const projectData = [
  {
    id: 'site',
    name: 'This Website',
    description: 'Simple, efficient. You are here.',
    technologies: ['React', 'Node.js'],
    // imageUrl: '/images/alpha.png',
    // liveUrl: 'https://alpha.example.com',
    // githubUrl: 'https://github.com/user/alpha',
  },
  {
    id: 'CMScraper',
    name: 'CMScraper',
    description: 'Facebook polls scraper based on a computer vision neural network to interact with the page it\'s looking at, with the goal of doing nice statistics on votes. Ongoing project.',
    technologies: ['Python', 'YOLO', 'OpenCV'],
    // imageUrl: '/images/beta.png',
    // liveUrl: 'https://beta.example.com',
    githubUrl: 'https://github.com/FumedSaumonSauvage/CMScraper',
  },
  {
    id: 'microfdm',
    name: 'MicroFDM',
    description: 'A 3D printer, 3D printed. Working, janky and was built with no other purpose than having something to do with some obsolete Ender parts. I call it a proof of concept.',
    technologies: ['3D printing', 'FDM', 'Fusion360', 'Marlin'],
    githubUrl: 'https://github.com/FumedSaumonSauvage/MicroFDM',
  }
  // Add more projects here
];

function HomePage() {
  const [visibleWords, setVisibleWords] = useState<string[]>([]);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Simon Hergott'
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < words.length) {
        setVisibleWords((prevWords) => [...prevWords, words[index]]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  const handleWordClick = (word: string) => {
    if (word === "Github") {
      window.location.href = "https://github.com/FumedSaumonSauvage";
    } else if (word === "Linkedin") {
      window.location.href = "https://linkedin.com/in/simon-hergott";
    } else if (word === "Projects") {
      setIsProjectsModalOpen(true);
    } else if (word === "Curriculum Vitae") {
      const link = document.createElement('a');
      link.href = '/HERGOTT_CV_Web.pdf';
      link.download = 'HERGOTT_CV_Web.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (word === "Contact") {
      setIsContactModalOpen(true);
    } else if (word === "Credits") {
      setIsCreditsModalOpen(true);
    } else if (word === "Legal") {
      setIsLegalModalOpen(true);
    }
  };

  const closeProjectsModal = () => {
    setIsProjectsModalOpen(false);
  };

  const closeCreditsModal = () => {
    setIsCreditsModalOpen(false);
  };

  return (
    <div className="app-container">
      {isProjectsModalOpen && (
        <div className="overlay" onClick={closeProjectsModal} />
      )}
      {isCreditsModalOpen && (
        <div className="overlay" onClick={closeCreditsModal} />
      )}
      <div className={`homepage ${isProjectsModalOpen ? 'blurred' : ''}`}>
        <div className="words-container">
          {visibleWords.map((word, index) => (
            <span
              key={index}
              className="large-text interactive-word"
              onClick={(e) => {
                e.stopPropagation();
                handleWordClick(word);
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {isProjectsModalOpen && (
        <Projets projects={projectData} onClose={closeProjectsModal} />
      )}

      {isContactModalOpen && (
        <div className={`contact-modal open`}>
        <h2 className="modal-content">Contenu à venir!</h2>
      </div>
      )}

      {isCreditsModalOpen && (
        <Credits/>
      )}
      
      {isLegalModalOpen && (
        <div className={`legal-modal open`}>
          <h2 className="modal-content">Contenu à venir!</h2>
        </div>
      )}
    </div>
  );
}

export default HomePage;