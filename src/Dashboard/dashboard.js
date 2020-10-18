import React, { Component, useState } from "react";
import { Container, Row, Col, Image, Media, Nav } from "react-bootstrap";
import "./dashboardStyle.css";
import Axios from "axios";
import { Navigation } from "../Components/Navigation";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import Loading from "../Components/Loading";

const Content = () => {
  const TOKEN_KEY = "Auth";
  let role_id = "";
  let myId = "";

  let token = localStorage.getItem(TOKEN_KEY);
  let salt = "ARKADMY";

  const headers = { headers: { auth: token } };

  jwt.verify(token, salt, (err, decode) => {
    if (!err) {
      myId = decode.id;
    } else {
      console.log(err);
    }
  });

  const [data, SetData] = React.useState("");
  const [data2, SetData2] = useState({ data: [] });

  React.useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_URL_BACKEND}/api/v1/profile/id/${myId}`,
      headers
    )
      .then((res) => SetData(res.data.data[0]))
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/v1/transfer`, headers)
      .then((res) => SetData2(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        <Row className="balance-color">
          <Col>
            <Col>
              <Col className="mt-2 mb-2">Balance</Col>
              <div>
                <Col className="text-bal balance-text">
                  {data.balance ? data.balance : "0"}
                </Col>
                <Col className="mt-2 mb-2">
                  {data.phone ? data.balance : "+62"}
                </Col>
              </div>
            </Col>
          </Col>
          <Col md={3} className="mt-5 mb-5">
            <Col>
              <Col className="mb-3 btn-ballance">
                <>
                  <Image src={require("../Assets/transfer-btn.png")} />
                  <span>Transfer</span>
                </>
              </Col>
              <Col className="btn-ballance">
                <>
                  <Image src={require("../Assets/topup-btn.png")} />
                  <span>Topup</span>
                </>
              </Col>
            </Col>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <div className="dashboard-color">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <div className="container">
                    <div className="row justify-content-around">
                      <Col>
                        <Image src={require("../Assets/arrow-up.png")} />
                        <p>Income</p>
                        <p>Rp.2.120.000</p>
                      </Col>
                      <Col>
                        <Image src={require("../Assets/arrow-down.png")} />
                        <p>Expense</p>
                        <p>Rp.1.560.000</p>
                      </Col>
                    </div>
                  </div>
                </div>
                <div className="p-2 d-flex align-items-end">
                  <canvas id="canvas"></canvas>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="dashboard-color-sub">
            <div className="dashboard-color">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <div className="container">
                    <div className="row">
                      <div className="col-9">Transaction History</div>
                      <div className="col">
                        <Link to="/history">See all</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  {data2.data.map((item) => (
                    <Container className="mb-3">
                      <Row>
                        <Col>
                          <Nav className="nav-profile form-inline my-3 my-lg-0 pr-5">
                            <Image
                              className="mr-sm-2"
                              src={require("../Assets/picture.png")}
                            />
                            <Media.Body className="ml-2 mr-2">
                              <ul className="navbar-nav mr-sm-0">
                                <li className="text-style">
                                  {item.first_name} {item.last_name}
                                </li>
                                <li>Transfer</li>
                              </ul>
                            </Media.Body>
                          </Nav>
                        </Col>
                        <p className="mr-2">{item.balance}</p>
                      </Row>
                    </Container>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Profile = (props) => {
  return (
    <>
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation {...props} />
          </Col>
          <Col>
            <Content />
          </Col>
        </div>
      </section>
    </>
  );
};

export default Profile;
