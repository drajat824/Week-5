import React, { useState } from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Axios from "axios";

const Profile = (props) => {

  const [data, SetData] = useState({data: [] });
  const [onRefresh, setOnRefresh] = useState(false);
  const [notRefresh, setNotRefresh] = useState(false);

  React.useEffect(() => {
    Axios.get("http://localhost:2000/profile/1")
      .then((res) => {
        SetData(res.data);
        console.log(res.data.data)
      })
      .catch((err) => console.log(err.message));
  }, [onRefresh]);

  return (
    <>
      <Container className="profile-color mt-4">
        <Container className="pt-4">
          <Row className="justify-content-center">
          <ul className="navbar-nav mr-sm-0">
            <li><Image src={require("../Assets/picture.png")} /></li>
            <Link to="#">
            <li  className="text-edit" >Edit</li>
            </Link>
            </ul>
          </Row>
          {data.data.map(item => ( 
          <Row className="justify-content-center">
              <ul className="navbar-nav mr-sm-0">
                <li>{item.first_name} {item.last_name}</li>
          <li className="text-number">{item.phone}</li>
              </ul>
          </Row>
          ))}
        </Container>
        <Container className="margin-menu pb-3">

          <Row className="justify-content-md-center">
            <Col md={6} className="btn-menu mb-4">
              <Link to="/personal">
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
              <Link to="/password">
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
              <Link to="/pin">
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

export default Profile;
