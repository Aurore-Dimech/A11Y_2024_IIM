import React from "react";
import yellowMoon from "../../assets/yellowMoon.svg";
import agenda1 from "../../assets/agenda1.svg";
import agenda2 from "../../assets/agenda2.svg";
import agenda3 from "../../assets/agenda3.svg";
import "../css/Agenda.css";
import calendar from "../../assets/calendar.svg";
import marker from "../../assets/marker.svg";
import tag from "../../assets/tag.svg";

const activities = {
  activity1: {
    title: "INITIATION AU DESSIN A L'ENCRE DE CHINE",
    dates: "24/05/2024 de 14h30 à 16h30",
    place: "Bibliothèque Alain Lefeuvre - Les Moulins",
    type: "Atelier",
    image: agenda1,
    alt: "",
    id: "activity1",
    ref: "/activities/initiation-dessin-encre-chine",
  },
  activity2: {
    title: "PROJECTION A L'ITALIENNE",
    dates: "25/05/2024 de 13h00 à 15h00",
    place: "Bibliothèque Albert Hart - Fontaine du Temple",
    type: "Atelier Jeunesse",
    image: agenda3,
    alt: "",
    id: "activity3",
    ref: "/activities/projection-italienne",
  },
  activity3: {
    title: "C'EST QUOI LA PHILO ?",
    dates: "05/06/2024 de 15h00 à 16h00",
    place: "Bibliothèque Alain Lefeuvre - Les Moulins",
    type: "Atelier",
    image: agenda2,
    alt: "",
    id: "activity2",
    ref: "/activities/cest-quoi-la-philo",
  },
};

const FrontPage = () => {
  const list = Object.keys(activities).map((activity) => {
    return (
      <li
        key={activity}
        className={activities[activity].id}
      >
        <img
          src={activities[activity].image}
          alt={activities[activity].alt}
        />
        <ol className="cards-info">
          <li>
            <h3>{activities[activity].title}</h3>
          </li>
          <li className="info-line">
            <img
              src={calendar}
              className="icon"
              alt="Date : "
            />
            <p>{activities[activity].dates}</p>
          </li>
          <li className="info-line">
            <img
              src={marker}
              className="icon"
              alt="Lieu : "
            />
            <p>{activities[activity].place}</p>
          </li>
          <li className="info-line">
            <img
              src={tag}
              className="icon"
              alt="Catégorie : "
            />
            <p>{activities[activity].type}</p>
          </li>
          <a
            href={activities[activity].ref}
            className="button"
            aria-label={
              "Se renseigner sur l'atelier :" + activities[activity].title
            }
          >
            Se renseigner sur l'atelier
          </a>
        </ol>
      </li>
    );
  });
  return (
    <div className="agenda-section-bg">
      <section className="agenda-section">
        <div className="section-title">
          <img
            src={yellowMoon}
            alt=""
          />
          <h2>AGENDA</h2>
        </div>
        <ol className="events-list">{list}</ol>
        <a
          href="/events"
          className="all-events"
        >
          VOIR TOUS LES EVENEMENTS
        </a>
      </section>
    </div>
  );
};

export default FrontPage;
