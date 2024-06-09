import React from "react";
import Logo from "../../assets/logo.svg";
import "../css/Header.css";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <>
      <header role="banner">
        <div className="header">
          <a href="/">
            <img
              src={Logo}
              className="logo"
              alt="logo de la bibliothèque - Accueil"
            />
          </a>
          <SearchBar />
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
