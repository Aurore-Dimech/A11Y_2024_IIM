import React, { useContext, useRef, useState } from "react";
import "../css/MobileNavbar.css";
import chevronRight from "../../images/Chevron-right.png";

import { BurgerContext } from "../../context/BurgerContext";

function MobileNavbar() {
  const { isBurgerOpen } = useContext(BurgerContext);

  const pratiqueRef = useRef();
  const bibliothequeRef = useRef();
  const decouvrirRef = useRef();
  const patrimoineRef = useRef();

  const [activeMenu, setActiveMenu] = useState(null);

  const expandMenu = (menuName) => {
    if (activeMenu !== menuName) {
      setActiveMenu(menuName);
      }
  };

  const shrinkMenu = () => {
    setActiveMenu(null);
  };

  return (
    <ul className={`burger-main ${isBurgerOpen ? "" : "bg-burger-hidden"}`}>
      <li
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            shrinkMenu("PRATIQUE");
            if (pratiqueRef.current) {
              pratiqueRef.current.classList.remove("open");
              pratiqueRef.current.focus();
            }
          }
        }}
      >
        <button
          ref={pratiqueRef}
          aria-expanded={activeMenu === "PRATIQUE"}
          className="button-nav-mobile"
          onClick={() => {
            if (activeMenu === "PRATIQUE") {
              shrinkMenu("PRATIQUE");
              if (pratiqueRef.current) {
                pratiqueRef.current.classList.remove("open");
                pratiqueRef.current.focus();
              }
            } else {
              expandMenu("PRATIQUE");
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              expandMenu("PRATIQUE");
              if (pratiqueRef.current) {
                pratiqueRef.current.classList.add("open");
              }
            }
          }}
        >
          PRATIQUE
          <img
            className={`${activeMenu === "PRATIQUE" ? "nav-mobile-open" : "nav-mobile-closed"
            }`}
            src={chevronRight}
            alt=""
          />
        </button>

        {activeMenu === "PRATIQUE" && (
          <ul className="second-chain-mobile">
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
        )}
      </li>
      <li
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            shrinkMenu("BIBLIOTHEQUE");
            if (bibliothequeRef.current) {
              bibliothequeRef.current.classList.remove("open");
              bibliothequeRef.current.focus();
            }
          }
        }}
      >
        <button
          ref={bibliothequeRef}
          aria-expanded={activeMenu === "BIBLIOTHEQUE"}
          className="button-nav-mobile"
          onClick={() => {
            if (activeMenu === "BIBLIOTHEQUE") {
              shrinkMenu("BIBLIOTHEQUE");
              if (bibliothequeRef.current) {
                bibliothequeRef.current.classList.remove("open");
                bibliothequeRef.current.focus();
              }
            } else {
              expandMenu("BIBLIOTHEQUE");
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              expandMenu("BIBLIOTHEQUE");
              if (bibliothequeRef.current) {
                bibliothequeRef.current.classList.add("open");
              }
            }
          }}
        >
          BIBLIOTHEQUES
          <img
            className={`${
              activeMenu === "BIBLIOTHEQUE" ? "nav-mobile-open" : "nav-mobile-closed"
            }`}
            src={chevronRight}
            alt=""
          />
        </button>
        {activeMenu === "BIBLIOTHEQUE" && (
          <ul className="second-chain-mobile">
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
        )}
      </li>
      <li>
        <a
          href="/agenda"
          className="button-nav-mobile"
        >
          AGENDA
          <img
            className="nav-mobile-closed"
            src={chevronRight}
            alt=""
          />
        </a>
      </li>
      <li>
        <a
          href="/nouveaute"
          className="button-nav-mobile"
        >
          NOUVEAUTÉS
          <img
            className="nav-mobile-closed"
            src={chevronRight}
            alt=""
          />
        </a>
      </li>
      <li>
        <a
          href="/en-ligne"
          className="button-nav-mobile"
        >
          EN LIGNE
          <img
            className="nav-mobile-closed"
            src={chevronRight}
            alt=""
          />
        </a>
      </li>
      <li
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            shrinkMenu("DECOUVRIR");
            if (decouvrirRef.current) {
              decouvrirRef.current.classList.remove("open");
              decouvrirRef.current.focus();
            }
          }
        }}
      >
        <button
          ref={decouvrirRef}
          aria-expanded={activeMenu === "DECOUVRIR"}
          className="button-nav-mobile"
          onClick={() => {
            if (activeMenu === "DECOUVRIR") {
              shrinkMenu("DECOUVRIR");
              if (decouvrirRef.current) {
                decouvrirRef.current.classList.remove("open");
                decouvrirRef.current.focus();
              }
            } else {
              expandMenu("DECOUVRIR");
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              expandMenu("DECOUVRIR");
              if (decouvrirRef.current) {
                decouvrirRef.current.classList.add("open");
              }
            }
          }}
        >
          DÉCOUVRIR
          <img
            className={`${
              activeMenu === "DECOUVRIR" ? "nav-mobile-open" : "nav-mobile-closed"
            }`}
            src={chevronRight}
            alt=""
          />
        </button>
        {activeMenu === "DECOUVRIR" && (
          <ul className="second-chain-mobile">
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
        )}
      </li>
      <li
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            shrinkMenu("PATRIMOINE");
            if (patrimoineRef.current) {
              patrimoineRef.current.classList.remove("open");
              patrimoineRef.current.focus();
            }
          }
        }}
      >
        <button
          ref={patrimoineRef}
          aria-expanded={activeMenu === "PATRIMOINE"}
          className="button-nav-mobile"
          onClick={() => {
            if (activeMenu === "PATRIMOINE") {
              shrinkMenu("PATRIMOINE");
              if (patrimoineRef.current) {
                patrimoineRef.current.classList.remove("open");
                patrimoineRef.current.focus();
              }
            } else {
              expandMenu("PATRIMOINE");
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              expandMenu("PATRIMOINE");
              if (patrimoineRef.current) {
                patrimoineRef.current.classList.add("open");
              }
            }
          }}
        >
          PATRIMOINE
          <img
            className={`${
              activeMenu === "PATRIMOINE" ? "nav-mobile-open" : "nav-mobile-closed"
            }`}
            src={chevronRight}
            alt=""
          />
        </button>
        {activeMenu === "PATRIMOINE" && (
          <ul className="second-chain-mobile">
            <li>
              <a href="/patrimoine/collections">Collections</a>
            </li>
            <li>
              <a href="/patrimoine/num">Patrimoine numérisée</a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default MobileNavbar;
