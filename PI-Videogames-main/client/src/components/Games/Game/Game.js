import { Link } from "react-router-dom";
import "./Styles.css";

const Game = ({
  id,
  name,
  description,
  released,
  rating,
  background_image,
  genres,
  platforms,
}) => {
  //aquí el estilo de cada carta
  return (
    <div className="card_content">
      <Link to={`/videogames/${id}`}>
        <div className="card">
          <h3 className="card_rating">{rating}⭐</h3>
          <img
            src={`${background_image}`}
            alt={"game_img"}
            className="card_image"
          ></img>
          <div className="card_info">
            <p className="card_arrow"> ▲ </p>
            <h3 className="card_name">{name}</h3>
            <div className="card_genres">
              {genres.map((g) => (
                <p className="card_genre" key={g}>
                  {g}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Game;
