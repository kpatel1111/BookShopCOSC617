
import { useState } from "react";
import "../LoginSignup.css";
import image from "./Images/book.jpg";
import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom';
import axios from 'axios';
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
        if (result.data === "The email address is already registered. Please input another email address.") {
          alert("The email address is already registered. Please input another email address.");
          setName("");
          setPhoneNumber("");
          setEmail("");
          setPassword("");
        }
        else {
          alert("The account creation process is completed. Please login to get access to the website.");
          navigate("/");
        }
      })
      .catch(error => console.log(error))
  };
  return (
    <div className="full-page" id="loginsignupfullpage">
      <div className="form-box" id="loginsignupformbox">
        <center>
          <h1 id="loginsignuph1">Account SignUp Form</h1>
          <img id="loginsignupimage" src={image} alt="" />
          <form id="loginsignupform" onSubmit={handleSubmit}>
            <p id="loginsignupparagraph"><input
              id="loginsignupinput"
              type="text"
              placeholder="Enter Name"
              value={name}
              required="required"
              onChange={(e) => setName(e.target.value)}
            /></p>
            <p id="loginsignupparagraph"><input
              id="loginsignupinput"
              type="tel"
              placeholder="Enter Phone Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phoneNumber}
              required="required"
              onChange={(e) => setPhoneNumber(e.target.value)}
            /></p>
            <p id="loginsignupparagraph"><input
              id="loginsignupinput"
              type="email"
              placeholder="Enter Email Address"
              value={email}
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            /></p>
            <p id="loginsignupparagraph">
              <input
                id="loginsignupinput"
                type="password"
                placeholder="Enter Account Password"
                value={password}
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
            <br></br>
            <Link to="/" style={{ marginTop: "50px", fontSize: "12px" }}>Already have an account, SignIn</Link>
            <p><button type="submit" id="loginsignupbutton" style={{ color: "white", backgroundColor: "green" }}>Register</button></p>
          </form>
        </center>
      </div>
    </div>
  );
};

export default Signup;
