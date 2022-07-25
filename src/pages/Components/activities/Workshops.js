import React from "react";
import FootPage from "../../../components/FootPage";
import Navigation from "../../../components/Navigation";

const Workshops = () => {
  return (
    <div>
      <Navigation />
      <div className="activities">
        <div className="text">
          <h2>
            <span>nos activités</span>
          </h2>
          <p>
            L'épanouissement des enfants ne pouvant être effectif sans passer
            par du <span>sport</span> et les{" "}
            <span>activités extra-scrolaires</span>, nous proposons plusieurs
            activités à nos élèves, notamment:
          </p>
          <br />
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>Les activités sportives au sein de l'école.</p>
          </div>
          <br />
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>Plusieurs clubs (Culture, Musique, TIC, Environnemnt, Bilinguisme, journalisme, Santé), ce qui peut aider les élèves à découvrir une passion pour une activité/passion et à nous les encadreurs de déceler les talents cachés en eux.</p>
          </div>
          <br />
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>Les participations <span>fenasco</span> et <span>carton rouge</span> afin de leur permettre de rencontrer d'autres élèves des autres écoles et de se challenger entre eux sur d'autres activités.</p>
          </div>
          <br />
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>Les excursions au <span>centre pilote</span> pour faire du <span>badmiton</span>.</p>
          </div>
        </div>
        <div class="gallery">
          <div class="container">
            <h2>Quelques clichés de nos activités</h2>

            <div class="grid-gallery">
              <div class="item item1"></div>
              <div class="item item2"></div>
              <div class="item item3"></div>
              <div class="item item4"></div>
              <div class="item item5"></div>
              <div class="item item6"></div>
            </div>
          </div>
        </div>
      </div>
      <FootPage />
    </div>
  );
};

export default Workshops;
