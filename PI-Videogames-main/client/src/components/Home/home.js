import "./Home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres } from "../../Actions/index.js";

//components --------------------------------------
import Games from "../Games/Games";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenres());
  }, [dispatch]);

  const allGames = useSelector((state) => {
    return state.allVideoGames;
  });
  return (
    <div className="homeScreen">
      <Navbar />
      <Games allGames={allGames} />
    </div>
  );
};

export default Home;
