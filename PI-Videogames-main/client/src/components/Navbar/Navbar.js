import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "../Search/Searchbar.js";
import { useDispatch } from "react-redux";
import { resetState } from "../../Actions";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <div className="landing_logo">
        <Link to={"/"} onClick={() => dispatch(resetState())}>
          <img
            className="navbar_landing"
            src="https://raw.githubusercontent.com/zirlp/VideogamesPage/main/PI-Videogames-main/client/src/Images/icono-door.png"
            alt=""
          ></img>
        </Link>
      </div>

      <div className="searchBar">
        <Searchbar />
      </div>

      <div className="navbar_addGame">
        <Link to={"/videogames/add"}>
          <img
            src="https://github.com/zirlp/VideogamesPage/blob/main/PI-Videogames-main/client/src/Images/icon-newgame.png?raw=true"
            alt=""
            className="navbar_newgame"
          ></img>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
