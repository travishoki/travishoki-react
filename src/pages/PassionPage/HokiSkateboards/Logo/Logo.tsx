import React from 'react';

import { FadeInImage } from '~animations/FadeInImage/FadeInImage';

import styles from './Logo.module.scss';

export const Logo = () => (
	<a
		className={styles.link}
		href="https://hokiskateboards.com"
		rel="noreferrer"
		target="_blank"
		title="Hoki Skateboards"
	>
		<FadeInImage
			alt="Hoki Skateboards"
			className="center"
			height="142px"
			src="http://links.hokiskateboards.com/images/logo.png"
			width="275px"
		/>
	</a>
);
