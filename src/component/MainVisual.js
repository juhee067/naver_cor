import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/Header.scss";

const MainVisual = () => {
  const settings = {
    arrows: true,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div className="MainSlide">
      <Slider {...settings}>
        <div>
          <h3>ddddd</h3>
        </div>
        <div>
          <h3>sss</h3>
        </div>
        <div>
          <h3>ff</h3>
        </div>
      </Slider>
    </div>
  );
};

export default MainVisual;
