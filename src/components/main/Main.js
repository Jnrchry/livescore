import React from "react";
import "./main.scss";
import { Container, Row, Col } from "react-bootstrap";
import LeftSide from "../leftSide/LeftSide";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="left d-flex justify-content-center">
              <LeftSide />
            </div>
          </Col>

          <Col>
            <div className="center d-flex justify-content-center">
              <h1>Red</h1>
            </div>
          </Col>

          <Col>
            <div className="right d-flex justify-content-center">
              <h1>Green</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
