import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
					<FontAwesomeIcon icon={faGithub} />
					<p className={styles.howItsMadeLinkLabel}>Github</p>
					<p className={styles.howItsMadeLinkDescription}>Source Code</p>
				</a>
				<a
					className={styles.howItsMadeLink}
					href="https://travishoki.com/storybook-static"
					{...linkProps}
				>
					<FontAwesomeIcon icon={faBook} />
					<p className={styles.howItsMadeLinkLabel}>Storybook</p>
					<p className={styles.howItsMadeLinkDescription}>Component Library</p>
				</a>
			</div>
		</section>
	);
};
