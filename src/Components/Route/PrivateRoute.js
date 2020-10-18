import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from '../../Utils'
import jwt from "jsonwebtoken"

// const TOKEN_KEY = "Auth";
// let role_id = ""

// let token = localStorage.getItem(TOKEN_KEY)
// let salt = "ARKADMY"

// jwt.verify(token, salt, (err, decode) => {
//     if(!err){
//         return role_id = decode.role_id
//     } else {
//         console.log(err)
//     }
// })

const PrivateRoute = ({ component: Component, ...rest })=> {

    return(
        <Route {...rest} 
            render={(props)=> (
                isLogin() ? (<Component {...props} />):(<Redirect to='/login' />)
            )}
        />
    )


}

export default PrivateRoute