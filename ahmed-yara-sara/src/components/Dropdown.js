import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import { MovieContext } from "./StateProvider";
export default function DropdownMenu() {
  const [Genres, setGenres] = useState([]);
  const {setGenreId } = useContext(MovieContext);

  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}`;
  };
  useEffect(() => {
    const URL = constructUrl("genre/movie/list");
    fetch(URL)
      .then((response) => response.json())
      .then((genreData) => {
        if (genreData.genres)
          setGenres([
            { id: 0, name: "All Trending Today" },
            ...genreData.genres,
          ]);
      });
  });
  const handleChange = (e) => {
    const parseId = parseInt(e.target.value);
    setGenreId(parseId);
    // const trendingURL = constructUrl("trending/all/day");
    // fetch(trendingURL)
    //   .then((response) => response.json())
    //   .then((genreData) => {
    //     if (parseId === 0) {
    //       setMovies(
    //         genreData.results.map((movie) => {
    //           return movie;
    //         })
    //       );
    //     } else {
    //       setMovies(
    //         genreData.results.filter((movie) => {
    //           return movie.genre_ids.includes(parseId);
    //         })
    //       );
    //     }
    //   });
  };

  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom" className="mr-2 mt-3">
          <Form.Control as="select" custom onChange={handleChange}>
            {Genres.map((genre) => {
              return (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}
