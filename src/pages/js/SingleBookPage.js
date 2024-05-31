import Navbar from "../../components/js/Header";
import couverture from "../../images/couverture.jpeg";
import correct from "../../images/correct.png";
import Carousel from "../../components/CarouselLivres";
function LivreInfos() {
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
      <Navbar />
      <main class="container">
        <div>
          <article class="book-info">
            <div class="rating">
              <img
                src={couverture}
                alt="Couverture du livre Ariol Chante Comme Un Rossignol"
                class="book-cover"
              />
              <span
                aria-label="5 étoiles"
                class="rating-stars"
              >
                ★★★★★
              </span>
            </div>
            <section class="book-details">
              <h1 class="book-title">ARIOL CHANTE COMME UN ROSSIGNOL</h1>
              <p class="book-author">
                <strong>Guibert Emmanuel</strong>
              </p>
              <p class="book-publisher">Éditeur - Année de parution</p>
              <p class="book-description">Description</p>
              <p class="book-description">Description</p>
              <p class="book-description">Description</p>
              <button class="reserve-button">Réserver</button>
              <div class="availability">
                <img
                  src={correct}
                  alt="Checkmark"
                  class="checkmark-icon"
                />
                <span class="availability-text">2 exemplaires disponible</span>
              </div>
            </section>
          </article>

          <section class="description-section">
            <h2 class="description-title">DESCRIPTION</h2>
            <ul class="description-list">
              <li class="description-item">
                <strong>Type de document:</strong> Bandes dessinées
              </li>
              <li class="description-item">
                <strong>Langue:</strong> Français
              </li>
              <li class="description-item">
                <strong>Date de publication:</strong> 2023
              </li>
              <li class="description-item">
                <strong>Série:</strong> Ariol, Tome 19
              </li>
              <li class="description-item">
                <strong>Sections:</strong> Jeunesse
              </li>
              <li class="description-item">
                <strong>Description physique:</strong> 1 vol. (124 p.) : ill. en
                coul. ; 26 cm
              </li>
              <li class="description-item">
                <strong>Contributeurs:</strong> Chauveau, Rémi (1970- ) -
                Technicien graphique
              </li>
              <li class="description-item">
                <strong>ISBN:</strong> 979-10-363-5888-3
              </li>
              <li class="description-item">
                <strong>EAN:</strong> 9791036358883
              </li>
              <li class="description-item">
                <strong>Popularité:</strong> Document emprunté 21 fois ces 6
                derniers mois
              </li>
            </ul>
          </section>
        </div>
        <section className="availability-section">
          <h2 className="availability-title">DISPONIBILITÉ</h2>
          <h3 className="book-title">ARIOL CHANTE COMME UN ROSSIGNOL</h3>
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
