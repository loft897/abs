import React from "react";
import FootPage from "../../../components/FootPage";
import Navigation from "../../../components/Navigation";

const Fees = () => {
  return (
    <div>
      {" "}
      <Navigation />
      <div className="fees">
        <h2>
          <span>frais et conditions de paiement</span>
        </h2>
        <h3>
          <span>Inscriptions</span> : 20.000 Fcfa pour toutes les classes.
        </h3>
        <div className="prices">
          <div class="cell">
            <span>
              <b>classes</b>
            </span>
          </div>
          <div class="cell">
            <b>1ère Tranche</b>
          </div>
          <div class="cell">
            <b>2ème Tranche</b>
          </div>
          <div class="cell">
            <b>3ème Tranche</b>
          </div>
          <div class="cell">
            <span>
              <b>total</b>
            </span>
          </div>
          <div class="cell">
            <span>
              <b>ps/pn</b>
            </span>
          </div>
          <div class="cell">50.000 Fcfa</div>
          <div class="cell">30.000 Fcfa</div>
          <div class="cell">10.000 Fcfa</div>
          <div class="cell">90.000 Fcfa</div>
          <div class="cell">
            <span>
              <b>ms/n1</b>
            </span>
          </div>
          <div class="cell">45.000 Fcfa</div>
          <div class="cell">30.000 Fcfa</div>
          <div class="cell">15.000 Fcfa</div>
          <div class="cell">90.000 Fcfa</div>
          <div class="cell">
            <span>
              <b>gs/n2</b>
            </span>
          </div>
          <div class="cell">45.000 Fcfa</div>
          <div class="cell">30.000 Fcfa</div>
          <div class="cell">20.000 Fcfa</div>
          <div class="cell">95.000 Fcfa</div>
          <div class="cell">
            <span>
              <b>sil au ce2/cl 1 to 4</b>
            </span>
          </div>
          <div class="cell">45.000 Fcfa</div>
          <div class="cell">35.000 Fcfa</div>
          <div class="cell">10.000 Fcfa</div>
          <div class="cell">90.000 Fcfa</div>
          <div class="cell">
            <span>
              <b>cm1&cm2/cl 5 & 6</b>
            </span>
          </div>
          <div class="cell">50.000 Fcfa</div>
          <div class="cell">30.000 Fcfa</div>
          <div class="cell">20.000 Fcfa</div>
          <div class="cell">100.000 Fcfa</div>
          <div class="cell">
            <span>
              <b>date limite</b>
            </span>
          </div>
          <div class="cell">
            <b>Pendant l'inscription</b>
          </div>
          <div class="cell">
            <b>30 Octobre 2022</b>
          </div>
          <div class="cell">
            <b>31 Décembre 2022</b>
          </div>
          <div class="cell"></div>
        </div>
        <h3>
          NB : Les inscriptions débutent en juin.
          <br />
          Les CL6 et CM2 auront des frais supplémentaires des examens offiels à
          payer pendant l'inscription.
          <br />
          Certaines classes auront des frais supplémentaires pour la cérémonie
          de remise des diplômes en fin d'année.
        </h3>
      </div>
      <FootPage />
    </div>
  );
};

export default Fees;
