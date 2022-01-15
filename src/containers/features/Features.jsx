import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "¿Te gustaria ser dueño de algo unico?",
    text: "Un Token no Fungible (NFT) es un activo digital almacenado en tecnología blockchain. Son piezas únicas y poseen un certificado de autenticidad para ser coleccionado o comercializado.",
  },
  {
    title: "¿Que son las criptomonedas?",
    text: "Las criptomonedas es dinero digital diseñado para permitir a los usuarios enviar pagos en línea rápidamente a cualquier lugar del mundo sin tener que pasar por un banco y sin supervisión de ningún gobierno.",
  },
  {
    title: "Para que sirven los Tokens",
    text: " un 'token' puede servir para otorgar un derecho, para pagar por un trabajo o por ceder unos datos, como incentivo, como puerta de entrada a unos servicios extra o a una mejor experiencia de usuario.",
  },
  {
    title: "Blockchain, por que es importante?",
    text: "El blockchain, o cadena de bloques en español, se define como una cadena que se está actualizando constantemente, y contiene información de todas las transacciones previas. ",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        El futuro es ahora y solo necesitas darte cuenta. Entra en el futuro
        hoy y haz que suceda.
      </h1>
      <a href="/Crypto">
        <p>Clickea aca!! para saber el valor de las Criptos!!</p>
      </a>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
