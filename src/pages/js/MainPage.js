import React, { useEffect } from "react";
import FrontPage from "../../components/js/Frontpage";
import Agenda from "../../components/js/Agenda";
import CollectionAlpes from "../../components/js/CollectionAlpes";
import EuropeanProjects from "../../components/js/EuropeanProjects";
import SearchSection from "../../components/js/SearchSection";
import "../css/MainPage.css";

const MainPage = () => {
  useEffect(() => {
    document.title =
      "Accueil du portail de la BMVR de Nice | Bibliothèques de Nice";
  }, []);

  return (
    <main role="main">
      <FrontPage />
      <Agenda />
      <SearchSection />
      <CollectionAlpes />
      <EuropeanProjects />
    </main>
  );
};

export default MainPage;
