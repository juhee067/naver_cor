import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainVisual.scss";
import { mainContent } from "../data/common";

const MainVisual = () => {
  const [IDX, setIDX] = useState();
  useEffect(() => {
    setIDX(0);
  }, []);
  const mainSlide = useRef(null);
  const settings = {
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    dots: true,
    afterChange: (index) => setIDX(index),
  };

  return (
    <section className="MainVisual">
      <Slider {...settings} ref={mainSlide}>
        {mainContent.map((slide, idx) => (
          <div className="mainSlider" key={idx}>
            <figure className={`itm itm0${idx + 1}`} key={idx}>
              <img src={slide.imageSrc} />
              <div className="container">
                <div className="inner">
                  <strong>{slide.strong}</strong>
                  <p>{slide.content}</p>
                  <div className="slideNum">
                    0{IDX + 1}
                    <span> / 0{mainContent.length}</span>
                  </div>
                </div>
              </div>
              <div className="allows">
                <i
                  onClick={() => mainSlide.current.slickPrev()}
                  className="xi-arrow-left left"
                ></i>
                <i
                  onClick={() => mainSlide.current.slickNext()}
                  className="xi-arrow-right right"
                ></i>
              </div>
            </figure>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MainVisual;
