import "./Styles.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanQuery, gameQuery } from "../../Actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const allGames = useSelector((state) => state.allVideoGames);

  const submitHandler = (e) => {
    e.preventDefault();

    const filterByQuery = allGames.filter((game) =>
      game.name.toLowerCase().includes(query)
    );
    // console.log(filterByQuery);
    !filterByQuery.length
      ? navigate("/nope")
      : dispatch(gameQuery(filterByQuery));
    setQuery("");
  };

  const filteredGames = useSelector((state) => state.gameQuery);

  const goBackButton = () => {
    if (filteredGames.length)
      return <button onClick={handleOnClick}>"Return"</button>;
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
      <input type={"submit"} value="OK" className="searchbar_submit"></input>
      <div className="searchbar_back">{goBackButton()}</div>
    </form>
  );
};

export default SearchBar;
