'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import Image from 'next/image';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./styles.css"
const ProductCard = (props:any) => {

  return (
    <div className="product-card">
      <div className="text-product">
      <h3>{props.name}</h3>
      </div>

      <div className="image-container">
        <Image src={props.image} alt={props.name} width={300}
         height={200}
          />
      </div>
      {props.observation && <p>{props.observation}</p>}
      <a className="social-link-product whats" href="https://wa.me/5511974592264">
      <button className="whatsapp-button">
      <FontAwesomeIcon icon={faWhatsapp} />
      &nbsp;Faça seu orçamento
      </button>
      </a>
    </div>
  );
};

export default ProductCard;
