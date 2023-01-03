import React from "react";
import { Route, Routes } from "react-router-dom";
import Scores from "./components/pages/scores/Scores";
import Favorite from "./components/pages/favorite/Favorite";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Scores />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
};

export default App;
