import React, { useRef, useEffect } from "react";
import { Carousel } from "antd";
import WebDevelopment from "../../../../Assests/images/WebDevelopment.png";
import AppDevelopment from "../../../../Assests/images/AppDevelopment.png";
import ProductDesign from "../../../../Assests/images/ProductDesign.png";
import WindowsApplication from "../../../../Assests/images/WindowsApplication.png";
import Enterprice from "../../../../Assests/images/Enterprice.png";
import ITSupport from "../../../../Assests/images/ITSupport.png";
import "./Services.css";
function Services() {
	const service = useRef();
	const slider = useRef();
	const active = localStorage.getItem("active");
	const sliderCount = localStorage.getItem("slide");
	const excuteScroll = (ref) => {
		//ref.current.scrollIntoView();
		const y = ref.current.getBoundingClientRect().top + window.pageYOffset + 5;
		window.scrollTo({ top: y, behavior: "smooth" });
		localStorage.removeItem("active");
	};
	if (active === "SERVICE") {
		excuteScroll(service);
	}

	useEffect(() => {
		slider.current.goTo(sliderCount);
		localStorage.removeItem("slide");
	}, [sliderCount]);

	const content = [
		{
			img: WebDevelopment,
			title: "Website Development",
			content: [
				"Customize your website with our experienced web developers.",
				"Front-end & design, backend,database, and server scale designed to fit your custom workflow.",
			],
		},
		{
			img: AppDevelopment,
			title: "App Development",
			content: [
				"Custom mobile application development with our expert mobile app developers.",
				"From design and development to ongoing support & post-implementation maintenance. ",
				"We boost your project whether it needs to be built from scratch or just needs code-takeover.",
			],
		},

		{
			img: ITSupport,
			title: "IT Support & Maintenance",
			content: [
				"Our IT support and Maintenance Service consists of software upgrades, annual updates, patches and fixes needed to improve functionality and keep the Software in working order.",
				"We take care of every detail of the maintenance as a surrogate for an in-house dedicated team.",
			],
		},
		{
			img: ProductDesign,
			title: "Product Design",
			content: [
				"Our talented creative team is made up of a diverse set of specialized & skilled UI/UX Designers & Graphic Designers to bring ideas into life.",
				"We apply interactive and visual design principles on Websites and Web Applications for a cohesive and comprehensive user experience.",
				"Our developers use HTML, CSS and other design tools to achieve responsive designs.",
			],
		},
		{
			img: WindowsApplication,
			title: "Windows Applications",
			content: [
				"Windows application is any program that is written to run under the Microsoft Windows operating system,also called a Windows App.",
				"All 32-bit Windows Applications run in the 32-bit and 64-bit versions of Windows.",
				"All 64-bit Applications  require 64-bit Windows, which is the standard on new Windows computers and tablets. Our diverse team has expertise and know-how in developing and suiting Windows Applications upon your request and to your needs.",
			],
		},
		{
			img: Enterprice,
			title: "Enterprise Resource Planning System",
			content: [
				"Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting,finance, procurement, project management, risk management and compliance, and supply chain operations.",
				"It also includes enterprise performance management, software that helps plan, budget, predict, and report on an organization’s financial results.",
				"ERP systems tie together a multitude of business processes and enable the flow of data between them.At NationTech, we implement your business processes into a customized ERP System to run your business more efficiently.",
			],
		},
	];
	// useEffect(() => {
	// if(localStorage.getItem("slider")==="slide1"){
	// 	goTo(1)
	// }
	// }, [])
	return (
		<section className="services" ref={service}>
			<h3 className="main-Title section-p">Services</h3>
			<Carousel
				autoplay
				ref={(ref) => {
					slider.current = ref;
				}}
			>
				{content.map((content) => {
					return (
						<div className="slider-container">
							<img src={content.img} alt="slider" />
							<div className="slider-description">
								<h3 className="f2 font-bold mb-4">{content.title}</h3>
								<div>
									{content.content.map((paragraph) => {
										return <p className="mb-2">{paragraph}</p>;
									})}
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</section>
	);
}

export default Services;
