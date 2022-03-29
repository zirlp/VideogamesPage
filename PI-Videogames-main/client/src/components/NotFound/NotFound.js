import React, { useEffect, useState } from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return function cleanUp() {
      clearInterval(intervalId);
    };
  }, [count]);

  if (!count) navigate("/");

  return (
    <div className="notfound_container">
      <img
        className="notfound_notfound"
        src="https://cdn.dribbble.com/users/1107612/screenshots/4602580/media/e445db9451cf2159a9a6f9c35902bbc9.png"
        alt=""
      ></img>
      {/* <img src="https://media3.giphy.com/media/83pTqvvU3XAs0c5W4Y/200.gif?cid=95b27944389a61c280d3929d416abe0d0a2d9fba6759b0e9&rid=200.gif&ct=s">
        {" "}
      </img> */}
      {"no games found"}
      <button className="notfound_button" onClick={() => navigate("/home")}>
        {`CONTINUE ? . . . ${count}`}
      </button>
    </div>
  );
};

export default NotFound;
