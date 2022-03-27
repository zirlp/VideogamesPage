import { Link } from "react-router-dom";
import "./Styles.css";

const Game = ({
  id,
  name,
  description,
  released,
  rating,
  image,
  genres,
  platforms,
}) => {
  //aquí el estilo de cada carta
  return (
    <div className="card_content">
      <div className="card">
        <Link to={`/videogames/${id}`}>
          <img src={`${image}`} alt={"game_img"} className="card_image"></img>
        </Link>
        <h3 className="card_name">{name}</h3>
        <h3 className="card_rating"> {rating} </h3>
        <div className="card_genres">
          {genres.map((g) => (
            <p className="card_genre" key={g}>
              {g}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
