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
					<p className={styles.howItsMadeLinkLabel}>Github</p>
					<p className={styles.howItsMadeLinkDescription}>Source Code</p>
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
					<p className={styles.howItsMadeLinkLabel}>Storybook</p>
					<p className={styles.howItsMadeLinkDescription}>Component Library</p>
				</a>
			</div>
		</div>
	);
};
