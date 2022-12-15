import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
function About() {
  const about = useRef(null);
  const active = localStorage.getItem("active");

  const excuteScroll = (ref) => {
    //	ref.current.scrollIntoView(true);
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + 5;
    window.scrollTo({ top: y, behavior: "smooth" });
    localStorage.removeItem("active");
  };

  if (active === "ABOUT") {
    excuteScroll(about);
  }

  return (
    <section className="about-us" ref={about} id={'section1'}>
      <h3 className="main-Title section-p">About Us</h3>
      <Container fluid>
        <Row>
          <Col md={8}>
            <article
              className="f3 prim-color section-p"
              style={{ paddingRight: 0 }}
            >
              <p className="mt-4">
                NationTech is a Technology Development and Service Provider
                founded in 2017. We believe in the power of technology in
                shaping today’s world by offering solutions, facilitating
                services, and building or improving businesses across the globe.
              </p>
              <p>
                Our team consists of a diverse circle of skilled manpower and
                expertise across many technological industries.
              </p>
              <p>
                With our extensive experience across various industries starting
                from Education, Consumer Financing, Consumer Marketplace to
                Artificial Intelligence, Machine Learning & Healthcare, we aim
                to create technology solutions for everyday’s problems.
              </p>
              <p>
                To create value for our customers, we tailor digital solutions
                to fit our clients’ needs and push them towards their utmost
                potential.
              </p>
              <p>
                Our mission is to guide our clients throughout the
                digitalization transformation process and bring their vision
                into existence in a way that emphasizes their idea while
                facilitating any obstacles through our technological solutions.
                Your challenges are our opportunities.
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
