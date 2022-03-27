import { Link } from "react-router-dom";
import "./Styles.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <Link to={"/home"}>
        <img
          className="start"
          src="https://i.makeagif.com/media/5-02-2020/ycAGy7.gif"
          alt=""
        ></img>
      </Link>
    </div>
  );
};

export default LandingPage;
