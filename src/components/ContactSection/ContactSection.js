import "./ContactSection.scss";
import linkedin from "../../assets/images/linkedin.png";
import email from "../../assets/images/email.png";
import github from "../../assets/images/github.png";

export default function ContactSection() {
  return (
    <section id="contact"
    className="contact">
      <div className="contact__wrap">
        <article className="contact__article">
          <h2 className="contact__title">Contact</h2>

          <p className="contact__text">
            {" "}
            Curious about my professional journey and projects?{" "}
          </p>
          <p className="contact__text">
            Feel free to reach out – I'd love to connect!
          </p>

          <div className="icons">

          <a
            href="https://www.linkedin.com/in/anoushkapatel14/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contact__icon" src={linkedin} alt="LinkedIn icon" />
          </a>

          <a href="mailto:anoushkapatel14@gmail.com">
            <img className="contact__img" src={email} alt="Email icon" />
          </a>

          <a
            href="https://github.com/anoushkapatel14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="contact__icon" src={github} alt="GitHub icon" />
          </a>


          </div>

        </article>
      </div>
    </section>
  );
}
