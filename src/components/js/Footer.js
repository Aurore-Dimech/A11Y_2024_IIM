import React, { useContext } from "react";

import "../css/Footer.css";

import line from "../../assets/line.svg";
import youtube from "../../assets/youtube.svg";
import pinterest from "../../assets/pinterest.svg";
import x from "../../assets/x.svg";
import tumblr from "../../assets/tumblr.svg";
import facebook from "../../assets/facebook.svg";
import logoFooter from "../../assets/logoFooter.svg";
import logoNice from "../../assets/logoNice.svg";

import { BurgerContext } from "../../context/BurgerContext";

const Footer = () => {
  const { isBurgerOpen } = useContext(BurgerContext);

  return (
    <footer id="Footer" role="contentinfo" className={`App ${isBurgerOpen ? "bg-burger-hidden" : ""}`}>
      <div className="contacts-links">
        <div className="contacts">
          <h2>NOUS CONTACTER</h2>
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

      <div className="footer-second-section">
        <form>
          <h2>NEWSLETTER</h2>
          <div className="newsletter-container">
            <label htmlFor="newsletter">
              Votre adresse mail
              <div className="input-newsletter">
                <input
                  type="email"
                  id="newsletter"
                  name="email"
                  placeholder="Renseigner votre adresse email..."
                  autoComplete="on"
                  aria-invalid="true"
                />
                <input
                  type="submit"
                  value="S'abonner"
                  className="submit-newsletter"
                ></input>
              </div>
              <span>
                Veuillez respecter le format de l'email (exemple@domaine.com)
              </span>
            </label>
            <div className="checkbox-newsletter">
              <input
                className="input-checkbox"
                type="checkbox"
                id="abonnement_newsletter"
                name="abonnement_newsletter"
                required
              />
              <label htmlFor="abonnement_newsletter">
                J’accepte de recevoir cette newsletter et je comprends que je
                peux me désabonner facilement à tout moment.
              </label>
            </div>
          </div>
        </form>
        <div className="logo logos">
          <ol>
            <li>
              <ol className="bibli-logo-prog">
                <li>
                  <a href="/">
                    <img
                      src={logoFooter}
                      className="logo logo-img"
                      alt="logo de la bibliothèque - Accueil"
                    />
                  </a>
                </li>
                <li>
                  <a href="/programme">Voir le programme</a>
                </li>
              </ol>
            </li>
            <li>
              <a
                href="http://www.nice.fr/fr/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={logoNice}
                  className="logo logo-img"
                  alt="logo de la ville de Nice"
                />
              </a>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
