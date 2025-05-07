import "./Styles.scss";
import { useTranslation } from "react-i18next";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaReact, FaNodeJs, FaFigma, FaGitAlt, FaJs, FaTools, FaPython, FaJava, FaAngular, FaVuejs, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiNextdotjs, SiMysql } from "react-icons/si";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <div className="header-content">
        <div className="header-about">
          <div>
            <h1>{t("Sobre")}</h1>
            <hr />
            <p>{t("Descricao")}</p>
          </div>

          <div className="programing">
            <DotLottieReact
              src="https://lottie.host/e5e904c2-d1aa-4a39-b538-a516265c1ac8/epuQaLDkuV.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        <div className="skills">
          <h2>{t("Habilidades Técnicas")}</h2>

          <div className="skills-category">
            <h3>{t("Linguagens")}</h3>
            <ul>
              <li><FaJs /> JavaScript</li>
              <li><SiTypescript /> TypeScript</li>
              <li><FaPython /> Python</li>
              <li><FaJava /> Java</li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>Frameworks</h3>
            <ul>
              <li><FaReact /> React.js</li>
              <li><SiNextdotjs /> Next.js</li>
              <li><FaAngular /> Angular</li>
              <li><FaVuejs /> Vue.js</li>
              <li><FaNodeJs /> Node.js</li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>{t("Banco de Dados")}</h3>
            <ul>
              <li><SiMongodb /> MongoDB</li>
              <li><SiMysql /> MySql</li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>{t("Ferramentas")}</h3>
            <ul>
              <li><FaGitAlt /> Git</li>
              <li><FaTools /> VS Code</li>
            </ul>
          </div>

          <div className="skills-category">
            <h3>{t("Design")}</h3>
            <ul>
              <li><FaFigma /> Figma</li>
              <li><FaWordpress /> Wordpress</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
