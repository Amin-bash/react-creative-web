import React from 'react';
import './style.scss';

export const ContactUs = () => {
	return (
		<div className="container contact-us-section" id="contact">
			<h1 className="title-contact-us">
				contact us
			</h1>

			<form className="contact-form">
				<input className="form-control username" type="text" name="username" placeholder="Type your name" />
				<i className="fa fa-user fa-fw" />

				<input className="form-control" type="email" name="email" placeholder="Email" />
				<i className="fa fa-envelope fa-fw" />

				<input className="form-control" type="text" name="cellphone" placeholder="Your phone" />
				<i className="fa fa-phone fa-fw" />

				<textarea className="form-control" type="text" name="message" placeholder="Your message!" />

				<input className="btn btn-success py-2 px-3" type="submit" />
			</form>
		</div>
	);
};
