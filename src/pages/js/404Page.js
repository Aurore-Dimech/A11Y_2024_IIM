import React, { useEffect } from "react";

import "../css/404Page.css";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page introuvable | Bibliothèques de Nice";
  }, []);

  return (
    <main role="main">
      <section className="unfound-page">
        <a href="/">flèche retour</a>
        <div className="main">
          <div className="section-title">
            <h2>404</h2>
          </div>
          <p>phrase</p>
        </div>
          <a
            href="/"
            className="button"
          >
            accueil
          </a>
      </section>
    </main>
  );
};

export default NotFoundPage;
