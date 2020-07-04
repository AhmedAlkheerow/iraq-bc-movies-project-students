import { Button, Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Card, { CardBody } from "react-bootstrap/Card";
import Search from "./Search";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "./Image";
import MovieDetails from "./MovieDetails";
import { useHistory } from "react-router";
import Production from "./Production";
export default function Actors(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const actors = Object.values(props.details);
  const history = useHistory();
  const [actor, setActor] = useState("");
  const TMDB_BASE_URL = "https://api.themoviedb.org/3";
  const constructUrl = (path, query) => {
    return `${TMDB_BASE_URL}/${path}?api_key=${atob(
      "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
    )}&query=${query}`;
  };

  console.log(actor);

  return (
    <>
      <Button
        variant="dark"
        onClick={handleShow}
        className="btn btn-dark my-5 mx-5"
      >
        Click to see Cast!
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cast</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {actors.map((actor) => {
              return (
                <li>
                  <a href={`/person/${actor.id}`} style={{ color: "black" }}>
                    {actor.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
