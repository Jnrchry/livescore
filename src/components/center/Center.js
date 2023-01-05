import { CalendarMonth, ChevronRight } from "@mui/icons-material";
import React from "react";
import "./center.scss";
import { Col, Container, Row } from "react-bootstrap";

const Center = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="Wrapper d-flex justify-content-between">
              <div className="dateWrapper m-2 ">
                <h6 className="day fw-bold">Mon</h6>
                <h6 className="day">25 Jan</h6>
              </div>
              <div className="dateWrapper m-2">
                <h6 className="day fw-bold">Mon</h6>
                <h6 className="day">26 Jan</h6>
              </div>
              <div className="dateWrapper m-2">
                <h6 className="day fw-bold">Mon</h6>
                <h6 className="day">27 Jan</h6>
              </div>

              <input type="date" name="footmath match" />
            </div>

            <div>
              <div className="leagueTitle d-flex justify-content-between mt-3">
                <h5 className="fw-bold">Premier League</h5>
                <ChevronRight />
              </div>

              <div className="teamsWrapper">
                <span className="minutes">4</span>

                <div className="ms-4 d-flex justify-content-between mb-3">
                  <div>
                    <h4 className="team">Liverpool</h4>
                    <h4 className="team">Arsenal</h4>
                  </div>
                  <div className="scores">
                    <h4 className="score">0</h4>
                    <h4 className="score">0</h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Center;
