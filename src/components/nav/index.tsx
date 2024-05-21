import Link from "next/link";
import "./styles.css";
import Image from "next/image";
const Nav = ()=>{
    return(
        
        <div className="container">
               <ul>
                <li className="neon-effect-green">
                    <Link href='' > Contato</Link> </li>
                <li className="neon-effect">
                <Link href='' >Eventos</Link>
                </li>
               
                
            </ul>
            <Image src={"/logo.jpeg"} width={200} height={100} alt="logo"/>
            {/* <h1>Prado Locações</h1> */}
            <ul>
                <li className="neon-effect-blue">
                <Link href='' >Produtos</Link></li>
                <li className="neon-effect neon-effect-orange">
                <Link href='' >Sobre</Link></li>
            </ul>
        </div>
        
    );
}
export default Nav