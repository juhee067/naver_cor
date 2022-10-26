import "../css/Main.scss";
import { notice } from "../data/common";
import News from "./News";
import Career from "./Career";
import Stock from "./Stock";
import State from "./State";

const Notice = () => {
  return (
    <section className="Notice">
      {/* <div className="container">
        {notice.map((content) => {
          return (
            <figure key={content.id}>
              <div className="tit">{content.title}</div>

              <div className="dec">{content.btn}</div>
            </figure>
          );
        })}
      </div> */}
      <div className="container">
        {notice.map((content) => {
          const it_Tit = content.title;
          return (
            <figure key={content.id}>
              <div className="tit">{content.title}</div>
              <div className="content">
                {
                  {
                    NEWS: <News />,
                    CAREER: <Career />,
                    STOCK: <Stock />,
                    STATE: <State />,
                  }[it_Tit]
                }
              </div>
              <div className="dec">
                <a href="/">
                  {content.btn} <i className="xi-angle-right-min"></i>
                </a>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Notice;
