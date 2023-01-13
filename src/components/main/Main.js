import React from "react";
import "./main.scss";
import { Container, Row, Col } from "react-bootstrap";
import Center from "../center/Center";

const Main = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="center d-flex justify-content-center">
              <Center />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
