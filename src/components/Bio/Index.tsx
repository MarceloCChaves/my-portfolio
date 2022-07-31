import "./Styles.scss";
import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import Eu from "../../assets/Eu.png";
import Programing from "../../assets/programming.svg";
import TypeAnimation from "react-type-animation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleAlert = (text: any) => {
  navigator.clipboard.writeText(text);
  toast.success("Copiado para área de transferência");
};

export default function Bio() {
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
              sequence={["", 2000, "Desenvolvedor Web."]}
              wrapper="p"
              repeat={1}
            />
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
            <a
              href="https://www.instagram.com/marcelocchaves_/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram color="#fff" size={20} />
            </a>
          </div>
          <div className="box">
            <FaDiscord
              color="#fff"
              size={20}
              onClick={() => handleAlert("Marcelo Chaves#4191")}
              style={{ cursor: "pointer"}}
            />
          </div>
        </div>
      </div>
      <div className="programming">
        <img src={Programing} alt="Proggramming" />
      </div>
    </header>
  );
}
