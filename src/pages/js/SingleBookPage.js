import React, { useState, useContext } from "react";
import greenTick from "../../assets/greenTick.svg";
import redTick from "../../assets/redTick.svg";
import bookList from "../../data/bookList";
import "../css/SingleBookPage.css";
import sugCover1 from "../../assets/sugCover1.svg";
import sugCover2 from "../../assets/sugCover2.svg";
import sugCover3 from "../../assets/sugCover3.svg";
import josh from "../../images/Josh_brand.png";
import willie from "../../images/willie.png";
import lila from "../../images/Lila.png";
import Ariane from "../../components/js/AriadnesThread";
import scoring from "../../assets/scoring.svg";
import threeStars from "../../assets/3stars.svg";
import fiveStars from "../../assets/5stars.svg";
import returnArrow from "../../assets/returnArrow.svg";
import externalLink from "../../assets/externalLink.svg";
import download from "../../assets/download.svg";
import mail from "../../assets/mail.svg";
import arrowLink from "../../assets/arrowLink.svg";
import { useIsMobile } from "../../hooks/useIsMobile";
import { BurgerContext } from "../../context/BurgerContext";
import AvoidLinkSingleBookPage from "../../components/js/AvoidLinkSingleBookPage"

const disponibility = (availableCopiesNumber) => {
  if (availableCopiesNumber === 0) {
    return {
      text: "INDISPONIBLE",
      img: redTick,
      alt: "croix rouge",
      style: { color: "#A60E0E" },
    };
  } else if (availableCopiesNumber === 1) {
    return {
      text: "1 exemplaire DISPONIBLE",
      img: greenTick,
      alt: "tick vert",
      style: { color: "#16651F" },
    };
  } else {
    return {
      text: `${availableCopiesNumber} exemplaires DISPONIBLES`,
      img: greenTick,
      alt: "tick vert",
      style: { color: "#16651F" },
    };
  }
};

