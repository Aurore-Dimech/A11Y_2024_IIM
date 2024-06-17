import React from "react";
import AvoidLinkHeader from "./AvoidLinkHeader"
import "../css/AvoidLink.css"

function AvoidLinkSingleBookPage () {
    return (
        <ul className="AvoidLink">
            <AvoidLinkHeader/>
            <li>
                <a href="#ContentBook">Aller aux informations du livre</a>
            </li>
            <li>
                <a href="#Availability">Aller aux disponibilités</a>
            </li>
            <li>
                <a href="#Comments">Aller aux avis des lecteurs</a>
            </li>
            <li>
                <a href="#LeaveComments">Aller à "Donnez votre avis"</a>
            </li>
            <li>
                <a href="#SameAuthorBook">Aller aux livres du même auteur</a>
            </li>
            <li>
                <a href="#Suggestions">Aller aux suggestions</a>
            </li>
            <li>
                <a href="#Footer">Aller au footer</a>
            </li>
        </ul>
    )
}

export default AvoidLinkSingleBookPage;