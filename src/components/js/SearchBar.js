import React, { useState, useContext, useEffect, useRef } from "react";
import "../css/SearchBar.css";
import SearchIcon from "../../assets/searchIcon.svg";

import { useIsMobile } from "../../hooks/useIsMobile";

import { BurgerContext } from "../../context/BurgerContext";

import inputRecommandations from "../../data/inputRecommandations";

const SearchBar = () => {
  const inputArray = Object.values(inputRecommandations);

  let [inputValue, setInputValue] = useState("");
  const [selectedRecommandation, setSelectedRecommandation] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    let newSelectedRecommandation = inputArray.filter((recommandation) =>
      recommandation.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setSelectedRecommandation(newSelectedRecommandation);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      inputValue === "" ||
      inputValue === " " ||
      inputValue === null ||
      inputValue === undefined
    ) {
      inputValue = "...";
    }
    window.location.href = `/recherche/${inputValue}`;
  };

  const { isBurgerOpen } = useContext(BurgerContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);
  const searchInputButton = React.useRef(null);
  const searchInput = React.useRef(null);

  useEffect(() => {
    if (refs.current[activeIndex]) {
      refs.current[activeIndex].focus();
    }
  }, [activeIndex]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prevActiveIndex) =>
        Math.min(prevActiveIndex + 1, selectedRecommandation.length - 1)
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prevActiveIndex) => Math.max(prevActiveIndex - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      setInputValue(selectedRecommandation[activeIndex].title);
      setSelectedRecommandation([]);
      event.stopPropagation();
      searchInputButton.current.focus(); 
    }
  };

  const handleKeysInput = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      searchInputButton.current.focus(); 
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      refs.current[activeIndex].focus();
    }
  };

  return (
    <div className="search-and-recommandations">
      <form
        role="search"
        className={`search-bar ${isBurgerOpen ? "bg-burger-hidden" : ""}`}
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
          ref={searchInput}
          type="search"
          title="Recherchez par mots-clés"
          placeholder={
            useIsMobile() ? "Rechercher..." : "Recherchez votre document..."
          }
          className="search-input"
          onChange={handleInputChange}
          value={inputValue}
          onKeyDown={handleKeysInput}
        />
        {inputValue !== "" && (
          <div className="recommandations" onKeyDown={handleKeyDown}>
            <ul>
              {selectedRecommandation.map((recommandation, index) => (
                <li key={index}>
                  <button
                    type="button"
                    ref={(el) => refs.current[index] = el}
                    onClick={() => setInputValue(recommandation.title)}
                  >
                    {recommandation.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          type="submit"
          ref={searchInputButton}
          // href={`/recherche/${inputValue}`}
          value="Rechercher"
          className="search search-button"
          // onKeyDown={handleSubmit}
          onClick={handleSubmit}
          onKeyDown={(event) => {
            if (event.shiftKey && event.key === 'Tab') {
              event.preventDefault();
              searchInput.current.focus();
            }
          }}
        >
          {" "}
          <span className="span">Rechercher</span>
          <img
            src={SearchIcon}
            alt="Rechercher"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
