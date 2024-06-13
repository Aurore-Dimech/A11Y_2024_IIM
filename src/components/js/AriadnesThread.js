import React from "react";
import "../css/AriadnesThread.css";

const AriadnesThread = (props) => {
  const position = [];
  props.position[0].forEach((element) => {
    position.push(element);
  });

  const ariane = () => {
    return (
      <nav
        role="navigation"
        aria-label="fil d'ariane"
        className="ariadnesThread"
      >
        <p>Vous êtes ici : </p>
        <ul>
          {position.map((element, index) => {
            if (element.link !== null) {
              return (
                <li key={index}>
                  <a href={element.link}>{element.name}</a>
                </li>
              );
            } else if (element.name !== ">") {
              return (
                <li
                  key={index}
                  aria-current="page"
                >
                  <strong>{element.name}</strong>
                </li>
              );
            } else {
              return <li key={index}>{element.name}</li>;
            }
          })}
        </ul>
      </nav>
    );
  };

  return <>{ariane()}</>;
};

export default AriadnesThread;
