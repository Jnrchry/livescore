import React from "react";
import "./navBar.scss";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SportsSoccer, StarBorder } from "@mui/icons-material";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link>Livscore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Link to="/" className="me-3">
                <SportsSoccer className="icon" />
                Scores
              </Link>

              <Link to="/favorites">
                <StarBorder className="icon" />
                Favorite
              </Link>
            </Nav>
            <Nav>
              <Button variant="primary">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
