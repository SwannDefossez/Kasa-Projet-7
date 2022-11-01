import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Logement from "../models/logements.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const LogementPage = () => {
  const logement = useParams();
  const logementId = logement.id;
  const selectedLogement = Logement.find((e) => e.id === logementId);
  const tag = selectedLogement.tags;
  const rating = Number(selectedLogement.rating);
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
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
            {numbers.map((number) => (
              <FontAwesomeIcon
                key={number}
                className={rating >= number ? "info__icon " : "info__icon grey"}
                icon={faStar}
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
    </div>
  );
};

export default LogementPage;
