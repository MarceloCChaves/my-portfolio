import "./Styles.scss";
import { useRef } from "react";
import BrazilFlag from "../../assets/Flag_of_Brazil.svg"
import UsaFlag from "../../assets/Flag_of_the_United_States.svg"
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (value: any) => {
    i18n.changeLanguage(value)
    .then(() => {
      if(i18n.resolvedLanguage === "pt"){
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
  
  const scrollTo = (e: any) => {
    window.scrollTo({
      top: e,
      behavior: "smooth",
    });
  }

  return (
    <ul className="navbar">
      <div className="items">
        <li onClick={() => scrollTo(700)} ref={about}>{t("Sobre")}</li>
        <li onClick={() => scrollTo(1700)} ref={xp}>{t("Experiencias")}</li>
        <li onClick={() => scrollTo(2300)} ref={projects}>{t("Projetos")}</li>
      </div>
      <div className="flags">
        <img src={BrazilFlag} alt="Brazil Flag" onClick={() => handleChangeLanguage('pt')} />
        <img src={UsaFlag} alt="Usa Flag" onClick={() => handleChangeLanguage('en')} />
      </div>
    </ul>
  );
}
