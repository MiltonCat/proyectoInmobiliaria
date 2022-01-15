import React from "react";
import "./card.css";

const Card = ({ src, title, description, price, href }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
        <a href={href}>Ver más</a>
      </div>
    </div>
  );
};

export default Card;
