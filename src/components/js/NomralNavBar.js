import React, {useState, useEffect} from "react";
import "../css/NomralNavBar.css";
import ChevronBottom from "../../images/ChevronToBottom.png";

function NomralNavBar(clickHandler) {
const [isMobile, setIsMobile] = useState(window.innerWidth < 880);

const handleResize = () => {
    setIsMobile(window.innerWidth < 880);
}

useEffect(() => { 
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };

}, []);



const SubMenu = ({isOpen, items}) => {
    return (
        <ul className={`DetailsList ${isOpen ? 'open': ''}`}>
            {items.map((items, index) => (
                <li className="li" key={index}>
                    <a href="/">{items}</a>
                </li>
            ))}
        </ul>
    )
}

const MenuItems = ({title, link, subMenuItems}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const preventDefault = (e) => {
        e.preventDefault();
    }

    return (
        <li className="List">
            {subMenuItems ? 
            <div onClick={handleClick} className="ListItem">
                <a href="/" onClick={preventDefault} className="linkForList" >
                    {link ? <a href={link}>{title}</a> : title}
                    {!link && (
                        <svg className="arrowToBottom" role="img" aria-label="flèche"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </a>
            </div> : 
        <div onClick={handleClick} className="ListItem">
        {link ? <a href={link}>{title}</a> : title}
        {!link && (
            <svg className="arrowToBottom" role="img" aria-label="flèche"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )}
    </div>
            }
            
            {subMenuItems && <SubMenu isOpen={isOpen} items={subMenuItems} />}
        </li>
    )
}

const closeNavPrincipale = () => { 
  if (isMobile) {    
    document.querySelector('.nav-principal').style.display = "none";
    document.querySelector('.CloseIcone').style.display = "flex";

    
  }
}

const onClickCloseIcone = () => {
    document.querySelector('.nav-principal').style.display = "none";
    
}



return (
    
    <nav
        role="navigation"
        aria-label="Menu principal"
        className="nav-principal"
      >
        <div className="CloseIcone">
            {isMobile ?
                <svg  role="img" aria-label="flèche" onClick={onClickCloseIcone}  xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                <path d="M27.75 9.25L9.25 27.75M9.25 9.25L27.75 27.75" stroke="#FBE11A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> : null    
            }
            
        </div>
        <ul className="ListHover">
            <MenuItems title = "PRATIQUE" subMenuItems={["Horaires", "Inscription", "Accueil du groupe"]} />
            <MenuItems title = "BIBLIOTHEQUE" subMenuItems={["Louis Nucéra", "Romain Gary", "Bib’Mobile", "Raoul Mille", "Bibliothèques de proximité", "Bibliothèques associées"]} />
            <MenuItems title = "AGENDA" link="/nouveaute" />
            <MenuItems title = "NOUVEAUTE" link="/nouveaute" />
            <MenuItems title = "EN LIGNE" link="/en_ligne" />
            <MenuItems title = "DECOUVRIR" subMenuItems={["Livres", "Cinéma", "Presse", "Musique", "Jeunesse"]} />
            <MenuItems title = "PATRIMOINE" subMenuItems={["Collections", "Patrimoine Numérisés"]} />
        </ul>
    </nav>














)
}

export default NomralNavBar;
