import React from "react";
import "./Styles.css";
import { useDispatch, useSelector } from "react-redux";
import { filterQuery, removeFilters } from "../../Actions";

const Filters = () => {
  const dispatch = useDispatch();
  //   const [query, setQuery] = useState([]);

  const currentFilter = useSelector((state) => state.filterQuery);
  const currentQuery = useSelector((state) => state.gameQuery);
  const genres = useSelector((state) => state.genres);
  var allGames = useSelector((state) => state.allVideoGames);

  if (currentFilter.length) allGames = currentFilter;
  else if (currentQuery.length) allGames = currentQuery;

  const allPlatformsArray = allGames.map((p) => p.platforms);
  const allPlatforms = [...new Set(allPlatformsArray.flat())];

  const handleInputChange = (e) => {
    // dispatch(gameQuery(query));

    if (e.target.value === "byName") allGames.sort();
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
        <button onClick={() => dispatch(removeFilters())}>
          "Remove Filters"
        </button>
      );
    return "";
  };

  return (
    <div className="filter_container">
      <select onChange={handleInputChange} className="filter_name">
        <option value={"Order"}>ORDER BY</option>
        <option value={"byName"}>Name</option>
        <option value={"byRating"}>Rating</option>
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
