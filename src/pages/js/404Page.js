import React, { useEffect } from "react";

import "../css/404Page.css";
import image from "../../assets/404.svg";
import returnArrow from "../../assets/returnArrow.svg";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page introuvable | Bibliothèques de Nice";
  }, []);

  return (
    <main role="main">
      <section className="unfound-page">
        <div className="return">
          <img
            src={returnArrow}
            alt=""
          />
          <a href="/">Retour à la page d'accueil</a>
        </div>
        <div className="main">
          <img
            src={image}
            alt="Page introuvable, veuillez retourner à la page d'accueil avec le bouton ci-dessous."
          />
        </div>
        <a
          href="/"
          className="button"
        >
          Accueil
        </a>
      </section>
    </main>
  );
};

export default NotFoundPage;
