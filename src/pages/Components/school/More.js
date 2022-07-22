import React from "react";
import FootPage from "../../../components/FootPage";
import Navigation from "../../../components/Navigation";
import handicap from "../../../../src/media/handicap.jpg";
import school_bus from "../../../../src/media/school_bus.jpg";
import infirmary from "../../../../src/media/infirmary.jpg";
import good_teacher from "../../../../src/media/good_teacher.jpg";
import computer_room from "../../../../src/media/computer_room.jpg";
import school from "../../../../src/media/school.jpg";
import whatsap from "../../../../src/media/whatsap.jpg";

const More = () => {
  return (
    <div>
      <Navigation />
      <div className="moreInfos">
        <h2>
          <span>les plus d'awae bilingual nursery and primary school</span>
        </h2>
        <div className="extras">
          <div className="extra">
            <div className="imageBox">
              <img src={handicap} alt="handicap" />
            </div>
            <div className="textBox">
              <h3>
                Parce que chaque enfant a besoin d'éducation, nous prenons
                également en charge les enfants à besoins spéciaux, par une
                education inclusive grâce à un personnel dévoué et de qaulité.
              </h3>
            </div>
          </div>
          <div className="extra">
            <div className="textBox">
              <h3>
                Nous mettons à la disposition de nos élèves, des bus scolaires
                afin qu'ils puissent toujours être à l'heure pour le debut des
                cours et pour le retour à la maison après les cours. Ces bus passent dans les différents quartiers, aux
                différents points de rencontre définis avec les parents en
                fonction de leur proximité avec la route.
              </h3>
            </div>
            <div className="imageBox">
              <img src={school_bus} alt="school-bus" />
            </div>
          </div>
          <div className="extra">
            <div className="imageBox">
              <img src={infirmary} alt="infirmary" />
            </div>
            <div className="textBox">
              <h3>
                Afin de prevenir tout problème de santé qui pourrait survenir
                chez un de nos élèves au sein de l'établissement, nous disposons
                d'une infirmerie complète, pour ainsi assurer les premiers soins
                si le besoin se fait ressentir.
              </h3>
            </div>
          </div>
          <div className="extra">
            <div className="textBox">
              <h3>
                Nous nous préocuppons de l'éducation de nos élèves et de leur
                suivi, c'est pour cette raison que nous travaillons avec un
                personnel qualifié et dévoué à la tâche; dans des salles de
                classe larges avec un nombre d'élèves limité par salle de
                classe.{" "}
              </h3>
            </div>
            <div className="imageBox">
              <img src={good_teacher} alt="good_teacher" />
            </div>
          </div>
          <div className="extra">
            <div className="imageBox">
              <img src={computer_room} alt="computer_room" />
            </div>
            <div className="textBox">
              <h3>
                L'nformatique étant l'avenir, nous mettons un accent particulier sur les <span>tic</span> (Technologies de l'Information et de la Communication), raison pour laquelle nous nous sommes dotés une salle informatique complète afin d'initier ces jeunes aux nouvelles technologies.
              </h3>
            </div>
          </div>
          <div className="extra">
            <div className="textBox">
              <h3>
               Nous sommes bien situés, à proximité de la route, à quelques centaines de mètres d'Awae Concorde. Nos élèves béneficient d'un environnement sécurisé avec des infrastructures propres et modernes pour le confort de ces derniers.
              </h3>
            </div>
            <div className="imageBox">
              <img src={school} alt="school" />
            </div>
          </div>
          <div className="extra">
            <div className="imageBox">
              <img src={whatsap} alt="whatsap" />
            </div>
            <div className="textBox">
              <h3>
                Pour assurer une bonne relation parents/enseignats, nous mettons à la disposition des parents, un chaier de correspondance parents/enseignants. Nous avons également mis en place un forum Whatsapp pour le suivi des enfants depuis la maison ou le lieu d'occupation quotidienne.
              </h3>
            </div>
          </div>
        </div>
        <br />
      </div>
      <FootPage />
    </div>
  );
};

export default More;
