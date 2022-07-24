import "./Styles.scss";
import Me from "../../assets/Foto.jpg";

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
          construíndo interfaces de alta qualidade e também possuo
          conhecimentos básicos de backend.
        </p>
      </div>
    </div>
  );
}
