import React from 'react';
import whoAreWeImg from '../../img/who-we-are.jpg';
import './style.scss';

export const WhoWeAre = () => {
	return (
		<div className="who-we-are-section" id="who-we-are">
			<div className="who-we-are-img">
				<img className="img-fluid" src={whoAreWeImg} alt="" />
			</div>
			<div className="position-who-we-are">
				<div className="who-we-are">
					<h1 className="title-who-we-are">who we are</h1>
					<p className="text-white ">
						ID simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's of type and scrambled it to make a type specimen book. It has survived
						<strong className="text-white">when an unknown printer </strong>
						galley of type and scrambled it to make a type specimen book. It has survived not only five
						centuries, but also the leap into scrambled it to make a type electronic to and scrambled it to
						make a type specimen book make a type specimen book.
					</p>
				</div>
			</div>
		</div>
	);
};
