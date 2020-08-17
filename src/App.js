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
  const [count, setCount] = useState(1);

  const fetchMovies = async (e, page) => {
    e.preventDefault();
    try {
      const movies = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&page=${page}`
      );
      const movieMatch = await movies.json();
      console.log(movieMatch);
      if (movieResult.length === 0) {
        setMovieResult(movieMatch.Search);
      } else {
        let movieResultCopy = [...movieResult];
        console.log("new results", movieMatch.Search);
        const updatedMovieResult = movieResultCopy.concat(movieMatch.Search);
        // console.log("updateResult", updateResult);
        setMovieResult(updatedMovieResult);
      }
      // setTitle("");
      let addCount = count + 1;
      setCount(addCount);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };
  console.log(movieResult);
  console.log("count", count);

  return (
    <div className="App">
      <Navbar
        setTitle={setTitle}
        title={title}
        fetchMovies={fetchMovies}
        count={count}
      />
      <Results movieResult={movieResult} />
      {movieResult.length >= 1 && (
        <LoadButton onClick={(e) => fetchMovies(e, count)}>
          Load More
        </LoadButton>
      )}
    </div>
  );
}

export default App;
