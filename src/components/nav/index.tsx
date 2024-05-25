import Link from "next/link";
import "./styles.css";
import Image from "next/image";
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
      <Image src={"/logo.jpeg"} width={200} height={100} alt="logo" />
      {/* <h1>Prado Locações</h1> */}
      <ul>
        <li>
          <Link href="" className="neon-effect-blue">
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
