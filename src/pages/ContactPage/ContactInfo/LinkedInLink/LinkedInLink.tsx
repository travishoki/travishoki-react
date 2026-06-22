import React from 'react';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ImgProfilePic from '~images/contact/linkedin-profile-pic.jpg';

import { ContactLink } from '../ContactLink/ContactLink';

export const LinkedInLink = () => (
	<ContactLink
		href="https://www.linkedin.com/in/travishoki"
		icon={faLinkedin}
		title="Travis's Linked In"
	>
		<img
			alt="LinkedIn Profile Picture"
			height="50"
			src={ImgProfilePic}
			width="50"
		/>
		<p className="center">Connect with me on</p>
	</ContactLink>
);
