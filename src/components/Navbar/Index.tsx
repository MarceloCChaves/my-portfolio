import "./Styles.scss";
import { useState } from "react";
import BrazilFlag from "../../assets/Flag_of_Brazil.svg";
import UsaFlag from "../../assets/Flag_of_the_United_States.svg";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value)
      .then(() => {
        toast.success(i18n.resolvedLanguage === "pt" ? "Idioma alterado" : "Language changed");
      })
      .catch(console.error);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes color="#fff" size={24} /> : <FaBars color="#fff" size={24} />}
      </div>

      <div className={`items ${menuOpen ? "show" : ""}`}>
        <ul>
          <li className="box">
            <a href="https://www.linkedin.com/in/marcelocchaves/" target="_blank" rel="noreferrer">
              <FaLinkedin color="#fff" size={20} /> Linkedin
            </a>
          </li>
          <li className="box">
            <a href="https://github.com/MarceloCChaves" target="_blank" rel="noreferrer">
              <FaGithub color="#fff" size={20} /> Github
            </a>
          </li>
          <li className="box">
            <a href="mailto:Marcelochaves20000@gmail.com" target="_blank">
              <FaEnvelope color="#fff" size={20} /> Email
            </a>
          </li>
        </ul>
      </div>

      <div className="flags">
        <img src={BrazilFlag} alt="Bandeira do Brasil" onClick={() => handleChangeLanguage("pt")} />
        <img src={UsaFlag} alt="Bandeira dos Estados Unidos" onClick={() => handleChangeLanguage("en")} />
      </div>
    </nav>
  );
}
