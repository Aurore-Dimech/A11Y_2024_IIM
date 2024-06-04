import React from "react";
import blueMoon from "../../assets/blueMoon.svg";
import cartesAlpes from "../../assets/alpes.svg";
import "../css/CollectionAlpes.css";

const CollectionAlpes = () => {
  return (
    <section>
      <div className="section-title">
        <img
          src={blueMoon}
          alt=""
        />
        <h2>COLLECTION SPECIALE ALPES</h2>
      </div>
      <div className="main-collection">
        <img
          src={cartesAlpes}
          alt="carte de la France avec les régions du projet PITEM Pace en rouge"
        />
        <div>
          <h3>À LA DÉCOUVERTE DE NOTRE PATRIMOINE CULTUREL </h3>
          <p>A travers le projet PITEM Pace ( Plan Intégré Thématique ) qui concerne les régions Sud Provence-Alpes Côte d'Azur, Auvergne Rhône Alpes, Ligurie, Piémont et Vallée d’Aoste, la bibliothèque de Nice met en avant ses collections numérisées autour de l'arc alpin</p>
          <a
            href="/catalogue"
            className="button"
            aria-label="Découvrir le catalogue : collections spéciales alpes"
          >
            Découvrir le catalogue
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionAlpes;
