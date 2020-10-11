import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Image,
  Media,
  
} from "react-bootstrap";
import Axios from "axios";
import "./headerStyle.css";

class HeaderNav extends Component {
  state = {
    data: [],
  }

  componentDidMount = () => {
    Axios.get("http://localhost:2000/profile/1")
    .then((res) => {
      this.setState({ data: res.data.data })
      console.log(res.data)
    })
  }
  render(){

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
              {this.state.data.map((data,index) => {
                     return (
              <Media.Body className='ml-2 mr-2' >
                <p>{data.first_name} {data.last_name}</p>
                <p>{data.phone}</p>
              </Media.Body>
                     )}
              )}
              <Image className="mb-3 pl-4" src={require("../../Assets/bell.png")} />
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
  }
};

export default HeaderNav;
