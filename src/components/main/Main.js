import React from "react";
import "./main.scss";
import { Search } from "@mui/icons-material";

const Main = () => {
  return (
    <section>
      <div className="left">
        <div className="leftSearch">
          <Search className="searchIcon" />
          <input type="search" name="" id="" placeholder="Search" />

          <div className="country"></div>
        </div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </section>
  );
};

export default Main;
