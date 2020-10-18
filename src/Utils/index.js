import Axios from "axios";
import {React, useState} from "axios";
import qs from "qs";
import { useLocation } from "react-router-dom";

const TOKEN_KEY = "Auth";

// export let Login = () => {

//         // Axios({
//         //   method: "post",
//         //   url: `${process.env.REACT_APP_URL_BACKEND}/api/v1/login`,
//         //   data: qs.stringify({
//         //     email: em,
//         //     password: pw,
//         //   }),
//         //   headers: {
//         //     "content-type": "application/x-www-form-urlencoded;charset=utf-8",
//         //   },
//         // })
//         //   .then((res) => localStorage.setItem(TOKEN_KEY, res.data.token))
//         //   .catch((err) => console.log(err.message));

//         //   localStorage.setItem(TOKEN_KEY, res.data.token)

// };

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  } else {
    return false;
  }
};

// let em = http://localhost:3000/login?email
// console.log(qs.parse(window.location.href));
// console.log(pw);
// console.log(em);
// console.log(pw);

// process.env.REACT_APP_URL_BACKEND/login
