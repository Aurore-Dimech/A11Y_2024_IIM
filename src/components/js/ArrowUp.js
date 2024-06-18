import React, { useContext } from "react";
import "../css/ArrowUp.css";
import arrowUp from "../../assets/arrowUpPage.svg";

import { BurgerContext } from "../../context/BurgerContext";

const ArrowUp = () => {
  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const { isBurgerOpen } = useContext(BurgerContext);
  return (
    <section className={`arrow-up-section App ${isBurgerOpen ? "bg-burger-hidden" : ""}`} >
      <div className="arrow-up">
        {/* <button onClick={scrollTop}>
          <img
            src={arrowUp}
            alt="Retour en haut de page"
          />
        </button> */}
        <a href="#top" aria-label="Retour en haut de la page">
          <img
            src={arrowUp}
            alt="flèche vers le haut"
            aria-hidden="true"
            focusable="false"
          />
        </a>
      </div>
    </section>
  );
};

export default ArrowUp;
