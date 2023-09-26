import "./Styles.scss";
import { useTranslation } from "react-i18next";
import Technologies from "../Technologies/Index";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="About">
      <div className="info">
        <div className="header-content">
          <h1>{t("Sobre")}</h1>
          <hr />
          <p>{t("Descricao")}</p>
        </div>
        <Technologies />
      </div>
    </div>
  );
}
