import "./Styles.scss";
import { useRef } from "react";

export default function Navbar() {
  const about = useRef(null);
  const projects = useRef(null);
  const xp = useRef(null);
  const tecnologies = useRef(null);

  const scrollToAbout = () => {
    window.scrollTo({
      top: 530,
      behavior: "smooth",
    });
  }
  const scrollToProjects = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }
  const scrollToTechnologies = () => {
    window.scrollTo({
      top: 2300,
      behavior: "smooth",
    });
  }
  // const scrollToAbout = () => {
  //   window.scrollTo({
  //     top: 530,
  //     behavior: "smooth",
  //   });
  // }
  return (
    <ul className="navbar">
      <li onClick={scrollToAbout} ref={about}>Sobre</li>
      <li onClick={scrollToProjects} ref={projects}>Projetos</li>
      {/* <li onClick={() => scrollToSection(xp)} ref={xp}>Experiências</li> */}
      <li onClick={scrollToTechnologies} ref={tecnologies}>Tecnologias</li>
    </ul>
  );
}
