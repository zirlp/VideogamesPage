import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanQuery, gameQuery } from "../../Actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const allGames = useSelector((state) => {
    return state.allVideoGames;
  });

  const submitHandler = (e) => {
    e.preventDefault();

    const filterByQuery = allGames.filter((game) =>
      game.name.toLowerCase().includes(query)
    );

    dispatch(gameQuery(filterByQuery));
    setQuery("");
  };

  const filteredGames = useSelector((state) => {
    return state.gameQuery;
  });

  const goBackButton = () => {
    if (filteredGames.length) {
      return <button onClick={handleOnClick}>"Return"</button>;
    }
    return "";
  };
  const handleOnClick = () => {
    dispatch(cleanQuery());
  };

  return (
    <form className="searchBar" onSubmit={submitHandler}>
      <input
        type={"text"}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <input type={"submit"} value="Go!"></input>
      <div>{goBackButton()}</div>
    </form>
  );
};

export default SearchBar;
