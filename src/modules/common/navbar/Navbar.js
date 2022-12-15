import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../../Assests/images/logo.svg";
import {Link} from "react-router-dom"
import "./Navbar.css";
function Navbarr({ getActiveTab, hideLinks }) {
  const [expanded, setExpanded] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const onToggle = () => {
    setExpanded(!expanded);
  };
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  });
  window.addEventListener("scroll", () => {
    setExpanded(false);
  });
  return (
    <div>
      <Navbar
        expand="md"
        fixed="top"
        className={navbar && "lightBg "}
        variant={navbar ? "light" : "dark"}
        collapseOnSelect={true}
        onToggle={onToggle}
        expanded={expanded}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home"> */}
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          {/* </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {!hideLinks && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link
                  href="#home"
                  id="home"
                  onClick={() => {
                    localStorage.setItem("active", "HOME");
                  }}
                  active={getActiveTab === "HOME"}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#aboutUs"
                  id="about"
                  onClick={() => {
                    localStorage.setItem("active", "ABOUT");
                  }}
                  active={getActiveTab === "ABOUT"}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="#Services"
                  id="service"
                  onClick={() => {
                    localStorage.setItem("active", "SERVICE");
                  }}
                  active={getActiveTab === "SERVICES"}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  href="#Portfolio"
                  id="portfolio"
                  onClick={() => {
                    localStorage.setItem("active", "PORTFOLIO");
                  }}
                  active={getActiveTab === "PORTFOLIO"}
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link
                  href="#contactUs"
                  id="contact"
                  onClick={() => {
                    localStorage.setItem("active", "CONTACT");
                  }}
                  active={getActiveTab === "CONTACT"}
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
