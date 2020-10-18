import React from "react";
import "./App.css";
import { HeaderNav } from "./Components/Header";
import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Dashboard, Transfer, Topup, TransferInput, TransferConfirmation, 
TransferSuccess, Profile, ProfilePersonal, ProfilePassword, 
ProfileAddPhone, Pin, DashboardHistory,Login, Admin, Register, Landing, Forgot } from "./pages.js";
import  PrivateRoute from "./Components/Route/PrivateRoute";
import  PublicRoute  from "./Components/Route/PublicRoute";

document.body.style = "background: rgba(250, 252, 255, 1);";

function App() {

  return (
    <>
    <Router>
      <HeaderNav />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} exact/>
            <PrivateRoute path="/history" component={DashboardHistory} />
            <PrivateRoute exact path="/transfer" component={Transfer} exact />
            <PrivateRoute path="/transfer/input" component={TransferInput} />
            <PrivateRoute path="/transfer/confirmation" component={TransferConfirmation} />
            <PrivateRoute path="/transfer/success" component={TransferSuccess} />
            <PrivateRoute path="/topup" component={Topup} />
            <PrivateRoute exact path="/profile" component={Profile} exact />
            <PrivateRoute path="/profile/personal" component={ProfilePersonal} />
            <PrivateRoute path="/profile/password" component={ProfilePassword} />
            <PrivateRoute path="/profile/phone" component={ProfileAddPhone} />
            <PrivateRoute path="/profile/pin" component={Pin} />
            <PrivateRoute path="/admin" component={Admin} />
            <PublicRoute path="/register" restricted={true} component={Register} />
            <PublicRoute exact path="/login" restricted={true} component={Login} exact/>
            <PublicRoute path="/login/forgot" restricted={true} component={Forgot} />
            <PublicRoute path="/landing" restricted={true} component={Landing} />
          </Switch>
      <Footer/>
      </Router>
    </>
  );
  
}

export default App;
