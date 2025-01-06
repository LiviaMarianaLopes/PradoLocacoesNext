import Link from "next/link";
import "./styles.css";
import Image from "next/image";
import { Router } from "next/router";
const Nav = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link href="" className="neon-effect-green">
            {" "}
            Contato
          </Link>{" "}
        </li>
        <li>
          <Link href="" className="neon-effect">
            Eventos
          </Link>
        </li>
      </ul>
      <Link href="/">
        <Image
          src={"/logo.jpeg"}
          width={450}
          height={100}
          alt="logo"
          className="cursor-pointer" // Classe para indicar interatividade
       />
       </Link>
              <ul>
        <li>
          <Link href="/produtos" className="neon-effect-blue produtos-link">
            Produtos
          </Link>
        </li>
        <li>
          <Link href="" className="neon-effect neon-effect-orange">
            Sobre
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
