import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import { MovieContext } from "./StateProvider";
export default function MovieGrid(props) {
  const { movies } = useContext(MovieContext);

  return (
    <>
      <div className="row mt-3">
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            popularity={movie.popularity}
            release_date={movie.release_date}
            id={movie.id}
          />
        ))}
      </div>
    </>
  );
}
