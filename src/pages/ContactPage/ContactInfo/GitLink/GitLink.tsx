import React from 'react';

import { faGit } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContactLink } from '../ContactLink/ContactLink';

export const GitLink = () => (
	<ContactLink href="https://github.com/travishoki/" title="Travis's Github">
		<p>Some of my repos on</p>
		<FontAwesomeIcon icon={faGit} />
	</ContactLink>
);
