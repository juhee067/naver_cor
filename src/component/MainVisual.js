import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const MainVisual = () => {
  return (
    <div className="MainSlide">
      <Slider arrows={false} autoplay={true} pauseOnHover={false}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </div>
  );
};

export default MainVisual;
