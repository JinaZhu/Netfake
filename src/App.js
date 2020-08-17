import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Results from "./Results";
import config from "./config";

import { LoadButton } from "./styled";

const apiKey = config.omdgAPIKey;

function App() {
  const [title, setTitle] = useState("");
  const [movieResult, setMovieResult] = useState([]);
  console.log("title", title);
  console.log("movieResult", movieResult);

  const fetchMovies = async (e, page = 1) => {
    e.preventDefault();
    try {
      const movies = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&page=${page}`
      );
      const movieMatch = await movies.json();
      setMovieResult(movieMatch.Search);
      setTitle("");
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  console.log(movieResult);

  return (
    <div className="App">
      <Navbar setTitle={setTitle} title={title} fetchMovies={fetchMovies} />
      <Results movieResult={movieResult} />
      {movieResult.length >= 1 && <LoadButton>Load More</LoadButton>}
    </div>
  );
}

export default App;
