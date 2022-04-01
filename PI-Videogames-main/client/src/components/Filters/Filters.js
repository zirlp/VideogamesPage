import React from "react";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { filterQuery, orderBy, removeFilters } from "../../Actions";

const Filters = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  var allGames = useSelector((state) => state.allVideoGames);

  if (state.filterQuery.length) allGames = state.filterQuery;
  else if (state.gameQuery.length) allGames = state.gameQuery;

  const filterBy = (type) => {
    let filter;
    if (state.platforms.find((a) => a.name === type.target.value)) {
      filter = allGames.filter((game) =>
        game.platforms.includes(type.target.value)
      );
    } else {
      filter = allGames.filter((game) =>
        game.genres.includes(type.target.value)
      );
    }
    dispatch(filterQuery(filter));
  };

  const handleInputChange = (e) => {
    var sort = [];

    if (e.target.value === "Rating ▲") {
      sort = allGames.sort((a, b) => b.rating - a.rating);
    }
    if (e.target.value === "Rating ▼") {
      sort = allGames.sort((a, b) => a.rating - b.rating);
    }
    if (e.target.value === "A-Z") {
      sort = allGames.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (b.name > a.name) return -1;
        return 0;
      });
    }
    if (e.target.value === "Z-A") {
      sort = allGames.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (b.name < a.name) return -1;
        return 0;
      });
    }
    if (e.target.value === "DB") {
      sort = allGames.sort((a, b) => {
        if (!Number(a.id) && Number(b.id)) return -1;
        if (Number(a.id) && !Number(b.id)) return 1;
        return 0;
      });
    }
    dispatch(orderBy(sort));
    dispatch(orderBy([]));
  };

  const removeFilterButton = () => {
    if (state.filterQuery.length)
      return (
        <button
          className="filter_remove"
          onClick={() => dispatch(removeFilters())}
        >
          Remove filters
        </button>
      );
    return "";
  };

  return (
    <div className="filter_container">
      <select onChange={handleInputChange} className="filter_select">
        <option value="" disabled selected hidden>
          SORT BY
        </option>
        <option value={"DB"}>DB ▲</option>
        <option value={"Rating ▲"}>Rating ▲</option>
        <option value={"Rating ▼"}>Rating ▼</option>
        <option value={"A-Z"}>A-Z</option>
        <option value={"Z-A"}>Z-A</option>
      </select>

      <select onChange={filterBy} className="filter_select">
        <option value="" disabled selected hidden>
          FILTER BY GENRE
        </option>
        {state.genres.map((genres) => (
          <option value={genres.name} key={genres.name}>
            {genres.name}
          </option>
        ))}
      </select>

      <select onChange={filterBy} className="filter_select">
        <option value="" disabled selected hidden>
          FILTER BY PLATFORM
        </option>
        {state.platforms.map((platform) => (
          <option value={platform.name} key={platform.name}>
            {platform.name}
          </option>
        ))}
      </select>

      <div>{removeFilterButton()}</div>
    </div>
  );
};

export default Filters;

// const allPlatformsArray = allGames.map((p) => p.platforms);
// const allPlatforms = [...new Set(allPlatformsArray.flat())];

// dispatch(filterQuery(type.target.value));
