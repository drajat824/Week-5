import React, { Component } from "react";
import { Container, Form, Image, Control, InputGroup, Text, FormControl, Prepend } from "react-bootstrap";
import "./style.css";
import { Link } from "react-router-dom";
import Axios from "axios";

class transfer extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     aboutId: 2
  //   }
  // }

  state = {
    data: [],
    name: this.props.location.search || null,
    name2: this.props.location.search.slice(6) || null,
    
  };
  
  componentDidMount() {
    Axios.get(this.state.name
      ?`http://localhost:2000/transfer/search${this.state.name}`
      :`http://localhost:2000/transfer/`

  
    ).then((res) => {
      this.setState({ data: res.data.data });
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.message);
    });
    
  }
  render() {

    return (
      <>
        <Container className="transfer-color mt-4">
          <div className="p-2">Search Receiver</div>

        
          <div className="p-2">
          <Form method="get">
            <Form.Group>
            <InputGroup>
            <InputGroup.Prepend>         
                <InputGroup.Text>
                  <Image src={require("../Assets/search.png")} />
                </InputGroup.Text>
                </InputGroup.Prepend>
              <FormControl value={this.state.name2} onChange={(e) => this.setState({ name2: e.target.value })}
              className=" search-input" placeholder="Search receiver here" name='name'/>
               </InputGroup>
            </Form.Group>
            </Form>
            </div>
          {this.state.data.map((item, index) => {
            return (

                <div className="p-2">
                  <Link to = {
                    {pathname: "/input", state: item.id}}>
                    <div className="transfer-color-sub nav-profile form-inline my-3 my-lg-0 pl-3 pt-3 pb-3">
                      <Image
                        className="mr-sm-2"
                        src={require("../Assets/picture.png")}
                      />
                      <ul className="navbar-nav mr-sm-0 text-color">
                        <li>{item.first_name} {item.last_name}</li>
                        <li>{item.phone}</li>
                      </ul>
                    </div>
                  </Link>
                </div>

            );
          })}
          
        </Container>
      </>
    );
  }
}

export default transfer
