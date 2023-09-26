import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Eu from "../../assets/Eu.png";
import Programing from "../../assets/programming.svg";
import TypeAnimation from "react-type-animation";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import "./Styles.scss";
import "react-toastify/dist/ReactToastify.css";

export default function Bio() {
  const { t } = useTranslation();
  return (
    <header className="Bio">
      <div className="box">
        <div className="principal">
          <img src={Eu} alt="Marcelo" />
          <div className="names">
            <TypeAnimation
              cursor={false}
              sequence={["Marcelo Chaves", 1000]}
              wrapper="h1"
              repeat={1}
            />
            <TypeAnimation
              cursor={false}
              sequence={[`${t('Desenvolvedor Web')}`, 1000]}
              wrapper="p"
              repeat={1}
            />
            <p></p>
          </div>
        </div>
        <div className="social">
          <div className="box">
            <a
              href="https://www.linkedin.com/in/marcelocchaves/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="#fff" size={20} />
            </a>
          </div>
          <div className="box">
            <a
              href="https://github.com/MarceloCChaves"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="#fff" size={20} />
            </a>
          </div>
          <div className="box">
            <a href="mailto:Marcelochaves20000@gmail.com" target="_blank">
              <FaEnvelope color="#fff" size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="programming">
        <img src={Programing} alt="Programing" />
      </div>
    </header>
  );
}
