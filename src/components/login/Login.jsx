import React, { useContext, useEffect, useState } from "react";
import "./login.css";
import Frame1 from "../../assets/frame-13@2x.png";
import Frame2 from "../../assets/frame-14@2x.png";
import Vector1 from "../../assets/vector-328@2x.png";
import Vector2 from "../../assets/vector-1@2x.png";
import Vector3 from "../../assets/vector-2@2x.png";
import Rectangle from "../../assets/rectangle-830@2x.png";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdClose } from "react-icons/md";
import { Alert } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import { auth } from "../../config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Profile from "../Profile/Profile";



const Login = ({ match }) => {
  // const {setToken,setUserName}=useContext(userContext);
  const { setToken, setFirstNamee, setLastNamee, setImage, user } =
    useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);
    dispatch(signInStart());
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
        // throw new Error("Invalid credentials");
        dispatch(signInFailure("Invalid credentials"));
      })
      .then((data) => {
        console.log(data);

        setToken(data.userToken);
        // setUserName(data.userName);
        setFirstNamee(data.firstName);
        setLastNamee(data.lastName);
        setImage(data.picture);
        dispatch(signInSuccess(data));

        setTimeout(() => {
          navigate("/profile");
        }, 1000);
        toast.success("Login successful", {
          autoClose: true,
          className: "custom-toast",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // setErrorMessage(error.message);

        dispatch(signInFailure(error.message));
        toast.error("Login failed", {
          autoClose: true,
          className: "custom-toast",
        });
      })
      .finally(() => {
        // setLoading(false); // Set loading to false when the fetch operation ends
      });
  };
  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user); // Check the Google user object
      const userToken = await user.getIdToken();
      setToken(userToken);
      setFirstNamee(user.displayName.split(" ")[0]);
      setLastNamee(user.displayName.split(" ")[1]);
      setImage(user.photoURL);
  
      // Navigate to profile page
      navigate('/profile', {
        state: {
          displayName: user.displayName,
          photoURL: user.photoURL
        }
      });
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };
  
 

  return (
    <motion.div className="login-container">
      <ToastContainer closeButton={<MdClose className="custom-close" />} />

      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img className="container-child " alt="" src={Vector1} />
        <motion.img className="container-item" alt="" src={Rectangle} />
        <div className="arcreality">ARCHREALITY</div>
        <b className="log-in">Log in</b>
        <form className="login-form">
          <div className="mb-3 fas">
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
              className="form-control1 bv"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link style={{textDecoration: "none"}} to={'/forget-password'}>
            <div className="forget-password">Forget password ?</div>
          </Link>
          <motion.button
            onClick={handleSubmit}
            type="button"
            className="login-btn"
            style={{ borderRadius: "15px" }}
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
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
              "LOG IN"
            )}
          </motion.button>

          {error && typeof error === 'string' && (
  <Alert variant="danger" className="custom-alert">
    {error}
  </Alert>
)}
        </form>
        <div className="frame-parent">
        {user ? (
          <Profile />
        ) : (
          // <GoogleButton onClick={handleSignIn} />
        <img className="frame-child" onClick={handleSignIn} alt=""  src={Frame1} />
        )}
        
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
      </motion.div>
    </motion.div>
  );
};

export default Login;
