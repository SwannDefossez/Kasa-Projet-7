import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import error from "../assets/images/404.svg";


const Error = () => {
  return (
    <div className="globalMargin">
      <Header />
      <div className="error">
        <img className="error__img" src={error} alt="erreur 404" />
        <h3 className="error__h3">Oups! La page que vous demandez n'existe pas.</h3>
        <NavLink className="error__link" to="/">Retourner sur la page d'accueil</NavLink>
      </div>
    </div>
  );
};

export default Error;
