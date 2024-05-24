import Image from "next/image"
import "./styles.css";
const BannerCenter = (props: any)=>{
    return(
        <div className="div-banner-center">
            <h1>{props.title}</h1>
        <Image src= {props.src}
        width={1000} height={100} alt="equipe"></Image>
        </div>
    )
}
export default BannerCenter;

