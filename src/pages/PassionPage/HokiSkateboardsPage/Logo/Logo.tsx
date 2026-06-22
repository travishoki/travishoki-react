import React from 'react';

import { ImgPopIn } from '~animations/ImgPopIn';
import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import styles from './Logo.module.scss';

export const Logo = () => (
	<ExternalLink
		className={styles.link}
		href="https://hokiskateboards.com"
		title="Hoki Skateboards"
	>
		<ImgPopIn
			alt="Hoki Skateboards"
			className="center"
			height="142px"
			src="http://links.hokiskateboards.com/images/logo.png"
			width="275px"
		/>
	</ExternalLink>
);
