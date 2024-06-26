import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";
import Header from "../../components/Header/Header";
import Contact from "../../assets/Rectangle 17.png";
import Frame1 from "../../assets/Frame 3879.png";
import Frame2 from "../../assets/noun_Phone_3612570 1.png";
import Frame3 from "../../assets/noun_Email_247564 1.png";
import { motion } from "framer-motion";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      toast.error('Please fill in all the required fields!');
      return;
    }

    console.log("Form submitted:", { firstName, lastName, email, phoneNumber, message });

    // Display success toast notification
    toast.success('Message sent successfully!');

    // Clear the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute object-cover object-center inset-0 size-full w-full pb-12 px-14 max-md:max-w-full max-md:px-5"
      >
        <img src={Contact} className="wqqw" alt="" />
        <h1 className="contact text-white ">Contact us</h1>
      </motion.div>
      <div className="talk d-flex align-items-center lh">
        <div className="shape"></div>
        <div className="wrapper p-5 mt-5 mx-4">
          <motion.span
            className="speak"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Let's talk with us
          </motion.span>
          <motion.p
            className="speak1 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Questions, comments, or suggestions? Simply fill <br /> in the form
            and we’ll be in touch shortly.
          </motion.p>
          <div className="lines mb-5">
            <div className="line e d-flex align-items-center mb-4">
              <img src={Frame1} alt="" className="frame" />
              <span>55 Said street , Tanta</span>
            </div>
            <div className="line">
              <img src={Frame2} alt="" className="frame mb-2" />
              <span>+20 0123456789</span>
            </div>
            <div className="line">
              <img src={Frame3} alt="" className="frame " />
              <span>arcreality@gmail.com</span>
            </div>
          </div>
        </div>
        
          <form className='x' onSubmit={handleSubmit}>
            <div className="row mb-3 p-1">
              <div className="col">
                <input
                  ref={firstNameRef}
                  style={{ backgroundColor: "#F9F9F9" }}
                  type="text"
                  className="form-control hh"
                  placeholder="First name"
                  aria-label="First name"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  ref={lastNameRef}
                  style={{ backgroundColor: "#F9F9F9" }}
                  type="text"
                  className="form-control mn"
                  placeholder="Last name"
                  aria-label="Last name"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="row g-1 mb-3">
              <div className="col">
                <input
                  ref={emailRef}
                  style={{ backgroundColor: "#F9F9F9" }}
                  type="email"
                  className="form-control nm"
                  placeholder="Email*"
                  aria-label="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
            </div>
            <div className="col mb-3">
              <input
                ref={phoneNumberRef}
                style={{ backgroundColor: "#F9F9F9" }}
                type="text"
                className="form-control ll"
                placeholder="Phone Number*"
                aria-label="Phone Number*"
                id="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="col">
              <textarea
                ref={messageRef}
                className="form-control lj"
                id="exampleFormControlTextarea1"
                cols="30"
                rows="10"
                style={{
                  width: "465px",
                  height: "140px",
                  backgroundColor: "#F9F9F9",
                }}
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                borderRadius: "24px",
                position: "relative",
                top: "7px",
                left: "70px",
              }}
              className="btn1 dd mt-3"
            >
              Send Message
            </motion.button>
          </form>
        
      </div>
      <ToastContainer 
        position="bottom-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        toastStyle={{ whiteSpace: "nowrap" }} 
      />
    </>
  );
};

export default ContactUs;
