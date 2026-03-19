import React from "react";
import "./object_found.css";

// turborecyclé du kindle
const IMAGE_URL = "/found_objects/parapluie.jpg";
const CONTACT_TEXT = `If you found this umbrella, please contact Simon Hergott
Email: hergottsimon + @ + gmail.com
Phone: +33 6 52 05 09 twenty-one

Si vous avez trouvé ce parapluie, merci de contacter Simon Hergott
Email : hergottsimon + @ + gmail.com
Téléphone : +33 6 52 05 09 vingt-et-un

この傘を見つけた方は、シモン・ヘルゴットまでご連絡ください
メール: hergottsimon + @ + gmail.com
電話: +33 6 52 05 09 にじゅういち
Line: line.me/ti/p/CEde6GXJQ2`;

export default function ParapluieFound() {
  // Split the text into language blocks by double newlines
  const languageBlocks = CONTACT_TEXT.split(/\n{2,}/);
  return (
    <div className="kindle-found-container">
      <div className="kindle-found-content">
        <img src={IMAGE_URL} alt="Found umbrella" className="kindle-found-image" />
        <div className="kindle-found-text">
          {languageBlocks.map((block, i) => (
            <div className="kindle-language-block" key={i}>
              {block.split("\n").map((line, j) => (
                <p key={j}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
