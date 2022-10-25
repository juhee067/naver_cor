
import "../css/Service.scss";
import { service } from "../data/common";

const Service = () => {
  return (
    <section className="Service">
      <div className="container">
        <div className="contentSV">
          {service.map((service, idx) => (
            <ul className={`itm itm0${idx + 1}`} key={idx}>
              <li><img src={service.imageSrc} alt="/" /></li>
              <ul className="title">
                <li><i className="xi-arrow-up"></i></li>
                <li>{service.title}</li>
                <li>{service.des}</li>
              </ul>
            </ul>
          ))}</div>

      </div>
    </section>
  );
};

export default Service;
