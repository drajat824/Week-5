import React, { Component } from "react";
import {
  Container,
  Row,
  Image,
  Button,
  Modal,
  Col,
  ModalDialog,
} from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import TransferInput from "../Input/transferInput.js";

class TransferConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.aboutId = this.props.location.state;
  }

  componentDidMount() {
    Axios.get(`http://localhost:2000/transfer/id/${this.aboutId}`)
    .then((res) => {
        this.setState({ data: res.data.data });
      }
    );

    Axios.get(`http://localhost:2000/profile/1`)
    .then((res) => {
      this.setState({ data2: res.data.data });
    });
  }

  state = {
    data: [],
    data2: [],
  };

  render() {
    const closeModal = () => {
      this.setState({ show: false });
    };
    return (
      <>
        
            <Container className="transfer-color-confirmation mt-4">
              <div className="d-flex flex-column">
              {this.state.data.map((item, index) => {
                return ( 
                <div className="p-1">
                  <div className="d-flex flex-column">
                    <div className="p-2 text-style">Transfer To</div>
                    <div className="p-2 transfer-color-sub">
                      <div className="p-1 tr-box">
                        <div className="nav-profile form-inline my-3 my-lg-0">
                          <Image
                            className="mr-sm-1"
                            src={require("../../../Assets/picture.png")}
                          />
                          <ul className="navbar-nav mr-sm-0 ml-2">
                            <li className="text-style">{item.first_name}</li>
                            <li>{item.phone}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
                <div className="p-1">
                  <div className="d-flex flex-column">
                    <div className="p-1 text-style">Details</div>

              {this.state.data.map((item, index) => {
                return ( 

                    <div className="p-1 transfer-color-sub mb-3">
                      <div className="d-flex flex-column">
                        <div className="p-1">Amount</div>
                        <div className="p-1 text-style">{item.amount}</div>
                      </div>
                    </div>

                )})}
                {this.state.data2.map((item, index) => {
                return ( 
                    <div className="p-1 transfer-color-sub  mb-3">
                      <div className="d-flex flex-column">
                        <div className="p-1">Balance Left</div>
                        <div className="p-1 text-style">{item.balance}</div>
                      </div>
                    </div>
                )})}

{this.state.data.map((item, index) => {
                return ( 
                <div>
                    <div className="p-1 transfer-color-sub  mb-3">
                      <div className="d-flex flex-column">
                        <div className="p-1">Date & Time</div>
                        <div className="p-1 text-style">{item.date}</div>
                      </div>
                    </div>
                    <div className="p-1 transfer-color-sub ">
                      <div className="d-flex flex-column">
                        <div className="p-1">Notes</div>
                        <div className="p-1 text-style">{item.notes}</div>
                      </div>
                    </div>
                  </div>
)})}
                </div>
                  <Container className="d-flex justify-content-end">
                    <Row>
                      <Button onClick={() => this.setState({ show: true })}>
                        Continue
                      </Button>
                    </Row>
                  </Container>
                </div>
              </div>
            </Container>
          
        <Modal show={this.state.show} onHide={() => closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title>Enter PIN to Transfer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Enter your 6 digits PIN for confirmation to <br /> continue
              transferring money.{" "}
            </p>
            <Container>
              <Row className="justify-content-center">
                <Col>
                  <input
                    className="form-control input-modal"
                    type="text"
                    placeholder="_"
                  />
                </Col>

                <Col>
                  <input
                    className="form-control input-modal"
                    type="text"
                    placeholder="_"
                  />
                </Col>

                <Col>
                  <input
                    className="form-control input-modal"
                    type="text"
                    placeholder="_"
                  />
                </Col>

                <Col>
                  <input
                    className="form-control input-modal"
                    type="text"
                    placeholder="_"
                  />
                </Col>

                <Col>
                  <input
                    className="form-control input-modal"
                    type="text"
                    placeholder="_"
                  />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            {this.state.data.map((item, index) => {
              return (
                <Link to={{ pathname: "/success", state: item.id }}>
                  <Button variant="primary" onClick={() => closeModal()}>
                    Save Changes
                  </Button>
                </Link>
              );
            })}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TransferConfirmation;
