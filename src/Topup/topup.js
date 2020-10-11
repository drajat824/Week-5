import React, {Component} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Axios from 'axios';

class topup extends Component {

  state = {
    data: [],
  }

  componentDidMount = () => {
    Axios.get("http://localhost:2000/topup")
    .then((res) => {
      this.setState({ data: res.data.data });
      console.log(res.data)
    })
  }
render(){
  return (
    <>
      <Container className="topup-color mt-4" >
      <p className="ml-3 pt-4">How To Top Up</p>
      {this.state.data.map((data,index) => {
        return (
          <Col className="pb-1">
            <Col className="topup-color-sub-topup mb-2">
              <Row className="align-items-center">
                <Col md={1}>{data.number}</Col>
                <Col>{data.step}</Col>
              </Row>
            </Col>
          </Col>
        )
      })}
      </Container>
    </>
  );
}
}

export default topup;
