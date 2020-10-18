import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./style.css";
import { Route, Redirect, Link } from 'react-router-dom'
import Axios from "axios";
import qs from 'qs'
import { createPortal } from "react-dom";

const LoginPage = (props) => {

    const TOKEN_KEY = "Auth";
    // let url = qs.parse(window.location.search.replace("?" , ""))
    // let em = (url).email
    // let pw = (url).password

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const loading = false
    
  const Login = (e) => {
    
  // if(localStorage.getItem(TOKEN_KEY)) {
  //   window.location.reload(false)
  //   e.preventDefault()
  // }


    // setTimeout(function(){window.location = $this.attr('href'); }, 4000);

    Axios({
      method: "post",
      url: `${process.env.REACT_APP_URL_BACKEND}/api/v1/login`,
      data: qs.stringify({
        email: email,
        password: password
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    })
      .then((res) => (
      localStorage.setItem(TOKEN_KEY, res.data.token)),
      e.preventDefault(),
      )
      .catch((err) => console.log(err.message))

      function load (){
        localStorage.getItem(TOKEN_KEY) ? window.location.reload(false) : alert('Email / Passeord Invalid')
      }

      window.setTimeout(load ,2000)
      
  }

  return (
    <>
      <div className="container-fluid">

        <div className="row">
        
       
          <div className="bg-1 col-sm-12 col-lg-6 " style={{background: "rgba(99, 121, 244, 1)"}}>
          <Container fluid > 
            <div className="d-flex flex-column">
              <div className="p-2">
                <p className="h3 text-logo">
                  Zwallet
                </p>
              </div>
              <div className="p-2 d-sm-none d-md-block ">
                <Image src={require("../Assets/phone.png")} className="img-phone"/>
                {/* <Image src={require("../Assets/line.png")} className="img-line"/> */}
              </div>
              <div className="p-2 text-left">
                <p>App that Covering Banking Needs.</p>
                <p>
                  Zwallet is an application that focussing in banking needs for
                  all users in the world. Always updated and always following
                  world trends. 5000+ users registered in Zwallet everyday with
                  worldwide users coverage.
                </p>
              </div>
            </div>
            </Container>
          </div>
          

          <div className="col">
            <div className="d-flex flex-column">
              <div className="p-2">
                <h4 className="text-description2">
                  {" "}
                  Start Accessing Banking Needs <br /> With All Devices and All
                  Platforms <br /> With 30.000+ Users
                </h4>
              </div>
              <div className="p-2">
                <p className="text-description3">
                  Transfering money is eassier than ever, you can access <br />
                  Zwallet wherever you are. Desktop, laptop, mobile phone?{" "}
                  <br /> we cover all of that for you!
                </p>
              </div>

              <form className="margin" onSubmit={(e) => Login(e)} encType="multipart/form-data">

                <div className="p-2 d-flex justify-content-center">
                  <div className="d-flex flex-column">

                    <div className="p-3">
                      <div className="input-login input-group">
                        <Image src={require("../Assets/mail.png")} className="img-mail"/>
                        <label>
                          <input type="text" className="form-control border-0 InputEmail1"
										placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                      </div>
                    </div>

                    <div className="p-3">

                      <div className="input-login input-group">
                        <Image src={require("../Assets/lock.png")} className="img-mail" />
                        <label>
                          <input placeholder="Enter your password" type="text" className="form-control border-0" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <section>
                          <Image src={require("../Assets/eye.png")} />
                        </section>
                      </div>

                      <a href="/login/forgot">
                      <div className="d-flex justify-content-end">
                        Forgot Password?
                      </div>
                      </a>

                    </div>
                  </div>
                </div>

              <div className="p-2">
                <div className="btn-login"> 
                  <button type="submit" className="btn btn-lg btn-block btn-login">Login</button>
                  </div>
              </div>

              </form>

              <div className="p-2 d-flex justify-content-center">
                <p className="text-signup">
                  Don’t have an account? <a href="/register"> Let’s Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default LoginPage;
