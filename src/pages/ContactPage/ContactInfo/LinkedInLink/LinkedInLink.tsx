import React from 'react';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ImgProfilePic from '~images/global/travis-hoki.jpg';

import { ContactLink } from '../ContactLink/ContactLink';

import styles from './LinkedInLink.module.scss';

export const LinkedInLink = () => (
	<ContactLink
		href="https://www.linkedin.com/in/travishoki"
		icon={faLinkedin}
		title="Travis's Linked In"
	>
		<div className={styles.content}>
			<img
				alt="LinkedIn Profile Picture"
				height="50"
				src={ImgProfilePic}
				width="50"
			/>
			<p>Connect with me on</p>
		</div>
	</ContactLink>
);
