import React from "react";
import "./ContactUs.css";
import Header from "../../components/Header/Header";
import Contact from "../../assets/Rectangle 17.png";
import Frame1 from "../../assets/Frame 3879.png";
import Frame2 from "../../assets/noun_Phone_3612570 1.png";
import Frame3 from "../../assets/noun_Email_247564 1.png";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="absolute object-cover object-center inset-0 size-full w-full pb-12 px-14 max-md:max-w-full max-md:px-5">
        <img src={Contact} alt="" />
        <h1 className="contact text-white ">Contact us</h1>
      </div>
      <div className="talk d-flex align-items-center">
        <div className="shape"></div>
        <div className="wrapper p-5 mt-5 mx-4">
          <span className="speak">Let's talk with us</span>
          <p className="speak1 mt-4">
            Questions, comments, or suggestions? Simply fill <br /> in the form
            and we’ll be in touch shortly.
          </p>
          <div className="lines mb-5">
            <div className="line d-flex align-items-center mb-4">
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
        <div className="form align-items-center">
          <form action="">
            <div class="row mb-3 p-1">
              <div class="col">
                <input
                  style={{ backgroundColor: "#F9F9F9" }}
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div class="col">
                <input
                  style={{ backgroundColor: "#F9F9F9" }}
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  id="lastName"
                />
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="col">
                <input
                  style={{ backgroundColor: "#F9F9F9" }}
                  type="email"
                  class="form-control"
                  placeholder="Email*"
                  aria-label="Email*"
                />
              </div>
              <br />
            </div>
            <div class="col mb-3">
              <input
                style={{ backgroundColor: "#F9F9F9" }}
                type="text"
                class="form-control"
                placeholder="Phone Number*"
                aria-label="Phone Number*"
                id="number"
              />
            </div>
            <div class="col">
              {/* <textarea name="" id="" cols="30" rows="10" style={{width: "465px", height: "140px", backgroundColor: "#F9F9F9"}} placeholder='Your message...'></textarea> */}
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                cols="30"
                rows="10"
                style={{
                  width: "465px",
                  height: "140px",
                  backgroundColor: "#F9F9F9",
                }}
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              style={{
                borderRadius: "24px",
                position: "relative",
                top: "7px",
                left: "70px",
              }}
              className="btn1 mt-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
