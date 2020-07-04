import React, { useState, useEffect } from "react";
import Card, { CardBody } from "react-bootstrap/Card";
import Search from "./Search";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "./Image";
import MovieDetails from "./MovieDetails";
import { useHistory } from "react-router";
import Production from "./Production";
export default function Actors(props) {
  const history = useHistory();

  const person_id = props.match.params.actor_id;
  const [actor, setActor] = useState("");
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  useEffect(async () => {
    URL = constructUrl(`person/${person_id}`);
    let res = await fetch(URL);
    let data = await res.json();
    setActor(data);
    console.log(data);
  }, [person_id]);

  console.log(actor);
  let image = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={image} width="100%" />
        </div>
        <div className="col-8">
          <div>
            <strong> {actor.name}</strong>
          </div>
          <div>
            <strong> {actor.birthday}</strong>
          </div>
          <div> {actor.biography}</div>
        </div>
      </div>
    </div>
  );
}
