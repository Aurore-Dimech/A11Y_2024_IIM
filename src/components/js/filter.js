
import React from "react";
import "../../App.css";
import SearchedBooksCard from "../../components/js/SearchedBooksCard";
import bookList from "../../data/bookList";
import "../css/Filter.css";
import chevronRight from "../../images/Chevron-right.png";


function filter() {
  return (
    <div className="container_filter">
          <p>Affiner votre recherche</p>
          <div className="all_filter">
            {" "}
            {/* tout le container après le titre */}
            <fieldset className="ACCES RAPIDE">
              {" "}
              {/* première catégorie de filtre */}
              <div>
                {" "}
                {/* container aves le titre de la catégorie et la flèche vers bas */}
                <legend>ACCES RAPIDE</legend>
                <img
                  className="chevron"
                  src={chevronRight}
                  alt="flèche vers bas"
                />
              </div>
              <div className="individual_group_filter">
                {" "}
                {/* container contenant les inputs des filtres */}
                <div className="individual_filter_label">
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div className="individual_filter">
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Documents numérique"
                      name="Documents numérique"
                    />
                    <label for="Documents numérique">Documents numérique</label>
                  </div>
                  <p>241</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Documents numérique"
                      name="Disponibles"
                    />
                    <label for="Disponibles">Disponibles</label>
                  </div>
                  <p>117</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Documents numérique"
                      name="Nouveautés "
                    />
                    <label for="Nouveautés ">Nouveautés </label>
                  </div>
                  <p>7</p>
                </div>
              </div>
            </fieldset>
            <fieldset className="ACCES RAPIDE">
              {" "}
              {/* première catégorie de filtre */}
              <div>
                {" "}
                {/* container aves le titre de la catégorie et la flèche vers bas */}
                <legend>LOCALISATION</legend>
                <img
                  className="chevron"
                  src={chevronRight}
                  alt="flèche vers bas"
                />
              </div>
              <div className="individual_group_filter">
                {" "}
                {/* container contenant les inputs des filtres */}
                <div className="individual_filter_label">
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div className="individual_filter">
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Bibliothèque-Louis Nucéra"
                      name="Bibliothèque-Louis-Nucéra"
                    />
                    <label for="Bibliothèque-Louis-Nucéra">
                      Bibliothèque Louis Nucéra{" "}
                    </label>
                  </div>
                  <p>241</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Documents numérique"
                      name="Nouveautés "
                    />
                    <label for="Nouveautés ">Conservatoire de Nice </label>
                  </div>
                  <p>117</p>
                </div>
              </div>
              <div>
                {" "}
                {/* container de l'input et son nom + le nombre à côté*/}
                <div>
                  {" "}
                  {/* container de l'input et son nom uniquement */}
                  <input
                    className="input_checkbox"
                    type="checkbox"
                    id="Bibliothèque-de-Saint-Roch"
                    name="Bibliothèque-de-Saint-Roch"
                  />
                  <label for="Bibliothèque-de-Saint-Roch ">
                    Bibliothèque de Saint-Roch{" "}
                  </label>
                </div>
                <p>36</p>
              </div>
              <div>
                {" "}
                {/* container de l'input et son nom + le nombre à côté*/}
                <div>
                  {" "}
                  {/* container de l'input et son nom uniquement */}
                  <input
                    className="input_checkbox"
                    type="checkbox"
                    id="Bib’Mobile"
                    name="Bib’Mobile"
                  />
                  <label for="Bib’Mobile">Bib’Mobile </label>
                </div>
                <p>36</p>
              </div>
            </fieldset>
            <fieldset className="support">
              {" "}
              {/* première catégorie de filtre */}
              <div>
                {" "}
                {/* container aves le titre de la catégorie et la flèche vers bas */}
                <legend>SUPPORT</legend>
                <img
                  className="chevron"
                  src={chevronRight}
                  alt="flèche vers bas"
                />
              </div>
              <div className="individual_group_filter">
                {" "}
                {/* container contenant les inputs des filtres */}
                <div className="individual_filter_label">
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div className="individual_filter">
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Disque-Compact"
                      name="Disque-Compact"
                    />
                    <label for="Disque-Compact">Disque Compact</label>
                  </div>
                  <p>241</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Disque-33t"
                      name="Disque-33t"
                    />
                    <label for="Disque-33t">Disque 33t</label>
                  </div>
                  <p>117</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Bande-Dessinées"
                      name="Bande-Dessinées "
                    />
                    <label for="Bande-Dessinées ">Bande Dessinées </label>
                  </div>
                  <p>36</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Disque-45t"
                      name="Disque-45t "
                    />
                    <label for="Disque-45t ">Disque 45t </label>
                  </div>
                  <p>36</p>
                </div>
                <p className="more">Voir plus</p>
              </div>
            </fieldset>
            <fieldset className="type-de-document">
              {" "}
              {/* première catégorie de filtre */}
              <div>
                {" "}
                {/* container aves le titre de la catégorie et la flèche vers bas */}
                <legend>TYPE DE DOCUMENT </legend>
                <img
                  className="chevron"
                  src={chevronRight}
                  alt="flèche vers bas"
                />
              </div>
              <div className="individual_group_filter">
                {" "}
                {/* container contenant les inputs des filtres */}
                <div className="individual_filter_label">
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div className="individual_filter">
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Document-Sonore"
                      name="Document-Sonore"
                    />
                    <label for="Document-Sonore">Document Sonore</label>
                  </div>
                  <p>241</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Documents numérique"
                      name="Disponibles"
                    />
                    <label for="Disponibles">Disponibles</label>
                  </div>
                  <p>117</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Conservatoire-de-Nice"
                      name="Conservatoire-de-Nice"
                    />
                    <label for="Conservatoire-de-Nice">
                      Conservatoire de Nice{" "}
                    </label>
                  </div>
                  <p>36</p>
                </div>
              </div>
            </fieldset>
            <fieldset className="ACCES RAPIDE">
              {" "}
              {/* première catégorie de filtre */}
              <div>
                {" "}
                {/* container aves le titre de la catégorie et la flèche vers bas */}
                <legend>ACCES RAPIDE</legend>
                <img
                  className="chevron"
                  src={chevronRight}
                  alt="flèche vers bas"
                />
              </div>
              <div className="individual_group_filter">
                {" "}
                {/* container contenant les inputs des filtres */}
                <div className="individual_filter_label">
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div className="individual_filter">
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Documents numérique"
                      name="Documents numérique"
                    />
                    <label for="Documents numérique">Documents numérique</label>
                  </div>
                  <p>241</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Livre"
                      name="Livre"
                    />
                    <label for="Livre">Livre</label>
                  </div>
                  <p>117</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Livre-Numérique"
                      name="Livre-Numérique "
                    />
                    <label for="Livre-Numérique ">Livre Numérique </label>
                  </div>
                  <p>36</p>
                </div>
                <div>
                  {" "}
                  {/* container de l'input et son nom + le nombre à côté*/}
                  <div>
                    {" "}
                    {/* container de l'input et son nom uniquement */}
                    <input
                      className="input_checkbox"
                      type="checkbox"
                      id="Vidéo"
                      name="Vidéo "
                    />
                    <label for="Vidéo ">Vidéo</label>
                  </div>
                  <p>36</p>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

  )
}


export default filter;