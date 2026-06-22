import React from 'react';

import { faGit } from '@fortawesome/free-brands-svg-icons';

import ImgProfilePic from '~images/contact/github-profile-pic.jpg';

import { ContactLink } from '../ContactLink/ContactLink';

export const GitLink = () => (
	<ContactLink
		href="https://github.com/travishoki/"
		icon={faGit}
		title="Travis's Github"
	>
		<img
			alt="Github Profile Picture"
			height="50"
			src={ImgProfilePic}
			width="50"
		/>
		<p className="center">Some of my repos on</p>
	</ContactLink>
);
