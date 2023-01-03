import React from "react";
import { Route, Routes } from "react-router-dom";
import Scores from "./pages/scores/Scores";
import Favorite from "./pages/favorite/Favorite";
import "./App.scss";
import Football from "./pages/football/Football";

const App = () => {
  return (
    <div class="App">
      <Routes>
        <Route path="/" element={<Scores />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/football" element={<Football />} />
      </Routes>
    </div>
  );
};

export default App;
