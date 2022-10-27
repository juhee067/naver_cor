import "../css/Main.scss";
import { notice } from "../data/common";
import News from "./News";
import Career from "./Career";
import Stock from "./Stock";
import Settle from "./Settle";

const Notice = () => {
  return (
    <section className="Notice">
      <div className="container">
        {notice.map((content) => {
          const it_Tit = content.id;
          return (
            <figure key={content.id}>
              <div className="tit">{content.title}</div>
              <div className="content">
                {
                  {
                    1: <News />,
                    2: <Career />,
                    3: <Stock />,
                    4: <Settle />,
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
