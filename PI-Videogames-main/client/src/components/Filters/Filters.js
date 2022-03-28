import React from "react";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { filterQuery, orderBy, removeFilters } from "../../Actions";

const Filters = () => {
  const dispatch = useDispatch();

  const currentOrder = useSelector((state) => state.order);
  const currentFilter = useSelector((state) => state.filterQuery);
  const currentQuery = useSelector((state) => state.gameQuery);
  const genres = useSelector((state) => state.genres);
  var allGames = useSelector((state) => state.allVideoGames);

  if (currentOrder.length) allGames = currentOrder;
  else if (currentFilter.length) allGames = currentFilter;
  else if (currentQuery.length) allGames = currentQuery;

  const allPlatformsArray = allGames.map((p) => p.platforms);
  const allPlatforms = [...new Set(allPlatformsArray.flat())];

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
    dispatch(orderBy(sort));
    dispatch(orderBy([]));
  };

  const filterByPlatform = (plat) => {
    const byPlatform = allGames.filter((game) =>
      game.platforms.includes(plat.target.value)
    );
    dispatch(filterQuery(byPlatform));
  };

  const filterByGenre = (plat) => {
    const byGenre = allGames.filter((game) =>
      game.genres.includes(plat.target.value)
    );
    dispatch(filterQuery(byGenre));
  };

  const removeFilterButton = () => {
    if (currentFilter.length)
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
      <select onChange={handleInputChange} className="filter_name">
        <option value={"Order"}>ORDER BY</option>
        <option value={"Rating ▲"}>Rating ▲</option>
        <option value={"Rating ▼"}>Rating ▼</option>
        <option value={"A-Z"}>A-Z</option>
        <option value={"Z-A"}>Z-A</option>
      </select>

      <select onChange={filterByGenre} className="filter_genre">
        <option value={"none"}>FILTER BY GENRE</option>
        {genres.map((genres) => (
          <option value={genres.name} key={genres.name}>
            {genres.name}
          </option>
        ))}
      </select>

      <select onChange={filterByPlatform} className="filter_platform">
        <option value={"none"}>FILTER BY PLATFORM</option>
        {allPlatforms.map((platform) => (
          <option value={platform} key={platform}>
            {platform}
          </option>
        ))}
      </select>

      <div>{removeFilterButton()}</div>
    </div>
  );
};

export default Filters;
