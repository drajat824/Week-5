import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";

const TOKEN_KEY = "Auth";
let role_id = "";

let token = localStorage.getItem(TOKEN_KEY);
let salt = "ARKADMY";

jwt.verify(token, salt, (err, decode) => {
  if (!err) {
    return (role_id = decode.role_id);
  } else {
    console.log(err);
  }
});

const Admin = () => {
  if (role_id == 21) {
    return <div>ini halaman admin</div>;
  } else return <Route render={(props) => <Redirect to="/login" />} />;
};

export default Admin;
