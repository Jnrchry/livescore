import React from "react";
import { Route, Routes } from "react-router-dom";
import Scores from "./pages/scores/Scores";
import Favorite from "./pages/favorite/Favorite";
import "./App.scss";

const App = () => {
  return (
    <div class="App">
      <Routes>
        <Route path="/" element={<Scores />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default App;
