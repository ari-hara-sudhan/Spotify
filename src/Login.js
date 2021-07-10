import React from 'react'
import "./Login.css"
import {   loginUrl } from './spotify'
function Login() {

    return (
        <div className="login">
            <img src="https://wallpaperaccess.com/full/1373271.jpg"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            
        </div>
    )
}

export default Login
