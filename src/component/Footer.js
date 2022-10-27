import "../css/Footer.scss";
import company from "../data/right";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="left">
          {" "}
          <div className="logo">
            <img src={company.logo}></img>
          </div>
          <ul className="open">
            {company.naver.map((content, idx) => (
              <li key={idx}>{content}</li>
            ))}
          </ul>
        </div>
        <div className="copy">{company.copy}</div>
        <div className="Shortcut">
          <button>
            <i className="xi-plus-min"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
