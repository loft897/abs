import React from "react";
import Navigation from "../../../components/Navigation";
import FootPage from "../../../components/FootPage";

const AdmissionFile = () => {
  return (
    <div>
      <Navigation />
      <div className="admissionFile">
        <h2>
          <span>modalités d'admission et d'inscription</span>
        </h2>
        <div className="files">
          <p>
            Pour être admis et inscrit à
            <span> awae biligual nursery and primary school</span>, l'élève doit
            fournir :
          </p>
          <br />
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>Test d'admission réussi pour tout nouvel élève</p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>Bulletins de l'année précédente</p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>Photocopie de l'acte de naissance</p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>
              1.000Fcfa pour le badge d'identification pour toutes les classes
            </p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>
              Photocopie du carnet de vaccination pour les élèves de maternelle
            </p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>2 demi-photos 4x4</p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>1 rame de papier (A4 80g) pour tout nouvel élève</p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>4 rouleaux de papier hygiénique (Sita) pour tout nouvel élève</p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>Fiche de renseignement à remplir pendant l'inscription</p>
          </div>
          <br />
          <h3>
            <span>tenue scolaire</span>
          </h3>
          <br />
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>
              Tenue de classe, chaussures noires, chaussetes blanches et
              pull-over
            </p>
          </div>
          <div className="file">
            <i class="fas fa-hand-point-right"></i>
            <p>
              Tenue de sport avec le logo de l'ecole, termes et chaussettes
              blanches.
            </p>
          </div>
        </div>
      </div>
      <FootPage />
    </div>
  );
};

export default AdmissionFile;
