import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      {"Looks like youre lost :("}

      <button onClick={() => navigate("/home")}> Go Back </button>
    </div>
  );
};

export default NotFound;
