import React from 'react';

import ImgProfilePic from '~images/global/travis-hoki.jpg';

import styles from './LinkedInLink.module.scss';

export const LinkedInLink = () => (
	<a
		className={styles.linkedLink}
		href="https://www.linkedin.com/in/travishoki"
		rel="noreferrer"
		target="_blank"
		title="Travis's Linked In"
	>
		<img
			alt="LinkedIn Profile Picture"
			height="50"
			src={ImgProfilePic}
			width="50"
		/>
		<p>Connect with me on</p>
		<i className="fa fa-linkedin" />
	</a>
);
