import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { Download, Feed, SportsSoccer, StarOutline } from "@mui/icons-material";

const navbar = () => {
  return (
    <div className="container">
      <div className="logo">LiveScore</div>
      <nav className="item">
        <ul className="ul">
          <li className="navItem">
            <Link to="/">
              <SportsSoccer />
              Scores
            </Link>
          </li>
          <li className="navItem">
            <Link to="/favorite">
              <StarOutline />
              Favorite
            </Link>
          </li>
          <li className="navItem">
            <Link to="/news">
              <Feed />
              News
            </Link>
          </li>
          <li className="navItem">
            <Link to="/mobile">
              <Download />
              Get the app
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
