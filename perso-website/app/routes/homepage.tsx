import { useState, useEffect } from 'react';
import './HomePage.css';

const words = ["Simon Hergott", "Linkedin", "Github", "Projets", "Curriculum Vitae", "Contact", "Credits", "Mentions légales"];

function HomePage() {
  const [visibleWords, setVisibleWords] = useState<string[]>([]);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCreditsModalOpen, setIsCreditsModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);


  useEffect(() => {
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
    } else if (word === "Projets") {
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
    } else if (word === "Mentions légales") {
        setIsLegalModalOpen(true);
    }
  };

  const closeProjectsModal = () => {
    setIsProjectsModalOpen(false);
  };


  return (
    <div className="app-container"> {}
      <div
        className={`homepage ${isProjectsModalOpen ? 'blurred' : ''}`}
        onClick={isProjectsModalOpen ? closeProjectsModal : undefined}
      >
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
              {word} </span>
          ))}
        </div>
      </div>

      {isProjectsModalOpen && (
        <div className={`projects-modal open`}>
          <h2 className="modal-content">Contenu à venir!</h2>
        </div>
      )}

        {isContactModalOpen && (
            <div className={`contact-modal open`}>
            <h2 className="modal-content">Contenu à venir!</h2>
            </div>
        )}

        {isCreditsModalOpen && (
            <div className={`credits-modal open`}>
            <h2 className="modal-content">Contenu à venir!</h2>
            </div>
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