import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllMovies } from '../../services/movies';
import MovieItem from "./MovieItem";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then(movies => {
        setMovies(movies);
      })
      .catch(err => {
        toast('Could not load movies.', {
          position: 'bottom-right'
        })
      })
  }, [])
  return (
    <React.Fragment>
      <h2 className="text-center section-title">All Movies </h2>
      <section className="movies-container">
        {movies.map(movie => <MovieItem movieInfo={movie} key={movie._id} />)}
      </section>

    </React.Fragment>
  );
};

export default Movies;
