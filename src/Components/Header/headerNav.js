import React, { Component } from "react";
import { Navbar, Nav, Image, Media } from "react-bootstrap";
import Axios from "axios";
import "./headerStyle.css";
import { withRouter } from "react-router";
import jwt from "jsonwebtoken";

const HeaderNav = (props) => {

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

    const [data, SetData] =   React.useState("");

    React.useEffect(() => {
      Axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/v1/profile/id/${myId}`, headers)
        .then((res) => SetData(res.data.data[0]))
        .catch((err) => console.log(err));
    }, []);

    if(props.location.pathname === "/login" || props.location.pathname === "/register" 
    || props.location.pathname === "/landing" || props.location.pathname === "/login/forgot"){
    return false
    } else {

  return (
    <>
      <Navbar className="headerStyle">
        <Navbar.Brand className="pl-5 ">
          <div className="text-logo">Zwallet</div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="borderless">
            <Nav className="nav-profile form-inline my-3 my-lg-0 pr-5">
              <Image src={require("../../Assets/picture.png")} />
                  <Media.Body className="ml-2 mr-2">
                    <p>
                      {data.first_name} {data.last_name}
                    </p>
                    <p>{data.phone? (data.phone) : ("+62")}</p>
                  </Media.Body>
              <Image
                className="mb-3 pl-4"
                src={require("../../Assets/bell.png")}
              />
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
  }
};

export default withRouter(HeaderNav);
