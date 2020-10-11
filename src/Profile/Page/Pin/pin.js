import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import qs from 'qs'
import Axios from "axios";

const Pin = (props) => {

  const [pin, setPin] = useState("")
  // const [pin2]= useState("")
  

  const onSubmit = () => {

    Axios({
    method: 'patch', 
    url: 'http://localhost:2000/profile/1',
    data: qs.stringify({
      pin: pin
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
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

export default Pin;
