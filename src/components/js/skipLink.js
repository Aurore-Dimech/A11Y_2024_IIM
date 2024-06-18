import React from "react";
import "../css/skipLink.css";

const SkipLink = () => {
  return (
    <ul id="evitement">
      <li>
        <a href="#navbar">Aller à la navigation</a>
      </li>
      <li>
        <a href="#main-search-bar ">Aller à la recherche</a>
      </li>
      <li>
        <a href="#main">Aller au contenu</a>
      </li>
      <li>
        <a href="#Footer">Aller au pied de page</a>
      </li>
    </ul>
  );
};

export default SkipLink;
