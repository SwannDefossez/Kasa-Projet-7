import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/LOGO.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink end to="/">
          <img src={Logo} alt="Logo" className="header__logo__img"/>
        </NavLink>
      </div>

      <ul className="header__nav">
        <li>
          <NavLink
            end
            to="/"
            className={(nav) => (nav.isActive ? "active-link" : "")}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to="/about"
            className={(nav) => (nav.isActive ? "active-link" : "")}
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
