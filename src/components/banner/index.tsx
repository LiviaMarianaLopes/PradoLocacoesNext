import "./styles.css";
import Image from "next/image";
import Link from "next/link";
const Banner = (props: any) => {
  return (
    <div className="div-banner">
      <div className={props.class}>
        <Image
          className="img-banner"
          src={props.src}
          width={800}
          height={100}
          alt="logo"
        />

        <div className="content-banner">
          <h1 className="title">{props.title}</h1>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Banner;
