import { useTranslation } from "react-i18next";
import "./Styles.scss";

export default function Technologies() {
  const { t } = useTranslation();
  return (
    <div className="Technologies">
      <h1>{t("Habilidades")}</h1>
      <hr />
      <div className="boxes">
        <div className="box">
          <div className="technology">
            <span>HTML</span>
          </div>
          <div className="technology">
            <span>CSS</span>
          </div>
          <div className="technology">
            <span>Javascript</span>
          </div>
        </div>
        <div className="box">
          <div className="technology">
            <span>NodeJs</span>
          </div>
          <div className="technology">
            <span>Git</span>
          </div>
          <div className="technology">
            <span>Github</span>
          </div>
        </div>
        <div className="box">
          <div className="technology">
            <span>ReactJs</span>
          </div>
          <div className="technology">
            <span>Vuejs</span>
          </div>
          <div className="technology">
            <span>Bootstrap</span>
          </div>
        </div>
        <div className="box">
          <div className="technology">
            <span>React native</span>
          </div>
          <div className="technology">
            <span>Python</span>
          </div>
          <div className="technology">
            <span>Angular</span>
          </div>
        </div>
      </div>
    </div>
  );
}
