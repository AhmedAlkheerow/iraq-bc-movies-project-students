import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import { MovieContext } from "./StateProvider";
export default function MovieGrid(props) {
  // const { movies,genreId } = useContext(MovieContext);
  const { state} = useContext(MovieContext);

  return (
    <>
      <div className="row mt-3">
        {state.movies.filter((movie) => {
          return state.genreId===0 || movie.genre_ids.includes(state.genreId);
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
