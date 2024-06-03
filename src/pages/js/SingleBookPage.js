import React from "react";

import greenTick from "../../assets/greenTick.svg";
import redTick from "../../assets/redTick.svg";
import Carousel from "../../components/CarouselLivres";

import bookList from "../../data/bookList";

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

  const sameAuthorBooks = [
    {
      image: "path/to/image1.jpg",
      title: "ARIOL VIEUX SAC À PUCES !",
      author: "Auteur",
    },
    {
      image: "path/to/image2.jpg",
      title: "ARIOL LA CHOUETTE CLASSE VERTE",
      author: "Auteur",
    },
    {
      image: "path/to/image3.jpg",
      title: "ARIOL NAPHTALINE NOUS DIT TOUTOU",
      author: "Auteur",
    },
    { image: "path/to/image4.jpg", title: "Autre livre", author: "Auteur" },
  ];

  const suggestions = [
    {
      image: "path/to/image5.jpg",
      title: "Mortel un jour, mortel toujours !",
      author: "Mr Tan",
    },
    {
      image: "path/to/image6.jpg",
      title: "Pico Love",
      author: "Dominique Roques",
    },
    {
      image: "path/to/image7.jpg",
      title: "Cendre & Hazel",
      author: "Thom Pico, Karensac",
    },
    {
      image: "path/to/image8.jpg",
      title: "Les sorcières chèvres",
      author: "Thom Pico, Karensac",
    },
  ];

  return (
    <>
      <main className="container">
        <div>
          <article className="book-info">
            <div className="rating">
              <img
                src={selectedBook.cover}
                alt={`Couverture du livre ${selectedBook.title}`}
                className="book-cover"
              />
              <span
                aria-label="5 étoiles"
                className="rating-stars"
              >
                ★★★★★
              </span>
            </div>
            <section className="book-details">
              <h1 className="book-title">{selectedBook.title.toUpperCase()}</h1>
              <p className="book-author">
                <strong>{selectedBook.author}</strong>
              </p>
              <p className="book-publisher">{selectedBook.editor} - {selectedBook.publicationDate}</p>
              <p className="book-description">{selectedBook.description}</p>
              <button className="reserve-button">Réserver</button>
              <div className="availability">
              <img
                src={disponibility(selectedBook.availableCopiesNumber).img}
                alt={disponibility(selectedBook.availableCopiesNumber).alt}
                className="checkmark-icon"
              />
              <span className="availability-text" style={disponibility(selectedBook.availableCopiesNumber).style}>{disponibility(selectedBook.availableCopiesNumber).text}</span>
              </div>
            </section>
          </article>

          <section className="description-section">
            <h2 className="description-title">DESCRIPTION</h2>
            <ul className="description-list">
              <li className="description-item">
                <strong>Type de document:</strong> {selectedBook.documentType}
              </li>
              <li className="description-item">
                <strong>Langue:</strong> {selectedBook.language}
              </li>
              <li className="description-item">
                <strong>Date de publication:</strong> {selectedBook.publicationDate}
              </li>
              <li className="description-item">
                <strong>Série:</strong> {selectedBook.serie}
              </li>
              <li className="description-item">
                <strong>Sections:</strong> {selectedBook.section}
              </li>
              <li className="description-item">
                <strong>Description physique:</strong> {selectedBook.physicalAspect}
              </li>
              <li className="description-item">
                <strong>Contributeurs:</strong> {selectedBook.contributors}
              </li>
              <li className="description-item">
                <strong>ISBN:</strong> {selectedBook.isbn}
              </li>
              <li className="description-item">
                <strong>EAN:</strong> {selectedBook.ean}
              </li>
              <li className="description-item">
                <strong>Popularité:</strong> {selectedBook.popularity}
              </li>
            </ul>
          </section>
        </div>
        <section className="availability-section">
          <h2 className="availability-title">DISPONIBILITÉ</h2>
          <h3 className="book-title">{selectedBook.title.toUpperCase()}</h3>
          <table className="availability-table">
            <thead>
              <tr>
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
        <div className="App">
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
