import React from "react";
import Banner from "../../propiedades/banner/Banner";
import Header from "../../propiedades/header/Header";
import Card from "../../propiedades/card/Card";

import { blog01, blog02, blog03, blog04, blog05, blog06 } from "./imports";
import "./casa.css";

const Casa = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__section">
        <Card
          src={blog01}
          a
          href="/Blog01"
          title="Casa en barrio Caleuche (SMA)"
          description="Hermosa casa en el bosque"
          price="Usd 120.000"
        />
        <Card
          src={blog02}
          a
          href="/Blog02"
          title="Cabaña en el centro de la ciudad (SMA)"
          description="A cuadras del centro de Sanma."
          price="Usd 185.000"
        />
        <Card
          src={blog03}
          a
          href="/Blog03"
          title="Depto. en el centro de la ciudad(SMA)"
          description="A cuadras del centro de Sanma."
          price="Usd 115.000"
        />
      </div>
      <div className="home__section">
        <Card
          src={blog04}
          a
          href="/Blog04"
          title="Hermoso depto. en el centro(SMA)"
          description="Excelente oportunidad de negocio."
          price="Usd 115.000"
        />
        <Card
          src={blog05}
          a
          href="/Blog05"
          title="Depto. en el centro de la ciudad(SMA)"
          description="Depto. de 3 habitaciones en el centro"
          price="Usd 185.000"
        />
        <Card
          src={blog06}
          a
          href="/Blog06"
          title="Cabaña cerca de la ciudad(SMA)"
          description="Cabaña en el centro de Sanma."
          price="Usd 100.000"
        />
      </div>
    </div>
  );
};

export default Casa;
