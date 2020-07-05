import React, { useEffect } from "react";
import MovieGrid from "./MovieGrid";
function Main(props) {
  // this is for the query
  // console.log(props);
  
  return (
    <>
      <MovieGrid movies={props.movies} />
    </>
  );
}

export default Main;
