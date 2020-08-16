import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Results from "./Results";
import config from "./config";

const apiKey = config.omdgAPIKey;

function App() {
  const [title, setTitle] = useState("");
  const [movieResult, setMovieResult] = useState([]);
  console.log("title", title);
  console.log("movieResult", movieResult);

  const fetchMovies = async (e) => {
    e.preventDefault();
    try {
      const movies = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
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
    </div>
  );
}

export default App;
