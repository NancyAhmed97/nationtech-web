import React from "react";
import logo from "../../../Assests/images/logo.svg";
import { Col, Container, Row } from "react-bootstrap";
import Mobile from "../../../Assests/images/Mobile.svg";
import Msg from "../../../Assests/images/Msg.svg";
import Location from "../../../Assests/images/Location.svg";
import FaceBook from "../../../Assests/images/FaceBook.svg";
import LinkidIn from "../../../Assests/images/LinkidIn.svg";
import Instgram from "../../../Assests/images/Instgram.svg";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="section-p">
        <Container>
          <Row>
            <Col md={3}>
              <div>
                <img src={logo} alt="logo" />
              </div>
              <div>
                <p className="f5 mt-5">
                  NationTech’s mission is to build and maintain technologies to
                  digitalize your business in order to stay ahead of your market
                  and stand out by designing solutions that will help your
                  business thrive
                </p>
              </div>
              <div>
                <span>
                  <a
                    href="https://instagram.com/nationtechorg?utm_medium=copy_link"
                    target="_blank"
                    rel="noreferrer"
					className="ml-2"
                  >
                    <img
                      src={Instgram}
                      alt="InstgramImg"
                      className="InstgramImg"

                    />
                  </a>
                </span>
                <span  style={{marginLeft:"15px"}}>
                  <a
                    href="https://www.facebook.com/NationTech-138962424986160"
                    target="_blank"
					className="ml-2"
                    rel="noreferrer"
                  >
                    <img src={FaceBook} alt="FaceBookImg" className="FaceBookImg"/>
                  </a>
                </span>
                <span style={{marginLeft:"15px"}}>
                  <a
                    href="https://www.linkedin.com/company/nationtechorg"
                    target="_blank"
                    rel="noreferrer"
					className="ml-2"
                  >
                    <img src={LinkidIn} alt="LinkidInImg" className="LinkidIn" />
                  </a>
                </span>
              </div>
              <div className="PrivacyPolicyContainer">
                <Link to="/privacypolicy">Privacy Policy</Link>
              </div>
            </Col>
            <Col md={3}>
              <div className="ContactInformation" >
                <h5 style={{paddingLeft:"2rem"}}>Contact Information</h5>
                <ul>
                  <li className="list-unstyled">
                    <img src={Mobile} alt="Mobile" />
                    <span className="f5">+20 128 7063395</span>
                  </li>
                  <li className="list-unstyled">
                    <img src={Msg} alt="Msg" />
                    <span className="f5">info@nationtech.org</span>
                  </li>
                  <li className="list-unstyled">
                    <img src={Location} alt="Location" />
                    <span className="location f5">
                      Galleria 40, Floor B2, 26th of July Corridor, Al Sheikh
                      Zayed, Egypt
                    </span>
                  </li>
                  <li className="list-unstyled">
                    <img src={Location} alt="Location" />
                    <span className="location f5">
                      Dubai Internet City, Building 2, Al Kawkab St, Dubai , UAE
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} >
              <div className="ourServices" style={{marginLeft:"40px"}}>
                <h5>Our Services</h5>
                <a
                  href="#home"
                  onClick={() => {
                    localStorage.setItem("active", "SERVICE");
                    localStorage.setItem("slide", 0);
                  }}
                >
                  Website Development
                </a>
                <a
                  href="#about"
                  onClick={() => {
                    localStorage.setItem("active", "SERVICE");
                    localStorage.setItem("slide", 1);
                  }}
                >
                  App Development
                </a>
                <a
                  href="#Services"
                  onClick={() => {
                    localStorage.setItem("active", "SERVICE");
                    localStorage.setItem("slide", 2);
                  }}
                >
                  IT Support & Maintenance
                </a>
                <a
                  href="#Clients"
                  onClick={() => {
                    localStorage.setItem("active", "SERVICE");
                    localStorage.setItem("slide", 3);
                  }}
                >
                  Product Design
                </a>
                <a
                  href="#Clients"
                  onClick={() => {
                    localStorage.setItem("active", "SERVICE");
                    localStorage.setItem("slide", 4);
                  }}
                >
                  Windows Applications
                </a>
                <a
                  href="#Clients"
                  onClick={() => {
                    localStorage.setItem("active", "SERVICE");
                    localStorage.setItem("slide", 5);
                  }}
                >
                  Enterprise Resource Planning System
                </a>
              </div>
            </Col>
            <Col md={3}>
              <div className="Navigation" style={{paddingLeft:"25px"}}>
                <h5>Navigation</h5>

                <div
                  //
                  onClick={() => localStorage.setItem("active", "HOME")}
                >
                  <Link>Home</Link>
                </div>

                <div
                  //
                  onClick={() => localStorage.setItem("active", "ABOUT")}
                >
                  <Link>About Us</Link>
                </div>

                <div onClick={() => localStorage.setItem("active", "SERVICE")}>
                  <Link>Services</Link>
                </div>

                <div
                  onClick={() => localStorage.setItem("active", "PORTFOLIO")}
                >
                  <Link>Portfolio</Link>
                </div>

                <div onClick={() => localStorage.setItem("active", "CONTACT")}>
                  <Link>Contact Us</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <p className="copyRightBar">©2021 NationTech. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
