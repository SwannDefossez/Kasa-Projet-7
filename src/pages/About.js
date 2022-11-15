import React from "react";
import CollapseList from "../components/CollapseList";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
    <div className="globalMargin">
      <Header />
      <section className="mobileBanner">
        <img
          src={require("../assets/images/aboutbanner.webp")}
          alt="Paysage"
          className="mobileBanner__img"
        />
      </section>
      <section className="desktopBanner">
        <img
          src={require("../assets/images/about.webp")}
          alt="Paysage"
          className="desktopBanner__img"
        />
      </section>
      <CollapseList />
      
      </div>
      <Footer />
    </div>
  );
};

export default About;
