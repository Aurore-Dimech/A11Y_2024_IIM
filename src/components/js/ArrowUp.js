import React from "react";
import "../css/ArrowUp.css";
import arrowUp from "../../assets/arrowUpPage.svg";

const ArrowUp = () => {
  return (
    <div className="arrow-up">
      <a href="#top">
        <img
          src={arrowUp}
          alt="Retour en haut de page"
        />
      </a>
    </div>
  );
};

export default ArrowUp;
