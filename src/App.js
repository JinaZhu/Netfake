import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [title, setTitle] = useState("");
  const [movieResult, setMovieResult] = useState([]);
  console.log("title", title);
  console.log("movieResult", movieResult);

  const fetchMovies = async (e) => {
    e.preventDefault();
    try {
      const movies = await fetch(
        `http://www.omdbapi.com/?apikey=1e9a13fb&s=${title}`
      );
      const movieMatch = await movies.json();
      setMovieResult(movieMatch);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="App">
      <Navbar setTitle={setTitle} title={title} fetchMovies={fetchMovies} />
    </div>
  );
}

export default App;
