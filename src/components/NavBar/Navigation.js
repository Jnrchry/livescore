import React from "react";
import "./navBar.scss";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SportsSoccer, StarBorder } from "@mui/icons-material";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link>Livescore</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="me-3">
                <SportsSoccer className="icon" />
                Scores
              </Link>
              <Link to="/favorites">
                <StarBorder className="icon" />
                Favorites
              </Link>
            </Nav>
            <Nav>
              <Button variant="primary">
                <Link>Login</Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
