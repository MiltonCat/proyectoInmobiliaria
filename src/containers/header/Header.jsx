import React from "react";
import people from "../../assets/people.png";
import Foto from "../../assets/juan.jpg";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
       La Patagonia, la naturaleza, la vida
      </h1>
      <p>
        El destino de uno nunca es un lugar, sino una nueva forma de ver las cosas.
      </p>

      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button> */}
        <a href="mailto:catalanmilton826@gmail.com" className="btn btn-primary">
          <button>¿Tenés dudas?</button>
        </a>

      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Cada vez mas Argentinos nos consultan, te toca a vos.</p>
      </div>
    </div>

    <div className="gpt3__header-image"><img src={Foto} /></div>
  </div>
);

export default Header;
