import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainVisual.scss";
import { mainContent } from "../data/common";

const MainVisual = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="MainVisual">
      <Slider {...settings}>
        {mainContent.map((slide, idx) => (
          <div className="mainSlider" key={idx}>
            <img alt="" src={slide.imageSrc} />
            <strong>{slide.strong}</strong>
            <p>{slide.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainVisual;
