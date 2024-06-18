import React, { useContext, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import "../css/Header.css";
import SearchBar from "./SearchBar";
import horloge from "../../images/horloge.svg";
import accessibilite from "../../images/accessibilite.svg";
import icon_aide from "../../images/aide_icone.svg";
import drapeau from "../../images/drapeau.svg";
import flehe_bas from "../../images/flèche_vers_bas.png";
import DesktopNavbar from "./DesktopNavbar";
import burgerMenu from "../../assets/burgerMenu.svg";
import close from "../../assets/closeBurger.svg";

import { useIsMobile } from "../../hooks/useIsMobile";
import { BurgerContext } from "../../context/BurgerContext";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const useMobile = useIsMobile();

  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      const searchBar = header.querySelector(".search-bar");
      if (searchBar) {
        searchBar.setAttribute("id", "main-search-bar");
      }
    }

    const burgerButton = document.querySelector(".burger-button");
    const navDesktop = document.querySelector(".nav-principal");

    if (burgerButton || navDesktop) {
      if (useMobile) {
        if (navDesktop) navDesktop.removeAttribute("id");
        if (burgerButton) burgerButton.setAttribute("id", "navbar");
      } else {
        if (burgerButton) burgerButton.removeAttribute("id");
        if (navDesktop) navDesktop.setAttribute("id", "navbar");
      }
    }
  }, [useMobile]);

  const { toggleBurger, isBurgerOpen } = useContext(BurgerContext);

  const handleBurgerClick = (event) => {
    event.preventDefault();
    toggleBurger();
  };
  return (
    <>
      <header
        id="header"
        role="banner"
      >
        <div className="header">
          <a
            className={`logo_flex ${isBurgerOpen ? "bg-burger-hidden" : ""}`}
            href="/"
          >
            <img
              src={Logo}
              className="logo"
              alt="logo de la bibliothèque - Accueil"
            />
          </a>
          <div className="search_bar_infos">
            <div
              className={`NavAndSearchBar ${
                isBurgerOpen ? "open-burger-menu-main" : ""
              }`}
            >
              <nav
                role="navigation"
                aria-label="Menu principal"
              >
                <button
                  aria-expanded={isBurgerOpen}
                  className="burger-button"
                  onClick={handleBurgerClick}
                >
                  <img
                    src={isBurgerOpen ? close : burgerMenu}
                    aria-hidden="true"
                    focusable="false"
                    alt=""
                  />
                </button>
                {useMobile && isBurgerOpen ? <MobileNavbar /> : null}
              </nav>
              <SearchBar />
            </div>

            <ul className={`infos ${isBurgerOpen ? "bg-burger-hidden" : ""}`}>
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
      {useMobile ? null : <DesktopNavbar />}
    </>
  );
}

export default Navbar;
