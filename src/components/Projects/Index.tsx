import "./Styles.scss";
import Card from "../Card/Index"
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      name: "React Shop",
      photo: "https://raw.githubusercontent.com/MarceloCChaves/React-Shop/refs/heads/master/src/assets/preview.png",
      description: `${t("DescricaoReactShop")}`,
      link: "https://github.com/MarceloCChaves/React-Shop"
    },
    {
      name: "Shoe Style Hub",
      photo: "https://raw.githubusercontent.com/MarceloCChaves/ShoeStyleHub/refs/heads/master/src/assets/readmeImage.png",
      description: `${t("DescricaoShoe")}`,
      link: "https://github.com/MarceloCChaves/ShoeStyleHub"
    },
    {
      name: "Capputeeno",
      photo: "https://raw.githubusercontent.com/MarceloCChaves/Capputeeno/refs/heads/master/Frontend/public/Menu.png",
      description: `${t("DescricaoCaputeeno")}`,
      link: "https://github.com/MarceloCChaves/Capputeeno"
    },
    {
      name: "Hacker News clone",
      photo: "https://user-images.githubusercontent.com/62251064/188039971-7903481f-d647-4502-8c9c-232b96fc2a81.png",
      description: `${t("DescricaoNews")}`,
      link: "https://github.com/MarceloCChaves/Hacker-News-clone"
    },
    {
      name: "Library Management",
      photo: "https://raw.githubusercontent.com/MarceloCChaves/Library-Management/refs/heads/master/src/assets/Homescreen.png",
      description: `${t("DescricaoLivraria")}`,
      link: "https://github.com/MarceloCChaves/Library-Management"
    },
    {
      name: "Jordan Shoes",
      photo: "https://raw.githubusercontent.com/MarceloCChaves/Jordan-Shoes/refs/heads/master/img/background.png",
      description: `${t("DescricaoJordan")}`,
      link: "https://github.com/MarceloCChaves/Jordan-Shoes"
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
