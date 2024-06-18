import React, { useState, useEffect, useContext } from "react";
import SearchedBooksCard from "../../components/js/SearchedBooksCard";
import bookList from "../../data/bookList";
import "../css/SearchPage.css";
import Filter from "../../components/js/filter";
import FilteResponsive from "../../components/js/filteResponsive";
import chevronRight from "../../images/Chevron-right.png";
import Ariane from "../../components/js/AriadnesThread";
import returnArrow from "../../assets/returnArrow.svg";
import share from "../../assets/searchShare.svg";
import history from "../../assets/searchHistory.svg";
import download from "../../assets/download.svg";
import AvoidLinkSearchPage from "../../components/js/AvoidLinkSearchPage";
import { BurgerContext } from "../../context/BurgerContext";

function Recherche() {
  const list = Object.keys(bookList).map((book) => (
    <SearchedBooksCard
      key={book}
      cover={bookList[book].cover}
      id={bookList[book].id}
      title={bookList[book].title}
      author={bookList[book].author}
      publicationDate={bookList[book].publicationDate}
      description={bookList[book].description}
      availableCopiesNumber={bookList[book].availableCopiesNumber}
      documentType={bookList[book].documentType}
    />
  ));
  const [DisplayFilter, setDisplayFilter] = useState(false);
  const [ButtonDisplayClick, setButtonDisplayClick] = useState(false);

  const toggleFilterMobile = () => {
    setDisplayFilter((prevDisplayFilter) => !prevDisplayFilter);
    setButtonDisplayClick((prevButtonDisplayClick) => !prevButtonDisplayClick);

    const title_search = document.querySelector(".result-search-title");
    const result_search = document.querySelector(".container_searchpage");
    if (
      title_search.style.display !== "none" &&
      result_search.style.display !== "none"
    ) {
      title_search.style.display = "none";
      result_search.style.display = "none";
    }

    const filterMobile = document.querySelector(".container_filteResponsive");
    if (filterMobile) {
      filterMobile.style.display = "flex";
      filterMobile.style.position = "absolute";
      filterMobile.style.top = "0";
      filterMobile.style.left = "0";
      filterMobile.style.width = "100%";
      filterMobile.style.height = "auto";
      filterMobile.style.padding = "2rem";
    }
  };

  const closeFilterMobile = () => {
    setButtonDisplayClick(false);
    setDisplayFilter(false);

    const title_search = document.querySelector(".result-search-title");
    const result_search = document.querySelector(".container_searchpage");

    title_search.style.display = "flex";
    result_search.style.display = "flex";

    const filterMobile = document.querySelector(".container_filteResponsive");
    if (filterMobile) {
      filterMobile.style.display = "none";
    }
  };

  useEffect(() => {}, [DisplayFilter, ButtonDisplayClick]);

  const position = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: ">",
      link: null,
    },
    {
      name: "Résultats de la recherche",
      link: null,
    },
  ];

  const focuSearchBar = () => {
    const searchBar = document.querySelector(".search-input");
    const ChangeReasearch = document.querySelector(".btn_change");

    ChangeReasearch.scrollTo({ top: 0, behavior: "smooth" });
    searchBar.focus();
  };

  const { isBurgerOpen } = useContext(BurgerContext);

  return (
    <main
      role="main"
      className={`MainPage App ${isBurgerOpen ? "bg-burger-hidden" : ""}`}
    >
      <AvoidLinkSearchPage/>
      <Ariane position={[position]} />
      <div className="return-actions">
        <div className="return">
          <img
            src={returnArrow}
            alt=""
          />
          <a href="/recherche/ariol">Retour à la page précédente</a>
        </div>
        <div className="actions">
          <ul>
            <li>
              <a
                href={window.location.href + "/share"}
                className="action"
              >
                <img
                  src={share}
                  alt="Partager la recherche"
                />
              </a>
            </li>
            <li>
              <a
                href={window.location.href + "/history"}
                className="action"
              >
                <img
                  src={history}
                  alt="Historique des recherches"
                />
              </a>
            </li>
            <li>
              <a
                href={window.location.href + "/export"}
                className="action"
              >
                <img
                  src={download}
                  alt="Exporter la recherche"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {DisplayFilter ? (
        <div className="filterMobile">
          <FilteResponsive closeFilterMobile={closeFilterMobile} />
        </div>
      ) : (
        ""
      )}

      <div className="result-search-title">
        <h1 className="SearchResult">RÉSULTAT DE LA RECHERCHE</h1>
        <p className="ma_recherche">
          {" "}
          Ma recherche : "<span>{window.location.href.split("/").pop()}"</span>
        </p>
        <button
          className="button modif_search"
          onClick={focuSearchBar}
        >
          Modifier ma recherche
        </button>
      </div>
      <div className="container_searchpage">
        <Filter
          ButtonDisplayClick={ButtonDisplayClick}
          closeFilterMobile={closeFilterMobile}
        />
        <div className="container_livres">
          <div className="all_books">
            <div className="numberOnTheTop">
              <div className="container_numberOnTheTop One">
                <p>Résultats : 1 - 10/100</p>
                <nav
                  aria-label="Pagination"
                  className="p1"
                >
                  <ul className="pagination">
                    <li>
                      <a
                        href="/previous-page"
                        className="arrow left"
                        aria-label="Previous page"
                      >
                        &lt;
                      </a>
                    </li>
                    <li>
                      <a
                        href="/page"
                        className="button"
                        aria-current="page"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="/page"
                        className="button"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="/page"
                        className="button"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <span
                        className="dots"
                        aria-hidden="true"
                      >
                        ...
                      </span>
                    </li>
                    <li>
                      <a
                        href="/page"
                        className="button"
                      >
                        100
                      </a>
                    </li>
                    <li>
                      <a
                        href="/next-page"
                        className="arrow right"
                        aria-label="Next page"
                      >
                        &gt;
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="container_numberOnTheTop deux">
                <button
                  className="button"
                  onClick={toggleFilterMobile}
                >
                  Affiner votre recherche
                </button>
                <p>Résultats : 1 - 10/100</p>
              </div>
              <div className="SecondLineFilter one">
                {" "}
                {/* container avec la deuxième ligne de filtre avant la liste de livres */}
                <div className="tenPerPage">
                  <img
                    src={chevronRight}
                    alt="flèche vers bas pour lister le nombre de livre sur une page"
                    className="chevron"
                  />
                  <p className="ten"> 10 </p> <p>par page</p>
                </div>
                <div className="Tri_Affichage">
                  <div className="filtreTri">
                    <p>Tri:</p>
                    <p className="ten">Pertinence</p>

                    <img
                      src={chevronRight}
                      alt="flèche vers bas pour lister le nombre de livre sur une page"
                      className="chevron"
                    />
                  </div>
                  <div className="filtreTri">
                    <p>Affichage:</p>
                    <p className="ten">Liste</p>
                    <img
                      src={chevronRight}
                      alt="flèche vers bas pour lister le nombre de livre sur une page"
                      className="chevron"
                    />
                  </div>
                </div>
              </div>
              <div className="SecondLineFilter deux">
                {" "}
                {/* container avec la deuxième ligne de filtre avant la liste de livres */}
                <div className="tenPerPage">
                  <img
                    src={chevronRight}
                    alt="flèche vers bas pour lister le nombre de livre sur une page"
                    className="chevron"
                  />
                  <p className="ten"> 10 </p> <p>par page</p>
                </div>
                <div className="filtreTri">
                  <p>Tri:</p>
                  <p className="ten">Pertinence</p>
                  <img
                    src={chevronRight}
                    alt="flèche vers bas pour lister le nombre de livre sur une page"
                    className="chevron"
                  />
                </div>
                <div className="filtreTri">
                  <p>Affichage:</p>
                  <p className="ten">Liste</p>
                  <img
                    src={chevronRight}
                    alt="flèche vers bas pour lister le nombre de livre sur une page"
                    className="chevron"
                  />
                </div>
              </div>
            </div>{" "}
            {/* container de tous les livres */}
            {list}
            <div className="container_numberOnTheTop One">
              <p>Résultats : 1 - 10/100</p>
              <nav
                aria-label="Pagination"
                className="p2"
              >
                <ul className="pagination">
                  <li>
                    <a
                      href="/previous-page"
                      className="arrow left"
                      aria-label="Previous page"
                    >
                      &lt;
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page"
                      className="button"
                      aria-current="page"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page"
                      className="button"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page"
                      className="button"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <span
                      className="dots"
                      aria-hidden="true"
                    >
                      ...
                    </span>
                  </li>
                  <li>
                    <a
                      href="/page"
                      className="button"
                    >
                      100
                    </a>
                  </li>
                  <li>
                    <a
                      href="/next-page"
                      className="arrow right"
                      aria-label="Next page"
                    >
                      &gt;
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="container_numberOnTheTop deux bottom">
              <nav
                aria-label="Pagination"
                className="p2"
              >
                <ul className="pagination bottom">
                  <li>
                    <a
                      href="/previous-page"
                      className="arrow left"
                      aria-label="Previous page"
                    >
                      &lt;
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page"
                      className="button"
                      aria-current="page"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page"
                      className="button"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="/page"
                      className="button"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <span
                      className="dots"
                      aria-hidden="true"
                    >
                      ...
                    </span>
                  </li>
                  <li>
                    <a
                      href="/page"
                      className="button"
                    >
                      100
                    </a>
                  </li>
                  <li>
                    <a
                      href="/next-page"
                      className="arrow right"
                      aria-label="Next page"
                    >
                      &gt;
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Recherche;
