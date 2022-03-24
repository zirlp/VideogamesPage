import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// screens -----------------------
import LandingPage from "./components/Landing/Landing.js";
import Home from "./components/Home/Home.js";
import Form from "./components/Form/Form.js";
import GameDetail from "./components/GameDetail/GameDetail";

const App = () => (
  <Router>
    <main>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/videogames/add" element={<Form />} />
        <Route exact path="/videogames/:id" element={<GameDetail />} />
      </Routes>
    </main>
  </Router>
);

export default App;
