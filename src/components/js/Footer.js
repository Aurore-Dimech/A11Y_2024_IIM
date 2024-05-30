import React from "react";

import "../css/Footer.css";

import line from "../../assets/line.svg";
import youtube from "../../assets/youtube.svg";
import pinterest from "../../assets/pinterest.svg";
import x from "../../assets/x.svg";
import tumblr from "../../assets/tumblr.svg";
import facebook from "../../assets/facebook.svg";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="contacts-links">
        <div className="contacts">
          <h3>NOUS CONTACTER</h3>
          <div className="address">
            <p>
              BMVR - Direction
              <br />
              1, av St Jean-Baptiste <br />
              06364 Nice Cedex 4
            </p>
            <p>T - 00 33 (0)4 97 13 48 90</p>
            <p>bmvr@ville-nice.fr</p>
          </div>

          <div className="socials">
            <ul>
              <li>
                <a href="/youtube">
                  <img
                    src={youtube}
                    alt="lien vers chaine YouTube"
                  />
                </a>
              </li>
              <li>
                <a href="/pinterest">
                  <img
                    src={pinterest}
                    alt="lien vers profil Pinterest"
                  />
                </a>
              </li>
              <li>
                <a href="/x">
                  <img
                    src={x}
                    alt="lien vers profil X"
                  />
                </a>
              </li>
              <li>
                <a href="/tumblr">
                  <img
                    src={tumblr}
                    alt="lien vers profil Tumblr"
                  />
                </a>
              </li>
              <li>
                <a href="/facebook">
                  <img
                    src={facebook}
                    alt="lien vers profil Facebook"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <img
          src={line}
          alt="ligne séparatrice"
        />

        <div className="links">
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/personal-information">Données personnelles</a>
            </li>
            <li>
              <a href="/manage-cookies">Gestion de cookies</a>
            </li>
            <li>
              <a href="/terms">Mentions Légales</a>
            </li>
            <li>
              <a href="/useful-links">Liens Utiles</a>
            </li>
            <li>
              <a href="/layout">Plan du Site</a>
            </li>
            <li>
              <a href="/accessibility">Accessibilité</a>
            </li>
            <li>
              <a href="/help">Aide</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div>
          <form>
            <h3>NEWSLETTER</h3>
            <label for="newsletter">
              Votre adresse mail
              <div>
                <input
                  type="email"
                  id="newsletter"
                  name="email"
                  placeholder="Remplir ici"
                  autoComplete="on"
                  aria-invalid="true"
                />
                <input
                  type="submit"
                  value="S'abonner"
                ></input>
              </div>
              <span>Veuillez respecter le format de l'email (exemple@domaine.com)</span>
            </label>
          </form>
          <div>
            {/*logo de la bibli*/}
            {/*logo de nice*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
