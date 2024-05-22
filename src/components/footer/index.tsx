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
      <section>
        <p>
          A Prado Locações é especialista em locações de estruturas para Shows e
          Eventos. Faça um orçamento sem compromisso!
        </p>
      </section>
      <section className="socials">
        <a className="social-link" href="https://wa.me/5511974592264">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          className="social-link"
          href="https://www.facebook.com/pradoeventos/"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/pradolocacoes/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="social-link" href="mailto:prado.locacoes@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
