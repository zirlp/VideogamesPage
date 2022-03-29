import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "../Search/Searchbar.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="landing_logo">
        <Link to={"/"}>
          <img
            className="navbar_landing"
            src="https://raw.githubusercontent.com/zirlp/VideogamesPage/main/PI-Videogames-main/client/src/Images/icono-door.png"
            alt="" // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEUAAAD////Q0NDDw8P09PTd3d12dnZMTEzo6Og3NzeUlJSXl5elpaVhYWGampqysrL5+fnIyMgYGBg8PDx/f3+9vb3v7+9tbW3X19d6enqHh4cxMTFZWVkbGxtDQ0NmZmZPT0+srKwmJiYODg6uZZfrAAAEKklEQVR4nO3d63aiMBSGYalgW49gUavWWjv3f48DRmEjGKDsHAjf+8+1LOQZMxwUcTRCCCGEEELI/eKz6RGoLvK8KF6bHoXKxl5asPwwPRBlCWHSdrUwPRY1ZcK0KD6ZHg9/BeF1vr6bHhJzj8Ik3635WiFMCqPY9MDYqhaK+fptenAsPRe6sn2VCsX2tefHA7VCz8rjgc1bXdvD7alNhNf5Kj1+3W2vS91osIle6oe8vD21oTBNcjwwEc940eRrJJzdntpC6KXz9dVxYVK42TkuvEoOD9tX54RJwZzOVxeFXnr8mm1fbRT+YVtaUWBaWL3hKwQhhCII2YOQxCPci4efSlU07cLjeZH2oxJVSLtQexCSIITQUBCSIGwm3IV+UhgpVdFw1EaCEEIRhOzh7InEIzx9fyR9H5WqaNjjkyCE0FAQkiCEUCTOnvyxUhUNR20kCCEUQcgehCQIIRRByB6EJAghFEHIHoQkCCEUQcgehCQIIRRByFX2tVZXhVPv/kVzR4VTz3FhAnRbmAKdFl6BLgsFMBN+3gbwU/+XPRHegJnwML92aXAFTz+Ed6D3h9uS9EKYAV0VzvIVuimckhU6KZzRFboonBZW6KBwVlzhb/slUGFon3D6sMJo3LDoqyy8jEYL3zLhTL56WZOS8HoLgrVdwsdXsJMwKAzVDmGHV7BCeL8h1Js9wk7AknB7f9xuYqgUdpmiFcLL/fGvLcJur2BZmN9VZ2uHsCuwJMz3pJ/yP9QkXHYFloT5sjc2CDu/giWhny/8YoHwqztQIpxbIOy6Ha0QhpYJGabp4//Df9myV1YIu7+Kj8L8PasG95jSIWTfH2aPbdkfsh/TrO6Pj60Wg+NSg8Q+nFuoOT/ct1tM/87xTy0X07v3ac5t34vCe20MOf9+6QDe8x7A5xYD+OyJEl0Vuv8Z8AA+xx/AtRgDuJ5mANdEDeC6tgFcmziA60sHcI1wHoQkCCEUQcgehCQIIRRByB6EJAghFEHIHoQkCCEUQcgehCQIIRRByB6EJKa7XZv6XW7csXwEIYQQKgtCEoTNhO/7SdpCuirO8ItWJBy1QSiCkD38DikJ+0MIDQUhCUIIDaVdeDwv0n5Uogrh3IKEozYIRRCyByEJQkn+6nxfiovCYE4Xrl0YiR+vVSZ8OayLS9F+jt+i1sJws6tfqk21EwbLBtPCsloIo/hkerR/qaFwm283+1YTYbD8MD3MDtUKo3hdvxSbkwq3K32flynruTDIvnTb76qFYRSbHhhbFULf6Nys2y40bvlEGCyf3yDlvGl7R/Pq9AhnVULJPn19aHXLSGmGhLLt5us8YFuxZ0Yo26fvmOZmnl5hJN2n/zLOzTy9wvj58ebrvN1tIhunV/isCfvczJOu2GcqnEpWst6PQy/kWlW5mn9chBBCCKEe9h+uLmZzONNTWAAAAABJRU5ErkJggg=="
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
