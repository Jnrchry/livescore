import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Center = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="dateWrapper">
              <h6 className="day">Mon</h6>
              <h6 className="month">06 Jan</h6>
            </div>
            <div className="dateWrapper">
              <h6 className="day">Mon</h6>
              <h6 className="month">06 Jan</h6>
            </div>
            <div className="dateWrapper">
              <h6 className="day">Mon</h6>
              <h6 className="month">06 Jan</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Center;
