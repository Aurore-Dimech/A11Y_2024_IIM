import React from "react";
import "../css/MobileNavbar.css";

function MobileNavbar() {
  return (
    <ul className="burger-main">
      <li>
        <button
          aria-expanded="false"
          className="button-nav"
        >
          PRATIQUE
        </button>

        <ul className="second-chain">
          <li>
            <a href="/horaires">Horaires</a>
          </li>
          <li>
            <a href="/signup">Inscription</a>
          </li>
          <li>
            <a href="/accueil-groupe">Accueil du groupe</a>
          </li>
        </ul>
      </li>
      <li>
        <button
          aria-expanded="false"
          className="button-nav"
        >
          BIBLIOTHEQUES
        </button>

        <ul className="second-chain">
          <li>
            <a href="/bibliotheque/louis-nucera">Louis Nucéra</a>
          </li>
          <li>
            <a href="/bibliotheque/romain-gary">Romain Gary</a>
          </li>
          <li>
            <a href="/bibliotheque/bib-mobile">Bib’Mobile</a>
          </li>
          <li>
            <a href="/bibliotheque/raoul-mille">Raoul Mille</a>
          </li>
          <li>
            <a href="/bibliotheque/a-proximite">Bibliothèques de proximité</a>
          </li>
          <li>
            <a href="/bibliotheques/associees">Bibliothèque associées</a>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="/agenda"
          className="button-nav"
        >
          AGENDA
        </a>
      </li>
      <li>
        <a
          href="/nouveaute"
          className="button-nav"
        >
          NOUVEAUTÉS
        </a>
      </li>
      <li>
        <a
          href="/en-ligne"
          className="button-nav"
        >
          EN LIGNE
        </a>
      </li>
      <li>
        <button
          aria-expanded="false"
          className="button-nav"
        >
          DÉCOUVRIR
        </button>

        <ul className="second-chain">
          <li>
            <a href="/discover/books">Livres</a>
          </li>
          <li>
            <a href="/discover/cine">Cinéma</a>
          </li>
          <li>
            <a href="/discover/presse">Presse</a>
          </li>
          <li>
            <a href="/discover/music">Musique</a>
          </li>
          <li>
            <a href="/discover/youth">Jeunesse</a>
          </li>
        </ul>
      </li>
      <li>
        <button
          aria-expanded="false"
          className="button-nav"
        >
          PATRIMOINE
        </button>

        <ul className="second-chain">
          <li>
            <a href="/patrimoine/collections">Collections</a>
          </li>
          <li>
            <a href="/patrimoine/num">Patrimoine numérisée</a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default MobileNavbar;
