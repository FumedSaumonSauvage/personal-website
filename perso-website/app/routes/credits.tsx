import React, { useEffect } from 'react';
import './credits.css';

function CreditsPage() {
  useEffect(() => {
    document.title = 'Credits | Simon Hergott';
    console.log("Des licences? Quelles licences?");
  }, []);

  return (
    <div className="credits-modal-content">
      <h1 className="credits-title">Credits</h1>
      <div className="fonts-credits">
        <h2>Fonts</h2>
        <ul>
          <li>
            <p className="absans-font">Absans by Collletttivo</p>
          </li>
          <li>
            <p className="swiza-font">Swiza by Atipo</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CreditsPage;