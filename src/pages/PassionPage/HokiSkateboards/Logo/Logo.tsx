import React from 'react';

import styles from './Logo.module.scss';

export const Logo = () => (
	<a
		className={styles.hokiSkateboardsLogo}
		href="https://hokiskateboards.com"
		rel="noreferrer"
		target="_blank"
		title="Hoki Skateboards"
	>
		<img
			alt="Hoki Skateboards"
			className="center"
			height="142px"
			src="http://links.hokiskateboards.com/images/logo.png"
			width="275px"
		/>
	</a>
);
