import "../css/Notice.scss";
import { service } from "../data/common";
const Service = () => {
  return (
    <section className="Service">
      {service.map((slide, idx) => (
        <div className="container">
          <figure className={`itm itm0${idx + 1}`} key={idx}>
            <img src={slide.imageSrc} />
          </figure>
        </div>
      ))}
    </section>
  );
};

export default Service;
