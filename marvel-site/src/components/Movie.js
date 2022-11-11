import React from "react";
import ironman from "./ironman.jpg";

function Movie(props) {
  let heroList = props.heroes.map(function (hero) {
    if (hero === props.heroes[props.heroes.length - 1]) return ` ${hero}`;
    return ` ${hero} •`;
  });

  return (
    <div className="container">
      <div className="left">
        <img src={ironman} alt="" />
        <h3>{props.title}</h3>
        <h4>{props.date}</h4>
      </div>
      <p className="heroes-info">{heroList}</p>
    </div>
  );
}

export default Movie;
