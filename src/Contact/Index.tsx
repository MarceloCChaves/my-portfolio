import "./Styles.scss";

export default function Contact() {
  return (
    <main className="contact-container">
      <section className="contact-content">
        <h2>Entre em Contato</h2>
        <form
          action="https://formsubmit.co/Marcelochavesdev@gmail.com"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
          />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Nova mensagem!"/>

          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}
