import React from "react";
import AvoidLinkHeader from "../../components/js/AvoidLinkHeader"
import "../css/AvoidLink.css"


function AvoidLinkSearchPage () {
    return(
        <ul className="AvoidLink">
            <AvoidLinkHeader/>
            <li>
                <a href="#CollectionsBook"> Livres de la collection</a>
            </li>
            <li>
                <a href="#Footer">Footer</a>
            </li>
        </ul>
    )
}

export default AvoidLinkSearchPage;