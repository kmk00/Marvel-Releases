import React from "react";

function Movie(props) {
  let heroList = props.heroes.map(function (hero) {
    if (hero === props.heroes[props.heroes.length - 1]) return ` ${hero}`;
    return ` ${hero} •`;
  });

  return (
    <div className="container">
      <div className="left">
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <h4>{props.date}</h4>
      </div>
      <p className="heroes-info">{heroList}</p>
    </div>
  );
}

export default Movie;
