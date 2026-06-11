import React from 'react';

import { SOCIAL_MEDIA_ITEMS } from './SocialMedia.data';
import { SocialMediaLink } from './SocialMediaLink';

import styles from './SocialMedia.module.scss';

export const SocialMedia = () => (
	<ul className={styles.socialMedia}>
		{SOCIAL_MEDIA_ITEMS.map((item, index) => (
			<SocialMediaLink key={index} {...item} />
		))}
	</ul>
);
