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
    <div className="gameDetail">
      <div>
        <img src={`${image}`} alt={"game_img"} width="20%" height="15%"></img>
        <h3>{name}</h3>
        <h5>{rating}</h5>
        <h4>{genres}</h4>
      </div>
      <Link to={`/videogames/${id}`}>Game Detail</Link>
    </div>
  );
};

export default Game;
