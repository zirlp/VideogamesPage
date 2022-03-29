import "./Styles.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { filterQuery, getGameDetail, deleteGame } from "../../Actions/index.js";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const GameDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const allGames = useSelector((state) => state.allVideoGames);
  const detail = useSelector((state) => state.gameDetail);

  //for some reason platforms and genres are objects :v
  let platformsObj = detail.platforms;
  let genresObj = detail.genres;

  var platforms = [];
  for (const prop in platformsObj) {
    platforms.push(platformsObj[prop]);
  }
  var genres = [];
  for (const prop in genresObj) {
    genres.push(genresObj[prop]);
  }
  // ------------------------------------------------- :v

  useEffect(() => {
    dispatch(getGameDetail(id));
  }, [dispatch, id]);

  // if i do 2 useEffects the fetch is made just once  :), otherwise; would dispatch getGameDetail when the id changes.
  useEffect(() => {
    setLoading(true);
    if (detail.id === id) {
      setLoading(false);
    }
  }, [detail.id, id]);

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
    return (
      <button onClick={deleted} className="detail_delete">
        Delete Game
      </button>
    );
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div>
      <div>
        <Link to={"/home"}>
          <img
            className="detail_arrow"
            src="https://github.com/zirlp/VideogamesPage/blob/main/PI-Videogames-main/client/src/Images/whiteArrow.png?raw=true"
            alt=""
          ></img>
        </Link>
      </div>
      <div className="detail_container">
        <h2 className="detail_title">{detail.name}</h2>
        <img
          className="detail_image"
          src={`${detail.background_image}`}
          alt=""
        ></img>
        <div className="detail_info">
          <h5> Release date: {detail.released}</h5>
          <h5>Rating: {detail.rating}</h5>
        </div>

        <div className="detail_txt">{detail.description_raw} </div>
        <div className="detail_platContainer">
          <div>{"Platforms:"} </div>
          {platforms.map((platform) => (
            <Link to={"/home"} key={platform}>
              <button
                onClick={platformOnClick}
                value={platform}
                key={platform}
                className="detail_tag"
              >
                {platform}
              </button>
            </Link>
          ))}
        </div>
        <div className="detail_genContainer">
          <div>{"Genres:"}</div>
          {genres.map((genre) => (
            <Link to={"/home"} key={genre}>
              <button
                onClick={genreOnClick}
                value={genre}
                key={genre}
                className="detail_tag"
              >
                {genre}
              </button>
            </Link>
          ))}
        </div>
        <div> {deleteButton()} </div>
      </div>
    </div>
  );
};

export default GameDetail;
