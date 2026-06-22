import React from 'react';

import { faGit } from '@fortawesome/free-brands-svg-icons';

import { ContactLink } from '../ContactLink/ContactLink';

export const GitLink = () => (
	<ContactLink
		href="https://github.com/travishoki/"
		icon={faGit}
		title="Travis's Github"
	>
		<p>Some of my repos on</p>
	</ContactLink>
);
