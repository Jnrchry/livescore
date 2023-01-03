import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import {
  Download,
  Feed,
  Menu,
  SportsSoccer,
  StarOutline,
} from "@mui/icons-material";

const navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <div className="container">
        <div className="logo">
          <Link to="/">LiveScore</Link>
        </div>
        <nav className="item">
          <ul className="ul" id={showLinks ? "hidden" : ""}>
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

          <Menu className="toggle" onClick={() => setShowLinks(!showLinks)} />
        </nav>
      </div>

      <div className="btnWrapper">
        <button className="btn">
          <Link>Football</Link>
        </button>
        <button className="btn">
          <Link>Hockey</Link>
        </button>
        <button className="btn">
          <Link>Basketball</Link>
        </button>
        <button className="btn">
          <Link>Tennis</Link>
        </button>
      </div>
    </>
  );
};

export default navbar;
