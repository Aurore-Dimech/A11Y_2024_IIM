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


const disponibility = (availableCopiesNumber) => {
  if (availableCopiesNumber === 0) {
    return {
      text: "INDISPONIBLE",
      img: redTick,
      alt: "croix rouge",
      style: { color: "red" },
    };
  } else if (availableCopiesNumber === 1) {
    return {
      text: "1 exemplaire DISPONIBLE",
      img: greenTick,
      alt: "tick vert",
      style: { color: "green" },
    };
  } else {
    return {
      text: `${availableCopiesNumber} exemplaires DISPONIBLES`,
      img: greenTick,
      alt: "tick vert",
      style: { color: "green" },
    };
  }
};

function LivreInfos() {
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


  const sameAuthorBooks = bookListArray.filter((book) => book.author === selectedBook.author && book.id !== selectedBook.id);

  const suggestions = [
    {
      cover: sugCover1,
      title: "Mortel un jour, mortel toujours !",
      author: "Mr Tan",
    },
    {
      cover: sugCover2,
      title: "Pico Love",
      author: "Dominique Roques",
    },
   
    {
      cover: sugCover3,
      title: "Les sorcières chèvres",
      author: "Thom Pico, Karensac",
    },
  ];

  const comments = [
    {
      photo : josh,
      name : "Josh Brand",
      publicationDate : "05 Juin 2024",
      alt : "photo de profil de Josh Brand",
      content : "J'ai adoré le dernier Ariol ! Les dessins sont superbes et l'histoire est très drôle. Les personnages sont toujours aussi attachants. C'est un vrai plaisir à lire.",
    },
    {
      photo : willie,
      name : "Willie Lundi",
      publicationDate : "31 mai 2024",
      alt : "photo de profil de Willie Lundi",
      content : "Le nouveau tome d'Ariol est sympa, mais je trouve que certaines histoires se répètent un peu. Cela reste une bonne lecture pour les enfants.",
    },
    {
      photo : lila,
      name : "Lila Bernard",
      publicationDate : "10 Janvier 2024",
      alt : "photo de profil de Lila Bernard",
      content : "Le dernier tome d'Ariol est fantastique ! Les nouvelles aventures sont vraiment amusantes et les personnages sont toujours aussi adorables.",
    },
  ];

  return (
    <>
      <main role="main" className="container">
        <div className="SingleBookPage">
          <div className="Book_img"> {/* Image du livre */}
            <img
              src={selectedBook.cover}
              alt={`Couverture du livre ${selectedBook.title}`}
              className="book-cover"
            />
          </div> 
          <div className="Book_informations"> {/* Tous les informations textuelles su livres jusqu'à la description */}
            <div className="book-details">
              <h1 className="book-title">{selectedBook.title.toUpperCase()}</h1>
              <div>
                <p className="book-author">
                  <strong>{selectedBook.author}</strong>
                </p>
                <p className="book-publisher">
                  {selectedBook.editor} - {selectedBook.publicationDate}
                </p>
              </div>
              <p className="book-description">{selectedBook.description}</p>
              <span
                aria-label="5 étoiles"
                className="rating-stars"
              >
                ★★★★★
              </span>
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
                <button className="reserve-button">Réserver ce livre</button>
              </div>
            </div>
            <div className="description-section"> {/* Section de description du livre */}
              <h2 className="description-title">DESCRIPTION</h2>
              <dl>
                <div className="description-row">
                    <dt className="label">Type de document:</dt>
                    <dd className="value">{selectedBook.documentType}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">Langue:</dt>
                    <dd className="value">{selectedBook.language}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">Date de publication:</dt>
                    <dd className="value">{selectedBook.publicationDate}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">Série:</dt>
                    <dd className="value">{selectedBook.serie}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">Sections:</dt>
                    <dd className="value">{selectedBook.section}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">Description physique:</dt>
                    <dd className="value">{selectedBook.physicalAspect}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">Contributeurs:</dt>
                    <dd className="value">{selectedBook.contributors}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">ISBN:</dt>
                    <dd className="value">{selectedBook.isbn}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">EAN:</dt>
                    <dd className="value">{selectedBook.ean}</dd>
                </div>
                <div className="description-row">
                    <dt className="label">Popularité:</dt>
                    <dd className="value">{selectedBook.popularity}</dd>
                </div>
             </dl>
            </div>
          </div>
        </div>
        {/* Proposition de livres */}
        <section className="availability-section">
          <div className="disponible_style"> {/* container avec le titre "disponibilité et le traits" */}
            <div className="trait"></div>
            <h3 className="availability-title">DISPONIBILITÉS</h3>
            <div className="trait"></div>
          </div> {/* /////////////// */}
          <h4 className="book-title">{selectedBook.title.toUpperCase()}</h4>
          <table className="availability-table">
            <thead className="tableTitles">
              <tr className="tr" >
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
                  <td className={`availability-status ${item.availability.toLowerCase()}`}>
                    {item.availability}
                  </td>
                  <td>{item.returnDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <div className="App" id="singlePageComments">
          <div className="CommentContainer">
            <div className="disponible_style"> {/* container avec le titre "disponibilité et le traits" */}
              <div className="trait"></div>
              <h3 className="availability-title">AVIS DES LECTEURS</h3>
              <div className="trait"></div>
            </div>
            <div className="containerAllComments"> {/* section sur les avis */}
              { comments.map((comment, index)=> (
                 <div className="CommentCard"> {/* chaque card avis */}
                    <div className="commentHeader">
                      <img src={comment.photo} alt={comment.alt} className="commentPhoto" />
                      <div className="commentNameDate">
                        <h3 className="commentName">{comment.name}</h3>
                        <p className="commentDate">{comment.publicationDate}</p>
                      </div>
                    </div>
                    <p className="commentContent">{comment.content}</p>
                 </div>
                ))
              }
            </div> 
          </div>
          <Carousel
            title="DU MÊME AUTEUR"
            books={sameAuthorBooks}
          />
          <Carousel
            title="SUGGESTIONS"
            books={suggestions}
          />
        </div>
      </main>
    </>
  );
}

export default LivreInfos;
