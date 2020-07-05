import React, { useState, createContext,useReducer } from "react";

export const MovieContext = createContext();
const MovieContextProvider = (props) => {

  // const [movies, setMovies] = useState([]);
  // const [genreId, setGenreId] = useState(0);

  const [state, dispatch] = useReducer(reducer, initState);



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
    <MovieContext.Provider value={{ state,dispatch}}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;




const initState= {movies: [],genreId:0};



function reducer(state, action) {
  switch (action.type) {
    case 'setMovies':
      return {...state,movies:action.payload };
    case 'setGenreId':
      // for instant reload we will use this
      // return {...state,genreId:action.payload} 
      state.genreId= action.payload;
      return state
    default:
      throw new Error();
  }
}
