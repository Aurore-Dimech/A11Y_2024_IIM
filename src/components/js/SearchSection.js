import React from "react";
import SearchBar from "../../components/js/SearchBar";
import "../css/SearchSection.css";

const SearchSection = () => {
  return (
    <section className="section-search">
      <h2>Un Monde de Savoir à Portée de Recherche !</h2>
      <SearchBar />
      <a
        href="/search/advanced-search"
        className="advanced-search"
      >
        Recherche avancée
      </a>
    </section>
  );
};

export default SearchSection;
