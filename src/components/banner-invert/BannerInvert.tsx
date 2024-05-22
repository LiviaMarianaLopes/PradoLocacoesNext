import "./styles.css";
import Image from "next/image";
import Link from "next/link";
const BannerInvert = (props: any) => {
  return (
    <div className="div-banner-invert">
      <div className={props.class}>
        <div className="content-banner">
          <h1 className="title">{props.title}</h1>
          {props.content}
        </div>
        <Image
          className="img-banner"
          src={props.src}
          width={800}
          height={100}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default BannerInvert;
