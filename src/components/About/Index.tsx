import "./Styles.scss";
import AboutImage from "../../assets/About.svg";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function About() {
  return (
    <div className="About">
      <img src={AboutImage} alt="Marcelo" />
      <div className="info">
        <h1>Sobre</h1>
        <hr />
        <p>
          Meu nome é Marcelo Calandrini Chaves, tenho 21 anos, moro em Belém-PA,
          atualmente sou desenvolvedor web com experiência em frontend, meu foco
          é principalmente o layout visual, interface e experiência do usuário,
          além disso, também possuo conhecimentos básicos de backend.
        </p>
        <hr />
        <div className="contacts">
          <strong>Contatos</strong>
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
