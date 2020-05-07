import React, { useState } from 'react';
import logo from '../../img/logo.png';
import './style.scss';
import { Link } from 'react-scroll';
import Review from '../Review/Review';


export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleReview = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
		
	}
	return (
		<nav className="navbar navbar-expand-lg background-transparent fixed-top navbar-light">
			<div className="container">
				<img className="img-fluid navbar-brand" alt="" src={logo} href="/" />

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarContent"
					aria-controls="navbarContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link
								activeClass="active"
								to="header"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="nav-link text-white font-weight-bold"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="who-we-are"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="nav-link text-white font-weight-bold"
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="nav-link text-white font-weight-bold"
							>
								Contact
							</Link>
						</li>
						<li className="nav-item">
							<span onClick={() => handleReview()} className="nav-link text-white reviews font-weight-bold">Reviews</span>
						</li>
					</ul>
				</div>
			</div>
			<Review isOpen={isOpen} />
		</nav>
	);
};
