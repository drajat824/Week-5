import React, { useState } from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Navigation } from "../Components/Navigation";
import jwt from "jsonwebtoken";

const Content = (props) => {

  const TOKEN_KEY = "Auth";
  let role_id = "";
  let myId = "";
  
  let token = localStorage.getItem(TOKEN_KEY);
  let salt = "ARKADMY";
  const headers = {headers: {'auth' : token}}
  
  jwt.verify(token, salt, (err, decode) => {
    if(!err){
      myId = decode.id
    } else {
      console.log(err)
    }
  });

  const [data, SetData] = useState({data: [] });
  const [onRefresh, setOnRefresh] = useState(false);
  const [notRefresh, setNotRefresh] = useState(false);

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/v1/profile/id/${myId}`, headers)
      .then((res) => {
        SetData(res.data.data[0]);
      })
      .catch((err) => console.log(err.message));
  }, [onRefresh]);

  return (
    <>
      <Container className="profile-color">
        <Container className="pt-4">
          <Row className="justify-content-center">
          <ul className="navbar-nav mr-sm-0">
            <li><Image src={require("../Assets/picture.png")} /></li>
            <Link to="#">
            <li  className="text-edit" >Edit</li>
            </Link>
            </ul>
          </Row>

          <Row className="justify-content-center">
              <ul className="navbar-nav mr-sm-0">
          <li>{data.first_name}</li>
          <li className="text-number">{data.phone ? data.phone : "+62"}</li>
              </ul>
          </Row>

        </Container>
        <Container className="margin-menu pb-3">

          <Row className="justify-content-md-center">
            <Col md={6} className="btn-menu mb-4">
              <Link to="/profile/personal">
                <Row>
                  <Col className="text-menu" md={11}>
                    Personal Info
                  </Col>
                  <Image src={require("../Assets/arrow-left.png")} />
                </Row>
              </Link>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={6} className="btn-menu mb-4">
              <Link to="/profile/password">
                <Row>
                  <Col className="text-menu" md={11}>
                    Change Password
                  </Col>
                  <Image src={require("../Assets/arrow-left.png")} />
                </Row>
              </Link>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={6} className="btn-menu mb-4">
              <Link to="/profile/pin">
                <Row>
                  <Col className="text-menu" md={11}>
                    Change Pin
                  </Col>
                  <Image src={require("../Assets/arrow-left.png")} />
                </Row>
              </Link>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col md={6} className="btn-menu mb-4">
              <Row>
                <Col>Logout</Col>
              </Row>
            </Col>
          </Row>
        </Container>
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
            <Content/>
          </Col>
        </div>
      </section>
    </>
  );
};

export default Profile;
