import React, {Component} from "react";
import { Container, Row, Col, Image} from "react-bootstrap";
import "./dashboardStyle.css";
import Axios from 'axios';

class dashboard extends Component {

  state = {
    data: [],
  }

  componentDidMount = () => {
    Axios.get("http://localhost:2000/profile/1")
    .then((res) => {
      this.setState({ data: res.data.data });
      console.log(res.data)
    })
  }

  render(){
  return (
    <>
      <Container>
            <Row className="balance-color mt-4">
              <Col>
                <Col>
                  <Col className="mt-2 mb-2">Balance</Col>
                  {this.state.data.map((data,index) => {
                     return (
                       <div> 
                  <Col className="text-bal balance-text">{data.balance}</Col>
                  <Col className="mt-2 mb-2">{data.phone}</Col>
                  </div>
                     )
                  })}
                </Col>
              </Col>
              <Col md={3} className="mt-5 mb-5">
                <Col>
                  <Col className="mb-3 btn-ballance">
                    <>
                      <Image
                        src={require("../Assets/transfer-btn.png")}/>
                      <span>Transfer</span>
                    </>
                  </Col>
                  <Col className="btn-ballance">
                    <>
                      <Image src={require("../Assets/topup-btn.png")} />
                      <span>Topup</span>
                    </>
                  </Col>
                </Col>
              </Col>
            </Row>
      </Container>
    </>
  )}
};

export default dashboard;
