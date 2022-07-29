import "./Styles.scss";
import { useRef } from "react";

export default function Navbar() {
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
  const scrollToProjects = () => {
    window.scrollTo({
      top: 1150,
      behavior: "smooth",
    });
  }
  const scrollToTechnologies = () => {
    window.scrollTo({
      top: 2450,
      behavior: "smooth",
    });
  }
  const scrollToExp = () => {
    window.scrollTo({
      top: 3400,
      behavior: "smooth",
    });
  }
  return (
    <ul className="navbar">
      <li onClick={scrollToAbout} ref={about}>Sobre</li>
      <li onClick={scrollToProjects} ref={projects}>Projetos</li>
      <li onClick={scrollToTechnologies} ref={tecnologies}>Tecnologias</li>
      <li onClick={scrollToExp} ref={xp}>Experiências</li>
    </ul>
  );
}
