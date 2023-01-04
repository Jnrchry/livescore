import React from "react";
import "./navBar.scss";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Download,
  Newspaper,
  SportsSoccer,
  StarBorder,
} from "@mui/icons-material";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to="/">Livescore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="me-3">
                <SportsSoccer className="icon" />
                Scores
              </Link>

              <Link to="/favorites" className="me-3">
                <StarBorder className="icon" />
                Favorites
              </Link>

              <Link to="/favorites" className="me-3">
                <Newspaper className="icon" />
                News
              </Link>

              <Link to="/favorites" className="me-3">
                <Download className="icon" />
                Get the app
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="dark" variant="dark" className="boder">
        <Container>
          <Nav className="me-auto">
            <Link to="/football">Football</Link>
            <Link to="/Hockey">Hockey</Link>
            <Link to="Basketball">Basketball</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
