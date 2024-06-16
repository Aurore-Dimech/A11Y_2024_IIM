
import React, {useState, useEffect, useRef} from "react";

import greenTick from "../../assets/greenTick.svg";
import redTick from "../../assets/redTick.svg";
import "../css/SearchedBooksCard.css";

const disponibility = (availableCopiesNumber) => {
  if (availableCopiesNumber === 0) {
    return {
      text: "INDISPONIBLE",
      img: redTick,
      alt: "croix rouge",
      style: { color: "rgb(167, 18, 18)" },
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

const TruncatedText = ({text}) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const {offsetHeight, scrollHeight } = textRef.current;
      setIsTruncated(scrollHeight > offsetHeight);
    }
  })
}

const Book = ({
  cover,
  id,
  title, 
  author,
  publicationDate,
  description,
  availableCopiesNumber,
  documentType,
}) => {
  return (
      <div className="one_book">
        {" "}
        {/* container avec infos pour un livre */}
        <div className="photo_btn">
          {" "}
          {/* container avec la photo de couverture */}
          <img
            className="couverture"
            src={cover}
            alt="couverture du livre"
          />
        </div>
        <div className="info">
          {" "}
          {/* informations sur le livre */}
          <div className="text_informations">
            {" "}
            {/* premiere partie  */}
            <div>
              <h2 className="title_book">
                <a
                  href={"/livre/" + id}
                  aria-label="Lien vers la page du livre"
                  className="title_book_link"
                >
                  {title}
                </a>
              </h2>
              <p className="autor">
                {author} - {publicationDate}
              </p>
              <p className="description">{description}</p>
            </div>
            <div className="infoMoreAndEg one">
              <div className="btn">
                {" "}
                {/* le lien e savoir plus */} 
                <a
                  href={"/livre/" + id}
                  aria-label="En savoir plus"
                >
                  {" "}
                  En savoir plus
                </a>
              </div>
              <div className="availability">
                <img
                  src={disponibility(availableCopiesNumber).img}
                  alt={disponibility(availableCopiesNumber).alt}
                  className="checkmark-icon"
                />
                <span style={disponibility(availableCopiesNumber).style}>{disponibility(availableCopiesNumber).text}</span>
              </div>
            </div>
            <div className="infoMoreAndEg deux">
              <div className="availability">
                <img
                  src={disponibility(availableCopiesNumber).img}
                  alt={disponibility(availableCopiesNumber).alt}
                  className="checkmark-icon"
                />
                <span className="exemplaireDisponible" style={disponibility(availableCopiesNumber).style}>{disponibility(availableCopiesNumber).text}</span>
              </div>
              <div className="btn">
                {" "}
                {/* le lien e savoir plus */}
                <a
                  href={"/livre/" + id}
                  aria-label="En savoir plus"
                >
                  {" "}
                  En savoir plus
                </a>
              </div>
              
            </div>
          </div>
          <div>
            {/* <div
              role="button"
              tabIndex="0"
              className="accessible-button"
            >
              {documentType}
            </div> */}
            
          </div>
        </div>
      </div>
  );
};

export default Book;
