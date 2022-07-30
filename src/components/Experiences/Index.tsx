import "./Styles.scss";
import eumostro from "../../assets/eumostro.jpg";

export default function Experiences() {
  return (
    <main className="Experiences">
      <h1>Experiências</h1>
      <hr />
      <div className="box">
        <div className="principal">
          <img src={eumostro} alt="Marcelo" />
          <div className="job">
            <h1>eumostro</h1>
            <p>Estágio</p>
            <p>Maio 2021 - Maio 2022</p>
          </div>
        </div>
        <div className="description">
          <p>
            Atuei como estagiário de desenvolvimento web da plataforma eumostro.
            Atuei principalmente no desenvolvimento da plataforma, utilizando
            para frontend os frameworks Vue.js e Bootstrap e Nodejs e express
            para backend. <br /> Além disso, como metodologia ágil, foi
            utilizado SCRUM e o trello como plataforma de gerenciamento de
            projetos, também realizei o deploy de serviços em staging utilizando
            a plataforma AWS.
          </p>
        </div>
      </div>
    </main>
  );
}
