import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../../../common/navbar/Navbar";
import "./LandingPage.css";
export default function LandingPage({ getActiveTab }) {
	const HOME = useRef();
	const active = localStorage.getItem("active");

	const excuteScroll = (ref) => {
		//ref.current.scrollIntoView();
		const y = ref.current.getBoundingClientRect().top + window.pageYOffset;
		window.scrollTo({ top: y, behavior: "smooth" });
		localStorage.removeItem("active");
	};

	if (active === "HOME") {
		excuteScroll(HOME);
	}
	return (
		<>
			<section className="landingPage ">
				<Navbar getActiveTab={getActiveTab} />
				<Container ref={HOME} fluid>
					<Row>
						<Col md={7}>
							<div className="landingText section-p">
								<h1 className="f2">Your path to digitalization</h1>
								<p className="f4 paragraph">
									NationTech’s mission is to build and maintain technologies to
									digitalize your business in order to stay ahead of your market
									and stand out by designing solutions that will help your
									business thrive.
								</p>
							
								
								
									<Link to='#section1' 	className="btn" onClick={() => localStorage.setItem("active", "ABOUT")}>Learn More</Link>
						
								

							</div>
						</Col>
						<Col md={5} className="poweredContainer">
							<p className="f3 powered">
								Powered by technology, driven by innovation.
							</p>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
}
