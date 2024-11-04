
import { useState } from "react";
import "../LoginSignup.css";
import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom';
import axios from 'axios';
import login from "./Login.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/register", { name, phoneNumber, email, password })
      .then(result => {
        console.log(result);
        navigate("/");
      })
      .catch(error => console.log(error))

  };
  return (
    <div className="full-page">
      <div className="form-box">
        <center>
          <h1>Account SignUp Form</h1>
          <form onSubmit={handleSubmit}>
            <p><input
              id="input1"
              type="text"
              placeholder="Enter Name"
              value={name}
              required="required"
              onChange={(e) => setName(e.target.value)}
            /></p>
            <p><input
              id="input1"
              type="tel"
              placeholder="Enter Phone Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phoneNumber}
              required="required"
              onChange={(e) => setPhoneNumber(e.target.value)}
            /></p>
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
            <Link to="/" style={{marginTop:"50px", fontSize:"12px"}}>Already have an account, SignIn</Link>
            <p><button type="submit" style={{ color: "white", backgroundColor: "green" }}>Register</button></p>
          </form>
        </center>
      </div>

    </div>
  );
};

export default Signup;
