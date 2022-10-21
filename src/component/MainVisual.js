import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainVisual.scss";

const MainVisual = () => {
  const MainVisual = useRef(null);
  const settings = {
    arrows: true,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="MainVisual">
      <Slider {...settings}>
        return (<figure className={`itm itm0${idx + 1}`}></figure>)
      </Slider>
    </div>
  );
};

export default MainVisual;
