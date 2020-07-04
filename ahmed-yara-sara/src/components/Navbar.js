import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import Dropdown from "./Dropdown";

export default function movieNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="..">Movies For You</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Dropdown></Dropdown>
        <Search></Search>
      </Navbar>
      <br />
    </>
  );
}
