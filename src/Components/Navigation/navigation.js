import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigationStyle.css";

const navigation = (props) => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="navigation-color">
            <Container>
              <div className="d-flex align-items-start flex-column">
                <div className="mb-auto p-2">
                  <div className="d-flex align-items-start flex-column">
                    <div className="mb-auto p-2">
                      <div className="d-flex flex-column">
                        <div className="mb-5 mt-3">
                          <Image
                            className="mr-3"
                            src={require("../../Assets/db.png")}
                          />
                          <span className="text-menu">
                            <Link to="/">Dashboard</Link>
                          </span>
                        </div>

                        <div className="mb-5">
                          <Image
                            className="mr-3"
                            src={require("../../Assets/transfer.png")}
                          />
                          <span className="text-menu">
                            <Link to="/transfer">Transfer</Link>
                          </span>
                        </div>

                        <div className="mb-5">
                          <Image
                            className="mr-3"
                            src={require("../../Assets/topup.png")}
                          />
                          <span className="text-menu">
                            <Link to="/topup">Topup</Link>
                          </span>
                        </div>

                        <div className="margin-nav">
                          <Image
                            className="mr-3"
                            src={require("../../Assets/profile.png")}
                          />
                          <span className="text-menu">
                            <Link to="/profile">Profile</Link>
                          </span>
                        </div>
                        
                      </div>
                    </div>

                    <div className="mb-5 mt-3 ml-2">
                      <Image
                        className="mr-3"
                        src={require("../../Assets/logout.png")}
                      />
                      <span className="text-menu">
                        <Link to="/login">Logout</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default navigation;
