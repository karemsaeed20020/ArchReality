import React from "react";
import "./Footer.css";
import Logo from "../../assets/Dummy Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <img src={Logo} alt="" style={{ width: "43px", height: "64px" }} />
        <p>
          A company of designing <br /> architecture with AR
        </p>
      </div>
      <div className="footer-content">
        <h4>Services</h4>
        <ul>
          <li>
            <Link>Design plans</Link>
          </li>
          <li>
            <Link to={"/infoInterior"}>Interior design</Link>
          </li>
          <li>
            <Link to={"infoExterior"}>Exterior design</Link>
          </li>
          <li>
            <Link>AR models</Link>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Follow us</h4>
        <ul>
          <li>
            <Link>Facebook</Link>
          </li>
          <li>
            <Link>Twitter</Link>
          </li>
          <li>
            <Link>Instagram</Link>
          </li>
          <li>
            <Link>Linkedin</Link>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Contact us</h4>
        <ul>
          <li>
            <Link href="#">arcreality@gmail.com</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
