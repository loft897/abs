import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../media/logo_abs.gif";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="id">
        <div className="idContent">
          <div className="title">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />{" "}
              </a>
            </div>
            <div className="name">
              <h1>AWAE BILINGUAL NURSERY AND PRIMARY SCHOOL</h1>
            </div>
          </div>
          <div className="motto">
            <h2>Devise : DISCIPLINE - DILIGENCE - EXCELLENCE</h2>
          </div>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "#36D0EA" : "" };
              }}
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="#"
              style={({ isActive }) => {
                return { color: isActive ? "#ff8000" : "" };
              }}
            >
              <i class="fas fa-school"></i>
              <div class="dropdown">
                <span>Etablissemnt</span>
                <div class="dropdown-content">
                  <NavLink excact to="/school/aboutus">
                    À propos de nous
                  </NavLink>
                  <NavLink exact to="/school/organization">
                    Organigramme
                  </NavLink>
                  <NavLink exact to="/school/more">
                    Les plus
                  </NavLink>
                </div>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="#"
              style={({ isActive }) => {
                return { color: isActive ? "#6C77F4" : "" };
              }}
            >
              <i class="fas fa-laptop-house"></i>
              <div class="dropdown">
                <span>Activités</span>
                <div class="dropdown-content">
                  <NavLink excact to="/activities/workshops">
                    Ateliers
                  </NavLink>
                  <NavLink exact to="/activities/sports">
                    Activtés sportives
                  </NavLink>
                  <NavLink exact to="/activities/gallery">
                    Phototèque
                  </NavLink>
                </div>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="#"
              style={({ isActive }) => {
                return { color: isActive ? "#FF0000" : "" };
              }}
            >
              <i class="fas fa-file-invoice-dollar"></i>
              <div class="dropdown">
                <span>Admission</span>
                <div class="dropdown-content">
                  <NavLink exact to="/admission/file">
                    Dossier d'admission
                  </NavLink>
                  <NavLink exact to="/admission/fees">
                    Modalités et Frais
                  </NavLink>
                </div>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/contact"
              style={({ isActive }) => {
                return { color: isActive ? "cyan" : "" };
              }}
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.fr"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.fr"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="signature">
        <p>Copyright © Awae BS - 2022</p>
      </div> */}
    </div>
  );
};

export default Navigation;
