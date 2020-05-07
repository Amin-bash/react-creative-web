import React from 'react';
import './style.scss';
import prof1 from '../../img/portfolio-01.jpg';
import prof2 from '../../img/portfolio-02.jpg';
import prof3 from '../../img/portfolio-03.jpg';
import prof4 from '../../img/portfolio-04.jpg';
import prof5 from '../../img/portfolio-05.jpg';
import prof6 from '../../img/portfolio-06.jpg';

export const OurWork = () => {
	return (
		<div>
			<h1 className="our-work">Some of our work</h1>
			<div>
				<div className="d-flex">
					<div className="img-section">
						<img src={prof1} alt="" className="img-fluid" />
					</div>
					<div className="img-section">
						<img src={prof2} alt="" className="img-fluid" />
					</div>
					<div className="img-section">
						<img src={prof3} alt="" className="img-fluid" />
					</div>
				</div>
				<div className="d-flex">
					<div className="img-section">
						<img src={prof4} alt="" className="img-fluid" />
					</div>
					<div className="img-section">
						<img src={prof5} alt="" className="img-fluid" />
					</div>
					<div className="img-section">
						<img src={prof6} alt="" className="img-fluid" />
					</div>
				</div>
			</div>
		</div>
	);
};
