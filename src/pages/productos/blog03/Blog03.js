import "../blog03/Blog03.css";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { ExpandMore, Language } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Imagen from "../../../assets/avatar.jpg";
import Imagen1 from "../../../assets/Milton.jpeg";
import Search from "../../../propiedades/search/Search";
import "../../../propiedades/banner/banner.css";
import Foto1 from "../../../assets/Curruhue/foto2.jpg";
import Foto2 from "../../../assets/Curruhue/foto3.jpg";
import Foto3 from "../../../assets/Curruhue/foto6.jpg";
import Foto4 from "../../../assets/Curruhue/foto13.jpg";
import { AiOutlineHome } from "react-icons/ai";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExploreIcon from '@material-ui/icons/Explore';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import KingBedIcon from '@material-ui/icons/KingBed';
import Slider3 from "./Slider3";

const Blog03 = () => {
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
          <h1>Departamento a estrenar</h1>
          <a href="Ubicacion">
            <a href="/ubicacion">
              <span>San Martin de los Andes, Neuquén, Argentina</span>
            </a>
          </a>
        </div>
        <main>
          <section id="galeria">
            <div className="grid-text listings__image-superhost">
              <a href="/Slider3">
                <img src={Foto1} alt="foto1" />
              </a>
            </div>
            <div className="listings__image">
              <a href="/Slider3">
                <img src={Foto2} />
              </a>
            </div>
            <div class="listings__image">
              <a href="/Slider3">
                <img src={Foto3} />
              </a>
            </div>
            <div class="listings__image ">
              <a href="/Slider3">
                <img src={Foto4} />
              </a>
            </div>
          </section>
        </main>
        <div className="container-log">
          <div className="imgBc">
            <div className="detailBc">
              <h2 tabindex="-1" className="tit-1">
                Hermoso Departamento en el centro</h2>
              <div className="avatar">
                <Avatar src={Imagen1} />
              </div>
              <hr/>
              <p>Este departamento esta en el centro de la ciudad, y cuenta con una amplia zona de comercio, una amplia zona de recreación y una amplia zona de servicios.</p>
              <br />
              <div className="homeicon">
              <HomeIcon/>
              <span>Calle Belgrano al 750 | Centro de la ciudad</span>
              <br/><br/>
              <LocationOnIcon/>
              <span>100% de los clientes que lo vieron les gusto</span>
              <br/><br/>
              <ExploreIcon/>
              <span>Excelente oportunidad de inversion</span>
              <br/><br/>
              <DirectionsTransitIcon/>
              <span>Ubicacion excelente para invertir</span>
              <br/><br/>
              <KingBedIcon/>
              <span>1 habitacion amplias </span>
              </div>
              <br />
            </div>
          </div>
          <div className="details-Bv">
            <div className="contentBv">
              <h4>Departamento centrico</h4>
              <p>$110.000/USD</p>
              <div className="rectangulo">
                <p> 45 mt2 | Centro de la ciudad</p>
                <p>Excelente oportunidad| 1 habitaciones</p>
                <p> cocina-comedor | 1 baño | 1 Habitacion</p>
              </div>
              <div className="contacto">
              <a href="mailto:catalanmilton826@gmail.com">Consulá disponibilidad</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog03;

