import "../css/Footer.scss";
import { company } from "../data/company";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="logo">{company.logo}</div>
        <ul className="open">
          {company.naver.map((content, idx) => (
            <li key={idx}>{content}</li>
          ))}
        </ul>
        {/* <div className="copy">{company.copy}</div>
        <div className="Shortcut">{company.sc}</div> */}
      </div>
    </div>
  );
};

export default Footer;
