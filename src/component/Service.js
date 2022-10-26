import "../css/Main.scss";
import { service } from "../data/common";

const Service = () => {
  return (
    <section className="Service">
      <div className="container">
        <div className="contentSV">
          {service.map((service, idx) => (
            <figure className={`itm itm0${idx + 1}`} key={idx}>
              <div className="thum">
                <img src={service.imageSrc} alt="/" />
              </div>
              <div className="title">
                <i className="xi-arrow-up"></i>
                <h2>{service.title}</h2>
                <h3>{service.des}</h3>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
