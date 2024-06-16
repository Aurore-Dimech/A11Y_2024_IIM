import React, { useRef, useState, useEffect } from "react";
import "../css/NomralNavBar.css";

// function NomralNavBar(clickHandler) {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 880);

//   const handleResize = () => {
//     setIsMobile(window.innerWidth < 880);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const SubMenu = ({ isOpen, items }) => {
//     return (
//       <ul className={`DetailsList ${isOpen ? "open" : ""}`}>
//         {items.map((items, index) => (
//           <li
//             className="li"
//             key={index}
//           >
//             <a href="/">{items}</a>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const MenuItems = ({ title, link, subMenuItems }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const handleClick = () => {
//       setIsOpen(!isOpen);
//     };

//     const preventDefault = (e) => {
//       e.preventDefault();
//     };

//     return (
//       <li className="List">
//         {subMenuItems ? (
//           <div
//             onClick={handleClick}
//             className="ListItem"
//           >
//             <a
//               href="/"
//               onClick={preventDefault}
//               className="linkForList"
//             >
//               {link ? <a href={link}>{title}</a> : title}
//               {!link && (
//                 <svg
//                   className="arrowToBottom"
//                   role="img"
//                   aria-label="flèche"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                 >
//                   <path
//                     d="M6 9L12 15L18 9"
//                     stroke="white"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               )}
//             </a>
//           </div>
//         ) : (
//           <div
//             onClick={handleClick}
//             className="ListItem"
//           >
//             {link ? <a href={link}>{title}</a> : title}
//             {!link && (
//               <svg
//                 className="arrowToBottom"
//                 role="img"
//                 aria-label="flèche"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M6 9L12 15L18 9"
//                   stroke="white"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             )}
//           </div>
//         )}

//         {subMenuItems && (
//           <SubMenu
//             isOpen={isOpen}
//             items={subMenuItems}
//           />
//         )}
//       </li>
//     );
//   };

//   const closeNavPrincipale = () => {
//     if (isMobile) {
//       document.querySelector(".nav-principal").style.display = "none";
//       document.querySelector(".CloseIcone").style.display = "flex";
//     }
//   };

//   const onClickCloseIcone = () => {
//     document.querySelector(".nav-principal").style.display = "none";
//   };

//   return (
//     <nav
//       role="navigation"
//       aria-label="Menu principal"
//       className="nav-principal"
//     >
//       <div className="CloseIcone">
//         {isMobile ? (
//           <svg
//             role="img"
//             aria-label="flèche"
//             onClick={onClickCloseIcone}
//             xmlns="http://www.w3.org/2000/svg"
//             width="37"
//             height="37"
//             viewBox="0 0 37 37"
//             fill="none"
//           >
//             <path
//               d="M27.75 9.25L9.25 27.75M9.25 9.25L27.75 27.75"
//               stroke="#FBE11A"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         ) : null}
//       </div>
//       <ul className="ListHover">
//         <MenuItems
//           title="PRATIQUE"
//           subMenuItems={["Horaires", "Inscription", "Accueil du groupe"]}
//         />
//         <MenuItems
//           title="BIBLIOTHEQUE"
//           subMenuItems={[
//             "Louis Nucéra",
//             "Romain Gary",
//             "Bib’Mobile",
//             "Raoul Mille",
//             "Bibliothèques de proximité",
//             "Bibliothèques associées",
//           ]}
//         />
//         <MenuItems
//           title="AGENDA"
//           link="/nouveaute"
//         />
//         <MenuItems
//           title="NOUVEAUTE"
//           link="/nouveaute"
//         />
//         <MenuItems
//           title="EN LIGNE"
//           link="/en_ligne"
//         />
//         <MenuItems
//           title="DECOUVRIR"
//           subMenuItems={["Livres", "Cinéma", "Presse", "Musique", "Jeunesse"]}
//         />
//         <MenuItems
//           title="PATRIMOINE"
//           subMenuItems={["Collections", "Patrimoine Numérisés"]}
//         />
//       </ul>
//     </nav>
//   );
// }

// export default NomralNavBar;

function NomralNavBar() {
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
              expandMenu("PRATIQUE");
              if (pratiqueRef.current) {
                pratiqueRef.current.classList.add("open");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === "Space") {
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
                <a href="…">Horaires</a>
              </li>
              <li>
                <a href="…">Inscription</a>
              </li>
              <li>
                <a href="…">Accueil du groupe</a>
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
              expandMenu("BIBLIOTHEQUE");
              if (bibliothequeRef.current) {
                bibliothequeRef.current.classList.add("open");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === "Space") {
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
                <a href="…">Louis Nucéra</a>
              </li>
              <li>
                <a href="…">Romain Gary</a>
              </li>
              <li>
                <a href="…">Bib’Mobile</a>
              </li>
              <li>
                <a href="…">Raoul Mille</a>
              </li>
              <li>
                <a href="…">Bibliothèques de proximité</a>
              </li>
              <li>
                <a href="…">Bibliothèque associées</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a
            href="…"
            className="button-nav"
          >
            AGENDA
          </a>
        </li>
        <li>
          <a
            href="…"
            className="button-nav"
          >
            NOUVEAUTÉS
          </a>
        </li>
        <li>
          <a
            href="…"
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
              expandMenu("DECOUVRIR");
              if (decouvrirRef.current) {
                decouvrirRef.current.classList.add("open");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === "Space") {
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
                <a href="…">Livres</a>
              </li>
              <li>
                <a href="…">Cinéma</a>
              </li>
              <li>
                <a href="…">Presse</a>
              </li>
              <li>
                <a href="…">Musique</a>
              </li>
              <li>
                <a href="…">Jeunesse</a>
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
              expandMenu("PATRIMOINE");
              if (patrimoineRef.current) {
                patrimoineRef.current.classList.add("open");
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === "Space") {
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
                <a href="…">Collections</a>
              </li>
              <li>
                <a href="…">Patrimoine numérisée</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NomralNavBar;
