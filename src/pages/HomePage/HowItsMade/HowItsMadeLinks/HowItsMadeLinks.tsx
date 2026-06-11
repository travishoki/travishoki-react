import React from 'react';

import styles from './HowItsMadeLinks.module.scss';

export const HowItsMadeLinks = () => {
	return (
		<div className={styles.howItsMadeLinks}>
			<div>
				<a
					className={styles.howItsMadeLink}
					href="https://github.com/travishoki/travishoki-react"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fa fa-github" />
					<p className={styles['how-its-made-link-label']}>Github</p>
					<p className={styles['how-its-made-link-description']}>Source Code</p>
				</a>
			</div>
			<div>
				<a
					className={styles.howItsMadeLink}
					href="https://travishoki.com/storybook-static"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fa fa-book" />
					<p className={styles['how-its-made-link-label']}>Storybook</p>
					<p className={styles['how-its-made-link-description']}>
						Component Library
					</p>
				</a>
			</div>
		</div>
	);
};
