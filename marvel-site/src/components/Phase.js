import React from "react";

import Movie from "./Movie";
import moviesData from "../data";

function Phase(props) {
  const movies = moviesData.map((movie) => {
    if (props.phase === movie.phase)
      return (
        <Movie
          key={movie.title}
          title={movie.title}
          date={movie.date}
          img={movie.img}
          heroes={movie.heroes}
        />
      );
    else return undefined;
  });

  const phaseNum = `PHASE ${props.phase}`;

  return (
    <section id={props.phase}>
      <h2 className="sticky">{phaseNum}</h2>
      {movies}
    </section>
  );
}

export default Phase;
