import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Scores from "../src/pages/scores/Scores";
import Favorites from "./pages/favorites/Favorites";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Scores />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
