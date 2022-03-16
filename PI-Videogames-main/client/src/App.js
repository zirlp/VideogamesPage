import "./App.css";
import React from "react";
import { browserRouter, Route } from "react-router-dom";

import form from "./components/Form/form.js";
import games from "./components/Games/games.js";
import game from "./components/Games/Game/game.js";
import search from "./components/Search";
import home from "./components/Home";

const App = () => (
  //aqui el use state
  //aqui el dispatch
  //aquí va el querido useEffect

  <BrowserRouter>
    <div className="App">
      <Route path="/">
        <h1>Henry Videogames</h1>
      </Route>
      <Route path="/home" element={games} />
      <Route path="/videogames/add" component={form} />
      <Route path="/videogames/:gameid" element={game} />
    </div>
  </BrowserRouter>
);

export default App;
