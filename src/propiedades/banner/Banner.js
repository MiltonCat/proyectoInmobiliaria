import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Search from "../search/Search";
import "./banner.css";

const Banner = () => {
  const [showSerach, setShowSerach] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSerach((prev) => !prev)}
        >
          {showSerach ? "Ocultar" : "Contacta a un asesor."}
        </Button>
        {showSerach && <Search />}
      </div>
    </div>
  );
};

export default Banner;