function LivreInfos() {
  const [count, setCount] = React.useState(0);

  const bookListArray = Object.values(bookList);
  const selectedBook = bookListArray.find(
    (book) => book.id === Number(window.location.href.split("/").pop())
  );
  if (!selectedBook) {
    window.location.href = "/404";
  }

  const data = [
    {
      library: "Bibliothèque Alfred Hart",
      section: "Jeunesse",
      cote: "BD ARI 19",
      type: "Bande Dessinées",
      availability: "Disponible",
      returnDate: "",
    },
    {
      library: "Bibliothèque de Cimiez",
      section: "Jeunesse",
      cote: "BD ARI 19",
      type: "Bande Dessinées",
      availability: "Indisponible",
      returnDate: "",
    },
    {
      library: "Bibliothèque de Saint-Roch",
      section: "Jeunesse",
      cote: "BD ARI 19",
      type: "Bande Dessinées",
      availability: "Indisponible",
      returnDate: "24/05/2024",
    },
    {
      library: "Bibliothèque Louis Nucéra",
      section: "Jeunesse",
      cote: "BD ARI 19",
      type: "Bande Dessinées",
      availability: "Indisponible",
      returnDate: "30/05/2024",
    },
    {
      library: "Bibliothèque Raoul Mille",
      section: "Jeunesse",
      cote: "BD ARI 19",
      type: "Bande Dessinées",
      availability: "Indisponible",
      returnDate: "29/05/2024",
    },
  ];

  const sameAuthorBooks = bookListArray.filter(
    (book) => book.author === selectedBook.author && book.id !== selectedBook.id
  );

  while (sameAuthorBooks.length > 3) {
    sameAuthorBooks.pop();
  }

  const suggestions = [
    {
      cover: sugCover1,
      title: "Mortel un jour, mortel toujours !",
      author: "Mr Tan",
      publicationDate: "2018",
    },
    {
      cover: sugCover2,
      title: "Pico Love",
      author: "Dominique Roques",
      publicationDate: "2023",
    },

    {
      cover: sugCover3,
      title: "Les sorcières chèvres",
      author: "Thom Pico, Karensac",
      publicationDate: "2023",
    },
  ];

  const comments = [
    {
      photo: josh,
      name: "Josh Brand",
      publicationDate: "05 Juin 2024",
      alt: "photo de profil de Josh Brand",
      content:
        "J'ai adoré le dernier Ariol ! Les dessins sont superbes et l'histoire est très drôle. Les personnages sont toujours aussi attachants. C'est un vrai plaisir à lire.",
      scoring: fiveStars,
      altScoring: "5 étoiles sur 5",
      more: false,
    },
    {
      photo: willie,
      name: "Willie Lundi",
      publicationDate: "31 mai 2024",
      alt: "photo de profil de Willie Lundi",
      content:
        "Le nouveau tome d'Ariol est sympa, mais je trouve que certaines histoires se répètent un peu. Cela reste une bonne lecture pour les enfants.",
      scoring: threeStars,
      altScoring: "3 étoiles sur 5",
      more: true,
    },
    {
      photo: lila,
      name: "Lila Bernard",
      publicationDate: "10 Janvier 2024",
      alt: "photo de profil de Lila Bernard",
      content:
        "Le dernier tome d'Ariol est fantastique ! Les nouvelles aventures sont vraiment amusantes et les personnages sont toujours aussi adorables.",
      scoring: scoring,
      altScoring: "4 étoiles sur 5",
      more: false,
    },
  ];

  const position = [
    {
      name: "Accueil ",
      link: "/",
    },
    {
      name: ">",
      link: null,
    },
    {
      name: "Résultats de la recherche",
      link: "/recherche",
    },
    {
      name: ">",
      link: null,
    },
    {
      name: "Page du document",
      link: null,
    },
  ];

  const desktopText = (
    <>
      <table className="availability-table">
        <thead className="tableTitles">
          <tr className="tr">
            <th>Bibliothèque</th>
            <th>Section</th>
            <th>Cote</th>
            <th>Type</th>
            <th>Disponibilité</th>
            <th>Date retour</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`availability-${item.availability.toLowerCase()}`}
            >
              <td>{item.library}</td>
              <td>{item.section}</td>
              <td>{item.cote}</td>
              <td>{item.type}</td>
              <td
                className={`availability-status ${item.availability.toLowerCase()}`}
              >
                {item.availability}
              </td>
              <td>{item.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
  const mobileText = (
    <>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className={`availability-${item.availability.toLowerCase()}`}
          >
            <p className="library">{item.library} : </p>
            <div className="disponibility">
              <div className="availability-row">
                {item.availability === "Disponible" ? (
                  <img
                    src={greenTick}
                    alt=""
                  />
                ) : (
                  <img
                    src={redTick}
                    alt=""
                  />
                )}
                <p
                  className={`availability-status ${item.availability.toLowerCase()}`}
                >
                  {item.availability.toUpperCase()}
                </p>
              </div>
              {item.returnDate ? (
                <p className="return-date">Retour le {item.returnDate}</p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </>
  );

  const [isReserved, setIsReserved] = useState(false);
  const reservation = () => {
    selectedBook.availableCopiesNumber -= 1;
    setIsReserved(true);
  };

  const notReserved =
    selectedBook.availableCopiesNumber === 0 ? (
      <>
        <>
          <div className="reservation-message">
            <button
              className={"button reserve-button reserved"}
              onClick={null}
            >
              Indisponible
            </button>
          </div>
        </>
      </>
    ) : (
      <>
        <div>
          <button
            className={"button reserve-button"}
            onClick={reservation}
          >
            Réserver ce livre
          </button>
        </div>
      </>
    );
  const reserved = (
    <>
      <div className="reservation-message">
        <button
          className={"button reserve-button reserved"}
          onClick={reservation}
        >
          Réservé
        </button>
        <p className="reserved-text">
          Le livre vous est réservé jusqu’au 30 juin 2024 !
        </p>
      </div>
    </>
  );

  const { isBurgerOpen } = useContext(BurgerContext);

  const goToComments = () => {
    document.querySelector("#Comments").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main
        role="main"
        className={`container singleBookPage-container App ${
          isBurgerOpen ? "bg-burger-hidden" : ""
        }`}
      >
        <AvoidLinkSingleBookPage/>
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
                  href={window.location.href}
                  className="action"
                >
                  <img
                    src={externalLink}
                    alt="Ouvrir dans un autre onglet"
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
                    alt="exporter le document"
                  />
                </a>
              </li>
              <li>
                <a
                  href={window.location.href + "/send"}
                  className="action"
                >
                  <img
                    src={mail}
                    alt="Envoyer par mail"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div id="ContentBook" className="SingleBookPage">
          <div className="Book_img">
            {" "}
            {/* Image du livre */}
            <img
              src={selectedBook.cover}
              alt={`Couverture du livre ${selectedBook.title}`}
              className="book-cover"
            />
          </div>{" "}
          {/* Tous les informations textuelles du livres jusqu'à la description */}
          <div className="book-details">
            <h1 className="book-title single-book-title-section">
              {selectedBook.title.toUpperCase()}
            </h1>
            <div>
              <h2 className="book-author">{selectedBook.author}</h2>
              <p className="book-publisher">
                Édité par{" "}
                <a href={"/recherche/editors/" + selectedBook.editor}>
                  {selectedBook.editor}
                </a>{" "}
                - {selectedBook.publicationDate}
              </p>
            </div>
            <p className="book-description">{selectedBook.description}</p>
            <div className="rating">
              <span
                aria-label="5 étoiles"
                className="rating-stars"
              >
                <img
                  src={scoring}
                  alt="Moyenne des avis : 4 étoiles sur 5"
                />
              </span>
              <button className="go-to-comments" onClick={goToComments}>3 avis</button>
            </div>
            <div className="availability">
              <img
                src={disponibility(selectedBook.availableCopiesNumber).img}
                alt={disponibility(selectedBook.availableCopiesNumber).alt}
                className="checkmark-icon"
              />
              <span
                className="availability-text"
                style={disponibility(selectedBook.availableCopiesNumber).style}
              >
                {disponibility(selectedBook.availableCopiesNumber).text}
              </span>
            </div>
            {isReserved ? reserved : notReserved}
          </div>
          <div className="description-section">
            {" "}
            {/* Section de description du livre */}
            <h2 className="description-title">DESCRIPTION</h2>
            <dl>
              <dt className="label">Type de document:</dt>
              <dd className="value">{selectedBook.documentType}</dd>

              <dt className="label">Langue:</dt>
              <dd className="value">{selectedBook.language}</dd>

              <dt className="label">Date de publication:</dt>
              <dd className="value">{selectedBook.publicationDate}</dd>

              <dt className="label">Série:</dt>
              <dd className="value">{selectedBook.serie}</dd>

              <dt className="label">Sections:</dt>
              <dd className="value">{selectedBook.section}</dd>

              <dt className="label">Description physique:</dt>
              <dd className="value">{selectedBook.physicalAspect}</dd>

              <dt className="label">Contributeurs:</dt>
              <dd className="value">{selectedBook.contributors}</dd>

              <dt className="label">ISBN:</dt>
              <dd className="value">{selectedBook.isbn}</dd>

              <dt className="label">EAN:</dt>
              <dd className="value">{selectedBook.ean}</dd>

              <dt className="label">Popularité:</dt>
              <dd className="value">{selectedBook.popularity}</dd>
            </dl>
          </div>
        </div>
        {/* Proposition de livres */}
        <section id="Availability" className="availability-section">
          <div className="disponible_style">
            {" "}
            {/* container avec le titre "disponibilité et le traits" */}
            <div className="trait"></div>
            <h2 className="availability-title single-book-title-section">
              DISPONIBILITÉS
            </h2>
            <div className="trait"></div>
          </div>{" "}
          {/* /////////////// */}
          <p className="book-title">{selectedBook.title}</p>
          {useIsMobile() ? mobileText : desktopText}
        </section>
        <section
          className="App"
          id="singlePageComments"
        >
          <div id="Comments" className="CommentContainer">
            <div className="disponible_style">
              {" "}
              {/* container avec le titre "disponibilité et le traits" */}
              <div className="trait"></div>
              <h2
                className="availability-title single-book-title-section"
                id="Comments"
              >
                AVIS DES LECTEURS
              </h2>
              <div className="trait"></div>
            </div>
            <div  className="containerAllComments">
              <div className="containerComments">
                {" "}
                {/* section sur les avis */}
                {comments.map((comment, index) => (
                  <div
                    className="CommentCard"
                    key={comment.name}
                  >
                    {" "}
                    {/* chaque card avis */}
                    <div className="commentHeader">
                      <img
                        src={comment.photo}
                        alt={comment.alt}
                        className="commentPhoto"
                      />
                      <div className="commentNameDate">
                        <p className="commentName">{comment.name}</p>
                        <p className="commentDate">{comment.publicationDate}</p>
                      </div>
                      <img
                        src={comment.scoring}
                        alt={comment.altScoring}
                        className="commentScoring"
                      />
                    </div>
                    {comment.more ? (
                      <p className="commentContent">
                        {comment.content}{" "}
                        <span>
                          {" "}
                          <a
                            href={window.location.href + "/comments"}
                            className="commentMore"
                          >
                            Lire la suite{" "}
                          </a>
                        </span>{" "}
                      </p>
                    ) : (
                      <p className="commentContent">{comment.content}</p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <a href={window.location.href + "/allComments"}>
                  <p>VOIR TOUS LES AVIS</p>
                  <img
                    src={arrowLink}
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div id="LeaveComments" className="containerAllComments">
              <h2>Donnez nous votre avis !</h2>
              <form>
                <fieldset className="star-rating">
                  <div className="legend-and-ratings">
                    <legend>Évaluation globale :</legend>
                    <div>
                      <input
                        type="radio"
                        name="rating"
                        value="1"
                        id="rating1"
                      />
                      <label htmlFor="rating1">
                        <span>1</span>
                      </label>
                      <input
                        type="radio"
                        name="rating"
                        value="2"
                        id="rating2"
                      />
                      <label htmlFor="rating2">
                        <span>2</span>
                      </label>
                      <input
                        type="radio"
                        name="rating"
                        value="3"
                        id="rating3"
                      />
                      <label htmlFor="rating3">
                        <span>3</span>
                      </label>
                      <input
                        type="radio"
                        name="rating"
                        value="4"
                        id="rating4"
                      />
                      <label htmlFor="rating4">
                        <span>4</span>
                      </label>
                      <input
                        type="radio"
                        name="rating"
                        value="5"
                        id="rating5"
                      />
                      <label htmlFor="rating5">
                        <span>5</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="comment-description">
                  <label htmlFor="comment">
                    Écrivez votre commentaire ci-dessous :{" "}
                  </label>
                  <textarea
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Écrivez ce que vous avez pensé du livre..."
                    onChange={(e) => setCount(e.target.value.length)}
                  />
                  <p>{count}/500</p>
                </div>
                <button
                  type="submit"
                  className="button comment-button"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          <div id="SameAuthorBook" className="container-carousel">
            <div className="book_title_style">
              {" "}
              {/* container avec le titre "disponibilité et le traits" */}
              <div className="trait"></div>
              <h2 className="title_carousel single-book-title-section">
                DU MÊME AUTEUR
              </h2>
              <div className="trait"></div>
            </div>
            <div className="slides-container">
              {sameAuthorBooks.map((book, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-slides"
                  >
                    <div className="carousel-image-container">
                      <img
                        src={book.cover}
                        alt={book.title.toUpperCase()}
                        className="carousel-image"
                      />
                    </div>
                    <div className="carouselBookInformation">
                      <a
                        href={"/livre/" + book.id}
                        className="carousel-title-book"
                      >
                        {book.title.toUpperCase()}
                      </a>
                      <p className="carousel-author">{book.author}</p>
                      <p className="carousel-author">{book.publicationDate}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="Suggestions" className="container-carousel">
            <div className="book_title_style">
              {" "}
              {/* container avec le titre "disponibilité et le traits" */}
              <div className="trait"></div>
              <h2 className="title_carousel single-book-title-section">
                SUGGESTIONS
              </h2>
              <div className="trait"></div>
            </div>
            <div className="slides-container">
              {suggestions.map((book, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-slides"
                  >
                    <div className="carousel-image-container">
                      <img
                        src={book.cover}
                        alt={book.title.toUpperCase()}
                        className="carousel-image"
                      />
                    </div>
                    <div className="carouselBookInformation">
                      <a
                        href={"/livre/" + book.id}
                        className="carousel-title-book"
                      >
                        {book.title.toUpperCase()}
                      </a>
                      <p className="carousel-author">{book.author}</p>
                      <p className="carousel-author">{book.publicationDate}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LivreInfos;
