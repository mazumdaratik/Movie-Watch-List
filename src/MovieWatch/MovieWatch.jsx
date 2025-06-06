import { useState, useEffect } from "react";
import Heading from "./Heading";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import Filter from "./Filter";

export default function MovieWatch() {

  const [movies, setMovies] = useState(() => {
    const stored = localStorage.getItem("movies");   //  Load from localStorage during initial state setup
    return stored ? JSON.parse(stored) : [];
  });

  const [filter, setFilter] = useState("all")

 
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);



  const addMovie = ({ title, ott }) => {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };

    setMovies([...movies, newMovie]);
  };

  const rateMovie = (id, rating) => {
    setMovies(
      movies.map((movie) => (movie.id === id ? { ...movie, rating } : movie))
    );
  };

  const toggledWatch = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const filteredMovies = movies.filter(movie => {
    if (filter === "watched") return movie.watched;
    if (filter === "unwatched") return !movie.watched;
    return true;
  });

  return (
    <div className="flex flex-col w-1/2 m-3 justify-center p-6 bg-slate-900  text-white rounded-lg shadow-lg">
      <Heading />
      <MovieForm addMovie={addMovie} />
      <Filter setFilter={setFilter} />
      <MovieList
        movies={filteredMovies}
        rateMovie={rateMovie}
        toggledWatch={toggledWatch}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}
