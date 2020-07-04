import React, { useState, createContext } from "react";

export const MovieContext = createContext();
const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState(["hi"]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
