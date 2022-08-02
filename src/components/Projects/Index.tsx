import "./Styles.scss";
import Card from "../Card/Index"
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      name: "Abrazza Animes",
      photo: "https://camo.githubusercontent.com/d174805d3bfcde6d6751f8a56f22a15c38da5653d4412eed4b005dd91fc1b2eb/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3735373638333039393433373130353237382f3937313537373632393738383439313739362f756e6b6e6f776e2e706e67",
      description: `${t("DescricaoAbbraza")}`,
      link: "https://github.com/MarceloCChaves/AbrazzaAnimes"
    },
    {
      name: "Museu valorant",
      photo: "https://cdn.discordapp.com/attachments/757683099437105278/1000884230638817290/unknown.png",
      description: `${t("DescricaoValorant")}`,
      link: "https://github.com/MarceloCChaves/Museu-Valorant"
    },
    {
      name: "Sports Online",
      photo: "https://cdn.discordapp.com/attachments/757683099437105278/1002733688544579746/unknown.png",
      description: `${t("DescricaoSports")}`,
      link: "https://github.com/MarceloCChaves/Sports-Online"
    },
    {
      name: "Pokedex",
      photo: "https://raw.githubusercontent.com/MarceloCChaves/Pokedex/master/assets/images/githubBackground.png",
      description: `${t("DescricaoPokedex")}`,
      link: "https://github.com/MarceloCChaves/Pokedex"
    },
    {
      name: "Estoque de produtos",
      photo: "https://cdn.discordapp.com/attachments/757683099437105278/1000886954507902986/unknown.png",
      description: `${t("DescricaoCrud")}`,
      link: "https://github.com/MarceloCChaves/Reactjs-Crud"
    },
    {
      name: "Stomp Academy",
      photo: "https://cdn.discordapp.com/attachments/757683099437105278/1000887638053617735/unknown.png",
      description: `${t("DescricaoStomp")}`,
      link: "https://github.com/MarceloCChaves/Stomp-Academy"
    }
  ]
  return (
    <main className="Projects">
      <h1>{t('Projetos')}</h1>
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
      <a href="https://github.com/MarceloCChaves/">{t('Repositorios')}</a>
    </main>
  )
}
