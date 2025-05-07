import Eu from "../../assets/Eu.png";
import TypeAnimation from "react-type-animation";
import "../../utils/i18n";
import { useTranslation } from "react-i18next";
import "./Styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { FaDownload } from "react-icons/fa";

export default function Bio() {
  const { t } = useTranslation();
  return (
    <header className="Bio">
      <div className="box">
        <div className="principal">
          <img src={Eu} alt="Marcelo" />
        </div>
      </div>
      <div className="names">
        <TypeAnimation
          cursor={false}
          sequence={[`${t('introduction')}`, 1000]}
          wrapper="h1"
          repeat={1}
        />
        <TypeAnimation
          cursor={false}
          sequence={[`${t('Desenvolvedor Web')}`, 3000]}
          wrapper="p"
          repeat={1}
        />
      </div>
      <div className="download-cv">
        <a href="/cv-marcelo.pdf" download>
          <FaDownload />
          Download CV
        </a>
      </div>
    </header>
  );
}
