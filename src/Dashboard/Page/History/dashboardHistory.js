import React, { Component } from "react";
import { Container, Row, Col, Nav, Image, Media } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Axios from "axios";

class dashboardHistory extends Component {
  state = {
    data: [],
  }

  componentDidMount = () => {
    Axios.get("http://localhost:2000/transfer")
    .then((res) => {
      this.setState({ data: res.data.data });
      console.log(res.data)
    })
  }

  render() {
    return (
      <Container className="dashboard-color-history mt-4">
        <Container className="pt-3">
        <Row>
            <Col>Transaction History</Col>
          </Row>

          <Row>
          <Col>This Week</Col>
          </Row>

        </Container>
        {this.state.data.map((data,index) => {
                     return (
        <Container key={data.id} className="pt-3">
          <Row>
            <Col>
              <Nav className="nav-profile form-inline my-3 my-lg-0 pr-5">
                <Image
                  className="mr-sm-2"
                  src={require("../../../Assets/picture.png")}
                />
                <Media.Body className="ml-2 mr-2">
                  <ul className="navbar-nav mr-sm-0">
                     <li className="text-style">{data.first_name}{data.lasst_name}</li>
                    <li>Transfer</li>
                  </ul>
                </Media.Body>
              </Nav>
            </Col>
            <p className="mr-2">{data.amount}</p>
          </Row>
        </Container>
                     )}
        )}

      </Container>
    );
  }
}

export default dashboardHistory;
