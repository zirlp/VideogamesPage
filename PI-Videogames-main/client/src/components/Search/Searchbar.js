import "./Styles.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanQuery, gameQuery } from "../../Actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const allGames = useSelector((state) => state.allVideoGames);

  const submitHandler = (e) => {
    e.preventDefault();
    var filterByQuery;

    if (query) {
      filterByQuery = allGames.filter((game) =>
        game.name.toLowerCase().includes(query)
      );
      !filterByQuery.length
        ? navigate("/nope")
        : dispatch(gameQuery(filterByQuery));
    }
    setQuery("");
  };

  const filteredGames = useSelector((state) => state.gameQuery);

  const goBackButton = () => {
    if (filteredGames.length)
      return (
        <button onClick={handleOnClick} className="searchbar_back">
          Return
        </button>
      );
    return "";
  };
  const handleOnClick = () => {
    dispatch(cleanQuery());
  };

  return (
    <form className="searchBar" onSubmit={submitHandler}>
      <input
        className="searchbar_input"
        type={"text"}
        placeholder="SEARCH..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>

      <input
        src="https://github.com/zirlp/VideogamesPage/blob/main/PI-Videogames-main/client/src/Images/icono-lupa.png?raw=true"
        type="image"
        alt=""
        className="searchbar_submit"
      />
      <div>{goBackButton()}</div>
    </form>
  );
};

export default SearchBar;
