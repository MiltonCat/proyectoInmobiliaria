import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./home/Home";
import Casa from "./pages/casa/Casa";
import Header from "./propiedades/header/Header";
import Guia from "./propiedades/guia/Guia";
import Blog01 from "./pages/productos/blog01/Blog01";
import Foto01 from "./pages/productos/blog01/Foto01";
import Blog02 from "./pages/productos/blog02/Blog02";
import Blog03 from "./pages/productos/blog03/Blog03";
import Blog04 from "./pages/productos/blog04/Blog04";
import Blog05 from "./pages/productos/blog05/Blog05";
import Blog06 from "./pages/productos/blog06/Blog06";
import Crypto from "./containers/features/crypto/Crypto";
import Slider from "./pages/productos/blog01/Slider";
import Slider2 from "./pages/productos/blog02/Slider2";
import Slider3 from "./pages/productos/blog03/Slider3";
import Slider4 from "./pages/productos/blog04/Slider4";
import Slider5 from "./pages/productos/blog05/Slider5";
import Slider6 from "./pages/productos/blog06/Slider6";

import "./App.css";

const App = () => (
  <React.Fragment>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Casa" element={<Casa />} />
        <Route path="/Guia" element={<Guia />} />
        <Route path="/Blog01" element={<Blog01 />} />
        <Route path="/Foto01" element={<Foto01 />} />
        <Route path="/Blog02" element={<Blog02 />} />
        <Route path="/Blog03" element={<Blog03 />} />
        <Route path="/Blog04" element={<Blog04 />} />
        <Route path="/Blog05" element={<Blog05 />} />
        <Route path="/Blog06" element={<Blog06 />} />
        <Route path="/Crypto" element={<Crypto />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/Slider2" element={<Slider2 />} />
        <Route path="/Slider3" element={<Slider3 />} />
        <Route path="/Slider4" element={<Slider4 />} />
        <Route path="/Slider5" element={<Slider5 />} />
        <Route path="/Slider6" element={<Slider6 />} />

      </Routes>
      </BrowserRouter>
    </div>
  </React.Fragment>
);

export default App;
