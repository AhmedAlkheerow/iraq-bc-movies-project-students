import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import { MovieContext } from "./StateProvider";
export default function MovieGrid(props) {
  const { movies,genreId } = useContext(MovieContext);

  return (
    <>
      <div className="row mt-3">
        {movies.filter((movie) => {
          return genreId===0 || movie.genre_ids.includes(genreId);
        }).map((movie) => (
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
