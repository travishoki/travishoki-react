import React, { Fragment } from 'react';
import ImgProfilePic from '~images/global/travis-hoki.jpg';

import { CONTACT_INFO } from './ContactInfo.data';
import { ContactInfoItem } from './ContactInfoItem/ContactInfoItem';
import './ContactInfo.scss';

export const ContactInfo = () => (
	<Fragment>
		<div className="contact-info-header">
			<h2>Get In Touch With Me</h2>
		</div>

		<p className="my-name">Travis Hoki</p>

		<div className="contact-info-grid">
			{CONTACT_INFO.map((item) => (
				<ContactInfoItem key={item.id} {...item} />
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
			<p>Connect with me on</p>
			<i className="fa fa-linkedin" />
		</a>
	</Fragment>
);
