import React from 'react';
import header from '../../img/hero-bg.jpg';
import './style.scss';

export const Header = () => {
	return (
		<div className="header-section" id="header">
			<img src={header} className="w-100" alt="" />
			<div className="header-content">
				<h1>Making things looks great</h1>
				<p className="">for companies who make great stuff</p>
				<button className="see-our-work-btn">
					<span>SEE OUR WORK</span>
				</button>
			</div>
		</div>
	);
};
