import "./Styles.scss";
import Me from "../../assets/Foto2.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function About() {
  return (
    <div className="About">
      <img src={Me} alt="Marcelo" />
      <div className="info">
        <h1>Sobre</h1>
        <hr />
        <p>
          Meu nome é Marcelo Calandrini Chaves, tenho 21 anos, moro em Belém-PA,
          atualmente sou desenvolvedor web com experiência em frontend,
          construíndo interfaces de alta qualidade e também possuo conhecimentos
          básicos de backend.
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
