import React, { useContext, useState } from "react";
import "./login.css";
import Frame1 from "../../assets/frame-13@2x.png";
import Frame2 from "../../assets/frame-14@2x.png";
import Vector1 from "../../assets/vector-328@2x.png";
import Vector2 from "../../assets/vector-1@2x.png";
import Vector3 from "../../assets/vector-2@2x.png";
import Rectangle from "../../assets/rectangle-830@2x.png";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContext";

const Login = ({ match }) => {
  // const {setToken,setUserName}=useContext(userContext);
  const {
    setToken,
    setFirstNamee,
    setLastNamee,
    setImage,
  } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const requestData = {
      email: email,
      password: password,
    };

    fetch("https://arch-reality.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setToken(data.userToken);
        // setUserName(data.userName);
        setFirstNamee(data.firstName);
        setLastNamee(data.lastName);
        setImage(data.picture);

        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="login-container">
      <div className="container">
        <img className="container-child" alt="" src={Vector1} />
        <img className="container-item" alt="" src={Rectangle} />
        <div className="arcreality">ARCHREALITY</div>
        <b className="log-in">Log in</b>
        <form className="login-form">
          <div className="mb-3">
            <input
              type="email"
              className="fo form-control1"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forget-password">Forget password ?</div>
          <button
            onClick={handleSubmit}
            type="button"
            className="login-btn"
            style={{ borderRadius: "15px" }}
          >
            LOG IN
          </button>
        </form>
        <div className="frame-parent">
          <img className="frame-child" alt="" src={Frame1} />
          <img className="frame-child" alt="" src={Frame2} />
        </div>
        <div className="log-in-with"> log in with</div>
        <img className="desktop-20-inner" alt="" src={Vector2} />
        <img className="vector-icon" alt="" src={Vector3} />
        <div className="or-wrapper">
          <div className="or">OR</div>
        </div>
        <div className="join-us-by">
          join us by login to see our features and our designs
        </div>
      </div>
    </div>
  );
};

export default Login;
