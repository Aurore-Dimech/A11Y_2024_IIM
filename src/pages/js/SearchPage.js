import React from "react";
import SearchedBooksCard from "../../components/js/SearchedBooksCard";
import bookList from "../../data/bookList";
import "../css/SearchPage.css";
import Filter from "../../components/js/filter"
import ChevronRight from "../../images/Chevron-right.png";

import chevronRight from "../../images/Chevron-right.png";

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

  return (
    <main role="main">
      <h1>RESULTAT DE LA RECHERCHE :</h1>
      <p className="ma_recherche"> Ma recherche : "Ariol"</p>
      <button className="btn_change">
        Modifier ma recherche
      </button>
      <div className="container_searchpage">
        <Filter/>
        <div className="container_livres">
          <div className="all_books">
            <div className="numberOnTheTop">
              <div className="container_numberOnTheTop">
                <p>
                  Résultats : 1 - 10/100
                </p>
                <nav aria-label="Pagination">
                  <ul className="pagination">
                    <li>
                        <a href="#" className="arrow left" aria-label="Previous page">&lt;</a>
                    </li>
                    <li>
                        <a href="#" className="page active" aria-current="page">1</a>
                    </li>
                    <li>
                        <a href="#" className="page">2</a>
                    </li>
                    <li>
                        <a href="#" className="page">3</a>
                    </li>
                    <li>
                        <span class="dots" aria-hidden="true">...</span>
                    </li>
                    <li>
                        <a href="#" className="page">100</a>
                    </li>
                    <li>
                        <a href="#" className="arrow right" aria-label="Next page">&gt;</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="SecondLineFilter"> {/* container avec la deuxième ligne de filtre avant la liste de livres */}
                <div className= "tenPerPage">
                  <img src={chevronRight} alt="flèche vers bas pour lister le nombre de livre sur une page" className="chevron" />
                  <p className="ten"> 10 </p> <p>par page</p> 
                </div>
                <div className="Tri_Affichage">
                  <div className="filtreTri" >
                    <p >Tri:</p>
                    <p className="ten">Pertinence</p>
                    <img src={chevronRight} alt="flèche vers bas pour lister le nombre de livre sur une page" className="chevron" />

                  </div>
                  <div className="filtreTri">
                    <p>Affichage:</p>
                    <p className="ten">Liste</p>
                    <img src={chevronRight} alt="flèche vers bas pour lister le nombre de livre sur une page" className="chevron" />

                  </div>

                </div>

              </div>
            </div>
            {" "} 
            {/* container de tous les livres */}
            {list}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Recherche;
