import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import qs from 'qs'

const ProfilePassword = () => {

const [password, setPassword] = useState("")

  const onSubmit = () => {

    Axios({
    method: 'patch', 
    url: 'http://localhost:2000/profile/1',
    data: qs.stringify({
      password: password
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
      <Container className="transfer-color-confirmation mt-4">
        <div className="d-flex flex-column pb-5">
          <div className="p-1 mb-3">
            <div className="d-flex flex-column">
              <div className="p-2 text-style mb-3">Change Password</div>
              <p className="ml-1">
                You must enter your current password and then <br /> type your
                new password twice.
              </p>
            </div>
          </div>

          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1">
                <Container className="margin-menu pb-3">

                <Row className="d-flex justify-content-center mb-5">
                    <div className="d-flex justify-content-center">
                      <Image src={require("../../../Assets/lock.png")}/>
                      <input className="form border-0 input-pw ml-2"placeholder="Current password"/>
                      <section>
                      <Image src={require("../../../Assets/eye.png")}/>
                      </section>
                    </div>
                  </Row>

                  <Row className="d-flex justify-content-center mb-5">
                    <div className="d-flex justify-content-center">
                      <Image src={require("../../../Assets/lock.png")}/>
                      <input onChange={(e) => setPassword(e.target.value)} className="form border-0 input-pw ml-2"placeholder="New password"/>
                      <section>
                      <Image src={require("../../../Assets/eye.png")}/>
                      </section>
                    </div>
                  </Row>

                  <Row className="d-flex justify-content-center mb-5">
                    <div className="d-flex justify-content-center">
                      <Image src={require("../../../Assets/lock.png")}/>
                      <input className="form border-0 input-pw ml-2"placeholder="Repeat your password"/>
                      <section>
                      <Image src={require("../../../Assets/eye.png")}/>
                      </section>
                    </div>
                  </Row>
                  <Link>
                  <Row onClick={() => onSubmit()} className="justify-content-md-center mt-5">
                    <Col md={6} className="btn-menu-password">
                      <p className="mt-2 text-style">Change Password</p>
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

export default ProfilePassword;
