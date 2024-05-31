import React from "react";
import "../css/SearchBar.css";
import SearchIcon from "../../assets/searchIcon.svg";

const SearchBar = () => {
  return (
    <form
      role="search"
      className="search-bar"
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
        placeholder="Recherchez votre document..."
        className="search-input"
      />
      <button
        type="submit"
        value="Rechercher"
        className="search search-button"
      >
        Rechercher
        <img
          src={SearchIcon}
          alt=""
        />
      </button>
    </form>
  );
};

export default SearchBar;
