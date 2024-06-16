import React, {useState} from "react";
import Logo from "../../assets/logo.svg";
import "../css/Header.css";
import SearchBar from "./SearchBar";
import horloge from "../../images/horloge.png";
import accessibilite from "../../images/accessibilite.png";
import icon_aide from "../../images/aide_icone.png";
import drapeau from "../../images/drapeau.png";
import flehe_bas from "../../images/flèche_vers_bas.png";
import NormalNavBar from "./NomralNavBar";
function Navbar() {
 const [ScreenSize, setScreenSize] = useState(false);

 const handleResize = () => {
  if (window.innerWidth < 960) {
    setScreenSize(true);
  } else {
    setScreenSize(false);
  }
 }

 const onClickOpenNavBar = () => { 
  document.querySelector('.nav-principal').style.display = "flex";
  // document.querySelector('.CloseIcone').style.display = "flex";
}

  return (
    <>
      <header role="banner">
        <div className="header">

          <a  className="logo_flex " href="/">
            <img
              src={Logo}
              className="logo"
              alt="logo de la bibliothèque - Accueil"
            />
          </a>
          <div className="search_bar_infos">
            <div className="NavAndSearchBar">
              <svg xmlns="http://www.w3.org/2000/svg" onClick={onClickOpenNavBar} className="svgMenuBurger" height="25"  fill="noe">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 5.5C3.23478 5.5 2.98043 5.60536 2.79289 5.79289C2.60536 5.98043 2.5 6.23478 2.5 6.5C2.5 6.76522 2.60536 7.01957 2.79289 7.20711C2.98043 7.39464 3.23478 7.5 3.5 7.5H20.5C20.7652 7.5 21.0196 7.39464 21.2071 7.20711C21.3946 7.01957 21.5 6.76522 21.5 6.5C21.5 6.23478 21.3946 5.98043 21.2071 5.79289C21.0196 5.60536 20.7652 5.5 20.5 5.5H3.5ZM2.5 12.5C2.5 12.2348 2.60536 11.9804 2.79289 11.7929C2.98043 11.6054 3.23478 11.5 3.5 11.5H20.5C20.7652 11.5 21.0196 11.6054 21.2071 11.7929C21.3946 11.9804 21.5 12.2348 21.5 12.5C21.5 12.7652 21.3946 13.0196 21.2071 13.2071C21.0196 13.3946 20.7652 13.5 20.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5ZM2.5 18.501C2.5 18.2358 2.60536 17.9814 2.79289 17.7939C2.98043 17.6064 3.23478 17.501 3.5 17.501H20.5C20.7652 17.501 21.0196 17.6064 21.2071 17.7939C21.3946 17.9814 21.5 18.2358 21.5 18.501C21.5 18.7662 21.3946 19.0206 21.2071 19.2081C21.0196 19.3956 20.7652 19.501 20.5 19.501H3.5C3.23478 19.501 2.98043 19.3956 2.79289 19.2081C2.60536 19.0206 2.5 18.7662 2.5 18.501Z" fill="#4237CB"/>
              </svg>
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
                  <img src = {flehe_bas} alt=""/>
                </a>
              </li>
              <li>
                <a href="/infos" className="research">
                  Recherche avancée
                </a>
              </li> 
            </ul>     
          </div>

        </div>
      </header>
      <NormalNavBar />
    </>
  );
}

export default Navbar;
