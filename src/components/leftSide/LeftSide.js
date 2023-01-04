import React from "react";
import "./leftSide.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Search } from "@mui/icons-material";
import Flag from "react-flagkit";

const LeftSide = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="justify-content-center  mt-3">
            <div className="search display-block">
              <Search className="searchIcon" />
              <input type="search" placeholder="Search" id="" />
            </div>

            <div className="mt-2 ">
              <Flag country="GB" className="countryIcon" />
              <span>England</span>
            </div>

            <div className="countryWrapper mt-2">
              <Flag country="ES" className="countryIcon" />
              <span>Spain</span>
            </div>

            <div className="countryWrapper mt-2">
              <Flag country="IT" className="countryIcon" />
              <span>Italy</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeftSide;
