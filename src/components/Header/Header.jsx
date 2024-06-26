import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import { userContext } from "../../context/UserContext";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { token } = useContext(userContext);
  const [isOpen, setIsOpen] = useState(false);
  const profilePage = useSelector(state => state.user.profilePage);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#283D4F" }}
        expand="md"
        variant="dark"
        fixed="top"
      >
        <Container fluid>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#" className="font-weight-bold fw-bold mx-5 ">
              ARCREALITY
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="d-flex zz align-items-center justify-content-center w-25 border-0 position-relative  top-0 d-md-none"
            onClick={toggleNavbar}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={isOpen ? "show" : ""}
          >
            <Nav className="links mx-auto me-5 fw-bold" style={{textWrap: "nowrap"}}>
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
              <Link to="/info" className="nav-link text-white">
                Gallery
              </Link>
              <Link to="/contact" className="nav-link text-white">
                Contact us
              </Link>
              <Link to="/test" className="nav-link text-white">
                About
              </Link>
              
              <Link to="/register" className="nav-link text-white">
                Sign Up
              </Link>
              {token ? (
                <Link to="/profile" className="nav-link text-white">
                  <img src={profilePage} className="er" alt="" />
                </Link>
              ) : (
                <Link to="/login" className="nav-link text-white">
                  Log In
                </Link>
              )}
              <Link to="/admin" className="nav-link text-white">
                Dashboard
              </Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
