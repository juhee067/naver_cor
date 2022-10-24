import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainVisual.scss";
import { mainContent } from "../data/common";

const MainVisual = () => {
  state = {
    currentSlide: 1,
  };
  const settings = {
    arrows: true,
    autoplay: true,
    pauseOnHover: false,
    dots: true,
  };

  return (
    <div className="MainVisual">
      <Slider {...settings}>
        {mainContent.map((slide, idx) => (
          <div className="mainSlider" key={idx}>
            <figure className={`itm itm0${idx + 1}`} key={idx}>
              {" "}
              <div className="container">
                {" "}
                <div className="inner">
                  <strong>{slide.strong}</strong>
                  <p>{slide.content}</p>
                  <div className="slideNum">
                    0{idx + 1}
                    <span> / 0{SLIDE.length}</span>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainVisual;
