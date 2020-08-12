import React from "react";
import { MovieCover, Gallery } from "./styled";

const Results = ({ movieResult }) => {
  return (
    <Gallery>
      {movieResult.map((movie, index) => {
        return <MovieCover key={index} src={movie.Poster} alt="movie poster" />;
      })}
    </Gallery>
  );
};

export default Results;
