import React, { useState, useContext, useEffect, useRef } from "react";
import "../css/SearchBar.css";
import SearchIcon from "../../assets/searchIcon.svg";

import { useIsMobile } from "../../hooks/useIsMobile";

import { BurgerContext } from "../../context/BurgerContext";

import inputRecommandations from "../../data/inputRecommandations";

const SearchBar = () => {
  const selectRef = useRef(null);

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
    if (!inputValue.trim()) {
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
      if (activeIndex === 0) {
        searchInput.current.focus();
      } else {
        setActiveIndex((prevActiveIndex) => Math.max(prevActiveIndex - 1, 0));
      }
    } else if (event.key === "Enter") {
      event.preventDefault();
      setInputValue(selectedRecommandation[activeIndex].title);
      setSelectedRecommandation([]);
      event.stopPropagation();
      searchInputButton.current.focus();
    } else if (event.key === "Escape" || event.key === "Tab") {
      event.preventDefault();
      setSelectedRecommandation([]);
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
    if (event.key === "Enter") {
      event.preventDefault();
      searchInputButton.current.focus();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      searchInputButton.current.focus();
    }
    if (event.key === "Tab" && event.shiftKey) {
      event.preventDefault();
      selectRef.current.focus();
    }
  };

  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  useEffect(() => {
    setIsSearchInputFocused(document.activeElement === searchInput.current);
  }, [inputValue, selectedRecommandation]);

useEffect(() => {
  const handleFocus = () => setIsSearchInputFocused(true);
  const handleBlur = () => {
      setTimeout(() => {
          if (document.activeElement !== searchInput.current && !refs.current.includes(document.activeElement)) {
              setIsSearchInputFocused(false);
          }
      }, 0);
  };

  searchInput.current.addEventListener('focus', handleFocus);
  searchInput.current.addEventListener('blur', handleBlur);

  return () => {
      searchInput.current.removeEventListener('focus', handleFocus);
      searchInput.current.removeEventListener('blur', handleBlur);
  };
}, []);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      searchInput.current &&
      !searchInput.current.contains(event.target) &&
      !refs.current.some((ref) => ref && ref.contains(event.target))
    ) {
      setIsSearchInputFocused(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      setTimeout(() => {
        if (
          searchInput.current &&
          !searchInput.current.contains(document.activeElement) &&
          !refs.current.some((ref) => ref && ref.contains(document.activeElement))
        ) {
          setIsSearchInputFocused(false);
        }
      }, 0);
    }
  };

  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <div
      className={`search-and-recommandations ${
        isBurgerOpen ? "bg-burger-hidden" : ""
      }`}
    >
      <form
        role="search"
        className={`search-bar`}
        onSubmit={handleSubmit}
      >
        <div className="search search-catalogue">
          <select title="Listes des fonctionnailités et disponibilités du site internet" ref={selectRef}>
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
        {inputValue !== "" &&
          selectedRecommandation.length > 0 &&
          isSearchInputFocused && (
            <div
              className="recommandations"
              onKeyDown={handleKeyDown}
            >
              <ul>
                {selectedRecommandation.map((recommandation, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      ref={(el) => (refs.current[index] = el)}
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
        aria-label="Rechercher"
          type="submit"
          ref={searchInputButton}
          // href={`/recherche/${inputValue}`}
          value="Rechercher"
          className="search search-button"
          // onKeyDown={handleSubmit}
          onClick={handleSubmit}
          onKeyDown={(event) => {
            if (event.shiftKey && event.key === "Tab") {
              event.preventDefault();
              searchInput.current.focus();
            }
          }}
        >
          {" "}
          <span className="span">Rechercher</span>
          <img
            src={SearchIcon}
            alt=""
            aria-hidden="true"
            focusable="false"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
