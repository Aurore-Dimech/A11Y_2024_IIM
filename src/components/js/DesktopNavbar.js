import React, { useRef, useState } from "react";
import "../css/DesktopNavbar.css";

function DesktopNavbar() {
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
    <nav
    id="navbar"
      role="navigation"
      aria-label="Menu principal"
      className="nav-principal"
    >
      <ul>
        <li
          onMouseLeave={() => {
            shrinkMenu("PRATIQUE");
            if (pratiqueRef.current) {
              pratiqueRef.current.classList.remove("open");
            }
          }}
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
            className="button-nav"
            onClick={() => expandMenu("PRATIQUE")}
            onMouseEnter={() => {
              document.querySelectorAll(".button-nav").forEach((element) => {
                element.classList.remove("open");
                });
              expandMenu("PRATIQUE");
              if (pratiqueRef.current) {
                pratiqueRef.current.classList.add("open");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                document.querySelectorAll(".button-nav").forEach((element) => {
                  element.classList.remove("open");
                  });
                // event.preventDefault();
                expandMenu("PRATIQUE");
                if (pratiqueRef.current) {
                  pratiqueRef.current.classList.add("open");
                }
              }
            }}
          >
            PRATIQUE
          </button>
          {activeMenu === "PRATIQUE" && (
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
          )}
        </li>
        <li
          onMouseLeave={() => {
            shrinkMenu("BIBLIOTHEQUE");
            if (bibliothequeRef.current) {
              bibliothequeRef.current.classList.remove("open");
            }
          }}
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
            className="button-nav"
            onClick={() => expandMenu("BIBLIOTHEQUE")}
            onMouseEnter={() => {
              document.querySelectorAll(".button-nav").forEach((element) => {
                element.classList.remove("open");
                });
              expandMenu("BIBLIOTHEQUE");
              if (bibliothequeRef.current) {
                bibliothequeRef.current.classList.add("open");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                document.querySelectorAll(".button-nav").forEach((element) => {
                  element.classList.remove("open");
                  });
                expandMenu("BIBLIOTHEQUE");
                if (bibliothequeRef.current) {
                  bibliothequeRef.current.classList.add("open");
                }
              }
            }}
          >
            BIBLIOTHEQUES
          </button>
          {activeMenu === "BIBLIOTHEQUE" && (
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
                <a href="/bibliotheque/a-proximite">
                  Bibliothèques de proximité
                </a>
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
        <li
          onMouseLeave={() => {
            shrinkMenu("DECOUVRIR");
            if (decouvrirRef.current) {
              decouvrirRef.current.classList.remove("open");
            }
          }}
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
            className="button-nav"
            onClick={() => expandMenu("DECOUVRIR")}
            onMouseEnter={() => {
              document.querySelectorAll(".button-nav").forEach((element) => {
                element.classList.remove("open");
                });
              expandMenu("DECOUVRIR");
              if (decouvrirRef.current) {
                decouvrirRef.current.classList.add("open");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                document.querySelectorAll(".button-nav").forEach((element) => {
                  element.classList.remove("open");
                  });
                expandMenu("DECOUVRIR");
                if (decouvrirRef.current) {
                  decouvrirRef.current.classList.add("open");
                }
              }
            }}
          >
            DÉCOUVRIR
          </button>
          {activeMenu === "DECOUVRIR" && (
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
          )}
        </li>
        <li
          onMouseLeave={() => {
            shrinkMenu("PATRIMOINE");
            if (patrimoineRef.current) {
              patrimoineRef.current.classList.remove("open");
            }
          }}
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
            className="button-nav"
            onClick={() => {
              expandMenu("PATRIMOINE");
            }}
            onMouseEnter={() => {
              document.querySelectorAll(".button-nav").forEach((element) => {
                element.classList.remove("open");
                });
              expandMenu("PATRIMOINE");
              if (patrimoineRef.current) {
                patrimoineRef.current.classList.add("open");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                document.querySelectorAll(".button-nav").forEach((element) => {
                  element.classList.remove("open");
                  });
                patrimoineRef.current.classList.add("open");
                expandMenu("PATRIMOINE");
                if (patrimoineRef.current) {
                  patrimoineRef.current.classList.add("open");
                }
              }
            }}
          >
            PATRIMOINE
          </button>
          {activeMenu === "PATRIMOINE" && (
            <ul className="second-chain">
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
    </nav>
  );
}

export default DesktopNavbar;
