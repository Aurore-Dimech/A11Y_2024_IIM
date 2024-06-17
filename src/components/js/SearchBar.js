import React, { useState, useContext } from "react";
import "../css/SearchBar.css";
import SearchIcon from "../../assets/searchIcon.svg";

import { useIsMobile } from "../../hooks/useIsMobile";

import { BurgerContext } from "../../context/BurgerContext";

const SearchBar = () => {
  let [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "" || inputValue === " " || inputValue === null || inputValue === undefined) {
      inputValue = "...";
    };
    window.location.href = `/recherche/${inputValue}`;
  };

  const { isBurgerOpen } = useContext(BurgerContext);

  return (
    <form
      role="search"
      className= {`search-bar ${isBurgerOpen ? "bg-burger-hidden" : ""}`}
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
        onKeyDown={handleSubmit}
        onClick={handleSubmit}
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
