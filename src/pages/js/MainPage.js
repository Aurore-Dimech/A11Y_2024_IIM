import React, { useEffect, useContext } from "react";
import FrontPage from "../../components/js/Frontpage";
import Agenda from "../../components/js/Agenda";
import CollectionAlpes from "../../components/js/CollectionAlpes";
import EuropeanProjects from "../../components/js/EuropeanProjects";
import SearchSection from "../../components/js/SearchSection";
import "../css/MainPage.css";
import Ariane from "../../components/js/AriadnesThread";
import { BurgerContext } from "../../context/BurgerContext";
import AvoidLinkMain from "../../components/js/AvoidLinkMain";

const MainPage = () => {
  useEffect(() => {
    document.title =
      "Accueil du portail de la BMVR de Nice | Bibliothèques de Nice";
  }, []);

  const position = [
    {
      name: "Accueil",
      link: null,
    },
  ];

  const { isBurgerOpen } = useContext(BurgerContext);

  return (
    <main role="main" className={`main-page App ${isBurgerOpen ? "bg-burger-hidden" : ""}`}>
      <AvoidLinkMain/>
      <Ariane position={[position]} />
      <h1 className="main-page-title">Page d'accueil</h1>
      <FrontPage />
      <Agenda />
      <SearchSection />
      <CollectionAlpes />
      <EuropeanProjects />
    </main>
  );
};

export default MainPage;
