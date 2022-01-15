import React from "react";
// import possibilityImage from "../../assets/possibility.png";
import patagonia from "../../assets/foto.jpg";
import "./posibility.css";

const Posibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={patagonia} alt="Patagonia" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Encontrá tu hogar</h4>
      <h1 className="gradient__text">
      Las posibilidades son <br/>más allá de tu imaginación
      </h1>
      <p>
      Para poder llevar adelante la venta o compra de un inmueble contar con una inmobiliaria puede beneficiar la operación desde muchos aspectos: por el conocimiento, el personal capacitado, la agilización de la venta, los contactos, la seguridad y la confianza..
      </p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Posibility;
