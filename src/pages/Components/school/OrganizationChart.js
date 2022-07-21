import React from "react";
import FootPage from "../../../components/FootPage";
import Navigation from "../../../components/Navigation";

const OrganizationChart = () => {
  return (
    <div>
      <Navigation />
      <div className="organizationChart">
        <h2>
          <span>le personnel</span>{" "}
        </h2>
        <br />
        <p>
          Pour une éducation de qualité, nos élèves sont suivis et encadrés par
          un personnel de qualité.
          <br />
          <br />
          <h3>
            La fondatrice : Mme Balbine <span>atsena</span>
          </h3>
          <br />
          <h3>
            Le directeur de la section anglophone : M. Sylvester{" "}
            <span>eke ako</span>
          </h3>
          <br />
          <h3>
            Le directeur de la section francophone : M. Sylvere Georges
            <span> boyomo</span>
          </h3>
        </p>
      </div>
      <FootPage />
    </div>
  );
};

export default OrganizationChart;
