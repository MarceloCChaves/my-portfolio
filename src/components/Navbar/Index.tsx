import "./Styles.scss";
import { useRef } from "react";
import BrazilFlag from "../../assets/Flag_of_Brazil.svg"
import UsaFlag from "../../assets/Flag_of_the_United_States.svg"
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (value: any) => {
    i18n.changeLanguage(value)
      .then(() => {
        if (i18n.resolvedLanguage === "pt") {
          toast.success("Idioma alterado");
        } else {
          toast.success("Language changed");
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const about = useRef(null);
  const projects = useRef(null);
  const xp = useRef(null);


  return (
    <ul className="navbar">
      <div className="items">
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
      <div className="flags">
        <img src={BrazilFlag} alt="Brazil Flag" onClick={() => handleChangeLanguage('pt')} />
        <img src={UsaFlag} alt="Usa Flag" onClick={() => handleChangeLanguage('en')} />
      </div>
    </ul>
  );
}
