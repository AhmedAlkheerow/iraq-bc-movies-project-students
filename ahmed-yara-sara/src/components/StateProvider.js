import React, { useState, createContext } from "react";

export const MovieContext = createContext();
const MovieContextProvider = (props) => {

  const [movies, setMovies] = useState([]);
  const [genreId, setGenreId] = useState(0);

  // const handleMoives = (movies)=>{
    
    
  //   if (genreId === 0) {
  //     setMovies(
  //       movies
  //     );
  //   } else {
  //     setMovies(
  //       movies.filter((movie) => {
  //         return movie.genre_ids.includes(genreId);
  //       })
  //     );
  //   }
  // }

  // const handleGenreId = function(genreId){  
      
  //   if (genreId === 0) {
  //     setMovies(
  //       [...moives]
  //     );
  //   } else {
  //     setMovies(
  //       moives.filter((movie) => {
  //         return movie.genre_ids.includes(genreId);
  //       })
  //     );
  //   }
  // }

  return (
    <MovieContext.Provider value={{ movies, setMovies,genreId, setGenreId }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
