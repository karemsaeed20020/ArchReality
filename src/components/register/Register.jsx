import React, { useState } from "react";
import "./register.css";
import Frame1 from "../../assets/frame-13@2x.png";
import Frame2 from "../../assets/frame-14@2x.png";
import Vector1 from "../../assets/vector-328@2x.png";
import Vector2 from "../../assets/vector-1@2x.png";
import Vector3 from "../../assets/vector-2@2x.png";
import Rectangle1 from "../../assets/rectangle-831@2x.png";
import Hide1 from "../../assets/gridiconsnotvisible@2x.png";
import Visible from "../../assets/gridiconsvisible@2x.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {motion} from 'framer-motion'

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");

    const apiEndpoint = "https://arch-reality.onrender.com/api/auth/register";
    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      cPassword: confirmPassword,
    };

    try {
      const response = await axios.post(apiEndpoint, data);
      console.log("SignUp successful:", response.data);
      navigation("/");
    } catch (error) {
      if (error.response) {
        console.error("Email confirmation failed:", error.response.data);
        if (error.response.data.message === "email is already exist") {
          alert(
            "Email is already registered. Please log in or use a different email."
          );
        } else {
          alert("Registration failed. Please try again.");
        }
      } else {
        console.error("Network error:", error.message);
        alert(
          "Network error occurred. Please check your internet connection and try again."
        );
      }
    }
  };

  return (
    <div className="container1">
      <div className="register">
        <img className="register-child" alt="" src={Vector1}  />
        <div className="arcreality1">ARCREALITY</div>
        <img className="register-item" alt="" src={Rectangle1} />
        <b className="cerate-new-account">Create new account</b>
        <div className="sign-up-container">
          <form onSubmit={handleSubmit}>
            <div className="register-inner">
              <div className="password-parent">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="password"
                  placeholder="Password"
                  style={{
                    minWidth: "100%",
                    top: "0",
                    border: "none",
                    background: "none",
                  }}
                />
                <img className="gridiconsvisible" alt="" src={Visible} />
              </div>
            </div>
            <div className="email-wrapper">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="email"
                placeholder="Email"
                style={{
                  minWidth: "100%",
                  top: "0",
                  border: "none",
                  background: "none",
                }}
              />
            </div>
            <div className="first-name-wrapper">
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                className="email"
                placeholder="First Name"
                style={{
                  minWidth: "100%",
                  top: "0",
                  border: "none",
                  background: "none",
                }}
              />
            </div>
            <div className="last-name-wrapper">
              <input
                onChange={(e) => setLastName(e.target.value)}
                className="email"
                type="text"
                placeholder="Last Name"
                style={{
                  minWidth: "100%",
                  top: "0",
                  border: "none",
                  background: "none",
                }}
              />
            </div>
            <div className="frame-div">
              <div className="confirm-password-parent ">
                <input
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="confirm-password"
                  placeholder="Confirm Password"
                  style={{
                    minWidth: "100%",
                    top: "0",
                    border: "none",
                    background: "none",
                  }}
                />
                <img className="gridiconsvisible" alt="" src={Hide1} />
              </div>
            </div>
            <div className="sign-up-wrapper">
              <button type="submit" className="sign-up-button">
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="frame1-parent">
          <img className="frame-child" alt="" src={Frame1} />
          <img className="frame-child" alt="" src={Frame2} />
        </div>
        <div className="sign1-up-with"> Sign up with</div>
        <img className="vector1-icon" alt="" src={Vector2} />
        <img className="vec-child1" alt="" src={Vector3} />
        <div className="or1-wrapper">
          <div className="or1">OR</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
