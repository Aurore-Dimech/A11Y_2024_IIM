import React from "react";
import greenTick from "../../assets/greenTick.svg";
import redTick from "../../assets/redTick.svg";
import Carousel from "../../components/CarouselLivres";
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
      availability: "Disponible",
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

  const suggestions = [
    {
      cover: sugCover1,
      title: "Mortel un jour, mortel toujours !",
      author: "Mr Tan",
      publicationDate : "2018"
    },
    {
      cover: sugCover2,
      title: "Pico Love",
      author: "Dominique Roques",
      publicationDate : "2023"
    },

    {
      cover: sugCover3,
      title: "Les sorcières chèvres",
      author: "Thom Pico, Karensac",
      publicationDate : "2023"
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

  return (
    <>
      <main
        role="main"
        className="container singleBookPage-container"
      >
        <Ariane position={[position]} />
          <div className="return">
            <img
              src={returnArrow}
              alt=""
            />
            <a href="/recherche/ariol">Retour à la page précédente</a>
          </div>
          <div className="SingleBookPage">
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
              <h2 className="book-title">{selectedBook.title.toUpperCase()}</h2>
              <div>
                <h3 className="book-author">{selectedBook.author}</h3>
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
                <a href="#Comments">3 avis</a>
              </div>
              <div className="availability">
                <img
                  src={disponibility(selectedBook.availableCopiesNumber).img}
                  alt={disponibility(selectedBook.availableCopiesNumber).alt}
                  className="checkmark-icon"
                />
                <span
                  className="availability-text"
                  style={
                    disponibility(selectedBook.availableCopiesNumber).style
                  }
                >
                  {disponibility(selectedBook.availableCopiesNumber).text}
                </span>
              </div>
              <div>
                <button className="reserve-button button">
                  Réserver ce livre
                </button>
              </div>
            </div>
            <div className="description-section">
              {" "}
              {/* Section de description du livre */}
              <h3 className="description-title">DESCRIPTION</h3>
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
          <section className="availability-section">
            <div className="disponible_style">
              {" "}
              {/* container avec le titre "disponibilité et le traits" */}
              <div className="trait"></div>
              <h3 className="availability-title">DISPONIBILITÉS</h3>
              <div className="trait"></div>
            </div>{" "}
            {/* /////////////// */}
            <p className="book-title">{selectedBook.title}</p>
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
          </section>
          <section
            className="App"
            id="singlePageComments"
          >
            <div className="CommentContainer">
              <div className="disponible_style">
                {" "}
                {/* container avec le titre "disponibilité et le traits" */}
                <div className="trait"></div>
                <h3
                  className="availability-title"
                  id="Comments"
                >
                  AVIS DES LECTEURS
                </h3>
                <div className="trait"></div>
              </div>
              <div className="containerAllComments">
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
                          <p className="commentDate">
                            {comment.publicationDate}
                          </p>
                        </div>
                        <img
                          src={comment.scoring}
                          alt={comment.altScoring}
                          className="commentScoring"
                        />
                      </div>
                      <p className="commentContent">{comment.content}</p>
                    </div>
                  ))}
                </div>
                <a href={window.location.href + "/allComments"}>
                  VOIR TOUS LES AVIS
                </a>
              </div>

              <div className="containerAllComments">
                <h3>Donnez nous votre avis !</h3>
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
            <Carousel
              title="DU MÊME AUTEUR"
              books={sameAuthorBooks}
              className="same-author isolated-carousel"
            />
             <Carousel
              title="SUGGESTIONS"
              books={suggestions}
              className="suggestions"
            />
          </section>
      </main>
    </>
  );
}

export default LivreInfos;
