import "./Styles.scss";
import Card from "../Card/Index"
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      name: "Hacker News clone",
      photo: "https://user-images.githubusercontent.com/62251064/188039971-7903481f-d647-4502-8c9c-232b96fc2a81.png",
      description: `${t("DescricaoAbbraza")}`,
      link: "https://github.com/MarceloCChaves/Hacker-News-clone"
    },
    {
      name: "Blog crud app",
      photo: "https://user-images.githubusercontent.com/62251064/244049506-6209b97c-0a65-4613-bc62-80269bd686a8.png",
      description: `${t("DescricaoValorant")}`,
      link: "https://github.com/MarceloCChaves/Blog-crud-app"
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
      name: "jordan Shoes",
      photo: "https://raw.githubusercontent.com/MarceloCChaves/Jordan-Shoes/master/img/background.png",
      description: `${t("DescricaoCrud")}`,
      link: "https://github.com/MarceloCChaves/Jordan-Shoes"
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
