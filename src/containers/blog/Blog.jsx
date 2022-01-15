import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        Experiencias en la Patagonia, <br /> Mirá todo lo que podes hacer.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Playas Únicas"
          text="Recorre playas únicas, es una experiencia inolvidable."
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Mountain Bike"
          text="Recorre las montañas con una mountain bike. Con guias expertos."
        />
        <Article
          imgUrl={blog03}
          date="Ruta 7 lagos"
          text="Excelentes lugares para acampar"
        />
        <Article
          imgUrl={blog04}
          date="Excelentes rios"
          text="Los mejores rapidos para hacer rafting"
        />
        <Article
          imgUrl={blog05}
          date="Lugares para descansar"
          text="En plena Patagonia, encuentra lugares para descansar"
        />
      </div>
    </div>
  </div>
);

export default Blog;
