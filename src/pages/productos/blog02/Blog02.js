import "../blog02/Blog02.css";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { ExpandMore, Language } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Imagen from "../../../assets/avatar.jpg";
import Imagen1 from "../../../assets/Milton.jpeg";
import Search from "../../../propiedades/search/Search";
import "../../../propiedades/banner/banner.css";
import Foto1 from "../../../assets/Cabaña/foto3.jpg";
import Foto2 from "../../../assets/Cabaña/foto10.jpg";
import Foto3 from "../../../assets/Cabaña/foto13.jpg";
import Foto4 from "../../../assets/Cabaña/foto14.jpg";
import { AiOutlineHome } from "react-icons/ai";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import KingBedIcon from '@material-ui/icons/KingBed';
import Slider2 from "./Slider2";

const Blog01 = () => {
  const [showSerach, setShowSerach] = useState(false);
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <div className={header ? "header active" : "header"}>
        <Link to="/casa">
          <div className="header__icon">CATALAN PROPIEDADES</div>
        </Link>
        <div className="banner__search">
          <Button
            className="banner__searchButton"
            variant="outlined"
            onClick={() => setShowSerach((prev) => !prev)}
          >
            {showSerach ? "Ocultar" : "Contacta a un asesor"}
            <div className="banner__searchIcon">
              <SearchIcon />
            </div>
          </Button>
          {showSerach && <Search />}
        </div>
        <div className="header__right">
          <p>Patagonia Argentina</p>
          <Language />
          <ExpandMore />
          <Avatar src={Imagen} />
        </div>
      </div>
      <div className="container-desc">
        <div className="titulo">
          <h1>Cabaña en el centro de la ciudad</h1>
          <a href="Ubicacion">
            <a href="/ubicacion">
              <span>San Martin de los Andes, Neuquén, Argentina</span>
            </a>
          </a>
        </div>
        <main>
          <section id="galeria">
            <div className="grid-text listings__image-superhost">
              <a href="/Slider2">
                <img src={Foto1} alt="foto1" />
              </a>
            </div>
            <div className="listings__image">
              <a href="/Slider2">
                <img src={Foto2} />
              </a>
            </div>
            <div class="listings__image">
              <a href="/Slider2">
                <img src={Foto3} />
              </a>
            </div>
            <div class="listings__image ">
              <a href="/Slider2">
                <img src={Foto4} />
              </a>
            </div>
          </section>
        </main>
        <div className="container-log">
          <div className="imgBc">
            <div className="detailBc">
              <h2 tabindex="-1" className="tit-1">
                Hermosa cabaña en el centro</h2>
              <div className="avatar">
                <Avatar src={Imagen1} />
              </div>
              <hr/>
              <p>La propiedad esta en el centro de la ciudad, en una zona
                tranquila y segura, con una vista privilegiada a la ciudad de
                San Martin de los andes, la cual esta a cuatro cuadras de la Avenida principal, una cabaña con 2 habitaciones y 2 baños.
              </p>
              <br />
              <div className="homeicon">
              <HomeIcon/>
              <span>Calle Misionero Macardi  | Centro de San Martin de los andes</span>
              <br/><br/>
              <LocationOnIcon/>
              <span>100% de los clientes que lo vieron les gusto</span>
              <br/><br/>
              <ExploreIcon/>
              <span>Rodeado de bosques y a cuadras de Avenida principal</span>
              <br/><br/>
              <DirectionsTransitIcon/>
              <span>Locomocion Urbana y cerca de todos los lugares principales</span>
              <br/><br/>
              <KingBedIcon/>
              <span>2 habitaciones amplias </span>
              </div>
              <br />
            </div>
          </div>
          <div className="details-Bv">
            <div className="contentBv">
              <h4>Hermosa cabaña en el centro</h4>
              <p>$185.000/USD</p>
              <div className="rectangulo">
                <p>Terreno de 600m2 | Centro de la ciudad</p>
                <p>Construccion de piedra y madera | 2 habitaciones</p>
                <p> cocina | 2 baño | living-comedor</p>
              </div>
              <div className="contacto">
              <a href="mailto:catalanmilton826@gmail.com">Consultá disponibilidad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog01;

