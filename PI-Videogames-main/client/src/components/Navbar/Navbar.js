import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "../Search/Searchbar.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="landing_logo">
        <Link to={"/"}>
          <h5>Landing Page</h5>
        </Link>
      </div>

      <div className="navbar_logo">
        <Link to={"/home"}>
          <h5>Home</h5>
        </Link>
      </div>

      <div className="searchBar">
        <Searchbar />
      </div>

      <div className="navbar_addGame">
        <Link to={"/videogames/add"}>
          Add new game_
          <span className="addGame_Icon">icon</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
