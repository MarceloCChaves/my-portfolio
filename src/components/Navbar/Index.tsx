import "./Styles.scss";
import { useRef } from "react";
import BrazilFlag from "../../assets/Flag_of_Brazil.svg"
import UsaFlag from "../../assets/Flag_of_the_United_States.svg"
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (value: any) => {
    i18n.changeLanguage(value)
    .then(() => {
      console.log("Linguagem alterada")
    })
    .catch((error) => {
      console.log(error)
    })
  }
  const about = useRef(null);
  const projects = useRef(null);
  const xp = useRef(null);
  const tecnologies = useRef(null);
  
  const scrollToAbout = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  }
  const scrollToExp = () => {
    window.scrollTo({
      top: 1150,
      behavior: "smooth",
    });
  }
  const scrollToProjects = () => {
    window.scrollTo({
      top: 1710,
      behavior: "smooth",
    });
  }
  const scrollToTechnologies = () => {
    window.scrollTo({
      top: 3020,
      behavior: "smooth",
    });
  }
  return (
    <ul className="navbar">
      <div className="items">
        <li onClick={scrollToAbout} ref={about}>{t("Sobre")}</li>
        <li onClick={scrollToExp} ref={xp}>{t("Experiencias")}</li>
        <li onClick={scrollToProjects} ref={projects}>{t("Projetos")}</li>
        <li onClick={scrollToTechnologies} ref={tecnologies}>{t("Habilidades")}</li>
      </div>
      <div className="flags">
        <img src={BrazilFlag} alt="Brazil Flag" onClick={() => handleChangeLanguage('pt')} />
        <img src={UsaFlag} alt="Usa Flag" onClick={() => handleChangeLanguage('en')} />
      </div>
    </ul>
  );
}
