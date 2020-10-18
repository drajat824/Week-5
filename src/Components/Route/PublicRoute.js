import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from '../../Utils'
import jwt from "jsonwebtoken";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

  const TOKEN_KEY = "Auth";
  let roleId = "";
  let myId = "";
  
  let token = localStorage.getItem(TOKEN_KEY);
  let salt = "ARKADMY";
  
  const headers = {headers: {'auth' : token}}
  
  jwt.verify(token, salt, (err, decode) => {
    if(!err){
      roleId = decode.role_id
    } else {
      console.log(err)
    }
  });

    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin() && restricted ? (
            roleId == 21 ?  <Redirect to="/admin" /> :
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  };

  export default PublicRoute;