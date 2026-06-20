import React from 'react';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImgProfilePic from '~images/global/travis-hoki.jpg';

import { ContactLink } from '../ContactLink/ContactLink';

export const LinkedInLink = () => (
	<ContactLink
		href="https://www.linkedin.com/in/travishoki"
		title="Travis's Linked In"
	>
		<img
			alt="LinkedIn Profile Picture"
			height="50"
			src={ImgProfilePic}
			width="50"
		/>
		<p>Connect with me on</p>
		<FontAwesomeIcon icon={faLinkedin} />
	</ContactLink>
);
