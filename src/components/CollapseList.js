import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const CollapseList = () => {

  return (
    <div className="list">
      <div className="accordeon">
        {data.map((item, i) => (
          <div className="collapse">
            <div className="collapse__label">
              <h2 className="collapse__h2">{item.label} </h2>
              <FontAwesomeIcon className="collapse___icon" icon={faChevronUp} />
            </div>
            <div className="collapse__content">
              <h3 className="collapse__h3">{item.content}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    label: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    label: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    label: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    label: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes",
  },
];

export default CollapseList;
