import "../css/Notice.scss";
import { notice } from "../data/common";
const Notice = () => {
  return (
    <section className="Notice">
      <div className="container">
        {notice.map((content) => {
          return (
            <figure key={content.id}>
              <div className="tit">{content.title}</div>

              <div className="dec">{content.btn}</div>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Notice;
