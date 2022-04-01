import "./Styles.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Game from "./Game/Game.js";
import Pagination from "./Pagination/Pagination";
import Filters from "../Filters/Filters";

const Games = () => {
  const state = useSelector((state) => state);
  var allGames = useSelector((state) => state.allVideoGames);

  if (state.order.length) allGames = state.order;

  if (state.filterQuery.length) allGames = state.filterQuery;
  else if (state.gameQuery.length) allGames = state.gameQuery;

  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 15;

  //get current games (by currentPage)
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;

  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

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
            background_image={e.background_image}
            rating={e.rating}
            genres={e.genres}
          ></Game>
        ))}
      </div>

      <Pagination
        gamesPerPage={gamesPerPage}
        totalGames={allGames.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Games;
