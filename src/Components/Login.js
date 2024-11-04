
import { useState, useEffect } from "react";
import "../LoginSignup.css";
import { BrowserRouter, Route, Routes, Router, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { set } from "mongoose";
import Signup from "./Signup.js";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "Login Successful") {
                    alert("Login Successful");
                    navigate("/hop", { state: email })
                }
                if (result.data === "Incorrect Password entered" || result.data === "No user record found") {
                    alert("Incorrect email or password is entered. Please enter again.");
                    setEmail("");
                    setPassword("");
                }
            })
            .catch(error => console.log(error));


    };

    return (
         <div class="full-page">
            <div class="form-box">
                <center>
                    <h1>Account Login Form</h1>
                    <form onSubmit={handleSubmit}>

                        <p><input
                            id="input1"
                            type="email"
                            placeholder="Enter Email Address"
                            value={email}
                            required="required"
                            onChange={(e) => setEmail(e.target.value)}
                        /></p>
                        <p>
                            <input
                                id="input1"
                                type="password"
                                placeholder="Enter Account Password"
                                value={password}
                                required="required"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </p>
                        <br></br>
                        <Link to="/signup" style={{fontSize:"12px"}}>Do not have an account, SignUp</Link>
                        <p><button type="submit" style={{ color: 'white', backgroundColor: "green"}}>Login In</button></p>
                    </form>
                </center>
            </div>

        </div>
    );
};

export default Login;