import React from 'react';

import { SOCIAL_MEDIA_ITEMS } from './SocialMedia.data';
import { SocialMediaLink } from './SocialMediaLink';
import './SocialMedia.scss';

export const SocialMedia = () => (
	<ul className="social-media">
		{SOCIAL_MEDIA_ITEMS.map((item, index) => (
			<SocialMediaLink key={index} {...item} />
		))}
	</ul>
);
