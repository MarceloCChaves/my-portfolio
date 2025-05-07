import "./Styles.scss";
import eumostro from "../../assets/eumostro.jpg";
import Mentorise from "../../assets/mentorise.jpg";
import Chaves from "../../assets/chaves.png";
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
            <img src={Mentorise} alt="Mentorise" />
            <div className="job">
              <h1>Mentorise</h1>
              <p>{t("tempoIntegral")}</p>
              <p>
                {t("Setembro")} 2022 - {t('dezembro')} - 2023
              </p>
            </div>
          </div>
          <div className="description">
            <p>{t('descricaoEmpregoMentorise')}</p>
          </div>
        </div>
        <div className="box">
          <div className="principal">
            <img src={Chaves} alt="Chaves Imoveis" />
            <div className="job">
              <h1>Chaves Calandrini Imóveis</h1>
              <p>{t("tempoIntegral")}</p>
              <p>
                {t("Setembro")} 2024 - {t('atualmente')}
              </p>
            </div>
          </div>
          <div className="description">
            <p>{t('descricaoEmpregoChaves')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
