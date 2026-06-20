import React from 'react';

import styles from './HowItsMadeLinks.module.scss';

const linkProps = {
	rel: 'noreferrer',
	target: '_blank',
};

export const HowItsMadeLinks = () => {
	return (
		<section className="primary-three">
			<div className={styles.howItsMadeLinks}>
				<a
					className={styles.howItsMadeLink}
					href="https://github.com/travishoki/travishoki-react"
					{...linkProps}
				>
					<i className="fa fa-github" />
					<p className={styles.howItsMadeLinkLabel}>Github</p>
					<p className={styles.howItsMadeLinkDescription}>Source Code</p>
				</a>
				<a
					className={styles.howItsMadeLink}
					href="https://travishoki.com/storybook-static"
					{...linkProps}
				>
					<i className="fa fa-book" />
					<p className={styles.howItsMadeLinkLabel}>Storybook</p>
					<p className={styles.howItsMadeLinkDescription}>Component Library</p>
				</a>
			</div>
		</section>
	);
};
