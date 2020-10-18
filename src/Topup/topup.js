import React, { Component, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
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

  const [data, SetData] =   useState({data: [] });

    React.useEffect(() => {
      Axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/v1/topup`, headers)
        .then((res) => SetData(res.data))
        .catch((err) => console.log(err));
    }, []);

  return (
    <>
      <Container className="topup-color">
        <p className="ml-3 pt-4">How To Top Up</p>
        {data.data.map(item => (
        <Col className="pb-1">
          <Col className="topup-color-sub-topup mb-2">
            <Row className="align-items-center">
            <Col md={1}>{item.number}</Col>
            <Col>{item.step}</Col>
            </Row>
          </Col>
        </Col>
        ))}
      </Container>
    </>
  );
};

const topup = (props) => {
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

export default topup;
