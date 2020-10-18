import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logout } from "../../Utils";


import "./navigationStyle.css";

const Content = (props) => {
  return (
    <>
          <div className="navigation-color">
            <Container>
              <div className="d-flex align-items-start flex-column">
                <div className="mb-auto p-2">
                  <div className="d-flex align-items-start flex-column">
                    <div className="mb-auto p-2">
                      <div className="d-flex flex-column">
                        <div className="mb-5 mt-3">
                          <Image
                            className="mr-3"
                            src={require("../../Assets/db.png")}
                          />
                          <span className="text-menu">
                            <Link to="/">Dashboard</Link>
                          </span>
                        </div>

                        <div className="mb-5">
                          <Image
                            className="mr-3"
                            src={require("../../Assets/transfer.png")}
                          />
                          <span className="text-menu">
                            <Link to="/transfer">Transfer</Link>
                          </span>
                        </div>

                        <div className="mb-5">
                          <Image
                            className="mr-3"
                            src={require("../../Assets/topup.png")}
                          />
                          <span className="text-menu">
                            <Link to="/topup">Topup</Link>
                          </span>
                        </div>

                        <div className="margin-nav">
                          <Image
                            className="mr-3"
                            src={require("../../Assets/profile.png")}
                          />
                          <span className="text-menu">
                            <Link to="/profile">Profile</Link>
                          </span>
                        </div>
                        
                      </div>
                    </div>

                    <div className="mb-5 mt-3 ml-2">
                      <Image
                        className="mr-3"
                        src={require("../../Assets/logout.png")}
                      />
                      <span className="text-menu">
                      <Link onClick={()=> props.onLogout()} >Logout</Link>
                      </span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </Container>
          </div>
    </>
  )
}

  const Navigation = (props) => {

    let location = useLocation();
    let history = useHistory();
  
    const onLogout = ()=> {
      logout()
      history.replace('/login')
    }

    return (
      <Content location={location} onLogout={onLogout} />
    );
};

export default Navigation;
