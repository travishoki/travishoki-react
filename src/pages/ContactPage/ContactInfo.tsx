import React from 'react';
import ImgProfilePic from '~images/global/travis-hoki.jpg';

import { CONTACT_INFO } from './ContactInfo.data';
import { ContactInfoItem } from './ContactInfoItem/ContactInfoItem';
import './ContactInfo.scss';

export const ContactInfo = () => (
	<div className="contact-info">
		<div className="contact-info-header">
			<h2>Get In Touch With Me</h2>
		</div>

		<p>Travis Hoki</p>
		<p>
			<i className="fa fa-phone" /> 801-691-2373
		</p>
		<p>
			<i className="fa fa-envelope" /> travis.hoki@gmail.com
		</p>
		<p>
			<i className="fa fa-map-marker" /> Based out of Pleasant Grove, UT, United
			States
		</p>
		<div className="contact-info-grid">
			{CONTACT_INFO.map((item) => (
				<ContactInfoItem key={item.title} {...item} />
			))}
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
