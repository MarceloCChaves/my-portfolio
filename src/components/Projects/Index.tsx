import "./Styles.scss";
import Card from "../Card/Index"
import { useTranslation } from "react-i18next";
import backgroundCapputeeno from "../../assets/background-capputeeno.png";
import backgroundHacker from "../../assets/background-hacker.png";
import backgroundJordan from "../../assets/background-jordan.png";
import backgroundLibrary from "../../assets/background-library.png";
import backgroundShoes from "../../assets/background-shoes.png";
import backgroundShop from "../../assets/background-shop.png";

export default function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      name: "React Shop",
      photo: backgroundShop,
      description: `${t("DescricaoReactShop")}`,
      link: "https://github.com/MarceloCChaves/React-Shop"
    },
    {
      name: "Shoe Style Hub",
      photo: backgroundShoes,
      description: `${t("DescricaoShoe")}`,
      link: "https://github.com/MarceloCChaves/ShoeStyleHub"
    },
    {
      name: "Capputeeno",
      photo: backgroundCapputeeno,
      description: `${t("DescricaoCaputeeno")}`,
      link: "https://github.com/MarceloCChaves/Capputeeno"
    },
    {
      name: "Hacker News clone",
      photo: backgroundHacker,
      description: `${t("DescricaoNews")}`,
      link: "https://github.com/MarceloCChaves/Hacker-News-clone"
    },
    {
      name: "Library Management",
      photo: backgroundLibrary,
      description: `${t("DescricaoLivraria")}`,
      link: "https://github.com/MarceloCChaves/Library-Management"
    },
    {
      name: "Jordan Shoes",
      photo: backgroundJordan,
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
