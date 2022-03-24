import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <button>
        <Link to={"/home"}>Press Start!</Link>
      </button>
    </div>
  );
};

export default LandingPage;
