import React from "react";
import Logo from "../../assets/logo.svg";
import "../css/Header.css";
import SearchBar from "./SearchBar";
import horloge from "../../images/horloge.png";
import accessibilite from "../../images/accessibilite.png";
import icon_aide from "../../images/aide_icone.png";
import drapeau from "../../images/drapeau.png";
import flehe_bas from "../../images/flèche_vers_bas.png";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import burgerMenu from "../../assets/burgerMenu.svg";

import { useIsMobile } from "../../hooks/useIsMobile";

function Navbar() {
  return (
    <>
      <header role="banner">
        <div className="header">
          <a
            className="logo_flex "
            href="/"
          >
            <img
              src={Logo}
              className="logo"
              alt="logo de la bibliothèque - Accueil"
            />
          </a>
          <div className="search_bar_infos">
            <div className="NavAndSearchBar">
              <nav
                role="navigation"
                aria-label="Menu principal"
              >
                <button
                  aria-expanded="false"
                  className="burger-button"
                >
                  <img
                    src={burgerMenu}
                    aria-hidden="true"
                    focusable="false"
                    alt=""
                  />
                </button>
                {useIsMobile() ? <MobileNavbar /> : null}
              </nav>
              <SearchBar />
            </div>

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
                  <img
                    src={flehe_bas}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  href="/infos"
                  className="research"
                >
                  Recherche avancée
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {useIsMobile() ? null : <DesktopNavbar />}
    </>
  );
}

export default Navbar;
