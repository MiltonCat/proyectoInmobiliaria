import "../blog01/Blog01.css";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { ExpandMore, Language } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Imagen from "../../../assets/avatar.jpg";
import Imagen1 from "../../../assets/Milton.jpeg";
import Search from "../../../propiedades/search/Search";
import "../../../propiedades/banner/banner.css";
import Foto1 from "../../../assets/Caleuche/foto1.jpeg";
import Foto2 from "../../../assets/Caleuche/foto5.jpeg";
import Foto3 from "../../../assets/Caleuche/foto8.jpeg";
import Foto4 from "../../../assets/Caleuche/foto4.jpeg";
import { AiOutlineHome } from "react-icons/ai";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import KingBedIcon from '@material-ui/icons/KingBed';
import Slider from "../blog01/Slider";

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
          <h1>Hermosa Casa en bosque nativo</h1>
          <a href="Ubicacion">
            <a href="/ubicacion">
              <span>San Martin de los Andes, Neuquén, Argentina</span>
            </a>
          </a>
        </div>
        <main>
          <section id="galeria">
            <div className="grid-text listings__image-superhost">
              <a href="/Slider">
                <img src={Foto1} alt="foto1" />
              </a>
            </div>
            <div className="listings__image">
              <a href="/Slider">
                <img src={Foto2} />
              </a>
            </div>
            <div class="listings__image">
              <a href="/Slider">
                <img src={Foto3} />
              </a>
            </div>
            <div class="listings__image ">
              <a href="/Slider">
                <img src={Foto4} />
              </a>
            </div>
          </section>
        </main>
        <div className="container-log">
          <div className="imgBc">
            <div className="detailBc">
              <h2 tabindex="-1" className="tit-1">
                Hermosa Casa en el bosque</h2>
              <div className="avatar">
                <Avatar src={Imagen1} />
              </div>
              <hr/>
              <p>La propiedad esta ubicada en el barrio Caleuche, en un hermoso sector de bosque, esta propiedad cuenta con gas natural, esta en una zona de bosque la cual esta ubicado a 8 KM de la ciudad de San martin de los andes.
                Zona muy tranquila y silenciosa, con un patio verde con cesped y una vista soñada.
              </p>
              <br />
              <div className="homeicon">
              <HomeIcon/>
              <span>Calle Paseo de los musicos 655 | Barrio Caleuche</span>
              <br/><br/>
              <LocationOnIcon/>
              <span>100% de los clientes que lo vieron les gusto</span>
              <br/><br/>
              <ExploreIcon/>
              <span>Rodeado de bosques y cerca de la Laguna Rosales</span>
              <br/><br/>
              <DirectionsTransitIcon/>
              <span>8 KM de la ciudad de San martin de los andes, Con locomocion publica</span>
              <br/><br/>
              <KingBedIcon/>
              <span>3 habitaciones amplias </span>
              </div>
              <br />
            </div>
          </div>
          <div className="details-Bv">
            <div className="contentBv">
              <h4>Hermosa casa en el bosque</h4>
              <p>$120.000/USD</p>
              <div className="rectangulo">
                <p>Terreno de 600m2 | A 8 Km de la ciudad</p>
                <p>Construccion de 100m2 | 3 habitaciones</p>
                <p> cocina | 1 baño | living-comedor</p>
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
