import React, { useRef, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import map from "../../../../Assests/images/map.png";
import cairoMap from "../../../../Assests/images/cairoMap.png";
import dubaiMap from "../../../../Assests/images/dubaiMap.png";
import darkMobile from "../../../../Assests/images/darkMobile.svg";
import darkMsg from "../../../../Assests/images/darkMsg.svg";
import darkLocation from "../../../../Assests/images/darkLocation.svg";
import "./ContactUs.css";

const api_key = "402066dcc8154d4e6230b09002c29779-ed4dc7c4-be6cbb61";
const domain = "kadabra.app";
const mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

function ContactUs() {
	const contact = useRef();
	const active = localStorage.getItem("active");

	const excuteScroll = (ref) => {
		//ref.current.scrollIntoView();
		const y = ref.current.getBoundingClientRect().top + window.pageYOffset + 5;
		window.scrollTo({ top: y, behavior: "smooth" });
		localStorage.removeItem("active");
	};

	if (active === "CONTACT") {
		excuteScroll(contact);
	}

	const [locationPin, setLocationPin] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errAlert, setErrAlert] = useState(false);
	const [sentFlag, setSentFlag] = useState(false);
	const onMouseMove = (e) => {
		let posX = Math.ceil((e.nativeEvent.offsetX / e.target.offsetWidth) * 100);
		let posY = Math.ceil(
			(e.nativeEvent.offsetY / e.target.offsetHeight) * 1000
		);
		if (posX >= 54 && posX <= 58 && posY >= 300 && posY <= 400) {
			setLocationPin("cairo");
		} else if (posX >= 62 && posX <= 66 && posY >= 350 && posY <= 450) {
			setLocationPin("dubai");
		} else {
			setLocationPin(null);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			firstName.length === 0 ||
			lastName.length === 0 ||
			email.length === 0 ||
			message.length === 0
		) {
			setErrAlert(true);
		} else {
			var data = {
				from: "NationTech <info@nationtech.org>",
				to: "info@nationtech.org",
				subject: "NationTech",
				text: `First Name : ${firstName} Last Name: ${lastName} - Email:${email} - message:${message}`,
			};

			mailgun.messages().send(data, function (error, body) {
				setEmail("");
				setFirstName("");
				setLastName("");
				setMessage("");
				setErrAlert(false);
				setSentFlag(true);
			setTimeout(() => {
				setSentFlag(false)
			}, 3000);
			});
		}
	};
	return (
		<section className="contact-us section-p" ref={contact}>
			<div className="main-Title">Contact Us</div>
			<Container>
				<Row>
					<Col md={7}>
						<form onSubmit={(e) => handleSubmit(e)}>
							<h4>Get in touch with us</h4>
							<Row>
								<Col md={6}>
									<div className="form-control-box">
										<label>
											First Name
											{errAlert && firstName.length === 0 && <span> *</span>}
										</label>{" "}
										<div>
											<input
												type="text"
												className={
													errAlert && firstName.length === 0
														? "form-control alertBox"
														: "form-control"
												}
												onChange={(e) => setFirstName(e.target.value)}
												value={firstName}
											/>
										</div>
									</div>
								</Col>
								<Col md={6}>
									<div className="form-control-box">
										<label>
											Last Name
											{errAlert && lastName.length === 0 && <span> *</span>}
										</label>
										<div>
											<input
												type="text"
												className={
													errAlert && lastName === ""
														? "form-control alertBox"
														: "form-control "
												}
												onChange={(e) => setLastName(e.target.value)}
												value={lastName}
											/>
										</div>
									</div>
								</Col>
								<div className="form-control-box">
									<label>
										Email Address
										{errAlert && email.length === 0 && <span> *</span>}
									</label>
									<input
										type="email"
										className={
											errAlert && email === ""
												? "form-control alertBox"
												: "form-control "
										}
										onChange={(e) => setEmail(e.target.value)}
										value={email}
									/>
								</div>
								<div className="form-control-box">
									<label>
										Message
										{errAlert && message.length === 0 && <span> *</span>}
									</label>
									<textarea
										className={
											errAlert && message === ""
												? "form-control alertBox"
												: "form-control "
										}
										rows="5"
										col="12"
										name="message"
										onChange={(e) => setMessage(e.target.value)}
										value={message}
									/>
								</div>
								<div className="btnContainer">
									<button className="btn">Send</button>
								</div>
								{sentFlag && (
									<Alert className="text-center">Your message was sent !</Alert>
								)}
							</Row>
						</form>
					</Col>
					<Col md={5}>
						<ul className="list-unstyled">
							<li>
								<img src={darkMobile} alt="Mobile" />
								<span className="f5">+20 128 7063395</span>
							</li>
							<li>
								<img src={darkMsg} alt="darkMsg" />
								<span className="f5">info@nationtech.org</span>
							</li>
							<li>
								<img src={darkLocation} alt="darkLocation" />
								<span className="location f5">
									Galleria 40, Floor B2, 26th of July Corridor, Al Sheikh Zayed,
									Egypt
								</span>
							</li>
							<li>
								<img src={darkLocation} alt="darkLocation" />
								<span className="location f5">
									Dubai Internet City, Building 2, Al Kawkab St, Dubai , UAE
								</span>
							</li>
						</ul>
						<img
							src={
								locationPin === "cairo"
									? cairoMap
									: locationPin === "dubai"
									? dubaiMap
									: map
							}
							alt="map"
							onMouseMoveCapture={onMouseMove}
							className="map"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default ContactUs;
