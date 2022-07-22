import React from "react";
import { NavLink } from "react-router-dom";

const FootPage = () => {
  return (
    <div className="footPage">
      <div className="socialNetwork">
        <p>Suivez-nous : </p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="mentions">
        <NavLink excact to="/mentions">
          Mentions légales
        </NavLink>
      </div>
      <div className="allLinks">
        <div className="about">
          <NavLink excact to="/school/aboutus">
          À propos de nous
          </NavLink>
        </div>
        <div className="organization">
          <NavLink excact to="/school/organization">
            Organigramme
          </NavLink>
        </div>
        <div className="more">
          <NavLink excact to="/school/more">
            Les plus
          </NavLink>
        </div>
        <div className="workshops">
          <NavLink excact to="/activities/workshops">
            Ateliers
          </NavLink>
        </div>
        <div className="sports">
          <NavLink excact to="/activities/sports">
            Activités sportives
          </NavLink>
        </div>
        <div className="gallery">
          <NavLink excact to="/activities/gallery">
            Galerie photos
          </NavLink>
        </div>
        <div className="file">
          <NavLink excact to="/admission/file">
            Modalités d'admission
          </NavLink>
        </div>
        <div className="schoolFees">
          <NavLink excact to="/admission/fees">
            Modalités et frais
          </NavLink>
        </div>
      </div>
      <div className="contact">
        <i class="fas fa-phone"></i>
        <a href="tel:+237677316366">(+)237 677 316 366</a>
        <NavLink excact to="/contact">
          Contact
        </NavLink>
      </div>
      <div className="signature">
        <p>Copyright - Tous droits réservés © Awae BS - 2022</p>
      </div>
    </div>
  );
};

export default FootPage;
