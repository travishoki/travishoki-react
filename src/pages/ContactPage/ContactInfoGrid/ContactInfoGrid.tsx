import React from 'react';

import './ContactInfoGrid.scss';

export const ContactInfoGrid = () => (
	<div className="contact-info-grid">
		<div className="contact-info-item">
			<i className="fa fa-envelope contact-info-icon" />
			<p>
				<a href="mailto:travis.hoki@gmail.com">travis.hoki@gmail.com</a>
			</p>
			<p>(Preferred)</p>
		</div>

		<div className="contact-info-item">
			<i className="fa fa-phone contact-info-icon" />
			<p>
				<a href="tel:+18016912373">801-691-2373</a>
			</p>
		</div>

		<div className="contact-info-item">
			<i className="fa fa-map-marker contact-info-icon" />
			<p>Pleasant Grove, Utah</p>
			<p>United States</p>
			<p>Mountain Time (MT)</p>
		</div>

		<div className="contact-info-item">
			<i className="fa fa-clock-o contact-info-icon" />
			<p>Open to remote work</p>
		</div>
	</div>
);
