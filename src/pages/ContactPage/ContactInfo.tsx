import React, { Fragment } from 'react';

import { ContactInfoGrid } from './ContactInfoGrid/ContactInfoGrid';
import { LinkedInLink } from './LinkedInLink/LinkedInLink';
import './ContactInfo.scss';

export const ContactInfo = () => (
	<Fragment>
		<div className="contact-info-header">
			<h2>Get In Touch With Me</h2>
			<p>Travis Hoki</p>
		</div>

		<ContactInfoGrid />

		<LinkedInLink />
	</Fragment>
);
