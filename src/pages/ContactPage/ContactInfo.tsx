import React from 'react';
import ImgProfilePic from '~images/global/travis-hoki.jpg';

import './ContactInfo.scss';

export const ContactInfo = () => (
	<div className="contact-info">
		<div className="block">
			<p>Travis Hoki</p>
			<p>801-691-2373</p>
			<p>travis.hoki@gmail.com</p>
			<p>Based out of Pleasant Grove, UT, United States</p>
		</div>

		<div className="block">
			<p>Open to remove work.</p>
		</div>

		<a
			className="linked-link"
			href="https://www.linkedin.com/in/travishoki"
			rel="noreferrer"
			target="_blank"
			title="Travis's Linked In"
		>
			<img
				className="linkedin-profile-image"
				height="50"
				src={ImgProfilePic}
				width="50"
			/>
			Connect with me on:
			<i className="fa fa-linkedin" />
		</a>
	</div>
);
