import React from "react";
import FootPage from "../../../components/FootPage";
import Navigation from "../../../components/Navigation";

const AboutUs = () => {
  return (
    <div>
      <Navigation />
      <div className="format">
        <div className="history">
          <h2><span>qui sômmes-nous?</span></h2>
          <br />
          <p>
            Soif de transmettre le savoir et l'education à nos enfants, nous
            nous sommes donnés le grand defi et la lourde de mission d'oeuvrer
            dans l'éducatif. C'est ainsi que naquit votre école
            <span> awae bilingual nursery and primary school </span> en 2007. Nous
            avons donc accueilli nos premiers élèves à la rentrée de septembre
            2007.
          </p>
          <br />
          <p>
            Vous nous faites confiance et nous oeuvrons tous les jours pour
            transmettre le meilleur aux 1000 enfants que vous nous confiez
            chaque année, grâce à des enseignements de qualité proposés par des
            enseignants choisis avec munitie pour un resultat plus efficient.
            Raison pour laquelle nous avons des resultats à l'examen du CEP très
            satisfaisant.
          </p>
          <br />
          <p>
            Avec votre confiance et notre travail + volonté, nous avons pu
            obtenir l'agrément du Ministère de l'Eductaion et nous nous
            présentons aujourd'hui comme<span> centre d'éxamen officiel </span> 
            pour le Certificat d'Etudes Primaires.
          </p>
        </div>

        <br />
        <br />
        <div className="mission">
          <h2><span>notre mission</span></h2>
          <br/>
          <p>
            Notre pays étant un pays bilingue, un de nos premiers objectifs est
            de promouvoir le bilinguisme, raison pour laquelle nous proposons
            deux sections : anglophone et francophone; depuis la
            Maternelle/Nursery jusqu'au CM2/Class 6.
          </p>
          <br />
          <p>
            Afin de contribuer à la construction d'un Cameroun emergent et
            evoluant avec l'ère de la technologie, nous misons sur le
            Multiculturalisme, le Sport, l'Education civique et les TIC
            (Technologies de l'Information et de la Communication).
          </p>
          <br/>
          <p>
            Nous nous sommes lancés également comme defi, de sécuriser vos enfants, raison pour laquelle nous controllons serieusement leurs évolution et suivi tant sur leur quotidien au sein de l'ecole que sur leurs notes.
          </p>
        </div>
      </div>
      <FootPage />
    </div>
  );
};

export default AboutUs;
