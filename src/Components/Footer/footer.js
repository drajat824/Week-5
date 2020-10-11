import React from "react";
import { Card } from "react-bootstrap";
import "./footerStyle.css";

const footer = (props) => {
  return (
        <Card.Body className="footer-color">
          <div className="row ml-5">
            <div className="col-lg-5 col-sm-6 text"> 2020 Zwallet. All right reserved.</div>
            <div className="col-lg-4 col-sm-3 text">+62 5637 8882 9901</div>
            <div className="col-lg-3 col-sm-3 text">contact@zwallet.com</div>
          </div>
        </Card.Body>

  );
};

export default footer;
