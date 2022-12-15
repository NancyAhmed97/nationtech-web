import React, { useRef, useState, useEffect } from "react";
import Footer from "../common/footer/Footer";
import About from "./components/about/About";
import Services from "./components/services/Services";
import ContactUs from "./components/contact-us/ContactUs";
import "./Home.css";
import Portfolio from "./components/portfolio/Portfolio";
import LandingPage from "./components/landingPage/LandingPage";
function Home() {
	const [thePosition, setPosition] = useState(window.pageYOffset);
	const [activeTab, setActiveTab] = useState("Home");
	const home = useRef();
	const about = useRef();
	const services = useRef();
	const portfolio = useRef();
	const contact = useRef();

	let listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		setPosition(winScroll);
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		if (
			thePosition >= home.current.offsetTop &&
			thePosition <= home.current.offsetTop + home.current.offsetHeight
		) {
			setActiveTab("HOME");
		} else if (
			thePosition >= about.current.offsetTop &&
			thePosition <= about.current.offsetTop + about.current.offsetHeight
		) {
			setActiveTab("ABOUT");
		} else if (
			thePosition >= services.current.offsetTop &&
			thePosition <= services.current.offsetTop + services.current.offsetHeight
		) {
			setActiveTab("SERVICES");
		} else if (
			thePosition >= portfolio.current.offsetTop &&
			thePosition <=
				portfolio.current.offsetTop + portfolio.current.offsetHeight
		) {
			setActiveTab("PORTFOLIO");
		} else if (
			thePosition >= contact.current.offsetTop &&
			thePosition <= contact.current.offsetTop + contact.current.offsetHeight
		) {
			setActiveTab("CONTACT");
		} else {
		}
	}, [thePosition]);

	return (
		<div className="">
			<div ref={home}>
				<LandingPage getActiveTab={activeTab} />
			</div>
			<div ref={about}>
				<About />
			</div>
			<div ref={services}>
				<Services />
			</div>
			<div ref={portfolio}>
				<Portfolio />
			</div>
			<div ref={contact}>
				<ContactUs />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
