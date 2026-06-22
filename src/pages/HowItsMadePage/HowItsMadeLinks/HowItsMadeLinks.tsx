import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import styles from './HowItsMadeLinks.module.scss';

export const HowItsMadeLinks = () => {
	return (
		<section className="primary-three">
			<div className={styles.howItsMadeLinks}>
				<ExternalLink
					className={styles.howItsMadeLink}
					href="https://github.com/travishoki/travishoki-react"
				>
					<FontAwesomeIcon icon={faGithub} />
					<p className={styles.howItsMadeLinkLabel}>Github</p>
					<p className={styles.howItsMadeLinkDescription}>Source Code</p>
				</ExternalLink>
				<ExternalLink
					className={styles.howItsMadeLink}
					href="https://travishoki.com/storybook-static"
				>
					<FontAwesomeIcon icon={faBook} />
					<p className={styles.howItsMadeLinkLabel}>Storybook</p>
					<p className={styles.howItsMadeLinkDescription}>Component Library</p>
				</ExternalLink>
			</div>
		</section>
	);
};
