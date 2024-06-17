import React from "react";
import "../css/AvoidLinkMain.css"; 
// import AvoidLinkHeader from "../../components/js/AvoidLinkMain"

const AvoidLinkMain = () => {

return (
    <ul className="">
        {/* <AvoidLinkHeader/>   */}
        <li>
            <a href="#AlaUne">Aller au contenu</a>
        </li>
        <li>
            <a href="#Agenda">Aller à l'agenda</a>
        </li>
        <li>
            <a href="#Barrederecherche">Aller à la seconde barre de recherche</a>
        </li>
        <li>
            <a href="#ProjetsUE">Aller au projet Européens</a>
        </li>
        <li>
            <a href="#Footer">Aller au footer</a>
        </li>

    </ul>
)

}

export default AvoidLinkMain;