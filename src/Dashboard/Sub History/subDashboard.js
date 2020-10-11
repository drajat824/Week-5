import React, {Component} from "react";
import { Container, Row, Col, Image, Nav, Media } from "react-bootstrap";
import"./dashboardStyle.css";
import { Link } from "react-router-dom";
import Axios from 'axios';
// import "../../chart.js"

class dashboardSub extends Component {
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

  render(){
    return (
<Container>
  <Row className="mt-3">
    <Col className="dashboard-color-sub mr-2">
                <Col >
                  <div className="d-flex flex-column">
                    <div className="p-2">
                      <div className="container">
                        <div className="row justify-content-around">
                          <Col>
                            <Image  src={require("../../Assets/arrow-up.png")} />
                            <p>Income</p>
                            <p>Rp.2.120.000</p>
                          </Col>
                          <Col>
                          <Image  src={require("../../Assets/arrow-down.png")} />
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
                </Col>
    </Col>
    <Col md={6} className="dashboard-color-sub">
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
        {this.state.data.map((data,index) => {
                     return (
          <Container className="mb-3">
            <Row>
              <Col>
                <Nav className="nav-profile form-inline my-3 my-lg-0 pr-5">
                  <Image
                    className="mr-sm-2"
                    src={require("../../Assets/picture.png")}
                  />
                  <Media.Body className="ml-2 mr-2">
                    <ul className="navbar-nav mr-sm-0">
                     <li className="text-style">{data.first_name} {data.last_name}</li>
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
        </div>
      </div>
    </Col>
  </Row>
</Container>
    )}
}

export default dashboardSub;
