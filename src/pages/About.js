import React from "react";
import CollapseList from "../components/CollapseList";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <section className="banner" >
        <img
          src={require("../assets/images/about.webp")}
          alt="Paysage"
          className="banner__img"
        />
          </section>
          <CollapseList />
    </div>
  );
};

export default About;
