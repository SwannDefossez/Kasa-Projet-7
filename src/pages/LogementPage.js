import React from "react";
import { Navigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Logement from "../models/logements.json";
import Star from "../assets/images/star.png";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const LogementPage = () => {
  // récupération de l'id
  const logement = useParams();
  const logementId = logement.id;
  const selectedLogement = Logement.find((e) => e.id === logementId);

  // redirection si l'id n'est pas bon
  if (!selectedLogement) {
    return <Navigate to="/error" />;
  }

  const tag = selectedLogement.tags;
  const equipments = selectedLogement.equipments;
  const rating = Number(selectedLogement.rating);
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="globalMargin">
        <Header />
        <Slideshow logement={selectedLogement} />
        <section className="info">
          <div className="info__logement">
            <h1 className="info__h1">{selectedLogement.title}</h1>
            <h3 className="info__h3">{selectedLogement.location}</h3>
            <div className="info__tag">
              {tag.map((tag, index) => {
                return (
                  <h4 className="tag" key={index}>
                    {tag}
                  </h4>
                );
              })}
            </div>
          </div>

          <div className="info__content">
            <div className="info__rating">
              {numbers.map((number, index) => (
                <img
                  key={index}
                  src={Star}
                  alt="star"
                  className={
                    rating >= number ? "info__icon " : "info__icon grey"
                  }
                />
              ))}
            </div>
            <div className="info__user">
              <h3 className="info__user__h3">{selectedLogement.host.name}</h3>
              <img
                src={selectedLogement.host.picture}
                alt={selectedLogement.host.name}
                className="info__user__img"
              />
            </div>
          </div>
        </section>
        <section className="logement__collapse">
          <Collapse label="Description">
            <h3 className="collapse__h3">{selectedLogement.description}</h3>
          </Collapse>
          <Collapse label="Équipements">
            <ul className="collapse__ul">
              {equipments.map((equipment) => (
                <li key={equipment} className="collapse__h3">
                  {equipment}
                </li>
              ))}
            </ul>
          </Collapse>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LogementPage;
