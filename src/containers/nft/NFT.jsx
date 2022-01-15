import React from "react";
import Feature from "../../components/feature/Feature";
import "./nft.css";

const NFT = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="Vivir en la Patagonia"
        text="Vivir en San Martin de los Andes puede dejar de ser un sueño si sigues el camino correcto para alcanzarlo. Comprá tu Propiedad(Casa, Terreno, Departamento, Lote), y disfrutá de una vida de alta calidad.Rodeado de  Montañas y la naturaleza, infitas experiencias al aire libre. Playas, Centro de esquí, trekking, pesca, etc. "
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
      Las posibilidades están más allá de tu imaginación
      </h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Ventas"
        text="Comprar una propiedad implica un gran esfuerzo y es un paso muy importante en la vida de las personas, por eso, acá te  ayudamos con toda nuestra experiencia para que la operación sea todo un éxito. "
      />
      <Feature
        title="Administración"
        text="Externalizar la administración de las propiedades tiene diversos beneficios. Permite a los inversionistas tener más tiempo libre para que puedan dedicarse a otras cosas y tiene una gran capacidad de resolución de problemas con los arrendatarios en caso de que los haya."
      />
      <Feature
        title="Alquileres"
        text="Antes de comenzar con la búsqueda de tu próximo hogar es importante que tengas en cuenta la documentación necesaria, los pasos a seguir y las consideraciones generales del contrato de alquiler. "
      />
    </div>
  </div>
);

export default NFT;
