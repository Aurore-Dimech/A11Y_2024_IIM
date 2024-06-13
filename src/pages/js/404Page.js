import React, { useEffect } from "react";

import "../css/404Page.css";
import image from "../../assets/404.svg";
import returnArrow from "../../assets/returnArrow.svg";
import Ariane from "../../components/js/AriadnesThread";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page introuvable | Bibliothèques de Nice";
  }, []);

  const position = [
    {
      name: "Accueil ",
      link: "/",
    },
    {
      name: ">",
      link: null,
    },
    {
      name: "Page introuvable",
      link: null,
    },
  ];

  return (
    <main role="main">
      <Ariane position={[position]} />
      <section className="unfound-page">
        <div className="return">
          <img
            src={returnArrow}
            alt=""
          />
          <a href="/">Retour à la page d'accueil</a>
        </div>
        <div className="main">
          <h2>
            <img
              src={image}
              alt="Page introuvable, veuillez retourner à la page d'accueil avec le bouton ci-dessous."
            />
          </h2>
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
