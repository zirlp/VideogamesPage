import { Link } from "react-router-dom";
import "./Styles.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <Link to={"/home"}>
        <img
          className="start"
          src="https://github.com/zirlp/VideogamesPage/blob/main/PI-Videogames-main/client/src/Images/press-start.gif?raw=true"
          alt=""
        ></img>
      </Link>
    </div>
  );
};

export default LandingPage;
