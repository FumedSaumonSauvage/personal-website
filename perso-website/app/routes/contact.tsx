import React, { useEffect } from 'react';
import './credits.css';

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Simon Hergott';
  }, []);

  return (
    <div className="credits-modal-content">
      <h1 className="credits-title">Contact</h1>
      <div className="fonts-credits">
      <h2>Mail</h2>
        <ul>
            <li>
                <p>her****sim** (at) gmail.com</p>
            </li>
            <li>
                <p>sim**.her**** (at) etu.ec-lyon.fr</p>
            </li>

        </ul>
      </div>
    </div>
  );
}

export default ContactPage;