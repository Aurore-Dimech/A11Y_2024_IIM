import React from "react";
import "../css/ArrowUp.css";
import arrowUp from "../../assets/arrowUpPage.svg";

const ArrowUp = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="arrow-up-section">
      <div className="arrow-up">
        <button onClick={scrollTop}>
          <img
            src={arrowUp}
            alt="Retour en haut de page"
          />
        </button>
      </div>
    </section>
  );
};

export default ArrowUp;
