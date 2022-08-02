import "./Styles.scss";
import eumostro from "../../assets/eumostro.jpg";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();
  return (
    <main className="Experiences">
      <h1>{t("Experiencias")}</h1>
      <hr />
      <div className="box">
        <div className="principal">
          <img src={eumostro} alt="Marcelo" />
          <div className="job">
            <h1>eumostro</h1>
            <p>{t("Estagio")}</p>
            <p>{t("Maio")} 2021 - {t("Maio")} 2022</p>
          </div>
        </div>
        <div className="description">
          <p>
            {t('DescricaoEmprego')}
          </p>
        </div>
      </div>
    </main>
  );
}
