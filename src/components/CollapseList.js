import React from "react";
import Collapse from "./Collapse";
const CollapseList = () => {
  return (
    <div className="list">
      <Collapse label="Fiabilité">
        <h3 className="collapse__h3">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </h3>
      </Collapse>
      <Collapse label="Respect">
        <h3 className="collapse__h3">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </h3>
      </Collapse>
      <Collapse label="Service">
        <h3 className="collapse__h3">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </h3>
      </Collapse>
      <Collapse label="Sécurité">
        <h3 className="collapse__h3">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </h3>
      </Collapse>
    </div>
  );
};

export default CollapseList;
