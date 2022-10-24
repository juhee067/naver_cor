import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainVisual.scss";
import { mainContent } from "../data/common";

const MainVisual = () => {

  const settings = {
    arrows: false,
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
              <img src={slide.imageSrc} />
              <div className="container">
                <div className="inner">
                  <strong>{slide.strong}</strong>
                  <p>{slide.content}</p>
                </div>

              </div>
              <div className="allows">
                <i className="xi-angle-left left"></i>
                <i className="xi-angle-right right"></i>


              </div>
            </figure>

          </div>
        ))}
      </Slider>
    </div>
  );

};

export default MainVisual;
