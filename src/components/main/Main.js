import React from "react";
import "./main.scss";
import { Container, Row, Col } from "react-bootstrap";
import LeftSide from "../leftSide/LeftSide";
import Center from "../center/Center";
import RightSide from "../rightSide/RightSide";

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
              <Center />
            </div>
          </Col>

          <Col>
            <div className="right d-flex justify-content-center">
              <RightSide />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
