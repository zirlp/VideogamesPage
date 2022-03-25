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
    <div className="card-content">
      <div className="card">
        <Link to={`/videogames/${id}`}>
          <img src={`${image}`} alt={"game_img"} className="image"></img>
        </Link>
        <h3 className="card-name">{name}</h3>
        <p className="rating"> {rating} </p>
        <div className="genres">
          {genres.map((g) => (
            <p className="genre" key={g}>
              {g}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
