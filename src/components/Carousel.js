import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { CarouselImages } from "../data";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === CarouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CarouselImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Automatically advance slide every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="carousel">
      <button className="btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slides">
        <div className="slide" style={{ transform: `translateX(0%)` }}>
          <img
            src={CarouselImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <div className="slide">
          <img
            src={
              CarouselImages[
                currentIndex === CarouselImages.length - 1
                  ? 0
                  : currentIndex + 1
              ]
            }
            alt={`Slide ${
              currentIndex === CarouselImages.length - 1 ? 1 : currentIndex + 2
            }`}
          />
        </div>
      </div>
      <button className="btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
