import "./Styles.scss";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import PlayerModel from "../../assets/PlayerModel.png"

export default function Bio() {
  return (
    <header className="Bio">
      <div>
        <img src={PlayerModel} alt="Marcelo" />
      </div>
      <div className="box">
        <h1>Marcelo Chaves</h1>
        <p>Desenvolvedor Web</p>
        <div className="social">
          <div className="box">
            <a
              href="https://www.linkedin.com/in/marcelocchaves/"
              target="_blank"
            >
              <FaLinkedin color="#fff" size={20} />
            </a>
          </div>
          <div className="box">
            <a href="https://github.com/MarceloCChaves" target="_blank">
              <FaGithub color="#fff" size={20} />
            </a>
          </div>
          <div className="box">
            <a
              href="https://www.instagram.com/marcelocchaves_/"
              target="_blank"
            >
              <FaInstagram color="#fff" size={20} />
            </a>
          </div>
          <div className="box">
            <a href="mailto:Marcelochaves20000@gmail.com">
              <FaEnvelope color="#fff" size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
