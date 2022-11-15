import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
    <div className="globalMargin">
      <Header />
      <section className="banner">
        <h2 className="banner__h2">Chez vous, partout et ailleurs</h2>
        <img
          src={require("../assets/images/paysage.webp")}
          alt="Paysage"
          className="banner__img"
        />
      </section>
      <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
