import "./Styles.scss";
import AboutImage from "../../assets/About.svg";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <img src={AboutImage} alt="Marcelo" />
      <div className="info">
        <h1>{t('Sobre')}</h1>
        <hr />
        <p>
          {t('Descricao')}
        </p>
        <hr />
        <div className="contacts">
          <strong>{t('Contatos')}</strong>
          <div className="mail">
            <FaEnvelope color="#fff" size={20} />
            <a href="mailto:Marcelochaves20000@gmail.com" target="_blank">
              Marcelochaves20000@gmail.com
            </a>
          </div>
          <div className="phone">
            <FaPhone color="#fff" size={20} />
            <a href="https://wa.me/5591992727732" target="_blank">
              (91) 99272-7732
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
