import React, { useState } from "react";
import "./register.css";
import Frame1 from "../../assets/frame-13@2x.png";
import Frame2 from "../../assets/frame-14@2x.png";
import Vector10 from "../../assets/Vector 328 (1).png";
import Vector2 from "../../assets/vector-1@2x.png";
import Vector3 from "../../assets/vector-2@2x.png";
import Rectangle1 from "../../assets/rectangle-831@2x.png";
import Hide1 from "../../assets/gridiconsnotvisible@2x.png";
import Visible from "../../assets/gridiconsvisible@2x.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdClose } from "react-icons/md";
const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigation = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");
    setLoading(true);

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
      toast.success("Registration successful!");
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.error("Email confirmation failed:", error.response.data);

        if (error.response.data.message === "email is already exist") {
          // alert(
          //   "Email is already registered. Please log in or use a different email."
          // );
          toast.error(
            "Email is already registered. Please log in or use a different email."
          );
        } else {
          // alert("Registration failed. Please try again.");
          toast.error("Registration failed. Please try again.");
        }
      } else {
        console.error("Network error:", error.message);

        // alert(
        //   "Network error occurred. Please check your internet connection and try again."
        // );
        toast.error(
          "Network error occurred. Please check your internet connection and try again."
        );
      }
    } finally {
      setLoading(false); // Set loading to false after handling the response or error
    }
  };

  return (
    <motion.div
      className="container1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer
        style={{ position: "absolute", left: "1100px", top: "700px" }}
        position="bottom-right"
        closeButton={<MdClose className="custom-close" />}
      />
      <div className="register">
        <img className="register-child" alt="" src={Vector10} />
        <div className="arcreality1">ARCREALITY</div>
        <img className="register-item" alt="" src={Rectangle1} />
        <b className="cerate-new-account">Create new account</b>
        <div className="sign-up-container sign-up-wrapper1">
          <form onSubmit={handleSubmit}>
            <div className="register-inner">
              <div className="password-parent">
                <input
                  type={passwordVisible ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password pass"
                  placeholder="Password"
                  style={{
                    minWidth: "350%",
                    top: "0",
                    border: "none",
                    background: "none",
                  }}
                />
                <img
                  className="gridiconsvisible"
                  alt=""
                  src={passwordVisible ? Visible : Hide1}
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className="email-wrapper">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="email we"
                placeholder="Email"
                style={{
                  minWidth: "100%",
                  top: "0",
                  border: "none",
                  background: "none",
                }}
              />
            </div>
            <div className="first-name-wrapper wrap">
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                className="email wrap3"
                placeholder="First Name"
                style={{
                  minWidth: "100%",
                  top: "0",
                  border: "none",
                  background: "none",
                }}
              />
            </div>
            <div className="last-name-wrapper wrap1">
              <input
                onChange={(e) => setLastName(e.target.value)}
                className="email wrap2"
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
                  type={passwordVisible ? "text" : "password"}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="confirm-password confirm"
                  placeholder="Confirm Password"
                  style={{
                    minWidth: "100%",
                    top: "0",
                    border: "none",
                    background: "none",
                  }}
                />
                <img
                  className="gridiconsvisible"
                  alt=""
                  src={passwordVisible ? Visible : Hide1}
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className="sign-up-wrapper">
              {/* <button type="submit" className="sign-up-button">
                Sign up
              </button> */}
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <motion.button
                  onClick={handleSubmit}
                  type="button"
                  className="sign-up-button"
                  style={{ borderRadius: "15px" }}
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? ( // Render spinner when loading is true
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="ps-3">Loading...</span>
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </motion.button>
              </Link>
            </div>
          </form>
        </div>
        <div className="frame1-parent frame2-parent">
          <img className="frame-child" alt="" src={Frame1} />
          <img className="frame-child" alt="" src={Frame2} />
        </div>
        <div className="sign1-up-with sign2-up"> Sign up with</div>
        <img className="vector1-icon vector2-icon" alt="" src={Vector2} />
        <img className="vec-child1 vec2" alt="" src={Vector3} />
        <div className="or1-wrapper or2">
          <div className="or1">OR</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
