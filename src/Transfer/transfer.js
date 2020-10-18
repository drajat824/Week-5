import React, { setState, useState } from "react";
import { Col, Container, Form, Image, Control, InputGroup, Text, FormControl, Prepend } from "react-bootstrap";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import { Navigation } from "../Components/Navigation";
import jwt from "jsonwebtoken";
import Loading from "../Components/Loading";

const Content = () => {


  const TOKEN_KEY = "Auth";
  let token = localStorage.getItem(TOKEN_KEY);
  let myId = "";
  let salt = "ARKADMY";

  let name = useLocation().search.slice(6) || null
  // let name2 = useLocation().search.slice(6) || null

  const [data, SetData] = useState("");
  
  jwt.verify(token, salt, (err, decode) => {
    if(!err){
      myId = decode.id
    } else {
      console.log(err)
    }
  });

  const headers = {headers: {'auth' : token}}
  

  React.useEffect(() => {

    if(name){
    Axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/v1/profile/search?name=${name}`, headers)

      .then((res) => SetData(res.data.data))
      .catch((err) => console.log(err));
    } else {
      Axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/v1/profile?page=1&limit=4`, headers)

      .then((res) => SetData(res.data.data))
      .catch((err) => console.log(err));
    }

  }, []);

  console.log(data)

    return (
      <>
        <Container className="transfer-color">
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

              <FormControl className=" search-input" placeholder="Search receiver here" name='name'/>

               </InputGroup>
            </Form.Group>
            </Form>
            </div>

            { !data? (<Loading />) : (data.map(item => ( 

                <div className="p-2">
                  <Link path="/input">
                    <div className="transfer-color-sub nav-profile form-inline my-3 my-lg-0 pl-3 pt-3 pb-3">
                      <Image
                        className="mr-sm-2"
                        src={require("../Assets/picture.png")}
                      />
                      <ul className="navbar-nav mr-sm-0 text-color">
                       <li>{item.first_name} {item.last_name}</li>
                        <li>{item.phone ? (item.phone) : ("+62")}</li>
                      </ul>
                    </div>
                  </Link>
                </div>

            )))}
          
        </Container>
      </>
    );
  
}

const transfer = (props) => {
  return (
    <>
      <section class="my-5 container">
        <div class="row">
          <Col lg={3}>
            <Navigation {...props} />
          </Col>
          <Col>
            <Content />
          </Col>
        </div>
      </section>
    </>
  );
};

export default transfer
