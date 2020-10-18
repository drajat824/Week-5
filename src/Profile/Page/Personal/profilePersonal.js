import { Container, Row, Col} from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import { Navigation } from "../../../Components/Navigation";
import jwt from "jsonwebtoken";

const Content = (props) => {

const TOKEN_KEY = "Auth";
let token = localStorage.getItem(TOKEN_KEY);
let salt = "ARKADMY";
const headers = {headers: {'auth' : token}}
let myId = "";

const [data, SetData] = useState({data: [] });

  jwt.verify(token, salt, (err, decode) => {
    if(!err){
      myId = decode.id
    } else {
      console.log(err)
    }
  });

  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/v1/profile/id/${myId}`, headers)
      .then((res) => {
        SetData(res.data);
        console.log(res.data.data)
      })
      .catch((err) => console.log(err.message));
  });

  return (
    <>
    {data.data.map(item => ( 

   
      <Container className="transfer-color-confirmation mt-4">
        <div className="d-flex flex-column pb-5">
          <div className="p-1 mb-3">
            <div className="d-flex flex-column">
              <div className="p-2 text-style mb-3">Personal Information</div>
              <p className="ml-1">
                We got your personal information from the sign up <br />{" "}
                proccess. If you want to make changes on <br /> your
                information, contact our support.
              </p>
            </div>
          </div>

          <div className="p-1">
            <div className="d-flex flex-column">
              <div className="p-1 text-style"></div>

              <div className="p-1 transfer-color-sub mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">First Name</div>
                  <div className="p-1 text-style">{item.first_name}</div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub  mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">Last Name</div>
                  <div className="p-1 text-style">{item.last_name}</div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub  mb-3">
                <div className="d-flex flex-column">
                  <div className="p-1">Verifed E-mail</div>
                  <div className="p-1 text-style">{item.email}</div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub ">
                  <Row>
                    <Col md={10}>
                      <div className="d-flex flex-column">
                        <div className="p-1">Phone Number</div>
                        <div className="p-1 text-style">
                        {item.phone}
                        </div>
                      </div>
                    </Col>
                    <Link to="/phone">
                    <Col>Manage</Col>
                    </Link>
                  </Row>
              </div>

            </div>
          </div>
        </div>
      </Container>
       ))}
    </>
  );
};

const ProfilePersonal = (props) => {
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

export default ProfilePersonal;
