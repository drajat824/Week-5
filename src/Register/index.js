import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import qs from "qs";
import { Image } from "react-bootstrap";
import "./style.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [laststName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  // const [onRefresh, setOnRefresh] = useState(false);
  // const [notRefresh, setNotRefresh] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const reqBody = {
      first_name: firstName,
      last_name: laststName,
      email: email,
      password: password,
      pin: pin,
    };

    const type = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    Axios.post(
      `${process.env.REACT_APP_URL_BACKEND}/api/v1/register`,
      qs.stringify(reqBody),
      type
    )

      .then((res) => {
        alert("data Berhasil di Input");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="bg-1 col-sm-12 col-lg-6 "
            style={{ background: "rgba(99, 121, 244, 1)" }}
          >
            <Container fluid>
              <div className="d-flex flex-column">
                <div className="p-2">
                  <p className="h3 text-logo">Zwallet</p>
                </div>
                <div className="p-2 d-sm-none d-md-block ">
                  <Image
                    src={require("../Assets/phone.png")}
                    className="img-phone"
                  />
                  {/* <Image src={require("../Assets/line.png")} className="img-line"/> */}
                </div>
                <div className="p-2 text-left">
                  <p>App that Covering Banking Needs.</p>
                  <p>
                    Zwallet is an application that focussing in banking needs
                    for all users in the world. Always updated and always
                    following world trends. 5000+ users registered in Zwallet
                    everyday with worldwide users coverage.
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

              <form onSubmit={(e) => onSubmit(e)} encType="multipart/form-data">
                <div className="p-2 d-flex justify-content-center">
                  <div className="d-flex flex-column">
                    {/* First Name:{" "}
                <input
                  type="text"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
                Last Name:{" "}
                <input
                  type="text"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
                Email:{" "}
                <input
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                Password:{" "}
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                /> */}

                    <div className="p-3">
                      <div className="input-login input-group">
                        <Image
                          src={require("../Assets/mail.png")}
                          className="img-mail"
                        />
                        <label>
                          <input
                            className="form-control border-0"
                            type="text"
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                            placeHolder="Input Name"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="input-login input-group">
                        <Image
                          src={require("../Assets/mail.png")}
                          className="img-mail"
                        />
                        <label>
                          <input
                            className="form-control border-0"
                            type="text"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeHolder="Input Email"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="input-login input-group">
                        <Image
                          src={require("../Assets/mail.png")}
                          className="img-mail"
                        />
                        <label>
                          <input
                            className="form-control border-0"
                            type="text"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            placeHolder="Input Password"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="input-login input-group">
                        <Image
                          src={require("../Assets/mail.png")}
                          className="img-mail"
                        />
                        <label>
                          <input
                            className="form-control border-0"
                            type="text"
                            required
                            onChange={(e) => setPin(e.target.value)}
                            placeHolder="Input Pin"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-2">
                  <div className="btn-login">
                    <button
                      className="btn btn-lg btn-block btn-login"
                      onClick={(e) => onSubmit(e)}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <div className="p-2 d-flex justify-content-center">
                <p className="text-signup">
                  Don’t have an account? <a href=""> Let’s Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
