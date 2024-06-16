import React, { useState } from "react";
import "../css/SearchBar.css";
import SearchIcon from "../../assets/searchIcon.svg";

import { useIsMobile } from "../../hooks/useIsMobile";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/recherche/${inputValue}`;
  };

  return (
    <form
      role="search"
      className="search-bar"
      onSubmit={handleSubmit}
    >
      <div className="search search-catalogue">
        <select title="Listes des fonctionnailités et disponibilités du site internet">
          <option value="">Catalogue</option>
          <option value="">Livres numériques</option>
          <option value="">Pitem</option>
          <option value="">Agenda</option>
          <option value="">Page du site</option>
          <option value="">Archives</option>
        </select>
      </div>
      <input
        type="search"
        title="Recherchez par mots-clés"
        placeholder={useIsMobile() ? "Rechercher..." : "Recherchez votre document..."}
        className="search-input"
        onChange={handleInputChange}
      />
      <a
        type="submit"
        href={`/recherche/${inputValue}`}
        value="Rechercher"
        className="search search-button"
      >
       <span className="span"> Rechercher </span>
        <img
          src={SearchIcon}
          alt=""
        />
      </a>
    </form>
  );
};

export default SearchBar;
