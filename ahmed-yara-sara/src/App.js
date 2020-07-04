import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FooterBar from "./components/Footer";
import MoviePage from "./components/MoviePage";
import ActorPage from "./components/ActorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App(props) {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <Navbar handleMovies={setMovies} />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main movies={movies} />
          </Route>
          <Route path="/person/:actor_id" component={ActorPage} />
          <Route path="/Movie/:id" component={MoviePage}></Route>
        </Switch>
      </Router>
      <FooterBar />
    </>
  );
}
export default App;
