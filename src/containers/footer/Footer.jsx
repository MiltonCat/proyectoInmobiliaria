import React from "react";
import Milton from "../../assets/Milton.jpeg";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">¿Quieres vivir en la Patagonia?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="mailto:catalanmilton826@gmail.com" className="btn btn-primary">
        <button>Nosotros te asesoramos</button>
      </a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={Milton} alt="gpt3_logo" /> */}
        <p>
          CATALAN PROPIEDADES <br /> Patagonia Argentina.
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Instagram</p>
        <p>Facbook</p>
        <p>GitHub</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Compañia</h4>
        <p>Terminos & Condiciones </p>
        <p>Politica de Privacidad</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Como ubicarnos</h4>
        <p>Avenida San Martin 946 piso 2</p>
        <p>2071-4127127</p>
        <p>catalanmilton826@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Milton Catalan dev, Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;
