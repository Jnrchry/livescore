import React from "react";
import "./main.scss";
import { Search } from "@mui/icons-material";
import Flag from "react-flagkit";

const Main = () => {
  return (
    <section>
      <div className="left">
        <div className="leftSearch">
          <Search className="searchIcon" />
          <input type="search" name="" id="" placeholder="Search" />

          <div className="countryFlag">
            <Flag country="GB" className="flag" />
            <span>England</span>
          </div>
          <div className="countryFlag">
            <Flag country="ES" className="flag" />
            <span>Spain</span>
          </div>
          <div className="countryFlag">
            <Flag country="IT" className="flag" />
            <span>Italy</span>
          </div>
        </div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </section>
  );
};

export default Main;
