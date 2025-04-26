import React, { useEffect } from 'react';
import './credits.css';

function LegalPage() {
  useEffect(() => {
    document.title = 'Legal | Simon Hergott';
  }, []);

  return (
    <div className="credits-modal-content">
      <h1 className="credits-title">Mentions Légales</h1>
      <div className="fonts-credits">
        <h2>Éditeur du Site</h2>
        <p>Simon Hergott</p>
      </div>
      <div className="fonts-credits">
        <h2>Directeur de la publication</h2>
        <p>Simon Hergott</p>
      </div>
      <div className="fonts-credits">
        <h2>Hébergeur du Site</h2>
        <p>Simon Hergott</p>
    </div>
    <div className="fonts-credits">
        <h2>Propriété Intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site, incluant de manière non limitative les textes, images, vidéos, logos et tout autre élément graphique, sont la propriété exclusive de Simon Hergott ou de tiers ayant autorisé leur utilisation. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
        </p>
      </div>
      <div className="fonts-credits">
        <h2>Données Personnelles</h2>
        <p>
          Dans le cadre de l'exploitation de ce site, seule des données à des fins statistiques seront collectées.
        </p>
      </div>
      <div className="fonts-credits">
        <h2>Responsabilité</h2>
        <p>
          Simon Hergott s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, il ne saurait être tenu responsable des erreurs ou omissions, ni des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site.
        </p>
      </div>
    </div>
  );
}

export default LegalPage;