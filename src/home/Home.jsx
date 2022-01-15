import React from "react";
import { Footer, Blog, Posibility, Features, NFT, Header } from "../containers";
import { CTA, Brand, Navbar } from "../components";
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      {/* <Brand /> */}
      <NFT />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
