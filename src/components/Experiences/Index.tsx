import "./Styles.scss";
import eumostro from "../../assets/eumostro.jpg";
import Mentorise from "../../assets/mentorise.jpg";
import Stomp from "../../assets/stomp.webp";
import { useTranslation } from "react-i18next";

export default function Experiences() {
  const { t } = useTranslation();
  return (
    <main className="Experiences">
      <h1>{t("Experiencias")}</h1>
      <hr />
      <div className="boxes">
        <div className="box">
          <div className="principal">
            <img src={eumostro} alt="eumostro" />
            <div className="job">
              <h1>eumostro</h1>
              <p>{t("Estagio")}</p>
              <p>
                {t("Maio")} 2021 - {t("Maio")} 2022
              </p>
            </div>
          </div>
          <div className="description">
            <p>{t("DescricaoEmprego")}</p>
          </div>
        </div>
        <div className="box">
          <div className="principal">
            <img src={Stomp} alt="Mentorise" />
            <div className="job">
              <h1>Stomp Academmy</h1>
              <p>{t("freelancer")}</p>
              <p>
                {t("Abril")} 2022 - {t('Maio')} 2022 
              </p>
            </div>
          </div>
          <div className="description">
            <p>{t('descricaoEmpregoStomp')}</p>
          </div>
        </div>
        <div className="box">
          <div className="principal">
            <img src={Mentorise} alt="Mentorise" />
            <div className="job">
              <h1>Mentorise</h1>
              <p>{t("tempoIntegral")}</p>
              <p>
                {t("Setembro")} 2022 - {t('atualmente')}
              </p>
            </div>
          </div>
          <div className="description">
            <p>{t('descricaoEmpregoMentorise')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
