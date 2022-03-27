import "./Styles.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Game from "./Game/Game.js";
import Pagination from "./Pagination/Pagination";
import Filters from "../Filters/Filters";

const Games = ({ allGames }) => {
  const query = useSelector((state) => {
    return state.gameQuery;
  });

  const filterQuery = useSelector((state) => {
    return state.filterQuery;
  });

  var games = useSelector((state) => {
    return state.allVideoGames;
  });

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);

  //get current games (by currentPage)
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  if (filterQuery.length) games = filterQuery;
  else if (query.length) games = query;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <Filters />
      </div>
      <div className="games_container">
        {currentGames.map((e) => (
          <Game
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.image}
            rating={e.rating}
            genres={e.genres}
          ></Game>
        ))}
      </div>

      <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={games.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Games;
