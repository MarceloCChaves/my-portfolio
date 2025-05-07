import "./Styles.scss";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main className="contact-container">
      <section className="contact-content">
        <h2>{t("contact.title")}</h2>
        <form
          action="https://formsubmit.co/Marcelochavesdev@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact.namePlaceholder")}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.emailPlaceholder")}
            required
          />
          <textarea
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            required
          />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <button type="submit">{t("contact.button")}</button>
        </form>
      </section>

      <section className="contact-content">
        <h2>{t("contact.infoTitle")}</h2>
        <div className="contact-info">
          <p><FaEnvelope /> marcelochavesdev@gmail.com</p>
          <p><FaPhoneAlt /> (91) 99272-7732</p>
          <p><FaMapMarkerAlt /> Belém - PA</p>
          <p>
            <FaLinkedin />{" "}
            <a href="https://www.linkedin.com/in/marcelocchaves/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/marcelocchaves
            </a>
          </p>
          <p>
            <FaGithub />{" "}
            <a href="https://github.com/MarceloCChaves" target="_blank" rel="noopener noreferrer">
              github.com/MarceloCChaves
            </a>
          </p>
        </div>
        <div className="whatsapp-btn">
          <a href="https://api.whatsapp.com/send?phone=+5591992727732&text=Olá! Vi seu portfólio na internet, achei seu trabalho interessante, poderiamos conversar?." target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            Entrar em contato
          </a>
        </div>
      </section>
    </main>
  );
}
