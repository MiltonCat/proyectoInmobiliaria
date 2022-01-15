import React from "react";
import  "./search.css";
import Avatar from '@material-ui/core/Avatar';
import Milton from "../../assets/Milton.jpeg";

const Search = () => {
  return (
    <div className="search">
      <h2>Milton Catalan
      </h2>
      <div className="avatar">
      <Avatar alt="Milton Catalán" src={Milton} />
      </div>
      <a href="mailto:catalanmilton826@gmail.com">Contactanos
      </a>
    </div>
  );
};

export default Search;
