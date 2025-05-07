import "./Styles.scss";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main className="contact-container">
      <section className="contact-content">
        <h2>{t("contact.title")}</h2>
        <form
          action="https://formsubmit.co/seuemail@dominio.com"
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
          <input type="hidden" name="_next" value="https://seusite.com/obrigado" />

          <button type="submit">{t("contact.button")}</button>
        </form>
      </section>
    </main>
  );
}
