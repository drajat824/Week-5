import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import qs from 'qs'
import Axios from "axios";
import { Navigation } from "../../../Components/Navigation";
import jwt from "jsonwebtoken";


const Content = (props) => {

  const TOKEN_KEY = "Auth";
  let role_id = "";
  let myId = "";
  
  let token = localStorage.getItem(TOKEN_KEY);
  let salt = "ARKADMY";
  
  jwt.verify(token, salt, (err, decode) => {
    if(!err){
      myId = decode.id
    } else {
      console.log(err)
    }
  });

  const [pin, setPin] = useState("")

  const onSubmit = () => {

    Axios({
    method: 'patch', 
    url: `${process.env.REACT_APP_URL_BACKEND}/api/v1/profile/id/${myId}`,
    data: qs.stringify({
      pin: pin
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'auth' : token
    }
  })
    .then((res) => {
      alert('data Berhasil di ubah')
    })
    .catch((err) => console.log(err.message)); 
  }

  return (
    <>
      <Container className="phone-color-pin mt-4">
        <div className="d-flex flex-column pb-5">
          <div className="p-1 mb-3">
            <div className="d-flex flex-column">
              <div className="p-2 text-style mb-3">Change Pin</div>
              <p className="ml-1">
                Enter your current 6 digits Zwallet PIN below to <br /> continue
                to the next steps.
              </p>
            </div>
          </div>

          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1">

                <Container className="margin-menu pb-3">
                  <Container className="d-flex justify-content-md-center">
                  <Row className=" mt-5">   
                    <Col>
                      <input value={pin.pin1} onChange={(e) => setPin(e.target.value)} className=" input-pin" type="text" />
                    </Col>

                    {/* <Col md={1}>
                      <input className=" input-pin" type="text" />
                    </Col>

                    <Col md={1}>
                      <input className=" input-pin" type="text" />
                    </Col>

                    <Col md={1}>
                      <input className=" input-pin" type="text" />
                    </Col>

                    <Col md={1}>
                      <input className=" input-pin" type="text" />
                    </Col> */}                  
                  </Row>
                  </Container>
                  <Link>
                  <Row onClick={() => onSubmit()} className="justify-content-md-center mt-5">
                    <Col md={6} className="btn-menu-password">
                      <p className="mt-2 text-style">Continue</p>
                    </Col>
                  </Row>
                  </Link>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

const ProfilePin = (props) => {
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

export default ProfilePin;
