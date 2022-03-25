import "./Styles.css";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { filterQuery, getGameDetail, deleteGame } from "../../Actions/index.js";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const GameDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGameDetail(id));
  }, [dispatch, id]);

  const allGames = useSelector((state) => state.allVideoGames);

  const detail = useSelector((state) => state.gameDetail);
  let platformsObj = detail.platforms;
  let genresObj = detail.genres;

  //for some reason platforms and genres are objects :v
  var platforms = [];
  for (const prop in platformsObj) {
    platforms.push(platformsObj[prop]);
  }

  var genres = [];
  for (const prop in genresObj) {
    genres.push(genresObj[prop]);
  }

  const genreOnClick = (e) => {
    const byGenre = allGames.filter((game) =>
      game.genres.includes(e.target.value)
    );
    dispatch(filterQuery(byGenre));
  };

  const platformOnClick = (e) => {
    const byPlatform = allGames.filter((game) =>
      game.platforms.includes(e.target.value)
    );
    dispatch(filterQuery(byPlatform));
  };

  const deleted = () => {
    dispatch(deleteGame(id));
    alert("Game deleted");
    navigate("/home");
  };

  const deleteButton = () => {
    if (Number(id)) return "";
    return <button onClick={deleted}>Delete Game</button>;
  };

  return (
    <div>
      <Navbar />
      <img src={`${detail.background_image}`} alt=""></img>
      <h2>{detail.name}</h2>
      <h5>{detail.released}</h5>
      <h5>{detail.rating}</h5>
      <p>{detail.description_raw} </p>
      <div>
        {"Platforms:"}
        {platforms.map((platform) => (
          <Link to={"/home"} key={platform}>
            <button onClick={platformOnClick} value={platform} key={platform}>
              {platform}
            </button>
          </Link>
        ))}
      </div>
      <div>
        {"Genres:"}
        {genres.map((genre) => (
          <Link to={"/home"} key={genre}>
            <button onClick={genreOnClick} value={genre} key={genre}>
              {genre}
            </button>
          </Link>
        ))}
      </div>

      <div> {deleteButton()} </div>
    </div>
  );
};

export default GameDetail;
