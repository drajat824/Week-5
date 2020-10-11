import React from "react";
import "./App.css";
import { HeaderNav } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Dashboard, Transfer, Topup, TransferInput, TransferConfirmation, 
TransferSuccess, Profile, ProfilePersonal, ProfilePassword, ProfileAddPhone, Pin, SubDashboard, DashboardHistory } from "./pages.js";
document.body.style = "background: rgba(250, 252, 255, 1);";

function App() {
  return (
    <>
    <Router>
      <HeaderNav />
      <Container>
        <Row>
          <Col md={3}>
            <Navigation />
          </Col>
          <Switch>
          <Col>
            <Route exact path="/" render={(props) => <Dashboard {...props} />} />
            <Route exact path="/" render={(props) => <SubDashboard {...props} />}/>
            <Route path="/history" render={(props) => <DashboardHistory {...props} />}/>
            <Route path="/transfer" render={(props) => <Transfer {...props} />}/>
            <Route path="/input" render={(props) => <TransferInput {...props} />}/>
            <Route path="/confirmation" render={(props) => <TransferConfirmation {...props} />}/>
            <Route path="/success" render={(props) => <TransferSuccess {...props} />}/>
            <Route path="/topup" render={(props) => <Topup {...props} />}/>
            <Route path="/profile" render={(props) => <Profile {...props} />}/>
            <Route path="/personal" render={(props) => <ProfilePersonal {...props} />}/>
            <Route path="/password" render={(props) => <ProfilePassword {...props} />}/>
            <Route path="/phone" render={(props) => <ProfileAddPhone {...props} />}/>
            <Route path="/pin" render={(props) => <Pin {...props} />}/>
          </Col>
          </Switch>
        </Row>
      </Container>
      <Footer />
      </Router>
    </>
  );
  
}

export default App;
