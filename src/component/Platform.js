import "../css/Main.scss";
import { platform } from "../data/common";
const Platform = () => {
  return (
    <section className="Platform">
      <div className="container">
        {" "}
        <div className="title">
          <h2> 기술로 다양성을 꽃피우는 플랫폼</h2>
          <p>
            {" "}
            <span>
              개인의 다양한 가능성이 의미있는 성공으로 꽃 피울 수 있도록
            </span>
            네이버가 서비스와 기술플랫폼을 통해 더 가까이 서포트(SUPPORT)
            합니다.
          </p>
        </div>
        <div className="content">
          {platform.map((platform, idx) => (
            <div className={`form from0${idx + 1}`} key={idx}>
              <a href="/" className={`pic0${idx + 1}`} key={idx}>
                {platform.title}
              </a>
              <p>{platform.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
