import "./Styles.scss";
import Card from "../Card/Index"

export default function Projects() {
  const projects = [
    {
      name: "Abrazza Animes",
      photo: "https://camo.githubusercontent.com/d174805d3bfcde6d6751f8a56f22a15c38da5653d4412eed4b005dd91fc1b2eb/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3735373638333039393433373130353237382f3937313537373632393738383439313739362f756e6b6e6f776e2e706e67",
      description: "AbrazzaAnimes é uma plataforma utilizada para listar e exibir notícias sobre os animes que estão perto do lançamento oficial.",
      link: "https://github.com/MarceloCChaves/AbrazzaAnimes"
    },
    {
      name: "Museu valorant",
      photo: "https://cdn.discordapp.com/attachments/757683099437105278/1000884230638817290/unknown.png",
      description: "Museu valorant é uma aplicação feita para exibir as informações de agentes e mapas do jogo VALORANT.",
      link: "https://github.com/MarceloCChaves/Museu-Valorant"
    },
    {
      name: "Sports Online",
      photo: "https://cdn.discordapp.com/attachments/757683099437105278/1002733688544579746/unknown.png",
      description: "Sports online é um serviço para visualizar partidas ao vivo, melhores momentos e gols de partidas de futebol diárias.",
      link: "https://github.com/MarceloCChaves/Sports-Online"
    },
    {
      name: "Pokedex",
      photo: "https://raw.githubusercontent.com/MarceloCChaves/Pokedex/master/assets/images/githubBackground.png",
      description: "Projeto criado para consumir a api do pokeapi, exibindo as fotos do pokemon normal/shiny, o nome, o tipo e um botão de mais informações.",
      link: "https://github.com/MarceloCChaves/Pokedex"
    },
    {
      name: "Estoque de produtos",
      photo: "https://cdn.discordapp.com/attachments/757683099437105278/1000886954507902986/unknown.png",
      description: "Um CRUD básico utilizando o serviço MOCKAPI para realizar as operações.",
      link: "https://github.com/MarceloCChaves/Reactjs-Crud"
    },
    {
      name: "Stomp Academy",
      photo: "https://cdn.discordapp.com/attachments/757683099437105278/1000887638053617735/unknown.png",
      description: "Site criado para a organização de e-sports Stomp Academy.",
      link: "https://github.com/MarceloCChaves/Stomp-Academy"
    }
  ]
  return (
    <main className="Projects">
      <h1>Projetos</h1>
      <hr />
      <div className="project">
      {
        projects.map((item, index) => {
          return(
            <Card 
              key={index}
              name={item.name}
              description={item.description}
              photo={item.photo}
              link={item.link}
            />
          )
        })
      }
      </div>
      <a href="https://github.com/MarceloCChaves/">Visualizar mais repositórios</a>
    </main>
  )
}
