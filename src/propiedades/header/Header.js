import { Avatar } from "@material-ui/core";
import { ExpandMore, Language } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Imagen from "../../assets/avatar.jpg";
import "./header.css";
import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Search from "../search/Search";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
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
    <div className={header ? "header active" : "header"}>
      <Link to="/">
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
  );
};

export default Header;
