import React, {useState, useEffect} from "react";
import SearchedBooksCard from "../../components/js/SearchedBooksCard";
import bookList from "../../data/bookList";
import "../css/SearchPage.css";
import Filter from "../../components/js/filter"
import FilteResponsive from "../../components/js/filteResponsive"
import ChevronRight from "../../images/Chevron-right.png";
import chevronRight from "../../images/Chevron-right.png";
import Ariane from "../../components/js/AriadnesThread";

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
  const [ButtonDisplayClick, setButtonDisplayClick] = useState(false)
  const toggleFilterMobile = () => {
    setDisplayFilter((prevDisplayFilter) => !prevDisplayFilter); 
    setButtonDisplayClick((prevButtonDisplayClick) => !prevButtonDisplayClick); 
 
    const filterMobile = document.querySelector('.container_filteResponsive');
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
  setButtonDisplayClick(false)
  setDisplayFilter(false);
  
 
  const filterMobile = document.querySelector('.container_filteResponsive');
  if (filterMobile) {
    filterMobile.style.display = "none";
    }
  }

  useEffect(() => {
    console.log("DisplayFilter", DisplayFilter);
    console.log("ButtonDisplayClick", ButtonDisplayClick);
  }, [DisplayFilter, ButtonDisplayClick]);

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

  return (

    <main role="main">
      {DisplayFilter ? 
        <div className="filterMobile" >
          <FilteResponsive  closeFilterMobile={closeFilterMobile}/>
        </div> : 
      ""}

      <h1>RESULTAT DE LA RECHERCHE :</h1>
      <p className="ma_recherche"> Ma recherche : "Ariol"</p>
      <button className="btn_change">Modifier ma recherche</button>
      <div className="container_searchpage">

        <Filter ButtonDisplayClick= {ButtonDisplayClick}  closeFilterMobile={closeFilterMobile}/>
        <div className="container_livres">
          <div className="all_books">
            <div className="numberOnTheTop">
              <div className="container_numberOnTheTop One">
                <p>
                  Résultats : 1 - 10/100
                </p>
                <nav aria-label="Pagination" className="p1">

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
                        className="page active"
                        aria-current="page"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="/page"
                        className="page"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="/page"
                        className="page"
                      >
                        3
                      </a>
                    </li>
                    <li>

                        <span className="dots" aria-hidden="true">...</span>

                    </li>
                    <li>
                      <a
                        href="/page"
                        className="page"
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
                <button className="DisplaySearchBtn" onClick={toggleFilterMobile} >
                  Affiner votre recherche
                </button>
                <p>
                  Résultats : 1 - 10/100
                </p>
              </div>
              <div className="SecondLineFilter one"> {/* container avec la deuxième ligne de filtre avant la liste de livres */}
                <div className= "tenPerPage">
                  <img src={chevronRight} alt="flèche vers bas pour lister le nombre de livre sur une page" className="chevron" />
                  <p className="ten"> 10 </p> <p>par page</p> 

                </div>
                <div className="Tri_Affichage">
                  <div className="filtreTri">
                    <p>Tri:</p>
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
              <div className="SecondLineFilter deux"> {/* container avec la deuxième ligne de filtre avant la liste de livres */}
                <div className= "tenPerPage">
                  <img src={chevronRight} alt="flèche vers bas pour lister le nombre de livre sur une page" className="chevron" />
                  <p className="ten"> 10 </p> <p>par page</p> 
                </div>
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
              {" "} 
              {/* container de tous les livres */}
              {list}
              <div className="container_numberOnTheTop One">
                <p>
                  Résultats : 1 - 10/100
                </p>
                <nav aria-label="Pagination" className="p2">
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
                        <span className="dots" aria-hidden="true">...</span>
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
              <div className="container_numberOnTheTop deux bottom">      
                <nav aria-label="Pagination" className="p2">
                  <ul className="pagination bottom">
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
                        <span className="dots" aria-hidden="true">...</span>
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default Recherche;
