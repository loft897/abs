import React from "react";
import FootPage from "../components/FootPage";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="contact">
        <h2>
          <span>où nous trouver?</span>
        </h2>
        <br />
        <div className="info">
          <div className="maps">
            <iframe
              title="abs location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4862.091670170282!2d11.550604215468708!3d3.8311250561152375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc62f427ece151f49!2sABS!5e1!3m2!1sfr!2slb!4v1658582347889!5m2!1sfr!2slb"
              width="1200"
              height="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="to">
            <h3>
              Nous sommes situés au quartier Awae Escalier, juste quelques mètres après le carrefour Awae Concorde.
            </h3>
            <br />
            <a href="mailto:acceuil@awae-bs.com">
              <b>Mail : acceuil@awae-bs.com</b>{" "}
            </a>
            <br />
            <br />
            <a href="tel:+237677316366">
              <b>Téléphone : (+)237 677 316 366</b>
            </a>
          </div>
          <div className="writeUs">
            <h3>Ecrivez-nous</h3>
            <form>
              <div>
                <label for="email">Entrer un email</label>

                <input
                  type="email"
                  class="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <label for="name">Entrer votre nom complet</label>
                <input type="text" class="name" id="name" placeholder="Nom" />
              </div>
              <div>
                <label for="number">Entrer votre numéro de téléphone</label>
                <input
                  type="text"
                  class="number"
                  id="number"
                  placeholder="Numero"
                />
              </div>
              <div>
                <label for="message">Votre message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                  placeholder="Ecrivez votre message ici!"
                ></textarea>
              </div>
              <div>
                <button type="submit">Envoyer le message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FootPage />
    </div>
  );
};

export default Contact;
