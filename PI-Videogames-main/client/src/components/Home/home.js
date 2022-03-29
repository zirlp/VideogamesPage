import "./Home.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenres } from "../../Actions/index.js";

//components --------------------------------------
import Games from "../Games/Games";
import Navbar from "../Navbar/Navbar";
import Loading from "../Loading/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const allGames = useSelector((state) => state.allVideoGames);

  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    if (allGames.length) {
      setLoading(false);
    }
  }, [allGames.length]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="homeScreen">
      <Navbar />
      <Games />
    </div>
  );
};

export default Home;
