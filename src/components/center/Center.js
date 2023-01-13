import React, { useState, useEffect } from "react";
import { ChevronRight } from "@mui/icons-material";
import "./center.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
// import Data from "../../data.json";
import axios from "axios";

const Center = () => {
  const [livescore, setLivescore] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://soccer.sportmonks.com/api/v2.0/continents?api_token=UgGN1PV60IKCDVZRLOhpdIyhlo5Vj7d7z1rwJbalcf1lxlrthmNoDUA6zwng&include=countries,"
      )
      .then((res) => {
        console.log(res.data);
        setLivescore(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  {
    console.log("livescroeData", livescore);
  }

  return (
    <>
      <Container>
        <Row>
          <Col className=" mt-3" col={4}>
            <Card className="p-3">
              <Card.Body className="cardBody">
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

                {livescore.data.map((value, index) => {
                  return (
                    <>
                      <div>
                        <div className="leagueTitle d-flex justify-content-between mt-3">
                          <h5 className="fw-bold">{value.name}</h5>
                          <ChevronRight />
                        </div>

                        <div className="teamsWrapper">
                          <span className="minutes">4</span>

                          <div className="ms-4 d-flex justify-content-between mb-3">
                            <div>
                              <h5 className="team">Real Madrid</h5>
                              <h5 className="team">Barcelona</h5>
                            </div>
                            <div className="scores">
                              <h5 className="score">0</h5>
                              <h5 className="score">0</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Center;
