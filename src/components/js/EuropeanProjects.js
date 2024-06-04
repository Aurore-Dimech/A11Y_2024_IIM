import React from "react";
import blueMoon from "../../assets/blueMoon.svg";
import project1 from "../../assets/project1.svg";
import project2 from "../../assets/project2.svg";
import "../css/EuropeanProjects.css";

const projects = {
  project1: {
    title: "PITEM PACE - FAIRE CONNAITRE",
    description:
      "Le projet européen PITEM PACE vise à promouvoir le tourisme durable et la valorisation du patrimoine culturel et naturel dans la région transfrontalière entre la France et l'Italie.",
    image: project1,
    alt: "",
    ref: "/european-projects/pitem-pace",
  },
  project2: {
    title: "UNE BIBLIOTHÈQUE POUR L'EMPLOI À L'ARIANE",
    description:
      "Le projet \"Une Bibliothèque pour l'Emploi à l'Ariane\" vise à offrir aux résidents du quartier de l'Ariane des ressources et des services pour améliorer leurs compétences professionnelles...",
    image: project2,
    alt: "",
    ref: "/european-projects/ariane-library",
  },
};

const EuropeanProjects = () => {
  const list = Object.keys(projects).map((project) => {
    return (
      <li key={project}>
        <img
          src={projects[project].image}
          alt={projects[project].alt}
        />
        <div className="projects-info">
          <h3>{projects[project].title}</h3>
          <p>{projects[project].description}</p>
          <a
            href={projects[project].ref}
            className="button"
            aria-label={"Découvrir le projet : " + projects[project].title}
          >
            Découvrir le projet
          </a>
        </div>
      </li>
    );
  });
  return (
    <section>
      <div className="section-title">
        <img
          src={blueMoon}
          alt=""
        />
        <h2>PROJET EUROPEEN</h2>
      </div>
      <ul className="projects">{list}</ul>
    </section>
  );
};

export default EuropeanProjects;
