import React, { useRef } from "react";
import Scoligit from "../../../../Assests/images/Scholigit.svg";
import Kadabra from "../../../../Assests/images/Kadabra.svg";
import c from "../../../../Assests/images/C.svg";
import prevIcon from "../../../../Assests/images/prevIcon.svg";
import Kadbra from "../../../../Assests/images/Kadbra.svg";
import Orman from "../../../../Assests/images/Orman.svg";
import Kabnoury from "../../../../Assests/images/kabnoury ventueres (1).svg";
import Pharma from "../../../../Assests/images/Pharma.svg";
import Toy from "../../../../Assests/images/Toy.svg";
import Man from "../../../../Assests/images/Man.svg";
import dayra from "../../../../Assests/images/Group 1900.svg";
import Slider from "react-slick";
import "./Portfolio.css";
import PrevIcon from "../../../../Assests/images/PrevIcon";
import NextIcon from "../../../../Assests/images/NextIcon";

export default function Portfolio() {
	const porfolio = useRef(null);
	const active = localStorage.getItem("active");
	const excuteScroll = (ref) => {
		// ref.current.scrollIntoView();
		const y = ref.current.getBoundingClientRect().top + window.pageYOffset + 20;
		window.scrollTo({ top: y, behavior: "smooth" });
		localStorage.removeItem("active");
	};
	const SamplePrevArrow = (props) => {
		const { className, style, onClick } = props;

		return (
			<div onClick={onClick} className={className} style={{ ...style }}>
				<PrevIcon />
			</div>
		);
	};
	const SampleNextArrow = (props) => {
		const { className, style, onClick } = props;

		return (
			<div onClick={onClick} style={{ ...style }} className={className}>
				<NextIcon />
			</div>
		);
	};
	var settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					dots: false,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					pauseOnHover: true,
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 668,
				settings: {
					dots: false,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					pauseOnHover: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},

			{
				breakpoint: 480,
				settings: {
					dots: false,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					pauseOnHover: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
				},
			},
		],
	};

	const content = [
		{
			img: Scoligit,
		},
		{
			img: Kadabra,
		},
		{
			img: Kabnoury,
		},
		{
			img: c,
		},
		{
			img: Man,
		},
		{
			img: Orman,
		},
		{
			img: Pharma,
		},
		{
			img: Toy,
		},
		{
			img: Kadbra,
		},
		{
			img: dayra,
		},
	];

	if (active === "PORTFOLIO") {
		excuteScroll(porfolio);
	}
	return (
		<div ref={porfolio} className="Portfolio">
			<h3 className="main-Title section-p">Portfolio</h3>
			<img src={prevIcon} alt="prevIcon" style={{ display: "none" }} />

			<Slider {...settings} accessibility={false}>
				{content.map((content) => {
					return (
						<div>
							<img alt="" src={content.img} />
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
