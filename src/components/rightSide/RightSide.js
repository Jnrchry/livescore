import React from "react";
import "./rightSide.scss";
import { Col, Container, Row } from "react-bootstrap";
import Pele from "../../assets/pele.png";

const RightSide = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="news">
              <img src={Pele} alt="" className="pele mt-3" />
              <h6>Pele's funeral: Brazil legend given joyous send-off</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RightSide;
