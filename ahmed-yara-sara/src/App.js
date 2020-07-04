import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FooterBar from "./components/Footer";
import MoviePage from "./components/MoviePage";
import ActorPage from "./components/ActorPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieContextProvider from "./components/StateProvider";
function App() {
  return (
    <>
      <MovieContextProvider>
        <Navbar />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/person/:actor_id" component={ActorPage} />
            <Route path="/Movie/:id" component={MoviePage}></Route>
          </Switch>
        </Router>
        <FooterBar />
      </MovieContextProvider>
    </>
  );
}
export default App;
