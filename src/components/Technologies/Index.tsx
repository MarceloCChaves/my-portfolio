import { useTranslation } from "react-i18next";
import { FaBootstrap, FaCss3, FaFigma, FaFlagUsa, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact, FaTrello, FaVuejs } from "react-icons/fa"
import "./Styles.scss"

export default function Technologies() {
  const { t } = useTranslation();
  return (
    <div className="Technologies">
      <h1>{t("Habilidades")}</h1>
      <hr />
      <div className="box">
          <div className="box-1">
            <div className="technology">
              <FaHtml5 color="#fff" size={50} />
              <span>HTML</span>
            </div>
            <div className="technology">
              <FaCss3 color="#fff" size={50} />
              <span>CSS</span>
            </div>
            <div className="technology">
              <FaJs color="#fff" size={50} />
              <span>Javascript</span>
            </div>
            <div className="technology">
              <FaReact color="#fff" size={50} />
              <span>ReactJs</span>
            </div>
            <div className="technology">
              <FaVuejs color="#fff" size={50} />
              <span>Vuejs</span>
            </div>
            <div className="technology">
              <FaBootstrap color="#fff" size={50} />
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="box-2">
            <div className="technology">
              <FaNodeJs color="#fff" size={50} />
              <span>NodeJs</span>
            </div>
            <div className="technology">
              <FaGit color="#fff" size={50} />
              <span>Git</span>
            </div>
            <div className="technology">
              <FaGithub color="#fff" size={50} />
              <span>Github</span>
            </div>
            <div className="technology">
              <FaFigma color="#fff" size={50} />
              <span>Figma</span>
            </div>
            <div className="technology">
              <FaTrello color="#fff" size={50} />
              <span>Trello</span>
            </div>
            <div className="technology">
              <FaFlagUsa color="#fff" size={50} />
              <span>{t("Ingles")}</span>
            </div>
          </div>
      </div>
    </div>
  )
}
