import "./Styles.scss";
import { useTranslation } from "react-i18next";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <div className="programing">
        <DotLottieReact
          src="https://lottie.host/e5e904c2-d1aa-4a39-b538-a516265c1ac8/epuQaLDkuV.lottie"
          loop
          autoplay
        />
      </div>
      <div className="header-content">
        <h1>{t("Sobre")}</h1>
        <hr />
        <p>{t("Descricao")}</p>
      </div>
    </div>
  );
}
