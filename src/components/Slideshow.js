import React from "react";
import { useState } from "react";
import Chevron from "../assets/images/chevron.png";
const Slideshow = ({ logement }) => {
  const [current, setCurrent] = useState(0);
  const picturesData = logement.pictures;
  const length = picturesData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(picturesData) || picturesData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <h4
        className={picturesData.length === 1 ? "slider__h4 none" : "slider__h4"}
      >
        {current + 1 + "/" + picturesData.length}
      </h4>
      <img
        src={Chevron}
        alt="Left"
        className={
          picturesData.length === 1 ? "slider__left none" : "slider__left "
        }
        onClick={prevSlide}
      />
      <img
        src={Chevron}
        alt="Right"
        className={
          picturesData.length === 1
            ? "slider__right none"
            : "slider__right rotate"
        }
        onClick={nextSlide}
      />
      {picturesData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide}
                alt={logement.title + " " + [index + 1]}
                className="slider__img"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slideshow;
