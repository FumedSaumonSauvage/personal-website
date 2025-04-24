import React, { useEffect } from 'react';
import './credits.css'; // Vous pouvez créer un fichier CSS pour styliser cette page

function CreditsPage() {
  useEffect(() => {
    document.title = 'Crédits | Simon Hergott';
  }, []);

  return (
    <div className="credits-container">
      <h1 className="credits-title">Credits</h1>
        <h2>Fonts</h2>
        <ul>
          <li>
            <p className="absans-font"> Absans by Collletttivo</p>
          </li>
          <li>
            <p className="swiza-font"> Swiza by Atipo</p>
          </li>
        </ul>
   </div>
  );
}

export default CreditsPage;