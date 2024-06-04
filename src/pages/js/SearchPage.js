import React from "react";
import "../../App.css";
import SearchedBooksCard from "../../components/js/SearchedBooksCard";
import bookList from "../../data/bookList";
import "../css/SearchPage.css";
import Filter from "../../components/js/filter"

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
      <h1>RESULTAT DE LA RECHERCHE:</h1>
      <div className="container_searchpage">
        <Filter/>
        <div className="container_livres">
          <div className="all_books">
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
