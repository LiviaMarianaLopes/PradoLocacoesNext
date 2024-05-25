import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faVoicemail } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer>
      <section className="footer-text info">
        <p >
          Deixe a Prado Locações cuidar dos detalhes, enquanto você se concentra
          no sucesso do seu evento. Entre em contato conosco hoje mesmo e
          descubra como podemos ajudar a tornar seu evento inesquecível!
        </p>
      </section>
      <section className="socials">
        <a className="social-link whats" href="https://wa.me/5511974592264">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          className="social-link face"
          href="https://www.facebook.com/pradoeventos/"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          className="social-link insta"
          href="https://www.instagram.com/pradolocacoes/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="social-link email" href="mailto:prado.locacoes@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </section>
      <section className="footer-text">
        <p>Whatssap: (11)97459-2264</p>
        <p>Email: prado.locacoes@gmail.com</p>
      </section>
      
    </footer>
  );
};

export default Footer;
