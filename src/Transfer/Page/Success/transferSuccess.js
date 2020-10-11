import React, { useState } from "react";
import { Container, Row, Image } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import TransferConfirmation from "../Confirmation"
import Axios from 'axios'

const Transfer = (props) => {

  const[aboutId] = useState(props.location.state)
  const [data, SetData] = useState({data: [] });

  React.useEffect(() => {
    Axios.get(`http://localhost:2000/transfer/id/${aboutId}`)
      .then((res) => {
        SetData(res.data);
        console.log(res.data.data)
      })
      .catch((err) => console.log(err.message));
  }, );

  return (
    <>
    {data.data.map(item => ( 
      <Container className="transfer-color-success mt-4">
        <Row className="justify-content-center">
          <Image
            className="img-success mt-1"
            src={require("../../../Assets/transfer-success.png")}
          />
        </Row>
        <div className="d-flex flex-column">
          <div className="p-1">
            <div className="d-flex flex-column mt-3">

              <div className="p-1 transfer-color-sub mb-2">
                <div className="d-flex flex-column">
                  <div className="p-1">Amount</div>
                  <div className="p-1 text-style">{item.amount}</div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub mb-2">
                <div className="d-flex flex-column">
                  <div className="p-1">Balance Left</div>
                  <div className="p-1 text-style">{item.balance}</div>
                </div>
              </div>

              <div className="p-1 transfer-color-sub  mb-2">
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
          </div>

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
                      <li className="text-style">{item.first_name} {item.last_name}</li>
                      <li>{item.phone}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-1 mt-2">
              <Row className="d-flex justify-content-end align-items-end mb-3 mr-4">
                
                  <button className="btn-share mr-2">
                    <Image src={require("../../../Assets/share.png")} />
                  </button>
                
                  <button className="btn-download-success mr-2">
                    <Image src={require("../../../Assets/download.png")} />
                    <span className="text-download">Download PDF</span>
                  </button>
                
                  <a href="dashboard.html">
                    <button className="btn-continue-success text-back-success">Back To Home</button>
                  </a>                
              </Row>            
          </div>

        </div>
      </Container>
      ))}
    </>
  );
};

export default Transfer;
