import React from "react";
import Logo from "../../assets/logo.svg";
import "../css/Header.css";
import SearchBar from "./SearchBar";
import horloge from "../../images/horloge.png";
import accessibilite from "../../images/accessibilite.png";
import icon_aide from "../../images/aide_icone.png";
import drapeau from "../../images/drapeau.png";

function Navbar() {
  return (
    <>
      <header role="banner">
        <div className="header">
          <h1>
            <a href="/">
              <img
                src={Logo}
                className="logo"
                alt="logo de la bibliothèque - Accueil"
                aria-label="Accueil de la bibliothèque"
              />
            </a>
          </h1>
          { <div className="search_bar_infos">
            { <SearchBar /> }
            <ul className="infos">
              <li>
                <a href="/infos">
                  <img
                    src={horloge}
                    alt=""
                  />
                  Horaires
                </a>
              </li>
              <li>
                <a href="/infos">
                  <img
                    src={accessibilite}
                    alt=""
                  />
                  Accessibilité
                </a>
              </li>
              <li>
                <a href="/infos">
                  <img
                    src={icon_aide}
                    alt=""
                  />
                  Aides
                </a>
              </li>
              <li>
                <a href="/infos">
                  <img
                    src={drapeau}
                    alt=""
                  />
                  Français
                </a>
              </li>
              <li>
                <a href="/infos">Recherches avancées</a>
              </li>
            </ul>
          </div> }
        </div>
      </header>
      <nav
        role="navigation"
        aria-label="Menu principal"
        className="nav-principal"
      >
        <ul>
          <li>
            <a href="/pratique">Pratique</a>
          </li>
          <li>
            <a href="/bibliothèques">Bibliothèques</a>
          </li>
          <li>
            <a href="/agenda">Agenda</a>
          </li>
          <li>
            <a href="/nouveaute">Nouveauté</a>
          </li>
          <li>
            <a href="/en_ligne">En ligne</a>
          </li>
          <li>
            <a href="/decouvrir">Découvrir</a>
          </li>
          <li>
            <a href="/patrimoine">Patrimoine</a>
          </li>
          <li>
            <a href="/accessibilite">Accessibilité</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
