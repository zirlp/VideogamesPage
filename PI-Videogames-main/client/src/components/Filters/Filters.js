import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanQuery, filterQuery, gameQuery } from "../../Actions";

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

  const handleInputChange = () => {
    // dispatch(gameQuery(query));
  };

  const filterByPlatform = (plat) => {
    const byPlatform = allGames.filter((game) =>
      game.platforms.includes(plat.target.value)
    );
    // currentFilter.length
    //   ? dispatch(filterQuery(currentFilter.concat(byPlatform)))
    dispatch(filterQuery(byPlatform));
  };

  const filterByGenre = (plat) => {
    const byGenre = allGames.filter((game) =>
      game.genres.includes(plat.target.value)
    );

    // currentFilter.length
    //   ? dispatch(filterQuery(currentFilter.concat(byGenre)))
    //   :
    dispatch(filterQuery(byGenre));
  };

  return (
    <div>
      <select onChange={handleInputChange}>
        <option value={"byName"}>Name</option>
        <option value={"byRating"}>Rating</option>
      </select>

      <select onChange={filterByGenre}>
        <option value={"none"}>By genre</option>
        {genres.map((genres) => (
          <option value={genres.name} key={genres.name}>
            {genres.name}
          </option>
        ))}
      </select>

      <select onChange={filterByPlatform}>
        <option value={"none"}>By platform</option>
        {allPlatforms.map((platform) => (
          <option value={platform} key={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
